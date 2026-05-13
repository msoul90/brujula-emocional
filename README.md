# Brújula Emocional

Aplicación web progresiva para identificar, comprender y explorar las relaciones entre emociones de forma clara y práctica.

---

## Descripción

Brújula Emocional ayuda a las personas a poner nombre a lo que sienten y entender para qué sirve cada emoción. El enfoque es **funcional y no clínico**: cada emoción se presenta como una señal con una función biológica/psicológica, no como un problema a eliminar.

La app no sustituye atención profesional en salud mental. Es una herramienta de autoconocimiento para el día a día.

---

## Marco psicológico

### Modelo de las emociones

Cada emoción del catálogo está documentada con seis campos derivados de modelos contemporáneos de regulación emocional (principalmente la **Terapia Dialéctica Conductual — DBT** y el modelo de **Appraisal Theory**):

| Campo | Qué documenta | Base teórica |
|---|---|---|
| `siente` | Sensaciones corporales asociadas | Interoception / Teoría somática |
| `dispara` | Situaciones o pensamientos que la activan | Appraisal Theory (Lazarus) |
| `funcion` | Para qué sirve evolutiva y psicológicamente | Teoría funcional de las emociones |
| `mensaje` | Lo que la emoción está comunicando internamente | Terapia centrada en emociones (EFT) |
| `impulso` | Conducta impulsiva típica a reconocer y pausar | DBT — Emotion Regulation |
| `respuesta` | Acción saludable alternativa | DBT — Opposite Action / ACT |

### Criterios de selección del catálogo

Las 28 emociones no son un listado arbitrario. Se construyó contrastando tres taxonomías de referencia y aplicando criterios de utilidad práctica:

| Taxonomía | Cantidad | Limitación para este uso |
|---|---|---|
| Ekman (1992) | 6 emociones básicas | Demasiado genéricas — no distinguen, por ej., ansiedad de miedo, o culpa de vergüenza |
| Plutchik (1980) | 8 primarias + derivadas | Organización radial útil teóricamente, pero poco intuitiva para autoidentificación |
| Barrett — Teoría Constructiva (2017) | Continuo, sin categorías fijas | Conceptualmente sólida pero no operacionalizable en una UI de tarjetas |

Las 28 emociones del catálogo se seleccionaron con cuatro criterios:

1. **Cobertura del espacio circumplejo** — al menos tres emociones por cuadrante para que el check-in tenga densidad suficiente.
2. **Perfil funcional diferenciable** — cada emoción tiene un `funcion`, `mensaje` e `impulso` claramente distintos de sus vecinas. Emociones con perfiles casi idénticos (ej. terror vs. miedo) se consolidaron en una sola entrada.
3. **Relevancia clínica en DBT y EFT** — priorizadas emociones que aparecen con frecuencia en protocolos de regulación emocional y terapia centrada en emociones, donde existe vocabulario funcional establecido.
4. **Presencia en el mapa de relaciones** — se incluyeron emociones que participan en relaciones de coexistencia, escalada, enmascaramiento u oposición, porque sin esas conexiones la emoción aportaría poco al mapa.

Quedan fuera del catálogo emociones como esperanza, asombro o vergüenza ajena no porque sean irrelevantes, sino porque sus perfiles funcionales o sus relaciones con el resto del catálogo están menos documentados en las fuentes usadas.

### Modelo de estados de ánimo (check-in)

El check-in usa una aproximación al **modelo circumplejo de Russell** (1980), que organiza los estados emocionales en dos ejes: **activación** (alta/baja) y **valencia** (positiva/negativa):

```
          Alta activación
              │
   AGITADO   │   BIEN
  (negativa) │ (positiva)
─────────────┼─────────────
   TRISTE    │ CONFUNDIDO
  (negativa) │ (incierta)
              │
          Baja activación
```

Los cuatro estados agrupan emociones más específicas para facilitar la identificación cuando la persona aún no sabe exactamente qué siente.

> **Nota sobre "Confundido":** El circumplejo canónico de Russell define cuatro cuadrantes por cruce de activación y valencia, siendo el cuadrante bajo-positivo el de estados como *calma* o *satisfacción*. En esta app ese cuadrante se reemplaza por **Confundido**, un cuarto estado de valencia incierta que agrupa emociones cuya carga afectiva depende fuertemente del contexto (confusión, aburrimiento, celos). Esta es una adaptación deliberada, no un cuadrante estándar del modelo de Russell. La calma y el alivio se incluyen en el cuadrante **Bien** junto con emociones de mayor activación positiva.

### Mapa de relaciones

Las 35 relaciones modeladas en el mapa de emociones corresponden a cuatro tipos clínicamente documentados:

| Tipo | Descripción | Origen conceptual |
|---|---|---|
| **Coexiste** | Se sienten con frecuencia al mismo tiempo | Co-ocurrencia en estudios de afecto |
| **Escala a** | Una puede intensificarse y convertirse en otra | Cadenas de emociones (DBT) |
| **Enmascara** | Una emoción superficial oculta otra más vulnerable | Emociones primarias/secundarias (EFT) |
| **Opuesta** | Ancla regulatoria — sentir una reduce la otra | Acción opuesta (DBT) |

### Quiz de identificación

El quiz de tres preguntas es un **árbol de decisión pragmático**, no una implementación rigurosa del modelo circumplejo. Las preguntas usan dimensiones de dos marcos distintos:

| Pregunta | Dimensión | Marco teórico | Simplificación |
| --- | --- | --- | --- |
| ¿Cómo sientes tu cuerpo? | Activación | Circumplejo de Russell | Continuo colapsado en binario (activado / quieto) |
| ¿Cómo describirías lo que sientes? | Valencia | Circumplejo de Russell | Continuo colapsado en binario (agradable / incómodo) |
| ¿Parece relacionado con algo concreto? | Concreción del disparador | Appraisal Theory (Lazarus) | No es una dimensión del circumplejo |

Las dos primeras preguntas reducen los ejes continuos de Russell a opciones binarias para que el flujo sea rápido y accesible. La tercera pregunta abandona el circumplejo y usa la evaluación cognitiva del disparador (de la Appraisal Theory) como criterio de desambiguación dentro de los grupos de valencia negativa, donde la presencia o ausencia de un objeto concreto distingue emociones de alta especificidad (enojo, miedo) de estados más difusos (ansiedad, preocupación).

Esta simplificación es una decisión de diseño de UX consciente: sliders o escalas de 3 puntos representarían mejor la naturaleza continua del circumplejo, pero aumentarían la carga cognitiva y el tiempo de respuesta para alguien que ya está en un estado emocional intenso.

### Sobre el uso combinado de DBT y EFT

DBT y EFT comparten el interés por las emociones, pero tienen modelos distintos sobre las emociones secundarias — aquellas que surgen como reacción a otra emoción (sentir vergüenza por haber sentido enojo, o sentir miedo ante la propia tristeza).

| Aspecto | DBT | EFT |
| --- | --- | --- |
| Qué son las emociones secundarias | Reacciones aprendidas o basadas en juicios sobre la emoción primaria | Emociones superficiales que enmascaran una emoción primaria más vulnerable |
| Objetivo terapéutico | Regular la emoción presente con habilidades conductuales (check the facts, acción opuesta) | Acceder y procesar la emoción primaria subyacente, no solo la superficial |
| Intervención sobre la emoción enmascarante | Reducirla mediante la conducta opuesta | Usarla como señal para profundizar hacia la emoción enmascarada |

**Cómo conviven en esta app:**

- La relación `enmascara` en el mapa (ej. *Enojo enmascara Miedo*) está fundamentada en la distinción EFT entre emociones primarias y secundarias. Sirve como señal de consciencia: "lo que ves puede no ser lo que hay debajo."
- Los campos `impulso` y `respuesta` de cada emoción usan el marco DBT: nombran el impulso problemático y proponen una acción alternativa concreta sobre la emoción que el usuario *está sintiendo*, sin asumir que es primaria o secundaria.

Esta combinación es coherente para una herramienta de **autoconocimiento no clínico**: aporta el mapa estructural de EFT (las relaciones entre emociones) y las herramientas prácticas de DBT (qué hacer con lo que sentís ahora). Divergiría si se usara como protocolo terapéutico, donde EFT requeriría trabajar activamente la emoción subyacente en lugar de regularizar la superficial.

---

## Catálogo de emociones

La app incluye **28 emociones** organizadas en cuatro familias de estado de ánimo.

### Agitado — alta activación, valencia negativa (9 emociones)

| Emoción | Función principal |
|---|---|
| Enojo | Proteger límites, movilizar cambio |
| Frustración | Señalar meta bloqueada |
| Irritabilidad | Señalar saturación o necesidad de pausa |
| Ansiedad | Preparar recursos, enfocar atención |
| Miedo | Proteger y prepararse ante amenaza |
| Preocupación | Anticipar posibles problemas |
| Angustia | Señalar saturación emocional extrema |
| Envidia | Señalar lo que se valora y no se tiene |
| Disgusto | Proteger de lo percibido como dañino |

### Triste — baja activación, valencia negativa (7 emociones)

| Emoción | Función principal |
|---|---|
| Tristeza | Procesar pérdida, pedir apoyo, bajar ritmo |
| Soledad | Motivar conexión significativa |
| Nostalgia | Reforzar identidad, valorar lo vivido |
| Culpa | Reparar conducta, realinearse con valores |
| Vergüenza | Cuidar pertenencia social |
| Rechazo | Proteger identidad, límites o pertenencia |
| Decepción | Señalar expectativa no cumplida |

### Confundido — activación mixta, valencia incierta (3 emociones)

| Emoción | Función principal |
|---|---|
| Confusión | Señalar necesidad de claridad o información |
| Aburrimiento | Señalar necesidad de estimulación o significado |
| Celos | Proteger vínculo, detectar necesidad de seguridad |

### Bien — activación variada, valencia positiva (9 emociones)

| Emoción | Función principal |
|---|---|
| Calma | Recuperación y equilibrio |
| Alivio | Señalar que el peligro pasó, permitir recuperación |
| Gratitud | Fortalecer vínculos, ampliar perspectiva |
| Felicidad | Reforzar experiencias valiosas y conexión |
| Alegría | Reforzar conductas valiosas |
| Orgullo | Reforzar identidad y conductas de esfuerzo |
| Entusiasmo | Movilizar acción y exploración |
| Placer | Favorecer bienestar y recuperación |
| Ternura | Fortalecer vínculos, motivar el cuidado |

---

## Mapa de relaciones entre emociones

35 relaciones entre las 28 emociones del catálogo, visualizadas en la pestaña **Mapa** mediante un grafo interactivo (vista libre y vista por cuadrantes).

### Coexisten frecuentemente (18 relaciones)

Pares que tienden a sentirse al mismo tiempo o en episodios cercanos:

- Ansiedad ↔ Miedo
- Ansiedad ↔ Preocupación
- Angustia ↔ Tristeza
- Tristeza ↔ Soledad
- Tristeza ↔ Culpa
- Decepción ↔ Tristeza
- Nostalgia ↔ Tristeza
- Vergüenza ↔ Culpa
- Vergüenza ↔ Rechazo
- Celos ↔ Envidia
- Enojo ↔ Frustración
- Enojo ↔ Irritabilidad
- Alegría ↔ Entusiasmo
- Alegría ↔ Gratitud
- Felicidad ↔ Alegría
- Placer ↔ Alegría
- Calma ↔ Alivio
- Orgullo ↔ Alegría

### Puede escalar a (5 relaciones)

Una emoción puede intensificarse y transformarse en otra:

- Irritabilidad → Enojo
- Frustración → Enojo
- Preocupación → Ansiedad
- Ansiedad → Angustia
- Tristeza → Angustia

### Puede enmascarar (5 relaciones)

Una emoción superficial que puede ocultar una más vulnerable o primaria:

- Enojo enmascara Miedo
- Enojo enmascara Tristeza
- Irritabilidad enmascara Tristeza
- Confusión enmascara Miedo
- Aburrimiento enmascara Tristeza

### Emociones opuestas (7 relaciones)

Anclas de regulación: activar una reduce la otra (base de la técnica de Acción Opuesta en DBT):

- Alegría ↔ Tristeza
- Calma ↔ Ansiedad
- Gratitud ↔ Envidia
- Orgullo ↔ Vergüenza
- Alivio ↔ Angustia
- Entusiasmo ↔ Aburrimiento
- Felicidad ↔ Tristeza

---

## Funcionalidades

- **28 emociones** en tarjetas con color, detalle completo y búsqueda en tiempo real
- **Búsqueda** por nombre, sensación corporal, disparador y mensaje (ES y EN simultáneamente)
- **Check-in de estado de ánimo** — 4 estados de ánimo que filtran emociones relacionadas
- **Quiz de identificación** — árbol de 3 preguntas para quienes no saben qué sienten
- **Mapa de relaciones** — grafo interactivo con layout de fuerza y vista por cuadrantes; 35 relaciones en 4 tipos
- **Diario emocional** — registro de entradas con emoción, nota y fecha; persiste en `localStorage`
- **Compartir emoción** — genera imagen PNG con la tarjeta y la comparte via Web Share API o descarga directa
- **Emociones vistas recientemente** — historial de las últimas 5, persistente
- **Modo claro / automático / oscuro** con detección de preferencia del sistema
- **Soporte multi-idioma** ES / EN con persistencia
- **PWA instalable** — botón inteligente para Android/Chrome y guía para iOS/Safari
- **Funciona offline** — Service Worker con estrategia cache-first y auto-actualización
- **Navegación por teclado** completa (Tab, Enter, Espacio, Escape, retorno de foco)
- **Reducción de movimiento** — respeta `prefers-reduced-motion`

---

## Tecnologías

- HTML5 + CSS personalizado (`styles.css`) + Tailwind CSS pre-generado (`dist/tailwind.css`)
- JavaScript vanilla modular (ES6) con esbuild como único bundler
- Fuente Inter self-hosted (`pwa/fonts/inter.woff2`)
- Íconos SVG inline — sin dependencia externa
- Service Worker para soporte offline
- Vitest para tests automatizados
- Algoritmo de layout Fruchterman–Reingold (implementación propia, ~500 iteraciones, sin dependencias de grafos)

---

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

---

## Estructura del proyecto

```text
├── index.html               Estructura principal de la interfaz
├── app.js                   Punto de entrada (ES6 modules): estado, bootstrap
├── loader.js                Detecta file:// vs http:// y carga dist/app.bundle.js o app.js
├── styles.css               Estilos personalizados (transiciones, foco, scrollbar, dark mode)
├── sw.js                    Service Worker (cache-first, soporte offline)
├── vitest.config.js         Configuración de tests
├── js/
│   ├── constants.js         Emociones, relaciones, traducciones, claves de localStorage
│   ├── i18n.js              Detección de idioma, función t(), traducciones al DOM
│   ├── ui.js                Render de tarjetas y modal, búsqueda, eventos, canvas share
│   ├── quiz.js              Árbol de decisión de identificación emocional
│   ├── diary.js             Diario emocional (CRUD en localStorage, render)
│   ├── emotionMap.js        Mapa de relaciones: layout de fuerza + cuadrantes, render SVG
│   ├── utils.js             Funciones puras: normalizeText, getReadableTextColor, wrapTextLines
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

---

## Instalar como PWA

El botón **Instalar app** aparece automáticamente en el encabezado cuando el navegador lo permite:

- **Android/Chrome**: el botón activa el prompt nativo de instalación.
- **iOS/Safari**: el botón abre una guía con los pasos para "Añadir a pantalla de inicio".
- El botón se oculta si la app ya está instalada en modo standalone.

Para que la instalación esté disponible, la app debe ejecutarse en `http://` o `https://`.

---

## Accesibilidad y UX

- Foco visible para navegación por teclado
- Etiquetas ARIA en todos los elementos interactivos
- Modal con `role="dialog"`, `aria-modal` y `aria-labelledby`
- Foco devuelto a la tarjeta de origen al cerrar el modal
- Estados vacíos con mensaje amigable
- Animaciones suaves con reducción automática cuando el sistema lo solicita
- Content Security Policy (CSP) en todas las páginas

---

## Pruebas manuales por escenario

### Escenario 1: Carga inicial

1. Abrir la app en `http://localhost`.
2. Verificar que se muestran las 28 tarjetas de emociones.
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

### Escenario 4: Check-in y quiz

1. Ir a la pestaña **¿Qué siento?**.
2. Seleccionar un estado de ánimo y verificar que filtra las emociones correspondientes.
3. Abrir el quiz y completar las 3 preguntas.
4. Verificar que el resultado muestra emociones coherentes con las respuestas dadas.
5. Pulsar "Ver todas las emociones" y confirmar que navega a la pestaña Emociones.

### Escenario 5: Diario emocional

1. Ir a la pestaña **Diario**.
2. Crear una entrada seleccionando una emoción y agregando una nota.
3. Verificar que la entrada aparece en la lista con fecha y emoción correctas.
4. Recargar la página y confirmar persistencia.
5. Eliminar la entrada y verificar que desaparece.

### Escenario 6: Mapa de relaciones

1. Ir a la pestaña **Mapa**.
2. Verificar que el grafo carga con nodos y líneas de colores.
3. Tocar un nodo y verificar que se resalta con sus conexiones y aparece el panel de relaciones.
4. Confirmar que los 4 tipos de relación aparecen en la leyenda.
5. Cambiar a vista **Cuadrantes** y verificar que las 4 zonas se muestran con colores y emociones.
6. Seleccionar una emoción en cuadrantes y confirmar que la línea de relación cruza zonas correctamente.
7. Pulsar **Ver** en el panel de información y verificar que abre el modal de detalle.

### Escenario 7: Navegación por teclado

1. Usar `Tab` para navegar entre elementos interactivos.
2. Abrir una tarjeta con `Enter` o `Espacio`.
3. Verificar foco visible en elementos navegables.
4. Cerrar modal con `Escape` y validar retorno de foco.

### Escenario 8: Multi-idioma

1. Cambiar idioma a `EN`.
2. Verificar traducción de textos de interfaz y contenido de emociones.
3. Verificar que los nombres en el mapa también se traducen.
4. Recargar y confirmar persistencia del idioma.

### Escenario 9: PWA e instalación

1. Ejecutar en `http://localhost`.
2. Confirmar que aparece el botón `Instalar app` en el encabezado.
3. Instalar la app y abrirla como ventana independiente.
4. Verificar que el botón desaparece tras la instalación.

### Escenario 10: Soporte offline y actualización automática

1. Ejecutar en `http://localhost` y esperar a que el Service Worker se registre.
2. En DevTools → Network, activar modo offline.
3. Recargar la página y confirmar que la app carga con estilos completos.
4. Para verificar la actualización automática: desplegar una nueva versión, visitar el sitio — la página se recarga sola al activarse el nuevo SW.

### Escenario 11: Modo oscuro

1. Abrir el panel de ajustes (icono engranaje).
2. Seleccionar modo oscuro y verificar que el fondo, tarjetas, mapa y modal cambian de color.
3. Recargar la página y confirmar que el modo persiste.
4. Cambiar a modo automático y verificar que sigue la preferencia del sistema.

### Escenario 12: Compartir emoción

1. Abrir el modal de cualquier emoción.
2. Pulsar el botón **Compartir**.
3. En móvil: confirmar que aparece el diálogo nativo de compartir con una imagen PNG adjunta.
4. En escritorio: confirmar que se descarga un archivo `.png` con el nombre de la emoción.
5. Verificar que la imagen incluye: nombre de la emoción, mensaje principal y respuesta sugerida.

### Escenario 13: Fallback file://

1. Abrir `index.html` directamente (doble clic).
2. Verificar que las emociones cargan correctamente sin servidor HTTP.
3. Confirmar que la búsqueda, el modal y el cambio de idioma funcionan.

---

## Próximas mejoras sugeridas

### Corto plazo

- **Estadísticas del diario:** gráfico de emociones más frecuentes por semana / mes derivado de las entradas existentes en localStorage
- **Contexto en entradas del diario:** etiquetas opcionales (trabajo, pareja, familia, cuerpo, dinero) para filtrar patrones por área de vida
- **Técnicas de regulación por emoción:** expandir la "respuesta sugerida" con 1-2 técnicas prácticas guiadas (ej. respiración 4-7-8 para ansiedad, técnica STOP para enojo)
- **Exportar el diario:** descarga en JSON o texto plano para que el usuario tenga respaldo de sus datos
- **Traducciones adicionales:** PT / FR

### Mediano plazo

- **Recordatorio diario de check-in:** push notification configurable via PWA para convertir el check-in en hábito diario
- **Flujo "estoy desbordado":** modo de crisis con 3 pasos — validación, anclaje (técnica 5-4-3-2-1) y una acción concreta; sin búsquedas ni exploración
- **Rutina de cierre del día:** flujo guiado de 3 preguntas (¿qué sentiste?, ¿qué lo desencadenó?, ¿qué necesitas mañana?) más rápido y estructurado que el diario libre

### Más adelante

- **Más emociones:** ampliar el catálogo con esperanza, asombro, compasión, hartazgo, humillación, vergüenza ajena, entre otras
- **Modo acompañamiento:** preguntas abiertas guiadas para promover la reflexión, sin diagnóstico
