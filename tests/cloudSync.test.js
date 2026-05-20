import { describe, it, expect } from "vitest";
import { mergeEntries } from "../js/cloudSync.js";

describe("mergeEntries", () => {
    it("prioriza la entrada remota cuando hay conflicto por id", () => {
        const local = [{ id: 1, date: "2026-05-01T10:00:00.000Z", emotion: "Calma", note: "local", tags: [] }];
        const remote = [{ id: 1, date: "2026-05-02T10:00:00.000Z", emotion: "Alegría", note: "remote", tags: ["familia"] }];

        expect(mergeEntries(local, remote)).toEqual(remote);
    });

    it("devuelve entradas ordenadas por fecha descendente", () => {
        const local = [{ id: 1, date: "2026-05-01T10:00:00.000Z", emotion: "Calma", note: "", tags: [] }];
        const remote = [{ id: 2, date: "2026-05-03T10:00:00.000Z", emotion: "Alegría", note: "", tags: [] }];

        expect(mergeEntries(local, remote).map((entry) => entry.id)).toEqual([2, 1]);
    });
});
