// @ts-check
/** @typedef {import('./diary.jsx').DiaryEntry} DiaryEntry */

const FATIGUE_EMOTIONS  = new Set(["Tristeza", "Soledad", "Aburrimiento", "Angustia", "Confusión"]);
const STRESS_EMOTIONS   = new Set(["Irritabilidad", "Enojo", "Frustración", "Ansiedad", "Preocupación"]);
const NEGATIVE_EMOTIONS = new Set([
    "Tristeza", "Enojo", "Miedo", "Ansiedad", "Vergüenza", "Culpa", "Frustración",
    "Celos", "Soledad", "Confusión", "Preocupación", "Angustia", "Irritabilidad",
    "Rechazo", "Envidia", "Disgusto", "Decepción", "Aburrimiento",
]);

/** @param {string} nombre @returns {boolean} */
export function isFatigueEmotion(nombre) { return FATIGUE_EMOTIONS.has(nombre); }

/** @param {string} nombre @returns {boolean} */
export function isStressEmotion(nombre) { return STRESS_EMOTIONS.has(nombre); }

/** @param {string} nombre @returns {boolean} */
export function isNegativeEmotion(nombre) { return NEGATIVE_EMOTIONS.has(nombre); }

/**
 * @param {DiaryEntry[]} entries
 * @param {number} windowDays
 * @returns {{ current: DiaryEntry[], previous: DiaryEntry[] }}
 */
export function splitPeriods(entries, windowDays = 30) {
    const now         = Date.now();
    const cutCurrent  = now - windowDays * 86400000;
    const cutPrevious = now - 2 * windowDays * 86400000;
    const current  = entries.filter((e) => new Date(e.date).getTime() >= cutCurrent);
    const previous = entries.filter((e) => {
        const t = new Date(e.date).getTime();
        return t >= cutPrevious && t < cutCurrent;
    });
    return { current, previous };
}

/**
 * High frequency of fatigue-related emotions in the current period.
 * @param {DiaryEntry[]} entries @returns {{ score: number, ratio: number }}
 */
export function detectFatiguePattern(entries) {
    const { current } = splitPeriods(entries);
    if (current.length < 3) return { score: 0, ratio: 0 };
    const count = current.filter((e) => isFatigueEmotion(e.emotion)).length;
    const ratio = count / current.length;
    const score = ratio >= 0.6 ? 25 : ratio >= 0.4 ? 15 : ratio >= 0.25 ? 5 : 0;
    return { score, ratio };
}

/**
 * Low emotional variety despite many entries (emotional numbness / apathy).
 * @param {DiaryEntry[]} entries @returns {{ score: number, distinctRatio: number }}
 */
export function detectEmotionalNumbness(entries) {
    const { current } = splitPeriods(entries);
    if (current.length < 5) return { score: 0, distinctRatio: 1 };
    const distinct      = new Set(current.map((e) => e.emotion)).size;
    const distinctRatio = distinct / current.length;
    const score = distinctRatio <= 0.15 ? 25 : distinctRatio <= 0.25 ? 15 : distinctRatio <= 0.35 ? 5 : 0;
    return { score, distinctRatio };
}

/**
 * Stress emotions increased compared to the previous period.
 * @param {DiaryEntry[]} entries @returns {{ score: number, delta: number }}
 */
export function detectIrritabilitySpike(entries) {
    const { current, previous } = splitPeriods(entries);
    if (current.length < 3) return { score: 0, delta: 0 };
    const currentRatio  = current.filter((e)  => isStressEmotion(e.emotion)).length  / current.length;
    const previousRatio = previous.length > 0
        ? previous.filter((e) => isStressEmotion(e.emotion)).length / previous.length
        : 0;
    const delta = currentRatio - previousRatio;
    const score = delta >= 0.3 ? 25 : delta >= 0.2 ? 15 : delta >= 0.1 ? 5 : 0;
    return { score, delta };
}

/**
 * Negative emotions dominate recent entries.
 * @param {DiaryEntry[]} entries @returns {{ score: number, negativeRatio: number }}
 */
export function detectNegativityDominance(entries) {
    const { current } = splitPeriods(entries);
    if (current.length < 5) return { score: 0, negativeRatio: 0 };
    const negCount       = current.filter((e) => isNegativeEmotion(e.emotion)).length;
    const negativeRatio  = negCount / current.length;
    const score = negativeRatio >= 0.8 ? 25 : negativeRatio >= 0.65 ? 15 : negativeRatio >= 0.5 ? 5 : 0;
    return { score, negativeRatio };
}

/**
 * @typedef {Object} BurnoutSignal
 * @property {"fatigue"|"numbness"|"irritability"|"negativity"} key
 * @property {number} score
 * @property {number} value
 */

/**
 * @typedef {Object} BurnoutAssessment
 * @property {number} totalScore
 * @property {"low"|"moderate"|"high"} level
 * @property {BurnoutSignal[]} signals
 * @property {boolean} hasEnoughData
 */

export const BURNOUT_MIN_ENTRIES = 10;

/**
 * Returns a burnout risk assessment based on the last 30 days of diary entries.
 * @param {DiaryEntry[]} entries
 * @returns {BurnoutAssessment}
 */
export function assessBurnoutRisk(entries) {
    const { current } = splitPeriods(entries);
    if (current.length < BURNOUT_MIN_ENTRIES) {
        return { totalScore: 0, level: "low", signals: [], hasEnoughData: false };
    }

    const fatigue      = detectFatiguePattern(entries);
    const numbness     = detectEmotionalNumbness(entries);
    const irritability = detectIrritabilitySpike(entries);
    const negativity   = detectNegativityDominance(entries);

    /** @type {BurnoutSignal[]} */
    const allSignals = [
        { key: /** @type {const} */ ("fatigue"),      score: fatigue.score,      value: fatigue.ratio },
        { key: /** @type {const} */ ("numbness"),     score: numbness.score,     value: numbness.distinctRatio },
        { key: /** @type {const} */ ("irritability"), score: irritability.score, value: irritability.delta },
        { key: /** @type {const} */ ("negativity"),   score: negativity.score,   value: negativity.negativeRatio },
    ];

    const signals    = allSignals.filter((s) => s.score > 0);
    const totalScore = Math.min(100, allSignals.reduce((sum, s) => sum + s.score, 0));
    const level      = totalScore >= 60 ? "high" : totalScore >= 30 ? "moderate" : "low";

    return { totalScore, level, signals, hasEnoughData: true };
}
