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
 * @param {{ syncOnCreate: (e: any) => Promise<void>, syncOnDelete: (id: number) => Promise<void>, syncOnClearAll?: () => Promise<void> }} cloudSync
 * @param {() => Promise<any>} getSession
 */
export async function flushQueue(cloudSync, getSession) {
    const q = getOfflineQueue();
    if (!q.length) return;
    const session = await getSession();
    if (!session) return;
    const failed = [];
    for (const op of q) {
        try {
            if (op.type === "create") {
                await cloudSync.syncOnCreate(op.entry);
            } else if (op.type === "delete") {
                await cloudSync.syncOnDelete(op.id);
            } else if (op.type === "clear") {
                await cloudSync.syncOnClearAll?.();
            }
        } catch {
            failed.push(op);
        }
    }
    setOfflineQueue(failed);
}
