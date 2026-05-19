import { describe, it, expect, vi } from "vitest";
import { on, off, emit } from "../js/bus.js";

describe("bus", () => {
    it("emit llama al listener registrado con on", () => {
        const fn = vi.fn();
        on("test:event", fn);
        emit("test:event", { x: 1 });
        expect(fn).toHaveBeenCalledOnce();
        expect(fn).toHaveBeenCalledWith({ x: 1 });
        off("test:event", fn);
    });

    it("emit llama a todos los listeners del mismo evento", () => {
        const fn1 = vi.fn();
        const fn2 = vi.fn();
        on("multi:event", fn1);
        on("multi:event", fn2);
        emit("multi:event");
        expect(fn1).toHaveBeenCalledOnce();
        expect(fn2).toHaveBeenCalledOnce();
        off("multi:event", fn1);
        off("multi:event", fn2);
    });

    it("off elimina el listener — no se llama en el siguiente emit", () => {
        const fn = vi.fn();
        on("off:event", fn);
        off("off:event", fn);
        emit("off:event");
        expect(fn).not.toHaveBeenCalled();
    });

    it("emit en evento sin listeners no lanza error", () => {
        expect(() => emit("sin:listeners")).not.toThrow();
    });

    it("off en evento sin listeners no lanza error", () => {
        const fn = vi.fn();
        expect(() => off("inexistente", fn)).not.toThrow();
    });
});
