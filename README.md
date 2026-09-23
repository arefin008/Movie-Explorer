# 🎬 MovieExplorer

A responsive movie and TV show explorer built with React. Browse titles,
search in real time, and view rich details in a modal — powered by the
free [TVMaze API](https://www.tvmaze.com/api).

**Live demo:** _https://movie-explorer-with-react.vercel.app/_

**Repository:** _https://github.com/arefin008/Movie-Explorer_

---

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [API reference](#api-reference)
- [Responsive design](#responsive-design)
- [Author](#author)
- [License](#license)

---

## Overview

MovieExplorer is a single-page application built as a course assignment to
demonstrate component-driven UI, client-side routing, external API
integration, and responsive design in React. It consists of a landing page
and a searchable movie listing page, with a details modal for each title.

## Features

- **Home page** — navbar with brand and navigation, a hero banner with a
  call-to-action, a short "how it works" section, and a footer
- **Movie listing page** — a search bar that filters results as you type,
  backed by a debounced call to the API
- **Responsive movie grid** — reusable card components showing poster,
  title, release year, and rating
- **Details modal** — backdrop image, title, rating, release date, genre,
  network, and a full overview; dismissible via the close button, the
  backdrop, or the <kbd>Esc</kbd> key
- **Graceful states** — loading indicator, empty-search messaging, and
  error handling for failed requests
- **Fully responsive** — single-column layout on mobile, up to a
  four-column grid on desktop

## Tech stack

| Layer       | Choice                                   |
|-------------|-------------------------------------------|
| Library     | React 18                                   |
| Bundler     | Vite                                       |
| Routing     | React Router 6                             |
| Styling     | Tailwind CSS                               |
| Data source | [TVMaze API](https://www.tvmaze.com/api) (no key required) |

## Project structure

```
movie-explorer/
├── public/
│   └── _redirects          # Netlify SPA routing rule
├── src/
│   ├── api/
│   │   └── tvmaze.js        # API calls and data-formatting helpers
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Footer.jsx
│   │   ├── SearchBar.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieGrid.jsx
│   │   └── MovieModal.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Listing.jsx
│   ├── App.jsx               # Route definitions
│   ├── main.jsx               # App entry point
│   └── index.css              # Tailwind directives + global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json               # Vercel SPA routing rule
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (installed with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd movie-explorer

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

## Available scripts

| Command           | Description                              |
|--------------------|-------------------------------------------|
| `npm run dev`      | Starts the Vite development server        |
| `npm run build`    | Builds the app for production into `dist` |
| `npm run preview`  | Serves the production build locally       |

## API reference

All data comes from the public TVMaze API — no authentication needed.

| Purpose        | Endpoint                                  |
|-----------------|--------------------------------------------|
| Browse all shows | `GET https://api.tvmaze.com/shows`        |
| Search by title   | `GET https://api.tvmaze.com/search/shows?q={query}` |

See `src/api/tvmaze.js` for the request functions and helpers used to
normalize poster URLs, ratings, and release years.

## Responsive design

| Breakpoint | Layout                          |
|------------|----------------------------------|
| Mobile     | Single-column, stacked elements  |
| Tablet     | 2–3 column movie grid            |
| Desktop    | 3–4 column movie grid            |

## Author

_Nasimul Arafin Rounok_

## License

This project was built for educational purposes as part of a course
assignment.
