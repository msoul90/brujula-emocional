// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from "vitest";
import {
    getRecentEmotions, setRecentEmotions,
    getLanguage, setLanguage,
    getTheme, setTheme,
    getDiaryEntries, setDiaryEntries,
} from "../js/persistence.js";

beforeEach(() => {
    localStorage.clear();
});

describe("getRecentEmotions / setRecentEmotions", () => {
    it("devuelve [] cuando localStorage está vacío", () => {
        expect(getRecentEmotions()).toEqual([]);
    });

    it("persiste y devuelve el array guardado", () => {
        setRecentEmotions(["Ansiedad", "Calma"]);
        expect(getRecentEmotions()).toEqual(["Ansiedad", "Calma"]);
    });

    it("devuelve [] ante JSON inválido sin lanzar", () => {
        localStorage.setItem("brujulaRecientes", "no-json{{");
        expect(() => getRecentEmotions()).not.toThrow();
        expect(getRecentEmotions()).toEqual([]);
    });
});

describe("getLanguage / setLanguage", () => {
    it("devuelve null cuando no hay valor guardado", () => {
        expect(getLanguage()).toBeNull();
    });

    it("persiste y devuelve el idioma guardado", () => {
        setLanguage("en");
        expect(getLanguage()).toBe("en");
    });
});

describe("getTheme / setTheme", () => {
    it("devuelve null cuando no hay valor guardado", () => {
        expect(getTheme()).toBeNull();
    });

    it("persiste y devuelve el tema guardado", () => {
        setTheme("dark");
        expect(getTheme()).toBe("dark");
    });
});

describe("getDiaryEntries / setDiaryEntries", () => {
    it("devuelve [] cuando localStorage está vacío", () => {
        expect(getDiaryEntries()).toEqual([]);
    });

    it("persiste y devuelve las entradas guardadas", () => {
        const entries = [{ id: 1, date: "2025-01-01", emotion: "Calma", note: "", tags: [] }];
        setDiaryEntries(entries);
        expect(getDiaryEntries()).toEqual(entries);
    });

    it("devuelve [] ante JSON inválido sin lanzar", () => {
        localStorage.setItem("brujulaDiario", "{{invalid");
        expect(() => getDiaryEntries()).not.toThrow();
        expect(getDiaryEntries()).toEqual([]);
    });
});
