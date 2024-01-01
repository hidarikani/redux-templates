# Template

```shell
# run once:
nvm install lts/iron
nvm install-latest-npm
# run every time:
nvm use # will use .nvmrc
```

```shell
npm install
npm run start # dev server
npm run build  # production build
npm run lint
```

# Reasoning Behind Technology Choices

## Pick an Integrated Development Environment
To enable real time code linting and formatting while coding, this template recommends installing the ESLint and Prettier plugins for VSCode. The recommendation is enforced via the [extensions](.vscode/extensions.json) file.

## Configure Node
New Node.js versions are released every 6 months. We want to use the latest LTS version. We also want to use the latest npm version. The best way, to manage Node versions on Mac OS and Linux is by installing Node Version Manager (nvm). It even has a convenient configuration file `.nvmrc` to avoid typing the desired version every time.

VSCode uses external Node.js runtime to execute some plugins. Two things can be done to ensure correct version. First, set default version for new terminal windows:

```shell
nvm alias default 20 # aka lts/iron
```

Second, set the version by creating a [launch config](.vscode/launch.json)

## Pick a Package Manager
Yarn was the first to introduce a usable lock file and workspaces but NPM has quickly caught up. At the time of writing, the only meaningful difference is that Yarn has “Plug ‘n Play.” (PnP) mode that eliminates `node_modules`. Unfortunately, upon close inspection, it doesn’t quite live up to its name, “Plug ‘n Play.” Executing `yarn init -2` will create many files and directories, all of which must be committed. Furthermore, a VSCode plugin is required to browse the compressed package store and additional patches are needed to make TypeScript work. In contrast, running `npm init` results in one file: `package.json`.

## Pick a Language
The default language of the web is, obviously, JavaScript. It has improved over the years, however, it's still dynamically typed. Dynamic typing simplifies onboarding, however, as the application grows, maintainability becomes relevant. Quality assurance becomes harder, because type errors can only be caught at runtime. This template is meant to be scalable, therefore, it uses [TypeScript](https://www.typescriptlang.org/).

TypeScript requires a compiler. The official Microsoft compiler is called `tsc` can be used. It is used for type checking during development, however, the bundler of choice doesn't use it, because of performance reasons.

TypeScript requires type definitions for third party libraries. These are specified in `package.json` under the `@types/` namespace.

## Pick a Linter
Common code quality issues are extensively documented and can be solved with a linter. The most popular linter for JavaScript is ESLint. ESLint is also the recommended way to lint TypeScript. To enable TS support [a plugin](https://typescript-eslint.io/) must be installed. The plugin has two modes: type-aware and type-ignorant. On one hand, the type-aware mode is more accurate, on the other hand, it is slower. This template prioritizes code quality, therefore, the type-aware mode is used.

# Pick a Formatter
TBD

## Enforce Code Quality
This template runs linting and formatting on every commit, to ensure code issues don't slip through. This is done in a pre-commit hook. A library called [Husky](https://typicode.github.io/husky) is used to manage the hooks. An  [additional plugin](https://www.npmjs.com/package/lint-staged) was installed to filter out files that are not staged.

The whole project can be linted manually by running `npm run lint`. The command will also fix some issues automatically.

## Pick a Framework
In this template, a framework is composed out several libraries: React, Redux, React Router, and Redux Toolkit, simply because, the author feels most comfortable with them.

## Pick a Bundler
Remembering the Webpack days, the configuration file would become overcomplicated. One of the reasons is  plugin management. Everything, except code, required a plugin: CSS, images, fonts. Rollup, seems to follow the same philosophy: minimal core, extendable with plugins. Customizing the build is not a priority for this template. The goal is to focus on application development,therefore, Parcel is used. Parcel's vision is "Zero Config". Int can handle most use cases, without a configuration file, or plugins, including TypeScript, CSS, images, fonts, and more.