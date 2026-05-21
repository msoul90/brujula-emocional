// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

const mockRemoveSession = vi.fn();
const mockSignOut = vi.fn();
const mockSupabase = {
  auth: {
    signOut: mockSignOut,
    _removeSession: mockRemoveSession,
  }
};

vi.mock("../js/supabase.js", () => ({
  getSupabaseClient: () => mockSupabase,
}));

import { signOut } from "../js/auth.js";

describe("auth signOut", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockSignOut.mockReset();
    mockRemoveSession.mockReset();
    localStorage.clear();
    localStorage.setItem("sb-auth-token", "token-data");
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("completes successfully on a normal successful signOut", async () => {
    mockSignOut.mockResolvedValue({ error: null });

    await signOut();

    expect(mockSignOut).toHaveBeenCalledWith({ scope: "local" });
    // In successful flow, Supabase library internally calls _removeSession
    // so our signOut doesn't call it again explicitly.
    expect(mockRemoveSession).not.toHaveBeenCalled();
  });

  it("falls back to local session cleanup and _removeSession on API error", async () => {
    mockSignOut.mockResolvedValue({ error: new Error("Supabase API error") });

    await signOut();

    expect(mockSignOut).toHaveBeenCalled();
    expect(mockRemoveSession).toHaveBeenCalled();
  });

  it("falls back to local session cleanup and _removeSession on exception", async () => {
    mockSignOut.mockRejectedValue(new Error("Network exception"));

    await signOut();

    expect(mockSignOut).toHaveBeenCalled();
    expect(mockRemoveSession).toHaveBeenCalled();
  });

  it("falls back to local session cleanup and _removeSession on timeout", async () => {
    let resolveSignOut;
    const pendingPromise = new Promise((resolve) => {
      resolveSignOut = resolve;
    });
    mockSignOut.mockReturnValue(pendingPromise);

    const signOutPromise = signOut();

    // Fast-forward time to trigger the timeout
    await vi.advanceTimersByTimeAsync(11000);
    await signOutPromise;

    expect(mockSignOut).toHaveBeenCalled();
    expect(mockRemoveSession).toHaveBeenCalled();

    // Clean up
    resolveSignOut({ error: null });
  });
});
