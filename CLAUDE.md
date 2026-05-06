# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development

This is a build-free project. No npm install or compilation needed.

**Run locally:**

```bash
npx serve .
```

Or open `index.html` directly in a browser. Note: the service worker and PWA install prompt require `http://` or `https://` — they won't work on `file://`.

There is no automated test suite. Manual test scenarios are documented in `README.md`.

## Architecture

The app is a vanilla JS PWA with no framework or bundler. Tailwind CSS is loaded via CDN (`cdn.tailwindcss.com`) in `index.html`. Icons are inline SVGs — no icon library dependency.

**Module roles:**

| File | Role |
| --- | --- |
| `js/constants.js` | Emotion data array, all translations, localStorage key names, config constants |
| `js/i18n.js` | Language detection, `t()` helper, applies translations to the DOM |
| `js/ui.js` | Renders emotion cards and modal, handles search and all keyboard/click events |
| `loader.js` | Detects `file://` vs `http://` and loads `app.legacy.js` or `app.js` accordingly |
| `app.js` | Entry point — creates shared state, initializes i18n and UI, wires up language toggle and service worker |
| `app.legacy.js` | Inline duplicate of `app.js` for `file://` protocol (no ES6 module support there) |
| `sw.js` | Service worker — cache-first strategy for offline support |

**Data flow:** `constants.js` → `i18n.js` → `ui.js` ← `app.js` (bootstraps everything, owns state).

## Critical: Dual-Script Maintenance

`app.legacy.js` is a self-contained copy of the app logic for browsers opening via `file://`. Whenever `app.js` is changed, **the equivalent change must be mirrored in `app.legacy.js`**. The `index.html` selects between them at runtime based on `window.location.protocol`.

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

`sw.js` uses two named caches: `brujula-emocional-vN` (app shell) and `brujula-cdn-vN` (Tailwind CDN). **Bump `CACHE_NAME` in `sw.js` whenever you deploy changes to cached assets** — otherwise users will receive stale files. The CDN cache rarely needs bumping unless the Tailwind CDN URL changes.

## Styling

Custom styles are in `styles.css` (card transitions, focus rings, scrollbar hiding, `<dialog>` positioning, reduced-motion). All layout and spacing uses Tailwind utility classes directly in the HTML — no CSS build step.

## Persistence

Two localStorage keys, both defined as constants in `js/constants.js`:

- `RECENT_KEY` — stores the 5 most recently viewed emotion names
- `LANGUAGE_KEY` — stores the user's language preference (`"es"` or `"en"`)
