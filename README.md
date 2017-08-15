# Resin.io TS typings for external packages

This repository contains the resin.io-created TS typings for external npm packages.
They're published as individual packages as `@resin.io/types-<package>`.

These typings are not guaranteed to be complete as they're created primarily to serve the
resin.io internal needs.

As the typings here reach commpletion they may eventually be moved to DefinitelyTyped
or PRed to the original projects.

## Developing

This is a monorepo using [Lerna](https://lernajs.io/). Read its docs for usage instructions.

## Conventions

When adding the new package follow these rules:

1. The packages are located in the `packages` folder. Each package is then inividually published to NPM.
1. The folder name is `<package>` where the `<package>` is the name of the original npm packages we're building typings for.
1. The folder must contain the following files:
	- `index.d.ts` - the typings themselves,
	- `package.json` with the following fields:
		- `"name": "@resin.io/types-<package>"`
		- `"version"` - equal to the current version of the original package,
		- `"dependencies"` - any `@types` these typings depend on (`import` from them),
		- `"devDependencies"` - any packages needed for testing, as the very least it needs to include the original package **locked to the specific version**,
		- `"scripts"` - define `test` script to be used before publishing,
		- `"types": "index.d.ts"`.
	- `test-<package>.ts` - a file importing the original package and making use of the typed APIs. If it compiles the tests are considered passing. The simplest form is just importing the package.
	- `.npmignore` to ignore publishing the tests and build artifatcs.
	- `tsconfig.json`.
	- `tslint.json`, only if you want to override the defaults from the top-level config.
	- `README.md`.

Check the existing packages for examples.