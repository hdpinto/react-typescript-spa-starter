# React Typescript SPA Starter

## Features

- Sensible ESLint Rules with prettier and typescript defaults
- Sass & autoprefixer
- Babel 7
- Webpack & Webpack dev server
- Typescript
- Editorconfig
- Bulma CSS

## Installation

### Prerequisites

- NodeJS
- Git

### Downloading

#### Linux

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

#### Windows

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

### Usage

1. Install dependences with `npm install`
2. Start the app with `npm run start:dev`

### Commands

| command     | action                                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| `start:dev` | Starts up the webpack dev server and serves your app on http://localhost:9001, watches code and hot-reloads  |
| `watch:dev` | Watches your code for changes and builds the bundle, no webpack dev server. Good if you have your own server |
| `build:dev` | Builds your app once                                                                                         |
| `build`     | Builds your app with the production flag                                                                     |
| `test`      | Runs tests (to do)                                                                                           |