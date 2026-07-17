# Medi

Medi is an Angular 17 application with server-side rendering support. The project uses Angular Material and Bootstrap for the user interface and Express for the SSR server.

## Requirements

- Node.js 20.9 or newer within the Node 20 LTS line
- npm 10 or newer

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

The GitHub Actions workflow installs dependencies, performs a production build, runs the headless test suite, and fails on high-severity dependency vulnerabilities.

## Project status

This repository is under active modernization. Dependency updates should be reviewed together with the generated `package-lock.json`, and all CI checks must pass before changes are merged.
