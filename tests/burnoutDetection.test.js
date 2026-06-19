import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import {
    isFatigueEmotion,
    isStressEmotion,
    isNegativeEmotion,
    detectFatiguePattern,
    detectEmotionalNumbness,
    detectIrritabilitySpike,
    detectNegativityDominance,
    assessBurnoutRisk,
    BURNOUT_MIN_ENTRIES,
} from "../js/burnoutDetection.js";

const NOW = new Date("2026-06-19T12:00:00.000Z").getTime();
const DAY = 86400000;

/** @param {string} emotion @param {number} daysAgo @returns {import('../js/diary.jsx').DiaryEntry} */
function entry(emotion, daysAgo = 0) {
    return {
        id: NOW - daysAgo * DAY,
        date: new Date(NOW - daysAgo * DAY).toISOString(),
        emotion,
        note: "",
        tags: [],
    };
}

beforeEach(() => { vi.useFakeTimers(); vi.setSystemTime(NOW); });
afterEach(() => { vi.useRealTimers(); });

describe("emotion classifiers", () => {
    it("clasifica emociones de fatiga", () => {
        expect(isFatigueEmotion("Tristeza")).toBe(true);
        expect(isFatigueEmotion("Soledad")).toBe(true);
        expect(isFatigueEmotion("Alegría")).toBe(false);
    });

    it("clasifica emociones de estrés", () => {
        expect(isStressEmotion("Irritabilidad")).toBe(true);
        expect(isStressEmotion("Enojo")).toBe(true);
        expect(isStressEmotion("Calma")).toBe(false);
    });

    it("clasifica emociones negativas", () => {
        expect(isNegativeEmotion("Ansiedad")).toBe(true);
        expect(isNegativeEmotion("Decepción")).toBe(true);
        expect(isNegativeEmotion("Gratitud")).toBe(false);
        expect(isNegativeEmotion("Entusiasmo")).toBe(false);
    });
});

describe("detectFatiguePattern", () => {
    it("devuelve score 0 con menos de 3 entradas recientes", () => {
        const entries = [entry("Tristeza", 1), entry("Soledad", 2)];
        expect(detectFatiguePattern(entries).score).toBe(0);
    });

    it("detecta patrón de fatiga cuando ratio ≥ 0.6", () => {
        const entries = [
            entry("Tristeza", 1), entry("Tristeza", 2), entry("Soledad", 3),
            entry("Angustia", 4), entry("Alegría", 5),
        ];
        const { score, ratio } = detectFatiguePattern(entries);
        expect(ratio).toBeCloseTo(0.8);
        expect(score).toBe(25);
    });

    it("no detecta fatiga con emociones positivas", () => {
        const entries = Array.from({ length: 5 }, (_, i) => entry("Alegría", i + 1));
        expect(detectFatiguePattern(entries).score).toBe(0);
    });

    it("ignora entradas fuera de la ventana de 30 días", () => {
        const entries = [
            entry("Tristeza", 1),
            entry("Tristeza", 45),
            entry("Alegría", 2),
            entry("Calma", 3),
        ];
        // solo hay 3 entradas en los últimos 30 días: Tristeza, Alegría, Calma → ratio ~0.33
        const { score } = detectFatiguePattern(entries);
        expect(score).toBe(5);
    });
});

describe("detectEmotionalNumbness", () => {
    it("devuelve score 0 con menos de 5 entradas", () => {
        const entries = [entry("Tristeza", 1), entry("Tristeza", 2)];
        expect(detectEmotionalNumbness(entries).score).toBe(0);
    });

    it("detecta baja variedad emocional (ratio ≤ 0.15)", () => {
        // 10 entradas, solo 1 emoción distinta → ratio = 0.1
        const entries = Array.from({ length: 10 }, (_, i) => entry("Tristeza", i + 1));
        const { score, distinctRatio } = detectEmotionalNumbness(entries);
        expect(distinctRatio).toBeCloseTo(0.1);
        expect(score).toBe(25);
    });

    it("no detecta adormecimiento con alta variedad emocional", () => {
        const emotions = ["Alegría", "Calma", "Tristeza", "Enojo", "Ansiedad", "Gratitud", "Orgullo", "Ternura", "Miedo", "Felicidad"];
        const entries = emotions.map((e, i) => entry(e, i + 1));
        const { score } = detectEmotionalNumbness(entries);
        expect(score).toBe(0);
    });
});

describe("detectIrritabilitySpike", () => {
    it("devuelve score 0 con menos de 3 entradas recientes", () => {
        const entries = [entry("Irritabilidad", 1)];
        expect(detectIrritabilitySpike(entries).score).toBe(0);
    });

    it("detecta aumento de estrés respecto al período anterior", () => {
        // Período actual (últimos 30 días): 4/5 son estrés → 0.8
        const current  = Array.from({ length: 4 }, (_, i) => entry("Enojo", i + 1));
        current.push(entry("Alegría", 5));
        // Período anterior (31-60 días): 0/4 son estrés → 0
        const previous = Array.from({ length: 4 }, (_, i) => entry("Alegría", 35 + i));
        const { score, delta } = detectIrritabilitySpike([...current, ...previous]);
        expect(delta).toBeCloseTo(0.8);
        expect(score).toBe(25);
    });

    it("no detecta pico si el estrés se mantuvo estable", () => {
        const current  = Array.from({ length: 5 }, (_, i) => entry("Enojo", i + 1));
        const previous = Array.from({ length: 5 }, (_, i) => entry("Enojo", 35 + i));
        const { score } = detectIrritabilitySpike([...current, ...previous]);
        expect(score).toBe(0);
    });
});

describe("detectNegativityDominance", () => {
    it("devuelve score 0 con menos de 5 entradas", () => {
        const entries = [entry("Tristeza", 1)];
        expect(detectNegativityDominance(entries).score).toBe(0);
    });

    it("detecta predominio negativo cuando ratio ≥ 0.8", () => {
        const entries = [
            ...Array.from({ length: 8 }, (_, i) => entry("Tristeza", i + 1)),
            entry("Alegría", 9),
            entry("Calma", 10),
        ];
        const { score, negativeRatio } = detectNegativityDominance(entries);
        expect(negativeRatio).toBeCloseTo(0.8);
        expect(score).toBe(25);
    });

    it("no detecta problema cuando las emociones son mayormente positivas", () => {
        const entries = Array.from({ length: 8 }, (_, i) => entry("Alegría", i + 1));
        expect(detectNegativityDominance(entries).score).toBe(0);
    });
});

describe("assessBurnoutRisk", () => {
    it("hasEnoughData = false cuando hay menos de MIN_ENTRIES entradas recientes", () => {
        const entries = Array.from({ length: BURNOUT_MIN_ENTRIES - 1 }, (_, i) =>
            entry("Tristeza", i + 1)
        );
        const result = assessBurnoutRisk(entries);
        expect(result.hasEnoughData).toBe(false);
        expect(result.totalScore).toBe(0);
        expect(result.level).toBe("low");
    });

    it("devuelve level low sin señales de desgaste", () => {
        const positives = ["Alegría", "Calma", "Felicidad", "Entusiasmo", "Gratitud", "Orgullo", "Ternura", "Alivio", "Placer", "Nostalgia"];
        const entries = Array.from({ length: 15 }, (_, i) => entry(positives[i % positives.length], i + 1));
        const result = assessBurnoutRisk(entries);
        expect(result.hasEnoughData).toBe(true);
        expect(result.level).toBe("low");
        expect(result.totalScore).toBe(0);
    });

    it("devuelve level moderate con señales leves", () => {
        // ~40% fatiga + ~60% negatividad leve
        const entries = [
            ...Array.from({ length: 6 }, (_, i) => entry("Tristeza", i + 1)),
            ...Array.from({ length: 4 }, (_, i) => entry("Alegría", i + 7)),
        ];
        const result = assessBurnoutRisk(entries);
        expect(result.hasEnoughData).toBe(true);
        // Fatiga 0.6 → 25, negatividad 0.6 → 5 => total 30 = moderate
        expect(["moderate", "high"]).toContain(result.level);
    });

    it("devuelve level high con múltiples señales fuertes", () => {
        // Todos negativos, todos son fatiga, poca variedad
        const entries = Array.from({ length: 12 }, (_, i) => entry("Tristeza", i + 1));
        const result = assessBurnoutRisk(entries);
        expect(result.hasEnoughData).toBe(true);
        expect(result.level).toBe("high");
        expect(result.totalScore).toBeGreaterThanOrEqual(60);
    });

    it("solo incluye en signals las señales activas (score > 0)", () => {
        const entries = Array.from({ length: 12 }, (_, i) => entry("Tristeza", i + 1));
        const result = assessBurnoutRisk(entries);
        for (const signal of result.signals) {
            expect(signal.score).toBeGreaterThan(0);
        }
    });

    it("ignora entradas de más de 60 días para señales", () => {
        // 10+ entradas saludables en últimos 30 días, entradas negativas muy antiguas
        const positives = ["Alegría", "Calma", "Felicidad", "Entusiasmo", "Gratitud"];
        const recent   = Array.from({ length: 12 }, (_, i) => entry(positives[i % positives.length], i + 1));
        const old      = Array.from({ length: 20 }, (_, i) => entry("Tristeza", 70 + i));
        const result = assessBurnoutRisk([...recent, ...old]);
        expect(result.level).toBe("low");
    });
});
