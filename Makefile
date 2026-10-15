# Common tasks for working on the checklist and the website.
# Run `make` to see what's available. Dependencies install themselves.
# The website's full set of scripts lives in web/package.json.

PY := .venv/bin/python

.DEFAULT_GOAL := help
.PHONY: help validate generate web.dev web.build web.check

help: ## List these commands
	@awk -F':.*## ' '/^[a-z.-]+:.*## /{printf "  make %-10s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

validate: .venv ## Check your checklist edits against lib/schema.json
	$(PY) lib/validate.py

generate: .venv ## Rebuild CHECKLIST.md from the checklist YAML
	$(PY) lib/generate.py

web.dev: web/node_modules ## Run the website locally, with hot reloading
	cd web && yarn dev

web.build: web/node_modules ## Build the static website into web/dist
	cd web && yarn build.ssg

web.check: web/node_modules ## Run what CI checks on the website
	cd web && yarn fmt.check && yarn lint && yarn build.types && yarn build.ssg

.venv: lib/requirements.txt
	python3 -m venv $@
	$(PY) -m pip install -qU pip -r lib/requirements.txt
	@touch $@

web/node_modules: web/package.json web/yarn.lock
	cd web && yarn install
	@touch $@
