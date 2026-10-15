# syntax=docker/dockerfile:1

# Builds the Digital Defense website, and serves it with nginx (as non-root, on port 8080)
# Run from the repo root, which is the build context:
#   docker build -f docker/Dockerfile -t personal-security-checklist .
#   docker run -p 8080:8080 personal-security-checklist

# Build the static site. The output is identical for every platform, so this stage
# runs natively on the build machine, and is shared by all target architectures
FROM --platform=$BUILDPLATFORM node:24.21.0-alpine@sha256:ebfe2f90462722a7a4de65e91990e97fe0d401c70e0e762c5b53302f905ec1c1 AS build
WORKDIR /app/web

# Install dependencies first, so that layer is reused until the lockfile changes
COPY web/package.json web/yarn.lock ./
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn,sharing=locked \
    yarn install --frozen-lockfile --non-interactive --ignore-scripts

# Copy only what the build needs (so no .dockerignore is needed to keep out
# node_modules, build output or secrets). The checklist data lives in the repo root
COPY personal-security-checklist.yml /app/
COPY web/tsconfig.json web/vite.config.mts web/postcss.config.js ./
COPY web/adapters/static adapters/static
COPY web/public public
COPY web/src src

RUN yarn build.ssg

# Serve the site with nginx. This stage only copies files in (no RUN), so it needs
# no emulation when building for other architectures
FROM nginxinc/nginx-unprivileged:1.31.6-alpine-slim@sha256:ac4d9c7e457c6510b95ac72dd84b27f7cc68ecb9a83fbd44f05a6460cf08aba4

LABEL org.opencontainers.image.title="Personal Security Checklist" \
      org.opencontainers.image.description="The Digital Defense website: 300+ tips for protecting your digital security and privacy" \
      org.opencontainers.image.url="https://digital-defense.io" \
      org.opencontainers.image.source="https://github.com/lissy93/personal-security-checklist" \
      org.opencontainers.image.licenses="MIT AND CC-BY-4.0"

ENV NGINX_ENTRYPOINT_QUIET_LOGS=1

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/web/dist /usr/share/nginx/html

# Files stay owned by root, so the server can read the site but not modify it
USER 101
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --start-interval=2s --retries=3 \
  CMD ["wget", "-q", "--spider", "http://127.0.0.1:8080/healthz"]
