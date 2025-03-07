# Executables (local)
DOCKER_COMP_EXEC := docker compose
ASK_CONFIRMATION := "read -p '\e[31mThis Makefile is meant to be used in a development environment, are you sure you want to continue? (y/n)\e[0m ' REPLY; \
    [ "\$$REPLY" = "y" ] \
    || exit 0; $(DOCKER_COMP_EXEC)"
DOCKER_COMP := $(shell [ "${APP_ENV}" = "prod" ] && echo $(ASK_CONFIRMATION) || echo $(DOCKER_COMP_EXEC))
NODE_ENV ?= development

# Misc
.DEFAULT_GOAL = help

##
## ——————————————————————————— 📜 START OF HELP 📜 ——————————————————————————————
##
## List of commands available
##

help:
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(firstword $(MAKEFILE_LIST)) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'
##
## —— Docker 🐳 ————————————————————————————————————————————————————————————————
##
init: ## Builds the Docker images and start them in detach mode
	@$(DOCKER_COMP) up app-dev --build -d 

build: ## Builds the Docker images
	@$(DOCKER_COMP) build app-dev

up: ## Start the docker hub in detached mode (no logs)
	@$(DOCKER_COMP) up app-dev -d

down: ## Stop the docker hub
	@$(DOCKER_COMP) down

logs: ## Show live logs
	@$(DOCKER_COMP) logs --tail=0 --follow 

prod: ## Run the app in production
	@$(DOCKER_COMP) up app --build
##
## —— Drizzle ORM 💾 ————————————————————————————————————————————————————————————
##
db-push: ## Apply changes to the database
	@$(DOCKER_COMP) exec app-dev npx drizzle-kit push --config=./src/config/drizzle.config.ts

db-generate: ## Generate migrations
	@$(DOCKER_COMP) exec app-dev npx drizzle-kit generate --config=./src/config/drizzle.config.ts
	
db-migrate: ## Apply migrations
	@$(DOCKER_COMP) exec app-dev npx drizzle-kit migrate --config=./src/config/drizzle.config.ts

db-pull: ## Pull database
	@$(DOCKER_COMP) exec app-dev npx drizzle-kit db --config=./src/config/drizzle.config.ts

##
## ——————————————————————————— 📜 END OF HELP 📜 —————————————————————————————————
##