-- Brújula Emocional — Supabase schema
-- Run this in: Supabase Dashboard → SQL Editor → New query

-- ── Profiles ────────────────────────────────────────────────────────────────
-- Minimal: only links to auth.users. Email lives in auth.users, not here.

CREATE TABLE IF NOT EXISTS public.profiles (
  id         UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "own profile"
  ON public.profiles FOR ALL
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Auto-create profile on sign-up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  INSERT INTO public.profiles (id) VALUES (NEW.id) ON CONFLICT DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- ── Diary entries ────────────────────────────────────────────────────────────
-- id is Date.now() from the client (millisecond timestamp).
-- Composite PK (id, user_id) prevents cross-user collisions.

CREATE TABLE IF NOT EXISTS public.diary_entries (
  id         BIGINT       NOT NULL,
  user_id    UUID         NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  date       TIMESTAMPTZ  NOT NULL,
  emotion    TEXT         NOT NULL,
  note       TEXT         NOT NULL DEFAULT '',
  tags       TEXT[]       NOT NULL DEFAULT '{}',
  synced_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id, user_id)
);

ALTER TABLE public.diary_entries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "own entries"
  ON public.diary_entries FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Index for fast per-user queries ordered by date
CREATE INDEX IF NOT EXISTS diary_entries_user_date
  ON public.diary_entries (user_id, date DESC);
