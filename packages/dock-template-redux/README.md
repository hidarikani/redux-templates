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
npm run build 
```

# Plan

## Configure Node
New Node.js versions are released every 6 months. We want to use the latest LTS version. We also want to use the latest npm version. The best way, to manage Node versions on Mac OS and Linux is by installing Node Version Manager (nvm). It even has a convenient configuration file `.nvmrc` to avoid typing the desired version every time.

## Pick a Package Manager
Yarn was the first to introduce a usable lock file and workspaces but NPM has quickly caught up. At the time of writing, the only meaningful difference is that Yarn has “Plug ‘n Play.” (PnP) mode that eliminates `node_modules`. Unfortunately, upon close inspection, it doesn’t quite live up to its name, “Plug ‘n Play.” Executing `yarn init -2` will create many files and directories, all of which must be committed. Furthermore, a VSCode plugin is required to browse the compressed package store and additional patches are needed to make TypeScript work. In contrast, running `npm init` results in one file: `package.json`.

## Pick a Language
The default language of the web is, obviously, JavaScript. It has improved over the years, however, it's still dynamically typed. Dynamic typing simplifies onboarding, however, as the application grows, maintainability becomes relevant. Quality assurance becomes harder, because type errors can only be caught at runtime. This template is meant to be scalable, therefore, it uses TypeScript.

TypeScript requires a compiler. The official Microsoft compiler is called `tsc` can be used. It is used for type checking during development, however, the bundler of choice doesn't use it, because of performance reasons. 

## Pick a Framework
React is the default framework for this template.

## Pick a Bundler
Remembering the Webpack days, the configuration file would become overcomplicated. One of the reasons is  plugin management. Everything, except code, required a plugin: CSS, images, fonts. Rollup, seems to follow the same philosophy: minimal core, extendable with plugins. Customizing the build is not a priority for this template. The goal is to focus on application development,therefore, Parcel is used. Parcel's vision is "Zero Config". Int can handle most use cases, without a configuration file, or plugins, including TypeScript, CSS, images, fonts, and more.