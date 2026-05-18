# @dfo/components

A collection of frontend components and building blocks for Direktoratet for forvaltning og Økonomistyring (DFØ).

The library is maintained for legacy purposes and is not actively integrated into new projects.

The components are built with react and SCSS. The components are documented using storybook. 

To start it, run `npm start storybook` after you've cloned the repository and installed the [storybook] dependencies.

To build local package, run `npm run pack:lib:local`.

To import package into your project, run `npm install <your-local-path>/dfo-storybook/dfo-components-10.0.0-beta.tgz --force`. Adjust <your-local-path> and the package name/version as needed.

## <span style="color: red;">NOT-UPDATED-TO-SB10</span>

<span style="color: red;">
The ReadMe text below is not updated for the new Storybook 10 version of `@dfo/components v10+`. Hence the text is put in light grey.

`@dfo/components` is currently _not_ published to npm, but instead made for local build and import of the library package.
</span>

<span style="color: lightgrey;">
A collection of frontend components and building blocks for Direktoratet for forvaltning og Økonomistyring (DFØ).

[![Build Status](https://travis-ci.com/netliferesearch/dfo-storybook.svg?branch=master)](https://travis-ci.com/netliferesearch/dfo-storybook)
[![npm version](https://badge.fury.io/js/%40dfo%2Fcomponents.svg)](https://badge.fury.io/js/%40dfo%2Fcomponents)

The components are built with react and SCSS. The components are documented using [storybook](https://storybook.js.org/). To start it, run `npm start storybook` after you've cloned the repository and installed the \[storybook\] dependencies.

The documentation is deployed to https://komponenter.dfo.no.

See also documentation chapters:

1. [How to use components in your project](docs/using-components.md).
1. [Developing new components](docs/developing-components.md).

## 🥁 Publishing new versions to NPM

When you want to release a new version of `@dfo/components` on npm, go to your terminal, navigate to the repo root and do `npm run release` and follow the instructions. Be sure to check if the new version [complies with the rules](docs/developing-components.md#-code-rules-and-guidelines).

## 🚀 Deploying the storybook

This project is hosted on DFØ's server. To access this you need to connect with a VPN client. Talk to Netlife Design and DFØ about getting access to deploy.

Before deploying you need to add git remotes for staging and production. Pushing to these remotes will trigger a build on DFØ's server. Don't forget to push your changes to GitHub as well.

Remotes:

- Staging: ssh://kom@test.dfo.no:/home/kom/git/dfo-storybook
- Production: ssh://kom@dfo.no:/home/kom/git/dfo-storybook

## 🦹 Handling security vulnerabilities

Github and NPM will periodically notify us of security vulnerabilities in this codebase. Most of it are irrelevant vulnerabilities, located in outdated examples or within devDependencies related to local development with Storybook. Because we deploy Storybook as flat files running on Nginx the attack surface of the deployed code is actually very small.

Run `npm audit --production` to scan for any vulnerabilities that may affect consumers of this library.
</span>