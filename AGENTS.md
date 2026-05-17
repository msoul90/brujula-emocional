# Brújula Emocional - Agent Guide

## Project Snapshot
- Preact + vanilla JS PWA for emotional self-awareness.
- Main language is Spanish; app supports `es` and `en`.
- Build output is committed in `dist/` and used in all runtime modes.

## Quick Start
1. Install deps once: `npm install`
2. Local dev server: `npm run dev`
3. Full build before commit/push: `npm run build`
4. Test suite: `npm test`
5. Type checks: `npm run typecheck`

## Critical Workflow Rules
- Do not treat this as a single-file app. Source code lives in `js/` and `app.js`.
- After JS or JSX changes, rebuild bundle (`npm run build:js` or `npm run build`).
- After Tailwind/content changes, rebuild CSS (`npm run build:css` or `npm run build`).
- Do not manually edit `CACHE_NAME` in `sw.js`; use `npm run build:sw`.
- Service worker/PWA features require `http://` or `https://` (not `file://`).

## Architecture (High Value)
- `app.js`: bootstrap/orchestration for UI, quiz, diary, map, i18n, settings, SW.
- `js/constants.js`: canonical constants + re-exports for data and translations.
- `js/i18n.js`: language detection, `t()` nested-key lookup, emotion field/name translation.
- `js/ui.jsx`: main emotion cards, detail modal, base interactions.
- `js/quiz.jsx`, `js/diary.jsx`, `js/emotionMap.jsx`, `js/bodyMap.jsx`, `js/crisis.jsx`: feature modules.
- `js/store.js`: central app state (`currentLang`, `currentTab`, etc.).
- `js/bus.js`: event bus for cross-module communication.

## Domain Conventions
- Emotion identifiers (`nombre`) are Spanish and act as canonical IDs.
- If adding an emotion, update:
	- `js/data/emotions.js` emotion object.
	- `EMOTION_NAME_TRANSLATIONS` in the same file.
	- `EMOTION_CONTENT_TRANSLATIONS` for translatable fields.
- Reuse localStorage keys from `js/constants.js` (`LANGUAGE_KEY`, `RECENT_KEY`, `DIARY_KEY`, `THEME_KEY`).
- Keep user-facing copy clear, compassionate, and neutral Spanish.

## UI and Styling Conventions
- Prefer Tailwind utilities in JSX/HTML; keep custom CSS in `styles.css` minimal.
- Preserve mobile-first behavior and accessibility attributes (labels, aria states, focus handling).
- Respect reduced-motion behavior already wired in `app.js` and styles.

## Testing Expectations
- Add or update Vitest tests in `tests/` when changing behavior.
- Prioritize coverage for:
	- i18n key usage and language switching.
	- diary persistence and rendering.
	- quiz flow outcomes.
	- modal and share button behavior.

## Existing Docs (Link, Do Not Duplicate)
- `README.md`: product rationale, emotional framework, catalog details.
- `CLAUDE.md`: build system details, module roles, SW versioning notes.
- `exports/README.md`: icon export usage.
- `exports/moods/README.md`: mood icon export usage.
