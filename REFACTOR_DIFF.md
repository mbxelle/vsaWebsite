## Refactor Diff: HTML/CSS/JS site → React (Vite) app

This document summarizes **what changed** when refactoring the original static site (`index.html`, `styles.css`, `script.js`) into the React app under `vsa-react/`.

---

## High-level architecture

- **Original**: Single-page static HTML (`index.html`) with one global stylesheet (`styles.css`) and one script bundle (`script.js`).
- **React app**: Vite + React single-page app.
  - Entry: `vsa-react/index.html` mounts `<div id="root">`
  - Boot: `vsa-react/src/main.jsx` renders `vsa-react/src/App.jsx`
  - UI split into components in `vsa-react/src/components/*`
  - JS behaviors moved into components + hooks in `vsa-react/src/hooks/*`
  - CSS split by component in `vsa-react/src/styles/components/*`

---

## Section-by-section mapping (HTML → React)

### Navbar + language toggle

- **HTML source**: `<nav id="navbar"> ... </nav>` in `index.html`
- **CSS source**: navbar rules in `styles.css`
- **JS source**: inline Google Translate init + `translatePage()` in `index.html`

**React**
- **Component**: `vsa-react/src/components/NavBar.jsx`
- **Hook**: `vsa-react/src/hooks/useGoogleTranslate.js`
- **Injected DOM**: hidden translate container is rendered by `vsa-react/src/App.jsx`
- **CSS**: `vsa-react/src/styles/components/Navbar.css`

**Notable changes**
- Google Translate script loading moved from inline `<script>` to `useGoogleTranslate()` (runtime injection).
- Language buttons call `translatePage("en" | "vi")` from React.
- Logo source updated to `/tmvsa_logo2.png` (served from `vsa-react/public/`).

---

### Header / Hero

- **HTML source**: `<section class="header"> ... </section>` in `index.html`
- **CSS source**: `.header`, `#intro`, `#image`, `.button` in `styles.css`

**React**
- **Component**: `vsa-react/src/components/Header.jsx`
- **CSS**: `vsa-react/src/styles/components/Header.css`

**Notable changes**
- Button styling refactor: padding moved to `.button a` so the full clickable area matches the original intent.
- Images now referenced as absolute public paths (e.g. `src="/vsaTeam.png"`).

---

### About + social icons + Instagram background embeds

- **HTML source**: `<section class="about"> ... </section>` in `index.html`
- **JS source**: `//www.instagram.com/embed.js` loaded in `index.html`
- **CSS source**: `.about`, `.about-instagram`, `.instagram-media`, `.about-message`, `.social-icons` in `styles.css`

**React**
- **Component**: `vsa-react/src/components/About.jsx`
- **Hook**: `vsa-react/src/hooks/useInstagramEmbed.js` (injects Instagram embed script)
- **CSS**: `vsa-react/src/styles/components/About.css`

**Notable changes**
- Instagram script loading moved from inline `<script async …>` to `useInstagramEmbed()` hook.
- To keep the mascot/cursor moving smoothly over embeds, `.about-instagram` uses `pointer-events: none` (so posts are decorative/non-clickable).
- The embed container was adjusted to force consistent sizing (this was iterated during styling fixes).

---

### Events section (ticker + upcoming + happening now + info bubble)

- **HTML source**: `<section class="events-section"> ... </section>` in `index.html`
- **JS source**: `script.js` slide rotation logic + hover-to-pause
- **CSS source**: large Events block in `styles.css`

**React**
- **Components**:
  - `vsa-react/src/components/events/EventSection.jsx`
  - `vsa-react/src/components/events/EventCard.jsx`
  - `vsa-react/src/components/events/NowSection.jsx`
- **CSS**: `vsa-react/src/styles/components/Events.css`

**Notable changes**
- Info-bubble slider logic moved from DOM mutation (`innerHTML`) to React state (`useState`) in `NowSection.jsx`.
- Autoplay + pause-on-hover preserved via `mouseenter/mouseleave` listeners on the bubble container.
- Styling evolved from original fixed sizes toward more responsive/flexible sizing:
  - Event widgets: moved from fixed pixel width/height to `max-width` + `min-height`.
  - Layout: the left column wrapper `.events` is now a flex column (not a nested 2-col grid) to keep cards centered and consistent.
  - The info bubble uses `min-height` to avoid layout jumps when slide text length changes.
  - Section padding was moved around to allow **full-width tickers** while still keeping widgets away from the viewport edges.

---

### Execs section

- **HTML source**: `<section class="execs"> ... </section>` in `index.html`
- **CSS source**: `.execs`, `.member-card` rules in `styles.css`

**React**
- **Component**: `vsa-react/src/components/Execs.jsx`
- **CSS**: `vsa-react/src/styles/components/Execs.css`

**Notable changes**
- Exec cards now render from an in-file `execsData` array instead of hand-written repeated HTML.
- Image paths moved to public subfolder: `/execs/*.png`.
- Heading text updated to `MEET THE TEAM` to match styling goals.

---

### Archive section (Apps Script feed)

- **HTML source**: `<section id="anchor4" class="photo-archive"> ... </section>` in `index.html`
- **JS source**: `script.js` fetches Apps Script URL and renders grid via `innerHTML`.
- **CSS source**: `.photo-archive`, `.grid`, `.card` in `styles.css`

**React**
- **Component**: `vsa-react/src/components/Archive.jsx`
- **CSS**: `vsa-react/src/styles/components/Archive.css`

**Notable changes**
- Fetch/render moved from string templates (`innerHTML`) to React state rendering (`useState`, `useEffect`).
- **Payload shape differs**:
  - Original script expects `data.images`
  - React component currently expects `data.items` (and renders `items.map`)
  - If your Apps Script still returns `images`, this will need alignment.
- Error UI + Retry button implemented in React.

---

### Footer

- **HTML source**: `<footer> ... </footer>` in `index.html`
- **CSS source**: footer block in `styles.css`

**React**
- **Component**: `vsa-react/src/components/Footer.jsx`
- **CSS**: `vsa-react/src/styles/components/Footer.css`

---

## JavaScript behavior migration summary

- **Google Translate**
  - Original: inline `googleTranslateElementInit()` + script tag in `index.html`
  - React: `useGoogleTranslate()` injects the script; `translatePage()` retained.

- **Mascot follower**
  - Original: `script.js` uses pointer events + `requestAnimationFrame` and updates `#banban` transform.
  - React: `vsa-react/src/components/MascotFollower.jsx` implements RAF-driven transform updates and renders via a **portal** to `document.body` to avoid stacking/overflow issues across sections.

- **Events info bubble**
  - Original: DOM query + `innerHTML` render + autoplay interval
  - React: `NowSection.jsx` uses state + interval + hover pause behavior.

- **Archive feed**
  - Original: `fetch()` + `innerHTML` string templates
  - React: state-driven render + error UI.

---

## CSS refactor summary

- **Original**: `styles.css` contains all global + section styles.
- **React**:
  - Component styles are split into `vsa-react/src/styles/components/*.css`.
  - `vsa-react/src/styles/base.css` **must keep** `@import` at the top (PostCSS requirement).
  - Global tokens and base element styles live in `vsa-react/src/styles/globals.css`, imported first by `base.css`.

---

## Asset path changes

- **Original**: images referenced relative to root HTML file (e.g. `vsaTeam.png`).
- **React (Vite)**: images referenced from `vsa-react/public/` using absolute paths:
  - Example: `src="/vsaTeam.png"`, `src="/instagram.png"`, `src="/execs/teresa.png"`.

---

## Known non-parity / follow-ups

- **Archive feed response shape**: align `Archive.jsx` to Apps Script output (`items` vs `images`).
- **Instagram embeds**:
  - Uniform sizing is forced by CSS, but Instagram embeds can fight layout via injected iframes.
  - `pointer-events: none` prevents pausing/sticking of the mascot but also disables clicking the embedded posts.
- **Responsive CSS**: `vsa-react/src/styles/responsive.css` mirrors the original breakpoints but may need a final pass after all layout tweaks.


