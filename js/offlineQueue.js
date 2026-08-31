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

/** @typedef {{ syncOnCreate: (e: any) => Promise<void>, syncOnDelete: (id: number) => Promise<void>, syncOnClearAll?: () => Promise<void>, syncEntriesToCloud?: (entries: any[]) => Promise<void>, syncOnDeleteBatch?: (ids: number[]) => Promise<void> }} CloudSync */

/** @param {CloudSync} cloudSync */
async function flushClear(cloudSync) {
    try {
        await cloudSync.syncOnClearAll?.();
        setOfflineQueue([]);
    } catch (error) {
        console.warn("Batch clear failed", error);
        // keep all operations in the queue
    }
}

/**
 * @param {any[]} q
 * @param {CloudSync} cloudSync
 */
async function flushBatched(q, cloudSync) {
    const creates = q.filter((op) => op.type === "create");
    const deletes = q.filter((op) => op.type === "delete");
    const failed = [];

    if (creates.length > 0) {
        try {
            await cloudSync.syncEntriesToCloud?.(creates.map((op) => op.entry));
        } catch (error) {
            console.warn("Batch create sync failed", error);
            failed.push(...creates);
        }
    }

    if (deletes.length > 0) {
        try {
            await cloudSync.syncOnDeleteBatch?.(deletes.map((op) => op.id));
        } catch (error) {
            console.warn("Batch delete sync failed", error);
            failed.push(...deletes);
        }
    }

    setOfflineQueue(failed);
}

/**
 * @param {any[]} q
 * @param {CloudSync} cloudSync
 */
async function flushSequential(q, cloudSync) {
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

/**
 * @param {CloudSync} cloudSync
 * @param {() => Promise<any>} getSession
 */
export async function flushQueue(cloudSync, getSession) {
    const q = getOfflineQueue();
    if (!q.length) return;
    const session = await getSession();
    if (!session) return;

    // A clear op is typically alone in the queue and supersedes everything else.
    if (q.some((op) => op.type === "clear")) {
        await flushClear(cloudSync);
        return;
    }

    const canBatch = typeof cloudSync.syncEntriesToCloud === "function"
        && typeof cloudSync.syncOnDeleteBatch === "function";
    if (canBatch) {
        await flushBatched(q, cloudSync);
    } else {
        await flushSequential(q, cloudSync);
    }
}
