# Brújula Emocional

Aplicación web ligera para identificar y comprender emociones de forma clara y práctica.

## Descripción

Brújula Emocional muestra un catálogo de emociones con información de apoyo:

- Cómo se siente en el cuerpo
- Qué la dispara
- Qué mensaje puede estar trayendo
- Qué respuesta sugerida puede ayudar

La app está pensada para ser rápida, simple y usable desde móvil.

## Funcionalidades

- Listado de emociones en tarjetas
- Búsqueda en tiempo real (nombre, sensación, disparador y mensaje)
- Modal con detalle de cada emoción
- Sección de emociones vistas recientemente (persistente con localStorage)
- Navegación por teclado (Tab, Enter, Espacio, Escape)
- Cierre de modal por botón, tecla Escape o toque en fondo
- Soporte multi-idioma ES/EN
- Respeto de `prefers-reduced-motion`

## Tecnologías

- HTML5
- CSS (archivo externo)
- JavaScript vanilla (archivo externo)
- Tailwind CSS vía CDN
- Font Awesome vía CDN

## Estructura del proyecto

- [index.html](index.html): estructura principal de la interfaz
- [styles.css](styles.css): estilos personalizados
- [app.js](app.js): lógica de la aplicación (render, búsqueda, modal, i18n, recientes)

## Cómo ejecutar

No requiere build ni servidor.

1. Abrir [index.html](index.html) en el navegador.

Opcionalmente, puedes usar la extensión Live Server de VS Code si quieres recarga automática.

## Instalar en Chrome (PWA)

La app ya incluye base PWA (`pwa/manifest.webmanifest` + `sw.js`).

Para que Chrome permita instalarla:

1. Ejecuta la app en `http://localhost` o `https://`.
   `file://` no habilita instalación PWA.
2. Abre la URL en Chrome.
3. Haz clic en el ícono de instalar en la barra de direcciones, o en el menú de Chrome `Instalar Brújula Emocional`.

### Opción rápida en local

- Usa Live Server desde VS Code, o cualquier servidor estático local.

Ejemplo con Node (si lo tienes instalado):

```bash
npx serve .
```

Nota técnica: `sw.js` se mantiene en raíz para conservar alcance sobre toda la app.

## Accesibilidad y UX

- Foco visible para navegación por teclado
- Etiquetas ARIA en elementos interactivos
- Estados vacíos con mensaje amigable
- Animaciones suaves con reducción automática cuando el sistema lo solicita

## Pruebas manuales por escenario

### Escenario 1: Carga inicial

1. Abrir la app.
2. Verificar que se muestran tarjetas de emociones.
3. Verificar que el selector de idioma aparece en cabecera.

### Escenario 2: Búsqueda

1. Escribir una emoción exacta (por ejemplo `Ansiedad`).
2. Confirmar que la lista se filtra correctamente.
3. Probar con una palabra de contenido (por ejemplo `incertidumbre`).
4. Probar una búsqueda sin resultados y verificar el estado vacío.

### Escenario 3: Modal de detalle

1. Abrir una emoción desde la lista.
2. Confirmar que se muestran secciones de sensación, disparador, mensaje y respuesta.
3. Cerrar con botón `Entendido`.
4. Abrir de nuevo y cerrar tocando fondo oscuro.
5. Abrir de nuevo y cerrar con tecla `Escape`.

### Escenario 4: Navegación por teclado

1. Usar `Tab` para navegar entre elementos interactivos.
2. Abrir una tarjeta con `Enter` o `Espacio`.
3. Verificar foco visible en elementos navegables.
4. Cerrar modal con `Escape` y validar retorno de foco.

### Escenario 5: Recientes

1. Abrir varias emociones distintas.
2. Verificar que aparecen en `Vistas recientemente`.
3. Recargar la página y confirmar persistencia en localStorage.
4. Verificar que no se duplican y que respeta el límite.

### Escenario 6: Multi-idioma

1. Cambiar idioma a `EN`.
2. Verificar traducción de textos de interfaz y contenido de emociones.
3. Probar búsqueda en inglés.
4. Recargar y confirmar persistencia del idioma.

### Escenario 7: PWA e instalación en Chrome

1. Ejecutar en `http://localhost`.
2. Confirmar que Chrome ofrece instalación.
3. Instalar la app y abrirla como ventana independiente.
4. Verificar funcionamiento básico tras instalación.

### Escenario 8: Fallback file://

1. Abrir `index.html` directamente (doble clic).
2. Confirmar aparición de la banda de aviso para `file://`.
3. Verificar que las emociones cargan correctamente usando fallback.

## Próximas mejoras sugeridas

- Incluir traducciones adicionales (por ejemplo PT/FR)
- Agregar botón "Instalar app" en la interfaz usando `beforeinstallprompt`
