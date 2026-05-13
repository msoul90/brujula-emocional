/**
 * BrujulaIcon — App icon for Brújula Emocional (TypeScript)
 *
 *   <BrujulaIcon size={48} />
 *   <BrujulaIcon size={1024} rounded={false} />
 */

import React from 'react';

export interface BrujulaIconProps {
  /** px width/height. Default 220. */
  size?: number;
  /** Background color. Default `#0D1B2A` (Tinta/Medianoche). */
  bg?: string;
  /** Ring + needle-back + ticks color. Default `#F1F4F9` (Niebla). */
  stroke?: string;
  /** North-tip accent color. Default `#F4A4A4` (Enojo). */
  accent?: string;
  /** Render iOS-style rounded mask. Set false for a transparent square. Default true. */
  rounded?: boolean;
  className?: string;
}

export default function BrujulaIcon({
  size = 220,
  bg = '#0D1B2A',
  stroke = '#F1F4F9',
  accent = '#F4A4A4',
  rounded = true,
  className,
}: BrujulaIconProps) {
  const r = rounded ? 51.48 : 0;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 220 220"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Brújula Emocional"
      className={className}
    >
      <rect x="0" y="0" width="220" height="220" rx={r} fill={bg} />
      <circle cx="110" cy="110" r="74" fill="none" stroke={stroke} strokeOpacity="0.18" strokeWidth="1.5" />
      <circle cx="110" cy="110" r="56" fill="none" stroke={stroke} strokeOpacity="0.12" strokeWidth="1" />
      <polygon points="110,34 130,110 110,118 90,110" fill={accent} />
      <polygon points="110,186 130,110 110,102 90,110" fill={stroke} fillOpacity="0.55" />
      <circle cx="110" cy="110" r="6" fill={stroke} />
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
