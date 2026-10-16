# Campus Club Finder

A responsive single-page app that helps students discover campus clubs, learn about upcoming events, and join communities. Built with React, Vite, React Router, and Tailwind CSS. All membership data is stored locally in the browser; there is no authentication or backend.

## Features

- Home page with an introduction and calls to action.
- Club directory with five sample clubs.
- Sort club names A–Z or Z–A.
- Toggle between responsive grid and list views.
- Detail pages with club descriptions, meetup information, and at least two upcoming events.
- Join a club and persist membership in `localStorage`.
- Active navigation, About page, and friendly 404 page.
- Responsive layouts and keyboard-visible focus states.

## Requirements

- Node.js 20.19+ or 22.12+ recommended
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The optimized site is generated in `dist/`.

## Project structure

```text
src/
├── components/       # Navbar, Footer, ClubCard
├── data/clubs.js     # The five default club records
├── hooks/            # localStorage membership hook
├── pages/            # Home, Clubs, ClubDetail, About, NotFound
├── App.jsx           # App shell and routes
├── index.css         # Tailwind import and global base styles
└── main.jsx          # React entry point
```

## How membership works

The `useJoinedClubs` hook reads the `campus-club-finder:joined-clubs` key from `localStorage` when the app starts. Joining a club adds its ID to the saved array. A React effect writes updates back to storage, so a refresh keeps the joined state in the same browser. Clearing browser storage removes these saved choices. Membership is not synced across devices or users.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/clubs` | Club directory, sorting, and grid/list toggle |
| `/clubs/:clubId` | Club details, events, and join action |
| `/about` | App purpose and technology stack |
| `*` | 404 Not Found |

## Notes

Club photos are loaded from Unsplash URLs, so an internet connection is required to display them. Club records and event dates are sample content for this assignment. The app intentionally has no login, backend, club editing, search, or filtering.

See [DOCUMENTATION.md](./DOCUMENTATION.md) for a walkthrough and screenshot checklist.
