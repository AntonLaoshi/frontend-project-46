install:
	npm ci

publish:
	npm publish --dry-run

gendiff:
	node bin/gendiff.js

lint:
	npx eslint

test:
	npm run test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: test