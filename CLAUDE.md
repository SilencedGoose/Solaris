# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Solaris Li's personal portfolio website — a single-page Vite + React site showing an intro, work history, and projects over an animated Vanta.js/Three.js background. Live at https://solarisli.dev/.

## Commands

```bash
npm run dev              # start dev server
npm run build             # production build (Vite output -> docs/)
npm run preview           # preview the production build
npm run test              # run Playwright e2e tests (builds + previews the app first, port 4173)
npm run check              # tsc --noEmit type checking
npm run check:watch       # tsc --noEmit in watch mode
npm run lint               # prettier --check . && eslint .
npm run format              # prettier --write .
```

To run a single Playwright test, use Playwright's own CLI filters, e.g. `npx playwright test -g "home page has expected h1"`.

There is no separate lint-fix script for ESLint issues; only `format` auto-fixes (Prettier). Fix ESLint errors manually.

## Architecture

- **Framework**: Vite + React (function components, no router). The whole site is a single page rendered client-side — there is no server-side backend or API.
- **Build output**: `vite.config.ts` sets `build.outDir` to `docs/` (not the default `dist/`) so GitHub Pages can serve directly from that folder. `base` is set to `'./'` (relative) so the build's asset URLs work unmodified whether served from the custom domain root (https://solarisli.dev/) or a subpath — do not change this to an absolute base like `/solaris/`; the site is deployed at the domain root, and absolute-prefixed asset paths 404 there, leaving a blank page.
- **Entry point**: `index.html` (project root, Vite convention) loads `src/main.tsx`, which mounts `src/App.tsx` into `#root`.
- **Single component tree**: `src/App.tsx` renders the entire page — namebar, socials, jobs, projects, footer.
- **Background effect**: The Vanta "NET" effect (from `vanta/dist/vanta.net.min`) is dynamically imported and initialized in a `useEffect` in `App.tsx`, bound to the `#main` div ref, and torn down on cleanup. Its ambient module types (no upstream types exist for this import path) are declared in `src/vite-env.d.ts`.
- **Content lives in `src/data.ts`**: job history and project entries are typed arrays (`Job[]`, `Project[]`) — there is no CMS, external JSON, or API. To add/edit a job or project, edit that file directly.
- **Components** (`src/components/`) are plain presentational components that take typed props and render JSX with Tailwind utility classes:
  - `JobCard.tsx` — one work-history entry (logo, company, title, timeframe)
  - `ProjectCard.tsx` — one project entry (screenshot, name, description, GitHub/demo links)
  - `SocialButton.tsx` — a single social/contact icon link
  - Heading levels matter here: only `App.tsx`'s "Solaris Li" title is an `<h1>`; card titles are `<h2>` and sub-text is `<h3>`, since the e2e test asserts on a single visible `h1`.
- **Styling**: Tailwind CSS v4 via the `@tailwindcss/vite` plugin (no `tailwind.config.js`/PostCSS setup needed). Global styles/resets and the custom scrollbar live in `src/index.css`; component styling is inline Tailwind classes, including arbitrary-value classes (e.g. `bg-[#22223b]`) to match the site's specific palette.
- **Static assets** (`public/`) are referenced by relative path from the components (e.g. `jobs/jpmorgan_logo.png`, `projects/team_news.png`, `socials/github.svg`) and copied as-is into the build output. `public/.nojekyll` disables Jekyll processing on GitHub Pages.
- **Custom domain**: `public/CNAME` (containing `solarisli.dev`) is copied into every build so `docs/CNAME` is always present. GitHub Pages' classic branch-deploy reads this file on each deploy to know which custom domain to serve — if it's ever missing from a `docs/` build, GitHub silently drops the domain association and the site 404s at solarisli.dev (this happened once already, from a build that didn't preserve it — keep `CNAME` in `public/`, not hand-edited only in `docs/`).
- **Deployment**: `docs/` is committed and serves GitHub Pages directly. There is no CI workflow in this repo — builds are generated locally (`npm run build`) and the resulting `docs/` output is committed alongside source changes.

## Conventions

- Formatting is enforced by Prettier: tabs for indentation, single quotes, no trailing commas, 100-char print width. Run `npm run format` before committing. `docs/` (generated build output) is excluded from Prettier and ESLint.
- ESLint config (`eslint.config.js`) extends recommended JS + `typescript-eslint` + `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh`, with `eslint-config-prettier` to avoid conflicts with Prettier.
- `.npmrc` sets `engine-strict=true` — respect the `engines` constraints when adding dependencies.
- Only `package-lock.json` is used; `.prettierignore` explicitly excludes `pnpm-lock.yaml`/`yarn.lock` from formatting, so stick to npm.
