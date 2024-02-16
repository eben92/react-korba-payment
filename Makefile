deploy:
	@npm run build
	@npm publish --access public

format:
	npm run format

lint:
	npm run lint
