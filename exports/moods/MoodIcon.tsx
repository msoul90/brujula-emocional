/**
 * MoodIcon — Brújula Emocional mood icons (Cara mínima style)
 *
 *   <MoodIcon mood="agitated" />
 *   <MoodIcon mood="good" size={96} color="#1E5237" />
 */

import React from 'react';

export type Mood = 'agitated' | 'sad' | 'confused' | 'good';

export interface MoodIconProps {
  /** Which mood to render. */
  mood: Mood;
  /** px width/height. Default 64. */
  size?: number;
  /** Stroke color. Defaults to each mood's deep tone from MOOD_PALETTE. */
  color?: string;
  className?: string;
}

export const MOOD_PALETTE: Record<Mood, { bg: string; ink: string; soft: string }> = {
  agitated: { bg: '#F5A5A0', ink: '#7A2E2E', soft: '#F8C7C2' },
  sad:      { bg: '#A4C3E3', ink: '#1F3F66', soft: '#C7D9EC' },
  confused: { bg: '#F5D88A', ink: '#7A5A1A', soft: '#FAE6B5' },
  good:     { bg: '#8FD4AE', ink: '#1E5237', soft: '#B8E3CC' },
};

const PATHS: Record<Mood, (s: string) => JSX.Element> = {
  agitated: (s) => (
    <g>
      <circle cx="40" cy="42" r="26" stroke={s} strokeWidth="3.5" fill="none" />
      <line x1="26" y1="32" x2="34" y2="36" stroke={s} strokeWidth="3" strokeLinecap="round" />
      <line x1="54" y1="32" x2="46" y2="36" stroke={s} strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="42" r="2" fill={s} />
      <circle cx="48" cy="42" r="2" fill={s} />
      <path d="M30 54 L34 50 L38 54 L42 50 L46 54 L50 50"
        stroke={s} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
  ),
  sad: (s) => (
    <g>
      <circle cx="40" cy="42" r="26" stroke={s} strokeWidth="3.5" fill="none" />
      <path d="M28 40 C 30 44, 34 44, 36 40" stroke={s} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M44 40 C 46 44, 50 44, 52 40" stroke={s} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M32 56 C 36 50, 44 50, 48 56" stroke={s} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M34 48 C 33 52, 31 54, 32 56 C 33 56, 34 54, 34 48 Z" fill={s} />
    </g>
  ),
  confused: (s) => (
    <g>
      <circle cx="40" cy="42" r="26" stroke={s} strokeWidth="3.5" fill="none" />
      <line x1="26" y1="34" x2="34" y2="32" stroke={s} strokeWidth="3" strokeLinecap="round" />
      <line x1="46" y1="32" x2="54" y2="36" stroke={s} strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="42" r="2" fill={s} />
      <circle cx="48" cy="42" r="2" fill={s} />
      <path d="M30 54 C 34 52, 38 56, 42 54 C 46 52, 48 56, 52 54"
        stroke={s} strokeWidth="3" strokeLinecap="round" fill="none" />
    </g>
  ),
  good: (s) => (
    <g>
      <circle cx="40" cy="42" r="26" stroke={s} strokeWidth="3.5" fill="none" />
      <path d="M28 42 C 30 38, 34 38, 36 42" stroke={s} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M44 42 C 46 38, 50 38, 52 42" stroke={s} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M30 52 C 34 60, 46 60, 50 52" stroke={s} strokeWidth="3" strokeLinecap="round" fill="none" />
    </g>
  ),
};

export default function MoodIcon({ mood, size = 64, color, className }: MoodIconProps) {
  const stroke = color || MOOD_PALETTE[mood].ink;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={mood}
      className={className}
    >
      {PATHS[mood](stroke)}
    </svg>
  );
}
