# s-kybound.github.io

Kyriel Abad's personal portfolio — a terminal-themed static site.

## Stack

- **[Astro](https://astro.build)** — static site generator (zero client framework; ships no hydration JS).
- **TypeScript** — strict mode (`astro/tsconfigs/strict`).
- **JetBrains Mono** — self-hosted monospace typeface.
- Deployed to **GitHub Pages** via GitHub Actions.

## Development

Requires **Node 22.12+** (see `.nvmrc`). This project uses **Yarn** (classic).

```sh
yarn install     # install dependencies
yarn dev         # start the dev server at localhost:4321
yarn build       # build the production site to ./dist
yarn preview     # preview the production build locally
```

### Quality

```sh
yarn eslint      # lint with ESLint 9 (flat config)
yarn format      # format with Prettier 3
yarn format:ci   # check formatting without writing
```

Husky runs `lint-staged` on pre-commit and `format:ci` + lint on pre-push.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with
`withastro/action` on Node 22 and publishes `dist/` to GitHub Pages. The site is
served from the repository root (user page — no `base` path).
