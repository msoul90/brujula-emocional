import { createClient } from "@supabase/supabase-js";

/**
 * Typed env access for browser code without requiring Node typings.
 * @type {{ SUPABASE_URL?: string, SUPABASE_ANON_KEY?: string }}
 */
const env = /** @type {any} */ (globalThis).process?.env ?? {};

let client = null;

export function getSupabaseClient() {
  const url = env.SUPABASE_URL;
  const key = env.SUPABASE_ANON_KEY;
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
