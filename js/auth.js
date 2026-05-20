import { getSupabaseClient } from "./supabase.js";

/** @param {string} email @param {string} [captchaToken] */
export async function signInWithMagicLink(email, captchaToken) {
  const supabase = getSupabaseClient();
  if (!supabase) return { error: new Error("Supabase not configured") };
  return supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: location.origin,
      ...(captchaToken ? { captchaToken } : {}),
    },
  });
}

export async function signOut() {
  const supabase = getSupabaseClient();
  if (!supabase) return;
  return supabase.auth.signOut({ scope: "local" });
}

export async function getSession() {
  const supabase = getSupabaseClient();
  if (!supabase) return null;
  const { data } = await supabase.auth.getSession();
  return data?.session ?? null;
}

export function onAuthStateChange(callback) {
  const supabase = getSupabaseClient();
  if (!supabase) return () => {};
  const { data } = supabase.auth.onAuthStateChange(callback);
  return () => data.subscription.unsubscribe();
}

export async function getUserEmail() {
  const session = await getSession();
  return session?.user?.email ?? null;
}
