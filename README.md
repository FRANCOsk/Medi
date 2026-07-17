# Medi

Medi is an Angular 17 demonstration application using Angular Material, Bootstrap and server-side rendering support.

## Technology stack

- Angular 17
- Angular Material and CDK
- Bootstrap 5
- RxJS 7
- TypeScript 5
- Angular SSR with Express

## Requirements

- Node.js 20 LTS
- npm 10 or newer

## Local development

```bash
npm ci
npm start
```

Open `http://localhost:4200` in a browser. The development server reloads automatically when source files change.

## Production build

```bash
npm run build
```

The generated application is written to `dist/medi`.

## Server-side rendering

After a successful production build, start the SSR server with:

```bash
npm run serve:ssr:medi
```

## Tests

Run the Angular test suite locally with:

```bash
npm test
```

## Continuous integration

GitHub Actions installs dependencies from the committed lock file, builds the production bundle and checks production dependencies for high-severity vulnerabilities. Dependabot checks npm and GitHub Actions dependencies weekly.

## Production notes

Before deploying, configure environment-specific API endpoints outside the source code, review browser compatibility, enable HTTPS and validate SSR behavior in the target hosting environment.
