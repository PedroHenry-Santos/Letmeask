include .env.local

release:
	GITHUB_TOKEN=${GITHUB_TOKEN} yarn release
