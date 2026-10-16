# Campus Club Finder — Application Documentation

## 1. Overview

Campus Club Finder is a front-end-only single-page application for exploring student clubs. It uses Vite for development and bundling, React functional components and Hooks for the interface and state, React Router for navigation, and Tailwind CSS for styling. No account, server, or backend is required.

## 2. Start from the initial state

1. Install Node.js (20.19+ or 22.12+ recommended).
2. Open a terminal in the project folder.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` and open the local address printed by Vite.
5. On first launch, the app loads five default clubs from `src/data/clubs.js`. The joined-club list starts empty unless this browser already has saved app data in localStorage.

## 3. Page walkthrough

### Home (`/`)

The home page introduces the app with a hero image, primary **Explore all clubs** CTA, a quick overview of the value of student communities, and a second CTA near the bottom. Click **Explore all clubs** or **Find your club** in the navigation to open the club directory.

Screenshot: `public/screenshots/01-home.png`

### Club List (`/clubs`)

The directory displays all five default clubs as image cards. Each card contains the club name, category, short description, member count, meeting day, and a **View details** link.

- **Sort A–Z:** choose **Name A–Z** in the dropdown.
- **Sort Z–A:** choose **Name Z–A** in the dropdown.
- **Grid view:** select the grid icon to show cards in responsive columns.
- **List view:** select the list icon to stack cards vertically.
- **Open a club:** select **View details** or the card image.
- Clubs already joined in this browser display a **Joined** badge.

Screenshot: `public/screenshots/02-clubs-grid.png` (grid view) and `public/screenshots/03-clubs-list.png` (list view).

### Club Detail (`/clubs/:clubId`)

Every club has a detail route. The page shows a large club image, category, full description, regular meeting time, meeting location, member count, and two upcoming events.

- If the club has not been joined, select **Join club**.
- A confirmation panel appears: **You're part of the club!**
- Return to the directory or refresh the page. The joined badge and confirmation remain because the club ID is stored in localStorage.
- Joining is local to the current browser; it is not sent to a server.

Screenshot: `public/screenshots/04-club-detail.png` (not joined) and `public/screenshots/05-club-joined.png` (joined state).

### About (`/about`)

The About page describes the app's purpose, explains the discover/join flow, and lists the technology stack: React, React Router, Vite, Tailwind CSS, and localStorage. It also explains that membership is browser-local.

Screenshot: `public/screenshots/06-about.png`

### 404 Not Found (`/any-invalid-path`)

Any route that does not match the app routes shows a friendly 404 message and a **Back to home** button. Try visiting `/this-page-does-not-exist` to test it.

Screenshot: `public/screenshots/07-not-found.png`

## 4. Data and persistence

- The five default club records are defined in `src/data/clubs.js`, separate from the UI.
- Club details are selected using the route parameter `clubId`.
- `src/hooks/useJoinedClubs.js` reads and writes the `campus-club-finder:joined-clubs` localStorage key.
- The app safely falls back to an empty list if localStorage contains invalid JSON or cannot be accessed.

To reset the demo membership state, clear the site's localStorage for this local origin or run this in the browser console:

```js
localStorage.removeItem('campus-club-finder:joined-clubs')
location.reload()
```

## 5. Responsive behavior and accessibility

- Navigation collapses into a menu on small screens.
- Club cards adapt from a multi-column grid to fewer columns and then a single column.
- The list view stacks cards vertically and becomes a horizontal card layout on larger screens.
- Buttons and links have accessible labels where icon-only controls are used.
- Focus-visible outlines help keyboard users identify the current control.
- Images include alt text and the page hierarchy uses semantic headings and landmarks.

## 6. Run and build commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## 7. Screenshot checklist

Capture screenshots from the running app and save them into `public/screenshots/` using these filenames:

- `01-home.png` — home page at desktop width.
- `02-clubs-grid.png` — all five club cards in grid view.
- `03-clubs-list.png` — directory after switching to list view.
- `04-club-detail.png` — one club detail page before joining.
- `05-club-joined.png` — the same club after clicking Join club.
- `06-about.png` — About page and technology stack.
- `07-not-found.png` — friendly 404 page.

For a complete evidence set, capture one screenshot of the mobile navigation or narrow-screen directory as well, for example `08-mobile.png`. Screenshots should be taken from the actual running app so they reflect the submitted implementation.

## 8. GitHub submission checklist

1. Create a new **public** GitHub repository named `campus-club-finder` (or another name requested by the assignment).
2. Add the project files, including `README.md` and this `DOCUMENTATION.md`. Do not upload `node_modules/` or `dist/`.
3. Commit and push the source code.
4. Verify the repository visibility is **Public**.
5. Open the repository page in a private/incognito window to check that it is accessible without signing in.
6. Submit the public repository URL in the assignment portal.

If screenshots are required for grading, add the screenshots to `public/screenshots/`, commit them, and confirm the images render in GitHub.
