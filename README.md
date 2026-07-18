# Medi

Medi is an Angular 17 LTS application with server-side rendering support. It uses Angular Material and Bootstrap for the user interface and Express 4 for the SSR server.

## Requirements

- Node.js 20 LTS
- npm 9 or newer

## Local development

```bash
npm install
npm start
```

Open `http://localhost:4200` in a browser.

## Production build

```bash
npm run build:production
```

The generated browser and server bundles are written to `dist/medi`.

## Tests and security checks

```bash
npm run test:ci
npm run audit:ci
```

The GitHub Actions workflow installs dependencies, performs a production build, runs the headless test suite, and fails on high-severity production dependency vulnerabilities.

## Project status

This repository is under active modernization. Dependency changes must pass the production build, unit tests, and dependency audit before they are merged.
