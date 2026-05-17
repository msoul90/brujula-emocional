import { describe, it, expect } from "vitest";
import { __internal } from "../js/storageSchema.js";

describe("storage schema helpers", () => {
    it("sanitizeRecent keeps strings, uniqueness and limit", () => {
        const recent = __internal.sanitizeRecent([
            "Ansiedad",
            "Ansiedad",
            "",
            "   ",
            10,
            "Miedo",
            "Tristeza",
            "Enojo",
            "Calma",
            "Alegria",
        ]);
        expect(recent).toEqual(["Ansiedad", "Miedo", "Tristeza", "Enojo", "Calma"]);
    });

    it("sanitizeDiary drops invalid records and normalizes fields", () => {
        const diary = __internal.sanitizeDiary([
            {
                id: "123",
                date: "invalid-date",
                emotion: "Tristeza",
                note: "  nota  ",
                tags: ["trabajo", "x"],
            },
            {
                id: 99,
                date: "2026-05-17T12:00:00.000Z",
                emotion: "",
                note: "n/a",
                tags: ["familia"],
            },
            null,
        ]);

        expect(diary.length).toBe(1);
        expect(diary[0].emotion).toBe("Tristeza");
        expect(diary[0].note).toBe("nota");
        expect(diary[0].tags).toEqual(["trabajo"]);
        expect(typeof diary[0].id).toBe("number");
        expect(typeof diary[0].date).toBe("string");
    });
});
