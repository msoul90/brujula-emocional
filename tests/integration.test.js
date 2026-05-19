// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from "vitest";
import { setLanguage, getDiaryEntries, setDiaryEntries } from "../js/persistence.js";
import { createDiaryEntry } from "../js/diary.jsx";
import { createI18n } from "../js/i18n.js";
import { get, set } from "../js/store.js";
import { on, off } from "../js/bus.js";

beforeEach(() => {
    localStorage.clear();
    set("currentLang", "es");
});

describe("i18n + persistence", () => {
    it("detectInitialLanguage lee el idioma guardado en persistence", () => {
        setLanguage("en");
        const i18n = createI18n({
            getLang: () => get("currentLang"),
            setLang: () => {},
            onLanguageChanged: () => {},
        });
        expect(i18n.detectInitialLanguage()).toBe("en");
    });

    it("detectInitialLanguage devuelve 'es' cuando el idioma guardado es 'es'", () => {
        setLanguage("es");
        const i18n = createI18n({
            getLang: () => get("currentLang"),
            setLang: () => {},
            onLanguageChanged: () => {},
        });
        expect(i18n.detectInitialLanguage()).toBe("es");
    });
});

describe("diary + persistence", () => {
    it("una entrada creada y guardada es recuperable desde persistence", () => {
        const entry = createDiaryEntry("Calma", "nota de prueba");
        setDiaryEntries([entry]);

        const loaded = getDiaryEntries();
        expect(loaded).toHaveLength(1);
        expect(loaded[0].emotion).toBe("Calma");
        expect(loaded[0].note).toBe("nota de prueba");
        expect(loaded[0].id).toBeTypeOf("number");
        expect(loaded[0].date).toBeTypeOf("string");
    });

    it("múltiples entradas se recuperan en el orden guardado", () => {
        const entries = [
            createDiaryEntry("Alegría", ""),
            createDiaryEntry("Ansiedad", "algo me preocupa"),
        ];
        setDiaryEntries(entries);

        const loaded = getDiaryEntries();
        expect(loaded).toHaveLength(2);
        expect(loaded[0].emotion).toBe("Alegría");
        expect(loaded[1].emotion).toBe("Ansiedad");
    });
});

describe("store + bus", () => {
    it("set() en store dispara evento en el bus con value y prev", () => {
        const received = [];
        const listener = (payload) => received.push(payload);
        on("store:currentLang", listener);

        set("currentLang", "en");

        expect(received).toHaveLength(1);
        expect(received[0]).toEqual({ value: "en", prev: "es" });

        set("currentLang", "es");
        off("store:currentLang", listener);
    });
});
