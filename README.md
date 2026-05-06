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

## Próximas mejoras sugeridas

- Añadir pruebas manuales documentadas por escenario
- Separar [app.js](app.js) en módulos pequeños
- Incluir traducciones adicionales (por ejemplo PT/FR)
- Agregar botón "Instalar app" en la interfaz usando `beforeinstallprompt`
