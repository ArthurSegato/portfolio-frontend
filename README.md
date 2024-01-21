[![Website](.github/assets/banner.svg)](https://arthursegato.dev)
[![Uptime](https://img.shields.io/website?url=https%3A%2F%2Farthursegato.dev)](https://img.shields.io/website?url=https%3A%2F%2Farthursegato.dev)
[![HSTS Status](https://img.shields.io/hsts/preload/arthursegato.dev)](https://img.shields.io/hsts/preload/arthursegato.dev)
[![Mozilla HTTP Observatory](https://img.shields.io/mozilla-observatory/grade/arthursegato.dev?publish)](https://img.shields.io/mozilla-observatory/grade/arthursegato.dev?publish)
[![bun-build](https://github.com/ArthurSegato/portfolio-frontend/actions/workflows/workflow.yml/badge.svg)](https://github.com/ArthurSegato/portfolio-frontend/actions/workflows/workflow.yml)

[arthursegato.dev](https://www.arthursegato.dev/) serves as my portfolio, I usually rebuild it every time I learn a new web tech for testing purposes.

It's (now) build with Qwik/Tailwind and deployed across the Vercel Edge network.

## Requirements

- Node v21.6.0 or above _(bun has a breaking bug)_

## Environment variables

.env variables for this project:

```Properties
WEBHOOK_DISCORD=""
```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development

Start the development server on `http://localhost:5173`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

## Disclaimer

Below is a list of all the external assets used in the development of this website with their respective licenses.

- [Hero Icons](https://heroicons.com/) ([MIT](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE))
- [daisyUI](https://daisyui.com/) ([MIT](https://github.com/saadeghi/daisyui/blob/master/LICENSE))

## Contributors

- [@ArthurSegato](https://github.com/ArthurSegato)
