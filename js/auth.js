import { getSupabaseClient } from "./supabase.js";

/** @param {string} email @param {string} [captchaToken] */
export async function signInWithMagicLink(email, captchaToken) {
  const supabase = getSupabaseClient();
  if (!supabase) return { error: new Error("Supabase not configured") };
  return supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: location.origin + location.pathname,
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

export async function completeMagicLinkSignIn() {
  const supabase = getSupabaseClient();
  if (!supabase) return null;

  const url = new URL(location.href);
  const authCode = url.searchParams.get("code");
  if (!authCode) return null;

  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);
  if (error) throw error;

  url.searchParams.delete("code");
  url.searchParams.delete("type");
  const cleanedSearch = url.searchParams.toString();
  const cleanUrl = `${url.pathname}${cleanedSearch ? `?${cleanedSearch}` : ""}${url.hash}`;
  history.replaceState({}, "", cleanUrl);

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
