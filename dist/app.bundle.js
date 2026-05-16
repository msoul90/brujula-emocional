(() => {
  // js/constants.js
  var TRANSLATIONS = {
    es: {
      langLabel: "Idioma",
      title: "Br\xFAjula Emocional",
      subtitle: "Encuentra claridad en lo que sientes.",
      searchPlaceholder: "\xBFQu\xE9 sientes hoy? (ej. Ansiedad, Placer...)",
      recentTitle: "Vistas recientemente",
      closeButton: "Entendido",
      emotionTag: "Emoci\xF3n",
      feelLabel: "\xBFC\xF3mo se siente?",
      triggerLabel: "\xBFQu\xE9 la dispara?",
      functionLabel: "\xBFPara qu\xE9 sirve?",
      messageLabel: "Lo que te est\xE1 diciendo:",
      impulseLabel: "Impulso a evitar",
      responseLabel: "Respuesta sugerida",
      emptyTitle: "No encontramos esa emoci\xF3n",
      emptyHint: 'Prueba con otra palabra como "incertidumbre", "calma" o "dolor".',
      openChip: "Ver",
      openEmotionAria: "Abrir emoci\xF3n",
      openDetailAria: "Abrir detalle de",
      copyButton: "Copiar",
      copiedFeedback: "Copiado",
      shareButton: "Compartir",
      quizTrigger: "\xBFNo sabes lo que sientes?",
      quizTriggerSub: "Desc\xFAbrelo en 3 preguntas",
      quizTitle: "\xBFQu\xE9 siento?",
      quizQ1: "\xBFC\xF3mo sientes tu cuerpo ahora mismo?",
      quizQ1A: "Activado, tenso o acelerado",
      quizQ1B: "Quieto, pesado o tranquilo",
      quizQ2: "\xBFC\xF3mo describir\xEDas lo que sientes?",
      quizQ2A: "Agradable, expansivo o positivo",
      quizQ2B: "Inc\xF3modo, dif\xEDcil o tenso",
      quizQ3: "\xBFParece relacionado con algo concreto?",
      quizQ3A: "S\xED, algo o alguien lo desencaden\xF3",
      quizQ3B: "No est\xE1 claro, es m\xE1s difuso",
      quizResultTitle: "Puede que est\xE9s sintiendo...",
      quizBack: "Anterior",
      quizRestart: "Empezar de nuevo",
      quizClose: "Ver todas las emociones",
      settingsLabel: "Configuraci\xF3n",
      themeLabel: "Tema",
      themeLight: "Claro",
      themeAuto: "Auto",
      themeDark: "Oscuro",
      installButton: "Instalar app",
      iosInstallTitle: "Instalar en iPhone/iPad",
      iosInstallStep1: "1. Toca el bot\xF3n Compartir de Safari (cuadro con flecha hacia arriba).",
      iosInstallStep2: '2. Selecciona "A\xF1adir a pantalla de inicio".',
      iosInstallClose: "Entendido",
      checkinTitle: "\xBFC\xF3mo me siento?",
      moodAgitado: "Agitado",
      moodTriste: "Triste",
      moodConfundido: "Confundido",
      moodBien: "Bien",
      checkinReset: "Ver todas",
      diaryTrigger: "Mi diario emocional",
      diaryTriggerSub: "Solo se guarda en tu dispositivo",
      diaryTitle: "Diario emocional",
      diaryPrivacyNote: "Tus entradas se guardan solo en este dispositivo. Nunca salen de aqu\xED.",
      diaryEmpty: "A\xFAn no hay entradas.",
      diaryAddShort: "Diario",
      diaryNoteLabel: "Nota (opcional)",
      diaryNotePlaceholder: "\xBFQu\xE9 m\xE1s quieres recordar?",
      diarySaveButton: "Guardar",
      diaryCancelButton: "Cancelar",
      diaryDeleteButton: "Eliminar entrada",
      diaryClearAll: "Borrar todo el diario",
      diaryClearConfirm: "\xBFBorrar todas las entradas del diario? Esta acci\xF3n no se puede deshacer.",
      diaryTodayLabel: "Hoy",
      diaryAddedFeedback: "Guardado en tu diario",
      diaryNewEntry: "Nueva entrada",
      diaryPickEmotion: "\xBFQu\xE9 sentiste?",
      navEmociones: "Emociones",
      navCheckin: "\xBFQu\xE9 siento?",
      navDiary: "Diario",
      navMapa: "Mapa",
      mapViewGraph: "Grafo",
      mapViewQuad: "Cuadrantes",
      mapRelCoexiste: "A menudo coexisten",
      mapRelEscalaA: "Puede escalar a",
      mapRelEnmascara: "Puede enmascarar",
      mapRelOpuesta: "Emoci\xF3n opuesta",
      mapInfoNone: "Sin relaciones registradas",
      mapLegendLabel: "Leyenda del mapa",
      mapSearchPlaceholder: "Buscar emoci\xF3n en el mapa...",
      mapFilterAll: "Todas",
      mapHint: "Toc\xE1 una emoci\xF3n para ver sus conexiones \xB7 Us\xE1 la leyenda para filtrar tipos",
      mapHintSelected: "Toc\xE1 fuera del nodo para volver al mapa completo",
      mapClearSelection: "Limpiar selecci\xF3n",
      mapSearchEmpty: "No encontramos esa emoci\xF3n en el mapa",
      masksHint: "A veces lo que sent\xEDs en la superficie cubre algo m\xE1s. Explor\xE1 tambi\xE9n esta emoci\xF3n.",
      quizTabQuestions: "Preguntas",
      quizTabBody: "Sensaciones",
      bodyMapTitle: "\xBFD\xF3nde lo sent\xEDs?",
      bodyModeSimple: "Simple",
      bodyModeDetailed: "Detallado",
      bodyMapTapPrompt: "Toc\xE1 las zonas del cuerpo donde sent\xEDs algo",
      bodyMapResultTitle: "Puede que est\xE9s sintiendo...",
      bodyMapNoMatch: "Combinaci\xF3n poco frecuente \u2014 prob\xE1 seleccionar m\xE1s zonas",
      bodyMapClear: "Limpiar selecci\xF3n",
      zoneHead: "Cabeza",
      zoneFace: "Cara",
      zoneThroat: "Garganta",
      zoneShoulders: "Hombros",
      zoneChest: "Pecho",
      zoneStomach: "Abdomen",
      zoneArms: "Brazos",
      zoneLegs: "Piernas",
      offlineBanner: "Sin conexi\xF3n \xB7 Usando datos guardados",
      diaryEmptyPrompt: "Todav\xEDa no registraste ninguna emoci\xF3n.",
      diaryEmptyAction1: "Hacer check-in",
      diaryEmptyAction2: "Descubrir qu\xE9 siento",
      diaryExportButton: "Exportar"
    },
    en: {
      langLabel: "Language",
      title: "Emotional Compass",
      subtitle: "Find clarity in what you feel.",
      searchPlaceholder: "How are you feeling today? (e.g. Anxiety, Joy...)",
      recentTitle: "Recently viewed",
      closeButton: "Got it",
      emotionTag: "Emotion",
      feelLabel: "How does it feel?",
      triggerLabel: "What triggers it?",
      functionLabel: "What is it for?",
      messageLabel: "What this feeling is telling you:",
      impulseLabel: "Impulse to avoid",
      responseLabel: "Suggested response",
      emptyTitle: "We could not find that emotion",
      emptyHint: 'Try another word like "uncertainty", "calm" or "pain".',
      openChip: "View",
      openEmotionAria: "Open emotion",
      openDetailAria: "Open details for",
      copyButton: "Copy",
      copiedFeedback: "Copied",
      shareButton: "Share",
      quizTrigger: "Not sure what you feel?",
      quizTriggerSub: "Find out in 3 questions",
      quizTitle: "What am I feeling?",
      quizQ1: "How does your body feel right now?",
      quizQ1A: "Activated, tense or rushing",
      quizQ1B: "Quiet, heavy or calm",
      quizQ2: "How would you describe what you feel?",
      quizQ2A: "Pleasant, expansive or positive",
      quizQ2B: "Uncomfortable, difficult or tense",
      quizQ3: "Does it seem related to something specific?",
      quizQ3A: "Yes, something or someone triggered it",
      quizQ3B: "Not clear, it feels more diffuse",
      quizResultTitle: "You might be feeling...",
      quizBack: "Previous",
      quizRestart: "Start over",
      quizClose: "See all emotions",
      settingsLabel: "Settings",
      themeLabel: "Theme",
      themeLight: "Light",
      themeAuto: "Auto",
      themeDark: "Dark",
      installButton: "Install app",
      iosInstallTitle: "Install on iPhone/iPad",
      iosInstallStep1: "1. Tap Safari's Share button (square with upward arrow).",
      iosInstallStep2: '2. Select "Add to Home Screen".',
      iosInstallClose: "Got it",
      checkinTitle: "How do I feel?",
      moodAgitado: "Agitated",
      moodTriste: "Sad",
      moodConfundido: "Confused",
      moodBien: "Good",
      checkinReset: "See all",
      diaryTrigger: "My emotional diary",
      diaryTriggerSub: "Saved only on your device",
      diaryTitle: "Emotional diary",
      diaryPrivacyNote: "Your entries are saved only on this device. They never leave it.",
      diaryEmpty: "No entries yet.",
      diaryAddShort: "Diary",
      diaryNoteLabel: "Note (optional)",
      diaryNotePlaceholder: "What else do you want to remember?",
      diarySaveButton: "Save",
      diaryCancelButton: "Cancel",
      diaryDeleteButton: "Delete entry",
      diaryClearAll: "Clear all diary entries",
      diaryClearConfirm: "Clear all diary entries? This cannot be undone.",
      diaryTodayLabel: "Today",
      diaryAddedFeedback: "Saved to your diary",
      diaryNewEntry: "New entry",
      diaryPickEmotion: "What did you feel?",
      navEmociones: "Emotions",
      navCheckin: "How do I feel?",
      navDiary: "Diary",
      navMapa: "Map",
      mapViewGraph: "Graph",
      mapViewQuad: "Quadrants",
      mapRelCoexiste: "Often coexist",
      mapRelEscalaA: "Can escalate to",
      mapRelEnmascara: "Can mask",
      mapRelOpuesta: "Opposite emotion",
      mapInfoNone: "No registered connections",
      mapLegendLabel: "Map legend",
      mapSearchPlaceholder: "Search emotion in map...",
      mapFilterAll: "All",
      mapHint: "Tap an emotion to see its connections \xB7 Use the legend to filter types",
      mapHintSelected: "Tap outside the node to return to the full map",
      mapClearSelection: "Clear selection",
      mapSearchEmpty: "No emotion found in the map",
      masksHint: "Sometimes what you feel on the surface covers something deeper. Explore this emotion too.",
      quizTabQuestions: "Questions",
      quizTabBody: "Sensations",
      bodyMapTitle: "Where do you feel it?",
      bodyModeSimple: "Simple",
      bodyModeDetailed: "Detailed",
      bodyMapTapPrompt: "Tap the body zones where you feel something",
      bodyMapResultTitle: "You might be feeling...",
      bodyMapNoMatch: "Uncommon combination \u2014 try selecting more zones",
      bodyMapClear: "Clear selection",
      zoneHead: "Head",
      zoneFace: "Face",
      zoneThroat: "Throat",
      zoneShoulders: "Shoulders",
      zoneChest: "Chest",
      zoneStomach: "Stomach",
      zoneArms: "Arms",
      zoneLegs: "Legs",
      offlineBanner: "Offline \xB7 Using saved data",
      diaryEmptyPrompt: "You haven't recorded any emotion yet.",
      diaryEmptyAction1: "Do a check-in",
      diaryEmptyAction2: "Discover what I feel",
      diaryExportButton: "Export"
    }
  };
  var EMOTION_NAME_TRANSLATIONS = {
    Enojo: "Anger",
    Tristeza: "Sadness",
    Miedo: "Fear",
    Ansiedad: "Anxiety",
    Verg\u00FCenza: "Shame",
    Culpa: "Guilt",
    Frustraci\u00F3n: "Frustration",
    Celos: "Jealousy",
    Soledad: "Loneliness",
    Alegr\u00EDa: "Joy",
    Calma: "Calm",
    Confusi\u00F3n: "Confusion",
    Preocupaci\u00F3n: "Worry",
    Felicidad: "Happiness",
    Entusiasmo: "Enthusiasm",
    Placer: "Pleasure",
    Angustia: "Distress",
    Irritabilidad: "Irritability",
    Rechazo: "Rejection",
    Envidia: "Envy",
    Gratitud: "Gratitude",
    Orgullo: "Pride",
    Nostalgia: "Nostalgia",
    Alivio: "Relief",
    Aburrimiento: "Boredom",
    Disgusto: "Disgust",
    "Decepci\xF3n": "Disappointment",
    Ternura: "Tenderness"
  };
  var EMOTION_CONTENT_TRANSLATIONS = {
    Enojo: {
      siente: "Heat, tension, high energy, tight jaw",
      dispara: "Injustice, boundaries crossed, frustration",
      funcion: "Protect boundaries, mobilize change",
      mensaje: "Something is not working for me",
      impulso: "Attack, demand, cut off",
      respuesta: "Pause, name your boundary, ask for a clear change"
    },
    Tristeza: {
      siente: "Heaviness, crying, fatigue, emptiness",
      dispara: "Loss, disappointment, distance",
      funcion: "Process loss, seek support, slow down",
      mensaje: "Something important hurt me",
      impulso: "Isolate, give up",
      respuesta: "Validate your pain, seek support, practice self-care"
    },
    Miedo: {
      siente: "Alertness, acceleration, tension, knot in the stomach",
      dispara: "Risk, threat, uncertainty",
      funcion: "Protect and prepare",
      mensaje: "I perceive danger or vulnerability",
      impulso: "Run away, freeze, avoid",
      respuesta: "Assess real risk, breathe, move forward gradually"
    },
    Ansiedad: {
      siente: "Restlessness, racing mind, urgency",
      dispara: "Uncertainty, anticipation, pressure",
      funcion: "Prepare resources, focus attention",
      mensaje: "This matters and I cannot control it",
      impulso: "Overthink, control, avoid",
      respuesta: "Slow down, prioritize, tolerate uncertainty"
    },
    "Verg\xFCenza": {
      siente: "Facial heat, urge to hide",
      dispara: "Criticism, exposure, social mistakes",
      funcion: "Protect social belonging",
      mensaje: "I fear rejection or judgment",
      impulso: "Hide, justify myself",
      respuesta: "Self-compassion, realistic perspective, repair if needed"
    },
    Culpa: {
      siente: "Inner weight, restlessness, remorse",
      dispara: "Having hurt someone or gone against values",
      funcion: "Repair, adjust behavior",
      mensaje: "Something was not aligned with my values",
      impulso: "Punish yourself, overexplain",
      respuesta: "Repair, apologize, learn"
    },
    "Frustraci\xF3n": {
      siente: "Tension, irritation, impatience",
      dispara: "Obstacles, delay, blockage",
      funcion: "Signal a blocked goal",
      mensaje: "I want something and it is not working",
      impulso: "Force, explode, quit",
      respuesta: "Be flexible, split into steps, ask for help"
    },
    Celos: {
      siente: "Activation, vigilance, insecurity",
      dispara: "Threat of loss, comparison",
      funcion: "Protect the bond, detect needs",
      mensaje: "I fear losing connection or value",
      impulso: "Control, demand, check",
      respuesta: "Express your need, review evidence, strengthen self-esteem"
    },
    Soledad: {
      siente: "Emptiness, nostalgia, low mood",
      dispara: "Disconnection, lack of support",
      funcion: "Motivate connection",
      mensaje: "I need meaningful connection",
      impulso: "Isolate even more",
      respuesta: "Seek gradual and genuine contact"
    },
    "Alegr\xEDa": {
      siente: "Lightness, energy, expansion",
      dispara: "Achievement, connection, enjoyment",
      funcion: "Reinforce valuable behaviors",
      mensaje: "This nourishes me",
      impulso: "Act impulsively, overindulge",
      respuesta: "Savor it, give thanks, repeat healthy behaviors"
    },
    Calma: {
      siente: "Body softness, steady breathing",
      dispara: "Safety, rest, clarity",
      funcion: "Recovery and balance",
      mensaje: "For now I am safe",
      impulso: "Let your guard down completely",
      respuesta: "Use it to plan and recharge"
    },
    "Confusi\xF3n": {
      siente: "Mental fog, doubt, blockage",
      dispara: "Contradictory information, ambivalence",
      funcion: "Signal the need for clarity",
      mensaje: "I need more information or time",
      impulso: "Decide impulsively, freeze",
      respuesta: "Ask questions, wait, organize your thoughts"
    },
    "Preocupaci\xF3n": {
      siente: "Busy mind, tension, anticipation, difficulty letting thoughts go",
      dispara: "Uncertainty, responsibility, fear of mistakes or consequences",
      funcion: "Anticipate possible problems and prepare",
      mensaje: "There is something important I want to protect or control",
      impulso: "Overthink, check excessively, seek certainty",
      respuesta: "Prioritize, separate real from imagined, return to the present"
    },
    Felicidad: {
      siente: "Lightness, well-being, relaxation, sense of fullness",
      dispara: "Connection, achievement, safety, pleasant moments",
      funcion: "Reinforce valuable experiences and connection",
      mensaje: "This feels good and I want to keep it",
      impulso: "Cling to it, avoid what disturbs it",
      respuesta: "Allow yourself to enjoy and register the positive"
    },
    Entusiasmo: {
      siente: "High energy, motivation, positive emotion, urge to act",
      dispara: "New projects, interest, excitement, connection",
      funcion: "Mobilize action and exploration",
      mensaje: "There is something that inspires me or matters deeply",
      impulso: "Do too much too fast, commit impulsively",
      respuesta: "Keep motivation with a sustainable pace"
    },
    Placer: {
      siente: "Pleasant sensation, comfort, physical or emotional satisfaction",
      dispara: "Rest, enjoyment, contact, rewarding experiences",
      funcion: "Support well-being and recovery",
      mensaje: "This feels nourishing or satisfying",
      impulso: "Try to repeat it immediately",
      respuesta: "Enjoy consciously and keep balance"
    },
    Angustia: {
      siente: "Pressure, despair, feeling unable to hold something",
      dispara: "Loss of control, intense fear, high uncertainty",
      funcion: "Signal emotional overload or perceived threat",
      mensaje: "Something is overwhelming me",
      impulso: "Escape, isolate, seek immediate relief",
      respuesta: "Regulate your body, ask for support, reduce stimuli"
    },
    Irritabilidad: {
      siente: "Tension, impatience, high sensitivity, easy annoyance",
      dispara: "Fatigue, stress, accumulated frustration, overload",
      funcion: "Signal saturation or need for a pause",
      mensaje: "I am exhausted or something is too much",
      impulso: "Respond sharply, argue, pull away",
      respuesta: "Rest, lower demands, express your need before exploding"
    },
    Rechazo: {
      siente: "Distance, discomfort, dislike or exclusion",
      dispara: "Criticism, disapproval, lack of acceptance or incompatibility",
      funcion: "Protect identity, boundaries, or belonging",
      mensaje: "This does not feel safe or compatible for me",
      impulso: "Pull away, shut down, attack or avoid",
      respuesta: "Explore whether rejection comes from harm or insecurity and respond clearly"
    },
    Envidia: {
      siente: "Bitterness, tension, constant comparison, sense of injustice",
      dispara: "Seeing others' achievements or possessions you desire, social comparison",
      funcion: "Signal what you value but don't have, motivate change",
      mensaje: "There is something I want and feel I don't have access to",
      impulso: "Put others down, sabotage, withdraw",
      respuesta: "Use it as a compass toward your own goals, without comparing yourself"
    },
    Gratitud: {
      siente: "Warmth, openness, lightness, expansion in the chest",
      dispara: "Receiving help, genuine connection, recognizing what you have",
      funcion: "Strengthen bonds, broaden perspective, reinforce well-being",
      mensaje: "Something or someone gave me something valuable",
      impulso: "Take it for granted, not express it",
      respuesta: "Express it, write it down, allow yourself to receive it fully"
    },
    Orgullo: {
      siente: "Expansion, high energy, deep satisfaction, confidence",
      dispara: "Personal achievement, overcoming a challenge, living up to your values",
      funcion: "Reinforce identity and effort-based behaviors",
      mensaje: "I achieved it or I trust who I am",
      impulso: "Brag excessively, become arrogant or dismissive",
      respuesta: "Celebrate with humility, share it genuinely, let it fuel future effort"
    },
    Nostalgia: {
      siente: "Warmth mixed with melancholy, longing, bittersweet sensation",
      dispara: "Memories of the past, places, people, or times that are no longer",
      funcion: "Reinforce identity, value what was lived, connect past and present",
      mensaje: "Something of who I was or lived matters deeply to me",
      impulso: "Live in the past, avoid or escape the present",
      respuesta: "Honor what was lived, bring something from that past consciously into today"
    },
    Alivio: {
      siente: "Release, relaxation, letting go of tension, freer breathing",
      dispara: "End of a threat, resolution of a problem, receiving good news",
      funcion: "Signal that the danger has passed, allow recovery",
      mensaje: "What I feared did not happen or it is over now",
      impulso: "Ignore what caused the stress, skip reflection",
      respuesta: "Rest consciously, use the calm to process and prepare"
    },
    Aburrimiento: {
      siente: "Emptiness, restlessness, lack of motivation, time that does not move",
      dispara: "Lack of stimulation, excessive routine, unclear goals",
      funcion: "Signal need for stimulation, meaning, or a new challenge",
      mensaje: "I need something that activates me or has meaning",
      impulso: "Seek empty distractions, complain, disengage",
      respuesta: "Find a purposeful activity, create something, challenge your mind"
    },
    Disgusto: {
      siente: "Nausea, urge to pull away, body contraction, physical or moral discomfort",
      dispara: "Something perceived as repulsive, unjust, offensive, or incompatible with core values",
      funcion: "Protect from harm (physical or moral), maintain value integrity",
      mensaje: "Something violates my physical or moral limits",
      impulso: "Expel, reject, pull away harshly",
      respuesta: "Name what generates it, set a clear boundary, distance yourself if needed"
    },
    "Decepci\xF3n": {
      siente: "Quiet heaviness, mild discouragement, emptiness where something was expected",
      dispara: "Unmet expectation, broken promise, outcome below what was hoped for",
      funcion: "Signal that something expected did not arrive, invite readjusting expectations",
      mensaje: "I expected something that did not happen",
      impulso: "Give up, disconnect, look for someone to blame",
      respuesta: "Validate the expectation, assess if it was realistic, redirect your energy"
    },
    Ternura: {
      siente: "Gentle warmth, urge to nurture, chest opening, sensation of wanting to protect",
      dispara: "Something or someone fragile, vulnerable, or cherished \u2014 children, pets, intimate moments",
      funcion: "Strengthen bonds, motivate care, deepen connection",
      mensaje: "There is something I want to protect or draw closer",
      impulso: "Hold back the expression, minimize it as silly or unnecessary",
      respuesta: "Allow yourself to express it, draw closer, care without losing your own limits"
    }
  };
  var emociones = [
    { nombre: "Enojo", color: "#fecaca", text: "#7f1d1d", siente: "Calor, tensi\xF3n, energ\xEDa alta, mand\xEDbula apretada", dispara: "Injusticia, l\xEDmite invadido, frustraci\xF3n", funcion: "Proteger l\xEDmites, movilizar cambio", mensaje: "Algo no me est\xE1 funcionando", impulso: "Atacar, reclamar, cortar", respuesta: "Pausar, nombrar l\xEDmite, pedir cambio claro" },
    { nombre: "Tristeza", color: "#bfdbfe", text: "#1e3a8a", siente: "Pesadez, llanto, cansancio, vac\xEDo", dispara: "P\xE9rdida, decepci\xF3n, distancia", funcion: "Procesar p\xE9rdida, pedir apoyo, bajar ritmo", mensaje: "Algo importante me doli\xF3", impulso: "Aislarse, rendirse", respuesta: "Validar dolor, buscar apoyo, autocuidado" },
    { nombre: "Miedo", color: "#ddd6fe", text: "#4c1d95", siente: "Alerta, aceleraci\xF3n, tensi\xF3n, nudo estomacal", dispara: "Riesgo, amenaza, incertidumbre", funcion: "Proteger y prepararse", mensaje: "Percibo peligro o vulnerabilidad", impulso: "Huir, congelarse, evitar", respuesta: "Evaluar riesgo real, respirar, avanzar gradual" },
    { nombre: "Ansiedad", color: "#fed7aa", text: "#7c2d12", siente: "Inquietud, mente acelerada, urgencia", dispara: "Incertidumbre, anticipaci\xF3n, presi\xF3n", funcion: "Preparar recursos, enfocar atenci\xF3n", mensaje: "Algo importa y no lo controlo", impulso: "Sobrepensar, controlar, evitar", respuesta: "Reducir velocidad, priorizar, tolerar incertidumbre" },
    { nombre: "Verg\xFCenza", color: "#fbcfe8", text: "#831843", siente: "Calor facial, ganas de esconderse", dispara: "Cr\xEDtica, exposici\xF3n, error social", funcion: "Cuidar pertenencia social", mensaje: "Temo rechazo o juicio", impulso: "Ocultarse, justificarse", respuesta: "Autocompasi\xF3n, perspectiva realista, reparar si aplica" },
    { nombre: "Culpa", color: "#bbf7d0", text: "#064e3b", siente: "Peso interno, inquietud, remordimiento", dispara: "Haber da\xF1ado o ir contra valores", funcion: "Reparar, reajustar conducta", mensaje: "Algo no estuvo alineado con mis valores", impulso: "Castigarse, sobreexplicar", respuesta: "Reparar, disculparse, aprender" },
    { nombre: "Frustraci\xF3n", color: "#fca5a5", text: "#7f1d1d", siente: "Tensi\xF3n, irritaci\xF3n, impaciencia", dispara: "Obst\xE1culos, demora, bloqueo", funcion: "Se\xF1alar meta bloqueada", mensaje: "Quiero algo y no est\xE1 saliendo", impulso: "Forzar, explotar, abandonar", respuesta: "Flexibilidad, dividir pasos, pedir ayuda" },
    { nombre: "Celos", color: "#d9f99d", text: "#365314", siente: "Activaci\xF3n, vigilancia, inseguridad", dispara: "Amenaza de p\xE9rdida, comparaci\xF3n", funcion: "Proteger v\xEDnculo, detectar necesidad", mensaje: "Temo perder conexi\xF3n o valor", impulso: "Controlar, reclamar, revisar", respuesta: "Expresar necesidad, revisar evidencia, fortalecer autoestima" },
    { nombre: "Soledad", color: "#93c5fd", text: "#1e3a8a", siente: "Vac\xEDo, nostalgia, des\xE1nimo", dispara: "Desconexi\xF3n, falta de apoyo", funcion: "Motivar conexi\xF3n", mensaje: "Necesito v\xEDnculo significativo", impulso: "Aislarse m\xE1s", respuesta: "Buscar contacto gradual y genuino" },
    { nombre: "Alegr\xEDa", color: "#fef08a", text: "#713f12", siente: "Ligereza, energ\xEDa, expansi\xF3n", dispara: "Logro, conexi\xF3n, disfrute", funcion: "Reforzar conductas valiosas", mensaje: "Esto me nutre", impulso: "Actuar impulsivamente, excederse", respuesta: "Saborear, agradecer, repetir conductas sanas" },
    { nombre: "Calma", color: "#a5f3fc", text: "#164e63", siente: "Suavidad corporal, respiraci\xF3n estable", dispara: "Seguridad, descanso, claridad", funcion: "Recuperaci\xF3n y equilibrio", mensaje: "Por ahora estoy a salvo", impulso: "Bajar guardia total", respuesta: "Aprovechar para planear y recargar" },
    { nombre: "Confusi\xF3n", color: "#ffedd5", text: "#7c2d12", siente: "Niebla mental, duda, bloqueo", dispara: "Informaci\xF3n contradictoria, ambivalencia", funcion: "Se\xF1alar necesidad de claridad", mensaje: "Me falta informaci\xF3n o tiempo", impulso: "Decidir impulsivamente, congelarse", respuesta: "Hacer preguntas, esperar, ordenar ideas" },
    { nombre: "Preocupaci\xF3n", color: "#6b21a8", text: "#ffffff", siente: "Mente ocupada, tensi\xF3n, anticipaci\xF3n, dificultad para soltar pensamientos", dispara: "Incertidumbre, responsabilidad, miedo a errores o consecuencias", funcion: "Anticipar posibles problemas y prepararse", mensaje: "Hay algo importante que quiero cuidar o controlar", impulso: "Sobrepensar, revisar excesivamente, buscar certeza", respuesta: "Priorizar, distinguir lo real de lo imaginado, regresar al presente" },
    { nombre: "Felicidad", color: "#fde047", text: "#713f12", siente: "Ligereza, bienestar, relajaci\xF3n, sensaci\xF3n de plenitud", dispara: "Conexi\xF3n, logro, seguridad, momentos agradables", funcion: "Reforzar experiencias valiosas y conexi\xF3n", mensaje: "Esto me hace bien y quiero conservarlo", impulso: "Aferrarse, evitar lo que la perturba", respuesta: "Permitirse disfrutar y registrar lo positivo" },
    { nombre: "Entusiasmo", color: "#67e8f9", text: "#164e63", siente: "Energ\xEDa alta, motivaci\xF3n, emoci\xF3n positiva, impulso de actuar", dispara: "Nuevos proyectos, inter\xE9s, ilusi\xF3n, conexi\xF3n", funcion: "Movilizar acci\xF3n y exploraci\xF3n", mensaje: "Hay algo que me inspira o importa mucho", impulso: "Hacer demasiado r\xE1pido, comprometerse impulsivamente", respuesta: "Mantener motivaci\xF3n con ritmo sostenible" },
    { nombre: "Placer", color: "#f9a8d4", text: "#831843", siente: "Sensaci\xF3n agradable, comodidad, satisfacci\xF3n corporal o emocional", dispara: "Descanso, disfrute, contacto, experiencias gratificantes", funcion: "Favorecer bienestar y recuperaci\xF3n", mensaje: "Esto se siente nutritivo o satisfactorio", impulso: "Buscar repetir inmediatamente", respuesta: "Disfrutar conscientemente y mantener equilibrio" },
    { nombre: "Angustia", color: "#60a5fa", text: "#1e3a8a", siente: "Opresi\xF3n, desesperaci\xF3n, sensaci\xF3n de no poder sostener algo", dispara: "P\xE9rdida de control, miedo intenso, incertidumbre alta", funcion: "Se\xF1alar saturaci\xF3n emocional o amenaza percibida", mensaje: "Algo me est\xE1 sobrepasando", impulso: "Escapar, aislarse, buscar alivio inmediato", respuesta: "Regular el cuerpo, pedir apoyo, reducir est\xEDmulos" },
    { nombre: "Irritabilidad", color: "#bef264", text: "#365314", siente: "Tensi\xF3n, impaciencia, sensibilidad alta, facilidad para molestarse", dispara: "Cansancio, estr\xE9s, frustraci\xF3n acumulada, sobrecarga", funcion: "Se\xF1alar saturaci\xF3n o necesidad de pausa", mensaje: "Estoy agotado o algo me est\xE1 sobrepasando", impulso: "Responder cortante, discutir, alejarse", respuesta: "Descansar, bajar exigencia, expresar necesidad antes de explotar" },
    { nombre: "Rechazo", color: "#d8b4fe", text: "#4c1d95", siente: "Distancia, incomodidad, desagrado o exclusi\xF3n", dispara: "Cr\xEDtica, desaprobaci\xF3n, falta de aceptaci\xF3n o incompatibilidad", funcion: "Proteger identidad, l\xEDmites o pertenencia", mensaje: "Esto no se siente seguro o compatible para m\xED", impulso: "Alejarse, cerrarse, atacar o evitar", respuesta: "Explorar si el rechazo viene de da\xF1o o inseguridad y responder con claridad" },
    { nombre: "Envidia", color: "#fef9c3", text: "#78350f", siente: "Amargura, tensi\xF3n, comparaci\xF3n constante, sensaci\xF3n de injusticia", dispara: "Ver logros o bienes ajenos que se desean, comparaci\xF3n social", funcion: "Se\xF1alar lo que valoras y no tienes, motivar cambio", mensaje: "Hay algo que deseo y siento que no tengo acceso", impulso: "Denigrar al otro, sabotear, paralizarse", respuesta: "\xDAsala como br\xFAjula hacia tus propias metas, sin compararte" },
    { nombre: "Gratitud", color: "#2dd4bf", text: "#134e4a", siente: "Calidez, apertura, ligereza, expansi\xF3n en el pecho", dispara: "Recibir ayuda, conexi\xF3n genuina, reconocer lo que tienes", funcion: "Fortalecer v\xEDnculos, ampliar perspectiva, reforzar bienestar", mensaje: "Algo o alguien me aport\xF3 algo valioso", impulso: "Dar por sentado, no expresarla", respuesta: "Expr\xE9sala, an\xF3tala, perm\xEDtete recibirla plenamente" },
    { nombre: "Orgullo", color: "#a5b4fc", text: "#312e81", siente: "Expansi\xF3n, energ\xEDa alta, satisfacci\xF3n profunda, confianza", dispara: "Logro propio, superar un reto, vivir conforme a tus valores", funcion: "Reforzar identidad y conductas de esfuerzo", mensaje: "Lo logr\xE9 o conf\xEDo en qui\xE9n soy", impulso: "Presumir en exceso, volverse arrogante o despectivo", respuesta: "Celebra con humildad, comp\xE1rtelo genuinamente, deja que impulse el siguiente esfuerzo" },
    { nombre: "Nostalgia", color: "#f0abfc", text: "#701a75", siente: "Calidez mezclada con melancol\xEDa, a\xF1oranza, sensaci\xF3n agridulce", dispara: "Recuerdos del pasado, lugares, personas o \xE9pocas que ya no est\xE1n", funcion: "Reforzar identidad, valorar lo vivido, conectar pasado y presente", mensaje: "Algo de lo que fui o viv\xED me importa mucho", impulso: "Vivir en el pasado, evitar o escapar el presente", respuesta: "Honra lo vivido, trae algo de ese pasado conscientemente al hoy" },
    { nombre: "Alivio", color: "#6ee7b7", text: "#064e3b", siente: "Descarga, relajaci\xF3n, soltar tensi\xF3n, respiraci\xF3n m\xE1s libre", dispara: "Fin de una amenaza, resoluci\xF3n de problema, buenas noticias", funcion: "Se\xF1alar que el peligro pas\xF3, permitir recuperaci\xF3n", mensaje: "Lo que tem\xEDa no ocurri\xF3 o ya pas\xF3", impulso: "Ignorar lo que caus\xF3 el estr\xE9s, saltarse la reflexi\xF3n", respuesta: "Descansa conscientemente, usa la calma para procesar y prepararte" },
    { nombre: "Aburrimiento", color: "#cbd5e1", text: "#334155", siente: "Vac\xEDo, inquietud, falta de motivaci\xF3n, tiempo que no avanza", dispara: "Falta de est\xEDmulo, rutina excesiva, metas poco claras", funcion: "Se\xF1alar necesidad de estimulaci\xF3n, significado o un nuevo desaf\xEDo", mensaje: "Necesito algo que me active o tenga sentido", impulso: "Buscar distracciones vac\xEDas, quejarse, desconectarse", respuesta: "Busca una actividad con prop\xF3sito, crea algo, desaf\xEDa tu mente" },
    { nombre: "Disgusto", color: "#d6d3d1", text: "#292524", siente: "N\xE1useas, ganas de alejarse, contracci\xF3n corporal, malestar f\xEDsico o moral", dispara: "Algo percibido como repugnante, injusto, ofensivo o incompatible con valores profundos", funcion: "Proteger de lo da\xF1ino (f\xEDsico o moral), mantener integridad de valores", mensaje: "Algo viola mis l\xEDmites f\xEDsicos o morales", impulso: "Expulsar, rechazar, alejarse bruscamente", respuesta: "Nombra lo que lo genera, pon un l\xEDmite claro, al\xE9jate si es necesario" },
    { nombre: "Decepci\xF3n", color: "#bae6fd", text: "#0c4a6e", siente: "Pesadez tranquila, des\xE1nimo suave, vac\xEDo donde esperaba algo", dispara: "Expectativa no cumplida, promesa rota, resultado por debajo de lo esperado", funcion: "Se\xF1alar que algo esperado no lleg\xF3, invitar a reajustar expectativas", mensaje: "Esperaba algo que no se dio", impulso: "Resignarse, desconectarse, buscar culpables", respuesta: "Valida la expectativa, revisa si era realista, redirige tu energ\xEDa" },
    { nombre: "Ternura", color: "#ffe4e6", text: "#9f1239", siente: "Calidez suave, ganas de cuidar, apertura en el pecho, sensaci\xF3n de querer proteger", dispara: "Algo o alguien fr\xE1gil, vulnerable o querido: hijos, mascotas, momentos \xEDntimos", funcion: "Fortalecer v\xEDnculos, motivar el cuidado, profundizar la conexi\xF3n", mensaje: "Hay algo que quiero proteger o acercar", impulso: "Contener la expresi\xF3n, minimizarla como tonter\xEDa o debilidad", respuesta: "Perm\xEDtete expresarla, ac\xE9rcate, cuida sin perder tus propios l\xEDmites" }
  ];
  var RECENT_KEY = "brujulaRecientes";
  var LANGUAGE_KEY = "brujulaIdioma";
  var THEME_KEY = "brujulaThema";
  var DIARY_KEY = "brujulaDiario";
  var RECENT_LIMIT = 5;
  var MOOD_CATEGORIES = [
    { key: "agitado", labelKey: "moodAgitado", emoji: "\u{1F624}", color: "#F5A5A0", ink: "#7A2E2E", emotions: ["Enojo", "Frustraci\xF3n", "Irritabilidad", "Ansiedad", "Miedo", "Preocupaci\xF3n", "Angustia", "Envidia", "Disgusto"] },
    { key: "triste", labelKey: "moodTriste", emoji: "\u{1F622}", color: "#A4C3E3", ink: "#1F3F66", emotions: ["Tristeza", "Soledad", "Nostalgia", "Culpa", "Verg\xFCenza", "Rechazo", "Decepci\xF3n"] },
    { key: "confundido", labelKey: "moodConfundido", emoji: "\u{1F914}", color: "#F5D88A", ink: "#7A5A1A", emotions: ["Confusi\xF3n", "Aburrimiento", "Celos"] },
    { key: "bien", labelKey: "moodBien", emoji: "\u{1F60C}", color: "#8FD4AE", ink: "#1E5237", emotions: ["Calma", "Alivio", "Gratitud", "Felicidad", "Alegr\xEDa", "Orgullo", "Entusiasmo", "Placer", "Ternura"] }
  ];
  var EMOTION_RELATIONS = [
    // Coexisten frecuentemente
    { from: "Ansiedad", to: "Miedo", type: "coexiste" },
    { from: "Ansiedad", to: "Preocupaci\xF3n", type: "coexiste" },
    { from: "Angustia", to: "Tristeza", type: "coexiste" },
    { from: "Tristeza", to: "Soledad", type: "coexiste" },
    { from: "Tristeza", to: "Culpa", type: "coexiste" },
    { from: "Decepci\xF3n", to: "Tristeza", type: "coexiste" },
    { from: "Nostalgia", to: "Tristeza", type: "coexiste" },
    { from: "Verg\xFCenza", to: "Culpa", type: "coexiste" },
    { from: "Verg\xFCenza", to: "Rechazo", type: "coexiste" },
    { from: "Celos", to: "Envidia", type: "coexiste" },
    { from: "Enojo", to: "Frustraci\xF3n", type: "coexiste" },
    { from: "Enojo", to: "Irritabilidad", type: "coexiste" },
    { from: "Alegr\xEDa", to: "Entusiasmo", type: "coexiste" },
    { from: "Alegr\xEDa", to: "Gratitud", type: "coexiste" },
    { from: "Felicidad", to: "Alegr\xEDa", type: "coexiste" },
    { from: "Placer", to: "Alegr\xEDa", type: "coexiste" },
    { from: "Calma", to: "Alivio", type: "coexiste" },
    { from: "Orgullo", to: "Alegr\xEDa", type: "coexiste" },
    // Puede escalar a
    { from: "Irritabilidad", to: "Enojo", type: "escala_a" },
    { from: "Frustraci\xF3n", to: "Enojo", type: "escala_a" },
    { from: "Preocupaci\xF3n", to: "Ansiedad", type: "escala_a" },
    { from: "Ansiedad", to: "Angustia", type: "escala_a" },
    { from: "Tristeza", to: "Angustia", type: "escala_a" },
    // Puede enmascarar
    { from: "Enojo", to: "Miedo", type: "enmascara" },
    { from: "Enojo", to: "Tristeza", type: "enmascara" },
    { from: "Irritabilidad", to: "Tristeza", type: "enmascara" },
    { from: "Confusi\xF3n", to: "Miedo", type: "enmascara" },
    { from: "Aburrimiento", to: "Tristeza", type: "enmascara" },
    // Emoción opuesta
    { from: "Alegr\xEDa", to: "Tristeza", type: "opuesta" },
    { from: "Calma", to: "Ansiedad", type: "opuesta" },
    { from: "Gratitud", to: "Envidia", type: "opuesta" },
    { from: "Orgullo", to: "Verg\xFCenza", type: "opuesta" },
    { from: "Alivio", to: "Angustia", type: "opuesta" },
    { from: "Entusiasmo", to: "Aburrimiento", type: "opuesta" },
    { from: "Felicidad", to: "Tristeza", type: "opuesta" }
  ];
  var BODY_ZONES = {
    simple: [
      { id: "head", labelKey: "zoneHead", color: "#818cf8" },
      { id: "chest", labelKey: "zoneChest", color: "#f472b6" },
      { id: "stomach", labelKey: "zoneStomach", color: "#fb923c" },
      { id: "arms", labelKey: "zoneArms", color: "#34d399" },
      { id: "legs", labelKey: "zoneLegs", color: "#fbbf24" }
    ],
    detailed: [
      { id: "head", labelKey: "zoneHead", color: "#818cf8" },
      { id: "face", labelKey: "zoneFace", color: "#f87171" },
      { id: "throat", labelKey: "zoneThroat", color: "#e879f9" },
      { id: "shoulders", labelKey: "zoneShoulders", color: "#60a5fa" },
      { id: "chest", labelKey: "zoneChest", color: "#f472b6" },
      { id: "stomach", labelKey: "zoneStomach", color: "#fb923c" },
      { id: "arms", labelKey: "zoneArms", color: "#34d399" },
      { id: "legs", labelKey: "zoneLegs", color: "#fbbf24" }
    ]
  };
  var SIMPLE_ZONE_GROUPS = {
    head: ["head", "face"],
    chest: ["chest", "throat", "shoulders"],
    stomach: ["stomach"],
    arms: ["arms"],
    legs: ["legs"]
  };
  var BODY_ZONE_EMOTIONS = {
    head: ["Confusi\xF3n", "Preocupaci\xF3n", "Ansiedad", "Angustia"],
    face: ["Verg\xFCenza", "Enojo", "Tristeza", "Alegr\xEDa"],
    throat: ["Angustia", "Miedo", "Asco", "Verg\xFCenza"],
    shoulders: ["Ansiedad", "Frustraci\xF3n", "Irritabilidad", "Preocupaci\xF3n", "Enojo"],
    chest: [
      "Enojo",
      "Tristeza",
      "Miedo",
      "Culpa",
      "Soledad",
      "Alegr\xEDa",
      "Calma",
      "Angustia",
      "Gratitud",
      "Orgullo",
      "Nostalgia",
      "Alivio",
      "Ternura",
      "Celos",
      "Rechazo",
      "Frustraci\xF3n",
      "Preocupaci\xF3n"
    ],
    stomach: ["Miedo", "Ansiedad", "Asco", "Culpa", "Celos", "Angustia", "Decepci\xF3n", "Envidia"],
    arms: ["Enojo", "Frustraci\xF3n", "Entusiasmo", "Irritabilidad"],
    legs: ["Tristeza", "Alegr\xEDa", "Aburrimiento", "Ansiedad", "Calma", "Felicidad"]
  };

  // js/i18n.js
  function detectInitialLanguage() {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
    const browserLang = globalThis.navigator?.language?.toLowerCase() ?? "es";
    return browserLang.startsWith("en") ? "en" : "es";
  }
  function createI18n({ getLang, setLang, onLanguageChanged }) {
    function t(key) {
      const lang = getLang();
      return TRANSLATIONS[lang]?.[key] ?? TRANSLATIONS.es[key] ?? key;
    }
    function getDisplayName(nombre) {
      if (getLang() === "en") return EMOTION_NAME_TRANSLATIONS[nombre] ?? nombre;
      return nombre;
    }
    function getEmotionField(emotion, field) {
      if (getLang() !== "en") return emotion[field];
      return EMOTION_CONTENT_TRANSLATIONS[emotion.nombre]?.[field] ?? emotion[field];
    }
    function applyStaticTranslations() {
      document.documentElement.lang = getLang();
      const ids = {
        "app-title": (el) => {
          el.textContent = t("title");
        },
        "app-subtitle": (el) => {
          el.textContent = t("subtitle");
        },
        "search": (el) => {
          el.placeholder = t("searchPlaceholder");
        },
        "recent-title": (el) => {
          el.textContent = t("recentTitle");
        },
        "close-button": (el) => {
          el.textContent = t("closeButton");
        },
        "share-btn": (el) => {
          el.setAttribute("aria-label", t("shareButton"));
        },
        "share-btn-label": (el) => {
          el.textContent = t("shareButton");
        },
        "diary-add-btn": (el) => {
          el.setAttribute("aria-label", t("diaryAddShort"));
        },
        "diary-add-label": (el) => {
          el.textContent = t("diaryAddShort");
        },
        "nav-label-emociones": (el) => {
          el.textContent = t("navEmociones");
        },
        "nav-label-checkin": (el) => {
          el.textContent = t("navCheckin");
        },
        "nav-label-diario": (el) => {
          el.textContent = t("navDiary");
        },
        "nav-label-mapa": (el) => {
          el.textContent = t("navMapa");
        },
        "install-app-button": (el) => {
          el.textContent = t("installButton");
        },
        "ios-install-title": (el) => {
          el.textContent = t("iosInstallTitle");
        },
        "ios-install-step-1": (el) => {
          el.textContent = t("iosInstallStep1");
        },
        "ios-install-step-2": (el) => {
          el.textContent = t("iosInstallStep2");
        },
        "ios-install-close": (el) => {
          el.textContent = t("iosInstallClose");
        },
        "quiz-trigger-title": (el) => {
          el.textContent = t("quizTrigger");
        },
        "quiz-trigger-sub": (el) => {
          el.textContent = t("quizTriggerSub");
        },
        "settings-btn": (el) => {
          el.setAttribute("aria-label", t("settingsLabel"));
        },
        "settings-theme-label": (el) => {
          el.textContent = t("themeLabel");
        },
        "settings-lang-label": (el) => {
          el.textContent = t("langLabel");
        },
        "theme-btn-light": (el) => {
          el.setAttribute("aria-label", t("themeLight"));
          el.setAttribute("title", t("themeLight"));
        },
        "theme-btn-auto": (el) => {
          el.setAttribute("aria-label", t("themeAuto"));
          el.setAttribute("title", t("themeAuto"));
        },
        "theme-btn-dark": (el) => {
          el.setAttribute("aria-label", t("themeDark"));
          el.setAttribute("title", t("themeDark"));
        }
      };
      for (const [id, apply] of Object.entries(ids)) {
        const el = document.getElementById(id);
        if (el) apply(el);
      }
    }
    function setLanguage(lang) {
      setLang(lang === "en" ? "en" : "es");
      localStorage.setItem(LANGUAGE_KEY, getLang());
      applyStaticTranslations();
      onLanguageChanged();
    }
    return {
      t,
      getDisplayName,
      getEmotionField,
      detectInitialLanguage,
      applyStaticTranslations,
      setLanguage
    };
  }

  // js/utils.js
  function escapeHtml(str) {
    return String(str).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
  }
  function isDarkMode() {
    return document.documentElement.classList.contains("dark");
  }
  function normalizeText(value) {
    return value.toLowerCase().normalize("NFD").replaceAll(/[̀-ͯ]/g, "");
  }
  function getReadableTextColor(hexColor) {
    const safeHex = (hexColor || "").replace("#", "");
    if (safeHex.length !== 6) return "#0f172a";
    const r = Number.parseInt(safeHex.slice(0, 2), 16);
    const g = Number.parseInt(safeHex.slice(2, 4), 16);
    const b = Number.parseInt(safeHex.slice(4, 6), 16);
    if ([r, g, b].some(Number.isNaN)) return "#0f172a";
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.52 ? "#f8fafc" : "#0f172a";
  }
  function wrapTextLines(ctx, text, maxWidth) {
    const words = text.split(" ");
    const lines = [];
    let line = "";
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
      if (ctx.measureText(test).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = test;
      }
    }
    if (line) lines.push(line);
    return lines;
  }

  // js/ui.js
  function loadRecentEmotions() {
    try {
      const parsed = JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  function shortRecentLabel(nombre) {
    return nombre.length > 9 ? `${nombre.slice(0, 9)}...` : nombre;
  }
  function roundRectPath(ctx, x, y, w, h, radii) {
    const [tl, tr, br, bl] = Array.isArray(radii) ? radii : [radii, radii, radii, radii];
    ctx.moveTo(x + tl, y);
    ctx.lineTo(x + w - tr, y);
    ctx.arcTo(x + w, y, x + w, y + tr, tr);
    ctx.lineTo(x + w, y + h - br);
    ctx.arcTo(x + w, y + h, x + w - br, y + h, br);
    ctx.lineTo(x + bl, y + h);
    ctx.arcTo(x, y + h, x, y + h - bl, bl);
    ctx.lineTo(x, y + tl);
    ctx.arcTo(x, y, x + tl, y, tl);
    ctx.closePath();
  }
  async function buildEmotionCanvas(e, displayName, tagLabel, mensaje, responseLabel, respuesta) {
    await document.fonts.load("900 1px Inter").catch(() => {
    });
    const W = 1080, H = 1350, PAD2 = 84;
    const SANS = `'Inter', system-ui, -apple-system, sans-serif`;
    const SERIF = `Georgia, "Times New Roman", serif`;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");
    const textOnColor = getReadableTextColor(e.color);
    const tagAlpha = textOnColor === "#f8fafc" ? "rgba(255,255,255,0.6)" : "rgba(15,23,42,0.4)";
    ctx.fillStyle = "#f8fafc";
    ctx.beginPath();
    roundRectPath(ctx, 0, 0, W, H, 0);
    ctx.fill();
    const ACCENT_H = 320;
    ctx.fillStyle = e.color;
    ctx.beginPath();
    roundRectPath(ctx, 0, 0, W, ACCENT_H, [0, 0, 0, 0]);
    ctx.fill();
    ctx.fillStyle = tagAlpha;
    ctx.font = `600 26px ${SANS}`;
    ctx.fillText(tagLabel.toUpperCase(), PAD2, 112);
    ctx.fillStyle = textOnColor;
    ctx.font = `900 92px ${SANS}`;
    ctx.fillText(displayName, PAD2, 248);
    let y = ACCENT_H + 76;
    ctx.fillStyle = "#475569";
    ctx.font = `italic 42px ${SERIF}`;
    const msgLines = wrapTextLines(ctx, `\u201C${mensaje}\u201D`, W - PAD2 * 2);
    for (const line of msgLines) {
      ctx.fillText(line, PAD2, y);
      y += 64;
    }
    y += 48;
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(PAD2, y);
    ctx.lineTo(W - PAD2, y);
    ctx.stroke();
    y += 56;
    ctx.fillStyle = "#94a3b8";
    ctx.font = `700 22px ${SANS}`;
    ctx.fillText(responseLabel.toUpperCase(), PAD2, y);
    y += 50;
    ctx.fillStyle = "#1e293b";
    ctx.font = `500 38px ${SANS}`;
    const respLines = wrapTextLines(ctx, respuesta, W - PAD2 * 2);
    for (const line of respLines) {
      ctx.fillText(line, PAD2, y);
      y += 58;
    }
    const contentFloor = y + 20;
    if (contentFloor < H - 220) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, contentFloor, W, H - contentFloor);
      ctx.clip();
      ctx.fillStyle = e.color;
      ctx.globalAlpha = 0.2;
      ctx.beginPath();
      ctx.arc(W * 0.85, H * 0.78, 380, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 0.14;
      ctx.beginPath();
      ctx.arc(W * 0.12, H * 0.92, 260, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 0.1;
      ctx.beginPath();
      ctx.arc(W * 0.55, H * 0.96, 190, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      const fadeH = 80;
      const fade = ctx.createLinearGradient(0, contentFloor, 0, contentFloor + fadeH);
      fade.addColorStop(0, "#f8fafc");
      fade.addColorStop(1, "rgba(248,250,252,0)");
      ctx.fillStyle = fade;
      ctx.fillRect(0, contentFloor, W, fadeH);
      ctx.restore();
    }
    ctx.fillStyle = "#64748b";
    ctx.font = `400 26px ${SANS}`;
    const brand = "Br\xFAjula Emocional";
    ctx.fillText(brand, W - PAD2 - ctx.measureText(brand).width, H - 56);
    return canvas;
  }
  async function shareEmotionCard(canvas, filename) {
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    const file = new File([blob], `${filename}.png`, { type: "image/png" });
    if (navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: filename });
      } catch {
      }
      return;
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
  }
  function createUI({
    emociones: emociones2,
    relaciones = [],
    getDisplayName,
    getEmotionField,
    t,
    getLastFocusedCard,
    setLastFocusedCard,
    getIsClosingModal,
    setIsClosingModal,
    modalAnimationMs: modalAnimationMs2,
    moodCategories = [],
    onAddToDiary = null
  }) {
    let scrollCleanup = null;
    let activeCheckinCat = null;
    function saveRecentEmotion(nombre) {
      const existing = loadRecentEmotions().filter((item) => item !== nombre);
      const next = [nombre, ...existing].slice(0, RECENT_LIMIT);
      localStorage.setItem(RECENT_KEY, JSON.stringify(next));
      renderRecentEmotions();
    }
    function renderRecentEmotions() {
      const section = document.getElementById("recent-section");
      const grid = document.getElementById("recent-grid");
      const recents = loadRecentEmotions();
      if (!recents.length) {
        section.classList.add("hidden");
        grid.innerHTML = "";
        return;
      }
      section.classList.remove("hidden");
      grid.innerHTML = "";
      recents.forEach((nombre) => {
        const emotion = emociones2.find((e) => e.nombre === nombre);
        if (!emotion) return;
        const card = document.createElement("button");
        card.type = "button";
        card.className = "emotion-card shrink-0 w-20 h-20 rounded-full shadow-sm bg-white border-4 flex items-center justify-center text-center px-2 text-[11px] font-bold leading-tight text-slate-700";
        card.style.borderColor = emotion.color;
        const displayName = getDisplayName(emotion.nombre);
        card.setAttribute("aria-label", `${t("openEmotionAria")} ${displayName}`);
        card.title = displayName;
        card.innerHTML = `<span>${shortRecentLabel(displayName)}</span>`;
        card.addEventListener("click", () => {
          setLastFocusedCard(card);
          showDetail(emotion);
        });
        grid.appendChild(card);
      });
    }
    function buildEmotionCardEl(e) {
      const card = document.createElement("div");
      card.className = "emotion-card p-5 rounded-2xl shadow-sm cursor-pointer flex justify-between items-center bg-white";
      card.style.borderLeft = `8px solid ${e.color}`;
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `${t("openDetailAria")} ${getDisplayName(e.nombre)}`);
      card.onclick = () => {
        setLastFocusedCard(card);
        showDetail(e);
      };
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setLastFocusedCard(card);
          showDetail(e);
        }
      });
      card.innerHTML = `
            <span class="font-bold text-lg text-slate-700">${getDisplayName(e.nombre)}</span>
            <svg class="w-4 h-4 text-slate-300 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
        `;
      return card;
    }
    const MOOD_SVGS = {
      agitado: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <circle cx="40" cy="42" r="26" stroke="currentColor" stroke-width="3.5"/>
            <line x1="26" y1="32" x2="34" y2="36" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <line x1="54" y1="32" x2="46" y2="36" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <circle cx="32" cy="42" r="2" fill="currentColor"/>
            <circle cx="48" cy="42" r="2" fill="currentColor"/>
            <path d="M30 54 L34 50 L38 54 L42 50 L46 54 L50 50" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
      triste: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <circle cx="40" cy="42" r="26" stroke="currentColor" stroke-width="3.5"/>
            <path d="M28 40 C 30 44, 34 44, 36 40" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <path d="M44 40 C 46 44, 50 44, 52 40" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <path d="M32 56 C 36 50, 44 50, 48 56" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <path d="M34 48 C 33 52, 31 54, 32 56 C 33 56, 34 54, 34 48 Z" fill="currentColor"/>
        </svg>`,
      confundido: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <circle cx="40" cy="42" r="26" stroke="currentColor" stroke-width="3.5"/>
            <line x1="26" y1="34" x2="34" y2="32" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <line x1="46" y1="32" x2="54" y2="36" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <circle cx="32" cy="42" r="2" fill="currentColor"/>
            <circle cx="48" cy="42" r="2" fill="currentColor"/>
            <path d="M30 54 C 34 52, 38 56, 42 54 C 46 52, 48 56, 52 54" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        </svg>`,
      bien: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <circle cx="40" cy="42" r="26" stroke="currentColor" stroke-width="3.5"/>
            <path d="M28 42 C 30 38, 34 38, 36 42" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <path d="M44 42 C 46 38, 50 38, 52 42" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <path d="M30 52 C 34 60, 46 60, 50 52" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        </svg>`
    };
    function renderCheckinTab() {
      const grid = document.getElementById("checkin-cards-grid");
      if (!grid || !moodCategories.length) return;
      grid.innerHTML = moodCategories.map((cat) => `
            <button type="button" data-mood="${cat.key}"
                class="checkin-card w-full p-5 rounded-2xl shadow-sm text-left flex flex-col gap-3 hover:shadow-md transition-all active:scale-95"
                style="background-color:${cat.color};color:${cat.ink}">
                ${MOOD_SVGS[cat.key] ?? `<span class="text-3xl" aria-hidden="true">${cat.emoji}</span>`}
                <span class="font-black text-base leading-tight">${t(cat.labelKey)}</span>
            </button>
        `).join("");
      for (const btn of grid.querySelectorAll(".checkin-card")) {
        btn.addEventListener("click", () => renderCheckinEmotions(btn.dataset.mood));
      }
      if (activeCheckinCat) renderCheckinEmotions(activeCheckinCat);
    }
    function renderCheckinEmotions(catKey) {
      const cat = moodCategories.find((c) => c.key === catKey);
      if (!cat) return;
      activeCheckinCat = catKey;
      const section = document.getElementById("checkin-emotion-section");
      const label = document.getElementById("checkin-selected-label");
      const filteredGrid = document.getElementById("checkin-filtered-grid");
      const resetBtn = document.getElementById("checkin-reset-btn");
      if (!section || !filteredGrid) return;
      section.classList.remove("hidden");
      if (label) label.textContent = `${cat.emoji} ${t(cat.labelKey)}`;
      filteredGrid.innerHTML = "";
      for (const e of emociones2.filter((em) => cat.emotions.includes(em.nombre))) {
        filteredGrid.appendChild(buildEmotionCardEl(e));
      }
      if (resetBtn) {
        const freshBtn = resetBtn.cloneNode(true);
        resetBtn.replaceWith(freshBtn);
        freshBtn.textContent = t("checkinReset");
        freshBtn.addEventListener("click", () => {
          activeCheckinCat = null;
          section.classList.add("hidden");
        });
      }
      section.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    function renderEmociones(filter = "") {
      const grid = document.getElementById("emotion-grid");
      grid.innerHTML = "";
      for (const e of emociones2) {
        const card = buildEmotionCardEl(e);
        card.dataset.search = [
          e.nombre,
          getDisplayName(e.nombre),
          e.siente,
          e.dispara,
          e.mensaje,
          getEmotionField(e, "siente"),
          getEmotionField(e, "dispara"),
          getEmotionField(e, "mensaje"),
          getEmotionField(e, "respuesta")
        ].map(normalizeText).join(" ");
        grid.appendChild(card);
      }
      filterEmociones(filter);
    }
    function filterEmociones(filter) {
      const grid = document.getElementById("emotion-grid");
      if (!grid) return;
      const normalizedFilter = normalizeText(filter.trim());
      grid.querySelector(".search-empty-state")?.remove();
      let visibleCount = 0;
      for (const card of grid.querySelectorAll("[data-search]")) {
        const matches = !normalizedFilter || card.dataset.search.includes(normalizedFilter);
        card.hidden = !matches;
        if (matches) visibleCount++;
      }
      if (!visibleCount) {
        const emptyState = document.createElement("div");
        emptyState.className = "search-empty-state bg-white rounded-2xl p-5 text-center shadow-sm border border-slate-200";
        emptyState.innerHTML = `
                <p class="text-slate-700 font-bold mb-1">${t("emptyTitle")}</p>
                <p class="text-slate-500 text-sm">${t("emptyHint")}</p>
            `;
        grid.appendChild(emptyState);
      }
    }
    function showDiaryForm(emotionNombre) {
      const existingForm = document.getElementById("diary-inline-form");
      if (existingForm) {
        existingForm.remove();
        return;
      }
      const form = document.createElement("div");
      form.id = "diary-inline-form";
      form.className = "mt-4 border-t border-slate-100 pt-4";
      form.innerHTML = `
            <label for="diary-note-input" class="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2 block">${t("diaryNoteLabel")}</label>
            <textarea id="diary-note-input" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-200" rows="2" placeholder="${t("diaryNotePlaceholder")}"></textarea>
            <div class="flex gap-2 mt-2">
                <button id="diary-note-save" type="button" class="flex-1 bg-slate-800 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-slate-700 transition-colors">${t("diarySaveButton")}</button>
                <button id="diary-note-cancel" type="button" class="flex-1 bg-slate-100 text-slate-600 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors">${t("diaryCancelButton")}</button>
            </div>
        `;
      const panel = document.getElementById("modal-panel");
      panel.appendChild(form);
      form.querySelector("#diary-note-input").focus();
      panel.scrollTop = panel.scrollHeight;
      form.querySelector("#diary-note-save").addEventListener("click", () => {
        const note = form.querySelector("#diary-note-input").value;
        if (onAddToDiary) onAddToDiary(emotionNombre, note);
        form.innerHTML = `<p class="text-emerald-600 font-bold text-sm text-center py-2">\u2713 ${t("diaryAddedFeedback")}</p>`;
        setTimeout(() => form.remove(), 1800);
      });
      form.querySelector("#diary-note-cancel").addEventListener("click", () => form.remove());
    }
    function wireDiaryButton(emotionNombre) {
      const diaryAddBtn = document.getElementById("diary-add-btn");
      if (!diaryAddBtn || !onAddToDiary) return;
      const freshBtn = diaryAddBtn.cloneNode(true);
      diaryAddBtn.replaceWith(freshBtn);
      freshBtn.addEventListener("click", () => showDiaryForm(emotionNombre));
    }
    function showDetail(e) {
      document.getElementById("diary-inline-form")?.remove();
      const quoteTextColor = getReadableTextColor(e.color);
      const quoteLabelColor = quoteTextColor === "#f8fafc" ? "rgba(248,250,252,0.9)" : "rgba(15,23,42,0.85)";
      const maskedEmotions = relaciones.filter((r) => r.type === "enmascara" && r.from === e.nombre).map((r) => emociones2.find((em) => em.nombre === r.to)).filter(Boolean);
      const masksSection = maskedEmotions.length > 0 ? `
                <div class="border-t border-slate-100 pt-4">
                    <p class="text-[11px] font-black text-violet-500 uppercase tracking-widest mb-2 px-1">${t("mapRelEnmascara")}</p>
                    <div class="flex flex-wrap gap-2 mb-2">
                        ${maskedEmotions.map((m) => `
                            <button type="button" data-masked="${m.nombre}"
                                class="masked-chip px-3 py-1.5 rounded-full text-sm font-bold transition-opacity hover:opacity-80"
                                style="background-color:${m.color}; color:${getReadableTextColor(m.color)}">
                                ${getDisplayName(m.nombre)}
                            </button>
                        `).join("")}
                    </div>
                    <p class="text-xs text-slate-400 px-1">${t("masksHint")}</p>
                </div>
        ` : "";
      const content = document.getElementById("modal-content");
      content.innerHTML = `
            <div class="inline-block px-4 py-1 rounded-full mb-2" style="background-color:${e.color}; color:${quoteTextColor}">
                <span class="text-xs font-black uppercase tracking-widest">${t("emotionTag")}</span>
            </div>
            <h2 id="modal-emotion-title" class="text-4xl font-black mb-6 text-slate-800">${getDisplayName(e.nombre)}</h2>

            <div class="space-y-6">
                <div class="grid grid-cols-1 gap-4">
                    <div class="bg-slate-50 p-4 rounded-2xl">
                        <p class="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-1">${t("feelLabel")}</p>
                        <p class="text-slate-700 leading-relaxed font-medium">${getEmotionField(e, "siente")}</p>
                    </div>
                    <div class="bg-slate-50 p-4 rounded-2xl">
                        <p class="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-1">${t("triggerLabel")}</p>
                        <p class="text-slate-700 leading-relaxed font-medium">${getEmotionField(e, "dispara")}</p>
                    </div>
                    <div class="bg-slate-50 p-4 rounded-2xl">
                        <p class="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-1">${t("functionLabel")}</p>
                        <p class="text-slate-700 leading-relaxed font-medium">${getEmotionField(e, "funcion")}</p>
                    </div>
                </div>

                <div class="relative p-6 rounded-3xl overflow-hidden shadow-lg" style="background-color:${e.color}; color:${quoteTextColor}">
                    <svg class="absolute -top-2 -left-2 text-black/10 w-16 h-16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>
                    <p class="text-[11px] font-black uppercase tracking-widest mb-2" style="color:${quoteLabelColor}">${t("messageLabel")}</p>
                    <p class="text-[1.45rem] sm:text-[1.65rem] font-serif italic leading-[1.35] sm:leading-snug" style="color:${quoteTextColor}">"${getEmotionField(e, "mensaje")}"</p>
                </div>

                <div>
                    <p class="text-[11px] font-black text-amber-600 uppercase tracking-widest mb-2 px-1">${t("impulseLabel")}</p>
                    <div class="bg-amber-50 border-2 border-amber-100 p-4 rounded-2xl">
                        <p class="text-amber-900 font-bold leading-relaxed">${getEmotionField(e, "impulso")}</p>
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between mb-2 px-1">
                        <p class="text-[11px] font-black text-slate-500 uppercase tracking-widest">${t("responseLabel")}</p>
                        <button id="copy-response-btn" type="button" class="flex items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors text-[11px] font-bold" aria-label="${t("copyButton")}">
                            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                            <span id="copy-response-label">${t("copyButton")}</span>
                        </button>
                    </div>
                    <div class="bg-emerald-50 border-2 border-emerald-100 p-4 rounded-2xl">
                        <p class="text-emerald-900 font-bold leading-relaxed">${getEmotionField(e, "respuesta")}</p>
                    </div>
                </div>

                ${masksSection}
            </div>
        `;
      const modal = document.getElementById("modal");
      const panel = document.getElementById("modal-panel");
      if (!modal.open) modal.showModal();
      panel.scrollTop = 0;
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => {
        panel.classList.remove("translate-y-8", "sm:scale-95", "opacity-0");
      });
      saveRecentEmotion(e.nombre);
      const copyBtn = document.getElementById("copy-response-btn");
      const copyLabel = document.getElementById("copy-response-label");
      if (copyBtn && navigator.clipboard) {
        copyBtn.addEventListener("click", async () => {
          await navigator.clipboard.writeText(getEmotionField(e, "respuesta"));
          copyLabel.textContent = t("copiedFeedback");
          setTimeout(() => {
            copyLabel.textContent = t("copyButton");
          }, 2e3);
        });
      } else if (copyBtn) {
        copyBtn.remove();
      }
      for (const chip of content.querySelectorAll(".masked-chip")) {
        chip.addEventListener("click", () => {
          const masked = emociones2.find((em) => em.nombre === chip.dataset.masked);
          if (masked) showDetail(masked);
        });
      }
      const closeButton = document.getElementById("close-button");
      if (closeButton) closeButton.focus({ preventScroll: true });
      const shareBtn = document.getElementById("share-btn");
      if (shareBtn) {
        const freshShareBtn = shareBtn.cloneNode(true);
        shareBtn.replaceWith(freshShareBtn);
        freshShareBtn.addEventListener("click", async () => {
          const canvas = await buildEmotionCanvas(
            e,
            getDisplayName(e.nombre),
            t("emotionTag"),
            getEmotionField(e, "mensaje"),
            t("responseLabel"),
            getEmotionField(e, "respuesta")
          );
          shareEmotionCard(canvas, getDisplayName(e.nombre));
        });
      }
      wireDiaryButton(e.nombre);
      if (scrollCleanup) scrollCleanup();
      const onPanelScroll = () => {
        const atBottom = panel.scrollHeight - panel.scrollTop <= panel.clientHeight + 8;
        panel.classList.toggle("modal-at-bottom", atBottom);
      };
      panel.addEventListener("scroll", onPanelScroll, { passive: true });
      scrollCleanup = () => panel.removeEventListener("scroll", onPanelScroll);
      onPanelScroll();
    }
    function closeModal() {
      const modal = document.getElementById("modal");
      const panel = document.getElementById("modal-panel");
      if (!modal.open || getIsClosingModal()) return;
      setIsClosingModal(true);
      panel.classList.add("translate-y-8", "sm:scale-95", "opacity-0");
      if (scrollCleanup) {
        scrollCleanup();
        scrollCleanup = null;
      }
      setTimeout(() => {
        modal.close();
        setIsClosingModal(false);
      }, modalAnimationMs2);
      document.body.style.overflow = "auto";
      const lastFocusedCard = getLastFocusedCard();
      if (lastFocusedCard) lastFocusedCard.focus();
    }
    function bindBaseEvents() {
      const modal = document.getElementById("modal");
      const modalBackdrop = document.getElementById("modal-backdrop");
      const closeButton = document.getElementById("close-button");
      const search = document.getElementById("search");
      modalBackdrop.addEventListener("click", (event) => {
        if (event.target === modalBackdrop) closeModal();
      });
      modal.addEventListener("cancel", (event) => {
        event.preventDefault();
        closeModal();
      });
      closeButton.addEventListener("click", closeModal);
      search.addEventListener("input", (event) => filterEmociones(event.target.value));
    }
    return {
      renderRecentEmotions,
      renderEmociones,
      renderCheckinTab,
      renderCheckinEmotions,
      bindBaseEvents,
      closeModal,
      showDetail
    };
  }

  // js/bodyMap.js
  var BODY_PARTS = [
    { tag: "ellipse", cx: 50, cy: 17, rx: 13, ry: 14 },
    { tag: "path", d: "M45 29 L45 42 L55 42 L55 29 Z" },
    { tag: "path", d: "M34 41 Q28 44 27 50 L29 130 Q50 138 71 130 L73 50 Q72 44 66 41 Q58 39 50 39 Q42 39 34 41 Z" },
    { tag: "path", d: "M27 47 C21 49 15 53 14 60 L13 130 C13 135 16 137 20 137 L26 137 C30 137 31 135 31 130 L31 60 C31 53 29 49 27 47 Z" },
    { tag: "path", d: "M73 47 C79 49 85 53 86 60 L87 130 C87 135 84 137 80 137 L74 137 C70 137 69 135 69 130 L69 60 C69 53 71 49 73 47 Z" },
    { tag: "path", d: "M29 130 L27 200 L51 200 L51 136 C43 136 35 134 29 130 Z" },
    { tag: "path", d: "M71 130 C65 134 57 136 49 136 L49 200 L73 200 L71 130 Z" }
  ];
  var ZONE_RECTS = {
    simple: {
      head: [{ x: 0, y: 0, w: 100, h: 32 }],
      chest: [{ x: 27, y: 32, w: 46, h: 68 }],
      stomach: [{ x: 27, y: 100, w: 46, h: 40 }],
      arms: [{ x: 0, y: 42, w: 27, h: 98 }, { x: 73, y: 42, w: 27, h: 98 }],
      legs: [{ x: 0, y: 136, w: 100, h: 64 }]
    },
    detailed: {
      head: [{ x: 0, y: 0, w: 100, h: 18 }],
      face: [{ x: 0, y: 18, w: 100, h: 14 }],
      throat: [{ x: 0, y: 32, w: 100, h: 12 }],
      shoulders: [{ x: 27, y: 44, w: 46, h: 22 }],
      chest: [{ x: 27, y: 66, w: 46, h: 36 }],
      stomach: [{ x: 27, y: 102, w: 46, h: 36 }],
      arms: [{ x: 0, y: 44, w: 27, h: 95 }, { x: 73, y: 44, w: 27, h: 95 }],
      legs: [{ x: 0, y: 138, w: 100, h: 62 }]
    }
  };
  function bodyPartSvg(part, attrs) {
    const a = Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(" ");
    if (part.tag === "ellipse") return `<ellipse cx="${part.cx}" cy="${part.cy}" rx="${part.rx}" ry="${part.ry}" ${a}/>`;
    if (part.tag === "path") return `<path d="${part.d}" ${a}/>`;
    return "";
  }
  function getZoneEmotionNames(zoneId, mode) {
    const detailZones = mode === "simple" ? SIMPLE_ZONE_GROUPS[zoneId] || [zoneId] : [zoneId];
    const names = /* @__PURE__ */ new Set();
    for (const dz of detailZones) {
      for (const n of BODY_ZONE_EMOTIONS[dz] || []) names.add(n);
    }
    return names;
  }
  function buildSvgZoneRects(zones, rects, selectedZones) {
    return zones.map((zone) => {
      const on = selectedZones.has(zone.id);
      const fill = on ? zone.color + "66" : zone.color + "33";
      const strk = on ? zone.color : zone.color + "66";
      const sw = on ? "1.5" : "0.75";
      return (rects[zone.id] || []).map(
        (r) => `<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}"
                data-zone="${zone.id}" fill="${fill}" stroke="${strk}" stroke-width="${sw}"
                cursor="pointer" class="zone-hit"/>`
      ).join("");
    }).join("");
  }
  function buildSvgZoneLabels(zones, rects, selectedZones, t) {
    return zones.filter((z) => selectedZones.has(z.id) && z.id !== "arms").map((z) => {
      const r = (rects[z.id] || [])[0];
      if (!r) return "";
      const lx = r.x + r.w / 2;
      const ly = r.y + r.h / 2 + 4;
      return `<text x="${lx}" y="${ly}" text-anchor="middle" font-size="7.5" font-weight="700"
                fill="${z.color}" pointer-events="none" opacity="0.9">${t(z.labelKey)}</text>`;
    }).join("");
  }
  function buildChipsHtml(zones, selectedZones, t) {
    return zones.filter((z) => selectedZones.has(z.id)).map((z) => `
            <span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                style="background:${z.color}">
                ${t(z.labelKey)}
                <button type="button" data-remove-zone="${z.id}" aria-label="Quitar ${t(z.labelKey)}"
                    class="opacity-80 hover:opacity-100 leading-none">
                    <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </button>
            </span>`).join("");
  }
  function buildResultHtml(matching, selectedZones, dark, t, getDisplayName) {
    const emptyC = dark ? "text-slate-500" : "text-slate-400";
    if (selectedZones.size === 0) {
      return `<p class="text-sm text-center ${emptyC} py-3 px-2">${t("bodyMapTapPrompt")}</p>`;
    }
    if (matching.length === 0) {
      return `<p class="text-sm text-center ${emptyC} py-3 px-2">${t("bodyMapNoMatch")}</p>`;
    }
    const titleC = dark ? "text-slate-300" : "text-slate-500";
    const cards = matching.map((e) => `
        <button type="button" data-body-emotion="${e.nombre}"
            class="body-result-card w-full text-left px-4 py-3 rounded-2xl flex items-center gap-3 transition-all hover:shadow-md"
            style="background:${e.color}25; border-left:5px solid ${e.color}">
            <span class="font-bold text-sm" style="color:${e.text}">${getDisplayName(e.nombre)}</span>
            <span class="ml-auto text-xs font-bold opacity-60 shrink-0" style="color:${e.text}">Ver \u2192</span>
        </button>`).join("");
    return `
        <p class="text-[11px] font-black ${titleC} uppercase tracking-widest mb-3">${t("bodyMapResultTitle")}</p>
        <div class="space-y-2">${cards}</div>`;
  }
  var BODY_CLIP_SHAPES = BODY_PARTS.map((p) => bodyPartSvg(p, { fill: "white" })).join("");
  function createBodyMap({ emociones: emociones2, getDisplayName, t, showDetail, onDismiss, onSwitchToQuiz }) {
    let selectedZones = /* @__PURE__ */ new Set();
    let mode = "simple";
    function getMatchingEmotions() {
      if (selectedZones.size === 0) return [];
      const counts = /* @__PURE__ */ new Map();
      for (const zoneId of selectedZones) {
        for (const name of getZoneEmotionNames(zoneId, mode)) {
          counts.set(name, (counts.get(name) || 0) + 1);
        }
      }
      return emociones2.filter((e) => counts.has(e.nombre)).sort((a, b) => counts.get(b.nombre) - counts.get(a.nombre) || a.nombre.localeCompare(b.nombre));
    }
    function render() {
      const content = document.getElementById("quiz-content");
      if (!content) return;
      const dark = isDarkMode();
      const zones = BODY_ZONES[mode];
      const rects = ZONE_RECTS[mode];
      const lineColor = dark ? "#64748b" : "#94a3b8";
      const bodyFill = dark ? "#0f172a" : "#f8fafc";
      const activeC = dark ? "bg-slate-600 text-slate-100" : "bg-slate-800 text-white";
      const inactiveC = dark ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600";
      const clearBtnC = dark ? "bg-slate-800 text-slate-300 hover:bg-slate-700" : "bg-slate-100 text-slate-500 hover:bg-slate-200";
      const toQuizC = dark ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600";
      const clipShapes = BODY_CLIP_SHAPES;
      const zoneRects = buildSvgZoneRects(zones, rects, selectedZones);
      const zoneLabels = buildSvgZoneLabels(zones, rects, selectedZones, t);
      const bodyOutline = BODY_PARTS.map((p) => bodyPartSvg(p, {
        fill: bodyFill,
        "fill-opacity": "0.35",
        stroke: lineColor,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "pointer-events": "none"
      })).join("");
      const divider = `<line x1="29" y1="100" x2="71" y2="100"
            stroke="${lineColor}" stroke-dasharray="3,2" opacity="0.35" pointer-events="none"/>`;
      const chipsHtml = buildChipsHtml(zones, selectedZones, t);
      const resultHtml = buildResultHtml(getMatchingEmotions(), selectedZones, dark, t, getDisplayName);
      const clearBtn = selectedZones.size > 0 ? `<button id="body-clear-btn" type="button"
                class="mt-4 w-full py-2.5 rounded-2xl text-sm font-bold transition-colors ${clearBtnC}">
                ${t("bodyMapClear")}
               </button>` : "";
      const headerC = dark ? "text-slate-100" : "text-slate-800";
      const closeRingC = dark ? "bg-slate-700 text-slate-400 hover:bg-slate-600" : "bg-slate-100 text-slate-500 hover:bg-slate-200";
      const toggleBgC = dark ? "bg-slate-800" : "bg-slate-100";
      content.innerHTML = `
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-xl font-black ${headerC}">${t("bodyMapTitle")}</h2>
                <button id="body-close-btn" type="button" aria-label="Cerrar"
                    class="w-8 h-8 flex items-center justify-center rounded-full ${closeRingC} transition-colors">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </button>
            </div>
            <div class="flex gap-1 mb-4 p-1 rounded-xl ${toggleBgC}">
                <button type="button" id="body-mode-simple"
                    class="flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${mode === "simple" ? activeC : inactiveC}">
                    ${t("bodyModeSimple")}
                </button>
                <button type="button" id="body-mode-detailed"
                    class="flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${mode === "detailed" ? activeC : inactiveC}">
                    ${t("bodyModeDetailed")}
                </button>
            </div>
            <div class="flex justify-center mb-4">
                <svg id="body-svg" viewBox="0 0 100 200"
                    style="width:130px;height:auto;touch-action:manipulation"
                    role="img" aria-label="${t("bodyMapTitle")}">
                    <defs><clipPath id="body-clip">${clipShapes}</clipPath></defs>
                    <g clip-path="url(#body-clip)">
                        ${zoneRects}${zoneLabels}${divider}
                    </g>
                    <g>${bodyOutline}</g>
                </svg>
            </div>
            <div class="flex flex-wrap gap-1.5 mb-4 min-h-[28px]">${chipsHtml}</div>
            ${resultHtml}
            ${clearBtn}
            <button id="body-to-quiz-btn" type="button"
                class="mt-2 w-full py-2.5 text-sm font-medium transition-colors ${toQuizC}">
                \u2190 ${t("quizTabQuestions")}
            </button>`;
      bindEvents(content);
    }
    function bindEvents(content) {
      content.querySelector("#body-close-btn").addEventListener("click", onDismiss);
      for (const btn of content.querySelectorAll("#body-mode-simple, #body-mode-detailed")) {
        btn.addEventListener("click", () => {
          const newMode = btn.id === "body-mode-simple" ? "simple" : "detailed";
          if (mode === newMode) return;
          mode = newMode;
          selectedZones.clear();
          render();
        });
      }
      content.querySelector("#body-clear-btn")?.addEventListener("click", () => {
        selectedZones.clear();
        render();
      });
      content.querySelector("#body-to-quiz-btn").addEventListener("click", () => {
        if (onSwitchToQuiz) onSwitchToQuiz();
      });
      content.querySelector("#body-svg").addEventListener("click", (ev) => {
        const hit = ev.target.closest(".zone-hit");
        if (!hit) return;
        const zoneId = hit.dataset.zone;
        if (selectedZones.has(zoneId)) selectedZones.delete(zoneId);
        else selectedZones.add(zoneId);
        render();
      });
      for (const btn of content.querySelectorAll("[data-remove-zone]")) {
        btn.addEventListener("click", (ev) => {
          ev.stopPropagation();
          selectedZones.delete(btn.dataset.removeZone);
          render();
        });
      }
      const matching = getMatchingEmotions();
      for (const btn of content.querySelectorAll(".body-result-card")) {
        btn.addEventListener("click", () => {
          const emotion = matching.find((e) => e.nombre === btn.dataset.bodyEmotion);
          if (emotion) {
            onDismiss();
            showDetail(emotion);
          }
        });
      }
    }
    return { render };
  }

  // js/quiz.js
  var QUIZ_STEPS = {
    q1: {
      textKey: "quizQ1",
      options: [
        { labelKey: "quizQ1A", next: "q2_high" },
        { labelKey: "quizQ1B", next: "q2_low" }
      ]
    },
    q2_high: {
      textKey: "quizQ2",
      options: [
        { labelKey: "quizQ2A", result: ["Entusiasmo", "Alegr\xEDa", "Orgullo"] },
        { labelKey: "quizQ2B", next: "q3_high_bad" }
      ]
    },
    q2_low: {
      textKey: "quizQ2",
      options: [
        { labelKey: "quizQ2A", result: ["Calma", "Felicidad", "Placer", "Gratitud", "Alivio", "Ternura"] },
        { labelKey: "quizQ2B", next: "q3_low_bad" }
      ]
    },
    q3_high_bad: {
      textKey: "quizQ3",
      options: [
        { labelKey: "quizQ3A", result: ["Enojo", "Frustraci\xF3n", "Miedo", "Celos", "Envidia", "Disgusto"] },
        { labelKey: "quizQ3B", result: ["Ansiedad", "Preocupaci\xF3n", "Irritabilidad"] }
      ]
    },
    q3_low_bad: {
      textKey: "quizQ3",
      options: [
        { labelKey: "quizQ3A", result: ["Tristeza", "Verg\xFCenza", "Rechazo", "Culpa", "Decepci\xF3n"] },
        { labelKey: "quizQ3B", result: ["Soledad", "Angustia", "Confusi\xF3n", "Nostalgia", "Aburrimiento"] }
      ]
    }
  };
  function createQuiz({ emociones: emociones2, getDisplayName, t, showDetail, onShowAll }) {
    let history = [];
    let currentStepKey = "q1";
    const dismiss = () => {
      document.getElementById("quiz-panel").close();
      document.getElementById("quiz-trigger")?.focus();
    };
    const bodyMap = createBodyMap({
      emociones: emociones2,
      getDisplayName,
      t,
      showDetail,
      onDismiss: dismiss,
      onSwitchToQuiz: () => {
        history = [];
        currentStepKey = "q1";
        renderQuiz();
      }
    });
    const open = () => {
      history = [];
      currentStepKey = "q1";
      document.getElementById("quiz-panel").showModal();
      renderQuiz();
    };
    const pickOption = (option) => {
      if (option.result) {
        renderResult(option.result);
      } else {
        history.push(currentStepKey);
        currentStepKey = option.next;
        renderQuiz();
      }
    };
    const headerHtml = (dark) => {
      const titleC = dark ? "text-slate-100" : "text-slate-800";
      const closeC = dark ? "bg-slate-700 text-slate-400 hover:bg-slate-600" : "bg-slate-100 text-slate-500 hover:bg-slate-200";
      return `
            <div class="flex items-center justify-between mb-8">
                <h2 class="text-xl font-black ${titleC}">${t("quizTitle")}</h2>
                <button id="quiz-close-btn" type="button" aria-label="Cerrar"
                    class="w-8 h-8 flex items-center justify-center rounded-full ${closeC} transition-colors">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </button>
            </div>
        `;
    };
    const bindCloseBtn = (content) => {
      content.querySelector("#quiz-close-btn").addEventListener("click", dismiss);
    };
    const renderResult = (emotionNames) => {
      const dark = isDarkMode();
      const emotions = emotionNames.map((nombre) => emociones2.find((e) => e.nombre === nombre)).filter(Boolean);
      const titleC = dark ? "text-slate-300" : "text-slate-500";
      const restartC = dark ? "bg-slate-800 text-slate-200 hover:bg-slate-700" : "bg-slate-100 text-slate-700 hover:bg-slate-200";
      const closeResC = dark ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600";
      const content = document.getElementById("quiz-content");
      content.innerHTML = `
            ${headerHtml(dark)}
            <p class="text-[11px] font-black ${titleC} uppercase tracking-widest mb-4">${t("quizResultTitle")}</p>
            <div class="space-y-3">
                ${emotions.map((e) => `
                    <button type="button" data-emotion="${e.nombre}"
                        class="quiz-result-card w-full text-left p-4 rounded-2xl flex items-center gap-4 hover:shadow-md transition-all"
                        style="border-left:6px solid ${e.color}; background:${e.color}${dark ? "22" : "15"}">
                        <span class="font-bold" style="color:${e.text}">${getDisplayName(e.nombre)}</span>
                        <span class="ml-auto text-xs font-bold opacity-70 shrink-0" style="color:${e.text}">Ver \u2192</span>
                    </button>
                `).join("")}
            </div>
            <button id="quiz-restart-btn" type="button"
                class="mt-6 w-full py-3 font-bold rounded-2xl text-sm transition-colors ${restartC}">
                ${t("quizRestart")}
            </button>
            <button id="quiz-close-result-btn" type="button"
                class="mt-2 w-full py-3 text-sm font-medium transition-colors ${closeResC}">
                ${t("quizClose")}
            </button>
        `;
      bindCloseBtn(content);
      content.querySelector("#quiz-restart-btn").addEventListener("click", () => {
        history = [];
        currentStepKey = "q1";
        renderQuiz();
      });
      content.querySelector("#quiz-close-result-btn").addEventListener("click", () => {
        dismiss();
        if (onShowAll) onShowAll();
      });
      for (const btn of content.querySelectorAll(".quiz-result-card")) {
        btn.addEventListener("click", () => {
          const emotion = emociones2.find((e) => e.nombre === btn.dataset.emotion);
          if (emotion) {
            dismiss();
            showDetail(emotion);
          }
        });
      }
      content.querySelector(".quiz-result-card")?.focus();
    };
    const renderQuiz = () => {
      const dark = isDarkMode();
      const step = QUIZ_STEPS[currentStepKey];
      const inactiveDot = dark ? "bg-slate-700" : "bg-slate-200";
      const dotsHtml = ["q1", "q2", "q3"].map((_, i) => {
        const active = i <= history.length;
        return `<div class="w-2 h-2 rounded-full transition-colors ${active ? "bg-blue-500" : inactiveDot}"></div>`;
      }).join("");
      const questionC = dark ? "text-slate-100" : "text-slate-800";
      const optionC = dark ? "bg-slate-800 text-slate-200 border-slate-700 hover:border-blue-400" : "bg-white text-slate-700 border-transparent hover:border-blue-300";
      const backC = dark ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600";
      const toBodyC = dark ? "text-slate-300 border-slate-600 hover:border-slate-400 hover:bg-slate-800" : "text-slate-500 border-slate-300 hover:border-slate-400 hover:bg-slate-50";
      const content = document.getElementById("quiz-content");
      content.innerHTML = `
            ${headerHtml(dark)}
            <div class="flex gap-2 mb-8" aria-hidden="true">${dotsHtml}</div>
            <p class="text-2xl font-black ${questionC} leading-snug mb-8">${t(step.textKey)}</p>
            <div class="space-y-3">
                ${step.options.map((opt, i) => `
                    <button type="button" data-option-index="${i}"
                        class="quiz-option w-full text-left p-5 rounded-2xl shadow-sm border-2 hover:shadow-md transition-all font-medium ${optionC}">
                        ${t(opt.labelKey)}
                    </button>
                `).join("")}
            </div>
            ${history.length > 0 ? `
                <button id="quiz-back-btn" type="button"
                    class="mt-6 flex items-center gap-2 text-sm font-medium transition-colors ${backC}">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    ${t("quizBack")}
                </button>
            ` : `
                <button id="quiz-to-body-btn" type="button"
                    class="mt-6 w-full py-3 text-sm font-semibold transition-colors border rounded-2xl ${toBodyC}">
                    ${t("quizTabBody")} \u2192
                </button>
            `}
        `;
      bindCloseBtn(content);
      if (history.length > 0) {
        content.querySelector("#quiz-back-btn").addEventListener("click", () => {
          currentStepKey = history.pop();
          renderQuiz();
        });
      } else {
        content.querySelector("#quiz-to-body-btn").addEventListener("click", () => {
          bodyMap.render();
        });
      }
      for (const btn of content.querySelectorAll(".quiz-option")) {
        btn.addEventListener("click", () => pickOption(step.options[Number.parseInt(btn.dataset.optionIndex)]));
      }
      content.querySelector(".quiz-option")?.focus();
    };
    const init = () => {
      const trigger = document.getElementById("quiz-trigger");
      const panel = document.getElementById("quiz-panel");
      if (!trigger || !panel) return;
      trigger.addEventListener("click", open);
      panel.addEventListener("cancel", (e) => {
        e.preventDefault();
        dismiss();
      });
    };
    return { init };
  }

  // js/diary.js
  function parseDiaryEntries(raw) {
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  function createDiaryEntry(emotionNombre, note = "") {
    return {
      id: Date.now(),
      date: (/* @__PURE__ */ new Date()).toISOString(),
      emotion: emotionNombre,
      note: note.trim()
    };
  }
  function deleteDiaryEntryById(entries, id) {
    return entries.filter((e) => e.id !== id);
  }
  function loadEntries() {
    return parseDiaryEntries(localStorage.getItem(DIARY_KEY));
  }
  function saveEntries(entries) {
    localStorage.setItem(DIARY_KEY, JSON.stringify(entries));
  }
  function addEntry(emotionNombre, note = "") {
    const entry = createDiaryEntry(emotionNombre, note);
    saveEntries([entry, ...loadEntries()]);
    return entry;
  }
  function deleteEntry(id) {
    saveEntries(deleteDiaryEntryById(loadEntries(), id));
  }
  function createDiary({ t, getDisplayName, emociones: emociones2, onGoToCheckin = null, onOpenQuiz = null }) {
    function formatDate(isoString) {
      const d = new Date(isoString);
      const now = /* @__PURE__ */ new Date();
      const time = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      if (d.toDateString() === now.toDateString()) return `${t("diaryTodayLabel")}, ${time}`;
      return `${d.toLocaleDateString([], { day: "numeric", month: "short", year: "numeric" })} \xB7 ${time}`;
    }
    function buildAddFormHtml() {
      return `
            <div id="diary-add-form" class="bg-white rounded-2xl p-4 shadow-sm mb-4 border-2 border-blue-100">
                <p class="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-3">${t("diaryNewEntry")}</p>
                <div class="relative mb-3">
                    <input type="text" id="diary-emotion-search" autocomplete="off"
                        placeholder="${t("diaryPickEmotion")}"
                        class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-200">
                    <input type="hidden" id="diary-emotion-value">
                    <div id="diary-emotion-dropdown"
                        class="hidden absolute z-50 left-0 right-0 mt-1 bg-white rounded-xl shadow-lg border border-slate-200 hide-scroll"
                        style="max-height:11rem;overflow-y:auto"></div>
                </div>
                <textarea id="diary-note-input" rows="2" placeholder="${t("diaryNotePlaceholder")}"
                    class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-200 mb-3"></textarea>
                <div class="flex gap-2">
                    <button id="diary-form-save" type="button"
                        class="flex-1 bg-slate-800 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-slate-700 transition-colors">
                        ${t("diarySaveButton")}
                    </button>
                    <button id="diary-form-cancel" type="button"
                        class="flex-1 bg-slate-100 text-slate-600 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors">
                        ${t("diaryCancelButton")}
                    </button>
                </div>
            </div>
        `;
    }
    function wireEmotionSearch(content) {
      const searchInput = content.querySelector("#diary-emotion-search");
      const dropdown = content.querySelector("#diary-emotion-dropdown");
      const hiddenValue = content.querySelector("#diary-emotion-value");
      if (!searchInput || !dropdown || !hiddenValue) return;
      function renderDropdown(query) {
        const q = normalizeText(query.trim());
        const filtered = emociones2.filter((e) => {
          const name = normalizeText(getDisplayName(e.nombre));
          return !q || name.includes(q) || normalizeText(e.nombre).includes(q);
        });
        if (!filtered.length) {
          dropdown.classList.add("hidden");
          return;
        }
        dropdown.innerHTML = filtered.map((e) => `
                <button type="button" data-nombre="${e.nombre}"
                    class="emotion-option w-full text-left px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2.5 transition-colors">
                    <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background-color:${e.color}"></span>
                    ${getDisplayName(e.nombre)}
                </button>
            `).join("");
        dropdown.classList.remove("hidden");
        for (const btn of dropdown.querySelectorAll(".emotion-option")) {
          btn.addEventListener("mousedown", (ev) => {
            ev.preventDefault();
            hiddenValue.value = btn.dataset.nombre;
            searchInput.value = getDisplayName(btn.dataset.nombre);
            searchInput.classList.remove("ring-2", "ring-red-300");
            dropdown.classList.add("hidden");
          });
        }
      }
      searchInput.addEventListener("focus", () => renderDropdown(searchInput.value));
      searchInput.addEventListener("input", () => {
        hiddenValue.value = "";
        renderDropdown(searchInput.value);
      });
      searchInput.addEventListener("blur", () => {
        dropdown.classList.add("hidden");
      });
      searchInput.addEventListener("keydown", (ev) => {
        if (ev.key === "Escape") {
          dropdown.classList.add("hidden");
          searchInput.blur();
        }
        if (ev.key === "Enter") {
          ev.preventDefault();
          dropdown.querySelector(".emotion-option")?.dispatchEvent(new MouseEvent("mousedown"));
        }
        if (ev.key === "ArrowDown") {
          ev.preventDefault();
          dropdown.querySelector(".emotion-option")?.focus();
        }
      });
      dropdown.addEventListener("keydown", (ev) => {
        const focused = document.activeElement;
        if (ev.key === "ArrowDown") {
          ev.preventDefault();
          focused.nextElementSibling?.focus();
        }
        if (ev.key === "ArrowUp") {
          ev.preventDefault();
          (focused.previousElementSibling ?? searchInput).focus();
        }
      });
    }
    function renderContent(showForm = false) {
      const entries = loadEntries();
      const content = document.getElementById("diary-content");
      if (!content) return;
      const exportBtn = entries.length > 0 ? `
            <button id="diary-export-btn" type="button"
                class="flex items-center gap-1.5 bg-slate-100 text-slate-600 text-xs font-bold px-3 py-2 rounded-xl hover:bg-slate-200 transition-colors">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                ${t("diaryExportButton")}
            </button>
        ` : "";
      const headerHtml = `
            <div class="flex items-center justify-between mb-4">
                <h2 id="diary-title-heading" class="text-xl font-black text-slate-800">${t("diaryTitle")}</h2>
                <div class="flex items-center gap-2">
                    ${exportBtn}
                    <button id="diary-new-btn" type="button"
                        class="flex items-center gap-1.5 bg-slate-800 text-white text-xs font-bold px-3 py-2 rounded-xl hover:bg-slate-700 transition-colors">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                        ${t("diaryNewEntry")}
                    </button>
                </div>
            </div>
        `;
      const privacyHtml = `
            <p class="text-xs text-slate-400 mb-4 flex items-start gap-1.5">
                <svg class="w-3.5 h-3.5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
                ${t("diaryPrivacyNote")}
            </p>
        `;
      const formHtml = showForm ? buildAddFormHtml() : "";
      let entriesHtml;
      if (entries.length) {
        entriesHtml = `
                <div class="space-y-3">
                    ${entries.map((entry) => {
          const emotion = emociones2.find((e) => e.nombre === entry.emotion);
          const displayName = emotion ? getDisplayName(entry.emotion) : entry.emotion;
          const color = emotion?.color ?? "#e2e8f0";
          return `
                            <div class="bg-white rounded-2xl p-4 shadow-sm flex gap-3 items-start">
                                <div class="w-3 h-3 rounded-full mt-1 shrink-0" style="background-color:${color}"></div>
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center justify-between gap-2 mb-0.5">
                                        <span class="font-bold text-slate-700 text-sm">${displayName}</span>
                                        <span class="text-xs text-slate-400 shrink-0">${formatDate(entry.date)}</span>
                                    </div>
                                    ${entry.note ? `<p class="text-slate-500 text-sm leading-relaxed">${escapeHtml(entry.note)}</p>` : ""}
                                </div>
                                <button type="button" class="diary-delete-btn text-slate-300 hover:text-red-400 transition-colors shrink-0" data-id="${entry.id}" aria-label="${t("diaryDeleteButton")}">
                                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                                </button>
                            </div>
                        `;
        }).join("")}
                </div>
                ${entries.length > 1 ? `
                    <button id="diary-clear-btn" type="button"
                        class="mt-5 w-full text-xs text-slate-400 hover:text-red-400 transition-colors py-2">
                        ${t("diaryClearAll")}
                    </button>
                ` : ""}
            `;
      } else {
        entriesHtml = `
            <div class="text-center py-8 px-2">
                <p class="text-slate-400 text-sm mb-5">${t("diaryEmptyPrompt")}</p>
                <div class="flex flex-col gap-2 max-w-xs mx-auto">
                    <button id="diary-empty-checkin" type="button"
                        class="w-full bg-slate-800 text-white py-3 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-colors">
                        ${t("diaryEmptyAction1")}
                    </button>
                    <button id="diary-empty-quiz" type="button"
                        class="w-full bg-slate-100 text-slate-700 py-3 rounded-2xl font-bold text-sm hover:bg-slate-200 transition-colors">
                        ${t("diaryEmptyAction2")}
                    </button>
                </div>
            </div>
        `;
      }
      content.innerHTML = headerHtml + privacyHtml + formHtml + entriesHtml;
      content.querySelector("#diary-empty-checkin")?.addEventListener("click", () => onGoToCheckin?.());
      content.querySelector("#diary-empty-quiz")?.addEventListener("click", () => onOpenQuiz?.());
      content.querySelector("#diary-export-btn")?.addEventListener("click", () => {
        const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
        const blob = new Blob([JSON.stringify(entries, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `diario-emocional-${date}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1e3);
      });
      if (showForm) wireEmotionSearch(content);
      content.querySelector("#diary-new-btn").addEventListener("click", () => {
        const formEl = content.querySelector("#diary-add-form");
        if (formEl) {
          formEl.remove();
        } else {
          renderContent(true);
          content.querySelector("#diary-emotion-search")?.focus();
        }
      });
      const saveBtn = content.querySelector("#diary-form-save");
      if (saveBtn) {
        saveBtn.addEventListener("click", () => {
          const emotionValue = content.querySelector("#diary-emotion-value");
          const searchInput = content.querySelector("#diary-emotion-search");
          const note = content.querySelector("#diary-note-input")?.value ?? "";
          if (!emotionValue?.value) {
            searchInput?.focus();
            searchInput?.classList.add("ring-2", "ring-red-300");
            return;
          }
          addEntry(emotionValue.value, note);
          renderContent(false);
        });
        content.querySelector("#diary-form-cancel").addEventListener("click", () => renderContent(false));
      }
      for (const btn of content.querySelectorAll(".diary-delete-btn")) {
        btn.addEventListener("click", () => {
          deleteEntry(Number(btn.dataset.id));
          renderContent(false);
        });
      }
      const clearBtn = content.querySelector("#diary-clear-btn");
      if (clearBtn) {
        clearBtn.addEventListener("click", () => {
          if (confirm(t("diaryClearConfirm"))) {
            saveEntries([]);
            renderContent(false);
          }
        });
      }
    }
    function renderForTab() {
      renderContent();
    }
    return { addEntry, renderForTab };
  }

  // js/emotionMap.js
  var R = 18;
  var STEP = R * 2 + 8;
  var ROW_H = R * 2 + 22;
  var QUAD_HDR = 22;
  var PAD = 10;
  var GRAPH_BP_NARROW = 360;
  var GRAPH_BP_SMALL = 420;
  var GRAPH_H_NARROW = 430;
  var GRAPH_H_SMALL = 410;
  var GRAPH_H_DEFAULT = 460;
  var GRAPH_MIN_H = 420;
  var GRAPH_MAX_H = 560;
  var GRAPH_BASE_NODES = 20;
  var GRAPH_BASE_EDGES = 28;
  var GRAPH_NODE_BOOST = 3;
  var GRAPH_EDGE_BOOST = 1;
  var GRAPH_MAX_BOOST = 80;
  var QUAD_MAP = [0, 2, 3, 1];
  var RELS = {
    coexiste: { color: "#6366f1", dash: "none", labelKey: "mapRelCoexiste" },
    escala_a: { color: "#f97316", dash: "none", labelKey: "mapRelEscalaA" },
    enmascara: { color: "#a855f7", dash: "3,3", labelKey: "mapRelEnmascara" },
    opuesta: { color: "#14b8a6", dash: "6,3", labelKey: "mapRelOpuesta" }
  };
  function makeRng(seed) {
    const buf = new Int32Array(1);
    buf[0] = Math.trunc(seed);
    return function() {
      buf[0] = Math.imul(buf[0], 1664525) + 1013904223;
      return (buf[0] >>> 0) / 4294967296;
    };
  }
  function applyRepulsion(nodes, k) {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        let dx = nodes[i].x - nodes[j].x;
        let dy = nodes[i].y - nodes[j].y;
        if (!dx && !dy) {
          dx = 0.01;
        }
        const d = Math.hypot(dx, dy);
        const f = k * k / d;
        nodes[i].fx += dx / d * f;
        nodes[i].fy += dy / d * f;
        nodes[j].fx -= dx / d * f;
        nodes[j].fy -= dy / d * f;
      }
    }
  }
  function runForce(nodes, edges, W, H) {
    const k = Math.sqrt(W * H / nodes.length) * 0.95;
    for (let it = 0; it < 500; it++) {
      const temp = 35 * (1 - it / 500);
      for (const n of nodes) {
        n.fx = 0;
        n.fy = 0;
      }
      applyRepulsion(nodes, k);
      for (const e of edges) {
        const a = nodes[e.ai], b = nodes[e.bi];
        const dx = b.x - a.x, dy = b.y - a.y;
        const d = Math.hypot(dx, dy) || 0.01;
        const f = d * d / k * 0.3;
        a.fx += dx / d * f;
        a.fy += dy / d * f;
        b.fx -= dx / d * f;
        b.fy -= dy / d * f;
      }
      for (const n of nodes) {
        const d = Math.hypot(n.fx, n.fy) || 0.01;
        n.x = clamp(n.x + n.fx / d * Math.min(d, temp), R + 28, W - R - 28);
        n.y = clamp(n.y + n.fy / d * Math.min(d, temp), R + 24, H - R - 28);
      }
    }
    resolveCollisions(nodes, W, H);
  }
  function clamp(v, lo, hi) {
    return Math.min(Math.max(v, lo), hi);
  }
  function resolveCollisions(nodes, W, H) {
    const minDist = R * 2 + 10;
    for (let pass = 0; pass < 12; pass++) {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy) || 0.01;
          if (d < minDist) {
            const push = (minDist - d) / 2;
            const ux = dx / d, uy = dy / d;
            nodes[i].x = clamp(nodes[i].x + ux * push, R + 28, W - R - 28);
            nodes[i].y = clamp(nodes[i].y + uy * push, R + 24, H - R - 28);
            nodes[j].x = clamp(nodes[j].x - ux * push, R + 28, W - R - 28);
            nodes[j].y = clamp(nodes[j].y - uy * push, R + 24, H - R - 28);
          }
        }
      }
    }
  }
  function escapeHtmlText(value) {
    return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  }
  function escapeHtmlAttr(value) {
    return escapeHtmlText(value).replaceAll('"', "&quot;").replaceAll("'", "&#39;");
  }
  function graphHeightFor(width, nodeCount, edgeCount) {
    let base = GRAPH_H_DEFAULT;
    if (width < GRAPH_BP_NARROW) base = GRAPH_H_NARROW;
    else if (width < GRAPH_BP_SMALL) base = GRAPH_H_SMALL;
    const densityBoost = Math.min(
      GRAPH_MAX_BOOST,
      Math.max(0, nodeCount - GRAPH_BASE_NODES) * GRAPH_NODE_BOOST + Math.max(0, edgeCount - GRAPH_BASE_EDGES) * GRAPH_EDGE_BOOST
    );
    return clamp(base + densityBoost, GRAPH_MIN_H, GRAPH_MAX_H);
  }
  function buildEdges(nameToIdx) {
    return EMOTION_RELATIONS.flatMap((r) => {
      const ai = nameToIdx[r.from];
      const bi = nameToIdx[r.to];
      if (ai === void 0 || bi === void 0) {
        const missing = [];
        if (ai === void 0) missing.push(`from="${r.from}"`);
        if (bi === void 0) missing.push(`to="${r.to}"`);
        console.warn(
          "[emotionMap] Dropping relation %s with unknown endpoint(s): %s",
          String(r.type),
          missing.join(", ")
        );
        return [];
      }
      return [{ ai, bi, type: r.type }];
    });
  }
  function buildForceData(emociones2, getDisplayName, W, H) {
    const rng = makeRng(48879);
    const nameToIdx = {};
    const nodes = emociones2.map((e, idx) => {
      nameToIdx[e.nombre] = idx;
      const ci = MOOD_CATEGORIES.findIndex((c) => c.emotions.includes(e.nombre));
      const q = QUAD_MAP[Math.max(ci, 0)];
      return {
        nombre: e.nombre,
        label: getDisplayName(e.nombre),
        color: e.color,
        x: (q % 2 + 0.2 + rng() * 0.6) * (W / 2),
        y: (Math.floor(q / 2) + 0.2 + rng() * 0.6) * (H / 2),
        fx: 0,
        fy: 0
      };
    });
    const edges = buildEdges(nameToIdx);
    runForce(nodes, edges, W, H);
    return { nodes, edges, nameToIdx };
  }
  function buildQuadData(emociones2, getDisplayName, W) {
    const QW = Math.floor(W / 2);
    const maxCols = Math.max(2, Math.floor((QW - PAD * 2 + 8) / STEP));
    let maxRowsTop = 0, maxRowsBot = 0;
    MOOD_CATEGORIES.forEach((cat, ci) => {
      const count = cat.emotions.filter((n) => emociones2.find((e) => e.nombre === n)).length;
      const rows = Math.ceil(count / maxCols);
      if (QUAD_MAP[ci] < 2) maxRowsTop = Math.max(maxRowsTop, rows);
      else maxRowsBot = Math.max(maxRowsBot, rows);
    });
    const QH = QUAD_HDR + PAD + Math.max(maxRowsTop, 1) * ROW_H + R + 16;
    const H = QH * 2;
    const nameToIdx = {};
    const nodes = [];
    MOOD_CATEGORIES.forEach((cat, ci) => {
      const q = QUAD_MAP[ci];
      const ox = q % 2 * QW;
      const oy = Math.floor(q / 2) * QH;
      cat.emotions.forEach((nombre, pos) => {
        const e = emociones2.find((em) => em.nombre === nombre);
        if (!e) return;
        nameToIdx[nombre] = nodes.length;
        nodes.push({
          nombre,
          label: getDisplayName(nombre),
          color: e.color,
          x: ox + PAD + R + pos % maxCols * STEP,
          y: oy + QUAD_HDR + PAD + R + Math.floor(pos / maxCols) * ROW_H
        });
      });
    });
    return { nodes, edges: buildEdges(nameToIdx), nameToIdx, H };
  }
  function buildLegendItems(dark, activeTypes, t) {
    return Object.entries(RELS).map(([type, rel]) => {
      const on = activeTypes.has(type);
      const dimLine = dark ? "#475569" : "#cbd5e1";
      const lineColor = on ? rel.color : dimLine;
      const onTextC = dark ? "text-slate-300" : "text-slate-600";
      const offTextC = dark ? "text-slate-600" : "text-slate-400";
      const textC = on ? onTextC : offTextC;
      const onBgC = dark ? "bg-slate-700" : "bg-slate-100";
      const bgC = on ? onBgC : "";
      return `<button type="button" data-rel-type="${type}" role="listitem" aria-pressed="${on}"
            class="flex items-center gap-1 text-[11px] px-1.5 py-0.5 rounded-lg transition-colors ${textC} ${bgC}">
            <svg width="14" height="6" aria-hidden="true"><line x1="0" y1="3" x2="14" y2="3" stroke="${lineColor}" stroke-width="2" stroke-dasharray="${rel.dash}"/></svg>
            ${t(rel.labelKey)}
        </button>`;
    }).join("");
  }
  function buildQuadrantBtns(effectiveQuadrant, activeC, inactiveC, t) {
    const allBtnC = effectiveQuadrant === null ? activeC : inactiveC;
    return [
      `<button type="button" data-quad="all" aria-pressed="${effectiveQuadrant === null}"
            class="text-[11px] font-bold px-2.5 py-0.5 rounded-full border transition-colors ${allBtnC}">
            ${t("mapFilterAll")}
        </button>`
    ].concat(MOOD_CATEGORIES.map((cat, i) => {
      const isActive = effectiveQuadrant === i;
      const inlineStyle = isActive ? `background-color:${cat.color};color:${cat.ink};border-color:${cat.color}` : "";
      const btnC = isActive ? "" : inactiveC;
      return `<button type="button" data-quad="${i}" aria-pressed="${isActive}"
            class="text-[11px] font-bold px-2.5 py-0.5 rounded-full border transition-colors ${btnC}"
            style="${inlineStyle}">${t(cat.labelKey)}</button>`;
    })).join("");
  }
  function buildInfoPanel(selected, nodes, edges, dark, t, getDisplayName) {
    if (!selected) return "";
    const myEdges = edges.filter(
      (e) => nodes[e.ai]?.nombre === selected || nodes[e.bi]?.nombre === selected
    );
    const grouped = {};
    for (const e of myEdges) {
      const other = nodes[e.ai].nombre === selected ? nodes[e.bi] : nodes[e.ai];
      grouped[e.type] = grouped[e.type] || [];
      grouped[e.type].push(other.label);
    }
    const rows = Object.entries(grouped).map(([type, names]) => {
      const rel = RELS[type];
      return `<li class="flex items-start gap-2 text-sm leading-snug">
            <span class="mt-1 shrink-0 inline-block w-2.5 h-2.5 rounded-full" style="background:${rel.color}"></span>
            <span><strong class="${dark ? "text-slate-300" : "text-slate-700"}">${t(rel.labelKey)}:</strong> <span class="${dark ? "text-slate-400" : "text-slate-500"}">${names.join(", ")}</span></span>
        </li>`;
    }).join("");
    const borderC = dark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100";
    const nameC = dark ? "text-slate-100" : "text-slate-800";
    const body = rows ? `<ul class="space-y-1.5">${rows}</ul>` : `<p class="text-xs text-slate-400">${t("mapInfoNone")}</p>`;
    return `<div id="map-info-panel" class="mt-3 rounded-2xl p-4 border ${borderC} shadow-sm">
        <div class="flex items-center justify-between mb-2">
            <span class="font-bold ${nameC}">${getDisplayName(selected)}</span>
            <div class="flex items-center gap-1">
                <button id="map-open-btn" class="text-xs font-bold text-blue-500 hover:text-blue-600 px-2 py-1 rounded-lg transition-colors">${t("openChip")}</button>
                <button id="map-clear-btn" aria-label="${t("mapClearSelection")}"
                    class="w-6 h-6 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors">
                    <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </button>
            </div>
        </div>
        ${body}
    </div>`;
  }
  function buildQuadrantFilter(catIdx, visibleEdges, nodes) {
    if (catIdx === null) return null;
    const cat = MOOD_CATEGORIES[catIdx];
    const nodeNames = new Set(nodes.map((n) => n.nombre));
    const inQuadrant = new Set(cat.emotions.filter((n) => nodeNames.has(n)));
    const neighbors = /* @__PURE__ */ new Set();
    for (const e of visibleEdges) {
      const aN = nodes[e.ai].nombre;
      const bN = nodes[e.bi].nombre;
      if (inQuadrant.has(aN) && !inQuadrant.has(bN)) neighbors.add(bN);
      if (inQuadrant.has(bN) && !inQuadrant.has(aN)) neighbors.add(aN);
    }
    return { inQuadrant, neighbors };
  }
  function hasNameFilterMatch(nameFilter, selected, nodes) {
    if (!nameFilter || selected !== null) return true;
    const norm = normalizeText(nameFilter);
    return nodes.some((n) => normalizeText(n.label).includes(norm));
  }
  function calcNodeOpacity(n, sel, isSel, isConn, quadrantFilter, normalizedFilter) {
    if (sel) return isSel || isConn ? 1 : 0;
    if (quadrantFilter) {
      if (quadrantFilter.inQuadrant.has(n.nombre)) return 1;
      if (quadrantFilter.neighbors.has(n.nombre)) return 0.45;
      return 0;
    }
    if (normalizedFilter) return normalizeText(n.label).includes(normalizedFilter) ? 1 : 0.15;
    return 1;
  }
  function svgBody(nodes, edges, W, H, sel, view, { t, activeTypes, activeQuadrant, nameFilter }) {
    const dark = document.documentElement.classList.contains("dark");
    const labelFill = dark ? "#cbd5e1" : "#1e293b";
    const visibleEdges = edges.filter((e) => activeTypes.has(e.type));
    const quadrantFilter = buildQuadrantFilter(activeQuadrant, visibleEdges, nodes);
    const connectedNames = sel ? new Set(
      visibleEdges.filter((e) => nodes[e.ai].nombre === sel || nodes[e.bi].nombre === sel).flatMap((e) => [nodes[e.ai].nombre, nodes[e.bi].nombre])
    ) : null;
    let bg = "";
    if (view === "quad") {
      const QW = W / 2, QH = H / 2;
      MOOD_CATEGORIES.forEach((cat, ci) => {
        const q = QUAD_MAP[ci];
        const ox = q % 2 * QW;
        const oy = Math.floor(q / 2) * QH;
        const bgC = dark ? cat.ink + "28" : cat.color + "55";
        const hdC = dark ? cat.ink + "99" : cat.color + "cc";
        const htC = dark ? "#f1f5f9" : cat.ink;
        bg += `<rect x="${ox}" y="${oy}" width="${QW}" height="${QH}" fill="${bgC}"/>`;
        bg += `<rect x="${ox}" y="${oy}" width="${QW}" height="${QUAD_HDR}" fill="${hdC}"/>`;
        bg += `<text x="${ox + QW / 2}" y="${oy + 15}" text-anchor="middle" font-size="11" font-weight="700" fill="${htC}">${t(cat.labelKey).toUpperCase()}</text>`;
      });
      const divC = dark ? "#334155" : "#94a3b8";
      bg += `<line x1="${W / 2}" y1="0" x2="${W / 2}" y2="${H}" stroke="${divC}" stroke-width="1"/>`;
      bg += `<line x1="0" y1="${H / 2}" x2="${W}" y2="${H / 2}" stroke="${divC}" stroke-width="1"/>`;
    }
    const normalizedFilter = nameFilter ? normalizeText(nameFilter) : "";
    const eStr = visibleEdges.map((e) => {
      const a = nodes[e.ai], b = nodes[e.bi];
      let op = 0.4;
      if (sel) {
        op = sel === a.nombre || sel === b.nombre ? 0.9 : 0;
      } else if (quadrantFilter) {
        const aIn = quadrantFilter.inQuadrant.has(a.nombre);
        const bIn = quadrantFilter.inQuadrant.has(b.nombre);
        if (!aIn && !bIn) op = 0;
        else if (aIn && bIn) op = 0.75;
        else op = 0.35;
      } else if (normalizedFilter) {
        const aMatch = normalizeText(a.label).includes(normalizedFilter);
        const bMatch = normalizeText(b.label).includes(normalizedFilter);
        op = aMatch || bMatch ? 0.3 : 0;
      }
      const rel = RELS[e.type];
      return `<line x1="${Math.trunc(a.x)}" y1="${Math.trunc(a.y)}" x2="${Math.trunc(b.x)}" y2="${Math.trunc(b.y)}" stroke="${rel.color}" stroke-width="2.5" opacity="${op}" stroke-dasharray="${rel.dash}"/>`;
    }).join("");
    const nStr = nodes.map((n) => {
      const isSel = sel === n.nombre;
      const isConn = connectedNames ? connectedNames.has(n.nombre) : true;
      const nodeOp = calcNodeOpacity(n, sel, isSel, isConn, quadrantFilter, normalizedFilter);
      const hide = nodeOp === 0;
      const sc = isSel ? "#2563eb" : "none";
      const sw = isSel ? "3" : "0";
      const lbl = n.label.length > 10 ? n.label.slice(0, 9) + "\u2026" : n.label;
      const cx = Math.trunc(n.x), cy = Math.trunc(n.y);
      return `<g class="map-node" data-nombre="${escapeHtmlAttr(n.nombre)}" tabindex="0" role="button" aria-label="${escapeHtmlAttr(n.label)}" style="cursor:pointer" opacity="${nodeOp}" ${hide ? 'pointer-events="none"' : ""}>
            <title>${escapeHtmlText(n.label)}</title>
            <circle cx="${cx}" cy="${cy}" r="${R + 6}" fill="transparent"/>
            <circle cx="${cx}" cy="${cy}" r="${R}" fill="${n.color}" stroke="${sc}" stroke-width="${sw}" pointer-events="none"/>
            <text x="${cx}" y="${Math.trunc(n.y + R + 12)}" text-anchor="middle" font-size="11" font-weight="600" fill="${labelFill}" pointer-events="none">${escapeHtmlText(lbl)}</text>
        </g>`;
    }).join("");
    return `${bg}<g>${eStr}</g><g>${nStr}</g>`;
  }
  function buildNeighborhoodData(selName, nodes, visibleEdges, W, H) {
    const neighborEdges = visibleEdges.filter(
      (e) => nodes[e.ai].nombre === selName || nodes[e.bi].nombre === selName
    );
    const memberNames = new Set(
      neighborEdges.flatMap((e) => [nodes[e.ai].nombre, nodes[e.bi].nombre])
    );
    memberNames.add(selName);
    const rng = makeRng(61453);
    const subNameToIdx = {};
    const subNodes = nodes.filter((n) => memberNames.has(n.nombre)).map((n, i) => {
      subNameToIdx[n.nombre] = i;
      return {
        nombre: n.nombre,
        label: n.label,
        color: n.color,
        x: (0.15 + rng() * 0.7) * W,
        y: (0.15 + rng() * 0.7) * H,
        fx: 0,
        fy: 0
      };
    });
    const subEdges = neighborEdges.map((e) => ({
      ai: subNameToIdx[nodes[e.ai].nombre],
      bi: subNameToIdx[nodes[e.bi].nombre],
      type: e.type
    })).filter((e) => e.ai !== void 0 && e.bi !== void 0);
    runForce(subNodes, subEdges, W, H);
    return { nodes: subNodes, edges: subEdges };
  }
  function containerW() {
    return document.getElementById("map-content")?.clientWidth || 340;
  }
  function createEmotionMap({ emociones: emociones2, getDisplayName, t, showDetail }) {
    let view = "graph";
    let selected = null;
    let nameFilter = "";
    let activeTypes = new Set(Object.keys(RELS));
    let activeQuadrant = null;
    let forceData = null;
    let quadData = null;
    let lastW = 0;
    function ensureData() {
      const W = containerW();
      if (!forceData || Math.abs(W - lastW) > 20) {
        lastW = W;
        const gH = graphHeightFor(W, emociones2.length, EMOTION_RELATIONS.length);
        forceData = { ...buildForceData(emociones2, getDisplayName, W, gH), H: gH };
        quadData = null;
      }
      if (!quadData) {
        quadData = buildQuadData(emociones2, getDisplayName, W);
      }
    }
    function render() {
      const wrap = document.getElementById("map-content");
      if (!wrap) return;
      ensureData();
      const { nodes, edges, H } = view === "graph" ? forceData : quadData;
      const W = containerW();
      const dark = document.documentElement.classList.contains("dark");
      const isNeighborhood = view === "graph" && selected !== null;
      let svgNodes;
      let svgEdges;
      let svgActiveQuadrant;
      if (isNeighborhood) {
        const hood = buildNeighborhoodData(
          selected,
          nodes,
          edges.filter((e) => activeTypes.has(e.type)),
          W,
          H
        );
        svgNodes = hood.nodes;
        svgEdges = hood.edges;
        svgActiveQuadrant = null;
      } else {
        svgNodes = nodes;
        svgEdges = edges;
        svgActiveQuadrant = activeQuadrant;
      }
      const infoHtml = buildInfoPanel(selected, nodes, edges, dark, t, getDisplayName);
      const activeC = dark ? "bg-slate-100 text-slate-900 border-slate-100" : "bg-slate-800 text-white border-slate-800";
      const inactiveC = dark ? "bg-slate-800 text-slate-400 border-slate-600" : "bg-white text-slate-500 border-slate-200";
      const canvasBg = dark ? "#0f172a" : "#f8fafc";
      const legendItems = buildLegendItems(dark, activeTypes, t);
      const effectiveQuadrant = isNeighborhood ? null : activeQuadrant;
      const quadrantBtns = buildQuadrantBtns(effectiveQuadrant, activeC, inactiveC, t);
      const hasMatch = hasNameFilterMatch(nameFilter, selected, nodes);
      wrap.innerHTML = `
            <div class="flex gap-2 mb-2">
                <button id="map-graph-btn" class="flex-1 py-2 text-sm font-bold rounded-xl border transition-colors ${view === "graph" ? activeC : inactiveC}">${t("mapViewGraph")}</button>
                <button id="map-quad-btn"  class="flex-1 py-2 text-sm font-bold rounded-xl border transition-colors ${view === "quad" ? activeC : inactiveC}">${t("mapViewQuad")}</button>
            </div>
            <div class="flex flex-wrap gap-x-3 gap-y-1 mb-2" role="list" aria-label="${t("mapLegendLabel")}">
                ${legendItems}
            </div>
            <div class="flex flex-wrap gap-1.5 mb-2">
                ${quadrantBtns}
            </div>
            <div class="relative mb-2">
                <input id="map-search" type="text" autocomplete="off"
                    placeholder="${t("mapSearchPlaceholder")}"
                    value="${escapeHtmlAttr(nameFilter)}"
                    class="w-full text-[13px] px-3 py-1.5 rounded-xl border transition-colors
                        ${dark ? "bg-slate-800 border-slate-600 text-slate-200 placeholder:text-slate-500" : "bg-white border-slate-200 text-slate-700 placeholder:text-slate-400"}">
                <ul id="map-suggestions" role="listbox"
                    class="absolute z-20 w-full mt-1 rounded-xl border shadow-lg max-h-48 overflow-y-auto hidden
                        ${dark ? "bg-slate-800 border-slate-600" : "bg-white border-slate-200"}">
                </ul>
            </div>
            <p id="map-hint" class="text-[11px] text-slate-400 mb-1.5 px-0.5">
                ${selected ? t("mapHintSelected") : t("mapHint")}
            </p>
            <div class="rounded-2xl overflow-hidden" style="background:${canvasBg}">
                <svg id="map-svg" viewBox="0 0 ${W} ${H}" style="width:100%;display:block;touch-action:pan-y" role="img" aria-label="${t("navMapa")}">
                    ${svgBody(svgNodes, svgEdges, W, H, selected, view, { t, activeTypes, activeQuadrant: svgActiveQuadrant, nameFilter })}
                </svg>
            </div>
            <p id="map-empty" class="${hasMatch ? "hidden" : ""} text-[13px] text-center text-slate-400 mt-4 py-2">${t("mapSearchEmpty")}</p>
            ${infoHtml}`;
      bindEvents(wrap);
      if (selected) {
        requestAnimationFrame(() => {
          document.getElementById("map-info-panel")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
      }
    }
    function updateSvg() {
      const wrap = document.getElementById("map-content");
      if (!wrap) return;
      ensureData();
      const { nodes, edges, H } = view === "graph" ? forceData : quadData;
      const W = containerW();
      const isNeighborhood = view === "graph" && selected !== null;
      let svgNodes, svgEdges, svgActiveQuadrant;
      if (isNeighborhood) {
        const hood = buildNeighborhoodData(
          selected,
          nodes,
          edges.filter((e) => activeTypes.has(e.type)),
          W,
          H
        );
        svgNodes = hood.nodes;
        svgEdges = hood.edges;
        svgActiveQuadrant = null;
      } else {
        svgNodes = nodes;
        svgEdges = edges;
        svgActiveQuadrant = activeQuadrant;
      }
      const svg = wrap.querySelector("#map-svg");
      if (svg) {
        svg.innerHTML = svgBody(
          svgNodes,
          svgEdges,
          W,
          H,
          selected,
          view,
          { t, activeTypes, activeQuadrant: svgActiveQuadrant, nameFilter }
        );
        bindSvgEvents(svg);
      }
      const hasMatch = hasNameFilterMatch(nameFilter, selected, nodes);
      const emptyEl = wrap.querySelector("#map-empty");
      if (emptyEl) emptyEl.classList.toggle("hidden", hasMatch);
      const hintEl = wrap.querySelector("#map-hint");
      if (hintEl) hintEl.textContent = selected ? t("mapHintSelected") : t("mapHint");
    }
    function bindSvgEvents(svg) {
      svg.addEventListener("click", (ev) => {
        const node = ev.target.closest(".map-node");
        if (!node) {
          selected = null;
          render();
          return;
        }
        const nombre = node.dataset.nombre;
        selected = selected === nombre ? null : nombre;
        render();
      });
      svg.addEventListener("keydown", (ev) => {
        if (ev.key !== "Enter" && ev.key !== " ") return;
        const node = ev.target.closest(".map-node");
        if (!node) return;
        ev.preventDefault();
        const nombre = node.dataset.nombre;
        selected = selected === nombre ? null : nombre;
        render();
      });
    }
    function bindEvents(wrap) {
      wrap.querySelector("#map-graph-btn")?.addEventListener("click", () => {
        view = "graph";
        selected = null;
        render();
      });
      wrap.querySelector("#map-quad-btn")?.addEventListener("click", () => {
        view = "quad";
        selected = null;
        render();
      });
      for (const btn of wrap.querySelectorAll("[data-rel-type]")) {
        btn.addEventListener("click", () => {
          const { relType } = btn.dataset;
          if (activeTypes.has(relType)) activeTypes.delete(relType);
          else activeTypes.add(relType);
          render();
        });
      }
      for (const btn of wrap.querySelectorAll("[data-quad]")) {
        btn.addEventListener("click", () => {
          const q = btn.dataset.quad;
          activeQuadrant = q === "all" ? null : Number(q);
          selected = null;
          render();
        });
      }
      wrap.querySelector("#map-open-btn")?.addEventListener("click", () => {
        const e = emociones2.find((em) => em.nombre === selected);
        if (e) showDetail(e);
      });
      wrap.querySelector("#map-clear-btn")?.addEventListener("click", () => {
        selected = null;
        nameFilter = "";
        render();
      });
      const searchInput = wrap.querySelector("#map-search");
      const suggestionsList = wrap.querySelector("#map-suggestions");
      if (searchInput) {
        const hideSuggestions = () => suggestionsList?.classList.add("hidden");
        const populateSuggestions = (value) => {
          if (!suggestionsList) return;
          const norm = normalizeText(value);
          if (!norm) {
            hideSuggestions();
            return;
          }
          const dark = document.documentElement.classList.contains("dark");
          const itemC = dark ? "text-slate-200 hover:bg-slate-700 active:bg-slate-600" : "text-slate-700 hover:bg-slate-50 active:bg-slate-100";
          const matches = emociones2.filter((e) => normalizeText(getDisplayName(e.nombre)).includes(norm)).slice(0, 8);
          if (!matches.length) {
            hideSuggestions();
            return;
          }
          suggestionsList.innerHTML = matches.map(
            (e) => `<li role="option" tabindex="-1" data-nombre="${escapeHtmlAttr(e.nombre)}"
                        class="px-3 py-2 text-[13px] cursor-pointer transition-colors ${itemC}">
                        ${escapeHtmlText(getDisplayName(e.nombre))}
                    </li>`
          ).join("");
          suggestionsList.classList.remove("hidden");
        };
        const trySelectExact = () => {
          const norm = normalizeText(nameFilter);
          const found = norm && emociones2.find(
            (e) => normalizeText(getDisplayName(e.nombre)) === norm
          );
          if (found) {
            selected = found.nombre;
            hideSuggestions();
            render();
          }
        };
        searchInput.addEventListener("input", () => {
          nameFilter = searchInput.value;
          selected = null;
          updateSvg();
          populateSuggestions(nameFilter);
        });
        searchInput.addEventListener("focus", () => {
          if (nameFilter) populateSuggestions(nameFilter);
        });
        searchInput.addEventListener("blur", () => {
          setTimeout(hideSuggestions, 150);
        });
        searchInput.addEventListener("keydown", (ev) => {
          if (ev.key === "Enter") trySelectExact();
          if (ev.key === "Escape") hideSuggestions();
        });
        searchInput.addEventListener("change", () => {
          nameFilter = searchInput.value;
          trySelectExact();
        });
        if (suggestionsList) {
          suggestionsList.addEventListener("mousedown", (ev) => {
            ev.preventDefault();
          });
          suggestionsList.addEventListener("click", (ev) => {
            const li = ev.target.closest("li[data-nombre]");
            if (!li) return;
            const e = emociones2.find((em) => em.nombre === li.dataset.nombre);
            if (e) {
              nameFilter = getDisplayName(e.nombre);
              selected = e.nombre;
              searchInput.value = nameFilter;
              hideSuggestions();
              render();
            }
          });
        }
      }
      const svg = wrap.querySelector("#map-svg");
      if (!svg) return;
      bindSvgEvents(svg);
    }
    function renderForTab() {
      render();
    }
    function onLanguageChanged() {
      nameFilter = "";
      if (forceData) for (const n of forceData.nodes) n.label = getDisplayName(n.nombre);
      if (quadData) for (const n of quadData.nodes) n.label = getDisplayName(n.nombre);
      if (document.getElementById("map-content")) render();
    }
    return { renderForTab, onLanguageChanged };
  }

  // js/version.js
  var BUILD_VERSION = "mp8jl7aa";

  // app.js
  var state = {
    currentLang: "es",
    currentTab: "emociones",
    lastFocusedCard: null,
    isClosingModal: false
  };
  var reducedMotion = globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  var modalAnimationMs = reducedMotion ? 0 : 200;
  var ui;
  var diary;
  var emotionMap;
  var i18n = createI18n({
    getLang: () => state.currentLang,
    setLang: (lang) => {
      state.currentLang = lang;
    },
    onLanguageChanged: () => {
      ui.renderCheckinTab();
      ui.renderRecentEmotions();
      ui.renderEmociones(document.getElementById("search")?.value ?? "");
      if (state.currentTab === "diario") diary.renderForTab();
      emotionMap?.onLanguageChanged();
      document.getElementById("offline-banner-text").textContent = i18n.t("offlineBanner");
    }
  });
  diary = createDiary({
    t: i18n.t,
    getDisplayName: i18n.getDisplayName,
    emociones,
    onGoToCheckin: () => switchTab("checkin"),
    onOpenQuiz: () => document.getElementById("quiz-panel")?.showModal()
  });
  ui = createUI({
    emociones,
    relaciones: EMOTION_RELATIONS,
    getDisplayName: i18n.getDisplayName,
    getEmotionField: i18n.getEmotionField,
    t: i18n.t,
    getLastFocusedCard: () => state.lastFocusedCard,
    setLastFocusedCard: (card) => {
      state.lastFocusedCard = card;
    },
    getIsClosingModal: () => state.isClosingModal,
    setIsClosingModal: (value) => {
      state.isClosingModal = value;
    },
    modalAnimationMs,
    moodCategories: MOOD_CATEGORIES,
    onAddToDiary: (nombre, note) => {
      diary.addEntry(nombre, note);
      if (state.currentTab === "diario") diary.renderForTab();
    }
  });
  function getTheme() {
    return localStorage.getItem(THEME_KEY) || "auto";
  }
  function applyTheme(theme) {
    const prefersDark = globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
    if (theme === "dark" || theme === "auto" && prefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem(THEME_KEY, theme);
    updateSettingsActiveStates(theme, state.currentLang);
  }
  function updateSettingsActiveStates(theme, lang) {
    for (const t of ["light", "auto", "dark"]) {
      document.getElementById(`theme-btn-${t}`)?.classList.toggle("settings-option-active", t === theme);
    }
    for (const l of ["es", "en"]) {
      document.getElementById(`lang-btn-${l}`)?.classList.toggle("settings-option-active", l === lang);
    }
  }
  function initSettingsPanel() {
    const settingsBtn = document.getElementById("settings-btn");
    const settingsPanel = document.getElementById("settings-panel");
    if (!settingsBtn || !settingsPanel) return;
    const closePanel = () => {
      settingsPanel.classList.add("hidden");
      settingsBtn.setAttribute("aria-expanded", "false");
    };
    settingsBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = !settingsPanel.classList.contains("hidden");
      settingsPanel.classList.toggle("hidden", isOpen);
      settingsBtn.setAttribute("aria-expanded", String(!isOpen));
    });
    document.addEventListener("click", (event) => {
      if (!settingsPanel.classList.contains("hidden") && !settingsPanel.contains(event.target)) {
        closePanel();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !settingsPanel.classList.contains("hidden")) {
        closePanel();
        settingsBtn.focus();
      }
    });
    for (const btn of settingsPanel.querySelectorAll("[data-theme-btn]")) {
      btn.addEventListener("click", () => applyTheme(btn.dataset.themeBtn));
    }
    for (const btn of settingsPanel.querySelectorAll("[data-lang-btn]")) {
      btn.addEventListener("click", () => {
        i18n.setLanguage(btn.dataset.langBtn);
        updateSettingsActiveStates(getTheme(), state.currentLang);
      });
    }
    globalThis.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      if (getTheme() === "auto") applyTheme("auto");
    });
    updateSettingsActiveStates(getTheme(), state.currentLang);
  }
  function initServiceWorker() {
    if (!("serviceWorker" in navigator)) return;
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js", { updateViaCache: "none" }).catch(() => {
      });
    });
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      globalThis.location.reload();
    });
  }
  function isIosDevice() {
    const ua = navigator.userAgent.toLowerCase();
    const touchMac = ua.includes("macintosh") && navigator.maxTouchPoints > 1;
    return /iphone|ipad|ipod/.test(ua) || touchMac;
  }
  function isStandalone() {
    return globalThis.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
  }
  function initSmartInstallButton() {
    const installButton = document.getElementById("install-app-button");
    const iosModal = document.getElementById("ios-install-modal");
    const iosClose = document.getElementById("ios-install-close");
    const isiOS = isIosDevice();
    let deferredPrompt = null;
    if (!installButton || !iosModal || !iosClose) return;
    const closeIosModal = () => {
      iosModal.classList.add("hidden");
      document.body.style.overflow = "auto";
    };
    const showIosModal = () => {
      iosModal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    };
    const updateInstallVisibility = () => {
      const showAndroidInstall = deferredPrompt && !isStandalone();
      const showIosGuide = isiOS && !isStandalone();
      if (showAndroidInstall || showIosGuide) {
        installButton.classList.remove("hidden");
      } else {
        installButton.classList.add("hidden");
      }
    };
    globalThis.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      deferredPrompt = event;
      updateInstallVisibility();
    });
    globalThis.addEventListener("appinstalled", () => {
      deferredPrompt = null;
      closeIosModal();
      updateInstallVisibility();
    });
    installButton.addEventListener("click", async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        try {
          await deferredPrompt.userChoice;
        } catch {
        }
        deferredPrompt = null;
        updateInstallVisibility();
        return;
      }
      if (isiOS && !isStandalone()) {
        showIosModal();
      }
    });
    iosClose.addEventListener("click", closeIosModal);
    iosModal.addEventListener("click", (event) => {
      if (event.target.id === "ios-install-modal") closeIosModal();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !iosModal.classList.contains("hidden")) {
        closeIosModal();
      }
    });
    updateInstallVisibility();
  }
  function switchTab(tabId) {
    const tabs = ["emociones", "checkin", "diario", "mapa"];
    for (const id of tabs) {
      document.getElementById(`tab-${id}`)?.classList.toggle("hidden", id !== tabId);
      const btn = document.getElementById(`nav-${id}`);
      if (btn) {
        btn.classList.toggle("text-blue-600", id === tabId);
        btn.classList.toggle("text-slate-400", id !== tabId);
        btn.classList.toggle("nav-active", id === tabId);
        if (id === tabId) {
          btn.setAttribute("aria-current", "page");
        } else {
          btn.removeAttribute("aria-current");
        }
      }
    }
    state.currentTab = tabId;
    if (tabId === "diario") diary.renderForTab();
    if (tabId === "mapa") emotionMap?.renderForTab();
  }
  function initOfflineBanner() {
    const banner = document.getElementById("offline-banner");
    const text = document.getElementById("offline-banner-text");
    if (!banner || !text) return;
    const update = () => {
      text.textContent = i18n.t("offlineBanner");
      banner.classList.toggle("hidden", navigator.onLine);
      banner.classList.toggle("flex", !navigator.onLine);
    };
    globalThis.addEventListener("online", update);
    globalThis.addEventListener("offline", update);
    update();
  }
  function initTabNav() {
    for (const btn of document.querySelectorAll(".nav-tab")) {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    }
  }
  function bootstrap() {
    state.currentLang = i18n.detectInitialLanguage();
    i18n.applyStaticTranslations();
    const versionEl = document.getElementById("build-version");
    if (versionEl) versionEl.textContent = BUILD_VERSION;
    initSettingsPanel();
    initTabNav();
    ui.bindBaseEvents();
    emotionMap = createEmotionMap({
      emociones,
      getDisplayName: i18n.getDisplayName,
      t: i18n.t,
      showDetail: ui.showDetail
    });
    const quiz = createQuiz({
      emociones,
      getDisplayName: i18n.getDisplayName,
      t: i18n.t,
      showDetail: ui.showDetail,
      onShowAll: () => switchTab("emociones")
    });
    quiz.init();
    ui.renderCheckinTab();
    ui.renderRecentEmotions();
    ui.renderEmociones();
    initOfflineBanner();
    initSmartInstallButton();
    initServiceWorker();
  }
  bootstrap();
})();
