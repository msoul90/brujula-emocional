import { createClient } from "@supabase/supabase-js";

let client = null;

export function getSupabaseClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  if (!client) {
    client = createClient(url, key, {
      auth: {
        persistSession: true,
        storage: localStorage,
        flowType: "pkce",
      },
    });
  }
  return client;
}
