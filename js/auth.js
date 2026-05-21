import { getSupabaseClient } from "./supabase.js";

const AUTH_REQUEST_TIMEOUT_MS = 10000;

/** @template T @param {Promise<T>} promise @param {number} timeoutMs @param {string} label */
function withTimeout(promise, timeoutMs, label) {
  let timeoutId;
  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = globalThis.setTimeout(() => {
      reject(new Error(`${label} timed out`));
    }, timeoutMs);
  });

  return Promise.race([promise, timeoutPromise]).finally(() => {
    if (timeoutId !== undefined) globalThis.clearTimeout(timeoutId);
  });
}

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

  const request = supabase.auth.signOut({ scope: "local" }).then(({ error }) => {
    if (error) throw error;
  });

  await withTimeout(request, AUTH_REQUEST_TIMEOUT_MS, "Sign out");
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
