# Tejas Shinde — Portfolio

A modern, responsive, dark-themed personal portfolio built with **React + TypeScript + Vite**.

## Features

- ⚡ Vite-powered, fast HMR dev experience
- 🌗 **Light / dark theme toggle** — remembers your choice (localStorage), respects OS preference on first visit
- 📄 **Print-optimized résumé** at `#resume` with a "Download PDF" button (uses the browser's Save-as-PDF)
- 🔗 LinkedIn / GitHub / email links in nav, contact, and footer
- 🎨 Indigo → cyan gradient accent on both themes
- 📱 Fully responsive (mobile menu, fluid type, adaptive grids)
- ✨ Scroll-reveal animations via `IntersectionObserver`
- ♿ Accessible: semantic HTML, keyboard-friendly nav, honors `prefers-reduced-motion`
- 🧩 Content-driven — edit one file (`src/data.ts`) to update everything

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:5173
npm run build    # type-check + production build into /dist
npm run preview  # preview the production build locally
```

## Editing content

All text (summary, skills, experience, projects, education, contact) lives in
[`src/data.ts`](src/data.ts). Update that file and the UI updates automatically —
no component changes needed.

## Project structure

```
src/
  components/        UI sections (Nav, Hero, About, Skills, Experience, Projects, Contact, Footer)
  data.ts            All portfolio content (single source of truth)
  useReveal.ts       Scroll-reveal hook
  App.tsx            Page composition
  index.css          Theme + all styles
```

## Deploying

The site is fully static. Config files are already included.

**Netlify** (`netlify.toml` included)
- Drag-and-drop: run `npm run build`, then drop the `dist/` folder at app.netlify.com/drop.
- Git-based: connect the repo — build command `npm run build`, publish dir `dist`. The
  included SPA redirect makes deep links (e.g. `/#resume`) resolve correctly.
- CLI: `npm i -g netlify-cli && netlify deploy --prod`.

**Vercel** (`vercel.json` included)
- `npm i -g vercel && vercel` — the Vite preset and rewrites are auto-applied.

**GitHub Pages**
- Build, then publish `dist/`. If hosted under a subpath, set `base` in `vite.config.ts`.

## Before you publish

- Replace the placeholder LinkedIn URL in [`src/data.ts`](src/data.ts) (`profile.linkedin`).
- Everything else (résumé content included) is driven from that same file.
