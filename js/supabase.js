import { createClient } from "@supabase/supabase-js";

/**
 * Typed shim for browser-side build-time env replacements.
 * esbuild replaces process.env.* at bundle time.
 * @type {{ env: { SUPABASE_URL?: string, SUPABASE_ANON_KEY?: string } }}
 */
const process = { env: {} };

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
