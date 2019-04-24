# Resin.io TS typings for external packages

This repository contains the resin.io-created TS typings for external npm packages.
They're published as individual packages as `@balena.io/types-<package>`.

These typings are not guaranteed to be complete as they're created primarily to serve the
resin.io internal needs.

As the typings here reach completion they may eventually be moved to DefinitelyTyped
or PRed to the original projects.

## Developing

This is a monorepo using [Lerna](https://lernajs.io/). Read its docs for usage instructions.

Use the `sample-package` folder as a template for the new folder under `packages`.

### Publishing

Use `lerna publish` to publish all the packages with unreleased changes.

**One tricky part** is that we want the typings version to exactly match the version of the original package.
It has two implications:
1) DO NOT manually set the version in the package.json files,
2) When having the intractive lerna menu for the version selection please pick the custom option
and provide the version by hand.

## Conventions

When adding the new package follow these rules:

1. The packages are located in the `packages` folder. Each package is then inividually published to NPM.
1. The folder name is `<package>` where the `<package>` is the name of the original npm packages we're building typings for.
1. The folder must contain the following files:
	- `index.d.ts` - the typings themselves,
	- `package.json` with the following fields:
		- `"name": "@balena.io/types-<package>"`
		- `"version"` - equal to the current version of the original package,
		- `"dependencies"` - any `@types` these typings depend on (`import` from them, or have a triple-slash ref to them),
		- `"devDependencies"` - any packages needed for testing, as the very least it needs to include the original package **locked to the specific version**,*Note*: you **don't need** to include `typescript`, `tslint`, or `require-npm4-to-publish` as they're already the top-level repo-wide dependencies,
		- `"scripts"` - here's the typical scripts section:
			```json
			"scripts": {
				"test": "tslint **/*.ts && tsc",
				"prepublish": "require-npm4-to-publish",
				"prepublishOnly": "npm run test"
			}
			```
		- `"types": "index.d.ts"`.
	- `test-<package>.ts` - a file importing the original package and making use of the typed APIs. If it compiles the tests are considered passing. The simplest form is just importing the package.
	- `.npmignore` to ignore publishing the tests and repo noise.
	- `tsconfig.json`.
	- `tslint.json`, only if you want to override the defaults from the top-level config.
	- `README.md`.

Check the existing packages for examples.

You can use the `sample-package` folder as a template.
