# vue_app

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Introduction](#introduction)
- [Run the project](#run-the-project)
- [Instructions on getting started w/ Vue-cli3, electron, vuetify](#instructions-on-getting-started-w-vue-cli3-electron-vuetify)
  - [Install vue-cli-3](#install-vue-cli-3)
  - [Setup the new project](#setup-the-new-project)
  - [Run the project](#run-the-project-1)
  - [Add deps](#add-deps)
- [References / Documentation](#references--documentation)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

This project is a template that is built using `vue-cli-3` which allows for the
use of Webpack, Vue, Vuetify (Material Design), and Electron (along w/ `lodash`,
and `axios`).

## Run the project

| Task | Command  |
|---|---|
| Project setup | `npm install`  |
| Compiles and hot-reloads for development | `npm run serve`  |
| Compiles and minifies for production | `npm run build` |
| Lints and fixes files | `npm run lint` |

## Instructions on getting started w/ Vue-cli3, electron, vuetify

### Install vue-cli-3
1. `fix-brew.sh`
1. [`npm install -g @vue/cli`](https://cli.vuejs.org/guide/installation.html)

### Setup the new project
1. [`vue create vue_app`](https://lobotuerto.com/blog/quickstart-guide-for-a-new-vuejs-project/)
1. **`cd vue_app`**
1. [`vue add electron-builder`](https://nklayman.github.io/vue-cli-plugin-electron-builder/)
1. [`vue add vuetify`](https://github.com/vuetifyjs/vue-cli-plugin-vuetify)

### Run the project
1. in electron - `npm run serve:electron`
1. in browser - `npm run serve`

### Add deps
1. `npm add axios lodash`
1. Use them by doing a simple import (eg in main.js, `import _ from 'lodash';`)

## References / Documentation
- [Step by step tutorial of using vue-cli, etc](http://tinyurl.com/ya8392qh)
- [Single file components (.vue files)](http://tinyurl.com/h8c9bbj)
- Developing apps generated by `vue-cli`
    - [HTML and Static assets](https://cli.vuejs.org/guide/html-and-static-assets.html)
    - [CSS preprocessors](https://cli.vuejs.org/guide/css.html)
    - [Webpack](https://cli.vuejs.org/guide/webpack.html)
    - [Deployment](https://cli.vuejs.org/guide/deployment.html#general-guidelines)
- [Tool for theming and customizing Vuetify](http://tinyurl.com/y9hsshmz)