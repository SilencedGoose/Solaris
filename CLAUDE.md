# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Solaris Li's personal portfolio website — a single-page SvelteKit site showing an intro, work history, and projects over an animated Vanta.js/Three.js background. Live at https://solarisli.dev/.

## Commands

```bash
npm run dev              # start dev server (vite dev)
npm run build             # production build (adapter-static output -> docs/)
npm run preview           # preview the production build
npm run test              # run Playwright e2e tests (builds + previews the app first, port 4173)
npm run check              # svelte-kit sync + svelte-check type checking
npm run check:watch       # svelte-check in watch mode
npm run lint               # prettier --check . && eslint .
npm run format              # prettier --write .
```

To run a single Playwright test, use Playwright's own CLI filters, e.g. `npx playwright test -g "home page has expected h1"`.

There is no separate lint-fix script for ESLint issues; only `format` auto-fixes (Prettier). Fix ESLint errors manually.

## Architecture

- **Framework**: SvelteKit (Svelte 5) with `@sveltejs/adapter-static`. The whole site is a single prerendered page — there is no server-side backend or API.
- **Build output**: `svelte.config.js` configures the static adapter to write to `docs/` (not the default `build/`) so GitHub Pages can serve directly from that folder. In production the base path is set to `/solaris` (`paths.base` in `svelte.config.js`, driven by `NODE_ENV`).
- **Single route**: `src/routes/+page.svelte` is the entire site. `src/routes/+layout.js` sets `prerender = true`; the page itself sets `export const ssr = false` because the animated background depends on `three`/`vanta`, which require the DOM and cannot run during SSR/prerendering.
- **Background effect**: The Vanta "NET" effect (from `vanta/dist/vanta.net.min`) is dynamically imported and initialized in `onMount`, bound to the `#main` element, and torn down in `onDestroy`. `three` is imported with `// @ts-ignore` since neither package ships usable types for this import path.
- **Content is hardcoded in the page**: job history and project data live as inline arrays of `Map`s directly in `src/routes/+page.svelte` (see the `jobs` and `projects` consts) — there is no CMS, JSON file, or API. To add/edit a job or project, edit that array directly.
- **Components** (`src/components/`) are plain presentational Svelte components that take props and render markup + scoped `<style>`:
  - `JobCard.svelte` — one work-history entry (logo, company, title, timeframe)
  - `ProjectCard.svelte` — one project entry (screenshot, name, description, GitHub/demo links)
  - `SocialButton.svelte` — a single social/contact icon link
  - Note: components are imported via relative paths (`../components/...`) from routes, not through the `$lib` alias.
- **`src/lib/`** is the SvelteKit `$lib` alias target but is currently unused (empty placeholder).
- **Static assets** (`static/`) are referenced by relative path from the components (e.g. `jobs/jpmorgan_logo.png`, `projects/team_news.png`, `socials/github.svg`) and copied as-is into the build output. `static/.nojekyll` disables Jekyll processing on GitHub Pages.
- **Deployment**: `docs/` is committed and serves GitHub Pages directly (see git history: Jekyll was tried and abandoned in favor of building straight into `docs/`). There is no CI workflow in this repo — builds appear to be generated locally and committed.

## Conventions

- Formatting is enforced by Prettier: tabs for indentation, single quotes, no trailing commas, 100-char print width, Svelte files parsed via `prettier-plugin-svelte`. Run `npm run format` before committing.
- ESLint config (`eslint.config.js`) extends recommended JS + `typescript-eslint` + `eslint-plugin-svelte`, with `eslint-config-prettier` to avoid conflicts with Prettier.
- `.npmrc` sets `engine-strict=true` — respect the `engines` constraints when adding dependencies.
- Only `package-lock.json` is used; `.prettierignore` explicitly excludes `pnpm-lock.yaml`/`yarn.lock` from formatting, so stick to npm.
