# React Typescript SPA Starter

A modern React single-page application starter.

## Features

- React 19 with TypeScript 6
- Vite for development and production builds
- Vitest for testing
- Tailwind CSS for styling
- ESLint 10 flat config with TypeScript, React, and accessibility rules
- Prettier for formatting
- pnpm for package management
- EditorConfig

## Installation

### Prerequisites

- Node.js LTS
- pnpm
- Git

### Downloading

#### Method 1: Releases

Download and unzip into your empty project directory.

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

1. Install dependencies with `pnpm install`
2. Start the app with `pnpm run dev`

The dev server will open at `http://localhost:5173` by default.

### Commands

| command         | action                                                 |
| --------------- | ------------------------------------------------------ |
| `dev` / `start` | Starts the Vite dev server with hot module replacement |
| `build`         | Type-checks and builds the app for production          |
| `preview`       | Serves the production build locally                    |
| `test`          | Runs the test suite once                               |
| `test:watch`    | Runs the test suite in watch mode                      |
| `types`         | Runs TypeScript type-checking once                     |
| `lint`          | Runs ESLint                                            |
| `lint:fix`      | Runs ESLint and fixes auto-fixable issues              |
| `format`        | Formats files with Prettier                            |
| `format:check`  | Checks that files are formatted with Prettier          |

The `build` command runs type-checking first, so it will fail if any TypeScript errors are present. This is useful for CI.
