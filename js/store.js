// @ts-check
import { emit } from "./bus.js";

/** @type {{ currentLang: string, currentTab: string, lastFocusedCard: HTMLElement|null, isClosingModal: boolean }} */
const _state = {
    currentLang: "es",
    currentTab: "emociones",
    lastFocusedCard: null,
    isClosingModal: false,
};

/** @param {keyof typeof _state} key */
export const get = (key) => _state[key];

/**
 * Update a state key and emit a `store:<key>` event on the bus.
 * @param {keyof typeof _state} key
 * @param {*} value
 */
export function set(key, value) {
    const prev = _state[key];
    if (prev === value) return;
    // Heterogeneous record — caller guarantees type safety
    (/** @type {Record<string, unknown>} */ (_state))[key] = value;
    emit(`store:${key}`, { value, prev });
}
