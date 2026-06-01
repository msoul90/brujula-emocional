# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git workflow

**Always work on a new branch for every new feature or improvement.** Never commit new work directly to `main`.

1. Create a branch: `git checkout -b feat/short-description`
2. Make changes, commit, and push the branch
3. Open a Pull Request to merge into `main`

The `main` branch is protected — force pushes and deletions are blocked.

## Development

**Install dependencies (first time):**

```bash
npm install
```

**Full build** (bundle JS + CSS + bump SW version):

```bash
npm run build
```

The pre-commit hook runs `npm run build` automatically on each `git commit`.

**Run locally:**

```bash
npm run dev   # alias for npx serve .
```

The service worker and PWA install prompt require `http://` or `https://` — they won't work on `file://`.

**Tests:**

```bash
npm test              # run all tests once
npm run test:watch    # watch mode
```

**Run a single test file:**

```bash
npx vitest run tests/diary.test.js
```

**Type check (JSDoc-based):**

```bash
npm run typecheck
```

Tests use **Vitest** + **jsdom** in `tests/`.

## Build system

esbuild bundles `app.js` and all ES6 module imports into `dist/app.bundle.js` (IIFE format). The bundle is required in all modes because modules use JSX and Preact bare specifiers that browsers can't process natively.

| Script | What it does |
| --- | --- |
| `npm run build:js` | Bundle `app.js` → `dist/app.bundle.js` |
| `npm run build:css` | Compile Tailwind → `dist/tailwind.css` (minified) |
| `npm run build:sw` | Auto-bump `CACHE_NAME` in `sw.js` + regenerate `js/version.js` |
| `npm run build` | Runs all three in sequence |

`dist/app.bundle.js` and `dist/tailwind.css` are both committed to the repo and must be rebuilt whenever source files change. The pre-commit hook runs `npm run build` automatically on each commit.

## Environment variables

Injected at build time by esbuild (see `scripts/build-js.js`). Copy `.env` and fill in values:

| Variable | Purpose |
| --- | --- |
| `SUPABASE_URL` | Supabase project URL (optional — cloud sync disabled if absent) |
| `SUPABASE_ANON_KEY` | Supabase anon key |
| `POSTHOG_API_KEY` | PostHog analytics key |
| `POSTHOG_HOST` | PostHog host |
| `POSTHOG_ENABLED` | Set to `"true"` to enable analytics |
| `TURNSTILE_SITE_KEY` | Cloudflare Turnstile CAPTCHA key (used in auth flow) |

All features that depend on these variables degrade gracefully when the variable is absent.

## Architecture

**Preact + JSX** PWA bundled with esbuild. Tailwind CSS pre-generated to `dist/tailwind.css`. Fully offline-capable via service worker; diary entries sync to Supabase when the user is authenticated.

**App tabs:** `emociones` | `checkin` | `diario` | `mapa`

The `diario` tab has two subtabs: `entradas` (entry list, in `js/diary.jsx`) and `resumen` (charts/statistics, in `js/reports.jsx`). `reports.jsx` renders only when `currentDiarySubTab === "resumen"`.

### Core infrastructure

| File | Role |
| --- | --- |
| `app.js` | Entry point — bootstraps all modules, owns `searchQuery`, wires bus events |
| `loader.js` | Always loads `dist/app.bundle.js`; shows a warning banner on `file://` |
| `sw.js` | Service worker — cache-first strategy for offline support |
| `js/version.js` | Auto-generated build version constant (do not edit manually) |
| `js/bus.js` | Minimal pub/sub event bus for decoupled inter-module communication |
| `js/store.js` | In-memory transient state (currentLang, currentTab, lastFocusedCard, isClosingModal); emits `store:<key>` on bus |
| `js/persistence.js` | Thin wrapper over localStorage — all reads/writes go through typed helpers |
| `js/storageSchema.js` | One-time schema migrations; may access localStorage directly |
| `js/constants.js` | Storage key names, config constants, app tab list; re-exports from data/i18n modules |
| `js/utils.js` | Shared pure utilities: `escapeHtml`, `normalizeText`, `isDarkMode`, `getReadableTextColor`, `wrapTextLines` |
| `js/types.js` | JSDoc `@typedef` re-exports (`TFn`, `GetDisplayNameFn`, `ShowDetailFn`) |

### UI modules

| File | Role |
| --- | --- |
| `js/ui.jsx` | Renders emotion cards, modal, and check-in tab; handles search and keyboard/click events |
| `js/uiHelpers.js` | Pure UI helpers: `filterEmotions`, `shortRecentLabel` |
| `js/diary.jsx` | Emotional diary — CRUD in localStorage + cloud sync, Preact render |
| `js/quiz.jsx` | 3-question emotion identification quiz |
| `js/crisis.jsx` | 3-step crisis support flow |
| `js/emotionMap.jsx` | Emotion relationship map — orchestrates view + logic |
| `js/emotionMap.logic.js` | Force-layout graph algorithm (pure, no DOM) |
| `js/emotionMap.view.jsx` | Emotion map Preact view component |
| `js/bodyMap.jsx` | Body map — select body zones to find matching emotions |
| `js/reports.jsx` | Diary statistics and charts (emotion frequency, tag breakdown) |
| `js/settings.js` | Theme and language settings panel |
| `js/emotionCanvas.js` | Generates share PNG via Canvas 2D API |
| `js/install.js` | PWA install prompt handling |
| `js/offlineBanner.js` | Offline/online banner |
| `js/serviceWorker.js` | Service worker registration |
| `js/i18n.js` | Language detection, `t()` helper, applies translations to the DOM |

### Backend / sync

| File | Role |
| --- | --- |
| `js/supabase.js` | Supabase client factory (singleton, returns `null` if not configured) |
| `js/auth.js` | Magic-link sign-in, sign-out, session helpers, `onAuthStateChange` |
| `js/cloudSync.js` | Sync diary entries to/from Supabase `diary_entries` table; `mergeEntries` (remote wins on conflict) |
| `js/offlineQueue.js` | Persists pending cloud ops to localStorage; `flushQueue` replays them on reconnect |
| `js/analytics.js` | PostHog analytics — CSP-aware; all calls are no-ops when disabled or unconfigured |

### Data & i18n

| File | Role |
| --- | --- |
| `js/data/emotions.js` | Emotion array (`emociones`), type definitions (`Emotion`, `EmotionRelation`, `MoodCategory`), `EMOTION_NAME_TRANSLATIONS`, `EMOTION_CONTENT_TRANSLATIONS`, `EMOTION_RELATIONS`, `MOOD_CATEGORIES` |
| `js/data/techniques.js` | Regulation techniques (`REGULATION_TECHNIQUES`) |
| `js/data/bodyMap.data.js` | Body zone definitions (`BODY_ZONES`, `SIMPLE_ZONE_GROUPS`, `BODY_ZONE_EMOTIONS`) |
| `js/i18n/es.js` | Spanish UI string translations |
| `js/i18n/en.js` | English UI string translations |

**Data flow:** `js/data/*` → `constants.js` (re-exports) → modules; `bus.js` decouples module-to-module events; `store.js` holds transient UI state.

### Module patterns

**Factory pattern:** UI modules export a `createXxx(deps)` function that receives injected dependencies (e.g., `t`, `emociones`, `getSession`) and returns an object of render methods called by `app.js`. Never instantiate UI modules directly.

**Pure-first layout:** Each module keeps pure data functions (no DOM, no localStorage) at the top so they can be imported and tested in isolation. Preact render code and side effects follow below. Tests import these pure exports directly.

**Key bus events** (see `js/bus.js` for the full list):

| Event | Payload |
| --- | --- |
| `"tab:switch"` | `{ tabId: string }` |
| `"quiz:open"` | `{}` |
| `"diary:entry-added"` | `{ nombre: string, note: string }` |
| `"lang:changed"` | `{}` |
| `"store:<key>"` | `{ value, prev }` |

### Testing conventions

- `tests/*.test.js` — unit tests (Node environment, no DOM)
- `tests/*.dom.test.js` — DOM tests; must have `// @vitest-environment jsdom` as the first line
- Tests import pure functions directly from source; DOM tests use `jsdom` to render Preact components

The `DIARY_TAGS` constant (`["trabajo", "pareja", "familia", "cuerpo", "dinero"]`) is the fixed allowed set — diary entries store a subset of these tags.

## Emotion data structure

Each emotion object in `js/data/emotions.js` (`emociones` array):

| Field | Description |
| --- | --- |
| `nombre` | Emotion name in Spanish (used as the canonical ID) |
| `color` | Background hex color for the card |
| `text` | Text hex color (for contrast on the card) |
| `siente` | Physical sensations |
| `dispara` | Triggers |
| `funcion` | Biological/psychological function |
| `mensaje` | Core message the emotion communicates |
| `impulso` | Unhelpful impulse to avoid |
| `respuesta` | Suggested healthy response |

English translations live in `EMOTION_NAME_TRANSLATIONS` and `EMOTION_CONTENT_TRANSLATIONS` in the same file.

## Persistence

All reads/writes go through `js/persistence.js`. Keys are defined as constants in `js/constants.js`:

| Key constant | What it stores |
| --- | --- |
| `RECENT_KEY` | Last 5 viewed emotion names |
| `LANGUAGE_KEY` | Language preference (`"es"` or `"en"`) |
| `THEME_KEY` | Theme preference (`"light"`, `"dark"`, or `"auto"`) |
| `DIARY_KEY` | Diary entries as a JSON array |
| `DIARY_CLOUD_USER_KEY` | User ID for last cloud sync (detect account switches) |
| `OFFLINE_QUEUE_KEY` | Pending cloud sync ops (create/delete) |
| `STORAGE_SCHEMA_KEY` | Schema migration version number |

## Cloud sync

Diary entries are synced to Supabase when the user is signed in. The schema lives in `scripts/supabase-schema.sql` — apply it once in the Supabase SQL editor. Authentication uses magic links (OTP). Row-Level Security policies enforce per-user data isolation.

## Styling

Custom styles in `styles.css` (card transitions, focus rings, scrollbar hiding, `<dialog>` positioning, reduced-motion). All layout/spacing uses Tailwind utilities compiled into `dist/tailwind.css`. Tailwind content sources declared in `tailwind.config.js`.

## Service worker versioning

`CACHE_NAME` in `sw.js` is auto-bumped by `npm run build:sw` (timestamp-based). Never edit it manually.
