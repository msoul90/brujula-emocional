// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { createReports, isoWeekKey, last8Weeks, countByEmotion, countByTag } from "../js/reports.jsx";
import { setDiaryEntries } from "../js/persistence.js";

beforeEach(() => {
    localStorage.clear();
    document.body.innerHTML = '<div id="reports-content"></div>';
});

afterEach(() => {
    vi.useRealTimers();
});

describe("reports helpers", () => {
    it("calcula la semana ISO en bordes de año", () => {
        expect(isoWeekKey("2023-01-01T12:00:00.000Z")).toBe("2022-W52");
        expect(isoWeekKey("2023-01-02T12:00:00.000Z")).toBe("2023-W01");
    });

    it("cuenta emociones y tags", () => {
        const entries = [
            { id: 1, date: "2026-05-01T10:00:00.000Z", emotion: "Calma", note: "", tags: ["trabajo"] },
            { id: 2, date: "2026-05-02T10:00:00.000Z", emotion: "Calma", note: "", tags: ["familia", "invalida"] },
            { id: 3, date: "2026-05-03T10:00:00.000Z", emotion: "Alegría", note: "", tags: [] },
        ];

        expect(countByEmotion(entries).get("Calma")).toBe(2);
        expect(countByEmotion(entries).get("Alegría")).toBe(1);
        expect(countByTag(entries).get("trabajo")).toBe(1);
        expect(countByTag(entries).get("familia")).toBe(1);
    });

    it("genera 8 semanas y cuenta solo las incluidas en la ventana", () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date("2026-05-20T12:00:00.000Z"));
        const entries = [
            { id: 1, date: "2026-05-20T10:00:00.000Z", emotion: "Calma", note: "", tags: [] },
            { id: 2, date: "2026-03-01T10:00:00.000Z", emotion: "Calma", note: "", tags: [] },
        ];

        const weeks = last8Weeks(entries);
        expect(weeks).toHaveLength(8);
        expect(weeks.reduce((sum, week) => sum + week.count, 0)).toBe(1);
    });
});

describe("createReports", () => {
    it("usa etiquetas traducidas para contextos", () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date("2026-05-25T12:00:00.000Z"));
        setDiaryEntries([{ id: 1, date: "2026-05-20T10:00:00.000Z", emotion: "Calma", note: "", tags: ["trabajo"] }]);
        const t = (key) => ({
            "reports.title": "Reports",
            "reports.noEntries": "No entries",
            "reports.emotionFreq": "Emotions",
            "reports.tagDist": "Contexts",
            "reports.weeklyCount": "Weekly",
            "reports.allTimeStat": "Top",
            "reports.times": "times",
            "diary.tagTrabajo": "Work",
            "diary.tagPareja": "Partner",
            "diary.tagFamilia": "Family",
            "diary.tagCuerpo": "Body",
            "diary.tagDinero": "Money",
        })[key] ?? key;

        const reports = createReports({
            t,
            getDisplayName: (name) => name,
            emociones: [{ nombre: "Calma", color: "#000000" }],
        });

        reports.renderForTab();

        expect(document.getElementById("reports-content")?.textContent).toContain("Work");
        expect(document.getElementById("reports-content")?.textContent).not.toContain("trabajo");
    });
});
