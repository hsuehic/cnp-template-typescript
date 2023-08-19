<!--instructions-of-template--># cnp-template-typescript

> Template to kickstart creating a Node.js module using TypeScript and VSCode, used by [create-npm-packages](https://github.com/hsuehic/create-npm-packages#create-npm-packages)

Inspired by [node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate)

## Features

- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Changesets](https://github.com/changesets/changesets)
- [Issue Templates](https://github.com/hsuehic/typescript-npm-package-template/tree/main/.github/ISSUE_TEMPLATE)
- [GitHub Actions](https://github.com/hsuehic/typescript-npm-package-template/tree/main/.github/workflows)
- [Codecov](https://about.codecov.io/)
- [VSCode Launch Configurations](https://github.com/hsuehic/typescript-npm-package-template/blob/main/.vscode/launch.json)
- [TypeScript](https://www.typescriptlang.org/)
- [Husky](https://github.com/typicode/husky)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Getting started

### Set up your repository

**Click the "Use this template" button.**

Alternatively, create a new directory and then run:

```bash
npx create-npm-packages --template husehic/cnp-template-typescript --github-username=xxx
```

### Add NPM Token

Add your npm token to your GitHub repository secrets as `NPM_TOKEN`.

### Add Codecov integration

Enable the Codecov GitHub App [here](https://github.com/apps/codecov).

**Remove everything from here and above**

---
<!--instructions-of-template-->

# <!--package-name-->my-package-name<!--package-name-->

[![npm package][npm-img]][npm-url]
[![Downloads][downloads-img]][downloads-url]
[![Lint Status][lint-img]][lint-url]
[![Test Status][test-img]][test-url]
[![Build Status][build-img]][build-url]
[![Release Status][release-img]][release-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]

> My awesome module

## Install

```bash
npm install my-package-name
```

## Usage

```ts
import { myPackage } from 'my-package-name';

myPackage('hello');
//=> 'hello from my package'
```

## API

### myPackage(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### postfix

Type: `string`
Default: `rainbows`

Lorem ipsum.

<!--badge-variables-->
[lint-img]: https://github.com/hsuehic/cnp-template-typescript/actions/workflows/lint.yaml/badge.svg
[lint-url]: https://github.com/hsuehic/cnp-template-typescript/workflows/lint.yaml
[test-img]: https://github.com/hsuehic/cnp-template-typescript/actions/workflows/test.yaml/badge.svg
[test-url]: https://github.com/hsuehic/cnp-template-typescript/workflows/test.yaml
[build-img]: https://github.com/hsuehic/cnp-template-typescript/actions/workflows/build.yaml/badge.svg
[build-url]: https://github.com/hsuehic/cnp-template-typescript/workflows/build.yaml
[release-img]: https://github.com/hsuehic/cnp-template-typescript/actions/workflows/release.yaml/badge.svg
[release-url]: https://github.com/hsuehic/cnp-template-typescript/workflows/release.yaml
[downloads-img]: https://img.shields.io/npm/dt/cnp-teamplate-typescript
[downloads-url]: https://www.npmtrends.com/cnp-teamplate-typescript
[npm-img]: https://img.shields.io/npm/v/cnp-template-typescript
[npm-url]: https://www.npmjs.com/package/cnp-template-typescript
[issues-img]: https://img.shields.io/github/issues/hsuehic/cnp-template-typescript
[issues-url]: https://github.com/hsuehic/cnp-template-typescript/issues
[codecov-img]: https://codecov.io/gh/hsuehic/cnp-template-typescript/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/hsuehic/cnp-template-typescript
<!--badge-variables-->