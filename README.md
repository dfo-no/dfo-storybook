# @dfo/components

[![Build Status](https://travis-ci.com/netliferesearch/dfo-storybook.svg?branch=master)](https://travis-ci.com/netliferesearch/dfo-storybook)
[![npm version](https://badge.fury.io/js/%40dfo%2Fcomponents.svg)](https://badge.fury.io/js/%40dfo%2Fcomponents)

A collection of frontend components and building blocks for Direktoratet for forvaltning og Økonomistyring (DFØ). The components are built with react and SCSS. The components are documented using [storybook](https://storybook.js.org/). To start it, run `npm start storybook` after you've cloned the repository and installed the \[storybook\] dependencies.

The documentation is deployed to https://komponenter.dfo.no.

See also documentation chapters:
1. [How to use components in your project](docs/using-components.md).
1. [Developing new components](docs/developing-components.md).

## 🥁 Publishing new versions to NPM
When you want to release a new version of `@dfo/components` on npm, go to your terminal, navigate to the repo root and do `npm run release` and follow the instructions. 

## 🚀 Deploying the storybook

This project is hosted on DFØ's server. To access this you need to connect with a VPN client. Talk to Netlife Design and DFØ about getting access to deploy.

Before deploying you need to add git remotes for staging and production. Pushing to these remotes will trigger a build on DFØ's server. Don't forget to push your changes to GitHub as well.

Remotes: 
- Staging: ssh://kom@**test.**dfo.no:/home/kom/git/dfo-storybook
- Production: ssh://kom@dfo.no:/home/kom/git/dfo-storybook

## 🦹 Handling security vulnerabilities

Github and NPM will periodically notify us of security vulnerabilities in this codebase. Most of it are irrelevant vulnerabilities, located in outdated examples or within devDependencies related to local development with Storybook. Because we deploy Storybook as flat files running on Nginx the attack surface of the deployed code is actually very small.

Run `npm audit --production` to scan for any vulnerabilities that may affect consumers of this library.
