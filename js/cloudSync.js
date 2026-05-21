import { getSupabaseClient } from "./supabase.js";
import { getSession } from "./auth.js";

function toRow(entry, userId) {
  return {
    id: entry.id,
    user_id: userId,
    date: entry.date,
    emotion: entry.emotion,
    note: entry.note ?? "",
    tags: entry.tags ?? [],
  };
}

function fromRow(row) {
  return {
    id: row.id,
    date: row.date,
    emotion: row.emotion,
    note: row.note ?? "",
    tags: row.tags ?? [],
  };
}

export function mergeEntries(local, remote) {
  const map = new Map();
  for (const e of local) map.set(e.id, e);
  for (const e of remote) map.set(e.id, e); // remote wins on conflict
  return Array.from(map.values()).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function syncEntriesToCloud(entries) {
  const supabase = getSupabaseClient();
  if (!supabase) return;
  const session = await getSession();
  if (!session) return;
  const rows = entries.map((e) => toRow(e, session.user.id));
  await supabase.from("diary_entries").upsert(rows, { onConflict: "id,user_id" });
}

export async function fetchEntriesFromCloud() {
  const supabase = getSupabaseClient();
  if (!supabase) return [];
  const session = await getSession();
  if (!session) return [];
  const { data, error } = await supabase
    .from("diary_entries")
    .select("*")
    .eq("user_id", session.user.id)
    .order("date", { ascending: false });
  if (error) return [];
  return (data ?? []).map(fromRow);
}

export async function syncOnCreate(entry) {
  const supabase = getSupabaseClient();
  if (!supabase) return;
  const session = await getSession();
  if (!session) return;
  await supabase
    .from("diary_entries")
    .upsert(toRow(entry, session.user.id), { onConflict: "id,user_id" });
}

export async function syncOnDelete(id) {
  const supabase = getSupabaseClient();
  if (!supabase) return;
  const session = await getSession();
  if (!session) return;
  await supabase
    .from("diary_entries")
    .delete()
    .eq("id", id)
    .eq("user_id", session.user.id);
}

export async function deleteAllEntries() {
  const supabase = getSupabaseClient();
  if (!supabase) return;
  const session = await getSession();
  if (!session) return;
  await supabase.from("diary_entries").delete().eq("user_id", session.user.id);
}
