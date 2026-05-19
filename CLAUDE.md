# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development

**Instalar dependencias (primera vez):**

```bash
npm install
```

**Build completo** (bundle JS + CSS + bump SW version):

```bash
npm run build
```

El pre-commit hook ejecuta `npm run build` automáticamente en cada `git commit`.

**Run locally:**

```bash
npm run dev   # alias de npx serve .
```

Or open `index.html` directly in a browser. Note: the service worker and PWA install prompt require `http://` or `https://` — they won't work on `file://`.

**Tests:**

```bash
npm test            # ejecuta todos los tests una vez
npm run test:watch  # modo watch durante desarrollo
```

Tests automatizados con **Vitest** en `tests/`. Manual test scenarios are documented in `README.md`.

## Build system

The project uses **esbuild** (devDependency) to bundle `app.js` and all its ES6 module imports into `dist/app.bundle.js`. The bundle is used in **all modes** (`file://` and `http://`) because modules use JSX and Preact bare specifiers that the browser cannot process natively.

| Script | What it does |
| --- | --- |
| `npm run build:js` | Bundle `app.js` → `dist/app.bundle.js` (esbuild IIFE) |
| `npm run build:css` | Compile Tailwind → `dist/tailwind.css` (minified) |
| `npm run build:sw` | Auto-bump `CACHE_NAME` in `sw.js` (timestamp-based) |
| `npm run build` | Runs all three in sequence |

`scripts/bump-sw-version.js` replaces `CACHE_NAME` with a timestamp tag — no need to bump it manually.

Content sources for Tailwind are declared in `tailwind.config.js`.

## Architecture

The app is a **Preact + JSX** PWA bundled with **esbuild**. Tailwind CSS is served from `dist/tailwind.css` (pre-generated static file). Icons are inline SVGs — no icon library dependency.

**Module roles:**

| File | Role |
| --- | --- |
| `js/constants.js` | Emotion data, translations, localStorage key names, config constants |
| `js/persistence.js` | Thin wrapper over localStorage — all reads/writes go through typed helpers |
| `js/store.js` | In-memory state for 4 transient values (currentLang, currentTab, lastFocusedCard, isClosingModal); emits `store:<key>` on the bus on change |
| `js/bus.js` | Minimal pub/sub event bus for decoupled inter-module communication |
| `js/i18n.js` | Language detection, `t()` helper, applies translations to the DOM |
| `js/ui.jsx` | Renders emotion cards, modal, and check-in tab; handles search and all keyboard/click events |
| `js/diary.jsx` | Emotional diary — CRUD in localStorage, Preact render |
| `js/quiz.jsx` | 3-question identification quiz |
| `js/crisis.jsx` | 3-step crisis support flow |
| `js/emotionMap.jsx` | Emotion relationship map — force-layout graph + quadrant view |
| `js/settings.js` | Theme and language settings panel |
| `js/emotionCanvas.js` | Generates share PNG via Canvas 2D API |
| `loader.js` | Always loads `dist/app.bundle.js`; shows a warning banner on `file://` |
| `app.js` | Entry point — bootstraps all modules, owns `searchQuery`, wires events |
| `sw.js` | Service worker — cache-first strategy for offline support |

**Data flow:** `constants.js` → `persistence.js` ← modules; `bus.js` decouples module-to-module events; `store.js` holds transient UI state; `app.js` bootstraps everything.

**`dist/app.bundle.js`** is the esbuild-generated bundle committed to the repo. It must be rebuilt (`npm run build:js`) whenever `app.js` or any of its imports change. The pre-commit hook does this automatically.

## Emotion Data Structure

Each emotion object in the `emociones` array in `js/constants.js` has these fields:

| Field | Description |
| --- | --- |
| `nombre` | Emotion name in Spanish |
| `color` | Background hex color for the card |
| `text` | Text hex color (dark, for contrast on the card) |
| `siente` | Physical sensations |
| `dispara` | Triggers |
| `funcion` | Biological/psychological function |
| `mensaje` | Core message the emotion communicates |
| `impulso` | Unhelpful impulse to avoid |
| `respuesta` | Suggested healthy response |

English translations for all fields live in `EMOTION_NAME_TRANSLATIONS` and `EMOTION_CONTENT_TRANSLATIONS` in the same file.

## Service Worker versioning

`sw.js` uses a single cache. `CACHE_NAME` is auto-bumped by `npm run build:sw` (called from `npm run build` and the pre-commit hook) — no manual editing required.

## Styling

Custom styles are in `styles.css` (card transitions, focus rings, scrollbar hiding, `<dialog>` positioning, reduced-motion). All layout and spacing uses Tailwind utility classes directly in the HTML, compiled into `dist/tailwind.css`.

## Persistence

Normal app reads/writes should go through `js/persistence.js`; `js/storageSchema.js` may access localStorage directly for one-time schema migrations. Keys are defined as constants in `js/constants.js`:

- `RECENT_KEY` — stores the 5 most recently viewed emotion names
- `LANGUAGE_KEY` — stores the user's language preference (`"es"` or `"en"`)
- `THEME_KEY` — stores the user's theme preference (`"light"`, `"dark"`, or `"auto"`)
- `DIARY_KEY` — stores diary entries as a JSON array
