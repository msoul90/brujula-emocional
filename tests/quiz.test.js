import { describe, it, expect } from "vitest";
import { QUIZ_STEPS } from "../js/quiz.js";
import { emociones } from "../js/constants.js";

const emotionNames = new Set(emociones.map((e) => e.nombre));

describe("QUIZ_STEPS estructura", () => {
    it("todos los pasos tienen textKey y options", () => {
        for (const [key, step] of Object.entries(QUIZ_STEPS)) {
            expect(step.textKey, `${key}.textKey`).toBeTruthy();
            expect(Array.isArray(step.options), `${key}.options`).toBe(true);
            expect(step.options.length, `${key} debe tener opciones`).toBeGreaterThan(0);
        }
    });

    it("cada opción tiene result o next (no ambos)", () => {
        for (const [key, step] of Object.entries(QUIZ_STEPS)) {
            for (const opt of step.options) {
                const hasResult = Array.isArray(opt.result);
                const hasNext = typeof opt.next === "string";
                expect(hasResult !== hasNext, `${key}: opción debe tener result XOR next`).toBe(true);
            }
        }
    });

    it("todos los next apuntan a un paso existente", () => {
        const stepKeys = new Set(Object.keys(QUIZ_STEPS));
        for (const [key, step] of Object.entries(QUIZ_STEPS)) {
            for (const opt of step.options) {
                if (opt.next) {
                    expect(stepKeys.has(opt.next), `${key} → next "${opt.next}" no existe`).toBe(true);
                }
            }
        }
    });

    it("todos los resultados son emociones existentes en constants.js", () => {
        for (const [key, step] of Object.entries(QUIZ_STEPS)) {
            for (const opt of step.options) {
                if (opt.result) {
                    for (const nombre of opt.result) {
                        expect(emotionNames.has(nombre), `${key}: "${nombre}" no existe en emociones`).toBe(true);
                    }
                }
            }
        }
    });
});

describe("QUIZ_STEPS caminos", () => {
    it("q1 → alta energía → buena → Entusiasmo/Alegría", () => {
        const paso1 = QUIZ_STEPS["q1"].options[0]; // alta energía
        expect(paso1.next).toBe("q2_high");

        const paso2 = QUIZ_STEPS["q2_high"].options[0]; // se siente bien
        expect(paso2.result).toContain("Entusiasmo");
        expect(paso2.result).toContain("Alegría");
    });

    it("q1 → baja energía → buena → Calma/Felicidad/Placer", () => {
        const paso1 = QUIZ_STEPS["q1"].options[1]; // baja energía
        expect(paso1.next).toBe("q2_low");

        const paso2 = QUIZ_STEPS["q2_low"].options[0]; // se siente bien
        expect(paso2.result).toContain("Calma");
    });

    it("camino de alta energía + mala + opción A llega a resultado con Enojo", () => {
        const result = QUIZ_STEPS["q3_high_bad"].options[0].result;
        expect(result).toContain("Enojo");
        expect(result).toContain("Frustración");
    });

    it("camino de baja energía + mala + opción A llega a resultado con Tristeza", () => {
        const result = QUIZ_STEPS["q3_low_bad"].options[0].result;
        expect(result).toContain("Tristeza");
    });
});
