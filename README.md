# 🎬 MovieExplorer

A responsive Movie Explorer built with React, React Router, and Tailwind CSS.
Browse thousands of shows via the [TVMaze API](https://www.tvmaze.com/api),
search by title, and view details in a modal.

## Features

- **Home page** — navbar, hero banner with CTA, footer
- **Movie listing page** — live search-as-you-type, responsive card grid
- **Movie details modal** — poster/backdrop, rating, release date, genre,
  network, and overview; closes via the ✕ button, the Close button, the
  backdrop, or Escape
- Fully responsive: single column on mobile, up to 4 columns on desktop

## Tech stack

- React 18 + Vite
- React Router for navigation between pages
- Tailwind CSS for styling
- TVMaze API (no key required) for show data

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  api/tvmaze.js        API calls + small data helpers
  components/          Navbar, Hero, Footer, SearchBar, MovieCard,
                        MovieGrid, MovieModal
  pages/                Home, Listing
  App.jsx               Route definitions
  main.jsx              App entry point
```

## Deployment

This is a standard Vite SPA, so it deploys to any static host:

**Vercel**
1. Import the repo at [vercel.com/new](https://vercel.com/new).
2. Framework preset: Vite. Build command `npm run build`, output dir `dist`.
3. Deploy. (`vercel.json` in this repo already handles client-side route
   rewrites.)

**Netlify**
1. Import the repo at [app.netlify.com](https://app.netlify.com).
2. Build command `npm run build`, publish directory `dist`.
3. The included `public/_redirects` file handles SPA routing.

**GitHub Pages**
1. `npm install -D gh-pages`
2. Add `"homepage": "https://<user>.github.io/<repo>"` to `package.json`
   and a `"deploy": "gh-pages -d dist"` script.
3. `npm run build && npm run deploy`

## Data source

Show data, posters, and summaries are served by the free
[TVMaze API](https://www.tvmaze.com/api) — no API key needed.
