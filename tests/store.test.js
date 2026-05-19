import { describe, it, expect, vi } from "vitest";
import { get, set } from "../js/store.js";
import { on, off } from "../js/bus.js";

describe("store", () => {
    it("get retorna el valor inicial de currentLang", () => {
        expect(get("currentLang")).toBe("es");
    });

    it("set actualiza el valor y get lo devuelve", () => {
        set("currentLang", "en");
        expect(get("currentLang")).toBe("en");
        set("currentLang", "es");
    });

    it("set emite store:<key> en el bus con value y prev", () => {
        const fn = vi.fn();
        on("store:currentLang", fn);
        set("currentLang", "en");
        expect(fn).toHaveBeenCalledWith({ value: "en", prev: "es" });
        set("currentLang", "es");
        off("store:currentLang", fn);
    });

    it("set no emite si el valor no cambia", () => {
        const fn = vi.fn();
        on("store:currentLang", fn);
        set("currentLang", "es");
        expect(fn).not.toHaveBeenCalled();
        off("store:currentLang", fn);
    });

    it("get retorna null para lastFocusedCard inicial", () => {
        expect(get("lastFocusedCard")).toBeNull();
    });
});
