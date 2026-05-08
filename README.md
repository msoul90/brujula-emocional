# Brújula Emocional

Aplicación web ligera para identificar y comprender emociones de forma clara y práctica.

## Descripción

Brújula Emocional muestra un catálogo de emociones con información de apoyo:

- Cómo se siente en el cuerpo
- Qué la dispara
- Para qué sirve (función biológica/psicológica)
- Qué mensaje puede estar trayendo
- Impulso a evitar
- Qué respuesta sugerida puede ayudar

La app está pensada para ser rápida, simple y usable desde móvil.

## Funcionalidades

- Listado de 19 emociones en tarjetas
- Búsqueda en tiempo real (nombre, sensación, disparador y mensaje, en ambos idiomas)
- Modal con detalle completo de cada emoción (sensación, disparador, función, mensaje, impulso a evitar, respuesta sugerida)
- Compartir emoción: genera una imagen PNG de la tarjeta usando `<canvas>` y la comparte con Web Share API o la descarga directamente
- Quiz emocional para identificar qué se siente a partir de síntomas
- Sección de emociones vistas recientemente (persistente con localStorage)
- Panel de ajustes compacto: modo claro / automático / oscuro + selector de idioma
- Navegación por teclado (Tab, Enter, Espacio, Escape)
- Cierre de modal por botón, tecla Escape o toque en fondo
- Soporte multi-idioma ES/EN con persistencia
- Botón de instalación PWA inteligente (Android/Chrome y guía para iOS/Safari)
- Funciona offline gracias al Service Worker con auto-actualización silenciosa
- Respeto de `prefers-reduced-motion`

## Tecnologías

- HTML5
- CSS personalizado (`styles.css`) + Tailwind CSS pre-generado (`dist/tailwind.css`)
- JavaScript vanilla modular con esbuild como único bundler
- Fuente Inter self-hosted (`pwa/fonts/inter.woff2`) para tipografía consistente entre dispositivos
- Íconos SVG inline (sin dependencia externa)
- Service Worker para soporte offline
- Vitest para tests automatizados

## Desarrollo

**Primera vez:**

```bash
npm install
```

**Build completo** (SW version bump + bundle JS + CSS):

```bash
npm run build
```

**Desarrollo local:**

```bash
npm run dev   # alias de npx serve .
```

**Tests:**

```bash
npm test            # ejecuta todos los tests una vez
npm run test:watch  # modo watch durante desarrollo
```

El pre-commit hook ejecuta `npm run build` automáticamente en cada `git commit`, así los artefactos generados (`dist/`, `sw.js`, `js/version.js`) siempre están actualizados.

## Estructura del proyecto

```text
├── index.html               Estructura principal de la interfaz
├── app.js                   Punto de entrada (ES6 modules): estado, bootstrap
├── loader.js                Detecta file:// vs http:// y carga dist/app.bundle.js o app.js
├── styles.css               Estilos personalizados (transiciones, foco, scrollbar, @font-face)
├── sw.js                    Service Worker (cache-first, soporte offline)
├── vitest.config.js         Configuración de tests
├── js/
│   ├── constants.js         Datos de emociones, traducciones, claves de localStorage
│   ├── i18n.js              Detección de idioma, función t(), traducciones al DOM
│   ├── ui.js                Render de tarjetas y modal, búsqueda, eventos, canvas share
│   ├── utils.js             Funciones puras: normalizeText, getReadableTextColor, wrapTextLines
│   ├── quiz.js              Lógica del quiz de identificación emocional
│   └── version.js           Versión de build auto-generada (no editar manualmente)
├── dist/
│   ├── tailwind.css         CSS de Tailwind pre-generado (no editar manualmente)
│   └── app.bundle.js        Bundle para uso con file:// (no editar manualmente)
├── tests/
│   ├── utils.test.js        Tests de normalizeText, getReadableTextColor, wrapTextLines
│   ├── i18n.test.js         Tests de t(), getDisplayName(), getEmotionField()
│   └── quiz.test.js         Tests de estructura y caminos del quiz
├── scripts/
│   └── bump-sw-version.js   Actualiza CACHE_NAME en sw.js y genera js/version.js
└── pwa/
    ├── manifest.webmanifest
    ├── fonts/inter.woff2    Fuente Inter variable (latin subset)
    └── icons/
```

## Instalar como PWA

El botón **Instalar app** aparece automáticamente en el encabezado cuando el navegador lo permite:

- **Android/Chrome**: el botón activa el prompt nativo de instalación.
- **iOS/Safari**: el botón abre una guía con los pasos para "Añadir a pantalla de inicio".
- El botón se oculta si la app ya está instalada en modo standalone.

Para que la instalación esté disponible, la app debe ejecutarse en `http://` o `https://`.

## Accesibilidad y UX

- Foco visible para navegación por teclado
- Etiquetas ARIA en todos los elementos interactivos
- Modal con `role="dialog"`, `aria-modal` y `aria-labelledby`
- Foco devuelto a la tarjeta de origen al cerrar el modal
- Estados vacíos con mensaje amigable
- Animaciones suaves con reducción automática cuando el sistema lo solicita
- Content Security Policy (CSP) en todas las páginas

## Pruebas manuales por escenario

### Escenario 1: Carga inicial

1. Abrir la app en `http://localhost`.
2. Verificar que se muestran las 19 tarjetas de emociones.
3. Verificar que el selector de idioma aparece en cabecera.

### Escenario 2: Búsqueda

1. Escribir una emoción exacta (por ejemplo `Ansiedad`).
2. Confirmar que la lista se filtra correctamente.
3. Probar con una palabra de contenido (por ejemplo `incertidumbre`).
4. Probar búsqueda en inglés tras cambiar idioma (por ejemplo `boundaries`).
5. Probar una búsqueda sin resultados y verificar el estado vacío.

### Escenario 3: Modal de detalle

1. Abrir una emoción desde la lista.
2. Confirmar que se muestran todas las secciones: sensación, disparador, función, mensaje, impulso a evitar y respuesta sugerida.
3. Cerrar con botón `Entendido`.
4. Abrir de nuevo y cerrar tocando fondo oscuro.
5. Abrir de nuevo y cerrar con tecla `Escape`.
6. Verificar que el foco regresa a la tarjeta de origen.

### Escenario 4: Navegación por teclado

1. Usar `Tab` para navegar entre elementos interactivos.
2. Abrir una tarjeta con `Enter` o `Espacio`.
3. Verificar foco visible en elementos navegables.
4. Cerrar modal con `Escape` y validar retorno de foco.

### Escenario 5: Recientes

1. Abrir varias emociones distintas.
2. Verificar que aparecen en `Vistas recientemente`.
3. Recargar la página y confirmar persistencia en localStorage.
4. Verificar que no se duplican y que respeta el límite de 5.

### Escenario 6: Multi-idioma

1. Cambiar idioma a `EN`.
2. Verificar traducción de textos de interfaz y contenido de emociones.
3. Probar búsqueda en inglés.
4. Recargar y confirmar persistencia del idioma.

### Escenario 7: PWA e instalación

1. Ejecutar en `http://localhost`.
2. Confirmar que aparece el botón `Instalar app` en el encabezado.
3. Instalar la app y abrirla como ventana independiente.
4. Verificar que el botón desaparece tras la instalación.

### Escenario 8: Soporte offline y actualización automática

1. Ejecutar en `http://localhost` y esperar a que el Service Worker se registre.
2. En DevTools → Network, activar modo offline.
3. Recargar la página y confirmar que la app carga con estilos completos.
4. Para verificar la actualización automática: desplegar una nueva versión, visitar el sitio — la página se recarga sola al activarse el nuevo SW.

### Escenario 9: Modo oscuro

1. Abrir el panel de ajustes (icono engranaje).
2. Seleccionar modo oscuro y verificar que el fondo, tarjetas y modal cambian de color.
3. Recargar la página y confirmar que el modo persiste.
4. Cambiar a modo automático y verificar que sigue la preferencia del sistema.

### Escenario 10: Compartir emoción

1. Abrir el modal de cualquier emoción.
2. Pulsar el botón **Compartir**.
3. En móvil: confirmar que aparece el diálogo nativo de compartir con una imagen PNG adjunta.
4. En escritorio: confirmar que se descarga un archivo `.png` con el nombre de la emoción.
5. Verificar que la imagen incluye: nombre de la emoción, mensaje principal y respuesta sugerida.

### Escenario 11: Fallback file://

1. Abrir `index.html` directamente (doble clic).
2. Verificar que las emociones cargan correctamente sin servidor HTTP.
3. Confirmar que la búsqueda, el modal y el cambio de idioma funcionan.

## Próximas mejoras sugeridas

- Diario emocional: registrar entradas con fecha, emoción seleccionada y nota libre
- Estadísticas simples de emociones más frecuentes (derivadas del diario)
- Traducciones adicionales (PT/FR)
