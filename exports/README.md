# Brújula Emocional — App Icon

Carpeta lista para tu IDE. Copia el archivo que necesites a tu proyecto.

## Archivos

| Archivo | Para qué |
|---|---|
| `BrujulaIcon.jsx` | Componente React (JavaScript). Copia a `src/components/`. |
| `BrujulaIcon.tsx` | Componente React + TypeScript. Mismo API, con tipos. |
| `BrujulaIcon.svg` | SVG plano. Úsalo para favicon, `<img>`, manifest, o conviértelo a PNG. |

## Uso (React)

```jsx
import BrujulaIcon from './components/BrujulaIcon';

// Tamaño por defecto
<BrujulaIcon />

// Pequeño para nav o header
<BrujulaIcon size={32} />

// Sin máscara redondeada (para exportar a PNG de 1024×1024)
<BrujulaIcon size={1024} rounded={false} />

// Variante "Norte" si quieres acento distinto
<BrujulaIcon accent="#5B82FF" />
```

## Tokens del icono

| Token | Hex | Uso |
|---|---|---|
| `bg` | `#0D1B2A` | Fondo del icono (Tinta/Medianoche) |
| `stroke` | `#F1F4F9` | Anillos, aguja sur, pivote, ticks (Niebla) |
| `accent` | `#F4A4A4` | Punta norte (color Enojo del sistema) |

## Exportar a PNG (favicon, app store)

Desde la línea de comandos con [`@resvg/resvg-js`](https://github.com/yisibl/resvg-js) o ImageMagick:

```bash
# resvg
npx @resvg/resvg-js-cli BrujulaIcon.svg -w 1024 -o icon-1024.png
npx @resvg/resvg-js-cli BrujulaIcon.svg -w 512  -o icon-512.png
npx @resvg/resvg-js-cli BrujulaIcon.svg -w 192  -o icon-192.png
npx @resvg/resvg-js-cli BrujulaIcon.svg -w 32   -o favicon-32.png
```

O simplemente abre `BrujulaIcon.svg` en Figma / Inkscape y exporta los tamaños que necesites.

## PWA / manifest.json

```json
{
  "name": "Brújula Emocional",
  "short_name": "Brújula",
  "theme_color": "#0D1B2A",
  "background_color": "#F1F4F9",
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
```

## HTML head (favicon)

```html
<link rel="icon" type="image/svg+xml" href="/BrujulaIcon.svg" />
<link rel="apple-touch-icon" href="/icon-192.png" />
<meta name="theme-color" content="#0D1B2A" />
```
