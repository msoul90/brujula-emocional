// @ts-check
// Shared callback typedefs used across multiple modules.
// Emotion, EmotionRelation, MoodCategory are in ./data/emotions.js
// DiaryEntry is in ./diary.jsx

/** @typedef {(key: string) => string} TFn */

/** @typedef {(nombre: string) => string} GetDisplayNameFn */

/** @typedef {(e: import('./data/emotions.js').Emotion) => void} ShowDetailFn */

export {};
