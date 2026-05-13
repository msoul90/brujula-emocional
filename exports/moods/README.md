# Mood Icons — Brújula Emocional

Iconos para la pantalla **¿Qué siento?** en estilo **Cara mínima** — caras dibujadas en línea, alternativa propia al emoji.

## Archivos

| Archivo | Para qué |
|---|---|
| `MoodIcon.jsx` | Componente React (JS). Un solo componente con prop `mood`. |
| `MoodIcon.tsx` | Mismo componente con tipos TypeScript. |
| `mood-agitated.svg` · `mood-sad.svg` · `mood-confused.svg` · `mood-good.svg` | SVGs planos. Cada uno con su color "deep" del sistema. |

## Uso (React)

```jsx
import MoodIcon, { MOOD_PALETTE } from './components/MoodIcon';

// Por defecto: 64px, color "deep" del mood
<MoodIcon mood="agitated" />
<MoodIcon mood="sad" />
<MoodIcon mood="confused" />
<MoodIcon mood="good" />

// Tamaño custom
<MoodIcon mood="good" size={96} />

// Color custom (override del default)
<MoodIcon mood="agitated" color="#FFFFFF" />
```

### Card completa (como en la app)

```jsx
function MoodCard({ mood, label, onClick }) {
  const c = MOOD_PALETTE[mood];
  return (
    <button onClick={onClick} style={{
      background: c.bg, color: c.ink, border: 'none',
      borderRadius: 18, padding: 18, height: 138,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      textAlign: 'left', cursor: 'pointer',
    }}>
      <MoodIcon mood={mood} size={56} />
      <span style={{ fontSize: 19, fontWeight: 700 }}>{label}</span>
    </button>
  );
}

<MoodCard mood="agitated" label="Agitado" />
```

## Paleta — `MOOD_PALETTE`

Cada mood expone 3 tonos:

| Mood | `bg` (card) | `ink` (texto + stroke del icono) | `soft` (hover / bg suave) |
|---|---|---|---|
| `agitated` | `#F5A5A0` | `#7A2E2E` | `#F8C7C2` |
| `sad`      | `#A4C3E3` | `#1F3F66` | `#C7D9EC` |
| `confused` | `#F5D88A` | `#7A5A1A` | `#FAE6B5` |
| `good`     | `#8FD4AE` | `#1E5237` | `#B8E3CC` |

## Modo oscuro

Para dark mode usa estos overrides de `bg` (tono ~25% más oscuro, mantén el mismo `ink` para alto contraste):

```js
const MOOD_DARK = {
  agitated: { bg: '#C77B77', ink: '#FFE7E5' },
  sad:      { bg: '#6E94BA', ink: '#E2EDF8' },
  confused: { bg: '#C5A463', ink: '#FBE8CB' },
  good:     { bg: '#5DA382', ink: '#DDF1E6' },
};

<MoodIcon mood="agitated" color={MOOD_DARK.agitated.ink} />
```

## Notas de diseño

- ViewBox `0 0 80 80`, círculo facial de radio 26 — escala limpia desde 24px hasta 200px.
- Stroke 3.5 para el contorno facial, 3 para los rasgos. Mantén la proporción si re-escalas.
- Cada cara usa una mirada distinta para que sean reconocibles de un vistazo, incluso en bn:
  - **Agitado** — ojos abiertos (puntos), boca zigzag, cejas tensas hacia abajo
  - **Triste** — ojos cerrados curvos hacia abajo, boca volteada, lágrima
  - **Confundido** — ojos asimétricos, cejas opuestas, boca ondulada
  - **Bien** — ojos cerrados curvos hacia arriba, sonrisa suave
