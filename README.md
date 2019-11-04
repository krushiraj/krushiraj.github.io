# Krushi Raj Tula - portfolio.

This repository is for my portfolio, which is hosted using __Github Pages__ at [`krushiraj.github.io`](https://krushiraj.github.io)

This repo has two projects:
  - Main portfolio site ([Portfolio](https://krushiraj.github.io)) and
  - Mini Terminal project ([Mini Terminal](https://krushiraj.github.io/mini-terminal))

## Project structure and directories

  - `portfolio` this directory is for main portfolio. This is created using [Gatsby](https://gatsbyjs.org).
  - `terminal-app` this directory contains the files related to Mini Terminal project and it is only dependent on [Vue.js](https://vuejs.org/). Everything else which is required for the terminal editor, command parser and executor are implemented from scratch using my own strategies and data structures.
  - `resume` this directory contains my resume files and will be used during deployment.

## Setting up the project

  - Run `npm i` or `yarn` command in root directory of this repo and in `portfolio` and `terminal-app` directories.
  - `npm run deploy` - builds the site and deploys it on github pages.

### Setting up Portfolio project

  - Make sure you have installed all dependencies.
  - `npm run start` - starts a development server
  - `npm run build` - builds all files required for production

### Setting up Mini Terminal Project

  - Make sure you have installed all dependencies.
  - `npm run serve` - starts a development server
  - `npm run build` - builds all files required for production

### Credits and inspirations

> Theme for portfolio is inspired from [Aravind Balla](https://github.com/aravindballa)'s [portfolio](http://aravindballa.com).