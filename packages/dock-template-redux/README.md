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
To enable real time code linting and formatting while coding, this template
recommends installing the ESLint and Prettier plugins for VSCode. The 
recommendation is enforced via the [extensions](.vscode/extensions.json) file.

## Configure Node
When starting a new project, it's best to to use the latest Long Term Support 
(LTS) version of Node JS. Furthermore, after installing node it's recommended to 
check for bundled package manager (npm) upgrades. 

The best way, to manage multiple Node versions on Mac OS and Linux is by 
installing [Node Version Manager](https://github.com/nvm-sh/nvm) (nvm). It even 
has a convenient configuration file `.nvmrc` to avoid typing the desired version
every time a new terminal is opened. It's also possible to set default version 
for new terminal windows:

```shell
nvm alias default 20 # aka lts/iron
```

VSCode also depends on Node JS to execute some plugins. Latest versions of
linters and formatters might crash on legacy Node JS versions. To ensure correct
plugin execution environment this template includes a 
[launch config](.vscode/launch.json).

When creating this template, the LTS version was lts/iron (v20) and npm version 
was v10.2.5. The template was tested to be compatible with these versions. 
Finally, new Node.js versions are released every 6 months. This template should 
be updated to the latest LTS version, when a new one is released.

## Pick a Package Manager
Yarn was the first to introduce a usable lock file and workspaces but NPM has 
quickly caught up. At the time of writing, the only meaningful difference 
between Yarn and NPM is that Yarn has “Plug ‘n Play.” (PnP) mode that eliminates
 `node_modules` folder. Unfortunately, upon close inspection, it doesn’t quite 
 live up to its name, “Plug ‘n Play.” Executing `yarn init -2` will create many 
 files and directories, all of which must be committed. Furthermore, a 
 [VSCode plugin](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs)
 is required to browse the compressed package store and additional patches are 
 needed to make TypeScript work. In contrast, running `npm init` results in one 
 file: `package.json`. For configuration simplicity sake, this template is based
 on NPM.

## Pick a Language
The default language of the web is, obviously, JavaScript. It has improved over 
the years, however, it's still dynamically typed. Dynamic typing simplifies 
onboarding, however, as the application grows, maintainability becomes relevant.
Quality assurance becomes harder, because type errors can only be caught at 
runtime. This template is intended for long-term projects, therefore, it uses
[TypeScript](https://www.typescriptlang.org/).

TypeScript requires a compiler. The official Microsoft compiler is called `tsc`.
It is used for type checking during development, however, the bundler of choice
doesn't use it for building, because of performance reasons. More on the bundler
choice later.

TypeScript requires type definitions for third party libraries. These are 
specified in `package.json` under the `@types/` namespace.

## Pick a Linter
Common code quality issues are extensively documented and can be fixed with a 
linter. The most popular linter for JavaScript is ESLint. ESLint is also the 
recommended way to lint TypeScript. To enable TS support 
[a plugin](https://typescript-eslint.io/) must be installed. The plugin has two 
modes: type-aware and type-ignorant. On one hand, the type-aware mode is more 
accurate, on the other hand, it is slower. This template prioritizes code
quality, therefore, the type-aware mode is used.

The whole project can be linted manually by running `npm run lint`. The command
will also fix some issues automatically.

# Pick a Formatter
At the time of writing, the most popular code formatter for JavaScript is
Prettier. According to its maintainers, it was designed to be opinionated.
In practice it means its users must accept an intentionally limited
configuration. The philosophy of this template is that formatting details, like 
number of spaces, don't matter as much consistency. That's why the default
options are used by omitting the configuration file.

Don not confuse linting and formatting. ESlint is mainly used to identify code
quality issues, while Prettier is used to enforce code style. The two tools can
clash, because ESLint does include some formatting rules. To avoid the overlap,
Prettier provides an ESLint plugin, which disables ESLint's formatting rules.

The source folder can be formatted by running `npm run format`.

## Enforce Code Quality
This template runs linting and formatting on every commit, to ensure code issues
don't slip through. This is done in a pre-commit hook. A library called
[Husky](https://typicode.github.io/husky) is used to manage the hooks. An 
additional plugin, called
[lint-staged](https://www.npmjs.com/package/lint-staged), was installed 
to filter out files that are not staged. `lint-staged` can run commands in
parallel. This feature [was disabled](./.husky/pre-commit), because linting and 
formatting must run in sequence. Finally execution order matters. Prettier is 
ran after ESLint, because formatting potentially buggy code is redundant. 

## Pick a Bundler
Remembering the Webpack days, the configuration file would become
overcomplicated. One of the reasons is  plugin management. Everything, except 
code, required a plugin: CSS, images, fonts. Rollup, seems to follow the same 
philosophy: minimal core, extendable with plugins. Customizing the build is not 
a priority for this template. The goal is to focus on application development, 
therefore, Parcel is used. Parcel's vision is "Zero Config". Int can handle most
use cases, without a configuration file, or plugins, including TypeScript, CSS, 
images, fonts, and more. As mentioned before it can transpile TypeScript to 
JavaScript, without using Microsoft's `tsc`. It's own compiler is much faster,
because it doesn't do type checking.

## Pick a Framework
Several libraries are composed to form a framework: React, React Router, Redux
and Redux Toolkit, simply because, the author feels most comfortable around
these technologies.

## Pick A Graphical User Interface
Adobe's Spectrum design system and components are used. There are several
reasons:
- The components are open-source and free
- The components are accessible
- The components are implemented in React

For additional customization and layout options, predefined CSS classes from
Tailwind are used.