#!/usr/bin/env bash
# Smoke tests a built image: runs it locked down, then checks the whole site is served correctly
# Usage: docker/test.sh [image]   (defaults to personal-security-checklist)
set -eu

IMAGE="${1:-personal-security-checklist}"
NAME="psc-test-$$"
failures=0

pass() { echo "  ✅ $1"; }
fail() { echo "  ❌ $1"; failures=$((failures + 1)); }
check() { if eval "$2"; then pass "$1"; else fail "$1"; fi; }

status() { curl -s -o /dev/null -w '%{http_code}' "$BASE$1"; }
body() { curl -s "$BASE$1"; }
header() { curl -s -o /dev/null -D - "${@:3}" "$BASE$1" | tr -d '\r' | grep -i "^$2:" | cut -d' ' -f2-; }
health() { docker inspect -f '{{if .State.Health}}{{.State.Health.Status}}{{end}}' "$NAME"; }

trap 'docker rm -f "$NAME" >/dev/null 2>&1 || true' EXIT

echo "🐳 Starting $IMAGE (read-only, no capabilities)"
docker run -d --name "$NAME" -p 127.0.0.1::8080 \
  --read-only --tmpfs /tmp --cap-drop ALL --security-opt no-new-privileges \
  "$IMAGE" >/dev/null
BASE="http://$(docker port "$NAME" 8080/tcp | head -1)"

for _ in $(seq 30); do
  [ "$(health)" = healthy ] && break
  [ "$(docker inspect -f '{{.State.Running}}' "$NAME")" = true ] || break
  sleep 1
done

echo "🩺 Container"
check "Reports healthy" '[ "$(health)" = healthy ]'
check "Runs as a non-root user" '[ "$(docker exec "$NAME" id -u)" != 0 ]'
check "Cannot modify the site it serves" '! docker exec "$NAME" touch /usr/share/nginx/html/index.html 2>/dev/null'

echo "📄 Pages"
pages=()
while IFS= read -r page; do pages+=("$page"); done \
  < <(body /sitemap.xml | grep -o '<loc>[^<]*</loc>' | sed -E 's#</?loc>##g; s#^https?://[^/]+##')
check "Sitemap lists the site's pages (${#pages[@]} found)" '[ "${#pages[@]}" -gt 5 ]'
broken=()
for page in "${pages[@]}"; do [ "$(status "$page")" = 200 ] || broken+=("$page"); done
check "Every page in the sitemap loads" '[ "${#broken[@]}" -eq 0 ] || { echo "     ${broken[*]}"; false; }'
check "Checklist sections include their content" 'body /checklist/web-browsing/ | grep -qi "browser"'
missing=()
for page in "${pages[@]}"; do
  case "$page" in /article/?*) body "$page" | grep -q "Article Not Found" && missing+=("$page") ;; esac
done
check "Articles were fetched and prerendered" '[ "${#missing[@]}" -eq 0 ] || { echo "     ${missing[*]}"; false; }'
check "Pages load without a trailing slash" '[ "$(status /checklist)" = 200 ]'
check "Unknown pages return the 404 page" '[ "$(status /no-such-page)" = 404 ] && body /no-such-page | grep -q "404"'

echo "📦 Assets"
bundle=$(body / | grep -o '/build/q-[A-Za-z0-9_-]*\.js' | head -1)
check "Script bundles load ($bundle)" '[ -n "$bundle" ] && [ "$(status "$bundle")" = 200 ]'
for file in /personal-security-checklist.yml /manifest.json /robots.txt /favicon.png /fonts/poppins-400.woff2; do
  check "Serves $file" '[ "$(status "$file")" = 200 ]'
done
check "Serves the checklist data as YAML" 'header /personal-security-checklist.yml content-type | grep -q "^text/yaml"'

echo "📨 Headers"
check "Pages are always revalidated" 'header / cache-control | grep -q "max-age=0, must-revalidate"'
check "Hashed bundles are cached as immutable" 'header "$bundle" cache-control | grep -q immutable'
check "Text is served gzipped" 'header / content-encoding -H "Accept-Encoding: gzip" | grep -q gzip'
check "Sets security headers" 'header / x-content-type-options | grep -q nosniff && header / referrer-policy | grep -q .'
check "Hides the nginx version" '! header / server | grep -q "[0-9]"'

echo "📜 Logs"
# QEMU lacks Linux AIO, so emulated images log io_setup() failures, which nginx then works around
check "No errors were logged" '! docker logs "$NAME" 2>&1 | grep -E "\[(emerg|alert|crit|error)\]" | grep -v "io_setup() failed"'

echo
if [ "$failures" -gt 0 ]; then
  echo "💥 $failures check(s) failed"
  docker logs "$NAME" 2>&1 | tail -20
  exit 1
fi
echo "🎉 All checks passed"
