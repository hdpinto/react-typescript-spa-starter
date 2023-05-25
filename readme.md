# React Typescript SPA Starter

A full-featured react SPA starter

## Features

- Sensible ESLint Rules with prettier and typescript defaults
- Sass & autoprefixer
- Babel 7
- Webpack & Webpack dev server
- Typescript
- Editorconfig
- Bulma CSS
- Tests using jest

## Installation

### Prerequisites

- NodeJS
- Git

### Downloading

#### Method 1: Releases

Just download and unzip into your empty project directory

- v0.2.2
  - [tar.gz](https://github.com/hdpinto/react-typescript-spa-starter/archive/v0.2.2.tar.gz)
  - [zip](https://github.com/hdpinto/react-typescript-spa-starter/archive/v0.2.2.zip)


#### Method 2: Using git
##### Linux
```bash
cd ~/projects # or wherever you want to create your project
mkdir my-app
git clone git@github.com:hdpinto/react-typescript-spa-starter.git my-app
cd my-app
# disassociate with this repo
rm -rf .git
# initialize your own repo
git init
```

##### Windows
```powershell
Set-Location ~\projects # or wherever you want to create your project
New-Item -ItemType Directory my-app
git clone git@github.com:hdpinto/react-typescript-spa-starter.git my-app
Set-Location my-app
# disassociate with this repo
Remove-Item -Force -Recurse .git
# initialize your own repo
git init
```

## Usage

1. Install dependences with `npm install`
2. Start the app with `npm run start:dev`

### Commands

| command      | action                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------ |
| `start:dev`  | Starts up the webpack dev server and serves your app on http://localhost:8080, watches code and hot-reloads  |
| `watch:dev`  | Watches your code for changes and builds the bundle, no webpack dev server. Good if you have your own server |
| `build:dev`  | Builds your app once                                                                                         |
| `build`      | Builds your app with the production flag                                                                     |
| `test`       | Runs tests                                                                                                   |
| `watch:test` | Runs all tests and watches for changes                                                                       |
| `types`      | Runs tsc to check types once                                                                                 |

Note that `start:dev`, `watch:dev`, and `build:dev` all typecheck by default do you do not need to run it separately if you are using one of these or their aliases: `start` or `watch`.

The command `build` will fail if typechecking finds a type error. This may or may not be desireable for CI. To avoid this in deployment use `build:ci` instead.

