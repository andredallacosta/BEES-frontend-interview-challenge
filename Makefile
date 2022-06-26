lint:
	./node_modules/.bin/eslint ./src --fix

run:
	docker-compose up

local-run:
	npm start
