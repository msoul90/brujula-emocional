// @ts-check
import { getOfflineQueue, setOfflineQueue } from "./persistence.js";

/**
 * @typedef {{ type: "create", entry: import('./diary.jsx').DiaryEntry }} CreateOp
 * @typedef {{ type: "delete", id: number }} DeleteOp
 * @typedef {{ type: "clear" }} ClearOp
 * @typedef {CreateOp | DeleteOp | ClearOp} QueueOp
 */

/** @param {import('./diary.jsx').DiaryEntry} entry */
export function enqueueCreate(entry) {
    const q = getOfflineQueue();
    q.push(/** @type {CreateOp} */ ({ type: "create", entry }));
    setOfflineQueue(q);
}

export function enqueueClear() {
    // A clear invalidates all pending creates and deletes — replace the whole queue with one clear op
    setOfflineQueue([/** @type {ClearOp} */ ({ type: "clear" })]);
}

/** @param {number} id */
export function enqueueDelete(id) {
    const q = getOfflineQueue();
    // If there's a pending create for this id, removing it is enough — no cloud delete needed
    const withoutCreate = q.filter((op) => !(op.type === "create" && op.entry?.id === id));
    if (withoutCreate.length < q.length) {
        setOfflineQueue(withoutCreate);
        return;
    }
    // Remove duplicate pending deletes for same id, then push one
    const deduped = withoutCreate.filter((op) => !(op.type === "delete" && op.id === id));
    deduped.push(/** @type {DeleteOp} */ ({ type: "delete", id }));
    setOfflineQueue(deduped);
}

/**
 * @param {{ syncOnCreate: (e: any) => Promise<void>, syncOnDelete: (id: number) => Promise<void>, syncOnClearAll?: () => Promise<void>, syncEntriesToCloud?: (entries: any[]) => Promise<void>, syncOnDeleteBatch?: (ids: number[]) => Promise<void> }} cloudSync
 * @param {() => Promise<any>} getSession
 */
export async function flushQueue(cloudSync, getSession) {
    const q = getOfflineQueue();
    if (!q.length) return;
    const session = await getSession();
    if (!session) return;

    // Handle clear operation (typically alone in queue)
    const clearOp = q.find((op) => op.type === "clear");
    if (clearOp) {
        try {
            await cloudSync.syncOnClearAll?.();
            setOfflineQueue([]);
        } catch (error) {
            console.warn("Batch clear failed", error);
            // keep all operations in the queue
        }
        return;
    }

    // Check if batch capabilities are provided
    if (typeof cloudSync.syncEntriesToCloud === "function" && typeof cloudSync.syncOnDeleteBatch === "function") {
        const creates = q.filter((op) => op.type === "create");
        const deletes = q.filter((op) => op.type === "delete");
        const failed = [];

        // 1. Process batch creates
        if (creates.length > 0) {
            try {
                const entries = creates.map((op) => op.entry);
                await cloudSync.syncEntriesToCloud(entries);
            } catch (error) {
                console.warn("Batch create sync failed", error);
                failed.push(...creates);
            }
        }

        // 2. Process batch deletes
        if (deletes.length > 0) {
            try {
                const ids = deletes.map((op) => op.id);
                await cloudSync.syncOnDeleteBatch(ids);
            } catch (error) {
                console.warn("Batch delete sync failed", error);
                failed.push(...deletes);
            }
        }

        setOfflineQueue(failed);
    } else {
        // Fallback to sequential individual requests
        const failed = [];
        for (const op of q) {
            try {
                if (op.type === "create") {
                    await cloudSync.syncOnCreate(op.entry);
                } else if (op.type === "delete") {
                    await cloudSync.syncOnDelete(op.id);
                }
            } catch {
                failed.push(op);
            }
        }
        setOfflineQueue(failed);
    }
}
