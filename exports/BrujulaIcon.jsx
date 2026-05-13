/**
 * BrujulaIcon — App icon for Brújula Emocional
 *
 * Props:
 *   size?:    number — px width/height (default 220)
 *   bg?:      string — background fill (default #0D1B2A — Tinta/Medianoche)
 *   stroke?:  string — ring + needle-back + ticks color (default #F1F4F9 — Niebla)
 *   accent?:  string — north tip color (default #F4A4A4 — Enojo)
 *   rounded?: boolean — render iOS-style mask (default true). Set false for transparent square.
 *
 * Usage:
 *   import BrujulaIcon from './BrujulaIcon';
 *   <BrujulaIcon size={48} />
 *   <BrujulaIcon size={1024} rounded={false} />   // for export pipelines
 */

import React from 'react';

export default function BrujulaIcon({
  size = 220,
  bg = '#0D1B2A',
  stroke = '#F1F4F9',
  accent = '#F4A4A4',
  rounded = true,
}) {
  const r = rounded ? 51.48 : 0; // 220 * 0.234 — iOS mask radius
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 220 220"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Brújula Emocional"
    >
      <rect x="0" y="0" width="220" height="220" rx={r} fill={bg} />
      <circle cx="110" cy="110" r="74" fill="none" stroke={stroke} strokeOpacity="0.18" strokeWidth="1.5" />
      <circle cx="110" cy="110" r="56" fill="none" stroke={stroke} strokeOpacity="0.12" strokeWidth="1" />
      {/* needle — north */}
      <polygon points="110,34 130,110 110,118 90,110" fill={accent} />
      {/* needle — south */}
      <polygon points="110,186 130,110 110,102 90,110" fill={stroke} fillOpacity="0.55" />
      {/* pivot */}
      <circle cx="110" cy="110" r="6" fill={stroke} />
      {/* cardinal ticks */}
      {[0, 90, 180, 270].map((a) => (
        <rect
          key={a}
          x="109"
          y="22"
          width="2"
          height="10"
          fill={stroke}
          fillOpacity="0.4"
          transform={`rotate(${a} 110 110)`}
        />
      ))}
    </svg>
  );
}
