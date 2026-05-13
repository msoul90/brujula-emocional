import { describe, it, expect } from "vitest";
import { parseDiaryEntries, createDiaryEntry, deleteDiaryEntryById } from "../js/diary.js";

describe("parseDiaryEntries", () => {
    it("parsea un array JSON válido", () => {
        const entries = [{ id: 1, emotion: "Calma", note: "test", date: new Date().toISOString() }];
        expect(parseDiaryEntries(JSON.stringify(entries))).toEqual(entries);
    });

    it("devuelve array vacío con JSON inválido", () => {
        expect(parseDiaryEntries("not-json")).toEqual([]);
    });

    it("devuelve array vacío con null", () => {
        expect(parseDiaryEntries(null)).toEqual([]);
    });

    it("devuelve array vacío si el resultado no es un array", () => {
        expect(parseDiaryEntries('"texto"')).toEqual([]);
        expect(parseDiaryEntries('{"a":1}')).toEqual([]);
    });

    it("devuelve array vacío con string vacío", () => {
        expect(parseDiaryEntries("")).toEqual([]);
    });
});

describe("createDiaryEntry", () => {
    it("crea una entrada con los campos requeridos", () => {
        const entry = createDiaryEntry("Alegría", "me siento bien");
        expect(entry.emotion).toBe("Alegría");
        expect(entry.note).toBe("me siento bien");
        expect(typeof entry.id).toBe("number");
        expect(typeof entry.date).toBe("string");
    });

    it("la fecha es un ISO string válido", () => {
        const entry = createDiaryEntry("Tristeza");
        expect(new Date(entry.date).toISOString()).toBe(entry.date);
    });

    it("elimina espacios de la nota", () => {
        const entry = createDiaryEntry("Calma", "  nota con espacios  ");
        expect(entry.note).toBe("nota con espacios");
    });

    it("usa nota vacía si no se proporciona", () => {
        const entry = createDiaryEntry("Miedo");
        expect(entry.note).toBe("");
    });

    it("el id es un número positivo (timestamp)", () => {
        const before = Date.now();
        const entry = createDiaryEntry("Enojo");
        const after = Date.now();
        expect(entry.id).toBeGreaterThanOrEqual(before);
        expect(entry.id).toBeLessThanOrEqual(after);
    });

    it("dos entradas consecutivas tienen ids distintos", async () => {
        const a = createDiaryEntry("Alegría");
        await new Promise((r) => setTimeout(r, 2));
        const b = createDiaryEntry("Tristeza");
        expect(a.id).not.toBe(b.id);
    });
});

describe("deleteDiaryEntryById", () => {
    const makeEntries = () => [
        { id: 1, emotion: "Alegría", note: "", date: new Date().toISOString() },
        { id: 2, emotion: "Tristeza", note: "algo", date: new Date().toISOString() },
        { id: 3, emotion: "Calma", note: "", date: new Date().toISOString() }
    ];

    it("elimina la entrada con el id dado", () => {
        const result = deleteDiaryEntryById(makeEntries(), 2);
        expect(result).toHaveLength(2);
        expect(result.find((e) => e.id === 2)).toBeUndefined();
    });

    it("conserva el resto de entradas", () => {
        const result = deleteDiaryEntryById(makeEntries(), 2);
        expect(result.find((e) => e.id === 1)).toBeDefined();
        expect(result.find((e) => e.id === 3)).toBeDefined();
    });

    it("no modifica el array original", () => {
        const original = makeEntries();
        deleteDiaryEntryById(original, 1);
        expect(original).toHaveLength(3);
    });

    it("devuelve el mismo array si el id no existe", () => {
        const result = deleteDiaryEntryById(makeEntries(), 99);
        expect(result).toHaveLength(3);
    });

    it("maneja array vacío sin errores", () => {
        expect(deleteDiaryEntryById([], 1)).toEqual([]);
    });
});
