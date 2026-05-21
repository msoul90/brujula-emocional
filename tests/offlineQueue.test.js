// @ts-check
// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from "vitest";
import { enqueueCreate, enqueueDelete, enqueueClear, flushQueue } from "../js/offlineQueue.js";
import { getOfflineQueue } from "../js/persistence.js";

beforeEach(() => {
    localStorage.clear();
});

// ── enqueueClear ─────────────────────────────────────────────────────────────

describe("enqueueClear", () => {
    it("añade un op clear a una cola vacía", () => {
        enqueueClear();
        expect(getOfflineQueue()).toEqual([{ type: "clear" }]);
    });

    it("descarta creates y deletes previos", () => {
        enqueueCreate({ id: 1, date: "2024-01-01T00:00:00.000Z", emotion: "Enojo", note: "", tags: [] });
        enqueueDelete(2);
        enqueueClear();
        expect(getOfflineQueue()).toEqual([{ type: "clear" }]);
    });

    it("múltiples clears dejan solo un op", () => {
        enqueueClear();
        enqueueClear();
        expect(getOfflineQueue()).toHaveLength(1);
        expect(getOfflineQueue()[0].type).toBe("clear");
    });

    it("un create después del clear queda después del clear en la cola", () => {
        enqueueClear();
        enqueueCreate({ id: 3, date: "2024-01-01T00:00:00.000Z", emotion: "Alegría", note: "", tags: [] });
        const q = getOfflineQueue();
        expect(q[0].type).toBe("clear");
        expect(q[1].type).toBe("create");
    });
});

// ── enqueueCreate / enqueueDelete (comportamiento existente sin cambios) ──────

describe("enqueueCreate", () => {
    it("añade la entrada a la cola", () => {
        const entry = { id: 10, date: "2024-01-01T00:00:00.000Z", emotion: "Miedo", note: "", tags: [] };
        enqueueCreate(entry);
        const q = getOfflineQueue();
        expect(q).toHaveLength(1);
        expect(q[0]).toEqual({ type: "create", entry });
    });
});

describe("enqueueDelete", () => {
    it("cancela un create pendiente para el mismo id en vez de añadir delete", () => {
        const entry = { id: 5, date: "2024-01-01T00:00:00.000Z", emotion: "Calma", note: "", tags: [] };
        enqueueCreate(entry);
        enqueueDelete(5);
        expect(getOfflineQueue()).toHaveLength(0);
    });

    it("añade delete si no hay create pendiente para ese id", () => {
        enqueueDelete(99);
        expect(getOfflineQueue()).toEqual([{ type: "delete", id: 99 }]);
    });

    it("deduplica deletes del mismo id", () => {
        enqueueDelete(7);
        enqueueDelete(7);
        const q = getOfflineQueue();
        expect(q.filter((op) => op.type === "delete" && op.id === 7)).toHaveLength(1);
    });
});

// ── flushQueue ────────────────────────────────────────────────────────────────

describe("flushQueue — op clear", () => {
    const mockGetSession = vi.fn();

    beforeEach(() => {
        mockGetSession.mockReset();
    });

    it("llama syncOnClearAll cuando la cola tiene un op clear", async () => {
        enqueueClear();
        const mockSync = {
            syncOnCreate: vi.fn().mockResolvedValue(undefined),
            syncOnDelete: vi.fn().mockResolvedValue(undefined),
            syncOnClearAll: vi.fn().mockResolvedValue(undefined),
        };
        mockGetSession.mockResolvedValue({ user: { id: "u1" } });

        await flushQueue(mockSync, mockGetSession);

        expect(mockSync.syncOnClearAll).toHaveBeenCalledOnce();
        expect(getOfflineQueue()).toHaveLength(0);
    });

    it("re-encola el clear si syncOnClearAll lanza error", async () => {
        enqueueClear();
        const mockSync = {
            syncOnCreate: vi.fn().mockResolvedValue(undefined),
            syncOnDelete: vi.fn().mockResolvedValue(undefined),
            syncOnClearAll: vi.fn().mockRejectedValue(new Error("network")),
        };
        mockGetSession.mockResolvedValue({ user: { id: "u1" } });

        await flushQueue(mockSync, mockGetSession);

        expect(getOfflineQueue()).toEqual([{ type: "clear" }]);
    });

    it("no hace nada si no hay sesión", async () => {
        enqueueClear();
        const mockSync = {
            syncOnCreate: vi.fn(),
            syncOnDelete: vi.fn(),
            syncOnClearAll: vi.fn(),
        };
        mockGetSession.mockResolvedValue(null);

        await flushQueue(mockSync, mockGetSession);

        expect(mockSync.syncOnClearAll).not.toHaveBeenCalled();
        // La cola no se vacía
        expect(getOfflineQueue()).toHaveLength(1);
    });

    it("funciona sin syncOnClearAll definido (opcional)", async () => {
        enqueueClear();
        const mockSync = {
            syncOnCreate: vi.fn().mockResolvedValue(undefined),
            syncOnDelete: vi.fn().mockResolvedValue(undefined),
            // syncOnClearAll no definido
        };
        mockGetSession.mockResolvedValue({ user: { id: "u1" } });

        await expect(flushQueue(mockSync, mockGetSession)).resolves.not.toThrow();
        expect(getOfflineQueue()).toHaveLength(0);
    });
});
