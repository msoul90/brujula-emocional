import { createClient } from "@supabase/supabase-js";

/**
 * Referencing `process.env.X` directly (rather than through a `globalThis.process`
 * indirection) is required so esbuild's `define` can statically replace each
 * value at build time — see scripts/build-js.js.
 * @type {{ SUPABASE_URL?: string, SUPABASE_ANON_KEY?: string }}
 */
const env = {
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
};

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
