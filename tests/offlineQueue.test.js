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

describe("flushQueue — batching y fallback", () => {
    const mockGetSession = vi.fn();

    beforeEach(() => {
        mockGetSession.mockReset();
    });

    it("utiliza syncEntriesToCloud y syncOnDeleteBatch si están definidos", async () => {
        const entry1 = { id: 10, date: "2024-01-01T00:00:00.000Z", emotion: "Miedo", note: "", tags: [] };
        const entry2 = { id: 11, date: "2024-01-02T00:00:00.000Z", emotion: "Alegría", note: "", tags: [] };
        enqueueCreate(entry1);
        enqueueCreate(entry2);
        enqueueDelete(20);
        enqueueDelete(21);

        const mockSync = {
            syncOnCreate: vi.fn(),
            syncOnDelete: vi.fn(),
            syncEntriesToCloud: vi.fn().mockResolvedValue(undefined),
            syncOnDeleteBatch: vi.fn().mockResolvedValue(undefined),
        };
        mockGetSession.mockResolvedValue({ user: { id: "u1" } });

        await flushQueue(mockSync, mockGetSession);

        expect(mockSync.syncEntriesToCloud).toHaveBeenCalledWith([entry1, entry2]);
        expect(mockSync.syncOnDeleteBatch).toHaveBeenCalledWith([20, 21]);
        expect(mockSync.syncOnCreate).not.toHaveBeenCalled();
        expect(mockSync.syncOnDelete).not.toHaveBeenCalled();
        expect(getOfflineQueue()).toHaveLength(0);
    });

    it("re-encola operaciones fallidas de lotes", async () => {
        const entry1 = { id: 10, date: "2024-01-01T00:00:00.000Z", emotion: "Miedo", note: "", tags: [] };
        enqueueCreate(entry1);
        enqueueDelete(20);

        const mockSync = {
            syncOnCreate: vi.fn(),
            syncOnDelete: vi.fn(),
            syncEntriesToCloud: vi.fn().mockRejectedValue(new Error("Batch create failed")),
            syncOnDeleteBatch: vi.fn().mockRejectedValue(new Error("Batch delete failed")),
        };
        mockGetSession.mockResolvedValue({ user: { id: "u1" } });

        await flushQueue(mockSync, mockGetSession);

        expect(mockSync.syncEntriesToCloud).toHaveBeenCalledOnce();
        expect(mockSync.syncOnDeleteBatch).toHaveBeenCalledOnce();
        // Siguen en la cola las fallidas
        const q = getOfflineQueue();
        expect(q).toHaveLength(2);
        expect(q[0]).toEqual({ type: "create", entry: entry1 });
        expect(q[1]).toEqual({ type: "delete", id: 20 });
    });

    it("hace fallback a peticiones secuenciales individuales si falta alguna función de lote", async () => {
        const entry1 = { id: 10, date: "2024-01-01T00:00:00.000Z", emotion: "Miedo", note: "", tags: [] };
        enqueueCreate(entry1);
        enqueueDelete(20);

        const mockSync = {
            syncOnCreate: vi.fn().mockResolvedValue(undefined),
            syncOnDelete: vi.fn().mockResolvedValue(undefined),
            syncEntriesToCloud: vi.fn(), // Pero no syncOnDeleteBatch
        };
        mockGetSession.mockResolvedValue({ user: { id: "u1" } });

        await flushQueue(mockSync, mockGetSession);

        expect(mockSync.syncEntriesToCloud).not.toHaveBeenCalled();
        expect(mockSync.syncOnCreate).toHaveBeenCalledWith(entry1);
        expect(mockSync.syncOnDelete).toHaveBeenCalledWith(20);
        expect(getOfflineQueue()).toHaveLength(0);
    });

    it("re-encola operaciones fallidas individuales en fallback secuencial", async () => {
        const entry1 = { id: 10, date: "2024-01-01T00:00:00.000Z", emotion: "Miedo", note: "", tags: [] };
        enqueueCreate(entry1);
        enqueueDelete(20);

        const mockSync = {
            syncOnCreate: vi.fn().mockRejectedValue(new Error("individual fail")),
            syncOnDelete: vi.fn().mockResolvedValue(undefined),
        };
        mockGetSession.mockResolvedValue({ user: { id: "u1" } });

        await flushQueue(mockSync, mockGetSession);

        expect(mockSync.syncOnCreate).toHaveBeenCalledWith(entry1);
        expect(mockSync.syncOnDelete).toHaveBeenCalledWith(20);
        
        // Solo la fallida queda en la cola
        const q = getOfflineQueue();
        expect(q).toEqual([{ type: "create", entry: entry1 }]);
    });
});
