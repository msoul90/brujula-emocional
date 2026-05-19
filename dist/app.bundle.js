(() => {
  // js/data/emotions.js
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
  var MOOD_CATEGORIES = [
    { key: "agitado", labelKey: "checkin.moodAgitado", emoji: "\u{1F624}", color: "#F5A5A0", ink: "#7A2E2E", emotions: ["Enojo", "Frustraci\xF3n", "Irritabilidad", "Ansiedad", "Miedo", "Preocupaci\xF3n", "Angustia", "Envidia", "Disgusto"] },
    { key: "triste", labelKey: "checkin.moodTriste", emoji: "\u{1F622}", color: "#A4C3E3", ink: "#1F3F66", emotions: ["Tristeza", "Soledad", "Nostalgia", "Culpa", "Verg\xFCenza", "Rechazo", "Decepci\xF3n"] },
    { key: "confundido", labelKey: "checkin.moodConfundido", emoji: "\u{1F914}", color: "#F5D88A", ink: "#7A5A1A", emotions: ["Confusi\xF3n", "Aburrimiento", "Celos"] },
    { key: "bien", labelKey: "checkin.moodBien", emoji: "\u{1F60C}", color: "#8FD4AE", ink: "#1E5237", emotions: ["Calma", "Alivio", "Gratitud", "Felicidad", "Alegr\xEDa", "Orgullo", "Entusiasmo", "Placer", "Ternura"] }
  ];

  // js/data/techniques.js
  var REGULATION_TECHNIQUES = {
    Ansiedad: {
      es: { name: "Respiraci\xF3n 4-7-8", steps: ["Inhala por la nariz durante 4 segundos.", "Ret\xE9n el aire durante 7 segundos.", "Exhala lentamente por la boca durante 8 segundos.", "Repite 3 o 4 veces hasta sentir el ritmo."] },
      en: { name: "4-7-8 Breathing", steps: ["Inhale through your nose for 4 seconds.", "Hold your breath for 7 seconds.", "Exhale slowly through your mouth for 8 seconds.", "Repeat 3 to 4 times until you feel the rhythm."] }
    },
    Preocupaci\u00F3n: {
      es: { name: "Tiempo de preocupaci\xF3n", steps: ["Elige un momento fijo del d\xEDa (ej. 18:00) para preocuparte.", "Cuando aparezca un pensamiento ansioso antes de esa hora, an\xF3talo y posp\xF3nlo.", "En tu momento designado, revisa la lista.", "Preg\xFAntate: \xBFpuedo hacer algo ahora? Si s\xED, act\xFAa. Si no, su\xE9ltalo."] },
      en: { name: "Worry time", steps: ["Set a fixed time each day (e.g. 6 pm) to worry.", "When an anxious thought appears before that time, write it down and postpone it.", "At your designated time, review the list.", "Ask yourself: can I do something now? If yes, act. If not, let it go."] }
    },
    Enojo: {
      es: { name: "T\xE9cnica STOP", steps: ["Stop: detente. No act\xFAes todav\xEDa.", "Take a breath: toma una respiraci\xF3n profunda.", "Observe: observa qu\xE9 est\xE1s sintiendo y pensando.", "Proceed: act\xFAa de manera que te ayude, no que te lastime."] },
      en: { name: "STOP Technique", steps: ["Stop: pause. Don't act yet.", "Take a breath: take one deep breath.", "Observe: notice what you're feeling and thinking.", "Proceed: act in a way that helps you, not hurts you."] }
    },
    Frustraci\u00F3n: {
      es: { name: "Descarga f\xEDsica controlada", steps: ["Reconoce la energ\xEDa que sientes en el cuerpo.", "Elige una descarga controlada: caminar r\xE1pido, estirar, cerrar el pu\xF1o fuerte y soltar.", "Repite hasta que la intensidad baje un par de puntos.", "Vuelve al problema con m\xE1s calma."] },
      en: { name: "Controlled physical release", steps: ["Acknowledge the energy you feel in your body.", "Choose a controlled release: walk fast, stretch, clench your fist and release.", "Repeat until the intensity drops a notch.", "Return to the problem with more calm."] }
    },
    Irritabilidad: {
      es: { name: "Pausa de 5 minutos", steps: ["Identifica la se\xF1al: est\xE1s respondiendo m\xE1s r\xE1pido o con m\xE1s fuerza de lo habitual.", "Pide un descanso si est\xE1s con alguien.", "Sal del espacio, toma agua y respira.", "Preg\xFAntate: \xBFqu\xE9 necesito ahora mismo? (silencio, espacio, comida, descanso)."] },
      en: { name: "5-minute pause", steps: ["Notice the signal: you're responding faster or harder than usual.", "Ask for an explicit break if you're with someone.", "Leave the space, drink water, and breathe.", "Ask yourself: what do I need right now? (silence, space, food, rest)."] }
    },
    Tristeza: {
      es: { name: "Activaci\xF3n conductual suave", steps: ["Elige una actividad peque\xF1a y concreta (no ambiciosa): caminar 10 minutos, ducharte, preparar algo de comer.", "Hazla aunque no tengas ganas \u2014 la motivaci\xF3n suele llegar despu\xE9s de la acci\xF3n.", "No la eval\xFAes mientras la haces.", "Al terminar, nota si algo cambi\xF3, aunque sea un poco."] },
      en: { name: "Gentle behavioral activation", steps: ["Choose one small, concrete activity (not ambitious): a 10-minute walk, a shower, making food.", "Do it even if you don't feel like it \u2014 motivation often comes after action.", "Don't evaluate it while you're doing it.", "When done, notice if anything shifted, even slightly."] }
    },
    Miedo: {
      es: { name: "Evaluar el riesgo real", steps: ["Nombra el miedo con precisi\xF3n: \xBFa qu\xE9 exactamente?", "Preg\xFAntate: \xBFqu\xE9 probabilidad real tiene de ocurrir? \xBFTengo evidencia?", "Si el riesgo es real: \xBFqu\xE9 es lo m\xEDnimo que puedo hacer ahora para sentirme m\xE1s seguro/a?", "Si es imaginado: recuerda que tu mente exagera la amenaza para protegerte."] },
      en: { name: "Assess the real risk", steps: ["Name the fear precisely: what exactly are you afraid of?", "Ask yourself: how likely is this really? Do I have evidence?", "If the risk is real: what's the smallest thing I can do now to be safer?", "If it's imagined: remember your mind exaggerates threats to protect you."] }
    },
    Verg\u00FCenza: {
      es: { name: "Autocuidado compasivo", steps: ["Pon una mano en el pecho y siente el calor.", "Repite en voz baja o internamente: 'esto duele, y es humano sentirlo'.", "Preg\xFAntate: \xBFqu\xE9 le dir\xEDa a alguien que quiero si estuviera sintiendo esto?", "Dite eso a ti mismo/a."] },
      en: { name: "Compassionate self-care", steps: ["Place one hand on your chest and feel the warmth.", "Say softly or internally: 'this hurts, and it is human to feel this'.", "Ask yourself: what would I say to someone I love if they felt this?", "Say that to yourself."] }
    },
    Culpa: {
      es: { name: "Reparaci\xF3n concreta", steps: ["Identifica si la culpa es \xFAtil (se\xF1ala algo que puedes reparar) o excesiva (va m\xE1s all\xE1 del error real).", "Si es \xFAtil: piensa en una acci\xF3n concreta de reparaci\xF3n o disculpa.", "Haz esa acci\xF3n, o planea cu\xE1ndo la vas a hacer.", "Si es excesiva: reconoce que ya hiciste lo que pod\xEDas y practica soltarlo."] },
      en: { name: "Concrete repair", steps: ["Identify if the guilt is useful (points to something you can fix) or excessive (beyond the actual mistake).", "If useful: think of one concrete action of repair or apology.", "Do that action, or plan when you will.", "If excessive: acknowledge you did what you could and practice letting go."] }
    },
    Angustia: {
      es: { name: "T\xE9cnica 5-4-3-2-1", steps: ["Nombra 5 cosas que puedes ver ahora mismo.", "Nombra 4 cosas que puedes tocar (y t\xF3calas).", "Nombra 3 cosas que puedes escuchar.", "Nombra 2 cosas que puedes oler.", "Nombra 1 cosa que puedes saborear."] },
      en: { name: "5-4-3-2-1 Grounding", steps: ["Name 5 things you can see right now.", "Name 4 things you can touch (and touch them).", "Name 3 things you can hear.", "Name 2 things you can smell.", "Name 1 thing you can taste."] }
    }
  };

  // js/data/bodyMap.data.js
  var BODY_ZONES = {
    simple: [
      { id: "head", labelKey: "zone.head", color: "#818cf8" },
      { id: "chest", labelKey: "zone.chest", color: "#f472b6" },
      { id: "stomach", labelKey: "zone.stomach", color: "#fb923c" },
      { id: "arms", labelKey: "zone.arms", color: "#34d399" },
      { id: "legs", labelKey: "zone.legs", color: "#fbbf24" }
    ],
    detailed: [
      { id: "head", labelKey: "zone.head", color: "#818cf8" },
      { id: "face", labelKey: "zone.face", color: "#f87171" },
      { id: "throat", labelKey: "zone.throat", color: "#e879f9" },
      { id: "shoulders", labelKey: "zone.shoulders", color: "#60a5fa" },
      { id: "chest", labelKey: "zone.chest", color: "#f472b6" },
      { id: "stomach", labelKey: "zone.stomach", color: "#fb923c" },
      { id: "arms", labelKey: "zone.arms", color: "#34d399" },
      { id: "legs", labelKey: "zone.legs", color: "#fbbf24" }
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
    throat: ["Angustia", "Miedo", "Disgusto", "Verg\xFCenza"],
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
    stomach: ["Miedo", "Ansiedad", "Disgusto", "Culpa", "Celos", "Angustia", "Decepci\xF3n", "Envidia"],
    arms: ["Enojo", "Frustraci\xF3n", "Entusiasmo", "Irritabilidad"],
    legs: ["Tristeza", "Alegr\xEDa", "Aburrimiento", "Ansiedad", "Calma", "Felicidad"]
  };

  // js/i18n/es.js
  var es = {
    // ── Root (app-generic) ────────────────────────────────────────────────────
    title: "Br\xFAjula Emocional",
    subtitle: "Encuentra claridad en lo que sientes.",
    langLabel: "Idioma",
    offlineBanner: "Sin conexi\xF3n \xB7 Usando datos guardados",
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
    masksHint: "A veces lo que sientes en la superficie cubre algo m\xE1s. Explora tambi\xE9n esta emoci\xF3n.",
    // ── Nav ───────────────────────────────────────────────────────────────────
    nav: {
      emociones: "Emociones",
      checkin: "\xBFQu\xE9 siento?",
      diary: "Diario",
      mapa: "Mapa"
    },
    // ── Settings ──────────────────────────────────────────────────────────────
    settings: {
      label: "Configuraci\xF3n",
      themeLabel: "Tema",
      themeLight: "Claro",
      themeAuto: "Auto",
      themeDark: "Oscuro"
    },
    // ── Install ───────────────────────────────────────────────────────────────
    install: {
      button: "Instalar app",
      iosTitle: "Instalar en iPhone/iPad",
      iosStep1: "1. Toca el bot\xF3n Compartir de Safari (cuadro con flecha hacia arriba).",
      iosStep2: '2. Selecciona "A\xF1adir a pantalla de inicio".',
      iosClose: "Entendido"
    },
    // ── Checkin ───────────────────────────────────────────────────────────────
    checkin: {
      title: "\xBFC\xF3mo me siento?",
      reset: "Ver todas",
      moodAgitado: "Agitado",
      moodTriste: "Triste",
      moodConfundido: "Confundido",
      moodBien: "Bien"
    },
    // ── Diary ─────────────────────────────────────────────────────────────────
    diary: {
      trigger: "Mi diario emocional",
      triggerSub: "Solo se guarda en tu dispositivo",
      title: "Diario emocional",
      privacyNote: "Tus entradas se guardan solo en este dispositivo. Nunca salen de aqu\xED.",
      empty: "A\xFAn no hay entradas.",
      addShort: "Diario",
      noteLabel: "Nota (opcional)",
      notePlaceholder: "\xBFQu\xE9 m\xE1s quieres recordar?",
      saveButton: "Guardar",
      cancelButton: "Cancelar",
      deleteButton: "Eliminar entrada",
      clearAll: "Borrar todo el diario",
      clearConfirm: "\xBFBorrar todas las entradas del diario? Esta acci\xF3n no se puede deshacer.",
      todayLabel: "Hoy",
      addedFeedback: "Guardado en tu diario",
      newEntry: "Nueva entrada",
      pickEmotion: "\xBFQu\xE9 sentiste?",
      emptyPrompt: "Todav\xEDa no registraste ninguna emoci\xF3n.",
      emptyAction1: "Hacer check-in",
      emptyAction2: "Descubrir qu\xE9 siento",
      exportButton: "Exportar",
      tagLabel: "Contexto (opcional)",
      tagTrabajo: "Trabajo",
      tagPareja: "Pareja",
      tagFamilia: "Familia",
      tagCuerpo: "Cuerpo",
      tagDinero: "Dinero"
    },
    // ── Quiz ──────────────────────────────────────────────────────────────────
    quiz: {
      trigger: "\xBFNo sabes lo que sientes?",
      triggerSub: "Desc\xFAbrelo en 3 preguntas",
      title: "\xBFQu\xE9 siento?",
      q1: "\xBFC\xF3mo sientes tu cuerpo ahora mismo?",
      q1a: "Activado, tenso o acelerado",
      q1b: "Quieto, pesado o tranquilo",
      q2: "\xBFC\xF3mo describir\xEDas lo que sientes?",
      q2a: "Agradable, expansivo o positivo",
      q2b: "Inc\xF3modo, dif\xEDcil o tenso",
      q3: "\xBFParece relacionado con algo concreto?",
      q3a: "S\xED, algo o alguien lo desencaden\xF3",
      q3b: "No est\xE1 claro, es m\xE1s difuso",
      resultTitle: "Puede que est\xE9s sintiendo...",
      back: "Anterior",
      restart: "Empezar de nuevo",
      close: "Ver todas las emociones",
      tabQuestions: "Preguntas",
      tabBody: "Sensaciones"
    },
    // ── Crisis ────────────────────────────────────────────────────────────────
    crisis: {
      triggerTitle: "\xBFEst\xE1s desbordado/a?",
      triggerSub: "Tres pasos para recuperar el piso",
      triggerBtn: "Necesito ayuda ahora",
      step: "Paso",
      of: "de",
      close: "Cerrar",
      next: "Sigo aqu\xED \u2192",
      done: "Lo hice \u2192",
      step1Title: "Esto es v\xE1lido.",
      step1Body: "Lo que est\xE1s sintiendo es real y no tienes que manejarlo solo/a. No hace falta hacer nada perfecto ahora mismo. Solo estar aqu\xED ya es suficiente.",
      step2Title: "Ancla en el presente.",
      step2Intro: "Recorramos juntos lo que te rodea:",
      step2Items: "5 cosas que puedes ver|4 cosas que puedes tocar|3 cosas que puedes escuchar|2 cosas que puedes oler|1 cosa que puedes saborear",
      step3Title: "Una sola cosa.",
      step3Intro: "Elige una acci\xF3n m\xEDnima:",
      step3Actions: "Tomar un vaso de agua|Salir 5 minutos al aire libre|Escribir una palabra que describe c\xF3mo te sientes|Llamar a alguien de confianza",
      step3End: "Listo. Eso es todo lo que necesitas hacer ahora."
    },
    // ── Map ───────────────────────────────────────────────────────────────────
    map: {
      viewGraph: "Grafo",
      viewQuad: "Cuadrantes",
      relCoexiste: "A menudo coexisten",
      relEscalaA: "Puede escalar a",
      relEnmascara: "Puede enmascarar",
      relOpuesta: "Emoci\xF3n opuesta",
      infoNone: "Sin relaciones registradas",
      legendLabel: "Leyenda del mapa",
      searchPlaceholder: "Buscar emoci\xF3n en el mapa...",
      filterAll: "Todas",
      hint: "Toca una emoci\xF3n para ver sus conexiones \xB7 Usa la leyenda para filtrar tipos",
      hintSelected: "Toca fuera del nodo para volver al mapa completo",
      clearSelection: "Limpiar selecci\xF3n",
      searchEmpty: "No encontramos esa emoci\xF3n en el mapa"
    },
    // ── Body map ──────────────────────────────────────────────────────────────
    body: {
      mapTitle: "\xBFD\xF3nde lo sientes?",
      modeSimple: "Simple",
      modeDetailed: "Detallado",
      tapPrompt: "Toca las zonas del cuerpo donde sientes algo",
      resultTitle: "Puede que est\xE9s sintiendo...",
      noMatch: "Combinaci\xF3n poco frecuente \u2014 prueba seleccionando m\xE1s zonas",
      clear: "Limpiar selecci\xF3n"
    },
    // ── Body zones ────────────────────────────────────────────────────────────
    zone: {
      head: "Cabeza",
      face: "Cara",
      throat: "Garganta",
      shoulders: "Hombros",
      chest: "Pecho",
      stomach: "Abdomen",
      arms: "Brazos",
      legs: "Piernas"
    },
    // ── Technique ─────────────────────────────────────────────────────────────
    technique: {
      practice: "Practicar ahora",
      label: "T\xE9cnica guiada"
    }
  };

  // js/i18n/en.js
  var en = {
    // ── Root (app-generic) ────────────────────────────────────────────────────
    title: "Emotional Compass",
    subtitle: "Find clarity in what you feel.",
    langLabel: "Language",
    offlineBanner: "Offline \xB7 Using saved data",
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
    masksHint: "Sometimes what you feel on the surface covers something deeper. Explore this emotion too.",
    // ── Nav ───────────────────────────────────────────────────────────────────
    nav: {
      emociones: "Emotions",
      checkin: "How do I feel?",
      diary: "Diary",
      mapa: "Map"
    },
    // ── Settings ──────────────────────────────────────────────────────────────
    settings: {
      label: "Settings",
      themeLabel: "Theme",
      themeLight: "Light",
      themeAuto: "Auto",
      themeDark: "Dark"
    },
    // ── Install ───────────────────────────────────────────────────────────────
    install: {
      button: "Install app",
      iosTitle: "Install on iPhone/iPad",
      iosStep1: "1. Tap Safari's Share button (square with upward arrow).",
      iosStep2: '2. Select "Add to Home Screen".',
      iosClose: "Got it"
    },
    // ── Checkin ───────────────────────────────────────────────────────────────
    checkin: {
      title: "How do I feel?",
      reset: "See all",
      moodAgitado: "Agitated",
      moodTriste: "Sad",
      moodConfundido: "Confused",
      moodBien: "Good"
    },
    // ── Diary ─────────────────────────────────────────────────────────────────
    diary: {
      trigger: "My emotional diary",
      triggerSub: "Saved only on your device",
      title: "Emotional diary",
      privacyNote: "Your entries are saved only on this device. They never leave it.",
      empty: "No entries yet.",
      addShort: "Diary",
      noteLabel: "Note (optional)",
      notePlaceholder: "What else do you want to remember?",
      saveButton: "Save",
      cancelButton: "Cancel",
      deleteButton: "Delete entry",
      clearAll: "Clear all diary entries",
      clearConfirm: "Clear all diary entries? This cannot be undone.",
      todayLabel: "Today",
      addedFeedback: "Saved to your diary",
      newEntry: "New entry",
      pickEmotion: "What did you feel?",
      emptyPrompt: "You haven't recorded any emotion yet.",
      emptyAction1: "Do a check-in",
      emptyAction2: "Discover what I feel",
      exportButton: "Export",
      tagLabel: "Context (optional)",
      tagTrabajo: "Work",
      tagPareja: "Partner",
      tagFamilia: "Family",
      tagCuerpo: "Body",
      tagDinero: "Money"
    },
    // ── Quiz ──────────────────────────────────────────────────────────────────
    quiz: {
      trigger: "Not sure what you feel?",
      triggerSub: "Find out in 3 questions",
      title: "What am I feeling?",
      q1: "How does your body feel right now?",
      q1a: "Activated, tense or rushing",
      q1b: "Quiet, heavy or calm",
      q2: "How would you describe what you feel?",
      q2a: "Pleasant, expansive or positive",
      q2b: "Uncomfortable, difficult or tense",
      q3: "Does it seem related to something specific?",
      q3a: "Yes, something or someone triggered it",
      q3b: "Not clear, it feels more diffuse",
      resultTitle: "You might be feeling...",
      back: "Previous",
      restart: "Start over",
      close: "See all emotions",
      tabQuestions: "Questions",
      tabBody: "Sensations"
    },
    // ── Crisis ────────────────────────────────────────────────────────────────
    crisis: {
      triggerTitle: "Feeling overwhelmed?",
      triggerSub: "Three steps to find your ground",
      triggerBtn: "I need help now",
      step: "Step",
      of: "of",
      close: "Close",
      next: "I'm still here \u2192",
      done: "I did it \u2192",
      step1Title: "This is valid.",
      step1Body: "What you're feeling is real and you don't have to handle it alone. You don't need to do anything perfectly right now. Just being here is enough.",
      step2Title: "Ground yourself in the present.",
      step2Intro: "Let's go through what's around you:",
      step2Items: "5 things you can see|4 things you can touch|3 things you can hear|2 things you can smell|1 thing you can taste",
      step3Title: "Just one thing.",
      step3Intro: "Choose one small action:",
      step3Actions: "Drink a glass of water|Go outside for 5 minutes|Write one word that describes how you feel|Call someone you trust",
      step3End: "That's it. That's all you need to do right now."
    },
    // ── Map ───────────────────────────────────────────────────────────────────
    map: {
      viewGraph: "Graph",
      viewQuad: "Quadrants",
      relCoexiste: "Often coexist",
      relEscalaA: "Can escalate to",
      relEnmascara: "Can mask",
      relOpuesta: "Opposite emotion",
      infoNone: "No registered connections",
      legendLabel: "Map legend",
      searchPlaceholder: "Search emotion in map...",
      filterAll: "All",
      hint: "Tap an emotion to see its connections \xB7 Use the legend to filter types",
      hintSelected: "Tap outside the node to return to the full map",
      clearSelection: "Clear selection",
      searchEmpty: "No emotion found in the map"
    },
    // ── Body map ──────────────────────────────────────────────────────────────
    body: {
      mapTitle: "Where do you feel it?",
      modeSimple: "Simple",
      modeDetailed: "Detailed",
      tapPrompt: "Tap the body zones where you feel something",
      resultTitle: "You might be feeling...",
      noMatch: "Uncommon combination \u2014 try selecting more zones",
      clear: "Clear selection"
    },
    // ── Body zones ────────────────────────────────────────────────────────────
    zone: {
      head: "Head",
      face: "Face",
      throat: "Throat",
      shoulders: "Shoulders",
      chest: "Chest",
      stomach: "Stomach",
      arms: "Arms",
      legs: "Legs"
    },
    // ── Technique ─────────────────────────────────────────────────────────────
    technique: {
      practice: "Practice now",
      label: "Guided technique"
    }
  };

  // js/constants.js
  var RECENT_KEY = "brujulaRecientes";
  var LANGUAGE_KEY = "brujulaIdioma";
  var THEME_KEY = "brujulaThema";
  var DIARY_KEY = "brujulaDiario";
  var STORAGE_SCHEMA_KEY = "brujulaSchemaVersion";
  var STORAGE_SCHEMA_VERSION = 1;
  var RECENT_LIMIT = 5;
  var DIARY_TAGS = ["trabajo", "pareja", "familia", "cuerpo", "dinero"];
  var APP_TABS = ["emociones", "checkin", "diario", "mapa"];
  var DEFAULT_TAB = APP_TABS[0];
  var TRANSLATIONS = { es, en };

  // js/persistence.js
  function getRecentEmotions() {
    try {
      const parsed = JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  function setRecentEmotions(names) {
    localStorage.setItem(RECENT_KEY, JSON.stringify(names));
  }
  function getLanguage() {
    return localStorage.getItem(LANGUAGE_KEY);
  }
  function setLanguage(lang) {
    localStorage.setItem(LANGUAGE_KEY, lang);
  }
  function getTheme() {
    return localStorage.getItem(THEME_KEY);
  }
  function setTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
  }
  function getDiaryEntries() {
    try {
      const parsed = JSON.parse(localStorage.getItem(DIARY_KEY) || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  function setDiaryEntries(entries) {
    localStorage.setItem(DIARY_KEY, JSON.stringify(entries));
  }

  // js/i18n.js
  function detectInitialLanguage() {
    const saved = getLanguage();
    if (saved === "es" || saved === "en") return saved;
    const browserLang = globalThis.navigator?.language?.toLowerCase() ?? "es";
    return browserLang.startsWith("en") ? "en" : "es";
  }
  function createI18n({ getLang, setLang, onLanguageChanged }) {
    function t4(key) {
      const lang = getLang();
      const tr2 = (
        /** @type {Record<string, Record<string, any>>} */
        TRANSLATIONS
      );
      const parts = key.split(".");
      if (parts.length === 1) {
        return tr2[lang]?.[key] ?? tr2.es[key] ?? key;
      }
      let val = (
        /** @type {any} */
        tr2[lang]
      );
      for (const part of parts) val = val?.[part];
      if (val === void 0) {
        val = tr2.es;
        for (const part of parts) val = val?.[part];
      }
      if (val === void 0) return key;
      return String(val);
    }
    function getDisplayName(nombre) {
      const nameMap = (
        /** @type {Record<string, string>} */
        EMOTION_NAME_TRANSLATIONS
      );
      if (getLang() === "en") return nameMap[nombre] ?? nombre;
      return nombre;
    }
    function getEmotionField(emotion, field) {
      const contentMap = (
        /** @type {Record<string, Record<string, string>>} */
        EMOTION_CONTENT_TRANSLATIONS
      );
      if (getLang() === "en") return contentMap[emotion.nombre]?.[field] ?? emotion[field];
      return emotion[field];
    }
    function applyStaticTranslations() {
      document.documentElement.lang = getLang();
      const ids = {
        "app-title": (el) => {
          el.textContent = t4("title");
        },
        "app-subtitle": (el) => {
          el.textContent = t4("subtitle");
        },
        "search": (el) => {
          el.placeholder = t4("searchPlaceholder");
        },
        "recent-title": (el) => {
          el.textContent = t4("recentTitle");
        },
        "close-button": (el) => {
          el.textContent = t4("closeButton");
        },
        "share-btn": (el) => {
          el.setAttribute("aria-label", t4("shareButton"));
        },
        "share-btn-label": (el) => {
          el.textContent = t4("shareButton");
        },
        "diary-add-btn": (el) => {
          el.setAttribute("aria-label", t4("diary.addShort"));
        },
        "diary-add-label": (el) => {
          el.textContent = t4("diary.addShort");
        },
        "nav-label-emociones": (el) => {
          el.textContent = t4("nav.emociones");
        },
        "nav-label-checkin": (el) => {
          el.textContent = t4("nav.checkin");
        },
        "nav-label-diario": (el) => {
          el.textContent = t4("nav.diary");
        },
        "nav-label-mapa": (el) => {
          el.textContent = t4("nav.mapa");
        },
        "install-app-button": (el) => {
          el.textContent = t4("install.button");
        },
        "ios-install-title": (el) => {
          el.textContent = t4("install.iosTitle");
        },
        "ios-install-step-1": (el) => {
          el.textContent = t4("install.iosStep1");
        },
        "ios-install-step-2": (el) => {
          el.textContent = t4("install.iosStep2");
        },
        "ios-install-close": (el) => {
          el.textContent = t4("install.iosClose");
        },
        "quiz-trigger-title": (el) => {
          el.textContent = t4("quiz.trigger");
        },
        "quiz-trigger-sub": (el) => {
          el.textContent = t4("quiz.triggerSub");
        },
        "crisis-trigger-title": (el) => {
          el.textContent = t4("crisis.triggerTitle");
        },
        "crisis-trigger-sub": (el) => {
          el.textContent = t4("crisis.triggerSub");
        },
        "crisis-trigger-btn-label": (el) => {
          el.textContent = t4("crisis.triggerBtn");
        },
        "crisis-panel-close": (el) => {
          el.setAttribute("aria-label", t4("crisis.close"));
        },
        "settings-btn": (el) => {
          el.setAttribute("aria-label", t4("settings.label"));
        },
        "settings-theme-label": (el) => {
          el.textContent = t4("settings.themeLabel");
        },
        "settings-lang-label": (el) => {
          el.textContent = t4("langLabel");
        },
        "theme-btn-light": (el) => {
          el.setAttribute("aria-label", t4("settings.themeLight"));
          el.setAttribute("title", t4("settings.themeLight"));
        },
        "theme-btn-auto": (el) => {
          el.setAttribute("aria-label", t4("settings.themeAuto"));
          el.setAttribute("title", t4("settings.themeAuto"));
        },
        "theme-btn-dark": (el) => {
          el.setAttribute("aria-label", t4("settings.themeDark"));
          el.setAttribute("title", t4("settings.themeDark"));
        }
      };
      for (const [id, apply] of Object.entries(ids)) {
        const el = document.getElementById(id);
        if (el) apply(el);
      }
    }
    function setLanguage2(lang) {
      setLang(lang === "en" ? "en" : "es");
      setLanguage(getLang());
      applyStaticTranslations();
      onLanguageChanged();
    }
    return {
      t: t4,
      getDisplayName,
      getEmotionField,
      detectInitialLanguage,
      applyStaticTranslations,
      setLanguage: setLanguage2
    };
  }

  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var r;
  var o;
  var e;
  var f;
  var c;
  var s;
  var a;
  var h;
  var p;
  var v;
  var y;
  var d = {};
  var w = [];
  var _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var g = Array.isArray;
  function m(n3, l4) {
    for (var u5 in l4) n3[u5] = l4[u5];
    return n3;
  }
  function b(n3) {
    n3 && n3.parentNode && n3.parentNode.removeChild(n3);
  }
  function k(l4, u5, t4) {
    var i4, r4, o4, e4 = {};
    for (o4 in u5) "key" == o4 ? i4 = u5[o4] : "ref" == o4 ? r4 = u5[o4] : e4[o4] = u5[o4];
    if (arguments.length > 2 && (e4.children = arguments.length > 3 ? n.call(arguments, 2) : t4), "function" == typeof l4 && null != l4.defaultProps) for (o4 in l4.defaultProps) void 0 === e4[o4] && (e4[o4] = l4.defaultProps[o4]);
    return x(l4, e4, i4, r4, null);
  }
  function x(n3, t4, i4, r4, o4) {
    var e4 = { type: n3, props: t4, key: i4, ref: r4, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o4 ? ++u : o4, __i: -1, __u: 0 };
    return null == o4 && null != l.vnode && l.vnode(e4), e4;
  }
  function S(n3) {
    return n3.children;
  }
  function C(n3, l4) {
    this.props = n3, this.context = l4;
  }
  function $(n3, l4) {
    if (null == l4) return n3.__ ? $(n3.__, n3.__i + 1) : null;
    for (var u5; l4 < n3.__k.length; l4++) if (null != (u5 = n3.__k[l4]) && null != u5.__e) return u5.__e;
    return "function" == typeof n3.type ? $(n3) : null;
  }
  function I(n3) {
    if (n3.__P && n3.__d) {
      var u5 = n3.__v, t4 = u5.__e, i4 = [], r4 = [], o4 = m({}, u5);
      o4.__v = u5.__v + 1, l.vnode && l.vnode(o4), q(n3.__P, o4, u5, n3.__n, n3.__P.namespaceURI, 32 & u5.__u ? [t4] : null, i4, null == t4 ? $(u5) : t4, !!(32 & u5.__u), r4), o4.__v = u5.__v, o4.__.__k[o4.__i] = o4, D(i4, o4, r4), u5.__e = u5.__ = null, o4.__e != t4 && P(o4);
    }
  }
  function P(n3) {
    if (null != (n3 = n3.__) && null != n3.__c) return n3.__e = n3.__c.base = null, n3.__k.some(function(l4) {
      if (null != l4 && null != l4.__e) return n3.__e = n3.__c.base = l4.__e;
    }), P(n3);
  }
  function A(n3) {
    (!n3.__d && (n3.__d = true) && i.push(n3) && !H.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(H);
  }
  function H() {
    try {
      for (var n3, l4 = 1; i.length; ) i.length > l4 && i.sort(e), n3 = i.shift(), l4 = i.length, I(n3);
    } finally {
      i.length = H.__r = 0;
    }
  }
  function L(n3, l4, u5, t4, i4, r4, o4, e4, f5, c4, s4) {
    var a4, h4, p4, v4, y4, _3, g3, m4 = t4 && t4.__k || w, b3 = l4.length;
    for (f5 = T(u5, l4, m4, f5, b3), a4 = 0; a4 < b3; a4++) null != (p4 = u5.__k[a4]) && (h4 = -1 != p4.__i && m4[p4.__i] || d, p4.__i = a4, _3 = q(n3, p4, h4, i4, r4, o4, e4, f5, c4, s4), v4 = p4.__e, p4.ref && h4.ref != p4.ref && (h4.ref && J(h4.ref, null, p4), s4.push(p4.ref, p4.__c || v4, p4)), null == y4 && null != v4 && (y4 = v4), (g3 = !!(4 & p4.__u)) || h4.__k === p4.__k ? (f5 = j(p4, f5, n3, g3), g3 && h4.__e && (h4.__e = null)) : "function" == typeof p4.type && void 0 !== _3 ? f5 = _3 : v4 && (f5 = v4.nextSibling), p4.__u &= -7);
    return u5.__e = y4, f5;
  }
  function T(n3, l4, u5, t4, i4) {
    var r4, o4, e4, f5, c4, s4 = u5.length, a4 = s4, h4 = 0;
    for (n3.__k = new Array(i4), r4 = 0; r4 < i4; r4++) null != (o4 = l4[r4]) && "boolean" != typeof o4 && "function" != typeof o4 ? ("string" == typeof o4 || "number" == typeof o4 || "bigint" == typeof o4 || o4.constructor == String ? o4 = n3.__k[r4] = x(null, o4, null, null, null) : g(o4) ? o4 = n3.__k[r4] = x(S, { children: o4 }, null, null, null) : void 0 === o4.constructor && o4.__b > 0 ? o4 = n3.__k[r4] = x(o4.type, o4.props, o4.key, o4.ref ? o4.ref : null, o4.__v) : n3.__k[r4] = o4, f5 = r4 + h4, o4.__ = n3, o4.__b = n3.__b + 1, e4 = null, -1 != (c4 = o4.__i = O(o4, u5, f5, a4)) && (a4--, (e4 = u5[c4]) && (e4.__u |= 2)), null == e4 || null == e4.__v ? (-1 == c4 && (i4 > s4 ? h4-- : i4 < s4 && h4++), "function" != typeof o4.type && (o4.__u |= 4)) : c4 != f5 && (c4 == f5 - 1 ? h4-- : c4 == f5 + 1 ? h4++ : (c4 > f5 ? h4-- : h4++, o4.__u |= 4))) : n3.__k[r4] = null;
    if (a4) for (r4 = 0; r4 < s4; r4++) null != (e4 = u5[r4]) && 0 == (2 & e4.__u) && (e4.__e == t4 && (t4 = $(e4)), K(e4, e4));
    return t4;
  }
  function j(n3, l4, u5, t4) {
    var i4, r4;
    if ("function" == typeof n3.type) {
      for (i4 = n3.__k, r4 = 0; i4 && r4 < i4.length; r4++) i4[r4] && (i4[r4].__ = n3, l4 = j(i4[r4], l4, u5, t4));
      return l4;
    }
    n3.__e != l4 && (t4 && (l4 && n3.type && !l4.parentNode && (l4 = $(n3)), u5.insertBefore(n3.__e, l4 || null)), l4 = n3.__e);
    do {
      l4 = l4 && l4.nextSibling;
    } while (null != l4 && 8 == l4.nodeType);
    return l4;
  }
  function O(n3, l4, u5, t4) {
    var i4, r4, o4, e4 = n3.key, f5 = n3.type, c4 = l4[u5], s4 = null != c4 && 0 == (2 & c4.__u);
    if (null === c4 && null == e4 || s4 && e4 == c4.key && f5 == c4.type) return u5;
    if (t4 > (s4 ? 1 : 0)) {
      for (i4 = u5 - 1, r4 = u5 + 1; i4 >= 0 || r4 < l4.length; ) if (null != (c4 = l4[o4 = i4 >= 0 ? i4-- : r4++]) && 0 == (2 & c4.__u) && e4 == c4.key && f5 == c4.type) return o4;
    }
    return -1;
  }
  function z(n3, l4, u5) {
    "-" == l4[0] ? n3.setProperty(l4, null == u5 ? "" : u5) : n3[l4] = null == u5 ? "" : "number" != typeof u5 || _.test(l4) ? u5 : u5 + "px";
  }
  function N(n3, l4, u5, t4, i4) {
    var r4, o4;
    n: if ("style" == l4) if ("string" == typeof u5) n3.style.cssText = u5;
    else {
      if ("string" == typeof t4 && (n3.style.cssText = t4 = ""), t4) for (l4 in t4) u5 && l4 in u5 || z(n3.style, l4, "");
      if (u5) for (l4 in u5) t4 && u5[l4] == t4[l4] || z(n3.style, l4, u5[l4]);
    }
    else if ("o" == l4[0] && "n" == l4[1]) r4 = l4 != (l4 = l4.replace(a, "$1")), o4 = l4.toLowerCase(), l4 = o4 in n3 || "onFocusOut" == l4 || "onFocusIn" == l4 ? o4.slice(2) : l4.slice(2), n3.l || (n3.l = {}), n3.l[l4 + r4] = u5, u5 ? t4 ? u5[s] = t4[s] : (u5[s] = h, n3.addEventListener(l4, r4 ? v : p, r4)) : n3.removeEventListener(l4, r4 ? v : p, r4);
    else {
      if ("http://www.w3.org/2000/svg" == i4) l4 = l4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l4 && "height" != l4 && "href" != l4 && "list" != l4 && "form" != l4 && "tabIndex" != l4 && "download" != l4 && "rowSpan" != l4 && "colSpan" != l4 && "role" != l4 && "popover" != l4 && l4 in n3) try {
        n3[l4] = null == u5 ? "" : u5;
        break n;
      } catch (n4) {
      }
      "function" == typeof u5 || (null == u5 || false === u5 && "-" != l4[4] ? n3.removeAttribute(l4) : n3.setAttribute(l4, "popover" == l4 && 1 == u5 ? "" : u5));
    }
  }
  function V(n3) {
    return function(u5) {
      if (this.l) {
        var t4 = this.l[u5.type + n3];
        if (null == u5[c]) u5[c] = h++;
        else if (u5[c] < t4[s]) return;
        return t4(l.event ? l.event(u5) : u5);
      }
    };
  }
  function q(n3, u5, t4, i4, r4, o4, e4, f5, c4, s4) {
    var a4, h4, p4, v4, y4, d4, _3, k4, x3, M2, $2, I3, P3, A4, H3, T4 = u5.type;
    if (void 0 !== u5.constructor) return null;
    128 & t4.__u && (c4 = !!(32 & t4.__u), o4 = [f5 = u5.__e = t4.__e]), (a4 = l.__b) && a4(u5);
    n: if ("function" == typeof T4) try {
      if (k4 = u5.props, x3 = T4.prototype && T4.prototype.render, M2 = (a4 = T4.contextType) && i4[a4.__c], $2 = a4 ? M2 ? M2.props.value : a4.__ : i4, t4.__c ? _3 = (h4 = u5.__c = t4.__c).__ = h4.__E : (x3 ? u5.__c = h4 = new T4(k4, $2) : (u5.__c = h4 = new C(k4, $2), h4.constructor = T4, h4.render = Q), M2 && M2.sub(h4), h4.state || (h4.state = {}), h4.__n = i4, p4 = h4.__d = true, h4.__h = [], h4._sb = []), x3 && null == h4.__s && (h4.__s = h4.state), x3 && null != T4.getDerivedStateFromProps && (h4.__s == h4.state && (h4.__s = m({}, h4.__s)), m(h4.__s, T4.getDerivedStateFromProps(k4, h4.__s))), v4 = h4.props, y4 = h4.state, h4.__v = u5, p4) x3 && null == T4.getDerivedStateFromProps && null != h4.componentWillMount && h4.componentWillMount(), x3 && null != h4.componentDidMount && h4.__h.push(h4.componentDidMount);
      else {
        if (x3 && null == T4.getDerivedStateFromProps && k4 !== v4 && null != h4.componentWillReceiveProps && h4.componentWillReceiveProps(k4, $2), u5.__v == t4.__v || !h4.__e && null != h4.shouldComponentUpdate && false === h4.shouldComponentUpdate(k4, h4.__s, $2)) {
          u5.__v != t4.__v && (h4.props = k4, h4.state = h4.__s, h4.__d = false), u5.__e = t4.__e, u5.__k = t4.__k, u5.__k.some(function(n4) {
            n4 && (n4.__ = u5);
          }), w.push.apply(h4.__h, h4._sb), h4._sb = [], h4.__h.length && e4.push(h4);
          break n;
        }
        null != h4.componentWillUpdate && h4.componentWillUpdate(k4, h4.__s, $2), x3 && null != h4.componentDidUpdate && h4.__h.push(function() {
          h4.componentDidUpdate(v4, y4, d4);
        });
      }
      if (h4.context = $2, h4.props = k4, h4.__P = n3, h4.__e = false, I3 = l.__r, P3 = 0, x3) h4.state = h4.__s, h4.__d = false, I3 && I3(u5), a4 = h4.render(h4.props, h4.state, h4.context), w.push.apply(h4.__h, h4._sb), h4._sb = [];
      else do {
        h4.__d = false, I3 && I3(u5), a4 = h4.render(h4.props, h4.state, h4.context), h4.state = h4.__s;
      } while (h4.__d && ++P3 < 25);
      h4.state = h4.__s, null != h4.getChildContext && (i4 = m(m({}, i4), h4.getChildContext())), x3 && !p4 && null != h4.getSnapshotBeforeUpdate && (d4 = h4.getSnapshotBeforeUpdate(v4, y4)), A4 = null != a4 && a4.type === S && null == a4.key ? E(a4.props.children) : a4, f5 = L(n3, g(A4) ? A4 : [A4], u5, t4, i4, r4, o4, e4, f5, c4, s4), h4.base = u5.__e, u5.__u &= -161, h4.__h.length && e4.push(h4), _3 && (h4.__E = h4.__ = null);
    } catch (n4) {
      if (u5.__v = null, c4 || null != o4) if (n4.then) {
        for (u5.__u |= c4 ? 160 : 128; f5 && 8 == f5.nodeType && f5.nextSibling; ) f5 = f5.nextSibling;
        o4[o4.indexOf(f5)] = null, u5.__e = f5;
      } else {
        for (H3 = o4.length; H3--; ) b(o4[H3]);
        B(u5);
      }
      else u5.__e = t4.__e, u5.__k = t4.__k, n4.then || B(u5);
      l.__e(n4, u5, t4);
    }
    else null == o4 && u5.__v == t4.__v ? (u5.__k = t4.__k, u5.__e = t4.__e) : f5 = u5.__e = G(t4.__e, u5, t4, i4, r4, o4, e4, c4, s4);
    return (a4 = l.diffed) && a4(u5), 128 & u5.__u ? void 0 : f5;
  }
  function B(n3) {
    n3 && (n3.__c && (n3.__c.__e = true), n3.__k && n3.__k.some(B));
  }
  function D(n3, u5, t4) {
    for (var i4 = 0; i4 < t4.length; i4++) J(t4[i4], t4[++i4], t4[++i4]);
    l.__c && l.__c(u5, n3), n3.some(function(u6) {
      try {
        n3 = u6.__h, u6.__h = [], n3.some(function(n4) {
          n4.call(u6);
        });
      } catch (n4) {
        l.__e(n4, u6.__v);
      }
    });
  }
  function E(n3) {
    return "object" != typeof n3 || null == n3 || n3.__b > 0 ? n3 : g(n3) ? n3.map(E) : m({}, n3);
  }
  function G(u5, t4, i4, r4, o4, e4, f5, c4, s4) {
    var a4, h4, p4, v4, y4, w4, _3, m4 = i4.props || d, k4 = t4.props, x3 = t4.type;
    if ("svg" == x3 ? o4 = "http://www.w3.org/2000/svg" : "math" == x3 ? o4 = "http://www.w3.org/1998/Math/MathML" : o4 || (o4 = "http://www.w3.org/1999/xhtml"), null != e4) {
      for (a4 = 0; a4 < e4.length; a4++) if ((y4 = e4[a4]) && "setAttribute" in y4 == !!x3 && (x3 ? y4.localName == x3 : 3 == y4.nodeType)) {
        u5 = y4, e4[a4] = null;
        break;
      }
    }
    if (null == u5) {
      if (null == x3) return document.createTextNode(k4);
      u5 = document.createElementNS(o4, x3, k4.is && k4), c4 && (l.__m && l.__m(t4, e4), c4 = false), e4 = null;
    }
    if (null == x3) m4 === k4 || c4 && u5.data == k4 || (u5.data = k4);
    else {
      if (e4 = e4 && n.call(u5.childNodes), !c4 && null != e4) for (m4 = {}, a4 = 0; a4 < u5.attributes.length; a4++) m4[(y4 = u5.attributes[a4]).name] = y4.value;
      for (a4 in m4) y4 = m4[a4], "dangerouslySetInnerHTML" == a4 ? p4 = y4 : "children" == a4 || a4 in k4 || "value" == a4 && "defaultValue" in k4 || "checked" == a4 && "defaultChecked" in k4 || N(u5, a4, null, y4, o4);
      for (a4 in k4) y4 = k4[a4], "children" == a4 ? v4 = y4 : "dangerouslySetInnerHTML" == a4 ? h4 = y4 : "value" == a4 ? w4 = y4 : "checked" == a4 ? _3 = y4 : c4 && "function" != typeof y4 || m4[a4] === y4 || N(u5, a4, y4, m4[a4], o4);
      if (h4) c4 || p4 && (h4.__html == p4.__html || h4.__html == u5.innerHTML) || (u5.innerHTML = h4.__html), t4.__k = [];
      else if (p4 && (u5.innerHTML = ""), L("template" == t4.type ? u5.content : u5, g(v4) ? v4 : [v4], t4, i4, r4, "foreignObject" == x3 ? "http://www.w3.org/1999/xhtml" : o4, e4, f5, e4 ? e4[0] : i4.__k && $(i4, 0), c4, s4), null != e4) for (a4 = e4.length; a4--; ) b(e4[a4]);
      c4 || (a4 = "value", "progress" == x3 && null == w4 ? u5.removeAttribute("value") : null != w4 && (w4 !== u5[a4] || "progress" == x3 && !w4 || "option" == x3 && w4 != m4[a4]) && N(u5, a4, w4, m4[a4], o4), a4 = "checked", null != _3 && _3 != u5[a4] && N(u5, a4, _3, m4[a4], o4));
    }
    return u5;
  }
  function J(n3, u5, t4) {
    try {
      if ("function" == typeof n3) {
        var i4 = "function" == typeof n3.__u;
        i4 && n3.__u(), i4 && null == u5 || (n3.__u = n3(u5));
      } else n3.current = u5;
    } catch (n4) {
      l.__e(n4, t4);
    }
  }
  function K(n3, u5, t4) {
    var i4, r4;
    if (l.unmount && l.unmount(n3), (i4 = n3.ref) && (i4.current && i4.current != n3.__e || J(i4, null, u5)), null != (i4 = n3.__c)) {
      if (i4.componentWillUnmount) try {
        i4.componentWillUnmount();
      } catch (n4) {
        l.__e(n4, u5);
      }
      i4.base = i4.__P = null;
    }
    if (i4 = n3.__k) for (r4 = 0; r4 < i4.length; r4++) i4[r4] && K(i4[r4], u5, t4 || "function" != typeof n3.type);
    t4 || b(n3.__e), n3.__c = n3.__ = n3.__e = void 0;
  }
  function Q(n3, l4, u5) {
    return this.constructor(n3, u5);
  }
  function R(u5, t4, i4) {
    var r4, o4, e4, f5;
    t4 == document && (t4 = document.documentElement), l.__ && l.__(u5, t4), o4 = (r4 = "function" == typeof i4) ? null : i4 && i4.__k || t4.__k, e4 = [], f5 = [], q(t4, u5 = (!r4 && i4 || t4).__k = k(S, null, [u5]), o4 || d, d, t4.namespaceURI, !r4 && i4 ? [i4] : o4 ? null : t4.firstChild ? n.call(t4.childNodes) : null, e4, !r4 && i4 ? i4 : o4 ? o4.__e : t4.firstChild, r4, f5), D(e4, u5, f5);
  }
  n = w.slice, l = { __e: function(n3, l4, u5, t4) {
    for (var i4, r4, o4; l4 = l4.__; ) if ((i4 = l4.__c) && !i4.__) try {
      if ((r4 = i4.constructor) && null != r4.getDerivedStateFromError && (i4.setState(r4.getDerivedStateFromError(n3)), o4 = i4.__d), null != i4.componentDidCatch && (i4.componentDidCatch(n3, t4 || {}), o4 = i4.__d), o4) return i4.__E = i4;
    } catch (l5) {
      n3 = l5;
    }
    throw n3;
  } }, u = 0, t = function(n3) {
    return null != n3 && void 0 === n3.constructor;
  }, C.prototype.setState = function(n3, l4) {
    var u5;
    u5 = null != this.__s && this.__s != this.state ? this.__s : this.__s = m({}, this.state), "function" == typeof n3 && (n3 = n3(m({}, u5), this.props)), n3 && m(u5, n3), null != n3 && this.__v && (l4 && this._sb.push(l4), A(this));
  }, C.prototype.forceUpdate = function(n3) {
    this.__v && (this.__e = true, n3 && this.__h.push(n3), A(this));
  }, C.prototype.render = S, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n3, l4) {
    return n3.__v.__b - l4.__v.__b;
  }, H.__r = 0, f = Math.random().toString(8), c = "__d" + f, s = "__a" + f, a = /(PointerCapture)$|Capture$/i, h = 0, p = V(false), v = V(true), y = 0;

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var f2 = [];
  var c2 = l;
  var e2 = c2.__b;
  var a2 = c2.__r;
  var v2 = c2.diffed;
  var l2 = c2.__c;
  var m2 = c2.unmount;
  var s2 = c2.__;
  function p2(n3, t4) {
    c2.__h && c2.__h(r2, n3, o2 || t4), o2 = 0;
    var u5 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n3 >= u5.__.length && u5.__.push({}), u5.__[n3];
  }
  function d2(n3) {
    return o2 = 1, h2(D2, n3);
  }
  function h2(n3, u5, i4) {
    var o4 = p2(t2++, 2);
    if (o4.t = n3, !o4.__c && (o4.__ = [i4 ? i4(u5) : D2(void 0, u5), function(n4) {
      var t4 = o4.__N ? o4.__N[0] : o4.__[0], r4 = o4.t(t4, n4);
      t4 !== r4 && (o4.__N = [r4, o4.__[1]], o4.__c.setState({}));
    }], o4.__c = r2, !r2.__f)) {
      var f5 = function(n4, t4, r4) {
        if (!o4.__c.__H) return true;
        var u6 = o4.__c.__H.__.filter(function(n5) {
          return n5.__c;
        });
        if (u6.every(function(n5) {
          return !n5.__N;
        })) return !c4 || c4.call(this, n4, t4, r4);
        var i5 = o4.__c.props !== n4;
        return u6.some(function(n5) {
          if (n5.__N) {
            var t5 = n5.__[0];
            n5.__ = n5.__N, n5.__N = void 0, t5 !== n5.__[0] && (i5 = true);
          }
        }), c4 && c4.call(this, n4, t4, r4) || i5;
      };
      r2.__f = true;
      var c4 = r2.shouldComponentUpdate, e4 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n4, t4, r4) {
        if (this.__e) {
          var u6 = c4;
          c4 = void 0, f5(n4, t4, r4), c4 = u6;
        }
        e4 && e4.call(this, n4, t4, r4);
      }, r2.shouldComponentUpdate = f5;
    }
    return o4.__N || o4.__;
  }
  function y2(n3, u5) {
    var i4 = p2(t2++, 3);
    !c2.__s && C2(i4.__H, u5) && (i4.__ = n3, i4.u = u5, r2.__H.__h.push(i4));
  }
  function A2(n3) {
    return o2 = 5, T2(function() {
      return { current: n3 };
    }, []);
  }
  function T2(n3, r4) {
    var u5 = p2(t2++, 7);
    return C2(u5.__H, r4) && (u5.__ = n3(), u5.__H = r4, u5.__h = n3), u5.__;
  }
  function j2() {
    for (var n3; n3 = f2.shift(); ) {
      var t4 = n3.__H;
      if (n3.__P && t4) try {
        t4.__h.some(z2), t4.__h.some(B2), t4.__h = [];
      } catch (r4) {
        t4.__h = [], c2.__e(r4, n3.__v);
      }
    }
  }
  c2.__b = function(n3) {
    r2 = null, e2 && e2(n3);
  }, c2.__ = function(n3, t4) {
    n3 && t4.__k && t4.__k.__m && (n3.__m = t4.__k.__m), s2 && s2(n3, t4);
  }, c2.__r = function(n3) {
    a2 && a2(n3), t2 = 0;
    var i4 = (r2 = n3.__c).__H;
    i4 && (u2 === r2 ? (i4.__h = [], r2.__h = [], i4.__.some(function(n4) {
      n4.__N && (n4.__ = n4.__N), n4.u = n4.__N = void 0;
    })) : (i4.__h.some(z2), i4.__h.some(B2), i4.__h = [], t2 = 0)), u2 = r2;
  }, c2.diffed = function(n3) {
    v2 && v2(n3);
    var t4 = n3.__c;
    t4 && t4.__H && (t4.__H.__h.length && (1 !== f2.push(t4) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t4.__H.__.some(function(n4) {
      n4.u && (n4.__H = n4.u), n4.u = void 0;
    })), u2 = r2 = null;
  }, c2.__c = function(n3, t4) {
    t4.some(function(n4) {
      try {
        n4.__h.some(z2), n4.__h = n4.__h.filter(function(n5) {
          return !n5.__ || B2(n5);
        });
      } catch (r4) {
        t4.some(function(n5) {
          n5.__h && (n5.__h = []);
        }), t4 = [], c2.__e(r4, n4.__v);
      }
    }), l2 && l2(n3, t4);
  }, c2.unmount = function(n3) {
    m2 && m2(n3);
    var t4, r4 = n3.__c;
    r4 && r4.__H && (r4.__H.__.some(function(n4) {
      try {
        z2(n4);
      } catch (n5) {
        t4 = n5;
      }
    }), r4.__H = void 0, t4 && c2.__e(t4, r4.__v));
  };
  var k2 = "function" == typeof requestAnimationFrame;
  function w2(n3) {
    var t4, r4 = function() {
      clearTimeout(u5), k2 && cancelAnimationFrame(t4), setTimeout(n3);
    }, u5 = setTimeout(r4, 35);
    k2 && (t4 = requestAnimationFrame(r4));
  }
  function z2(n3) {
    var t4 = r2, u5 = n3.__c;
    "function" == typeof u5 && (n3.__c = void 0, u5()), r2 = t4;
  }
  function B2(n3) {
    var t4 = r2;
    n3.__c = n3.__(), r2 = t4;
  }
  function C2(n3, t4) {
    return !n3 || n3.length !== t4.length || t4.some(function(t5, r4) {
      return t5 !== n3[r4];
    });
  }
  function D2(n3, t4) {
    return "function" == typeof t4 ? t4(n3) : t4;
  }

  // js/utils.js
  function isDarkMode() {
    return document.documentElement.classList.contains("dark");
  }
  function normalizeText(value) {
    return value.toLowerCase().normalize("NFD").replaceAll(/[̀-ͯ]/g, "");
  }
  function getReadableTextColor(hexColor) {
    const safeHex = (hexColor || "").replace("#", "");
    if (safeHex.length !== 6) return "#0f172a";
    const r4 = Number.parseInt(safeHex.slice(0, 2), 16);
    const g3 = Number.parseInt(safeHex.slice(2, 4), 16);
    const b3 = Number.parseInt(safeHex.slice(4, 6), 16);
    if ([r4, g3, b3].some(Number.isNaN)) return "#0f172a";
    const luminance = (0.299 * r4 + 0.587 * g3 + 0.114 * b3) / 255;
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

  // js/emotionCanvas.js
  function roundRectPath(ctx, x3, y4, w4, h4, radii) {
    const [tl, tr2, br2, bl] = Array.isArray(radii) ? radii : [radii, radii, radii, radii];
    ctx.moveTo(x3 + tl, y4);
    ctx.lineTo(x3 + w4 - tr2, y4);
    ctx.arcTo(x3 + w4, y4, x3 + w4, y4 + tr2, tr2);
    ctx.lineTo(x3 + w4, y4 + h4 - br2);
    ctx.arcTo(x3 + w4, y4 + h4, x3 + w4 - br2, y4 + h4, br2);
    ctx.lineTo(x3 + bl, y4 + h4);
    ctx.arcTo(x3, y4 + h4, x3, y4 + h4 - bl, bl);
    ctx.lineTo(x3, y4 + tl);
    ctx.arcTo(x3, y4, x3 + tl, y4, tl);
    ctx.closePath();
  }
  async function buildEmotionCanvas(e4, displayName, tagLabel, mensaje, responseLabel, respuesta) {
    await document.fonts.load("900 1px Inter").catch(() => {
    });
    const W2 = 1080;
    const H3 = 1350;
    const PAD2 = 84;
    const SANS = "'Inter', system-ui, -apple-system, sans-serif";
    const SERIF = 'Georgia, "Times New Roman", serif';
    const canvas = document.createElement("canvas");
    canvas.width = W2;
    canvas.height = H3;
    const ctx = canvas.getContext("2d");
    if (!ctx) return canvas;
    const textOnColor = getReadableTextColor(e4.color);
    const tagAlpha = textOnColor === "#f8fafc" ? "rgba(255,255,255,0.6)" : "rgba(15,23,42,0.4)";
    ctx.fillStyle = "#f8fafc";
    ctx.beginPath();
    roundRectPath(ctx, 0, 0, W2, H3, 0);
    ctx.fill();
    const ACCENT_H = 320;
    ctx.fillStyle = e4.color;
    ctx.beginPath();
    roundRectPath(ctx, 0, 0, W2, ACCENT_H, [0, 0, 0, 0]);
    ctx.fill();
    ctx.fillStyle = tagAlpha;
    ctx.font = `600 26px ${SANS}`;
    ctx.fillText(tagLabel.toUpperCase(), PAD2, 112);
    ctx.fillStyle = textOnColor;
    ctx.font = `900 92px ${SANS}`;
    ctx.fillText(displayName, PAD2, 248);
    let y4 = ACCENT_H + 76;
    ctx.fillStyle = "#475569";
    ctx.font = `italic 42px ${SERIF}`;
    const msgLines = wrapTextLines(ctx, `"${mensaje}"`, W2 - PAD2 * 2);
    for (const line of msgLines) {
      ctx.fillText(line, PAD2, y4);
      y4 += 64;
    }
    y4 += 48;
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(PAD2, y4);
    ctx.lineTo(W2 - PAD2, y4);
    ctx.stroke();
    y4 += 56;
    ctx.fillStyle = "#94a3b8";
    ctx.font = `700 22px ${SANS}`;
    ctx.fillText(responseLabel.toUpperCase(), PAD2, y4);
    y4 += 50;
    ctx.fillStyle = "#1e293b";
    ctx.font = `500 38px ${SANS}`;
    const respLines = wrapTextLines(ctx, respuesta, W2 - PAD2 * 2);
    for (const line of respLines) {
      ctx.fillText(line, PAD2, y4);
      y4 += 58;
    }
    const contentFloor = y4 + 20;
    if (contentFloor < H3 - 220) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, contentFloor, W2, H3 - contentFloor);
      ctx.clip();
      ctx.fillStyle = e4.color;
      ctx.globalAlpha = 0.2;
      ctx.beginPath();
      ctx.arc(W2 * 0.85, H3 * 0.78, 380, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 0.14;
      ctx.beginPath();
      ctx.arc(W2 * 0.12, H3 * 0.92, 260, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 0.1;
      ctx.beginPath();
      ctx.arc(W2 * 0.55, H3 * 0.96, 190, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      const fadeH = 80;
      const fade = ctx.createLinearGradient(0, contentFloor, 0, contentFloor + fadeH);
      fade.addColorStop(0, "#f8fafc");
      fade.addColorStop(1, "rgba(248,250,252,0)");
      ctx.fillStyle = fade;
      ctx.fillRect(0, contentFloor, W2, fadeH);
      ctx.restore();
    }
    const brand = "Br\xFAjula Emocional";
    ctx.font = `500 26px ${SANS}`;
    const brandW = ctx.measureText(brand).width;
    const brandX = W2 - PAD2 - brandW;
    const brandY = H3 - 64;
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(brandX, brandY - 24);
    ctx.lineTo(W2 - PAD2, brandY - 24);
    ctx.stroke();
    ctx.fillStyle = "#475569";
    ctx.fillText(brand, brandX, brandY);
    return canvas;
  }

  // js/bus.js
  var listeners = {};
  function on(event, fn2) {
    (listeners[event] ??= []).push(fn2);
  }
  function emit(event, data) {
    listeners[event]?.forEach((fn2) => fn2(data));
  }

  // js/store.js
  var _state = {
    currentLang: "es",
    currentTab: DEFAULT_TAB,
    lastFocusedCard: null,
    isClosingModal: false
  };
  var get = (key) => _state[key];
  function set(key, value) {
    const prev = _state[key];
    if (prev === value) return;
    /** @type {Record<string, unknown>} */
    _state[key] = value;
    emit(`store:${key}`, { value, prev });
  }

  // js/uiHelpers.js
  function shortRecentLabel(nombre) {
    return nombre.length > 9 ? `${nombre.slice(0, 9)}...` : nombre;
  }
  function filterEmotions(emociones2, filter, getDisplayName, getEmotionField) {
    const normalized = normalizeText(filter.trim());
    if (!normalized) return emociones2;
    return emociones2.filter((e4) => {
      const searchText = [
        e4.nombre,
        getDisplayName(e4.nombre),
        e4.siente,
        e4.dispara,
        e4.mensaje,
        getEmotionField(e4, "siente"),
        getEmotionField(e4, "dispara"),
        getEmotionField(e4, "mensaje"),
        getEmotionField(e4, "respuesta")
      ].map(normalizeText).join(" ");
      return searchText.includes(normalized);
    });
  }
  function filterMaskedEmotions(relaciones, emocionNombre, emociones2) {
    return relaciones.filter((r4) => r4.type === "enmascara" && r4.from === emocionNombre).map((r4) => emociones2.find((em) => em.nombre === r4.to)).filter(Boolean);
  }

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f3 = 0;
  function u3(e4, t4, n3, o4, i4, u5) {
    t4 || (t4 = {});
    var a4, c4, p4 = t4;
    if ("ref" in p4) for (c4 in p4 = {}, t4) "ref" == c4 ? a4 = t4[c4] : p4[c4] = t4[c4];
    var l4 = { type: e4, props: p4, key: n3, ref: a4, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f3, __i: -1, __u: 0, __source: i4, __self: u5 };
    if ("function" == typeof e4 && (a4 = e4.defaultProps)) for (c4 in a4) void 0 === p4[c4] && (p4[c4] = a4[c4]);
    return l.vnode && l.vnode(l4), l4;
  }

  // js/ui.jsx
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
    const a4 = document.createElement("a");
    a4.href = url;
    a4.download = `${filename}.png`;
    document.body.appendChild(a4);
    a4.click();
    a4.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
  }
  var MOOD_SVGS = {
    agitado: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true"><circle cx="40" cy="42" r="26" stroke="currentColor" stroke-width="3.5"/><line x1="26" y1="32" x2="34" y2="36" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><line x1="54" y1="32" x2="46" y2="36" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="32" cy="42" r="2" fill="currentColor"/><circle cx="48" cy="42" r="2" fill="currentColor"/><path d="M30 54 L34 50 L38 54 L42 50 L46 54 L50 50" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    triste: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true"><circle cx="40" cy="42" r="26" stroke="currentColor" stroke-width="3.5"/><path d="M28 40 C 30 44, 34 44, 36 40" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M44 40 C 46 44, 50 44, 52 40" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M32 56 C 36 50, 44 50, 48 56" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M34 48 C 33 52, 31 54, 32 56 C 33 56, 34 54, 34 48 Z" fill="currentColor"/></svg>`,
    confundido: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true"><circle cx="40" cy="42" r="26" stroke="currentColor" stroke-width="3.5"/><line x1="26" y1="34" x2="34" y2="32" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><line x1="46" y1="32" x2="54" y2="36" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="32" cy="42" r="2" fill="currentColor"/><circle cx="48" cy="42" r="2" fill="currentColor"/><path d="M30 54 C 34 52, 38 56, 42 54 C 46 52, 48 56, 52 54" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
    bien: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true"><circle cx="40" cy="42" r="26" stroke="currentColor" stroke-width="3.5"/><path d="M28 42 C 30 38, 34 38, 36 42" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M44 42 C 46 38, 50 38, 52 42" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M30 52 C 34 60, 46 60, 50 52" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`
  };
  function CheckinCard({ cat, t: t4, onClick }) {
    const svgHtml = MOOD_SVGS[cat.key];
    return /* @__PURE__ */ u3(
      "button",
      {
        type: "button",
        "data-mood": cat.key,
        class: "checkin-card w-full p-5 rounded-2xl shadow-sm text-left flex flex-col gap-3 hover:shadow-md transition-all active:scale-95",
        style: `background-color:${cat.color};color:${cat.ink}`,
        onClick,
        children: [
          svgHtml ? /* @__PURE__ */ u3("span", { dangerouslySetInnerHTML: { __html: svgHtml } }) : /* @__PURE__ */ u3("span", { class: "text-3xl", "aria-hidden": "true", children: cat.emoji }),
          /* @__PURE__ */ u3("span", { class: "font-black text-base leading-tight", children: t4(cat.labelKey) })
        ]
      }
    );
  }
  function EmotionCard({ e: e4, getDisplayName, t: t4, onSelect }) {
    return /* @__PURE__ */ u3(
      "button",
      {
        type: "button",
        class: "emotion-card p-5 rounded-2xl shadow-sm cursor-pointer flex justify-between items-center w-full text-left",
        style: `--ec:${e4.color}; border-left:8px solid ${e4.color}`,
        "aria-label": `${t4("openDetailAria")} ${getDisplayName(e4.nombre)}`,
        onClick: (ev) => onSelect(e4, ev.currentTarget),
        children: [
          /* @__PURE__ */ u3("span", { class: "font-bold text-lg text-slate-700", children: getDisplayName(e4.nombre) }),
          /* @__PURE__ */ u3("svg", { class: "w-4 h-4 text-slate-300 shrink-0", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ u3("path", { d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" }) })
        ]
      }
    );
  }
  function TechniqueSection({ emotionNombre, t: t4, lang }) {
    const [open, setOpen] = d2(false);
    const tech = REGULATION_TECHNIQUES[emotionNombre];
    if (!tech) return null;
    const data = tech[lang] ?? tech.es;
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3(
        "button",
        {
          id: "technique-toggle",
          type: "button",
          class: "flex items-center gap-2 text-[11px] font-black text-indigo-500 uppercase tracking-widest w-full text-left px-1 mb-2",
          "aria-expanded": String(open),
          onClick: () => setOpen(!open),
          children: [
            /* @__PURE__ */ u3(
              "svg",
              {
                id: "technique-chevron",
                class: `w-3.5 h-3.5 transition-transform shrink-0 ${open ? "rotate-90" : ""}`,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                children: /* @__PURE__ */ u3("path", { d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" })
              }
            ),
            t4("technique.practice")
          ]
        }
      ),
      open && /* @__PURE__ */ u3("div", { id: "technique-body", class: "bg-indigo-50 border-2 border-indigo-100 rounded-2xl p-4", children: [
        /* @__PURE__ */ u3("p", { class: "text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2", children: [
          t4("technique.label"),
          " \xB7 ",
          data.name
        ] }),
        /* @__PURE__ */ u3("ol", { class: "space-y-2", children: data.steps.map((s4, i4) => /* @__PURE__ */ u3("li", { class: "flex gap-2 text-sm text-indigo-900 leading-snug", children: [
          /* @__PURE__ */ u3("span", { class: "font-black text-indigo-400 shrink-0", children: [
            i4 + 1,
            "."
          ] }),
          /* @__PURE__ */ u3("span", { children: s4 })
        ] }, `${data.name}-${s4}`)) })
      ] })
    ] });
  }
  function CopyButton({ text, t: t4 }) {
    const [copied, setCopied] = d2(false);
    if (typeof navigator === "undefined" || !navigator.clipboard) return null;
    return /* @__PURE__ */ u3(
      "button",
      {
        id: "copy-response-btn",
        type: "button",
        class: "flex items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors text-[11px] font-bold",
        "aria-label": t4("copyButton"),
        onClick: async () => {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 2e3);
        },
        children: [
          /* @__PURE__ */ u3("svg", { class: "w-3.5 h-3.5", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ u3("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" }) }),
          /* @__PURE__ */ u3("span", { id: "copy-response-label", children: copied ? t4("copiedFeedback") : t4("copyButton") })
        ]
      }
    );
  }
  function ModalContent({ e: e4, t: t4, getDisplayName, getEmotionField, relaciones, emociones: emociones2, onShowDetail }) {
    const quoteTextColor = getReadableTextColor(e4.color);
    const quoteLabelColor = quoteTextColor === "#f8fafc" ? "rgba(248,250,252,0.9)" : "rgba(15,23,42,0.85)";
    const lang = get("currentLang") || "es";
    const maskedEmotions = filterMaskedEmotions(relaciones, e4.nombre, emociones2);
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("div", { class: "inline-block px-4 py-1 rounded-full mb-2", style: `background-color:${e4.color}; color:${quoteTextColor}`, children: /* @__PURE__ */ u3("span", { class: "text-xs font-black uppercase tracking-widest", children: t4("emotionTag") }) }),
      /* @__PURE__ */ u3("h2", { id: "modal-emotion-title", class: "text-4xl font-black mb-6 text-slate-800", children: getDisplayName(e4.nombre) }),
      /* @__PURE__ */ u3("div", { class: "space-y-6", children: [
        /* @__PURE__ */ u3("div", { class: "grid grid-cols-1 gap-4", children: [
          { labelKey: "feelLabel", field: "siente" },
          { labelKey: "triggerLabel", field: "dispara" },
          { labelKey: "functionLabel", field: "funcion" }
        ].map(({ labelKey, field }) => /* @__PURE__ */ u3("div", { class: "bg-slate-50 p-4 rounded-2xl", children: [
          /* @__PURE__ */ u3("p", { class: "text-[11px] font-black text-slate-500 uppercase tracking-widest mb-1", children: t4(labelKey) }),
          /* @__PURE__ */ u3("p", { class: "text-slate-700 leading-relaxed font-medium", children: getEmotionField(e4, field) })
        ] }, field)) }),
        /* @__PURE__ */ u3(
          "div",
          {
            class: "relative p-6 rounded-3xl overflow-hidden shadow-lg",
            style: `background-color:${e4.color}; color:${quoteTextColor}`,
            children: [
              /* @__PURE__ */ u3("svg", { class: "absolute -top-2 -left-2 text-black/10 w-16 h-16", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ u3("path", { d: "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" }) }),
              /* @__PURE__ */ u3("p", { class: "text-[11px] font-black uppercase tracking-widest mb-2", style: `color:${quoteLabelColor}`, children: t4("messageLabel") }),
              /* @__PURE__ */ u3(
                "p",
                {
                  class: "text-[1.45rem] sm:text-[1.65rem] font-serif italic leading-[1.35] sm:leading-snug",
                  style: `color:${quoteTextColor}`,
                  children: [
                    '"',
                    getEmotionField(e4, "mensaje"),
                    '"'
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ u3("div", { children: [
          /* @__PURE__ */ u3("p", { class: "text-[11px] font-black text-amber-600 uppercase tracking-widest mb-2 px-1", children: t4("impulseLabel") }),
          /* @__PURE__ */ u3("div", { class: "bg-amber-50 border-2 border-amber-100 p-4 rounded-2xl", children: /* @__PURE__ */ u3("p", { class: "text-amber-900 font-bold leading-relaxed", children: getEmotionField(e4, "impulso") }) })
        ] }),
        /* @__PURE__ */ u3("div", { children: [
          /* @__PURE__ */ u3("div", { class: "flex items-center justify-between mb-2 px-1", children: [
            /* @__PURE__ */ u3("p", { class: "text-[11px] font-black text-slate-500 uppercase tracking-widest", children: t4("responseLabel") }),
            /* @__PURE__ */ u3(CopyButton, { text: getEmotionField(e4, "respuesta"), t: t4 })
          ] }),
          /* @__PURE__ */ u3("div", { class: "bg-emerald-50 border-2 border-emerald-100 p-4 rounded-2xl", children: /* @__PURE__ */ u3("p", { class: "text-emerald-900 font-bold leading-relaxed", children: getEmotionField(e4, "respuesta") }) })
        ] }),
        /* @__PURE__ */ u3(TechniqueSection, { emotionNombre: e4.nombre, t: t4, lang }),
        maskedEmotions.length > 0 && /* @__PURE__ */ u3("div", { class: "border-t border-slate-100 pt-4", children: [
          /* @__PURE__ */ u3("p", { class: "text-[11px] font-black text-violet-500 uppercase tracking-widest mb-2 px-1", children: t4("map.relEnmascara") }),
          /* @__PURE__ */ u3("div", { class: "flex flex-wrap gap-2 mb-2", children: maskedEmotions.map((m4) => /* @__PURE__ */ u3(
            "button",
            {
              type: "button",
              class: "masked-chip px-3 py-1.5 rounded-full text-sm font-bold transition-opacity hover:opacity-80",
              style: `background-color:${m4.color}; color:${getReadableTextColor(m4.color)}`,
              onClick: () => onShowDetail(m4),
              children: getDisplayName(m4.nombre)
            },
            m4.nombre
          )) }),
          /* @__PURE__ */ u3("p", { class: "text-xs text-slate-400 px-1", children: t4("masksHint") })
        ] })
      ] })
    ] });
  }
  function createUI({
    emociones: emociones2,
    relaciones = [],
    getDisplayName,
    getEmotionField,
    t: t4,
    modalAnimationMs: modalAnimationMs2,
    moodCategories = []
  }) {
    let scrollCleanup = null;
    let activeCheckinCat = null;
    let searchDebounceId = null;
    on("emotion:select", ({ nombre }) => {
      const e4 = emociones2.find((em) => em.nombre === nombre);
      if (e4) showDetail(e4);
    });
    function saveRecentEmotion(nombre) {
      const existing = getRecentEmotions().filter((item) => item !== nombre);
      const next = [nombre, ...existing].slice(0, RECENT_LIMIT);
      setRecentEmotions(next);
      renderRecentEmotions();
    }
    function renderRecentEmotions() {
      const section = document.getElementById("recent-section");
      const grid = document.getElementById("recent-grid");
      const recents = getRecentEmotions();
      if (!recents.length) {
        if (section) section.classList.add("hidden");
        if (grid) R(null, grid);
        return;
      }
      if (section) section.classList.remove("hidden");
      if (!grid) return;
      const items = recents.map((nombre) => emociones2.find((e4) => e4.nombre === nombre)).filter(Boolean);
      R(
        /* @__PURE__ */ u3(S, { children: items.map((emotion) => {
          const displayName = getDisplayName(emotion.nombre);
          return /* @__PURE__ */ u3(
            "button",
            {
              type: "button",
              class: "emotion-card recent-emotion-card shrink-0 w-20 h-20 rounded-full shadow-sm flex items-center justify-center text-center px-2 text-[11px] font-bold leading-tight text-slate-700",
              style: `--ec:${emotion.color}`,
              "aria-label": `${t4("openEmotionAria")} ${displayName}`,
              title: displayName,
              onClick: (ev) => {
                set("lastFocusedCard", ev.currentTarget);
                showDetail(emotion);
              },
              children: /* @__PURE__ */ u3("span", { children: shortRecentLabel(displayName) })
            },
            emotion.nombre
          );
        }) }),
        grid
      );
    }
    function renderEmociones(filter = "") {
      const grid = document.getElementById("emotion-grid");
      if (!grid) return;
      const visible = filterEmotions(emociones2, filter, getDisplayName, getEmotionField);
      R(
        /* @__PURE__ */ u3(S, { children: [
          visible.map((e4) => /* @__PURE__ */ u3(
            EmotionCard,
            {
              e: e4,
              getDisplayName,
              t: t4,
              onSelect: (emotion, el) => {
                set("lastFocusedCard", el);
                showDetail(emotion);
              }
            },
            e4.nombre
          )),
          !visible.length && /* @__PURE__ */ u3("div", { class: "search-empty-state bg-white rounded-2xl p-5 text-center shadow-sm border border-slate-200", children: [
            /* @__PURE__ */ u3("p", { class: "text-slate-700 font-bold mb-1", children: t4("emptyTitle") }),
            /* @__PURE__ */ u3("p", { class: "text-slate-500 text-sm", children: t4("emptyHint") })
          ] })
        ] }),
        grid
      );
    }
    function renderCheckinTab() {
      const grid = document.getElementById("checkin-cards-grid");
      if (!grid || !moodCategories.length) return;
      R(
        /* @__PURE__ */ u3(S, { children: moodCategories.map((cat) => /* @__PURE__ */ u3(
          CheckinCard,
          {
            cat,
            t: t4,
            onClick: () => renderCheckinEmotions(cat.key)
          },
          cat.key
        )) }),
        grid
      );
      if (activeCheckinCat) renderCheckinEmotions(activeCheckinCat);
    }
    function renderCheckinEmotions(catKey) {
      const cat = moodCategories.find((c4) => c4.key === catKey);
      if (!cat) return;
      activeCheckinCat = catKey;
      const section = document.getElementById("checkin-emotion-section");
      const label = document.getElementById("checkin-selected-label");
      const filteredGrid = document.getElementById("checkin-filtered-grid");
      const resetBtn = document.getElementById("checkin-reset-btn");
      if (!section || !filteredGrid) return;
      section.classList.remove("hidden");
      if (label) label.textContent = `${cat.emoji} ${t4(cat.labelKey)}`;
      const filtered = emociones2.filter((em) => cat.emotions.includes(em.nombre));
      R(
        /* @__PURE__ */ u3(S, { children: filtered.map((e4) => /* @__PURE__ */ u3(
          EmotionCard,
          {
            e: e4,
            getDisplayName,
            t: t4,
            onSelect: (emotion, el) => {
              set("lastFocusedCard", el);
              showDetail(emotion);
            }
          },
          e4.nombre
        )) }),
        filteredGrid
      );
      if (resetBtn) {
        resetBtn.textContent = t4("checkin.reset");
        resetBtn.onclick = () => {
          activeCheckinCat = null;
          section.classList.add("hidden");
        };
      }
      section.scrollIntoView({ behavior: "smooth", block: "nearest" });
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
            <label for="diary-note-input" class="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2 block">${t4("diary.noteLabel")}</label>
            <textarea id="diary-note-input" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-200" rows="2" placeholder="${t4("diary.notePlaceholder")}"></textarea>
            <div class="flex gap-2 mt-2">
                <button id="diary-note-save" type="button" class="flex-1 bg-slate-800 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-slate-700 transition-colors">${t4("diary.saveButton")}</button>
                <button id="diary-note-cancel" type="button" class="flex-1 bg-slate-100 text-slate-600 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors">${t4("diary.cancelButton")}</button>
            </div>
        `;
      const panel = document.getElementById("modal-panel");
      if (!panel) return;
      panel.appendChild(form);
      form.querySelector("#diary-note-input").focus();
      panel.scrollTop = panel.scrollHeight;
      form.querySelector("#diary-note-save").addEventListener("click", () => {
        const note = form.querySelector("#diary-note-input").value;
        emit("diary:add", { nombre: emotionNombre, note });
        form.innerHTML = `<p class="text-emerald-600 font-bold text-sm text-center py-2">\u2713 ${t4("diary.addedFeedback")}</p>`;
        setTimeout(() => form.remove(), 1800);
      });
      form.querySelector("#diary-note-cancel").addEventListener("click", () => form.remove());
    }
    function showDetail(e4) {
      document.getElementById("diary-inline-form")?.remove();
      const content = document.getElementById("modal-content");
      if (!content) return;
      R(
        /* @__PURE__ */ u3(
          ModalContent,
          {
            e: e4,
            t: t4,
            getDisplayName,
            getEmotionField,
            relaciones,
            emociones: emociones2,
            onShowDetail: showDetail
          }
        ),
        content
      );
      const modal = document.getElementById("modal");
      const panel = document.getElementById("modal-panel");
      if (!modal || !panel) return;
      if (!modal.open) modal.showModal();
      panel.scrollTop = 0;
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => {
        panel.classList.remove("translate-y-8", "sm:scale-95", "opacity-0");
      });
      saveRecentEmotion(e4.nombre);
      const shareBtn = document.getElementById("share-btn");
      if (shareBtn) {
        shareBtn.onclick = async () => {
          const canvas = await buildEmotionCanvas(
            e4,
            getDisplayName(e4.nombre),
            t4("emotionTag"),
            getEmotionField(e4, "mensaje"),
            t4("responseLabel"),
            getEmotionField(e4, "respuesta")
          );
          shareEmotionCard(canvas, getDisplayName(e4.nombre));
        };
      }
      const diaryAddBtn = document.getElementById("diary-add-btn");
      if (diaryAddBtn) {
        diaryAddBtn.onclick = () => showDiaryForm(e4.nombre);
      }
      const closeButton = document.getElementById("close-button");
      if (closeButton) closeButton.focus({ preventScroll: true });
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
      if (!modal?.open || !panel || get("isClosingModal")) return;
      set("isClosingModal", true);
      panel.classList.add("translate-y-8", "sm:scale-95", "opacity-0");
      if (scrollCleanup) {
        scrollCleanup();
        scrollCleanup = null;
      }
      setTimeout(() => {
        modal.close();
        set("isClosingModal", false);
      }, modalAnimationMs2);
      document.body.style.overflow = "auto";
      const lastFocusedCard = get("lastFocusedCard");
      if (lastFocusedCard) lastFocusedCard.focus();
    }
    function bindBaseEvents() {
      const modal = document.getElementById("modal");
      const modalBackdrop = document.getElementById("modal-backdrop");
      const closeButton = document.getElementById("close-button");
      const search = document.getElementById("search");
      modalBackdrop?.addEventListener("click", (event) => {
        if (event.target === modalBackdrop) closeModal();
      });
      modal?.addEventListener("cancel", (event) => {
        event.preventDefault();
        closeModal();
      });
      closeButton?.addEventListener("click", closeModal);
      search?.addEventListener("input", (event) => {
        const target = (
          /** @type {HTMLInputElement} */
          event.target
        );
        if (searchDebounceId) clearTimeout(searchDebounceId);
        searchDebounceId = setTimeout(() => renderEmociones(target.value), 120);
      });
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

  // js/bodyMap.jsx
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
  function bodyPartStr(part, attrs) {
    const a4 = Object.entries(attrs).map(([k4, v4]) => `${k4}="${v4}"`).join(" ");
    if (part.tag === "ellipse") return `<ellipse cx="${part.cx}" cy="${part.cy}" rx="${part.rx}" ry="${part.ry}" ${a4}/>`;
    if (part.tag === "path") return `<path d="${part.d}" ${a4}/>`;
    return "";
  }
  function getZoneEmotionNames(zoneId, mode) {
    const groups = (
      /** @type {Record<string, string[]>} */
      SIMPLE_ZONE_GROUPS
    );
    const emotions = (
      /** @type {Record<string, string[]>} */
      BODY_ZONE_EMOTIONS
    );
    const detailZones = mode === "simple" ? groups[zoneId] || [zoneId] : [zoneId];
    const names = /* @__PURE__ */ new Set(
      /** @type {string[]} */
      []
    );
    for (const dz of detailZones) for (const n3 of emotions[dz] || []) names.add(n3);
    return names;
  }
  function buildSvgInner(zones, rects, selectedZones, lineColor, bodyFill, t4) {
    const clipShapes = BODY_PARTS.map((p4) => bodyPartStr(p4, { fill: "white" })).join("");
    const zoneRects = zones.map((zone) => {
      const on3 = selectedZones.has(zone.id);
      const fill = on3 ? zone.color + "66" : zone.color + "33";
      const strk = on3 ? zone.color : zone.color + "66";
      const sw = on3 ? "1.5" : "0.75";
      return (rects[zone.id] || []).map(
        (r4) => `<rect x="${r4.x}" y="${r4.y}" width="${r4.w}" height="${r4.h}" data-zone="${zone.id}" fill="${fill}" stroke="${strk}" stroke-width="${sw}" cursor="pointer" class="zone-hit"/>`
      ).join("");
    }).join("");
    const zoneLabels = zones.filter((z4) => selectedZones.has(z4.id) && z4.id !== "arms").map((z4) => {
      const r4 = (rects[z4.id] || [])[0];
      if (!r4) return "";
      const lx = r4.x + r4.w / 2;
      const ly = r4.y + r4.h / 2 + 4;
      return `<text x="${lx}" y="${ly}" text-anchor="middle" font-size="7.5" font-weight="700" fill="${z4.color}" pointer-events="none" opacity="0.9">${t4(z4.labelKey)}</text>`;
    }).join("");
    const bodyOutline = BODY_PARTS.map((p4) => bodyPartStr(p4, {
      fill: bodyFill,
      "fill-opacity": "0.35",
      stroke: lineColor,
      "stroke-width": "1.5",
      "stroke-linejoin": "round",
      "pointer-events": "none"
    })).join("");
    const divider = `<line x1="29" y1="100" x2="71" y2="100" stroke="${lineColor}" stroke-dasharray="3,2" opacity="0.35" pointer-events="none"/>`;
    return [
      `<defs><clipPath id="body-clip">${clipShapes}</clipPath></defs>`,
      `<g clip-path="url(#body-clip)">${zoneRects}${zoneLabels}${divider}</g>`,
      `<g>${bodyOutline}</g>`
    ].join("");
  }
  function ZoneChips({ zones, selectedZones, t: t4, onRemove }) {
    const selected = zones.filter((z4) => selectedZones.has(z4.id));
    return /* @__PURE__ */ u3("div", { class: "flex flex-wrap gap-1.5 mb-4 min-h-[28px]", children: selected.map((z4) => /* @__PURE__ */ u3(
      "span",
      {
        class: "inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full text-white",
        style: `background:${z4.color}`,
        children: [
          t4(z4.labelKey),
          /* @__PURE__ */ u3(
            "button",
            {
              type: "button",
              "aria-label": `Quitar ${t4(z4.labelKey)}`,
              class: "opacity-80 hover:opacity-100 leading-none",
              onClick: (ev) => {
                ev.stopPropagation();
                onRemove(z4.id);
              },
              children: /* @__PURE__ */ u3("svg", { class: "w-3 h-3", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ u3("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }) })
            }
          )
        ]
      },
      z4.id
    )) });
  }
  function ResultSection({ matching, selectedZones, dark, t: t4, getDisplayName, onSelect, onDismiss }) {
    const emptyC = dark ? "text-slate-500" : "text-slate-400";
    if (selectedZones.size === 0) {
      return /* @__PURE__ */ u3("p", { class: `text-sm text-center ${emptyC} py-3 px-2`, children: t4("body.tapPrompt") });
    }
    if (matching.length === 0) {
      return /* @__PURE__ */ u3("p", { class: `text-sm text-center ${emptyC} py-3 px-2`, children: t4("body.noMatch") });
    }
    const titleC = dark ? "text-slate-300" : "text-slate-500";
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("p", { class: `text-[11px] font-black ${titleC} uppercase tracking-widest mb-3`, children: t4("body.resultTitle") }),
      /* @__PURE__ */ u3("div", { class: "space-y-2", children: matching.map((e4) => /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          class: "w-full text-left px-4 py-3 rounded-2xl flex items-center gap-3 transition-all hover:shadow-md",
          style: `background:${e4.color}25; border-left:5px solid ${e4.color}`,
          onClick: () => {
            onDismiss();
            onSelect(e4);
          },
          children: [
            /* @__PURE__ */ u3("span", { class: "font-bold text-sm", style: `color:${e4.text}`, children: getDisplayName(e4.nombre) }),
            /* @__PURE__ */ u3("span", { class: "ml-auto text-xs font-bold opacity-60 shrink-0", style: `color:${e4.text}`, children: "Ver \u2192" })
          ]
        },
        e4.nombre
      )) })
    ] });
  }
  function BodyMapPanel({
    t: t4,
    dark,
    zones,
    rects,
    selectedZones,
    mode,
    matching,
    lineColor,
    bodyFill,
    getDisplayName,
    onClose,
    onModeChange,
    onZoneClick,
    onRemoveZone,
    onClear,
    onSwitchToQuiz,
    onDismiss,
    onSelectEmotion
  }) {
    const activeC = dark ? "bg-slate-600 text-slate-100" : "bg-slate-800 text-white";
    const inactiveC = dark ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600";
    const clearBtnC = dark ? "bg-slate-800 text-slate-300 hover:bg-slate-700" : "bg-slate-100 text-slate-500 hover:bg-slate-200";
    const toQuizC = dark ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600";
    const headerC = dark ? "text-slate-100" : "text-slate-800";
    const closeRingC = dark ? "bg-slate-700 text-slate-400 hover:bg-slate-600" : "bg-slate-100 text-slate-500 hover:bg-slate-200";
    const toggleBgC = dark ? "bg-slate-800" : "bg-slate-100";
    const svgInner = buildSvgInner(zones, rects, selectedZones, lineColor, bodyFill, t4);
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("div", { class: "flex items-center justify-between mb-5", children: [
        /* @__PURE__ */ u3("h2", { class: `text-xl font-black ${headerC}`, children: t4("body.mapTitle") }),
        /* @__PURE__ */ u3(
          "button",
          {
            type: "button",
            "aria-label": "Cerrar",
            onClick: onClose,
            class: `w-8 h-8 flex items-center justify-center rounded-full ${closeRingC} transition-colors`,
            children: /* @__PURE__ */ u3("svg", { class: "w-4 h-4", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ u3("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }) })
          }
        )
      ] }),
      /* @__PURE__ */ u3("div", { class: `flex gap-1 mb-4 p-1 rounded-xl ${toggleBgC}`, children: [
        /* @__PURE__ */ u3(
          "button",
          {
            type: "button",
            onClick: () => onModeChange("simple"),
            class: `flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${mode === "simple" ? activeC : inactiveC}`,
            children: t4("body.modeSimple")
          }
        ),
        /* @__PURE__ */ u3(
          "button",
          {
            type: "button",
            onClick: () => onModeChange("detailed"),
            class: `flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${mode === "detailed" ? activeC : inactiveC}`,
            children: t4("body.modeDetailed")
          }
        )
      ] }),
      /* @__PURE__ */ u3("div", { class: "flex justify-center mb-4", children: /* @__PURE__ */ u3(
        "svg",
        {
          id: "body-svg",
          viewBox: "0 0 100 200",
          style: "width:130px;height:auto;touch-action:manipulation",
          role: "img",
          "aria-label": t4("body.mapTitle"),
          onClick: onZoneClick,
          dangerouslySetInnerHTML: { __html: svgInner }
        }
      ) }),
      /* @__PURE__ */ u3(ZoneChips, { zones, selectedZones, t: t4, onRemove: onRemoveZone }),
      /* @__PURE__ */ u3(
        ResultSection,
        {
          matching,
          selectedZones,
          dark,
          t: t4,
          getDisplayName,
          onSelect: onSelectEmotion,
          onDismiss
        }
      ),
      selectedZones.size > 0 && /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          onClick: onClear,
          class: `mt-4 w-full py-2.5 rounded-2xl text-sm font-bold transition-colors ${clearBtnC}`,
          children: t4("body.clear")
        }
      ),
      /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          onClick: onSwitchToQuiz,
          class: `mt-2 w-full py-2.5 text-sm font-medium transition-colors ${toQuizC}`,
          children: [
            "\u2190 ",
            t4("quiz.tabQuestions")
          ]
        }
      )
    ] });
  }
  function createBodyMap({ emociones: emociones2, getDisplayName, t: t4, onDismiss, onSwitchToQuiz }) {
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
      return emociones2.filter((e4) => counts.has(e4.nombre)).sort((a4, b3) => counts.get(b3.nombre) - counts.get(a4.nombre) || a4.nombre.localeCompare(b3.nombre));
    }
    function render_() {
      const content = document.getElementById("quiz-content");
      if (!content) return;
      const dark = isDarkMode();
      const zones = (
        /** @type {BodyZone[]} */
        /** @type {any} */
        BODY_ZONES[mode]
      );
      const rects = (
        /** @type {Record<string, ZoneRect[]>} */
        /** @type {any} */
        ZONE_RECTS[mode]
      );
      const lineColor = dark ? "#64748b" : "#94a3b8";
      const bodyFill = dark ? "#0f172a" : "#f8fafc";
      R(
        /* @__PURE__ */ u3(
          BodyMapPanel,
          {
            t: t4,
            dark,
            zones,
            rects,
            selectedZones,
            mode,
            matching: getMatchingEmotions(),
            lineColor,
            bodyFill,
            getDisplayName,
            onClose: onDismiss,
            onModeChange: (newMode) => {
              if (mode === newMode) return;
              mode = newMode;
              selectedZones = /* @__PURE__ */ new Set();
              render_();
            },
            onZoneClick: (ev) => {
              const hit = (
                /** @type {HTMLElement | null} */
                /** @type {Element | null} */
                ev.target?.closest(".zone-hit")
              );
              if (!hit) return;
              const zoneId = hit.dataset.zone;
              if (selectedZones.has(zoneId)) selectedZones.delete(zoneId);
              else selectedZones.add(zoneId);
              render_();
            },
            onRemoveZone: (zoneId) => {
              selectedZones.delete(zoneId);
              render_();
            },
            onClear: () => {
              selectedZones = /* @__PURE__ */ new Set();
              render_();
            },
            onSwitchToQuiz: () => {
              if (onSwitchToQuiz) onSwitchToQuiz();
            },
            onDismiss,
            onSelectEmotion: (e4) => emit("emotion:select", { nombre: e4.nombre })
          }
        ),
        content
      );
    }
    return { render: render_ };
  }

  // js/quiz.jsx
  var QUIZ_STEPS = {
    q1: {
      textKey: "quiz.q1",
      options: [
        { labelKey: "quiz.q1a", next: "q2_high" },
        { labelKey: "quiz.q1b", next: "q2_low" }
      ]
    },
    q2_high: {
      textKey: "quiz.q2",
      options: [
        { labelKey: "quiz.q2a", result: ["Entusiasmo", "Alegr\xEDa", "Orgullo"] },
        { labelKey: "quiz.q2b", next: "q3_high_bad" }
      ]
    },
    q2_low: {
      textKey: "quiz.q2",
      options: [
        { labelKey: "quiz.q2a", result: ["Calma", "Felicidad", "Placer", "Gratitud", "Alivio", "Ternura"] },
        { labelKey: "quiz.q2b", next: "q3_low_bad" }
      ]
    },
    q3_high_bad: {
      textKey: "quiz.q3",
      options: [
        { labelKey: "quiz.q3a", result: ["Enojo", "Frustraci\xF3n", "Miedo", "Celos", "Envidia", "Disgusto"] },
        { labelKey: "quiz.q3b", result: ["Ansiedad", "Preocupaci\xF3n", "Irritabilidad"] }
      ]
    },
    q3_low_bad: {
      textKey: "quiz.q3",
      options: [
        { labelKey: "quiz.q3a", result: ["Tristeza", "Verg\xFCenza", "Rechazo", "Culpa", "Decepci\xF3n"] },
        { labelKey: "quiz.q3b", result: ["Soledad", "Angustia", "Confusi\xF3n", "Nostalgia", "Aburrimiento"] }
      ]
    }
  };
  var CloseX = () => /* @__PURE__ */ u3("svg", { class: "w-4 h-4", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ u3("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }) });
  function QuizHeader({ t: t4, dark, onDismiss }) {
    const titleC = dark ? "text-slate-100" : "text-slate-800";
    const closeC = dark ? "bg-slate-700 text-slate-400 hover:bg-slate-600" : "bg-slate-100 text-slate-500 hover:bg-slate-200";
    return /* @__PURE__ */ u3("div", { class: "flex items-center justify-between mb-8", children: [
      /* @__PURE__ */ u3("h2", { class: `text-xl font-black ${titleC}`, children: t4("quiz.title") }),
      /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          id: "quiz-close-btn",
          "aria-label": "Cerrar",
          onClick: onDismiss,
          class: `w-8 h-8 flex items-center justify-center rounded-full ${closeC} transition-colors`,
          children: /* @__PURE__ */ u3(CloseX, {})
        }
      )
    ] });
  }
  function QuizStep({ t: t4, dark, step, historyLen, onPickOption, onBack, onSwitchToBody }) {
    const questionC = dark ? "text-slate-100" : "text-slate-800";
    const optionC = dark ? "bg-slate-800 text-slate-200 border-slate-700 hover:border-blue-400" : "bg-white text-slate-700 border-transparent hover:border-blue-300";
    const backC = dark ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600";
    const toBodyC = dark ? "text-slate-300 border-slate-600 hover:border-slate-400 hover:bg-slate-800" : "text-slate-500 border-slate-300 hover:border-slate-400 hover:bg-slate-50";
    const inactiveDot = dark ? "bg-slate-700" : "bg-slate-200";
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("div", { class: "flex gap-2 mb-8", "aria-hidden": "true", children: [0, 1, 2].map((i4) => /* @__PURE__ */ u3("div", { class: `w-2 h-2 rounded-full transition-colors ${i4 <= historyLen ? "bg-blue-500" : inactiveDot}` }, i4)) }),
      /* @__PURE__ */ u3("p", { class: `text-2xl font-black ${questionC} leading-snug mb-8`, children: t4(step.textKey) }),
      /* @__PURE__ */ u3("div", { class: "space-y-3", children: step.options.map((opt) => /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          class: `quiz-option w-full text-left p-5 rounded-2xl shadow-sm border-2 hover:shadow-md transition-all font-medium ${optionC}`,
          onClick: () => onPickOption(opt),
          children: t4(opt.labelKey)
        },
        opt.labelKey
      )) }),
      historyLen > 0 ? /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          onClick: onBack,
          class: `mt-6 flex items-center gap-2 text-sm font-medium transition-colors ${backC}`,
          children: [
            /* @__PURE__ */ u3("svg", { class: "w-4 h-4", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ u3("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" }) }),
            t4("quiz.back")
          ]
        }
      ) : /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          onClick: onSwitchToBody,
          class: `mt-6 w-full py-3 text-sm font-semibold transition-colors border rounded-2xl ${toBodyC}`,
          children: [
            t4("quiz.tabBody"),
            " \u2192"
          ]
        }
      )
    ] });
  }
  function QuizResult({ t: t4, dark, emotions, getDisplayName, onRestart, onDismiss }) {
    const titleC = dark ? "text-slate-300" : "text-slate-500";
    const restartC = dark ? "bg-slate-800 text-slate-200 hover:bg-slate-700" : "bg-slate-100 text-slate-700 hover:bg-slate-200";
    const closeC = dark ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600";
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("p", { class: `text-[11px] font-black ${titleC} uppercase tracking-widest mb-4`, children: t4("quiz.resultTitle") }),
      /* @__PURE__ */ u3("div", { class: "space-y-3", children: emotions.map((e4) => /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          class: "quiz-result-card w-full text-left p-4 rounded-2xl flex items-center gap-4 hover:shadow-md transition-all",
          style: `border-left:6px solid ${e4.color}; background:${e4.color}${dark ? "22" : "15"}`,
          onClick: () => {
            onDismiss();
            emit("emotion:select", { nombre: e4.nombre });
          },
          children: [
            /* @__PURE__ */ u3("span", { class: "font-bold", style: `color:${e4.text}`, children: getDisplayName(e4.nombre) }),
            /* @__PURE__ */ u3("span", { class: "ml-auto text-xs font-bold opacity-70 shrink-0", style: `color:${e4.text}`, children: "Ver \u2192" })
          ]
        },
        e4.nombre
      )) }),
      /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          id: "quiz-restart-btn",
          onClick: onRestart,
          class: `mt-6 w-full py-3 font-bold rounded-2xl text-sm transition-colors ${restartC}`,
          children: t4("quiz.restart")
        }
      ),
      /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          id: "quiz-close-result-btn",
          onClick: () => {
            onDismiss();
            emit("tab:switch", { tabId: DEFAULT_TAB });
          },
          class: `mt-2 w-full py-3 text-sm font-medium transition-colors ${closeC}`,
          children: t4("quiz.close")
        }
      )
    ] });
  }
  function createQuiz({ emociones: emociones2, getDisplayName, t: t4 }) {
    let history = [];
    let currentStepKey = "q1";
    let showingResult = false;
    let resultEmotions = [];
    let contentEl = null;
    const dismiss = () => {
      document.getElementById("quiz-panel")?.close();
      document.getElementById("quiz-trigger")?.focus();
    };
    const bodyMap = createBodyMap({
      emociones: emociones2,
      getDisplayName,
      t: t4,
      onDismiss: dismiss,
      onSwitchToQuiz: () => {
        history = [];
        currentStepKey = "q1";
        showingResult = false;
        resultEmotions = [];
        rerender();
      }
    });
    function rerender() {
      if (!contentEl) return;
      const dark = isDarkMode();
      if (showingResult) {
        R(
          /* @__PURE__ */ u3("div", { children: [
            /* @__PURE__ */ u3(QuizHeader, { t: t4, dark, onDismiss: dismiss }),
            /* @__PURE__ */ u3(
              QuizResult,
              {
                t: t4,
                dark,
                emotions: resultEmotions,
                getDisplayName,
                onRestart: () => {
                  history = [];
                  currentStepKey = "q1";
                  showingResult = false;
                  resultEmotions = [];
                  rerender();
                },
                onDismiss: dismiss
              }
            )
          ] }),
          contentEl
        );
      } else {
        R(
          /* @__PURE__ */ u3("div", { children: [
            /* @__PURE__ */ u3(QuizHeader, { t: t4, dark, onDismiss: dismiss }),
            /* @__PURE__ */ u3(
              QuizStep,
              {
                t: t4,
                dark,
                step: (
                  /** @type {Record<string, QuizStepData>} */
                  QUIZ_STEPS[currentStepKey]
                ),
                historyLen: history.length,
                onPickOption: pickOption,
                onBack: () => {
                  currentStepKey = history.pop() ?? "q1";
                  rerender();
                },
                onSwitchToBody: () => bodyMap.render()
              }
            )
          ] }),
          contentEl
        );
      }
    }
    function pickOption(option) {
      if (option.result) {
        resultEmotions = /** @type {import('./data/emotions.js').Emotion[]} */
        option.result.map((nombre) => emociones2.find((e4) => e4.nombre === nombre)).filter(Boolean);
        showingResult = true;
      } else {
        history.push(currentStepKey);
        currentStepKey = option.next;
      }
      rerender();
    }
    const open = () => {
      history = [];
      currentStepKey = "q1";
      showingResult = false;
      resultEmotions = [];
      contentEl = document.getElementById("quiz-content");
      document.getElementById("quiz-panel")?.showModal();
      rerender();
    };
    const init = () => {
      const trigger = document.getElementById("quiz-trigger");
      const panel = document.getElementById("quiz-panel");
      if (!trigger || !panel) return;
      trigger.addEventListener("click", open);
      panel.addEventListener("cancel", (e4) => {
        e4.preventDefault();
        dismiss();
      });
    };
    return { init, open };
  }

  // js/diary.jsx
  function createDiaryEntry(emotionNombre, note = "", tags = []) {
    return {
      id: Date.now(),
      date: (/* @__PURE__ */ new Date()).toISOString(),
      emotion: emotionNombre,
      note: note.trim(),
      tags: tags.filter((tag) => DIARY_TAGS.includes(tag))
    };
  }
  function deleteDiaryEntryById(entries, id) {
    return entries.filter((e4) => e4.id !== id);
  }
  function loadEntries() {
    return getDiaryEntries();
  }
  function saveEntries(entries) {
    setDiaryEntries(entries);
  }
  function addEntryToStorage(emotionNombre, note = "", tags = []) {
    const entry = createDiaryEntry(emotionNombre, note, tags);
    saveEntries([entry, ...loadEntries()]);
    return entry;
  }
  function deleteEntryFromStorage(id) {
    saveEntries(deleteDiaryEntryById(loadEntries(), id));
  }
  function addEntry(emotionNombre, note = "", tags = []) {
    return addEntryToStorage(emotionNombre, note, tags);
  }
  function EmotionSearch({ emociones: emociones2, getDisplayName, t: t4, onSelect }) {
    const [query, setQuery] = d2("");
    const [open, setOpen] = d2(false);
    const [chosen, setChosen] = d2("");
    const norm = normalizeText(query.trim());
    const filtered = emociones2.filter((e4) => {
      if (!norm) return true;
      const name = normalizeText(getDisplayName(e4.nombre));
      return name.includes(norm) || normalizeText(e4.nombre).includes(norm);
    });
    function selectEmotion(nombre) {
      setChosen(nombre);
      setQuery(getDisplayName(nombre));
      setOpen(false);
      onSelect(nombre);
    }
    return /* @__PURE__ */ u3("div", { class: "relative mb-3", children: [
      /* @__PURE__ */ u3(
        "input",
        {
          type: "text",
          id: "diary-emotion-search",
          autocomplete: "off",
          placeholder: t4("diary.pickEmotion"),
          value: query,
          class: "w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-200",
          onFocus: () => {
            if (filtered.length) setOpen(true);
          },
          onInput: (ev) => {
            const val = ev.currentTarget.value;
            setQuery(val);
            setChosen("");
            onSelect("");
            setOpen(true);
            ev.currentTarget.classList.remove("ring-2", "ring-red-300");
          },
          onBlur: () => setTimeout(() => setOpen(false), 150),
          onKeyDown: (ev) => {
            if (ev.key === "Escape") {
              setOpen(false);
              ev.currentTarget.blur();
            }
            if (ev.key === "Enter") {
              ev.preventDefault();
              if (filtered.length) selectEmotion(filtered[0].nombre);
            }
          }
        }
      ),
      /* @__PURE__ */ u3("input", { type: "hidden", id: "diary-emotion-value", value: chosen }),
      open && filtered.length > 0 && /* @__PURE__ */ u3(
        "div",
        {
          id: "diary-emotion-dropdown",
          class: "absolute z-50 left-0 right-0 mt-1 bg-white rounded-xl shadow-lg border border-slate-200 hide-scroll",
          style: "max-height:11rem;overflow-y:auto",
          children: filtered.map((e4) => /* @__PURE__ */ u3(
            "button",
            {
              type: "button",
              class: "emotion-option w-full text-left px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2.5 transition-colors",
              onMouseDown: (ev) => {
                ev.preventDefault();
                selectEmotion(e4.nombre);
              },
              children: [
                /* @__PURE__ */ u3("span", { class: "w-2.5 h-2.5 rounded-full shrink-0", style: `background-color:${e4.color}` }),
                getDisplayName(e4.nombre)
              ]
            },
            e4.nombre
          ))
        }
      )
    ] });
  }
  function DiaryForm({ emociones: emociones2, getDisplayName, t: t4, onSave, onCancel }) {
    const [selectedEmotion, setSelectedEmotion] = d2("");
    const [selectedTags, setSelectedTags] = d2(
      /** @type {Set<string>} */
      /* @__PURE__ */ new Set()
    );
    function toggleTag(tag) {
      const next = new Set(selectedTags);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      setSelectedTags(next);
    }
    function handleSave() {
      if (!selectedEmotion) {
        const input = document.getElementById("diary-emotion-search");
        input?.focus();
        input?.classList.add("ring-2", "ring-red-300");
        return;
      }
      const note = (
        /** @type {HTMLTextAreaElement | null} */
        document.getElementById("diary-note-input")?.value ?? ""
      );
      onSave(selectedEmotion, note, [...selectedTags]);
    }
    return /* @__PURE__ */ u3("div", { id: "diary-add-form", class: "bg-white rounded-2xl p-4 shadow-sm mb-4 border-2 border-blue-100", children: [
      /* @__PURE__ */ u3("p", { class: "text-[11px] font-black text-slate-500 uppercase tracking-widest mb-3", children: t4("diary.newEntry") }),
      /* @__PURE__ */ u3(
        EmotionSearch,
        {
          emociones: emociones2,
          getDisplayName,
          t: t4,
          onSelect: setSelectedEmotion
        }
      ),
      /* @__PURE__ */ u3(
        "textarea",
        {
          id: "diary-note-input",
          rows: 2,
          placeholder: t4("diary.notePlaceholder"),
          class: "w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-200 mb-3"
        }
      ),
      /* @__PURE__ */ u3("div", { class: "mb-3", children: [
        /* @__PURE__ */ u3("p", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2", children: t4("diary.tagLabel") }),
        /* @__PURE__ */ u3("div", { class: "flex flex-wrap gap-1.5", children: DIARY_TAGS.map((tag) => {
          const active2 = selectedTags.has(tag);
          const label = t4(`diary.tag${tag.charAt(0).toUpperCase()}${tag.slice(1)}`);
          return /* @__PURE__ */ u3(
            "button",
            {
              type: "button",
              "data-tag": tag,
              class: `diary-tag-btn px-3 py-1 rounded-full text-[11px] font-bold transition-colors ${active2 ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`,
              onClick: () => toggleTag(tag),
              children: label
            },
            tag
          );
        }) })
      ] }),
      /* @__PURE__ */ u3("div", { class: "flex gap-2", children: [
        /* @__PURE__ */ u3(
          "button",
          {
            id: "diary-form-save",
            type: "button",
            onClick: handleSave,
            class: "flex-1 bg-slate-800 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-slate-700 transition-colors",
            children: t4("diary.saveButton")
          }
        ),
        /* @__PURE__ */ u3(
          "button",
          {
            id: "diary-form-cancel",
            type: "button",
            onClick: onCancel,
            class: "flex-1 bg-slate-100 text-slate-600 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors",
            children: t4("diary.cancelButton")
          }
        )
      ] })
    ] });
  }
  function EntryList({ entries, emociones: emociones2, getDisplayName, t: t4, formatDate, onDelete, onClearAll }) {
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("div", { class: "space-y-3", children: entries.map((entry) => {
        const emotion = emociones2.find((e4) => e4.nombre === entry.emotion);
        const displayName = emotion ? getDisplayName(entry.emotion) : entry.emotion;
        const color = emotion?.color ?? "#e2e8f0";
        const tags = entry.tags?.length ? entry.tags.map((tag) => {
          const label = t4(`diary.tag${tag.charAt(0).toUpperCase()}${tag.slice(1)}`);
          return /* @__PURE__ */ u3("span", { class: "px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold", children: label }, tag);
        }) : null;
        return /* @__PURE__ */ u3("div", { class: "bg-white rounded-2xl p-4 shadow-sm flex gap-3 items-start", children: [
          /* @__PURE__ */ u3("div", { class: "w-3 h-3 rounded-full mt-1 shrink-0", style: `background-color:${color}` }),
          /* @__PURE__ */ u3("div", { class: "flex-1 min-w-0", children: [
            /* @__PURE__ */ u3("div", { class: "flex items-center justify-between gap-2 mb-0.5", children: [
              /* @__PURE__ */ u3("span", { class: "font-bold text-slate-700 text-sm", children: displayName }),
              /* @__PURE__ */ u3("span", { class: "text-xs text-slate-400 shrink-0", children: formatDate(entry.date) })
            ] }),
            entry.note ? /* @__PURE__ */ u3("p", { class: "text-slate-500 text-sm leading-relaxed", children: entry.note }) : null,
            tags ? /* @__PURE__ */ u3("div", { class: "flex flex-wrap gap-1 mt-1.5", children: tags }) : null
          ] }),
          /* @__PURE__ */ u3(
            "button",
            {
              type: "button",
              "aria-label": t4("diary.deleteButton"),
              class: "diary-delete-btn text-slate-300 hover:text-red-400 transition-colors shrink-0",
              "data-id": String(entry.id),
              onClick: () => onDelete(entry.id),
              children: /* @__PURE__ */ u3("svg", { class: "w-4 h-4", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ u3("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }) })
            }
          )
        ] }, entry.id);
      }) }),
      entries.length > 1 && /* @__PURE__ */ u3(
        "button",
        {
          id: "diary-clear-btn",
          type: "button",
          onClick: onClearAll,
          class: "mt-5 w-full text-xs text-slate-400 hover:text-red-400 transition-colors py-2",
          children: t4("diary.clearAll")
        }
      )
    ] });
  }
  function EmptyState({ t: t4 }) {
    return /* @__PURE__ */ u3("div", { class: "text-center py-8 px-2", children: [
      /* @__PURE__ */ u3("p", { class: "text-slate-400 text-sm mb-5", children: t4("diary.emptyPrompt") }),
      /* @__PURE__ */ u3("div", { class: "flex flex-col gap-2 max-w-xs mx-auto", children: [
        /* @__PURE__ */ u3(
          "button",
          {
            id: "diary-empty-checkin",
            type: "button",
            class: "w-full bg-slate-800 text-white py-3 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-colors",
            onClick: () => emit("tab:switch", { tabId: "checkin" }),
            children: t4("diary.emptyAction1")
          }
        ),
        /* @__PURE__ */ u3(
          "button",
          {
            id: "diary-empty-quiz",
            type: "button",
            class: "w-full bg-slate-100 text-slate-700 py-3 rounded-2xl font-bold text-sm hover:bg-slate-200 transition-colors",
            onClick: () => emit("quiz:open"),
            children: t4("diary.emptyAction2")
          }
        )
      ] })
    ] });
  }
  function DiaryPanel({
    t: t4,
    getDisplayName,
    emociones: emociones2,
    showForm,
    onNewEntry,
    onSave,
    onCancel,
    onDelete,
    onClearAll,
    onExport
  }) {
    const entries = loadEntries();
    function formatDate(isoString) {
      const d4 = new Date(isoString);
      const now = /* @__PURE__ */ new Date();
      const time = d4.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      if (d4.toDateString() === now.toDateString()) return `${t4("diary.todayLabel")}, ${time}`;
      return `${d4.toLocaleDateString([], { day: "numeric", month: "short", year: "numeric" })} \xB7 ${time}`;
    }
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("div", { class: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ u3("h2", { id: "diary-title-heading", class: "text-xl font-black text-slate-800", children: t4("diary.title") }),
        /* @__PURE__ */ u3("div", { class: "flex items-center gap-2", children: [
          entries.length > 0 && /* @__PURE__ */ u3(
            "button",
            {
              id: "diary-export-btn",
              type: "button",
              onClick: onExport,
              class: "flex items-center gap-1.5 bg-slate-100 text-slate-600 text-xs font-bold px-3 py-2 rounded-xl hover:bg-slate-200 transition-colors",
              children: [
                /* @__PURE__ */ u3("svg", { class: "w-3.5 h-3.5", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ u3("path", { d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" }) }),
                t4("diary.exportButton")
              ]
            }
          ),
          /* @__PURE__ */ u3(
            "button",
            {
              id: "diary-new-btn",
              type: "button",
              onClick: onNewEntry,
              class: "flex items-center gap-1.5 bg-slate-800 text-white text-xs font-bold px-3 py-2 rounded-xl hover:bg-slate-700 transition-colors",
              children: [
                /* @__PURE__ */ u3("svg", { class: "w-3.5 h-3.5", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ u3("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }) }),
                t4("diary.newEntry")
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ u3("p", { class: "text-xs text-slate-400 mb-4 flex items-start gap-1.5", children: [
        /* @__PURE__ */ u3("svg", { class: "w-3.5 h-3.5 shrink-0 mt-0.5", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ u3("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" }) }),
        t4("diary.privacyNote")
      ] }),
      showForm && /* @__PURE__ */ u3(
        DiaryForm,
        {
          emociones: emociones2,
          getDisplayName,
          t: t4,
          onSave,
          onCancel
        }
      ),
      entries.length > 0 ? /* @__PURE__ */ u3(
        EntryList,
        {
          entries,
          emociones: emociones2,
          getDisplayName,
          t: t4,
          formatDate,
          onDelete,
          onClearAll
        }
      ) : /* @__PURE__ */ u3(EmptyState, { t: t4 })
    ] });
  }
  function createDiary({ t: t4, getDisplayName, emociones: emociones2 }) {
    let showForm = false;
    on("diary:add", ({ nombre, note }) => {
      addEntry(nombre, note);
      if (get("currentTab") === "diario") renderForTab();
    });
    function rerender() {
      const content = document.getElementById("diary-content");
      if (!content) return;
      R(
        /* @__PURE__ */ u3(
          DiaryPanel,
          {
            t: t4,
            getDisplayName,
            emociones: emociones2,
            showForm,
            onNewEntry: () => {
              showForm = !showForm;
              rerender();
              if (showForm) {
                setTimeout(() => document.getElementById("diary-emotion-search")?.focus(), 0);
              }
            },
            onSave: (emotionNombre, note, tags) => {
              addEntryToStorage(emotionNombre, note, tags);
              showForm = false;
              rerender();
            },
            onCancel: () => {
              showForm = false;
              rerender();
            },
            onDelete: (id) => {
              deleteEntryFromStorage(id);
              rerender();
            },
            onClearAll: () => {
              if (confirm(t4("diary.clearConfirm"))) {
                saveEntries([]);
                rerender();
              }
            },
            onExport: () => {
              const entries = loadEntries();
              const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
              const blob = new Blob([JSON.stringify(entries, null, 2)], { type: "application/json" });
              const url = URL.createObjectURL(blob);
              const a4 = document.createElement("a");
              a4.href = url;
              a4.download = `diario-emocional-${date}.json`;
              document.body.appendChild(a4);
              a4.click();
              a4.remove();
              setTimeout(() => URL.revokeObjectURL(url), 1e3);
            }
          }
        ),
        content
      );
    }
    function renderForTab() {
      showForm = false;
      rerender();
    }
    return { addEntry, renderForTab };
  }

  // js/emotionMap.logic.js
  var R2 = 18;
  var STEP = R2 * 2 + 8;
  var ROW_H = R2 * 2 + 22;
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
    coexiste: { color: "#6366f1", dash: "none", labelKey: "map.relCoexiste" },
    escala_a: { color: "#f97316", dash: "none", labelKey: "map.relEscalaA" },
    enmascara: { color: "#a855f7", dash: "3,3", labelKey: "map.relEnmascara" },
    opuesta: { color: "#14b8a6", dash: "6,3", labelKey: "map.relOpuesta" }
  };
  function makeRng(seed) {
    const buf = new Int32Array(1);
    buf[0] = Math.trunc(seed);
    return function() {
      buf[0] = Math.imul(buf[0], 1664525) + 1013904223;
      return (buf[0] >>> 0) / 4294967296;
    };
  }
  function applyRepulsion(nodes, k4) {
    for (let i4 = 0; i4 < nodes.length; i4++) {
      for (let j4 = i4 + 1; j4 < nodes.length; j4++) {
        let dx = nodes[i4].x - nodes[j4].x;
        let dy = nodes[i4].y - nodes[j4].y;
        if (!dx && !dy) dx = 0.01;
        const d4 = Math.hypot(dx, dy);
        const f5 = k4 * k4 / d4;
        nodes[i4].fx += dx / d4 * f5;
        nodes[i4].fy += dy / d4 * f5;
        nodes[j4].fx -= dx / d4 * f5;
        nodes[j4].fy -= dy / d4 * f5;
      }
    }
  }
  function runForce(nodes, edges, W2, H3) {
    const k4 = Math.sqrt(W2 * H3 / nodes.length) * 0.95;
    for (let it2 = 0; it2 < 500; it2++) {
      const temp = 35 * (1 - it2 / 500);
      for (const n3 of nodes) {
        n3.fx = 0;
        n3.fy = 0;
      }
      applyRepulsion(nodes, k4);
      for (const e4 of edges) {
        const a4 = nodes[e4.ai];
        const b3 = nodes[e4.bi];
        const dx = b3.x - a4.x;
        const dy = b3.y - a4.y;
        const d4 = Math.hypot(dx, dy) || 0.01;
        const f5 = d4 * d4 / k4 * 0.3;
        a4.fx += dx / d4 * f5;
        a4.fy += dy / d4 * f5;
        b3.fx -= dx / d4 * f5;
        b3.fy -= dy / d4 * f5;
      }
      for (const n3 of nodes) {
        const d4 = Math.hypot(n3.fx, n3.fy) || 0.01;
        n3.x = clamp(n3.x + n3.fx / d4 * Math.min(d4, temp), R2 + 28, W2 - R2 - 28);
        n3.y = clamp(n3.y + n3.fy / d4 * Math.min(d4, temp), R2 + 24, H3 - R2 - 28);
      }
    }
    resolveCollisions(nodes, W2, H3);
  }
  function clamp(v4, lo2, hi2) {
    return Math.min(Math.max(v4, lo2), hi2);
  }
  function resolveCollisions(nodes, W2, H3) {
    const minDist = R2 * 2 + 10;
    for (let pass = 0; pass < 12; pass++) {
      for (let i4 = 0; i4 < nodes.length; i4++) {
        for (let j4 = i4 + 1; j4 < nodes.length; j4++) {
          const dx = nodes[i4].x - nodes[j4].x;
          const dy = nodes[i4].y - nodes[j4].y;
          const d4 = Math.hypot(dx, dy) || 0.01;
          if (d4 < minDist) {
            const push = (minDist - d4) / 2;
            const ux = dx / d4;
            const uy = dy / d4;
            nodes[i4].x = clamp(nodes[i4].x + ux * push, R2 + 28, W2 - R2 - 28);
            nodes[i4].y = clamp(nodes[i4].y + uy * push, R2 + 24, H3 - R2 - 28);
            nodes[j4].x = clamp(nodes[j4].x - ux * push, R2 + 28, W2 - R2 - 28);
            nodes[j4].y = clamp(nodes[j4].y - uy * push, R2 + 24, H3 - R2 - 28);
          }
        }
      }
    }
  }
  function escHtml(value) {
    let safe;
    if (value === null || value === void 0) {
      safe = "";
    } else if (typeof value === "string" || typeof value === "number" || typeof value === "boolean" || typeof value === "bigint") {
      safe = String(value);
    } else {
      try {
        safe = JSON.stringify(value);
      } catch {
        safe = Object.prototype.toString.call(value);
      }
    }
    return safe.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  }
  function escAttr(value) {
    return escHtml(value).replaceAll('"', "&quot;").replaceAll("'", "&#39;");
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
    return EMOTION_RELATIONS.flatMap((r4) => {
      const ai2 = nameToIdx[r4.from];
      const bi2 = nameToIdx[r4.to];
      if (ai2 === void 0 || bi2 === void 0) {
        return [];
      }
      return [{ ai: ai2, bi: bi2, type: r4.type }];
    });
  }
  function buildForceData(emociones2, getDisplayName, W2, H3) {
    const rng = makeRng(48879);
    const nameToIdx = {};
    const nodes = emociones2.map((e4, idx) => {
      nameToIdx[e4.nombre] = idx;
      const ci2 = MOOD_CATEGORIES.findIndex((c4) => c4.emotions.includes(e4.nombre));
      const q3 = QUAD_MAP[Math.max(ci2, 0)];
      return {
        nombre: e4.nombre,
        label: getDisplayName(e4.nombre),
        color: e4.color,
        x: (q3 % 2 + 0.2 + rng() * 0.6) * (W2 / 2),
        y: (Math.floor(q3 / 2) + 0.2 + rng() * 0.6) * (H3 / 2),
        fx: 0,
        fy: 0
      };
    });
    const edges = buildEdges(nameToIdx);
    runForce(nodes, edges, W2, H3);
    return { nodes, edges, nameToIdx };
  }
  function buildQuadData(emociones2, getDisplayName, W2) {
    const QW = Math.floor(W2 / 2);
    const maxCols = Math.max(2, Math.floor((QW - PAD * 2 + 8) / STEP));
    let maxRowsTop = 0;
    let maxRowsBot = 0;
    MOOD_CATEGORIES.forEach((cat, ci2) => {
      const count = cat.emotions.filter((n3) => emociones2.find((e4) => e4.nombre === n3)).length;
      const rows = Math.ceil(count / maxCols);
      if (QUAD_MAP[ci2] < 2) maxRowsTop = Math.max(maxRowsTop, rows);
      else maxRowsBot = Math.max(maxRowsBot, rows);
    });
    const QH = QUAD_HDR + PAD + Math.max(maxRowsTop, 1) * ROW_H + R2 + 16;
    const H3 = QH * 2;
    const nameToIdx = {};
    const nodes = [];
    MOOD_CATEGORIES.forEach((cat, ci2) => {
      const q3 = QUAD_MAP[ci2];
      const ox = q3 % 2 * QW;
      const oy = Math.floor(q3 / 2) * QH;
      cat.emotions.forEach((nombre, pos) => {
        const e4 = emociones2.find((em) => em.nombre === nombre);
        if (!e4) return;
        nameToIdx[nombre] = nodes.length;
        nodes.push({
          nombre,
          label: getDisplayName(nombre),
          color: e4.color,
          x: ox + PAD + R2 + pos % maxCols * STEP,
          y: oy + QUAD_HDR + PAD + R2 + Math.floor(pos / maxCols) * ROW_H
        });
      });
    });
    return { nodes, edges: buildEdges(nameToIdx), nameToIdx, H: H3 };
  }
  function buildQuadrantFilter(catIdx, visibleEdges, nodes) {
    if (catIdx === null) return null;
    const cat = MOOD_CATEGORIES[catIdx];
    const nodeNames = new Set(nodes.map((n3) => n3.nombre));
    const inQuadrant = new Set(cat.emotions.filter((n3) => nodeNames.has(n3)));
    const neighbors = /* @__PURE__ */ new Set();
    for (const e4 of visibleEdges) {
      const aN = nodes[e4.ai].nombre;
      const bN = nodes[e4.bi].nombre;
      if (inQuadrant.has(aN) && !inQuadrant.has(bN)) neighbors.add(bN);
      if (inQuadrant.has(bN) && !inQuadrant.has(aN)) neighbors.add(aN);
    }
    return { inQuadrant, neighbors };
  }
  function calcNodeOpacity(n3, sel, isSel, isConn, quadrantFilter, normalizedFilter) {
    if (sel) return isSel || isConn ? 1 : 0;
    if (quadrantFilter) {
      if (quadrantFilter.inQuadrant.has(n3.nombre)) return 1;
      if (quadrantFilter.neighbors.has(n3.nombre)) return 0.45;
      return 0;
    }
    if (normalizedFilter) return normalizeText(n3.label).includes(normalizedFilter) ? 1 : 0.15;
    return 1;
  }
  function buildNeighborhoodData(selName, nodes, visibleEdges, W2, H3) {
    const neighborEdges = visibleEdges.filter(
      (e4) => nodes[e4.ai].nombre === selName || nodes[e4.bi].nombre === selName
    );
    const memberNames = new Set(neighborEdges.flatMap((e4) => [nodes[e4.ai].nombre, nodes[e4.bi].nombre]));
    memberNames.add(selName);
    const rng = makeRng(61453);
    const subNameToIdx = {};
    const subNodes = nodes.filter((n3) => memberNames.has(n3.nombre)).map((n3, i4) => {
      subNameToIdx[n3.nombre] = i4;
      return {
        nombre: n3.nombre,
        label: n3.label,
        color: n3.color,
        x: (0.15 + rng() * 0.7) * W2,
        y: (0.15 + rng() * 0.7) * H3,
        fx: 0,
        fy: 0
      };
    });
    const subEdges = neighborEdges.map((e4) => ({
      ai: subNameToIdx[nodes[e4.ai].nombre],
      bi: subNameToIdx[nodes[e4.bi].nombre],
      type: e4.type
    })).filter((e4) => e4.ai !== void 0 && e4.bi !== void 0);
    runForce(subNodes, subEdges, W2, H3);
    return { nodes: subNodes, edges: subEdges };
  }
  function buildSvgBody(nodes, edges, W2, H3, sel, view, { t: t4, activeTypes, activeQuadrant, nameFilter }) {
    const dark = document.documentElement.classList.contains("dark");
    const labelFill = dark ? "#cbd5e1" : "#1e293b";
    const visibleEdges = edges.filter((e4) => activeTypes.has(e4.type));
    const quadrantFilter = buildQuadrantFilter(activeQuadrant, visibleEdges, nodes);
    const connectedNames = sel ? new Set(
      visibleEdges.filter((e4) => nodes[e4.ai].nombre === sel || nodes[e4.bi].nombre === sel).flatMap((e4) => [nodes[e4.ai].nombre, nodes[e4.bi].nombre])
    ) : null;
    let bg = "";
    if (view === "quad") {
      const QW = W2 / 2;
      const QH = H3 / 2;
      MOOD_CATEGORIES.forEach((cat, ci2) => {
        const q3 = QUAD_MAP[ci2];
        const ox = q3 % 2 * QW;
        const oy = Math.floor(q3 / 2) * QH;
        const bgC = dark ? cat.ink + "28" : cat.color + "55";
        const hdC = dark ? cat.ink + "99" : cat.color + "cc";
        const htC = dark ? "#f1f5f9" : cat.ink;
        bg += `<rect x="${ox}" y="${oy}" width="${QW}" height="${QH}" fill="${bgC}"/>`;
        bg += `<rect x="${ox}" y="${oy}" width="${QW}" height="${QUAD_HDR}" fill="${hdC}"/>`;
        bg += `<text x="${ox + QW / 2}" y="${oy + 15}" text-anchor="middle" font-size="11" font-weight="700" fill="${htC}">${t4(cat.labelKey).toUpperCase()}</text>`;
      });
      const divC = dark ? "#334155" : "#94a3b8";
      bg += `<line x1="${W2 / 2}" y1="0" x2="${W2 / 2}" y2="${H3}" stroke="${divC}" stroke-width="1"/>`;
      bg += `<line x1="0" y1="${H3 / 2}" x2="${W2}" y2="${H3 / 2}" stroke="${divC}" stroke-width="1"/>`;
    }
    const normalizedFilter = nameFilter ? normalizeText(nameFilter) : "";
    const eStr = visibleEdges.map((e4) => {
      const a4 = nodes[e4.ai];
      const b3 = nodes[e4.bi];
      let op = 0.4;
      if (sel) {
        op = sel === a4.nombre || sel === b3.nombre ? 0.9 : 0;
      } else if (quadrantFilter) {
        const aIn = quadrantFilter.inQuadrant.has(a4.nombre);
        const bIn = quadrantFilter.inQuadrant.has(b3.nombre);
        if (!aIn && !bIn) op = 0;
        else if (aIn && bIn) op = 0.75;
        else op = 0.35;
      } else if (normalizedFilter) {
        const aMatch = normalizeText(a4.label).includes(normalizedFilter);
        const bMatch = normalizeText(b3.label).includes(normalizedFilter);
        op = aMatch || bMatch ? 0.3 : 0;
      }
      const rel = RELS[e4.type];
      return `<line x1="${Math.trunc(a4.x)}" y1="${Math.trunc(a4.y)}" x2="${Math.trunc(b3.x)}" y2="${Math.trunc(b3.y)}" stroke="${rel.color}" stroke-width="2.5" opacity="${op}" stroke-dasharray="${rel.dash}"/>`;
    }).join("");
    const nStr = nodes.map((n3) => {
      const isSel = sel === n3.nombre;
      const isConn = connectedNames ? connectedNames.has(n3.nombre) : true;
      const nodeOp = calcNodeOpacity(n3, sel, isSel, isConn, quadrantFilter, normalizedFilter);
      const hide = nodeOp === 0;
      const sc = isSel ? "#2563eb" : "none";
      const sw = isSel ? "3" : "0";
      const lbl = n3.label.length > 10 ? n3.label.slice(0, 9) + "\u2026" : n3.label;
      const cx = Math.trunc(n3.x);
      const cy = Math.trunc(n3.y);
      return `<g class="map-node" data-nombre="${escAttr(n3.nombre)}" tabindex="0" role="button" aria-label="${escAttr(n3.label)}" style="cursor:pointer" opacity="${nodeOp}" ${hide ? 'pointer-events="none"' : ""}>
            <title>${escHtml(n3.label)}</title>
            <circle cx="${cx}" cy="${cy}" r="${R2 + 6}" fill="transparent"/>
            <circle cx="${cx}" cy="${cy}" r="${R2}" fill="${n3.color}" stroke="${sc}" stroke-width="${sw}" pointer-events="none"/>
            <text x="${cx}" y="${Math.trunc(n3.y + R2 + 12)}" text-anchor="middle" font-size="11" font-weight="600" fill="${labelFill}" pointer-events="none">${escHtml(lbl)}</text>
        </g>`;
    }).join("");
    return `${bg}<g>${eStr}</g><g>${nStr}</g>`;
  }
  function hasNodeMatch(nodes, nameFilter, selected) {
    if (!nameFilter || selected !== null) return true;
    const norm = normalizeText(nameFilter);
    return nodes.some((n3) => normalizeText(n3.label).includes(norm));
  }
  function buildGroupedRelations(selected, nodes, edges) {
    if (!selected) return null;
    const myEdges = edges.filter((e4) => nodes[e4.ai]?.nombre === selected || nodes[e4.bi]?.nombre === selected);
    const grouped = {};
    for (const e4 of myEdges) {
      const other = nodes[e4.ai].nombre === selected ? nodes[e4.bi] : nodes[e4.ai];
      grouped[e4.type] = grouped[e4.type] || [];
      grouped[e4.type].push(other.label);
    }
    return grouped;
  }

  // js/emotionMap.view.jsx
  function SelectedInfoPanel({ selected, grouped, nodes, t: t4, dark, onOpenDetail, onClearSelection }) {
    if (!selected || !grouped) return null;
    const borderC = dark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100";
    const nameC = dark ? "text-slate-100" : "text-slate-800";
    return /* @__PURE__ */ u3("div", { id: "map-info-panel", class: `mt-3 rounded-2xl p-4 border ${borderC} shadow-sm`, children: [
      /* @__PURE__ */ u3("div", { class: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ u3("span", { class: `font-bold ${nameC}`, children: nodes.find((n3) => n3.nombre === selected)?.label ?? selected }),
        /* @__PURE__ */ u3("div", { class: "flex items-center gap-1", children: [
          /* @__PURE__ */ u3(
            "button",
            {
              id: "map-open-btn",
              onClick: onOpenDetail,
              class: "text-xs font-bold text-blue-500 hover:text-blue-600 px-2 py-1 rounded-lg transition-colors",
              children: t4("openChip")
            }
          ),
          /* @__PURE__ */ u3(
            "button",
            {
              id: "map-clear-btn",
              "aria-label": t4("map.clearSelection"),
              onClick: onClearSelection,
              class: "w-6 h-6 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors",
              children: /* @__PURE__ */ u3("svg", { class: "w-3.5 h-3.5", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ u3("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }) })
            }
          )
        ] })
      ] }),
      Object.keys(grouped).length > 0 ? /* @__PURE__ */ u3("ul", { class: "space-y-1.5", children: Object.entries(grouped).map(([type, names]) => {
        const rel = RELS[
          /** @type {RelationType} */
          type
        ];
        return /* @__PURE__ */ u3("li", { class: "flex items-start gap-2 text-sm leading-snug", children: [
          /* @__PURE__ */ u3("span", { class: "mt-1 shrink-0 inline-block w-2.5 h-2.5 rounded-full", style: `background:${rel.color}` }),
          /* @__PURE__ */ u3("span", { children: [
            /* @__PURE__ */ u3("strong", { class: dark ? "text-slate-300" : "text-slate-700", children: [
              t4(rel.labelKey),
              ":"
            ] }),
            " ",
            /* @__PURE__ */ u3("span", { class: dark ? "text-slate-400" : "text-slate-500", children: (names ?? []).join(", ") })
          ] })
        ] }, type);
      }) }) : /* @__PURE__ */ u3("p", { class: "text-xs text-slate-400", children: t4("map.infoNone") })
    ] });
  }
  function RelationLegend({ t: t4, dark, activeTypes, onRelTypeToggle }) {
    return /* @__PURE__ */ u3("ul", { class: "flex flex-wrap gap-x-3 gap-y-1 mb-2", "aria-label": t4("map.legendLabel"), children: Object.entries(RELS).map(([type, rel]) => {
      const relType = (
        /** @type {RelationType} */
        type
      );
      const on3 = activeTypes.has(relType);
      const dimLine = dark ? "#475569" : "#cbd5e1";
      const lineColor = on3 ? rel.color : dimLine;
      const onTextC = dark ? "text-slate-300" : "text-slate-600";
      const offTextC = dark ? "text-slate-600" : "text-slate-400";
      const onBgC = dark ? "bg-slate-700" : "bg-slate-100";
      return /* @__PURE__ */ u3("li", { children: /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          "data-rel-type": type,
          "aria-pressed": on3,
          class: `flex items-center gap-1 text-[11px] px-1.5 py-0.5 rounded-lg transition-colors ${on3 ? onTextC : offTextC} ${on3 ? onBgC : ""}`,
          onClick: () => onRelTypeToggle(relType),
          children: [
            /* @__PURE__ */ u3("svg", { width: "14", height: "6", "aria-hidden": "true", children: /* @__PURE__ */ u3("line", { x1: "0", y1: "3", x2: "14", y2: "3", stroke: lineColor, "stroke-width": "2", "stroke-dasharray": rel.dash }) }),
            t4(rel.labelKey)
          ]
        }
      ) }, type);
    }) });
  }
  function QuadrantFilters({ t: t4, activeC, inactiveC, effectiveQuadrant, onQuadrantChange }) {
    return /* @__PURE__ */ u3("ul", { class: "flex flex-wrap gap-1.5 mb-2", children: [
      /* @__PURE__ */ u3("li", { children: /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          "data-quad": "all",
          "aria-pressed": effectiveQuadrant === null,
          class: `text-[11px] font-bold px-2.5 py-0.5 rounded-full border transition-colors ${effectiveQuadrant === null ? activeC : inactiveC}`,
          onClick: () => onQuadrantChange(null),
          children: t4("map.filterAll")
        }
      ) }),
      MOOD_CATEGORIES.map((cat, i4) => {
        const isActive = effectiveQuadrant === i4;
        return /* @__PURE__ */ u3("li", { children: /* @__PURE__ */ u3(
          "button",
          {
            type: "button",
            "data-quad": String(i4),
            "aria-pressed": isActive,
            class: `text-[11px] font-bold px-2.5 py-0.5 rounded-full border transition-colors ${isActive ? "" : inactiveC}`,
            style: isActive ? `background-color:${cat.color};color:${cat.ink};border-color:${cat.color}` : "",
            onClick: () => onQuadrantChange(i4),
            children: t4(cat.labelKey)
          }
        ) }, cat.key);
      })
    ] });
  }
  function EmotionMapPanel({
    view,
    selected,
    nameFilter,
    activeTypes,
    activeQuadrant,
    nodes,
    edges,
    H: H3,
    W: W2,
    t: t4,
    dark,
    canvasBg,
    onGraphView,
    onQuadView,
    onRelTypeToggle,
    onQuadrantChange,
    onOpenDetail,
    onClearSelection,
    onSearch,
    svgEventHandler
  }) {
    const svgRef = A2(null);
    y2(() => {
      const svg = svgRef.current;
      if (!svg) return;
      const isNeighborhood = view === "graph" && selected !== null;
      let svgNodes;
      let svgEdges;
      let svgActiveQuadrant;
      if (isNeighborhood) {
        const hood = buildNeighborhoodData(
          selected,
          nodes,
          edges.filter((e4) => activeTypes.has(e4.type)),
          W2,
          H3
        );
        svgNodes = hood.nodes;
        svgEdges = hood.edges;
        svgActiveQuadrant = null;
      } else {
        svgNodes = nodes;
        svgEdges = edges;
        svgActiveQuadrant = activeQuadrant;
      }
      svg.innerHTML = buildSvgBody(svgNodes, svgEdges, W2, H3, selected, view, {
        t: t4,
        activeTypes,
        activeQuadrant: svgActiveQuadrant,
        nameFilter
      });
      svg.onclick = svgEventHandler.click;
      svg.onkeydown = svgEventHandler.keydown;
    });
    const activeC = dark ? "bg-slate-100 text-slate-900 border-slate-100" : "bg-slate-800 text-white border-slate-800";
    const inactiveC = dark ? "bg-slate-800 text-slate-400 border-slate-600" : "bg-white text-slate-500 border-slate-200";
    const effectiveQuadrant = view === "graph" && selected !== null ? null : activeQuadrant;
    const hasMatch = hasNodeMatch(nodes, nameFilter, selected);
    const grouped = buildGroupedRelations(selected, nodes, edges);
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("div", { class: "flex gap-2 mb-2", children: [
        /* @__PURE__ */ u3(
          "button",
          {
            id: "map-graph-btn",
            onClick: onGraphView,
            class: `flex-1 py-2 text-sm font-bold rounded-xl border transition-colors ${view === "graph" ? activeC : inactiveC}`,
            children: t4("map.viewGraph")
          }
        ),
        /* @__PURE__ */ u3(
          "button",
          {
            id: "map-quad-btn",
            onClick: onQuadView,
            class: `flex-1 py-2 text-sm font-bold rounded-xl border transition-colors ${view === "quad" ? activeC : inactiveC}`,
            children: t4("map.viewQuad")
          }
        )
      ] }),
      /* @__PURE__ */ u3(RelationLegend, { t: t4, dark, activeTypes, onRelTypeToggle }),
      /* @__PURE__ */ u3(
        QuadrantFilters,
        {
          t: t4,
          activeC,
          inactiveC,
          effectiveQuadrant,
          onQuadrantChange
        }
      ),
      /* @__PURE__ */ u3("div", { class: "relative mb-2", children: [
        /* @__PURE__ */ u3(
          "input",
          {
            id: "map-search",
            type: "text",
            autocomplete: "off",
            placeholder: t4("map.searchPlaceholder"),
            defaultValue: nameFilter,
            class: `w-full text-[13px] px-3 py-1.5 rounded-xl border transition-colors ${dark ? "bg-slate-800 border-slate-600 text-slate-200 placeholder:text-slate-500" : "bg-white border-slate-200 text-slate-700 placeholder:text-slate-400"}`,
            onInput: onSearch
          }
        ),
        /* @__PURE__ */ u3(
          "ul",
          {
            id: "map-suggestions",
            class: `absolute z-20 w-full mt-1 rounded-xl border shadow-lg max-h-48 overflow-y-auto hidden ${dark ? "bg-slate-800 border-slate-600" : "bg-white border-slate-200"}`
          }
        )
      ] }),
      /* @__PURE__ */ u3("p", { id: "map-hint", class: "text-[11px] text-slate-400 mb-1.5 px-0.5", children: selected ? t4("map.hintSelected") : t4("map.hint") }),
      /* @__PURE__ */ u3("div", { class: "rounded-2xl overflow-hidden", style: `background:${canvasBg}`, children: /* @__PURE__ */ u3("svg", { id: "map-svg", ref: svgRef, viewBox: `0 0 ${W2} ${H3}`, style: "width:100%;display:block;touch-action:pan-y", role: "img", "aria-label": t4("nav.mapa") }) }),
      /* @__PURE__ */ u3("p", { id: "map-empty", class: `${hasMatch ? "hidden" : ""} text-[13px] text-center text-slate-400 mt-4 py-2`, children: t4("map.searchEmpty") }),
      /* @__PURE__ */ u3(
        SelectedInfoPanel,
        {
          selected,
          grouped,
          nodes,
          t: t4,
          dark,
          onOpenDetail,
          onClearSelection
        }
      )
    ] });
  }

  // js/emotionMap.jsx
  function containerW() {
    return document.getElementById("map-content")?.clientWidth || 340;
  }
  function createEmotionMap({ emociones: emociones2, getDisplayName, t: t4 }) {
    let view = "graph";
    let selected = null;
    let nameFilter = "";
    let activeTypes = new Set(
      /** @type {RelationType[]} */
      Object.keys(RELS)
    );
    let activeQuadrant = null;
    let forceData = null;
    let quadData = null;
    let lastW = 0;
    let searchDebounce = null;
    function ensureData() {
      const W2 = containerW();
      if (!forceData || Math.abs(W2 - lastW) > 20) {
        lastW = W2;
        const gH = graphHeightFor(W2, emociones2.length, forceData?.edges.length ?? 35);
        forceData = { ...buildForceData(emociones2, getDisplayName, W2, gH), H: gH };
        quadData = null;
      }
      if (!quadData) {
        quadData = buildQuadData(emociones2, getDisplayName, containerW());
      }
    }
    function flushSearch() {
      render_();
      requestAnimationFrame(() => populateSuggestions(nameFilter));
    }
    function render_() {
      const wrap = document.getElementById("map-content");
      if (!wrap) return;
      ensureData();
      const currentData = view === "graph" ? forceData : quadData;
      if (!currentData) return;
      const { nodes, edges, H: H3 } = currentData;
      const W2 = containerW();
      const dark = document.documentElement.classList.contains("dark");
      const svgEventHandler = {
        click: (ev) => {
          const target = ev.target;
          if (!(target instanceof Element)) return;
          const node = target.closest(".map-node");
          if (!node) {
            selected = null;
            render_();
            return;
          }
          const nombre = (
            /** @type {HTMLElement} */
            node.dataset.nombre
          );
          selected = selected === nombre ? null : nombre;
          render_();
        },
        keydown: (ev) => {
          if (ev.key !== "Enter" && ev.key !== " ") return;
          const target = ev.target;
          if (!(target instanceof Element)) return;
          const node = target.closest(".map-node");
          if (!node) return;
          ev.preventDefault();
          const nombre = (
            /** @type {HTMLElement} */
            node.dataset.nombre
          );
          selected = selected === nombre ? null : nombre;
          render_();
        }
      };
      R(
        /* @__PURE__ */ u3(
          EmotionMapPanel,
          {
            view,
            selected,
            nameFilter,
            activeTypes,
            activeQuadrant,
            nodes,
            edges,
            H: H3,
            W: W2,
            t: t4,
            dark,
            canvasBg: dark ? "#0f172a" : "#f8fafc",
            onGraphView: () => {
              view = "graph";
              selected = null;
              render_();
            },
            onQuadView: () => {
              view = "quad";
              selected = null;
              render_();
            },
            onRelTypeToggle: (type) => {
              if (activeTypes.has(type)) activeTypes.delete(type);
              else activeTypes.add(type);
              render_();
            },
            onQuadrantChange: (q3) => {
              activeQuadrant = q3;
              selected = null;
              render_();
            },
            onOpenDetail: () => {
              if (selected) emit("emotion:select", { nombre: selected });
            },
            onClearSelection: () => {
              selected = null;
              nameFilter = "";
              render_();
            },
            onSearch: (ev) => {
              const target = (
                /** @type {HTMLInputElement} */
                ev.currentTarget ?? ev.target
              );
              nameFilter = target.value;
              selected = null;
              if (searchDebounce) globalThis.clearTimeout(searchDebounce);
              searchDebounce = globalThis.setTimeout(flushSearch, 120);
            },
            svgEventHandler
          }
        ),
        wrap
      );
      if (selected) {
        requestAnimationFrame(() => {
          document.getElementById("map-info-panel")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
      }
    }
    function populateSuggestions(value) {
      const wrap = document.getElementById("map-content");
      const suggestionsList = wrap?.querySelector("#map-suggestions");
      if (!suggestionsList) return;
      const norm = normalizeText(value);
      if (!norm) {
        suggestionsList.classList.add("hidden");
        return;
      }
      const dark = document.documentElement.classList.contains("dark");
      const itemC = dark ? "text-slate-200 hover:bg-slate-700 active:bg-slate-600" : "text-slate-700 hover:bg-slate-50 active:bg-slate-100";
      const matches = emociones2.filter((e4) => normalizeText(getDisplayName(e4.nombre)).includes(norm)).slice(0, 8);
      if (!matches.length) {
        suggestionsList.classList.add("hidden");
        return;
      }
      suggestionsList.innerHTML = matches.map(
        (e4) => `<li role="option" tabindex="-1" data-nombre="${escAttr(e4.nombre)}"
                class="px-3 py-2 text-[13px] cursor-pointer transition-colors ${itemC}">
                ${escHtml(getDisplayName(e4.nombre))}
            </li>`
      ).join("");
      suggestionsList.classList.remove("hidden");
      const suggestionsEl = (
        /** @type {HTMLElement} */
        suggestionsList
      );
      suggestionsEl.onmousedown = (ev) => ev.preventDefault();
      suggestionsEl.onclick = (ev) => {
        const target = ev.target;
        if (!(target instanceof Element)) return;
        const li2 = target.closest("li[data-nombre]");
        if (!li2) return;
        const nombre = (
          /** @type {HTMLElement} */
          li2.dataset.nombre
        );
        const e4 = emociones2.find((em) => em.nombre === nombre);
        if (e4) {
          nameFilter = getDisplayName(e4.nombre);
          selected = e4.nombre;
          const searchInput2 = document.getElementById("map-search");
          if (searchInput2 instanceof HTMLInputElement) searchInput2.value = nameFilter;
          suggestionsList.classList.add("hidden");
          render_();
        }
      };
    }
    function renderForTab() {
      render_();
    }
    function onLanguageChanged() {
      nameFilter = "";
      if (forceData) for (const n3 of forceData.nodes) n3.label = getDisplayName(n3.nombre);
      if (quadData) for (const n3 of quadData.nodes) n3.label = getDisplayName(n3.nombre);
      if (document.getElementById("map-content")) render_();
    }
    return { renderForTab, onLanguageChanged };
  }

  // js/crisis.jsx
  var TOTAL_STEPS = 3;
  function Progress({ t: t4, step }) {
    return /* @__PURE__ */ u3("div", { class: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ u3("span", { class: "text-xs font-bold text-slate-400", children: [
        t4("crisis.step"),
        " ",
        step,
        " ",
        t4("crisis.of"),
        " ",
        TOTAL_STEPS
      ] }),
      /* @__PURE__ */ u3("div", { class: "flex gap-1.5", children: Array.from({ length: TOTAL_STEPS }, (_3, i4) => i4 + 1).map((stepNo) => /* @__PURE__ */ u3("div", { class: `h-1.5 w-8 rounded-full ${stepNo <= step ? "bg-slate-800" : "bg-slate-200"}` }, `progress-${stepNo}`)) })
    ] });
  }
  function Step1({ t: t4, onNext }) {
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("div", { class: "text-center mb-8", children: [
        /* @__PURE__ */ u3("div", { class: "text-5xl mb-4", "aria-hidden": "true", children: "\u{1F30A}" }),
        /* @__PURE__ */ u3("h3", { class: "text-2xl font-black text-slate-800 mb-3", children: t4("crisis.step1Title") }),
        /* @__PURE__ */ u3("p", { class: "text-slate-600 leading-relaxed", children: t4("crisis.step1Body") })
      ] }),
      /* @__PURE__ */ u3(
        "button",
        {
          id: "crisis-next-btn",
          type: "button",
          onClick: onNext,
          class: "w-full bg-slate-800 text-white py-4 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-colors",
          children: t4("crisis.next")
        }
      )
    ] });
  }
  function Step2({ t: t4, onNext }) {
    const items = t4("crisis.step2Items").split("|");
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("div", { class: "mb-6", children: [
        /* @__PURE__ */ u3("h3", { class: "text-2xl font-black text-slate-800 mb-1", children: t4("crisis.step2Title") }),
        /* @__PURE__ */ u3("p", { class: "text-slate-500 text-sm mb-4", children: t4("crisis.step2Intro") }),
        /* @__PURE__ */ u3("ul", { class: "divide-y divide-slate-100", children: items.map((item, i4) => /* @__PURE__ */ u3("li", { class: "flex items-center gap-3 py-2.5 border-b border-slate-100 last:border-0", children: [
          /* @__PURE__ */ u3("span", { class: "w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 text-xs font-black flex items-center justify-center shrink-0", children: items.length - i4 }),
          /* @__PURE__ */ u3("span", { class: "text-slate-700 font-medium text-sm", children: item })
        ] }, `step2-${item}`)) })
      ] }),
      /* @__PURE__ */ u3(
        "button",
        {
          id: "crisis-next-btn",
          type: "button",
          onClick: onNext,
          class: "w-full bg-slate-800 text-white py-4 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-colors",
          children: t4("crisis.done")
        }
      )
    ] });
  }
  function Step3({ t: t4, onClose }) {
    const actions = t4("crisis.step3Actions").split("|");
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("div", { class: "mb-6", children: [
        /* @__PURE__ */ u3("h3", { class: "text-2xl font-black text-slate-800 mb-1", children: t4("crisis.step3Title") }),
        /* @__PURE__ */ u3("p", { class: "text-slate-500 text-sm mb-4", children: t4("crisis.step3Intro") }),
        /* @__PURE__ */ u3("div", { class: "divide-y divide-slate-100", children: actions.map((action, i4) => /* @__PURE__ */ u3("label", { class: "flex items-center gap-3 py-3 cursor-pointer group", children: [
          /* @__PURE__ */ u3(
            "input",
            {
              type: "radio",
              name: "crisis-action",
              value: String(i4),
              class: "w-4 h-4 accent-slate-800 shrink-0"
            }
          ),
          /* @__PURE__ */ u3("span", { class: "text-slate-700 font-medium text-sm group-hover:text-slate-900 transition-colors", children: action })
        ] }, `step3-${action}`)) })
      ] }),
      /* @__PURE__ */ u3("p", { class: "text-slate-400 text-xs text-center mb-4", children: t4("crisis.step3End") }),
      /* @__PURE__ */ u3(
        "button",
        {
          id: "crisis-close-btn",
          type: "button",
          onClick: onClose,
          class: "w-full bg-slate-800 text-white py-4 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-colors",
          children: t4("crisis.close")
        }
      )
    ] });
  }
  function CrisisFlow({ t: t4, step, onNext, onClose }) {
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3(Progress, { t: t4, step }),
      step === 1 && /* @__PURE__ */ u3(Step1, { t: t4, onNext }),
      step === 2 && /* @__PURE__ */ u3(Step2, { t: t4, onNext }),
      step === 3 && /* @__PURE__ */ u3(Step3, { t: t4, onClose })
    ] });
  }
  function closeCrisis() {
    document.getElementById("crisis-panel")?.close();
    document.getElementById("crisis-trigger-btn")?.focus();
  }
  function createCrisisFlow({ t: t4 }) {
    let step = 1;
    let contentEl = null;
    function rerender() {
      R(
        /* @__PURE__ */ u3(CrisisFlow, { t: t4, step, onNext: handleNext, onClose: closeCrisis }),
        contentEl
      );
    }
    function handleNext() {
      if (step >= TOTAL_STEPS) return;
      step++;
      rerender();
    }
    function open() {
      const dialog = (
        /** @type {HTMLDialogElement | null} */
        document.getElementById("crisis-panel")
      );
      contentEl = document.getElementById("crisis-content");
      if (!dialog || !contentEl) return;
      step = 1;
      rerender();
      dialog.showModal();
    }
    function init() {
      document.getElementById("crisis-trigger-btn")?.addEventListener("click", open);
      document.getElementById("crisis-panel-close")?.addEventListener("click", closeCrisis);
      const dialog = document.getElementById("crisis-panel");
      dialog?.addEventListener("click", (ev) => {
        if (ev.target === dialog) closeCrisis();
      });
      dialog?.addEventListener("cancel", (ev) => {
        ev.preventDefault();
        closeCrisis();
      });
    }
    return { init };
  }

  // js/settings.js
  var THEMES = ["light", "auto", "dark"];
  var LANGUAGES = ["es", "en"];
  function isTheme(theme) {
    return typeof theme === "string" && THEMES.includes(theme);
  }
  function isLanguage(lang) {
    return typeof lang === "string" && LANGUAGES.includes(lang);
  }
  function getTheme2() {
    const theme = getTheme();
    return isTheme(theme) ? theme : "auto";
  }
  function applyTheme(theme, getLang) {
    const prefersDark = globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
    if (theme === "dark" || theme === "auto" && prefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setTheme(theme);
    updateActiveStates(theme, getLang());
  }
  function updateActiveStates(theme, lang) {
    for (const t4 of THEMES) {
      document.getElementById(`theme-btn-${t4}`)?.classList.toggle("settings-option-active", t4 === theme);
    }
    for (const l4 of LANGUAGES) {
      document.getElementById(`lang-btn-${l4}`)?.classList.toggle("settings-option-active", l4 === lang);
    }
  }
  function initSettings({ setLanguage: setLanguage2, getLang }) {
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
      if (!settingsPanel.classList.contains("hidden") && !settingsPanel.contains(
        /** @type {Node | null} */
        event.target
      )) {
        closePanel();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !settingsPanel.classList.contains("hidden")) {
        closePanel();
        settingsBtn.focus();
      }
    });
    for (
      const btn of
      /** @type {NodeListOf<HTMLElement>} */
      settingsPanel.querySelectorAll("[data-theme-btn]")
    ) {
      btn.addEventListener("click", () => {
        const theme = btn.dataset.themeBtn;
        if (!isTheme(theme)) return;
        applyTheme(theme, getLang);
      });
    }
    for (
      const btn of
      /** @type {NodeListOf<HTMLElement>} */
      settingsPanel.querySelectorAll("[data-lang-btn]")
    ) {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.langBtn;
        if (!isLanguage(lang)) return;
        setLanguage2(lang);
        updateActiveStates(getTheme2(), getLang());
      });
    }
    globalThis.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      if (getTheme2() === "auto") applyTheme("auto", getLang);
    });
    updateActiveStates(getTheme2(), getLang());
    return { applyTheme: (theme) => applyTheme(theme, getLang), getTheme: getTheme2, updateActiveStates };
  }

  // js/install.js
  function isIosDevice() {
    const ua2 = navigator.userAgent.toLowerCase();
    const touchMac = ua2.includes("macintosh") && navigator.maxTouchPoints > 1;
    return /iphone|ipad|ipod/.test(ua2) || touchMac;
  }
  function isStandalone() {
    return globalThis.matchMedia("(display-mode: standalone)").matches || /** @type {any} */
    navigator.standalone === true;
  }
  function initInstall() {
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
      deferredPrompt = /** @type {BeforeInstallPromptEvent} */
      event;
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
      if (
        /** @type {HTMLElement} */
        event.target.id === "ios-install-modal"
      ) closeIosModal();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !iosModal.classList.contains("hidden")) {
        closeIosModal();
      }
    });
    updateInstallVisibility();
  }

  // js/offlineBanner.js
  function initOfflineBanner({ t: t4 }) {
    const banner = document.getElementById("offline-banner");
    const text = document.getElementById("offline-banner-text");
    if (!banner || !text) return;
    const update = () => {
      text.textContent = t4("offlineBanner");
      banner.classList.toggle("hidden", navigator.onLine);
      banner.classList.toggle("flex", !navigator.onLine);
    };
    globalThis.addEventListener("online", update);
    globalThis.addEventListener("offline", update);
    update();
  }

  // js/serviceWorker.js
  function initServiceWorker() {
    if (!("serviceWorker" in navigator)) return;
    globalThis.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js", { updateViaCache: "none" }).catch(() => {
      });
    });
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      globalThis.location.reload();
    });
  }

  // js/storageSchema.js
  var LEGACY_THEME_KEY = "brujulaTheme";
  var VALID_THEMES = /* @__PURE__ */ new Set(["light", "dark", "auto"]);
  function isRecord(value) {
    return typeof value === "object" && value !== null;
  }
  function parseJson(raw) {
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
  function sanitizeRecent(value) {
    if (!Array.isArray(value)) return [];
    const out = [];
    const seen = /* @__PURE__ */ new Set();
    for (const item of value) {
      if (typeof item !== "string") continue;
      const trimmed = item.trim();
      if (!trimmed || seen.has(trimmed)) continue;
      out.push(trimmed);
      seen.add(trimmed);
      if (out.length >= RECENT_LIMIT) break;
    }
    return out;
  }
  function sanitizeDiary(value) {
    if (!Array.isArray(value)) return [];
    const now = Date.now();
    const out = [];
    for (let i4 = 0; i4 < value.length; i4++) {
      const entry = value[i4];
      if (!isRecord(entry)) continue;
      const emotion = typeof entry.emotion === "string" ? entry.emotion.trim() : "";
      if (!emotion) continue;
      const idNum = Number(entry.id);
      const id = Number.isFinite(idNum) ? idNum : now + i4;
      const dateRaw = typeof entry.date === "string" ? entry.date : "";
      const date = Number.isNaN(Date.parse(dateRaw)) ? new Date(id).toISOString() : dateRaw;
      const note = typeof entry.note === "string" ? entry.note.trim() : "";
      const tags = Array.isArray(entry.tags) ? entry.tags.filter((tag) => typeof tag === "string" && DIARY_TAGS.includes(tag)) : [];
      out.push({ id, date, emotion, note, tags });
    }
    return out;
  }
  function migrateToV1() {
    const lang = localStorage.getItem(LANGUAGE_KEY);
    if (lang && lang !== "es" && lang !== "en") {
      localStorage.setItem(LANGUAGE_KEY, "es");
    }
    let theme = localStorage.getItem(THEME_KEY);
    if (!theme) {
      const legacyTheme = localStorage.getItem(LEGACY_THEME_KEY);
      if (legacyTheme) {
        theme = legacyTheme;
        localStorage.setItem(THEME_KEY, legacyTheme);
        localStorage.removeItem(LEGACY_THEME_KEY);
      }
    }
    if (theme && !VALID_THEMES.has(theme)) {
      localStorage.removeItem(THEME_KEY);
    }
    const recent = sanitizeRecent(parseJson(localStorage.getItem(RECENT_KEY)));
    localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
    const diary2 = sanitizeDiary(parseJson(localStorage.getItem(DIARY_KEY)));
    localStorage.setItem(DIARY_KEY, JSON.stringify(diary2));
  }
  function migrateStorageSchema() {
    try {
      const rawVersion = localStorage.getItem(STORAGE_SCHEMA_KEY);
      const parsedVersion = Number.parseInt(rawVersion ?? "0", 10);
      let currentVersion = Number.isFinite(parsedVersion) ? parsedVersion : 0;
      if (currentVersion < 1) {
        migrateToV1();
        currentVersion = 1;
      }
      if (currentVersion !== STORAGE_SCHEMA_VERSION) {
        localStorage.setItem(STORAGE_SCHEMA_KEY, String(STORAGE_SCHEMA_VERSION));
      }
    } catch {
    }
  }

  // js/version.js
  var BUILD_VERSION = "mpczwgp9";

  // node_modules/posthog-js/dist/module.js
  var t3 = "undefined" != typeof window ? window : void 0;
  var e3 = "undefined" != typeof globalThis ? globalThis : t3;
  "undefined" == typeof self && (e3.self = e3), "undefined" == typeof File && (e3.File = function() {
  });
  var i3 = null == e3 ? void 0 : e3.navigator;
  var r3 = null == e3 ? void 0 : e3.document;
  var s3 = null == e3 ? void 0 : e3.location;
  var n2 = null == e3 ? void 0 : e3.fetch;
  var o3 = null != e3 && e3.XMLHttpRequest && "withCredentials" in new e3.XMLHttpRequest() ? e3.XMLHttpRequest : void 0;
  var a3 = null == e3 ? void 0 : e3.AbortController;
  var l3 = null == e3 ? void 0 : e3.CompressionStream;
  var u4 = null == i3 ? void 0 : i3.userAgent;
  var h3 = null != t3 ? t3 : {};
  var d3 = "1.374.2";
  var v3 = { DEBUG: false, LIB_VERSION: d3, LIB_NAME: "web", JS_SDK_VERSION: d3 };
  function c3(t4, e4, i4, r4, s4, n3, o4) {
    try {
      var a4 = t4[n3](o4), l4 = a4.value;
    } catch (t5) {
      return void i4(t5);
    }
    a4.done ? e4(l4) : Promise.resolve(l4).then(r4, s4);
  }
  function p3(t4) {
    return function() {
      var e4 = this, i4 = arguments;
      return new Promise((function(r4, s4) {
        var n3 = t4.apply(e4, i4);
        function o4(t5) {
          c3(n3, r4, s4, o4, a4, "next", t5);
        }
        function a4(t5) {
          c3(n3, r4, s4, o4, a4, "throw", t5);
        }
        o4(void 0);
      }));
    };
  }
  function f4() {
    return f4 = Object.assign ? Object.assign.bind() : function(t4) {
      for (var e4 = 1; arguments.length > e4; e4++) {
        var i4 = arguments[e4];
        for (var r4 in i4) ({}).hasOwnProperty.call(i4, r4) && (t4[r4] = i4[r4]);
      }
      return t4;
    }, f4.apply(null, arguments);
  }
  function _2(t4, e4) {
    if (null == t4) return {};
    var i4 = {};
    for (var r4 in t4) if ({}.hasOwnProperty.call(t4, r4)) {
      if (-1 !== e4.indexOf(r4)) continue;
      i4[r4] = t4[r4];
    }
    return i4;
  }
  var g2;
  var m3 = (function(t4) {
    return t4.GZipJS = "gzip-js", t4.Base64 = "base64", t4;
  })({});
  var b2 = ["$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called"];
  var y3 = "NativeGzipValidationError";
  var w3 = (t4) => t4.length >= 2 && 31 === t4[0] && 139 === t4[1];
  var x2 = (t4) => !(!t4 || "object" != typeof t4) && "NotReadableError" === ("name" in t4 ? String(t4.name) : "");
  var E2 = (t4) => {
    var e4 = new Error("Native gzip produced invalid output: " + t4);
    throw e4.name = y3, e4;
  };
  var S2 = (function() {
    var t4 = p3((function* (t5, e4) {
      18 > t5.size && E2("too-short");
      var i4 = new Uint8Array(yield t5.slice(0, 10).arrayBuffer());
      w3(i4) && 8 === i4[2] || E2("invalid-header");
      var r4 = new DataView(yield t5.slice(t5.size - 8).arrayBuffer());
      r4.getUint32(0, true) !== ((t6) => {
        for (var e5 = (() => {
          if (g2) return g2;
          g2 = [];
          for (var t7 = 0; 256 > t7; t7++) {
            for (var e6 = t7, i6 = 0; 8 > i6; i6++) e6 = 1 & e6 ? 3988292384 ^ e6 >>> 1 : e6 >>> 1;
            g2[t7] = e6 >>> 0;
          }
          return g2;
        })(), i5 = 4294967295, r5 = 0; t6.length > r5; r5++) i5 = e5[255 & (i5 ^ t6[r5])] ^ i5 >>> 8;
        return (4294967295 ^ i5) >>> 0;
      })(e4) && E2("invalid-crc");
      var s4 = e4.length >>> 0;
      r4.getUint32(4, true) !== s4 && E2("invalid-size");
    }));
    return function(e4, i4) {
      return t4.apply(this, arguments);
    };
  })();
  function T3() {
    return T3 = p3((function* (t4, e4, i4) {
      void 0 === e4 && (e4 = true);
      try {
        var r4 = new TextEncoder().encode(t4), s4 = new CompressionStream("gzip"), n3 = s4.writable.getWriter(), o4 = n3.write(r4).then((() => n3.close())).catch((function() {
          var t5 = p3((function* (t6) {
            try {
              yield n3.abort(t6);
            } catch (t7) {
            }
            throw t6;
          }));
          return function(e5) {
            return t5.apply(this, arguments);
          };
        })()), a4 = new Response(s4.readable).blob(), [l4] = yield Promise.all([a4, o4]);
        return yield S2(l4, r4), l4;
      } catch (t5) {
        if (null != i4 && i4.rethrow) throw t5;
        return e4 && console.error("Failed to gzip compress data", t5), null;
      }
    })), T3.apply(this, arguments);
  }
  var k3 = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "http://yandex.com/bots", "hubspot", "ia_archiver", "leikibot", "linkedinbot", "meta-externalagent", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "sebot-wa", "sitebulb", "slackbot", "slurp", "trendictionbot", "turnitin", "twitterbot", "vercel-screenshot", "vercelbot", "yahoo! slurp", "yandexbot", "zoombot", "bot.htm", "bot.php", "(bot;", "bot/", "crawler", "ahrefsbot", "ahrefssiteaudit", "semrushbot", "siteauditbot", "splitsignalbot", "gptbot", "oai-searchbot", "chatgpt-user", "perplexitybot", "better uptime bot", "sentryuptimebot", "uptimerobot", "headlesschrome", "cypress", "google-hoteladsverifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleother", "google-cloudvertexbot", "googleweblight", "mediapartners-google", "storebot-google", "google-inspectiontool", "bytespider"];
  var R3 = function(t4, e4) {
    if (void 0 === e4 && (e4 = []), !t4) return false;
    var i4 = t4.toLowerCase();
    return k3.concat(e4).some(((t5) => {
      var e5 = t5.toLowerCase();
      return -1 !== i4.indexOf(e5);
    }));
  };
  function P2(t4, e4) {
    return -1 !== t4.indexOf(e4);
  }
  var O2 = function(t4) {
    return t4.trim();
  };
  var I2 = function(t4) {
    return t4.replace(/^\$/, "");
  };
  var C3 = Object.prototype;
  var A3 = C3.hasOwnProperty;
  var F = C3.toString;
  var M = Array.isArray || function(t4) {
    return "[object Array]" === F.call(t4);
  };
  var D3 = (t4) => "function" == typeof t4;
  var U = (t4) => t4 === Object(t4) && !M(t4);
  var L2 = (t4) => {
    if (U(t4)) {
      for (var e4 in t4) if (A3.call(t4, e4)) return false;
      return true;
    }
    return false;
  };
  var N2 = (t4) => void 0 === t4;
  var j3 = (t4) => "[object String]" == F.call(t4);
  var z3 = (t4) => j3(t4) && 0 === t4.trim().length;
  var B3 = (t4) => null === t4;
  var H2 = (t4) => N2(t4) || B3(t4);
  var q2 = (t4) => "[object Number]" == F.call(t4) && t4 == t4;
  var V2 = (t4) => q2(t4) && t4 > 0;
  var W = (t4) => "[object Boolean]" === F.call(t4);
  var G2 = (t4) => t4 instanceof FormData;
  var Y = (t4) => P2(b2, t4);
  function J2(t4) {
    return null === t4 || "object" != typeof t4;
  }
  function K2(t4, e4) {
    return {}.toString.call(t4) === "[object " + e4 + "]";
  }
  function X(t4) {
    return "undefined" != typeof Event && (function(t5, e4) {
      try {
        return t5 instanceof e4;
      } catch (t6) {
        return false;
      }
    })(t4, Event);
  }
  var Q2 = [true, "true", 1, "1", "yes"];
  var Z = (t4) => P2(Q2, t4);
  var tt = [false, "false", 0, "0", "no"];
  function et(t4, e4, i4, r4, s4) {
    return e4 > i4 && (r4.warn("min cannot be greater than max."), e4 = i4), q2(t4) ? t4 > i4 ? (r4.warn(" cannot be  greater than max: " + i4 + ". Using max value instead."), i4) : e4 > t4 ? (r4.warn(" cannot be less than min: " + e4 + ". Using min value instead."), e4) : t4 : (r4.warn(" must be a number. using max or fallback. max: " + i4 + ", fallback: " + s4), et(s4 || i4, e4, i4, r4));
  }
  var it = class {
    constructor(t4) {
      this.$t = {}, this.zt = t4.zt, this.Zt = et(t4.bucketSize, 0, 100, t4.Gt), this.Qt = et(t4.refillRate, 0, this.Zt, t4.Gt), this.Jt = et(t4.refillInterval, 0, 864e5, t4.Gt);
    }
    Kt(t4, e4) {
      var i4 = Math.floor((e4 - t4.lastAccess) / this.Jt);
      i4 > 0 && (t4.tokens = Math.min(t4.tokens + i4 * this.Qt, this.Zt), t4.lastAccess = t4.lastAccess + i4 * this.Jt);
    }
    consumeRateLimit(t4) {
      var e4, i4 = Date.now(), r4 = String(t4), s4 = this.$t[r4];
      return s4 ? this.Kt(s4, i4) : this.$t[r4] = s4 = { tokens: this.Zt, lastAccess: i4 }, 0 === s4.tokens || (s4.tokens--, 0 === s4.tokens && (null == (e4 = this.zt) || e4.call(this, t4)), 0 === s4.tokens);
    }
    stop() {
      this.$t = {};
    }
  };
  var rt;
  var st;
  var nt;
  var ot = "Mobile";
  var at = "iOS";
  var lt = "Android";
  var ut = "Tablet";
  var ht = lt + " " + ut;
  var dt = "iPad";
  var vt = "Apple";
  var ct = vt + " Watch";
  var pt = "Safari";
  var ft = "BlackBerry";
  var _t = "Samsung";
  var gt = _t + "Browser";
  var mt = _t + " Internet";
  var bt = "Chrome";
  var yt = bt + " OS";
  var wt = bt + " " + at;
  var xt = "Internet Explorer";
  var Et = xt + " " + ot;
  var St = "Opera";
  var $t = St + " Mini";
  var Tt = "Edge";
  var kt = "Microsoft " + Tt;
  var Rt = "Firefox";
  var Pt = Rt + " " + at;
  var Ot = "Nintendo";
  var It = "PlayStation";
  var Ct = "Xbox";
  var At = lt + " " + ot;
  var Ft = ot + " " + pt;
  var Mt = "Windows";
  var Dt = Mt + " Phone";
  var Ut = "Nokia";
  var Lt = "Ouya";
  var Nt = "Generic";
  var jt = Nt + " " + ot.toLowerCase();
  var zt = Nt + " " + ut.toLowerCase();
  var Bt = "Konqueror";
  var Ht = "(\\d+(\\.\\d+)?)";
  var qt = new RegExp("Version/" + Ht);
  var Vt = new RegExp(Ct, "i");
  var Wt = new RegExp(It + " \\w+", "i");
  var Gt = new RegExp(Ot + " \\w+", "i");
  var Yt = new RegExp(ft + "|PlayBook|BB10", "i");
  var Jt = { "NT3.51": "NT 3.11", "NT4.0": "NT 4.0", "5.0": "2000", 5.1: "XP", 5.2: "XP", "6.0": "Vista", 6.1: "7", 6.2: "8", 6.3: "8.1", 6.4: "10", "10.0": "10" };
  var Kt = function(t4, e4) {
    return e4 = e4 || "", P2(t4, " OPR/") && P2(t4, "Mini") ? $t : P2(t4, " OPR/") ? St : Yt.test(t4) ? ft : P2(t4, "IE" + ot) || P2(t4, "WPDesktop") ? Et : P2(t4, gt) ? mt : P2(t4, Tt) || P2(t4, "Edg/") ? kt : P2(t4, "FBIOS") ? "Facebook " + ot : P2(t4, "UCWEB") || P2(t4, "UCBrowser") ? "UC Browser" : P2(t4, "CriOS") ? wt : P2(t4, "CrMo") || P2(t4, bt) ? bt : P2(t4, lt) && P2(t4, pt) ? At : P2(t4, "FxiOS") ? Pt : P2(t4.toLowerCase(), Bt.toLowerCase()) ? Bt : ((t5, e5) => e5 && P2(e5, vt) || (function(t6) {
      return P2(t6, pt) && !P2(t6, bt) && !P2(t6, lt);
    })(t5))(t4, e4) ? P2(t4, ot) ? Ft : pt : P2(t4, Rt) ? Rt : P2(t4, "MSIE") || P2(t4, "Trident/") ? xt : P2(t4, "Gecko") ? Rt : "";
  };
  var Xt = { [Et]: [new RegExp("rv:" + Ht)], [kt]: [new RegExp(Tt + "?\\/" + Ht)], [bt]: [new RegExp("(" + bt + "|CrMo)\\/" + Ht)], [wt]: [new RegExp("CriOS\\/" + Ht)], "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/" + Ht)], [pt]: [qt], [Ft]: [qt], [St]: [new RegExp("(Opera|OPR)\\/" + Ht)], [Rt]: [new RegExp(Rt + "\\/" + Ht)], [Pt]: [new RegExp("FxiOS\\/" + Ht)], [Bt]: [new RegExp("Konqueror[:/]?" + Ht, "i")], [ft]: [new RegExp(ft + " " + Ht), qt], [At]: [new RegExp("android\\s" + Ht, "i")], [mt]: [new RegExp(gt + "\\/" + Ht)], [xt]: [new RegExp("(rv:|MSIE )" + Ht)], Mozilla: [new RegExp("rv:" + Ht)] };
  var Qt = function(t4, e4) {
    var i4 = Kt(t4, e4), r4 = Xt[i4];
    if (N2(r4)) return null;
    for (var s4 = 0; r4.length > s4; s4++) {
      var n3 = t4.match(r4[s4]);
      if (n3) return parseFloat(n3[n3.length - 2]);
    }
    return null;
  };
  var Zt = [[new RegExp(Ct + "; " + Ct + " (.*?)[);]", "i"), (t4) => [Ct, t4 && t4[1] || ""]], [new RegExp(Ot, "i"), [Ot, ""]], [new RegExp(It, "i"), [It, ""]], [Yt, [ft, ""]], [new RegExp(Mt, "i"), (t4, e4) => {
    if (/Phone/.test(e4) || /WPDesktop/.test(e4)) return [Dt, ""];
    if (new RegExp(ot).test(e4) && !/IEMobile\b/.test(e4)) return [Mt + " " + ot, ""];
    var i4 = /Windows NT ([0-9.]+)/i.exec(e4);
    if (i4 && i4[1]) {
      var r4 = Jt[i4[1]] || "";
      return /arm/i.test(e4) && (r4 = "RT"), [Mt, r4];
    }
    return [Mt, ""];
  }], [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, (t4) => t4 && t4[3] ? [at, [t4[3], t4[4], t4[5] || "0"].join(".")] : [at, ""]], [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, (t4) => {
    var e4 = "";
    return t4 && t4.length >= 3 && (e4 = N2(t4[2]) ? t4[3] : t4[2]), ["watchOS", e4];
  }], [new RegExp("(" + lt + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + lt + ")", "i"), (t4) => t4 && t4[2] ? [lt, [t4[2], t4[3], t4[4] || "0"].join(".")] : [lt, ""]], [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, (t4) => {
    var e4 = ["Mac OS X", ""];
    return t4 && t4[1] && (e4[1] = [t4[1], t4[2], t4[3] || "0"].join(".")), e4;
  }], [/Mac/i, ["Mac OS X", ""]], [/CrOS/, [yt, ""]], [/Linux|debian/i, ["Linux", ""]]];
  var te = function(t4) {
    return Gt.test(t4) ? Ot : Wt.test(t4) ? It : Vt.test(t4) ? Ct : new RegExp(Lt, "i").test(t4) ? Lt : new RegExp("(" + Dt + "|WPDesktop)", "i").test(t4) ? Dt : /iPad/.test(t4) ? dt : /iPod/.test(t4) ? "iPod Touch" : /iPhone/.test(t4) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(t4) ? ct : Yt.test(t4) ? ft : /(kobo)\s(ereader|touch)/i.test(t4) ? "Kobo" : new RegExp(Ut, "i").test(t4) ? Ut : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(t4) || /(kf[a-z]+)( bui|\)).+silk\//i.test(t4) ? "Kindle Fire" : /(Android|ZTE)/i.test(t4) ? new RegExp(ot).test(t4) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(t4) || /pixel[\daxl ]{1,6}/i.test(t4) && !/pixel c/i.test(t4) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(t4) || /lmy47v/i.test(t4) && !/QTAQZ3/i.test(t4) ? lt : ht : new RegExp("(pda|" + ot + ")", "i").test(t4) ? jt : new RegExp(ut, "i").test(t4) && !new RegExp(ut + " pc", "i").test(t4) ? zt : "";
  };
  var ee = (t4) => t4 instanceof Error;
  var ie = { trace: { text: "TRACE", number: 1 }, debug: { text: "DEBUG", number: 5 }, info: { text: "INFO", number: 9 }, warn: { text: "WARN", number: 13 }, error: { text: "ERROR", number: 17 }, fatal: { text: "FATAL", number: 21 } };
  var re = ie.info;
  function se(t4) {
    if (W(t4)) return { boolValue: t4 };
    if ("number" == typeof t4) return Number.isFinite(t4) ? Number.isInteger(t4) ? { intValue: t4 } : { doubleValue: t4 } : { stringValue: String(t4) };
    if ("string" == typeof t4) return { stringValue: t4 };
    if (M(t4)) return { arrayValue: { values: t4.map(((t5) => se(t5))) } };
    try {
      return { stringValue: JSON.stringify(t4) };
    } catch (e4) {
      return { stringValue: String(t4) };
    }
  }
  function ne(t4) {
    var e4 = [];
    for (var i4 in t4) {
      var r4 = t4[i4];
      B3(r4) || N2(r4) || e4.push({ key: i4, value: se(r4) });
    }
    return e4;
  }
  function oe(t4) {
    var e4 = globalThis._posthogChunkIds;
    if (e4) {
      var i4 = Object.keys(e4);
      return nt && i4.length === st || (st = i4.length, nt = i4.reduce(((i5, r4) => {
        rt || (rt = {});
        var s4 = rt[r4];
        if (s4) i5[s4[0]] = s4[1];
        else for (var n3 = t4(r4), o4 = n3.length - 1; o4 >= 0; o4--) {
          var a4 = n3[o4], l4 = null == a4 ? void 0 : a4.filename, u5 = e4[r4];
          if (l4 && u5) {
            i5[l4] = u5, rt[r4] = [l4, u5];
            break;
          }
        }
        return i5;
      }), {})), nt;
    }
  }
  var ae = class {
    constructor(t4, e4, i4) {
      void 0 === i4 && (i4 = []), this.coercers = t4, this.stackParser = e4, this.modifiers = i4;
    }
    buildFromUnknown(t4, e4) {
      void 0 === e4 && (e4 = {});
      var i4 = e4 && e4.mechanism || { handled: true, type: "generic" }, r4 = this.buildCoercingContext(i4, e4, 0).apply(t4), s4 = this.buildParsingContext(e4), n3 = this.parseStacktrace(r4, s4);
      return { $exception_list: this.convertToExceptionList(n3, i4), $exception_level: "error" };
    }
    modifyFrames(t4) {
      var e4 = this;
      return p3((function* () {
        for (var i4 of t4) i4.stacktrace && i4.stacktrace.frames && M(i4.stacktrace.frames) && (i4.stacktrace.frames = yield e4.applyModifiers(i4.stacktrace.frames));
        return t4;
      }))();
    }
    coerceFallback(t4) {
      var e4;
      return { type: "Error", value: "Unknown error", stack: null == (e4 = t4.syntheticException) ? void 0 : e4.stack, synthetic: true };
    }
    parseStacktrace(t4, e4) {
      var i4, r4;
      return null != t4.cause && (i4 = this.parseStacktrace(t4.cause, e4)), "" != t4.stack && null != t4.stack && (r4 = this.applyChunkIds(this.stackParser(t4.stack, t4.synthetic ? e4.skipFirstLines : 0), e4.chunkIdMap)), f4({}, t4, { cause: i4, stack: r4 });
    }
    applyChunkIds(t4, e4) {
      return t4.map(((t5) => (t5.filename && e4 && (t5.chunk_id = e4[t5.filename]), t5)));
    }
    applyCoercers(t4, e4) {
      for (var i4 of this.coercers) if (i4.match(t4)) return i4.coerce(t4, e4);
      return this.coerceFallback(e4);
    }
    applyModifiers(t4) {
      var e4 = this;
      return p3((function* () {
        var i4 = t4;
        for (var r4 of e4.modifiers) i4 = yield r4(i4);
        return i4;
      }))();
    }
    convertToExceptionList(t4, e4) {
      var i4, r4, s4, n3 = { type: t4.type, value: t4.value, mechanism: { type: null !== (i4 = e4.type) && void 0 !== i4 ? i4 : "generic", handled: null === (r4 = e4.handled) || void 0 === r4 || r4, synthetic: null !== (s4 = t4.synthetic) && void 0 !== s4 && s4 } };
      t4.stack && (n3.stacktrace = { type: "raw", frames: t4.stack });
      var o4 = [n3];
      return null != t4.cause && o4.push(...this.convertToExceptionList(t4.cause, f4({}, e4, { handled: true }))), o4;
    }
    buildParsingContext(t4) {
      var e4;
      return { chunkIdMap: oe(this.stackParser), skipFirstLines: null !== (e4 = t4.skipFirstLines) && void 0 !== e4 ? e4 : 1 };
    }
    buildCoercingContext(t4, e4, i4) {
      void 0 === i4 && (i4 = 0);
      var r4 = (i5, r5) => {
        if (4 >= r5) {
          var s4 = this.buildCoercingContext(t4, e4, r5);
          return this.applyCoercers(i5, s4);
        }
      };
      return f4({}, e4, { syntheticException: 0 == i4 ? e4.syntheticException : void 0, mechanism: t4, apply: (t5) => r4(t5, i4), next: (t5) => r4(t5, i4 + 1) });
    }
  };
  var le = "?";
  function ue(t4, e4, i4, r4, s4) {
    var n3 = { platform: t4, filename: e4, function: "<anonymous>" === i4 ? le : i4, in_app: true };
    return N2(r4) || (n3.lineno = r4), N2(s4) || (n3.colno = s4), n3;
  }
  var he = (t4, e4) => {
    var i4 = -1 !== t4.indexOf("safari-extension"), r4 = -1 !== t4.indexOf("safari-web-extension");
    return i4 || r4 ? [-1 !== t4.indexOf("@") ? t4.split("@")[0] : le, i4 ? "safari-extension:" + e4 : "safari-web-extension:" + e4] : [t4, e4];
  };
  var de = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
  var ve = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
  var ce = /\((\S*)(?::(\d+))(?::(\d+))\)/;
  var pe = (t4, e4) => {
    var i4 = de.exec(t4);
    if (i4) {
      var [, r4, s4, n3] = i4;
      return ue(e4, r4, le, +s4, +n3);
    }
    var o4 = ve.exec(t4);
    if (o4) {
      if (o4[2] && 0 === o4[2].indexOf("eval")) {
        var a4 = ce.exec(o4[2]);
        a4 && (o4[2] = a4[1], o4[3] = a4[2], o4[4] = a4[3]);
      }
      var [l4, u5] = he(o4[1] || le, o4[2]);
      return ue(e4, u5, l4, o4[3] ? +o4[3] : void 0, o4[4] ? +o4[4] : void 0);
    }
  };
  var fe = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
  var _e = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
  var ge = (t4, e4) => {
    var i4 = fe.exec(t4);
    if (i4) {
      if (i4[3] && i4[3].indexOf(" > eval") > -1) {
        var r4 = _e.exec(i4[3]);
        r4 && (i4[1] = i4[1] || "eval", i4[3] = r4[1], i4[4] = r4[2], i4[5] = "");
      }
      var s4 = i4[3], n3 = i4[1] || le;
      return [n3, s4] = he(n3, s4), ue(e4, s4, n3, i4[4] ? +i4[4] : void 0, i4[5] ? +i4[5] : void 0);
    }
  };
  var me = /\(error: (.*)\)/;
  var be = class {
    match(t4) {
      return this.isDOMException(t4) || this.isDOMError(t4);
    }
    coerce(t4, e4) {
      var i4 = j3(t4.stack);
      return { type: this.getType(t4), value: this.getValue(t4), stack: i4 ? t4.stack : void 0, cause: t4.cause ? e4.next(t4.cause) : void 0, synthetic: false };
    }
    getType(t4) {
      return this.isDOMError(t4) ? "DOMError" : "DOMException";
    }
    getValue(t4) {
      var e4 = t4.name || (this.isDOMError(t4) ? "DOMError" : "DOMException");
      return t4.message ? e4 + ": " + t4.message : e4;
    }
    isDOMException(t4) {
      return K2(t4, "DOMException");
    }
    isDOMError(t4) {
      return K2(t4, "DOMError");
    }
  };
  var ye = class {
    match(t4) {
      return ((t5) => t5 instanceof Error)(t4);
    }
    coerce(t4, e4) {
      return { type: this.getType(t4), value: this.getMessage(t4, e4), stack: this.getStack(t4), cause: t4.cause ? e4.next(t4.cause) : void 0, synthetic: false };
    }
    getType(t4) {
      return t4.name || t4.constructor.name;
    }
    getMessage(t4, e4) {
      var i4 = t4.message;
      return String(i4.error && "string" == typeof i4.error.message ? i4.error.message : i4);
    }
    getStack(t4) {
      return t4.stacktrace || t4.stack || void 0;
    }
  };
  var we = class {
    constructor() {
    }
    match(t4) {
      return K2(t4, "ErrorEvent") && null != t4.error;
    }
    coerce(t4, e4) {
      var i4;
      return e4.apply(t4.error) || { type: "ErrorEvent", value: t4.message, stack: null == (i4 = e4.syntheticException) ? void 0 : i4.stack, synthetic: true };
    }
  };
  var xe = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
  var Ee = class {
    match(t4) {
      return "string" == typeof t4;
    }
    coerce(t4, e4) {
      var i4, [r4, s4] = this.getInfos(t4);
      return { type: null != r4 ? r4 : "Error", value: null != s4 ? s4 : t4, stack: null == (i4 = e4.syntheticException) ? void 0 : i4.stack, synthetic: true };
    }
    getInfos(t4) {
      var e4 = "Error", i4 = t4, r4 = t4.match(xe);
      return r4 && (e4 = r4[1], i4 = r4[2]), [e4, i4];
    }
  };
  var Se = ["fatal", "error", "warning", "log", "info", "debug"];
  function $e(t4, e4) {
    void 0 === e4 && (e4 = 40);
    var i4 = Object.keys(t4);
    if (i4.sort(), !i4.length) return "[object has no keys]";
    for (var r4 = i4.length; r4 > 0; r4--) {
      var s4 = i4.slice(0, r4).join(", ");
      if (e4 >= s4.length) return r4 === i4.length ? s4 : s4.length > e4 ? s4.slice(0, e4) + "..." : s4;
    }
    return "";
  }
  var Te = class {
    match(t4) {
      return "object" == typeof t4 && null !== t4;
    }
    coerce(t4, e4) {
      var i4, r4 = this.getErrorPropertyFromObject(t4);
      return r4 ? e4.apply(r4) : { type: this.getType(t4), value: this.getValue(t4), stack: null == (i4 = e4.syntheticException) ? void 0 : i4.stack, level: this.isSeverityLevel(t4.level) ? t4.level : "error", synthetic: true };
    }
    getType(t4) {
      return X(t4) ? t4.constructor.name : "Error";
    }
    getValue(t4) {
      if ("name" in t4 && "string" == typeof t4.name) {
        var e4 = "'" + t4.name + "' captured as exception";
        return "message" in t4 && "string" == typeof t4.message && (e4 += " with message: '" + t4.message + "'"), e4;
      }
      if ("message" in t4 && "string" == typeof t4.message) return t4.message;
      var i4 = this.getObjectClassName(t4);
      return (i4 && "Object" !== i4 ? "'" + i4 + "'" : "Object") + " captured as exception with keys: " + $e(t4);
    }
    isSeverityLevel(t4) {
      return j3(t4) && !z3(t4) && Se.indexOf(t4) >= 0;
    }
    getErrorPropertyFromObject(t4) {
      for (var e4 in t4) if ({}.hasOwnProperty.call(t4, e4)) {
        var i4 = t4[e4];
        if (ee(i4)) return i4;
      }
    }
    getObjectClassName(t4) {
      try {
        var e4 = Object.getPrototypeOf(t4);
        return e4 ? e4.constructor.name : void 0;
      } catch (t5) {
        return;
      }
    }
  };
  var ke = class {
    match(t4) {
      return X(t4);
    }
    coerce(t4, e4) {
      var i4, r4 = t4.constructor.name;
      return { type: r4, value: r4 + " captured as exception with keys: " + $e(t4), stack: null == (i4 = e4.syntheticException) ? void 0 : i4.stack, synthetic: true };
    }
  };
  var Re = class {
    match(t4) {
      return J2(t4);
    }
    coerce(t4, e4) {
      var i4;
      return { type: "Error", value: "Primitive value captured as exception: " + String(t4), stack: null == (i4 = e4.syntheticException) ? void 0 : i4.stack, synthetic: true };
    }
  };
  var Pe = class {
    match(t4) {
      return K2(t4, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(t4);
    }
    isCustomEventWrappingRejection(t4) {
      if (!X(t4)) return false;
      try {
        var e4 = t4.detail;
        return null != e4 && "object" == typeof e4 && "reason" in e4;
      } catch (t5) {
        return false;
      }
    }
    coerce(t4, e4) {
      var i4, r4 = this.getUnhandledRejectionReason(t4);
      return J2(r4) ? { type: "UnhandledRejection", value: "Non-Error promise rejection captured with value: " + String(r4), stack: null == (i4 = e4.syntheticException) ? void 0 : i4.stack, synthetic: true } : e4.apply(r4);
    }
    getUnhandledRejectionReason(t4) {
      try {
        if ("reason" in t4) return t4.reason;
        if ("detail" in t4 && null != t4.detail && "object" == typeof t4.detail && "reason" in t4.detail) return t4.detail.reason;
      } catch (t5) {
      }
      return t4;
    }
  };
  var Oe = "$message";
  var Ie = "$timestamp";
  var Ce = /* @__PURE__ */ new Set([Oe, Ie]);
  var Ae = { enabled: true, max_bytes: 32768 };
  function Fe(t4) {
    var e4;
    return t4 ? { enabled: null !== (e4 = t4.enabled) && void 0 !== e4 ? e4 : Ae.enabled, max_bytes: De(t4.max_bytes, Ae.max_bytes) } : f4({}, Ae);
  }
  var Me = class {
    constructor(t4) {
      this.Yt = [], this.Xt = 0, this.qt = Fe(t4);
    }
    setConfig(t4) {
      this.qt = Fe(t4), this.er();
    }
    add(t4) {
      var e4 = (function(t5) {
        var e5 = (function(t6) {
          var e6 = /* @__PURE__ */ new WeakSet();
          try {
            return JSON.stringify(t6, ((t7, i6) => {
              if ("bigint" == typeof i6) return i6.toString();
              if ("function" != typeof i6 && "symbol" != typeof i6) {
                if (i6 instanceof Date) return i6.toISOString();
                if (i6 instanceof Error) return { name: i6.name, message: i6.message, stack: i6.stack };
                if (i6 && "object" == typeof i6) {
                  if (e6.has(i6)) return "[Circular]";
                  e6.add(i6);
                }
                return i6;
              }
            }));
          } catch (t7) {
            return;
          }
        })(t5);
        if (e5) try {
          var i5 = JSON.parse(e5);
          if (!U(i5)) return;
          var r4 = i5, s4 = r4[Oe], n3 = r4[Ie];
          if (!j3(s4) || 0 === s4.trim().length) return;
          if (!j3(n3) && !q2(n3)) return;
          return { step: r4, json: e5 };
        } catch (t6) {
          return;
        }
      })(t4);
      if (e4) {
        var i4 = (function(t5) {
          if ("undefined" != typeof TextEncoder) return new TextEncoder().encode(t5).length;
          for (var e5 = encodeURIComponent(t5), i5 = 0, r4 = 0; e5.length > r4; r4++) "%" === e5[r4] ? (i5 += 1, r4 += 2) : i5 += 1;
          return i5;
        })(e4.json);
        i4 > this.qt.max_bytes || (this.Yt.push({ step: e4.step, bytes: i4 }), this.Xt += i4, this.er());
      }
    }
    getAttachable() {
      return this.Yt.map(((t4) => t4.step));
    }
    clear() {
      this.Yt = [], this.Xt = 0;
    }
    size() {
      return this.Yt.length;
    }
    er() {
      for (; this.Xt > this.qt.max_bytes && this.Yt.length > 0; ) {
        var t4 = this.Yt.shift();
        t4 && (this.Xt -= t4.bytes);
      }
    }
  };
  function De(t4, e4) {
    if (!q2(t4) || t4 === 1 / 0 || t4 === -1 / 0) return e4;
    var i4 = Math.floor(t4);
    return 0 > i4 ? e4 : i4;
  }
  var Ue = function(e4, i4) {
    var { debugEnabled: r4 } = void 0 === i4 ? {} : i4, s4 = { k(i5) {
      if (t3 && (v3.DEBUG || h3.POSTHOG_DEBUG || r4) && !N2(t3.console) && t3.console) {
        for (var s5 = ("__rrweb_original__" in t3.console[i5]) ? t3.console[i5].__rrweb_original__ : t3.console[i5], n3 = arguments.length, o4 = new Array(n3 > 1 ? n3 - 1 : 0), a4 = 1; n3 > a4; a4++) o4[a4 - 1] = arguments[a4];
        s5(e4, ...o4);
      }
    }, debug() {
      for (var t4 = arguments.length, e5 = new Array(t4), i5 = 0; t4 > i5; i5++) e5[i5] = arguments[i5];
      s4.k("debug", ...e5);
    }, info() {
      for (var t4 = arguments.length, e5 = new Array(t4), i5 = 0; t4 > i5; i5++) e5[i5] = arguments[i5];
      s4.k("log", ...e5);
    }, warn() {
      for (var t4 = arguments.length, e5 = new Array(t4), i5 = 0; t4 > i5; i5++) e5[i5] = arguments[i5];
      s4.k("warn", ...e5);
    }, error() {
      for (var t4 = arguments.length, e5 = new Array(t4), i5 = 0; t4 > i5; i5++) e5[i5] = arguments[i5];
      s4.k("error", ...e5);
    }, critical() {
      for (var t4 = arguments.length, i5 = new Array(t4), r5 = 0; t4 > r5; r5++) i5[r5] = arguments[r5];
      console.error(e4, ...i5);
    }, uninitializedWarning(t4) {
      s4.error("You must initialize PostHog before calling " + t4);
    }, createLogger: (t4, i5) => Ue(e4 + " " + t4, i5) };
    return s4;
  };
  var Le = Ue("[PostHog.js]");
  var Ne = Le.createLogger;
  var je = Ne("[ExternalScriptsLoader]");
  var ze = (t4, e4, i4) => {
    if (t4.config.disable_external_dependency_loading) return je.warn(e4 + " was requested but loading of external scripts is disabled."), i4("Loading of external scripts is disabled");
    var s4 = null == r3 ? void 0 : r3.querySelectorAll("script");
    if (s4) {
      for (var n3, o4 = function() {
        if (s4[a4].src === e4) {
          var t5 = s4[a4];
          return t5.__posthog_loading_callback_fired ? { v: i4() } : (t5.addEventListener("load", ((e5) => {
            t5.__posthog_loading_callback_fired = true, i4(void 0, e5);
          })), t5.onerror = (t6) => i4(t6), { v: void 0 });
        }
      }, a4 = 0; s4.length > a4; a4++) if (n3 = o4()) return n3.v;
    }
    var l4 = () => {
      if (!r3) return i4("document not found");
      var s5 = r3.createElement("script");
      if (s5.type = "text/javascript", s5.crossOrigin = "anonymous", s5.src = e4, s5.onload = (t5) => {
        s5.__posthog_loading_callback_fired = true, i4(void 0, t5);
      }, s5.onerror = (t5) => i4(t5), t4.config.prepare_external_dependency_script && (s5 = t4.config.prepare_external_dependency_script(s5)), !s5) return i4("prepare_external_dependency_script returned null");
      if ("head" === t4.config.external_scripts_inject_target) r3.head.appendChild(s5);
      else {
        var n4, o5 = r3.querySelectorAll("body > script");
        o5.length > 0 ? null == (n4 = o5[0].parentNode) || n4.insertBefore(s5, o5[0]) : r3.body.appendChild(s5);
      }
    };
    null != r3 && r3.body ? l4() : null == r3 || r3.addEventListener("DOMContentLoaded", l4);
  };
  h3.__PosthogExtensions__ = h3.__PosthogExtensions__ || {}, h3.__PosthogExtensions__.loadExternalDependency = (t4, e4, i4) => {
    if ("remote-config" !== e4) {
      var r4;
      if (t4.config.__preview_external_dependency_versioned_paths) r4 = t4.requestRouter.endpointFor("assets", "/static/" + t4.version + "/" + e4 + ".js");
      else {
        var s4 = "/static/" + e4 + ".js?v=" + t4.version;
        if ("toolbar" === e4) {
          var n3 = 3e5;
          s4 = s4 + "&t=" + Math.floor(Date.now() / n3) * n3;
        }
        r4 = t4.requestRouter.endpointFor("assets", s4);
      }
      ze(t4, r4, i4);
    } else {
      var o4 = t4.requestRouter.endpointFor("assets", "/array/" + t4.config.token + "/config.js");
      ze(t4, o4, i4);
    }
  }, h3.__PosthogExtensions__.loadSiteApp = (t4, e4, i4) => {
    var r4 = t4.requestRouter.endpointFor("api", e4);
    ze(t4, r4, i4);
  };
  var Be = "$people_distinct_id";
  var He = "$device_id";
  var qe = "__alias";
  var Ve = "__timers";
  var We = "$autocapture_disabled_server_side";
  var Ge = "$heatmaps_enabled_server_side";
  var Ye = "$exception_capture_enabled_server_side";
  var Je = "$error_tracking_suppression_rules";
  var Ke = "$error_tracking_capture_extension_exceptions";
  var Xe = "$web_vitals_enabled_server_side";
  var Qe = "$dead_clicks_enabled_server_side";
  var Ze = "$product_tours_enabled_server_side";
  var ti = "$web_vitals_allowed_metrics";
  var ei = "$session_recording_remote_config";
  var ii = "$replay_override_sampling";
  var ri = "$replay_override_linked_flag";
  var si = "$replay_override_url_trigger";
  var ni = "$replay_override_event_trigger";
  var oi = "$sesid";
  var ai = "$session_is_sampled";
  var li = "$enabled_feature_flags";
  var ui = "$active_feature_flags";
  var hi = "$early_access_features";
  var di = "$feature_flag_details";
  var vi = "$feature_flag_payloads";
  var ci = "$feature_flag_request_id";
  var pi = "$override_feature_flags";
  var fi = "$override_feature_flag_payloads";
  var _i = "$stored_person_properties";
  var gi = "$stored_group_properties";
  var mi = "$surveys";
  var bi = "$surveys_activated";
  var yi = "ph_product_tours";
  var wi = "$flag_call_reported";
  var xi = "$flag_call_reported_session_id";
  var Ei = "$feature_flag_errors";
  var Si = "$feature_flag_evaluated_at";
  var $i = "$user_state";
  var Ti = "$client_session_props";
  var ki = "$capture_rate_limit";
  var Ri = "$initial_campaign_params";
  var Pi = "$initial_referrer_info";
  var Oi = "$initial_person_info";
  var Ii = "$epp";
  var Ci = "__POSTHOG_TOOLBAR__";
  var Ai = "$posthog_cookieless";
  var Fi = "$sdk_debug_extensions_init_method";
  var Mi = "$sdk_debug_extensions_init_time_ms";
  var Di = "$sdk_debug_recording_script_not_loaded";
  var Ui = "PostHog loadExternalDependency extension not found.";
  var Li = "on_reject";
  var Ni = "always";
  var ji = "anonymous";
  var zi = "identified";
  var Bi = "identified_only";
  var Hi = "visibilitychange";
  var qi = "beforeunload";
  var Vi = "$pageview";
  var Wi = "$pageleave";
  var Gi = "$identify";
  var Yi = "$groupidentify";
  function Ji(t4, e4) {
    M(t4) && t4.forEach(e4);
  }
  function Ki(t4, e4) {
    if (!H2(t4)) if (M(t4)) t4.forEach(e4);
    else if (G2(t4)) t4.forEach(((t5, i5) => e4(t5, i5)));
    else for (var i4 in t4) A3.call(t4, i4) && e4(t4[i4], i4);
  }
  var Xi = function(t4) {
    for (var e4 = arguments.length, i4 = new Array(e4 > 1 ? e4 - 1 : 0), r4 = 1; e4 > r4; r4++) i4[r4 - 1] = arguments[r4];
    for (var s4 of i4) for (var n3 in s4) void 0 !== s4[n3] && (t4[n3] = s4[n3]);
    return t4;
  };
  function Qi(t4) {
    for (var e4 = Object.keys(t4), i4 = e4.length, r4 = new Array(i4); i4--; ) r4[i4] = [e4[i4], t4[e4[i4]]];
    return r4;
  }
  var Zi = function(t4) {
    try {
      return t4();
    } catch (t5) {
      return;
    }
  };
  var tr = function(t4) {
    return function() {
      try {
        for (var e4 = arguments.length, i4 = new Array(e4), r4 = 0; e4 > r4; r4++) i4[r4] = arguments[r4];
        return t4.apply(this, i4);
      } catch (t5) {
        Le.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), Le.critical(t5);
      }
    };
  };
  var er = function(t4) {
    var e4 = {};
    return Ki(t4, (function(t5, i4) {
      (j3(t5) && t5.length > 0 || q2(t5)) && (e4[i4] = t5);
    })), e4;
  };
  var ir = ["herokuapp.com", "vercel.app", "netlify.app"];
  function rr(t4) {
    var e4 = null == t4 ? void 0 : t4.hostname;
    if (!j3(e4)) return false;
    var i4 = e4.split(".").slice(-2).join(".");
    for (var r4 of ir) if (i4 === r4) return false;
    return true;
  }
  function sr(t4, e4, i4, r4) {
    var { capture: s4 = false, passive: n3 = true } = null != r4 ? r4 : {};
    null == t4 || t4.addEventListener(e4, i4, { capture: s4, passive: n3 });
  }
  function nr(t4) {
    return "ph_toolbar_internal" === t4.name;
  }
  Math.trunc || (Math.trunc = function(t4) {
    return 0 > t4 ? Math.ceil(t4) : Math.floor(t4);
  }), Number.isInteger || (Number.isInteger = function(t4) {
    return q2(t4) && isFinite(t4) && Math.floor(t4) === t4;
  });
  var or = class _or {
    constructor(t4) {
      if (this.bytes = t4, 16 !== t4.length) throw new TypeError("not 128-bit length");
    }
    static fromFieldsV7(t4, e4, i4, r4) {
      if (!Number.isInteger(t4) || !Number.isInteger(e4) || !Number.isInteger(i4) || !Number.isInteger(r4) || 0 > t4 || 0 > e4 || 0 > i4 || 0 > r4 || t4 > 281474976710655 || e4 > 4095 || i4 > 1073741823 || r4 > 4294967295) throw new RangeError("invalid field value");
      var s4 = new Uint8Array(16);
      return s4[0] = t4 / Math.pow(2, 40), s4[1] = t4 / Math.pow(2, 32), s4[2] = t4 / Math.pow(2, 24), s4[3] = t4 / Math.pow(2, 16), s4[4] = t4 / Math.pow(2, 8), s4[5] = t4, s4[6] = 112 | e4 >>> 8, s4[7] = e4, s4[8] = 128 | i4 >>> 24, s4[9] = i4 >>> 16, s4[10] = i4 >>> 8, s4[11] = i4, s4[12] = r4 >>> 24, s4[13] = r4 >>> 16, s4[14] = r4 >>> 8, s4[15] = r4, new _or(s4);
    }
    toString() {
      for (var t4 = "", e4 = 0; this.bytes.length > e4; e4++) t4 = t4 + (this.bytes[e4] >>> 4).toString(16) + (15 & this.bytes[e4]).toString(16), 3 !== e4 && 5 !== e4 && 7 !== e4 && 9 !== e4 || (t4 += "-");
      if (36 !== t4.length) throw new Error("Invalid UUIDv7 was generated");
      return t4;
    }
    clone() {
      return new _or(this.bytes.slice(0));
    }
    equals(t4) {
      return 0 === this.compareTo(t4);
    }
    compareTo(t4) {
      for (var e4 = 0; 16 > e4; e4++) {
        var i4 = this.bytes[e4] - t4.bytes[e4];
        if (0 !== i4) return Math.sign(i4);
      }
      return 0;
    }
  };
  var ar = class {
    constructor() {
      this.S = 0, this.C = 0, this.I = new hr();
    }
    generate() {
      var t4 = this.generateOrAbort();
      if (N2(t4)) {
        this.S = 0;
        var e4 = this.generateOrAbort();
        if (N2(e4)) throw new Error("Could not generate UUID after timestamp reset");
        return e4;
      }
      return t4;
    }
    generateOrAbort() {
      var t4 = Date.now();
      if (t4 > this.S) this.S = t4, this.T();
      else {
        if (this.S >= t4 + 1e4) return;
        this.C++, this.C > 4398046511103 && (this.S++, this.T());
      }
      return or.fromFieldsV7(this.S, Math.trunc(this.C / Math.pow(2, 30)), this.C & Math.pow(2, 30) - 1, this.I.nextUint32());
    }
    T() {
      this.C = 1024 * this.I.nextUint32() + (1023 & this.I.nextUint32());
    }
  };
  var lr;
  var ur = (t4) => {
    if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
    for (var e4 = 0; t4.length > e4; e4++) t4[e4] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
    return t4;
  };
  t3 && !N2(t3.crypto) && crypto.getRandomValues && (ur = (t4) => crypto.getRandomValues(t4));
  var hr = class {
    constructor() {
      this.M = new Uint32Array(8), this.O = 1 / 0;
    }
    nextUint32() {
      return this.M.length > this.O || (ur(this.M), this.O = 0), this.M[this.O++];
    }
  };
  var dr = () => vr().toString();
  var vr = () => (lr || (lr = new ar())).generate();
  var cr = "";
  var pr = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
  var fr = { R: () => !!r3, D(t4) {
    Le.error("cookieStore error: " + t4);
  }, A(t4) {
    if (r3) {
      try {
        for (var e4 = t4 + "=", i4 = r3.cookie.split(";").filter(((t5) => t5.length)), s4 = 0; i4.length > s4; s4++) {
          for (var n3 = i4[s4]; " " == n3.charAt(0); ) n3 = n3.substring(1, n3.length);
          if (0 === n3.indexOf(e4)) return decodeURIComponent(n3.substring(e4.length, n3.length));
        }
      } catch (t5) {
      }
      return null;
    }
  }, F(t4) {
    var e4;
    try {
      e4 = JSON.parse(fr.A(t4)) || {};
    } catch (t5) {
    }
    return e4;
  }, N(t4, e4, i4, s4, n3) {
    if (r3) try {
      var o4 = "", a4 = "", l4 = (function(t5, e5) {
        if (e5) {
          var i5 = (function(t6, e6) {
            if (void 0 === e6 && (e6 = r3), cr) return cr;
            if (!e6) return "";
            if (["localhost", "127.0.0.1"].includes(t6)) return "";
            for (var i6 = t6.split("."), s6 = Math.min(i6.length, 8), n4 = "dmn_chk_" + dr(); !cr && s6--; ) {
              var o5 = i6.slice(s6).join("."), a5 = n4 + "=1;domain=." + o5 + ";path=/";
              e6.cookie = a5 + ";max-age=3", e6.cookie.includes(n4) && (e6.cookie = a5 + ";max-age=0", cr = o5);
            }
            return cr;
          })(t5);
          if (!i5) {
            var s5 = ((t6) => {
              var e6 = t6.match(pr);
              return e6 ? e6[0] : "";
            })(t5);
            s5 !== i5 && Le.info("Warning: cookie subdomain discovery mismatch", s5, i5), i5 = s5;
          }
          return i5 ? "; domain=." + i5 : "";
        }
        return "";
      })(r3.location.hostname, s4);
      if (i4) {
        var u5 = /* @__PURE__ */ new Date();
        u5.setTime(u5.getTime() + 864e5 * i4), o4 = "; expires=" + u5.toUTCString();
      }
      n3 && (a4 = "; secure");
      var h4 = t4 + "=" + encodeURIComponent(JSON.stringify(e4)) + o4 + "; SameSite=Lax; path=/" + l4 + a4;
      return h4.length > 3686.4 && Le.warn("cookieStore warning: large cookie, len=" + h4.length), r3.cookie = h4, h4;
    } catch (t5) {
      return;
    }
  }, q(t4, e4) {
    if (null != r3 && r3.cookie) try {
      fr.N(t4, "", -1, e4);
    } catch (t5) {
      return;
    }
  } };
  var _r = null;
  var gr = { R() {
    if (!B3(_r)) return _r;
    var e4 = true;
    if (N2(t3)) e4 = false;
    else try {
      var i4 = "__mplssupport__";
      gr.N(i4, "xyz"), '"xyz"' !== gr.A(i4) && (e4 = false), gr.q(i4);
    } catch (t4) {
      e4 = false;
    }
    return e4 || Le.error("localStorage unsupported; falling back to cookie store"), _r = e4, e4;
  }, D(t4) {
    Le.error("localStorage error: " + t4);
  }, A(e4) {
    try {
      return null == t3 ? void 0 : t3.localStorage.getItem(e4);
    } catch (t4) {
      gr.D(t4);
    }
    return null;
  }, F(t4) {
    try {
      return JSON.parse(gr.A(t4)) || {};
    } catch (t5) {
    }
    return null;
  }, N(e4, i4) {
    try {
      null == t3 || t3.localStorage.setItem(e4, JSON.stringify(i4));
    } catch (t4) {
      gr.D(t4);
    }
  }, q(e4) {
    try {
      null == t3 || t3.localStorage.removeItem(e4);
    } catch (t4) {
      gr.D(t4);
    }
  } };
  var mr = [He, "distinct_id", oi, ai, Ii, Oi, $i];
  var br = {};
  var yr = { R: () => true, D(t4) {
    Le.error("memoryStorage error: " + t4);
  }, A: (t4) => br[t4] || null, F: (t4) => br[t4] || null, N(t4, e4) {
    br[t4] = e4;
  }, q(t4) {
    delete br[t4];
  } };
  var wr = null;
  var xr = { R() {
    if (!B3(wr)) return wr;
    if (wr = true, N2(t3)) wr = false;
    else try {
      var e4 = "__support__";
      xr.N(e4, "xyz"), '"xyz"' !== xr.A(e4) && (wr = false), xr.q(e4);
    } catch (t4) {
      wr = false;
    }
    return wr;
  }, D(t4) {
    Le.error("sessionStorage error: ", t4);
  }, A(e4) {
    try {
      return null == t3 ? void 0 : t3.sessionStorage.getItem(e4);
    } catch (t4) {
      xr.D(t4);
    }
    return null;
  }, F(t4) {
    try {
      return JSON.parse(xr.A(t4)) || null;
    } catch (t5) {
    }
    return null;
  }, N(e4, i4) {
    try {
      null == t3 || t3.sessionStorage.setItem(e4, JSON.stringify(i4));
    } catch (t4) {
      xr.D(t4);
    }
  }, q(e4) {
    try {
      null == t3 || t3.sessionStorage.removeItem(e4);
    } catch (t4) {
      xr.D(t4);
    }
  } };
  var Er = class {
    constructor(t4) {
      this._instance = t4;
    }
    get qt() {
      return this._instance.config;
    }
    get consent() {
      return this.rr() ? 0 : this.ir;
    }
    isOptedOut() {
      return this.qt.cookieless_mode === Ni || this.isRejected() || -1 === this.consent && this.qt.cookieless_mode === Li;
    }
    isOptedIn() {
      return !this.isOptedOut();
    }
    isExplicitlyOptedOut() {
      return 0 === this.consent;
    }
    isRejected() {
      return 0 === this.consent || -1 === this.consent && this.qt.opt_out_capturing_by_default;
    }
    optInOut(t4) {
      this.nr.N(this.sr, t4 ? 1 : 0, this.qt.cookie_expiration, this.qt.cross_subdomain_cookie, this.qt.secure_cookie);
    }
    reset() {
      this.nr.q(this.sr, this.qt.cross_subdomain_cookie);
    }
    get sr() {
      var { token: t4, opt_out_capturing_cookie_prefix: e4, consent_persistence_name: i4 } = this._instance.config;
      return i4 || (e4 ? e4 + t4 : "__ph_opt_in_out_" + t4);
    }
    get ir() {
      var t4 = this.nr.A(this.sr);
      return Z(t4) ? 1 : P2(tt, t4) ? 0 : -1;
    }
    get nr() {
      var t4 = this.qt.opt_out_capturing_persistence_type, e4 = "localStorage" === t4 ? gr : fr;
      if (!this.ar || this.ar !== e4) {
        this.ar = e4;
        var i4 = "localStorage" === t4 ? fr : gr;
        i4.A(this.sr) && (this.ar.A(this.sr) || this.optInOut(Z(i4.A(this.sr))), i4.q(this.sr, this.qt.cross_subdomain_cookie));
      }
      return this.ar;
    }
    rr() {
      return !!this.qt.respect_dnt && [null == i3 ? void 0 : i3.doNotTrack, null == i3 ? void 0 : i3.msDoNotTrack, h3.doNotTrack].some(((t4) => Z(t4)));
    }
  };
  var Sr = Ne("[Dead Clicks]");
  var $r = () => true;
  var Tr = (t4) => {
    var e4, i4 = !(null == (e4 = t4.instance.persistence) || !e4.get_property(Qe)), r4 = t4.instance.config.capture_dead_clicks;
    return W(r4) ? r4 : !!U(r4) || i4;
  };
  var kr = class {
    get lazyLoadedDeadClicksAutocapture() {
      return this.ur;
    }
    constructor(t4, e4, i4) {
      this.instance = t4, this.isEnabled = e4, this.onCapture = i4, this.startIfEnabledOrStop();
    }
    onRemoteConfig(t4) {
      "captureDeadClicks" in t4 && (this.instance.persistence && this.instance.persistence.register({ [Qe]: t4.captureDeadClicks }), this.startIfEnabledOrStop());
    }
    startIfEnabledOrStop() {
      this.isEnabled(this) ? this.lr((() => {
        this.hr();
      })) : this.stop();
    }
    lr(t4) {
      var e4, i4;
      null != (e4 = h3.__PosthogExtensions__) && e4.initDeadClicksAutocapture && t4(), null == (i4 = h3.__PosthogExtensions__) || null == i4.loadExternalDependency || i4.loadExternalDependency(this.instance, "dead-clicks-autocapture", ((e5) => {
        e5 ? Sr.error("failed to load script", e5) : t4();
      }));
    }
    hr() {
      var t4;
      if (r3) {
        if (!this.ur && null != (t4 = h3.__PosthogExtensions__) && t4.initDeadClicksAutocapture) {
          var e4 = U(this.instance.config.capture_dead_clicks) ? this.instance.config.capture_dead_clicks : {};
          e4.__onCapture = this.onCapture, this.ur = h3.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, e4), this.ur.start(r3), Sr.info("starting...");
        }
      } else Sr.error("`document` not found. Cannot start.");
    }
    stop() {
      this.ur && (this.ur.stop(), this.ur = void 0, Sr.info("stopping..."));
    }
  };
  var Rr = Ne("[SegmentIntegration]");
  var Pr = "posthog-js";
  function Or(t4, e4) {
    var { organization: i4, projectId: r4, prefix: s4, severityAllowList: n3 = ["error"], sendExceptionsToPostHog: o4 = true } = void 0 === e4 ? {} : e4;
    return (e5) => {
      var a4, l4, u5, h4, d4;
      if ("*" !== n3 && !n3.includes(e5.level) || !t4.__loaded) return e5;
      e5.tags || (e5.tags = {});
      var v4 = t4.requestRouter.endpointFor("ui", "/project/" + t4.config.token + "/person/" + t4.get_distinct_id());
      e5.tags["PostHog Person URL"] = v4, t4.sessionRecordingStarted() && (e5.tags["PostHog Recording URL"] = t4.get_session_replay_url({ withTimestamp: true }));
      var c4, p4 = (null == (a4 = e5.exception) ? void 0 : a4.values) || [], _3 = p4.map(((t5) => f4({}, t5, { stacktrace: t5.stacktrace ? f4({}, t5.stacktrace, { type: "raw", frames: (t5.stacktrace.frames || []).map(((t6) => f4({}, t6, { platform: "web:javascript" }))) }) : void 0 }))), g3 = { $exception_message: (null == (l4 = p4[0]) ? void 0 : l4.value) || e5.message, $exception_type: null == (u5 = p4[0]) ? void 0 : u5.type, $exception_level: e5.level, $exception_list: _3, $sentry_event_id: e5.event_id, $sentry_exception: e5.exception, $sentry_exception_message: (null == (h4 = p4[0]) ? void 0 : h4.value) || e5.message, $sentry_exception_type: null == (d4 = p4[0]) ? void 0 : d4.type, $sentry_tags: e5.tags };
      return i4 && r4 && (g3.$sentry_url = (s4 || "https://sentry.io/organizations/") + i4 + "/issues/?project=" + r4 + "&query=" + e5.event_id), o4 && (null == (c4 = t4.exceptions) || c4.sendExceptionEvent(g3)), e5;
    };
  }
  var Ir = class {
    constructor(t4, e4, i4, r4, s4, n3) {
      this.name = Pr, this.setupOnce = function(o4) {
        o4(Or(t4, { organization: e4, projectId: i4, prefix: r4, severityAllowList: s4, sendExceptionsToPostHog: null == n3 || n3 }));
      };
    }
  };
  var Cr = class {
    constructor(t4) {
      this.cr = (t5, e4, i4) => {
        i4 && (i4.noSessionId || i4.activityTimeout || i4.sessionPastMaximumLength) && (Le.info("[PageViewManager] Session rotated, clearing pageview state", { sessionId: t5, changeReason: i4 }), this.dr = void 0, this._instance.scrollManager.resetContext());
      }, this._instance = t4, this.vr();
    }
    vr() {
      var t4;
      this.pr = null == (t4 = this._instance.sessionManager) ? void 0 : t4.onSessionId(this.cr);
    }
    destroy() {
      var t4;
      null == (t4 = this.pr) || t4.call(this), this.pr = void 0;
    }
    doPageView(e4, i4) {
      var r4, s4 = this.gr(e4, i4);
      return this.dr = { pathname: null !== (r4 = null == t3 ? void 0 : t3.location.pathname) && void 0 !== r4 ? r4 : "", pageViewId: i4, timestamp: e4 }, this._instance.scrollManager.resetContext(), s4;
    }
    doPageLeave(t4) {
      var e4;
      return this.gr(t4, null == (e4 = this.dr) ? void 0 : e4.pageViewId);
    }
    doEvent() {
      var t4;
      return { $pageview_id: null == (t4 = this.dr) ? void 0 : t4.pageViewId };
    }
    gr(t4, e4) {
      var i4 = this.dr;
      if (!i4) return { $pageview_id: e4 };
      var r4 = { $pageview_id: e4, $prev_pageview_id: i4.pageViewId }, s4 = this._instance.scrollManager.getContext();
      if (s4 && !this._instance.config.disable_scroll_properties) {
        var { maxScrollHeight: n3, lastScrollY: o4, maxScrollY: a4, maxContentHeight: l4, lastContentY: u5, maxContentY: h4 } = s4;
        if (!(N2(n3) || N2(o4) || N2(a4) || N2(l4) || N2(u5) || N2(h4))) {
          n3 = Math.ceil(n3), o4 = Math.ceil(o4), a4 = Math.ceil(a4), l4 = Math.ceil(l4), u5 = Math.ceil(u5), h4 = Math.ceil(h4);
          var d4 = n3 > 1 ? et(o4 / n3, 0, 1, Le) : 1, v4 = n3 > 1 ? et(a4 / n3, 0, 1, Le) : 1, c4 = l4 > 1 ? et(u5 / l4, 0, 1, Le) : 1, p4 = l4 > 1 ? et(h4 / l4, 0, 1, Le) : 1;
          r4 = Xi(r4, { $prev_pageview_last_scroll: o4, $prev_pageview_last_scroll_percentage: d4, $prev_pageview_max_scroll: a4, $prev_pageview_max_scroll_percentage: v4, $prev_pageview_last_content: u5, $prev_pageview_last_content_percentage: c4, $prev_pageview_max_content: h4, $prev_pageview_max_content_percentage: p4 });
        }
      }
      return i4.pathname && (r4.$prev_pageview_pathname = i4.pathname), i4.timestamp && (r4.$prev_pageview_duration = (t4.getTime() - i4.timestamp.getTime()) / 1e3), r4;
    }
  };
  var Ar = { [Be]: { exposure: "hidden" }, [qe]: { exposure: "hidden" }, __cmpns: { exposure: "hidden" }, [Ve]: { exposure: "hidden" }, [We]: { exposure: "event" }, [Ge]: { exposure: "hidden" }, [Ye]: { exposure: "event" }, [Je]: { exposure: "hidden" }, [Ke]: { exposure: "event" }, [Xe]: { exposure: "event" }, [Qe]: { exposure: "event" }, [Ze]: { exposure: "hidden" }, [ti]: { exposure: "event" }, [ei]: { exposure: "hidden" }, $session_recording_enabled_server_side: { exposure: "hidden" }, [oi]: { exposure: "hidden" }, [ai]: { exposure: "event" }, $session_past_minimum_duration: { exposure: "event" }, $session_recording_url_trigger_activated_session: { exposure: "event" }, $session_recording_event_trigger_activated_session: { exposure: "event" }, $debug_first_full_snapshot_timestamp: { exposure: "event" }, [li]: { exposure: "derived", shouldSkipFromEventProperties: (t4, e4) => e4(), transformToEventProperties(t4) {
    if (!U(t4)) return {};
    for (var e4 = {}, i4 = Object.keys(t4), r4 = 0; i4.length > r4; r4++) e4["$feature/" + i4[r4]] = t4[i4[r4]];
    return e4;
  } }, [ui]: { exposure: "event" }, [hi]: { exposure: "hidden" }, [di]: { exposure: "hidden" }, [vi]: { exposure: "event" }, [ci]: { exposure: "event" }, [pi]: { exposure: "event" }, [fi]: { exposure: "hidden" }, [_i]: { exposure: "hidden" }, [gi]: { exposure: "hidden" }, [mi]: { exposure: "hidden" }, [bi]: { exposure: "event" }, [yi]: { exposure: "hidden" }, $product_tours_activated: { exposure: "hidden" }, $conversations_widget_session_id: { exposure: "event" }, $conversations_ticket_id: { exposure: "event" }, $conversations_widget_state: { exposure: "event" }, $conversations_user_traits: { exposure: "event" }, [wi]: { exposure: "hidden" }, [xi]: { exposure: "hidden" }, [Ei]: { exposure: "hidden" }, [Si]: { exposure: "hidden" }, [$i]: { exposure: "hidden" }, [Ti]: { exposure: "hidden" }, [ki]: { exposure: "hidden" }, [Ri]: { exposure: "hidden" }, [Pi]: { exposure: "hidden" }, [Oi]: { exposure: "hidden" }, [Ii]: { exposure: "hidden" }, [ii]: { exposure: "event" }, [ri]: { exposure: "event" }, [si]: { exposure: "event" }, [ni]: { exposure: "event" }, [Fi]: { exposure: "event" }, [Mi]: { exposure: "event" }, [Di]: { exposure: "event" }, $sdk_debug_replay_event_trigger_status: { exposure: "event" }, $sdk_debug_replay_linked_flag_trigger_status: { exposure: "event" }, $sdk_debug_replay_matched_recording_trigger_groups: { exposure: "event" }, $sdk_debug_replay_remote_trigger_matching_config: { exposure: "event" }, $sdk_debug_replay_trigger_groups_count: { exposure: "event" }, $sdk_debug_replay_url_trigger_status: { exposure: "event" }, $session_recording_start_reason: { exposure: "event" } };
  var Fr = [["$posthog_sr_group_event_trigger_", { exposure: "hidden" }], ["$posthog_sr_group_url_trigger_", { exposure: "hidden" }], ["$posthog_sr_group_sampling_", { exposure: "hidden" }]];
  var Mr = (t4) => {
    var e4 = null == r3 ? void 0 : r3.createElement("a");
    return N2(e4) ? null : (e4.href = t4, e4);
  };
  var Dr = function(t4, e4) {
    for (var i4, r4 = ((t4.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&"), s4 = 0; r4.length > s4; s4++) {
      var n3 = r4[s4].split("=");
      if (n3[0] === e4) {
        i4 = n3;
        break;
      }
    }
    if (!M(i4) || 2 > i4.length) return "";
    var o4 = i4[1];
    try {
      o4 = decodeURIComponent(o4);
    } catch (t5) {
      Le.error("Skipping decoding for malformed query param: " + o4);
    }
    return o4.replace(/\+/g, " ");
  };
  var Ur = function(t4, e4, i4) {
    if (!t4 || !e4 || !e4.length) return t4;
    for (var r4 = t4.split("#"), s4 = r4[1], n3 = (r4[0] || "").split("?"), o4 = n3[1], a4 = n3[0], l4 = (o4 || "").split("&"), u5 = [], h4 = 0; l4.length > h4; h4++) {
      var d4 = l4[h4].split("=");
      M(d4) && (e4.includes(d4[0]) ? u5.push(d4[0] + "=" + i4) : u5.push(l4[h4]));
    }
    var v4 = a4;
    return null != o4 && (v4 += "?" + u5.join("&")), null != s4 && (v4 += "#" + s4), v4;
  };
  var Lr = function(t4, e4) {
    var i4 = t4.match(new RegExp(e4 + "=([^&]*)"));
    return i4 ? i4[1] : null;
  };
  var Nr = "https?://(.*)";
  var jr = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "irclid", "_kx"];
  var zr = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", ...jr];
  var Br = "<masked>";
  var Hr = ["li_fat_id"];
  function qr(t4, e4, i4) {
    if (!r3) return {};
    var s4, n3 = e4 ? [...jr, ...i4 || []] : [], o4 = Vr(Ur(r3.URL, n3, Br), t4), a4 = (s4 = {}, Ki(Hr, (function(t5) {
      var e5 = fr.A(t5);
      s4[t5] = e5 || null;
    })), s4);
    return Xi(a4, o4);
  }
  function Vr(t4, e4) {
    var i4 = zr.concat(e4 || []), r4 = {};
    return Ki(i4, (function(e5) {
      var i5 = Dr(t4, e5);
      r4[e5] = i5 || null;
    })), r4;
  }
  function Wr(t4) {
    var e4 = (function(t5) {
      return t5 ? 0 === t5.search(Nr + "google.([^/?]*)") ? "google" : 0 === t5.search(Nr + "bing.com") ? "bing" : 0 === t5.search(Nr + "yahoo.com") ? "yahoo" : 0 === t5.search(Nr + "duckduckgo.com") ? "duckduckgo" : null : null;
    })(t4), i4 = "yahoo" != e4 ? "q" : "p", s4 = {};
    if (!B3(e4)) {
      s4.$search_engine = e4;
      var n3 = r3 ? Dr(r3.referrer, i4) : "";
      n3.length && (s4.ph_keyword = n3);
    }
    return s4;
  }
  function Gr() {
    return navigator.language || navigator.userLanguage;
  }
  var Yr = "$direct";
  function Jr() {
    return (null == r3 ? void 0 : r3.referrer) || Yr;
  }
  function Kr(t4, e4) {
    var i4 = t4 ? [...jr, ...e4 || []] : [], r4 = null == s3 ? void 0 : s3.href.substring(0, 1e3);
    return { r: Jr().substring(0, 1e3), u: r4 ? Ur(r4, i4, Br) : void 0 };
  }
  function Xr(t4) {
    var e4, { r: i4, u: r4 } = t4, s4 = { $referrer: i4, $referring_domain: null == i4 ? void 0 : i4 == Yr ? Yr : null == (e4 = Mr(i4)) ? void 0 : e4.host };
    if (r4) {
      s4.$current_url = r4;
      var n3 = Mr(r4);
      s4.$host = null == n3 ? void 0 : n3.host, s4.$pathname = null == n3 ? void 0 : n3.pathname;
      var o4 = Vr(r4);
      Xi(s4, o4);
    }
    if (i4) {
      var a4 = Wr(i4);
      Xi(s4, a4);
    }
    return s4;
  }
  function Qr() {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch (t4) {
      return;
    }
  }
  function Zr() {
    try {
      return (/* @__PURE__ */ new Date()).getTimezoneOffset();
    } catch (t4) {
      return;
    }
  }
  var ts = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"];
  var es2 = class {
    constructor(t4, e4) {
      this.qt = t4, this.props = {}, this.mr = false, this.yr = ((t5) => {
        var e5 = "";
        return t5.token && (e5 = t5.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), t5.persistence_name ? "ph_" + t5.persistence_name : "ph_" + e5 + "_posthog";
      })(t4), this.nr = this.br(t4), this.load(), t4.debug && Le.info("Persistence loaded", t4.persistence, f4({}, this.props)), this.update_config(t4, t4, e4), this.save();
    }
    isDisabled() {
      return !!this._r;
    }
    br(e4) {
      -1 === ts.indexOf(e4.persistence.toLowerCase()) && (Le.critical("Unknown persistence type " + e4.persistence + "; falling back to localStorage+cookie"), e4.persistence = "localStorage+cookie");
      var i4 = (function(e5) {
        void 0 === e5 && (e5 = []);
        var i5 = [...mr, ...e5];
        return f4({}, gr, { F(t4) {
          try {
            var e6 = {};
            try {
              e6 = fr.F(t4) || {};
            } catch (t5) {
            }
            var i6 = Xi(e6, JSON.parse(gr.A(t4) || "{}"));
            return gr.N(t4, i6), i6;
          } catch (t5) {
          }
          return null;
        }, N(t4, e6, r5, s4, n3, o4) {
          try {
            gr.N(t4, e6, void 0, void 0, o4);
            var a4 = {};
            i5.forEach(((t5) => {
              e6[t5] && (a4[t5] = e6[t5]);
            })), Object.keys(a4).length && fr.N(t4, a4, r5, s4, n3, o4);
          } catch (t5) {
            gr.D(t5);
          }
        }, q(e6, i6) {
          try {
            null == t3 || t3.localStorage.removeItem(e6), fr.q(e6, i6);
          } catch (t4) {
            gr.D(t4);
          }
        } });
      })(e4.cookie_persisted_properties || []), r4 = e4.persistence.toLowerCase();
      return "localstorage" === r4 && gr.R() ? gr : "localstorage+cookie" === r4 && i4.R() ? i4 : "sessionstorage" === r4 && xr.R() ? xr : "memory" === r4 ? yr : "cookie" === r4 ? fr : i4.R() ? i4 : fr;
    }
    wr(t4) {
      var e4 = null != t4 ? t4 : this.qt.feature_flag_cache_ttl_ms;
      if (!e4 || 0 >= e4) return false;
      var i4 = this.props[Si];
      return !i4 || "number" != typeof i4 || Date.now() - i4 > e4;
    }
    properties() {
      var t4 = {};
      return Ki(this.props, ((e4, i4) => {
        var r4 = ((t5) => {
          var e5 = Ar[t5];
          if (e5) return e5;
          for (var [i5, r5] of Fr) if (0 === t5.indexOf(i5)) return r5;
        })(i4);
        if ("derived" === (null == r4 ? void 0 : r4.exposure)) {
          if (null != r4.shouldSkipFromEventProperties && r4.shouldSkipFromEventProperties(e4, i4 === li ? () => this.wr() : () => false)) return;
          r4.transformToEventProperties && Xi(t4, r4.transformToEventProperties(e4));
        } else r4 && "event" !== r4.exposure || (t4[i4] = e4);
      })), t4;
    }
    load() {
      if (!this._r) {
        var t4 = this.nr.F(this.yr);
        t4 && (this.props = Xi({}, t4));
      }
    }
    save() {
      this._r || this.nr.N(this.yr, this.props, this.Sr, this.kr, this.Cr, this.qt.debug);
    }
    remove() {
      this.nr.q(this.yr, false), this.nr.q(this.yr, true);
    }
    clear() {
      this.remove(), this.props = {};
    }
    register_once(t4, e4, i4) {
      if (U(t4)) {
        N2(e4) && (e4 = "None"), this.Sr = N2(i4) ? this.Ir : i4;
        var r4 = false;
        if (Ki(t4, ((t5, i5) => {
          this.props.hasOwnProperty(i5) && this.props[i5] !== e4 || (this.Tr(i5, t5), r4 = true);
        })), r4) return this.save(), true;
      }
      return false;
    }
    register(t4, e4) {
      if (U(t4)) {
        this.Sr = N2(e4) ? this.Ir : e4;
        var i4 = false;
        if (Ki(t4, ((e5, r4) => {
          t4.hasOwnProperty(r4) && this.props[r4] !== e5 && (this.Tr(r4, e5), i4 = true);
        })), i4) return this.save(), true;
      }
      return false;
    }
    unregister(t4) {
      t4 in this.props && (this.Er(t4), this.save());
    }
    update_campaign_params() {
      if (!this.mr) {
        var t4 = qr(this.qt.custom_campaign_params, this.qt.mask_personal_data_properties, this.qt.custom_personal_data_properties);
        L2(er(t4)) || this.register(t4), this.mr = true;
      }
    }
    update_search_keyword() {
      var t4;
      this.register((t4 = null == r3 ? void 0 : r3.referrer) ? Wr(t4) : {});
    }
    update_referrer_info() {
      var t4;
      this.register_once({ $referrer: Jr(), $referring_domain: null != r3 && r3.referrer && (null == (t4 = Mr(r3.referrer)) ? void 0 : t4.host) || Yr }, void 0);
    }
    set_initial_person_info() {
      this.props[Ri] || this.props[Pi] || this.register_once({ [Oi]: Kr(this.qt.mask_personal_data_properties, this.qt.custom_personal_data_properties) }, void 0);
    }
    get_initial_props() {
      var t4 = {};
      Ki([Pi, Ri], ((e5) => {
        var i5 = this.props[e5];
        i5 && Ki(i5, (function(e6, i6) {
          t4["$initial_" + I2(i6)] = e6;
        }));
      }));
      var e4, i4, r4 = this.props[Oi];
      if (r4) {
        var s4 = (e4 = Xr(r4), i4 = {}, Ki(e4, (function(t5, e5) {
          i4["$initial_" + I2(e5)] = t5;
        })), i4);
        Xi(t4, s4);
      }
      return t4;
    }
    safe_merge(t4) {
      return Ki(this.props, (function(e4, i4) {
        i4 in t4 || (t4[i4] = e4);
      })), t4;
    }
    update_config(t4, e4, i4) {
      if (this.Ir = this.Sr = t4.cookie_expiration, this.set_disabled(t4.disable_persistence || !!i4), this.set_cross_subdomain(t4.cross_subdomain_cookie), this.set_secure(t4.secure_cookie), t4.persistence !== e4.persistence || !((t5, e5) => {
        if (t5.length !== e5.length) return false;
        var i5 = [...t5].sort(), r5 = [...e5].sort();
        return i5.every(((t6, e6) => t6 === r5[e6]));
      })(t4.cookie_persisted_properties || [], e4.cookie_persisted_properties || [])) {
        var r4 = this.br(t4), s4 = this.props;
        this.clear(), this.nr = r4, this.props = s4, this.save();
      }
    }
    set_disabled(t4) {
      this._r = t4, this._r ? this.remove() : this.save();
    }
    set_cross_subdomain(t4) {
      t4 !== this.kr && (this.kr = t4, this.remove(), this.save());
    }
    set_secure(t4) {
      t4 !== this.Cr && (this.Cr = t4, this.remove(), this.save());
    }
    set_event_timer(t4, e4) {
      var i4 = this.props[Ve] || {};
      i4[t4] = e4, this.Tr(Ve, i4), this.save();
    }
    remove_event_timer(t4) {
      var e4 = this.props[Ve] || {}, i4 = e4[t4];
      return N2(i4) || (delete e4[t4], this.Tr(Ve, e4), this.save()), i4;
    }
    get_property(t4) {
      return this.props[t4];
    }
    set_property(t4, e4) {
      this.Tr(t4, e4), this.save();
    }
    Tr(t4, e4) {
      this.props[t4] = e4;
    }
    Er(t4) {
      delete this.props[t4];
    }
  };
  var is = { Activation: "events", Cancellation: "cancelEvents" };
  var os = { Popover: "popover", API: "api", Widget: "widget", ExternalSurvey: "external_survey" };
  var hs = { SHOWN: "survey shown", DISMISSED: "survey dismissed", SENT: "survey sent", ABANDONED: "survey abandoned" };
  var ds = { SURVEY_ID: "$survey_id", SURVEY_NAME: "$survey_name", SURVEY_RESPONSE: "$survey_response", SURVEY_ITERATION: "$survey_iteration", SURVEY_ITERATION_START_DATE: "$survey_iteration_start_date", SURVEY_PARTIALLY_COMPLETED: "$survey_partially_completed", SURVEY_SUBMISSION_ID: "$survey_submission_id", SURVEY_QUESTIONS: "$survey_questions", SURVEY_COMPLETED: "$survey_completed", PRODUCT_TOUR_ID: "$product_tour_id", SURVEY_LAST_SEEN_DATE: "$survey_last_seen_date", SURVEY_LANGUAGE: "$survey_language" };
  var vs = { Popover: "popover", Inline: "inline" };
  var ps = { SHOWN: "product tour shown", DISMISSED: "product tour dismissed", COMPLETED: "product tour completed", STEP_SHOWN: "product tour step shown", STEP_COMPLETED: "product tour step completed", BUTTON_CLICKED: "product tour button clicked", STEP_SELECTOR_FAILED: "product tour step selector failed", BANNER_CONTAINER_SELECTOR_FAILED: "product tour banner container selector failed", BANNER_ACTION_CLICKED: "product tour banner action clicked" };
  var fs = { TOUR_ID: "$product_tour_id", TOUR_NAME: "$product_tour_name", TOUR_ITERATION: "$product_tour_iteration", TOUR_RENDER_REASON: "$product_tour_render_reason", TOUR_STEP_ID: "$product_tour_step_id", TOUR_STEP_ORDER: "$product_tour_step_order", TOUR_STEP_TYPE: "$product_tour_step_type", TOUR_DISMISS_REASON: "$product_tour_dismiss_reason", TOUR_BUTTON_TEXT: "$product_tour_button_text", TOUR_BUTTON_ACTION: "$product_tour_button_action", TOUR_BUTTON_LINK: "$product_tour_button_link", TOUR_BUTTON_TOUR_ID: "$product_tour_button_tour_id", TOUR_STEPS_COUNT: "$product_tour_steps_count", TOUR_STEP_SELECTOR: "$product_tour_step_selector", TOUR_STEP_SELECTOR_FOUND: "$product_tour_step_selector_found", TOUR_STEP_ELEMENT_TAG: "$product_tour_step_element_tag", TOUR_STEP_ELEMENT_ID: "$product_tour_step_element_id", TOUR_STEP_ELEMENT_CLASSES: "$product_tour_step_element_classes", TOUR_STEP_ELEMENT_TEXT: "$product_tour_step_element_text", TOUR_ERROR: "$product_tour_error", TOUR_MATCHES_COUNT: "$product_tour_matches_count", TOUR_FAILURE_PHASE: "$product_tour_failure_phase", TOUR_WAITED_FOR_ELEMENT: "$product_tour_waited_for_element", TOUR_WAIT_DURATION_MS: "$product_tour_wait_duration_ms", TOUR_BANNER_SELECTOR: "$product_tour_banner_selector", TOUR_LINKED_SURVEY_ID: "$product_tour_linked_survey_id", USE_MANUAL_SELECTOR: "$use_manual_selector", INFERENCE_DATA_PRESENT: "$inference_data_present", TOUR_LAST_SEEN_DATE: "$product_tour_last_seen_date", TOUR_TYPE: "$product_tour_type" };
  var _s = Ne("[RateLimiter]");
  var gs = class {
    constructor(t4) {
      this.serverLimits = {}, this.lastEventRateLimited = false, this.checkForLimiting = (t5) => {
        var e4 = t5.text;
        if (e4 && e4.length) try {
          (JSON.parse(e4).quota_limited || []).forEach(((t6) => {
            _s.info((t6 || "events") + " is quota limited."), this.serverLimits[t6] = (/* @__PURE__ */ new Date()).getTime() + 6e4;
          }));
        } catch (t6) {
          return void _s.warn('could not rate limit - continuing. Error: "' + (null == t6 ? void 0 : t6.message) + '"', { text: e4 });
        }
      }, this.instance = t4, this.lastEventRateLimited = this.clientRateLimitContext(true).isRateLimited;
    }
    get captureEventsPerSecond() {
      var t4;
      return (null == (t4 = this.instance.config.rate_limiting) ? void 0 : t4.events_per_second) || 10;
    }
    get captureEventsBurstLimit() {
      var t4;
      return Math.max((null == (t4 = this.instance.config.rate_limiting) ? void 0 : t4.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond);
    }
    clientRateLimitContext(t4) {
      var e4, i4, r4;
      void 0 === t4 && (t4 = false);
      var { captureEventsBurstLimit: s4, captureEventsPerSecond: n3 } = this, o4 = (/* @__PURE__ */ new Date()).getTime(), a4 = null !== (e4 = null == (i4 = this.instance.persistence) ? void 0 : i4.get_property(ki)) && void 0 !== e4 ? e4 : { tokens: s4, last: o4 };
      a4.tokens += (o4 - a4.last) / 1e3 * n3, a4.last = o4, a4.tokens > s4 && (a4.tokens = s4);
      var l4 = 1 > a4.tokens;
      return l4 || t4 || (a4.tokens = Math.max(0, a4.tokens - 1)), !l4 || this.lastEventRateLimited || t4 || this.instance.capture("$$client_ingestion_warning", { $$client_ingestion_warning_message: "posthog-js client rate limited. Config is set to " + n3 + " events per second and " + s4 + " events burst limit." }, { skip_client_rate_limiting: true }), this.lastEventRateLimited = l4, null == (r4 = this.instance.persistence) || r4.set_property(ki, a4), { isRateLimited: l4, remainingTokens: a4.tokens };
    }
    isServerRateLimited(t4) {
      var e4 = this.serverLimits[t4 || "events"] || false;
      return false !== e4 && (/* @__PURE__ */ new Date()).getTime() < e4;
    }
  };
  var ms = Ne("[RemoteConfig]");
  var bs = class {
    constructor(t4) {
      this._instance = t4;
    }
    get remoteConfig() {
      var t4;
      return null == (t4 = h3._POSTHOG_REMOTE_CONFIG) || null == (t4 = t4[this._instance.config.token]) ? void 0 : t4.config;
    }
    Mr(t4) {
      var e4, i4;
      null != (e4 = h3.__PosthogExtensions__) && e4.loadExternalDependency ? null == (i4 = h3.__PosthogExtensions__) || null == i4.loadExternalDependency || i4.loadExternalDependency(this._instance, "remote-config", (() => t4(this.remoteConfig))) : t4();
    }
    Pr(t4) {
      this._instance._send_request({ method: "GET", url: this._instance.requestRouter.endpointFor("assets", "/array/" + this._instance.config.token + "/config"), callback(e4) {
        t4(e4.json);
      } });
    }
    load() {
      try {
        if (this.remoteConfig) return ms.info("Using preloaded remote config", this.remoteConfig), this.Rr(this.remoteConfig), void this.Or();
        if (this._instance.Lr()) return void ms.warn("Remote config is disabled. Falling back to local config.");
        this.Mr(((t4) => {
          if (!t4) return ms.info("No config found after loading remote JS config. Falling back to JSON."), void this.Pr(((t5) => {
            this.Rr(t5), this.Or();
          }));
          this.Rr(t4), this.Or();
        }));
      } catch (t4) {
        ms.error("Error loading remote config", t4);
      }
    }
    stop() {
      this.Fr && (clearInterval(this.Fr), this.Fr = void 0);
    }
    refresh() {
      !this._instance.Lr() && r3 && "hidden" !== r3.visibilityState && this._instance.reloadFeatureFlags();
    }
    Or() {
      var t4;
      if (!this.Fr) {
        var e4 = null !== (t4 = this._instance.config.remote_config_refresh_interval_ms) && void 0 !== t4 ? t4 : 3e5;
        0 !== e4 && (this.Fr = setInterval((() => {
          this.refresh();
        }), e4));
      }
    }
    Rr(t4) {
      var e4;
      t4 || ms.error("Failed to fetch remote config from PostHog."), this._instance.Rr(null != t4 ? t4 : {}), false !== (null == t4 ? void 0 : t4.hasFeatureFlags) && (this._instance.config.advanced_disable_feature_flags_on_first_load || null == (e4 = this._instance.featureFlags) || e4.ensureFlagsLoaded());
    }
  };
  var ws = { GZipJS: "gzip-js", Base64: "base64" };
  var xs = Uint8Array;
  var Es = Uint16Array;
  var Ss = Uint32Array;
  var $s = new xs([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
  var Ts = new xs([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
  var ks = new xs([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  var Rs = function(t4, e4) {
    for (var i4 = new Es(31), r4 = 0; 31 > r4; ++r4) i4[r4] = e4 += 1 << t4[r4 - 1];
    var s4 = new Ss(i4[30]);
    for (r4 = 1; 30 > r4; ++r4) for (var n3 = i4[r4]; i4[r4 + 1] > n3; ++n3) s4[n3] = n3 - i4[r4] << 5 | r4;
    return [i4, s4];
  };
  var Ps = Rs($s, 2);
  var Os = Ps[1];
  Ps[0][28] = 258, Os[258] = 28;
  for (Is = Rs(Ts, 0)[1], Cs = new Es(32768), As = 0; 32768 > As; ++As) {
    Fs = (43690 & As) >>> 1 | (21845 & As) << 1;
    Cs[As] = ((65280 & (Fs = (61680 & (Fs = (52428 & Fs) >>> 2 | (13107 & Fs) << 2)) >>> 4 | (3855 & Fs) << 4)) >>> 8 | (255 & Fs) << 8) >>> 1;
  }
  var Fs;
  var Is;
  var Cs;
  var As;
  var Ms = function(t4, e4, i4) {
    for (var r4 = t4.length, s4 = 0, n3 = new Es(e4); r4 > s4; ++s4) ++n3[t4[s4] - 1];
    var o4, a4 = new Es(e4);
    for (s4 = 0; e4 > s4; ++s4) a4[s4] = a4[s4 - 1] + n3[s4 - 1] << 1;
    if (i4) {
      o4 = new Es(1 << e4);
      var l4 = 15 - e4;
      for (s4 = 0; r4 > s4; ++s4) if (t4[s4]) for (var u5 = s4 << 4 | t4[s4], h4 = e4 - t4[s4], d4 = a4[t4[s4] - 1]++ << h4, v4 = d4 | (1 << h4) - 1; v4 >= d4; ++d4) o4[Cs[d4] >>> l4] = u5;
    } else for (o4 = new Es(r4), s4 = 0; r4 > s4; ++s4) o4[s4] = Cs[a4[t4[s4] - 1]++] >>> 15 - t4[s4];
    return o4;
  };
  var Ds = new xs(288);
  for (As = 0; 144 > As; ++As) Ds[As] = 8;
  for (As = 144; 256 > As; ++As) Ds[As] = 9;
  for (As = 256; 280 > As; ++As) Ds[As] = 7;
  for (As = 280; 288 > As; ++As) Ds[As] = 8;
  var Us = new xs(32);
  for (As = 0; 32 > As; ++As) Us[As] = 5;
  var Ls = Ms(Ds, 9, 0);
  var Ns = Ms(Us, 5, 0);
  var js = function(t4) {
    return (t4 / 8 >> 0) + (7 & t4 && 1);
  };
  var zs = function(t4, e4, i4) {
    (null == i4 || i4 > t4.length) && (i4 = t4.length);
    var r4 = new (t4 instanceof Es ? Es : t4 instanceof Ss ? Ss : xs)(i4 - e4);
    return r4.set(t4.subarray(e4, i4)), r4;
  };
  var Bs = function(t4, e4, i4) {
    var r4 = e4 / 8 >> 0;
    t4[r4] |= i4 <<= 7 & e4, t4[r4 + 1] |= i4 >>> 8;
  };
  var Hs = function(t4, e4, i4) {
    var r4 = e4 / 8 >> 0;
    t4[r4] |= i4 <<= 7 & e4, t4[r4 + 1] |= i4 >>> 8, t4[r4 + 2] |= i4 >>> 16;
  };
  var qs = function(t4, e4) {
    for (var i4 = [], r4 = 0; t4.length > r4; ++r4) t4[r4] && i4.push({ s: r4, f: t4[r4] });
    var s4 = i4.length, n3 = i4.slice();
    if (!s4) return [new xs(0), 0];
    if (1 == s4) {
      var o4 = new xs(i4[0].s + 1);
      return o4[i4[0].s] = 1, [o4, 1];
    }
    i4.sort((function(t5, e5) {
      return t5.f - e5.f;
    })), i4.push({ s: -1, f: 25001 });
    var a4 = i4[0], l4 = i4[1], u5 = 0, h4 = 1, d4 = 2;
    for (i4[0] = { s: -1, f: a4.f + l4.f, l: a4, r: l4 }; h4 != s4 - 1; ) a4 = i4[i4[d4].f > i4[u5].f ? u5++ : d4++], l4 = i4[u5 != h4 && i4[d4].f > i4[u5].f ? u5++ : d4++], i4[h4++] = { s: -1, f: a4.f + l4.f, l: a4, r: l4 };
    var v4 = n3[0].s;
    for (r4 = 1; s4 > r4; ++r4) n3[r4].s > v4 && (v4 = n3[r4].s);
    var c4 = new Es(v4 + 1), p4 = Vs(i4[h4 - 1], c4, 0);
    if (p4 > e4) {
      r4 = 0;
      var f5 = 0, _3 = p4 - e4, g3 = 1 << _3;
      for (n3.sort((function(t5, e5) {
        return c4[e5.s] - c4[t5.s] || t5.f - e5.f;
      })); s4 > r4; ++r4) {
        var m4 = n3[r4].s;
        if (e4 >= c4[m4]) break;
        f5 += g3 - (1 << p4 - c4[m4]), c4[m4] = e4;
      }
      for (f5 >>>= _3; f5 > 0; ) {
        var b3 = n3[r4].s;
        e4 > c4[b3] ? f5 -= 1 << e4 - c4[b3]++ - 1 : ++r4;
      }
      for (; r4 >= 0 && f5; --r4) {
        var y4 = n3[r4].s;
        c4[y4] == e4 && (--c4[y4], ++f5);
      }
      p4 = e4;
    }
    return [new xs(c4), p4];
  };
  var Vs = function(t4, e4, i4) {
    return -1 == t4.s ? Math.max(Vs(t4.l, e4, i4 + 1), Vs(t4.r, e4, i4 + 1)) : e4[t4.s] = i4;
  };
  var Ws = function(t4) {
    for (var e4 = t4.length; e4 && !t4[--e4]; ) ;
    for (var i4 = new Es(++e4), r4 = 0, s4 = t4[0], n3 = 1, o4 = function(t5) {
      i4[r4++] = t5;
    }, a4 = 1; e4 >= a4; ++a4) if (t4[a4] == s4 && a4 != e4) ++n3;
    else {
      if (!s4 && n3 > 2) {
        for (; n3 > 138; n3 -= 138) o4(32754);
        n3 > 2 && (o4(n3 > 10 ? n3 - 11 << 5 | 28690 : n3 - 3 << 5 | 12305), n3 = 0);
      } else if (n3 > 3) {
        for (o4(s4), --n3; n3 > 6; n3 -= 6) o4(8304);
        n3 > 2 && (o4(n3 - 3 << 5 | 8208), n3 = 0);
      }
      for (; n3--; ) o4(s4);
      n3 = 1, s4 = t4[a4];
    }
    return [i4.subarray(0, r4), e4];
  };
  var Gs = function(t4, e4) {
    for (var i4 = 0, r4 = 0; e4.length > r4; ++r4) i4 += t4[r4] * e4[r4];
    return i4;
  };
  var Ys = function(t4, e4, i4) {
    var r4 = i4.length, s4 = js(e4 + 2);
    t4[s4] = 255 & r4, t4[s4 + 1] = r4 >>> 8, t4[s4 + 2] = 255 ^ t4[s4], t4[s4 + 3] = 255 ^ t4[s4 + 1];
    for (var n3 = 0; r4 > n3; ++n3) t4[s4 + n3 + 4] = i4[n3];
    return 8 * (s4 + 4 + r4);
  };
  var Js = function(t4, e4, i4, r4, s4, n3, o4, a4, l4, u5, h4) {
    Bs(e4, h4++, i4), ++s4[256];
    for (var d4 = qs(s4, 15), v4 = d4[0], c4 = d4[1], p4 = qs(n3, 15), f5 = p4[0], _3 = p4[1], g3 = Ws(v4), m4 = g3[0], b3 = g3[1], y4 = Ws(f5), w4 = y4[0], x3 = y4[1], E3 = new Es(19), S3 = 0; m4.length > S3; ++S3) E3[31 & m4[S3]]++;
    for (S3 = 0; w4.length > S3; ++S3) E3[31 & w4[S3]]++;
    for (var T4 = qs(E3, 7), k4 = T4[0], R4 = T4[1], P3 = 19; P3 > 4 && !k4[ks[P3 - 1]]; --P3) ;
    var O3, I3, C4, A4, F2 = u5 + 5 << 3, M2 = Gs(s4, Ds) + Gs(n3, Us) + o4, D4 = Gs(s4, v4) + Gs(n3, f5) + o4 + 14 + 3 * P3 + Gs(E3, k4) + (2 * E3[16] + 3 * E3[17] + 7 * E3[18]);
    if (M2 >= F2 && D4 >= F2) return Ys(e4, h4, t4.subarray(l4, l4 + u5));
    if (Bs(e4, h4, 1 + (M2 > D4)), h4 += 2, M2 > D4) {
      O3 = Ms(v4, c4, 0), I3 = v4, C4 = Ms(f5, _3, 0), A4 = f5;
      var U2 = Ms(k4, R4, 0);
      for (Bs(e4, h4, b3 - 257), Bs(e4, h4 + 5, x3 - 1), Bs(e4, h4 + 10, P3 - 4), h4 += 14, S3 = 0; P3 > S3; ++S3) Bs(e4, h4 + 3 * S3, k4[ks[S3]]);
      h4 += 3 * P3;
      for (var L3 = [m4, w4], N3 = 0; 2 > N3; ++N3) {
        var j4 = L3[N3];
        for (S3 = 0; j4.length > S3; ++S3) Bs(e4, h4, U2[z4 = 31 & j4[S3]]), h4 += k4[z4], z4 > 15 && (Bs(e4, h4, j4[S3] >>> 5 & 127), h4 += j4[S3] >>> 12);
      }
    } else O3 = Ls, I3 = Ds, C4 = Ns, A4 = Us;
    for (S3 = 0; a4 > S3; ++S3) if (r4[S3] > 255) {
      var z4;
      Hs(e4, h4, O3[257 + (z4 = r4[S3] >>> 18 & 31)]), h4 += I3[z4 + 257], z4 > 7 && (Bs(e4, h4, r4[S3] >>> 23 & 31), h4 += $s[z4]);
      var B4 = 31 & r4[S3];
      Hs(e4, h4, C4[B4]), h4 += A4[B4], B4 > 3 && (Hs(e4, h4, r4[S3] >>> 5 & 8191), h4 += Ts[B4]);
    } else Hs(e4, h4, O3[r4[S3]]), h4 += I3[r4[S3]];
    return Hs(e4, h4, O3[256]), h4 + I3[256];
  };
  var Ks = new Ss([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
  var Xs = (function() {
    for (var t4 = new Ss(256), e4 = 0; 256 > e4; ++e4) {
      for (var i4 = e4, r4 = 9; --r4; ) i4 = (1 & i4 && 3988292384) ^ i4 >>> 1;
      t4[e4] = i4;
    }
    return t4;
  })();
  var Qs = function(t4, e4, i4) {
    for (; i4; ++e4) t4[e4] = i4, i4 >>>= 8;
  };
  function Zs(t4, e4) {
    void 0 === e4 && (e4 = {});
    var i4 = /* @__PURE__ */ (function() {
      var t5 = 4294967295;
      return { p(e5) {
        for (var i5 = t5, r5 = 0; e5.length > r5; ++r5) i5 = Xs[255 & i5 ^ e5[r5]] ^ i5 >>> 8;
        t5 = i5;
      }, d() {
        return 4294967295 ^ t5;
      } };
    })(), r4 = t4.length;
    i4.p(t4);
    var s4, n3, o4, a4, l4, u5 = (a4 = 10 + ((s4 = e4).filename && s4.filename.length + 1 || 0), l4 = 8, (function(t5, e5, i5, r5, s5, n4) {
      var o5 = t5.length, a5 = new xs(r5 + o5 + 5 * (1 + Math.floor(o5 / 7e3)) + s5), l5 = a5.subarray(r5, a5.length - s5), u6 = 0;
      if (!e5 || 8 > o5) for (var h5 = 0; o5 >= h5; h5 += 65535) {
        var d4 = h5 + 65535;
        o5 > d4 ? u6 = Ys(l5, u6, t5.subarray(h5, d4)) : (l5[h5] = true, u6 = Ys(l5, u6, t5.subarray(h5, o5)));
      }
      else {
        for (var v4 = Ks[e5 - 1], c4 = v4 >>> 13, p4 = 8191 & v4, f5 = (1 << i5) - 1, _3 = new Es(32768), g3 = new Es(f5 + 1), m4 = Math.ceil(i5 / 3), b3 = 2 * m4, y4 = function(e6) {
          return (t5[e6] ^ t5[e6 + 1] << m4 ^ t5[e6 + 2] << b3) & f5;
        }, w4 = new Ss(25e3), x3 = new Es(288), E3 = new Es(32), S3 = 0, T4 = 0, k4 = (h5 = 0, 0), R4 = 0, P3 = 0; o5 > h5; ++h5) {
          var O3 = y4(h5), I3 = 32767 & h5, C4 = g3[O3];
          if (_3[I3] = C4, g3[O3] = I3, h5 >= R4) {
            var A4 = o5 - h5;
            if ((S3 > 7e3 || k4 > 24576) && A4 > 423) {
              u6 = Js(t5, l5, 0, w4, x3, E3, T4, k4, P3, h5 - P3, u6), k4 = S3 = T4 = 0, P3 = h5;
              for (var F2 = 0; 286 > F2; ++F2) x3[F2] = 0;
              for (F2 = 0; 30 > F2; ++F2) E3[F2] = 0;
            }
            var M2 = 2, D4 = 0, U2 = p4, L3 = I3 - C4 & 32767;
            if (A4 > 2 && O3 == y4(h5 - L3)) for (var N3 = Math.min(c4, A4) - 1, j4 = Math.min(32767, h5), z4 = Math.min(258, A4); j4 >= L3 && --U2 && I3 != C4; ) {
              if (t5[h5 + M2] == t5[h5 + M2 - L3]) {
                for (var B4 = 0; z4 > B4 && t5[h5 + B4] == t5[h5 + B4 - L3]; ++B4) ;
                if (B4 > M2) {
                  if (M2 = B4, D4 = L3, B4 > N3) break;
                  var H3 = Math.min(L3, B4 - 2), q3 = 0;
                  for (F2 = 0; H3 > F2; ++F2) {
                    var V3 = h5 - L3 + F2 + 32768 & 32767, W2 = V3 - _3[V3] + 32768 & 32767;
                    W2 > q3 && (q3 = W2, C4 = V3);
                  }
                }
              }
              L3 += (I3 = C4) - (C4 = _3[I3]) + 32768 & 32767;
            }
            if (D4) {
              w4[k4++] = 268435456 | Os[M2] << 18 | Is[D4];
              var G3 = 31 & Os[M2], Y2 = 31 & Is[D4];
              T4 += $s[G3] + Ts[Y2], ++x3[257 + G3], ++E3[Y2], R4 = h5 + M2, ++S3;
            } else w4[k4++] = t5[h5], ++x3[t5[h5]];
          }
        }
        u6 = Js(t5, l5, true, w4, x3, E3, T4, k4, P3, h5 - P3, u6);
      }
      return zs(a5, 0, r5 + js(u6) + s5);
    })(n3 = t4, null == (o4 = e4).level ? 6 : o4.level, null == o4.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(n3.length)))) : 12 + o4.mem, a4, l4)), h4 = u5.length;
    return (function(t5, e5) {
      var i5 = e5.filename;
      if (t5[0] = 31, t5[1] = 139, t5[2] = 8, t5[8] = 2 > e5.level ? 4 : 9 == e5.level ? 2 : 0, t5[9] = 3, 0 != e5.mtime && Qs(t5, 4, Math.floor(new Date(e5.mtime || Date.now()) / 1e3)), i5) {
        t5[3] = 8;
        for (var r5 = 0; i5.length >= r5; ++r5) t5[r5 + 10] = i5.charCodeAt(r5);
      }
    })(u5, e4), Qs(u5, h4 - 8, i4.d()), Qs(u5, h4 - 4, r4), u5;
  }
  var tn = !!o3 || !!n2;
  var en2 = "text/plain";
  var rn = false;
  var sn = (t4, e4) => {
    var [i4, r4] = t4.split("#"), [s4, n3] = i4.split("?");
    if (!n3) return t4;
    var o4 = n3.split("&").filter(((t5) => t5.split("=")[0] !== e4)).join("&");
    return s4 + (o4 ? "?" + o4 : "") + (r4 ? "#" + r4 : "");
  };
  var nn = function(t4, e4, i4) {
    var r4;
    void 0 === i4 && (i4 = true);
    var [s4, n3] = t4.split("?"), o4 = f4({}, e4), a4 = null !== (r4 = null == n3 ? void 0 : n3.split("&").map(((t5) => {
      var e5, [r5, s5] = t5.split("="), n4 = i4 && null !== (e5 = o4[r5]) && void 0 !== e5 ? e5 : s5;
      return delete o4[r5], r5 + "=" + n4;
    }))) && void 0 !== r4 ? r4 : [], l4 = (function(t5, e5) {
      var i5, r5;
      void 0 === e5 && (e5 = "&");
      var s5 = [];
      return Ki(t5, (function(t6, e6) {
        N2(t6) || N2(e6) || "undefined" === e6 || (i5 = encodeURIComponent(((t7) => t7 instanceof File)(t6) ? t6.name : t6.toString()), r5 = encodeURIComponent(e6), s5[s5.length] = r5 + "=" + i5);
      })), s5.join(e5);
    })(o4);
    return l4 && a4.push(l4), s4 + "?" + a4.join("&");
  };
  var on2 = (t4, e4) => JSON.stringify(t4, ((t5, e5) => "bigint" == typeof e5 ? e5.toString() : e5), e4);
  var an = (t4) => {
    if (t4.tr) return t4.tr;
    var { data: e4, compression: i4 } = t4;
    if (e4) {
      if (i4 === ws.GZipJS) {
        var r4 = Zs((function(t5, e5) {
          var i5 = t5.length;
          if ("undefined" != typeof TextEncoder) return new TextEncoder().encode(t5);
          for (var r5 = new xs(t5.length + (t5.length >>> 1)), s5 = 0, n4 = function(t6) {
            r5[s5++] = t6;
          }, o5 = 0; i5 > o5; ++o5) {
            if (s5 + 5 > r5.length) {
              var a4 = new xs(s5 + 8 + (i5 - o5 << 1));
              a4.set(r5), r5 = a4;
            }
            var l4 = t5.charCodeAt(o5);
            128 > l4 ? n4(l4) : 2048 > l4 ? (n4(192 | l4 >>> 6), n4(128 | 63 & l4)) : l4 > 55295 && 57344 > l4 ? (n4(240 | (l4 = 65536 + (1047552 & l4) | 1023 & t5.charCodeAt(++o5)) >>> 18), n4(128 | l4 >>> 12 & 63), n4(128 | l4 >>> 6 & 63), n4(128 | 63 & l4)) : (n4(224 | l4 >>> 12), n4(128 | l4 >>> 6 & 63), n4(128 | 63 & l4));
          }
          return zs(r5, 0, s5);
        })(on2(e4)), { mtime: 0 });
        return { contentType: en2, body: r4.buffer.slice(r4.byteOffset, r4.byteOffset + r4.byteLength), estimatedSize: r4.byteLength };
      }
      if (i4 === ws.Base64) {
        var s4 = (function(t5) {
          return t5 ? btoa(encodeURIComponent(t5).replace(/%([0-9A-F]{2})/g, ((t6, e5) => String.fromCharCode(parseInt(e5, 16))))) : t5;
        })(on2(e4)), n3 = ((t5) => "data=" + encodeURIComponent("string" == typeof t5 ? t5 : on2(t5)))(s4);
        return { contentType: "application/x-www-form-urlencoded", body: n3, estimatedSize: new Blob([n3]).size };
      }
      var o4 = on2(e4);
      return { contentType: "application/json", body: o4, estimatedSize: new Blob([o4]).size };
    }
  };
  var ln = (t4) => {
    var e4, i4, r4, s4 = an(t4);
    return !s4 || (i4 = t4.compression, r4 = Dr(t4.url, "compression"), i4 !== m3.GZipJS && r4 !== m3.GZipJS && "gzip" !== r4) || ((e4 = s4.body) instanceof ArrayBuffer ? w3(new Uint8Array(e4)) : ArrayBuffer.isView(e4) && w3(new Uint8Array(e4.buffer, e4.byteOffset, e4.byteLength))) ? { url: t4.url, encodedBody: s4 } : (rn = true, { url: sn(t4.url, "compression"), encodedBody: an(f4({}, t4, { compression: void 0, tr: void 0 })) });
  };
  var un = (function() {
    var t4 = p3((function* (t5) {
      var e4 = on2(t5.data), i4 = yield (function(t6, e5, i5) {
        return T3.apply(this, arguments);
      })(e4, v3.DEBUG, { rethrow: true });
      if (!i4) return t5;
      var r4 = yield i4.arrayBuffer();
      return f4({}, t5, { tr: { contentType: en2, body: r4, estimatedSize: r4.byteLength } });
    }));
    return function(e4) {
      return t4.apply(this, arguments);
    };
  })();
  var hn = (t4, e4) => nn(t4, { _: (/* @__PURE__ */ new Date()).getTime().toString(), ver: v3.JS_SDK_VERSION, compression: e4 });
  var dn = [];
  n2 && dn.push({ transport: "fetch", method(t4) {
    var e4, { url: i4, encodedBody: r4 } = ln(t4), { contentType: s4, body: o4, estimatedSize: l4 } = null != r4 ? r4 : {}, u5 = new Headers();
    Ki(t4.headers, (function(t5, e5) {
      u5.append(e5, t5);
    })), s4 && u5.append("Content-Type", s4);
    var h4 = null;
    if (a3) {
      var d4 = new a3();
      h4 = { signal: d4.signal, timeout: setTimeout((() => d4.abort()), t4.timeout) };
    }
    n2(i4, f4({ method: (null == t4 ? void 0 : t4.method) || "GET", headers: u5, keepalive: "POST" === t4.method && 52428.8 > (l4 || 0), body: o4, signal: null == (e4 = h4) ? void 0 : e4.signal }, t4.fetchOptions)).then(((e5) => e5.text().then(((i5) => {
      var r5 = { statusCode: e5.status, text: i5 };
      if (200 === e5.status) try {
        r5.json = JSON.parse(i5);
      } catch (t5) {
        Le.error(t5);
      }
      null == t4.callback || t4.callback(r5);
    })))).catch(((e5) => {
      Le.error(e5), null == t4.callback || t4.callback({ statusCode: 0, error: e5 });
    })).finally((() => h4 ? clearTimeout(h4.timeout) : null));
  } }), o3 && dn.push({ transport: "XHR", method(t4) {
    var e4 = new o3(), { url: i4, encodedBody: r4 } = ln(t4);
    e4.open(t4.method || "GET", i4, true);
    var { contentType: s4, body: n3 } = null != r4 ? r4 : {};
    Ki(t4.headers, (function(t5, i5) {
      e4.setRequestHeader(i5, t5);
    })), s4 && e4.setRequestHeader("Content-Type", s4), t4.timeout && (e4.timeout = t4.timeout), t4.disableXHRCredentials || (e4.withCredentials = true), e4.onreadystatechange = () => {
      if (4 === e4.readyState) {
        var i5 = { statusCode: e4.status, text: e4.responseText };
        if (200 === e4.status) try {
          i5.json = JSON.parse(e4.responseText);
        } catch (t5) {
        }
        null == t4.callback || t4.callback(i5);
      }
    }, e4.send(n3);
  } }), null != i3 && i3.sendBeacon && dn.push({ transport: "sendBeacon", method(t4) {
    try {
      var { url: e4, encodedBody: r4 } = ln(t4), s4 = nn(e4, { beacon: "1" }), { contentType: n3, body: o4 } = null != r4 ? r4 : {};
      if (!o4) return;
      var a4 = o4 instanceof Blob ? o4 : new Blob([o4], { type: n3 });
      i3.sendBeacon(s4, a4);
    } catch (t5) {
    }
  } });
  var vn = 3e3;
  var cn = class {
    constructor(t4, e4) {
      this.Ar = true, this.Nr = [], this.$r = et((null == e4 ? void 0 : e4.flush_interval_ms) || vn, 250, 5e3, Le.createLogger("flush interval"), vn), this.Dr = t4;
    }
    enqueue(t4) {
      this.Nr.push(t4), this.qr || this.jr();
    }
    unload() {
      this.Hr();
      var t4 = this.Nr.length > 0 ? this.Ur() : {}, e4 = Object.values(t4);
      [...e4.filter(((t5) => 0 === t5.url.indexOf("/e"))), ...e4.filter(((t5) => 0 !== t5.url.indexOf("/e")))].map(((t5) => {
        this.Dr(f4({}, t5, { transport: "sendBeacon" }));
      }));
    }
    enable() {
      this.Ar = false, this.jr();
    }
    jr() {
      var t4 = this;
      this.Ar || (this.qr = setTimeout((() => {
        if (this.Hr(), this.Nr.length > 0) {
          var e4 = this.Ur(), i4 = function() {
            var i5 = e4[r4], s4 = (/* @__PURE__ */ new Date()).getTime();
            i5.data && M(i5.data) && Ki(i5.data, ((t5) => {
              t5.offset = Math.abs(t5.timestamp - s4), delete t5.timestamp;
            })), t4.Dr(i5);
          };
          for (var r4 in e4) i4();
        }
      }), this.$r));
    }
    Hr() {
      clearTimeout(this.qr), this.qr = void 0;
    }
    Ur() {
      var t4 = {};
      return Ki(this.Nr, ((e4) => {
        var i4, r4 = e4, s4 = (r4 ? r4.batchKey : null) || r4.url;
        N2(t4[s4]) && (t4[s4] = f4({}, r4, { data: [] })), null == (i4 = t4[s4].data) || i4.push(r4.data);
      })), this.Nr = [], t4;
    }
  };
  var pn = ["retriesPerformedSoFar"];
  var fn = class {
    constructor(e4) {
      this.Br = false, this.zr = 3e3, this.Nr = [], this._instance = e4, this.Nr = [], this.Vr = true, !N2(t3) && "onLine" in t3.navigator && (this.Vr = t3.navigator.onLine, this.Wr = () => {
        this.Vr = true, this.Zr();
      }, this.Gr = () => {
        this.Vr = false;
      }, sr(t3, "online", this.Wr), sr(t3, "offline", this.Gr));
    }
    get length() {
      return this.Nr.length;
    }
    retriableRequest(t4) {
      var { retriesPerformedSoFar: e4 } = t4, i4 = _2(t4, pn);
      V2(e4) && (i4.url = nn(i4.url, { retry_count: e4 })), this._instance._send_request(f4({}, i4, { callback: (t5) => {
        200 === t5.statusCode || t5.statusCode >= 400 && 500 > t5.statusCode || (null != e4 ? e4 : 0) >= 10 ? null == i4.callback || i4.callback(t5) : this.Qr(f4({ retriesPerformedSoFar: e4 }, i4));
      } }));
    }
    Qr(t4) {
      var e4 = t4.retriesPerformedSoFar || 0;
      t4.retriesPerformedSoFar = e4 + 1;
      var i4 = (function(t5) {
        var e5 = 3e3 * Math.pow(2, t5), i5 = e5 / 2, r5 = Math.min(18e5, e5), s5 = Math.random() - 0.5;
        return Math.ceil(r5 + s5 * (r5 - i5));
      })(e4), r4 = Date.now() + i4;
      this.Nr.push({ retryAt: r4, requestOptions: t4 });
      var s4 = "Enqueued failed request for retry in " + i4;
      navigator.onLine || (s4 += " (Browser is offline)"), Le.warn(s4), this.Br || (this.Br = true, this.Jr());
    }
    Jr() {
      if (this.Kr && clearTimeout(this.Kr), 0 === this.Nr.length) return this.Br = false, void (this.Kr = void 0);
      this.Kr = setTimeout((() => {
        this.Vr && this.Nr.length > 0 && this.Zr(), this.Jr();
      }), this.zr);
    }
    Zr() {
      var t4 = Date.now(), e4 = [], i4 = this.Nr.filter(((i5) => t4 > i5.retryAt || (e4.push(i5), false)));
      if (this.Nr = e4, i4.length > 0) for (var { requestOptions: r4 } of i4) this.retriableRequest(r4);
    }
    unload() {
      for (var { requestOptions: e4 } of (this.Kr && (clearTimeout(this.Kr), this.Kr = void 0), this.Br = false, N2(t3) || (this.Wr && (t3.removeEventListener("online", this.Wr), this.Wr = void 0), this.Gr && (t3.removeEventListener("offline", this.Gr), this.Gr = void 0)), this.Nr)) try {
        this._instance._send_request(f4({}, e4, { transport: "sendBeacon" }));
      } catch (t4) {
        Le.error(t4);
      }
      this.Nr = [];
    }
  };
  var _n = class {
    constructor(t4) {
      this.Yr = () => {
        var t5, e4, i4, r4;
        this.Xr || (this.Xr = {});
        var s4 = this.scrollElement(), n3 = this.scrollY(), o4 = s4 ? Math.max(0, s4.scrollHeight - s4.clientHeight) : 0, a4 = n3 + ((null == s4 ? void 0 : s4.clientHeight) || 0), l4 = (null == s4 ? void 0 : s4.scrollHeight) || 0;
        this.Xr.lastScrollY = Math.ceil(n3), this.Xr.maxScrollY = Math.max(n3, null !== (t5 = this.Xr.maxScrollY) && void 0 !== t5 ? t5 : 0), this.Xr.maxScrollHeight = Math.max(o4, null !== (e4 = this.Xr.maxScrollHeight) && void 0 !== e4 ? e4 : 0), this.Xr.lastContentY = a4, this.Xr.maxContentY = Math.max(a4, null !== (i4 = this.Xr.maxContentY) && void 0 !== i4 ? i4 : 0), this.Xr.maxContentHeight = Math.max(l4, null !== (r4 = this.Xr.maxContentHeight) && void 0 !== r4 ? r4 : 0);
      }, this._instance = t4;
    }
    get ei() {
      return this._instance.config.scroll_root_selector;
    }
    getContext() {
      return this.Xr;
    }
    resetContext() {
      var t4 = this.Xr;
      return setTimeout(this.Yr, 0), t4;
    }
    startMeasuringScrollPosition() {
      sr(t3, "scroll", this.Yr, { capture: true }), sr(t3, "scrollend", this.Yr, { capture: true }), sr(t3, "resize", this.Yr);
    }
    scrollElement() {
      if (!this.ei) return null == t3 ? void 0 : t3.document.documentElement;
      var e4 = M(this.ei) ? this.ei : [this.ei];
      for (var i4 of e4) {
        var r4 = null == t3 ? void 0 : t3.document.querySelector(i4);
        if (r4) return r4;
      }
    }
    scrollY() {
      if (this.ei) {
        var e4 = this.scrollElement();
        return e4 && e4.scrollTop || 0;
      }
      return t3 && (t3.scrollY || t3.pageYOffset || t3.document.documentElement.scrollTop) || 0;
    }
    scrollX() {
      if (this.ei) {
        var e4 = this.scrollElement();
        return e4 && e4.scrollLeft || 0;
      }
      return t3 && (t3.scrollX || t3.pageXOffset || t3.document.documentElement.scrollLeft) || 0;
    }
  };
  var gn = (t4) => Kr(null == t4 ? void 0 : t4.config.mask_personal_data_properties, null == t4 ? void 0 : t4.config.custom_personal_data_properties);
  var mn = class {
    constructor(t4, e4, i4, r4) {
      this.ti = (t5) => {
        var e5 = this.ri();
        if (!e5 || e5.sessionId !== t5) {
          var i5 = { sessionId: t5, props: this.ii(this._instance) };
          this.ni.register({ [Ti]: i5 });
        }
      }, this._instance = t4, this.si = e4, this.ni = i4, this.ii = r4 || gn, this.si.onSessionId(this.ti);
    }
    ri() {
      return this.ni.props[Ti];
    }
    getSetOnceProps() {
      var t4, e4 = null == (t4 = this.ri()) ? void 0 : t4.props;
      return e4 ? "r" in e4 ? Xr(e4) : { $referring_domain: e4.referringDomain, $pathname: e4.initialPathName, utm_source: e4.utm_source, utm_campaign: e4.utm_campaign, utm_medium: e4.utm_medium, utm_content: e4.utm_content, utm_term: e4.utm_term } : {};
    }
    getSessionProps() {
      var t4 = {};
      return Ki(er(this.getSetOnceProps()), ((e4, i4) => {
        "$current_url" === i4 && (i4 = "url"), t4["$session_entry_" + I2(i4)] = e4;
      })), t4;
    }
  };
  var bn = class {
    constructor() {
      this.oi = {};
    }
    on(t4, e4) {
      return this.oi[t4] || (this.oi[t4] = []), this.oi[t4].push(e4), () => {
        this.oi[t4] = this.oi[t4].filter(((t5) => t5 !== e4));
      };
    }
    emit(t4, e4) {
      for (var i4 of this.oi[t4] || []) i4(e4);
      for (var r4 of this.oi["*"] || []) r4(t4, e4);
    }
  };
  var yn = Ne("[SessionId]");
  var wn = class {
    on(t4, e4) {
      return this.ai.on(t4, e4);
    }
    constructor(t4, e4, i4) {
      var r4;
      if (this.ui = [], this.li = void 0, this.ai = new bn(), this.hi = (t5, e5) => !(!V2(t5) || !V2(e5)) && Math.abs(t5 - e5) > this.sessionTimeoutMs, !t4.persistence) throw new Error("SessionIdManager requires a PostHogPersistence instance");
      if (t4.config.cookieless_mode === Ni) throw new Error('SessionIdManager cannot be used with cookieless_mode="always"');
      this.qt = t4.config, this.ni = t4.persistence, this.ci = void 0, this.di = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this.vi = e4 || dr, this.fi = i4 || dr;
      var s4 = this.qt.persistence_name || this.qt.token;
      if (this._sessionTimeoutMs = 1e3 * et(this.qt.session_idle_timeout_seconds || 1800, 60, 36e3, yn.createLogger("session_idle_timeout_seconds"), 1800), t4.register({ $configured_session_timeout_ms: this._sessionTimeoutMs }), this.pi(), this.gi = "ph_" + s4 + "_window_id", this.mi = "ph_" + s4 + "_primary_window_exists", this.yi()) {
        var n3 = xr.F(this.gi), o4 = xr.F(this.mi);
        n3 && !o4 ? this.ci = n3 : xr.q(this.gi), xr.N(this.mi, true);
      }
      if (null != (r4 = this.qt.bootstrap) && r4.sessionID) try {
        var a4 = ((t5) => {
          var e5 = this.qt.bootstrap.sessionID.replace(/-/g, "");
          if (32 !== e5.length) throw new Error("Not a valid UUID");
          if ("7" !== e5[12]) throw new Error("Not a UUIDv7");
          return parseInt(e5.substring(0, 12), 16);
        })();
        this.bi(this.qt.bootstrap.sessionID, (/* @__PURE__ */ new Date()).getTime(), a4);
      } catch (t5) {
        yn.error("Invalid sessionID in bootstrap", t5);
      }
      this.wi();
    }
    get sessionTimeoutMs() {
      return this._sessionTimeoutMs;
    }
    onSessionId(t4) {
      return N2(this.ui) && (this.ui = []), this.ui.push(t4), this.di && t4(this.di, this.ci), () => {
        this.ui = this.ui.filter(((e4) => e4 !== t4));
      };
    }
    yi() {
      return "memory" !== this.qt.persistence && !this.ni._r && xr.R();
    }
    xi(t4) {
      t4 !== this.ci && (this.ci = t4, this.yi() && xr.N(this.gi, t4));
    }
    Si() {
      return this.ci ? this.ci : this.yi() ? xr.F(this.gi) : null;
    }
    bi(t4, e4, i4) {
      t4 === this.di && e4 === this._sessionActivityTimestamp && i4 === this._sessionStartTimestamp || (this._sessionStartTimestamp = i4, this._sessionActivityTimestamp = e4, this.di = t4, this.ni.register({ [oi]: [e4, t4, i4] }));
    }
    ki() {
      var t4 = this.ni.props[oi];
      return M(t4) && 2 === t4.length && t4.push(t4[0]), t4 || [0, null, 0];
    }
    resetSessionId() {
      this.bi(null, null, null);
    }
    destroy() {
      clearTimeout(this.Ci), this.Ci = void 0, this.li && t3 && (t3.removeEventListener(qi, this.li, { capture: false }), this.li = void 0), this.ui = [];
    }
    wi() {
      this.li = () => {
        this.yi() && xr.q(this.mi);
      }, sr(t3, qi, this.li, { capture: false });
    }
    checkAndGetSessionAndWindowId(t4, e4) {
      if (void 0 === t4 && (t4 = false), void 0 === e4 && (e4 = null), this.qt.cookieless_mode === Ni) throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"');
      var i4 = e4 || (/* @__PURE__ */ new Date()).getTime(), [r4, s4, n3] = this.ki(), o4 = this.Si(), a4 = V2(n3) && Math.abs(i4 - n3) > 864e5, l4 = false, u5 = !s4, h4 = !u5 && !t4 && this.hi(i4, r4);
      u5 || h4 || a4 ? (s4 = this.vi(), o4 = this.fi(), yn.info("new session ID generated", { sessionId: s4, windowId: o4, changeReason: { noSessionId: u5, activityTimeout: h4, sessionPastMaximumLength: a4 } }), n3 = i4, l4 = true) : o4 || (o4 = this.fi(), l4 = true);
      var d4 = V2(r4) && t4 && !a4 ? r4 : i4, v4 = V2(n3) ? n3 : (/* @__PURE__ */ new Date()).getTime();
      return this.xi(o4), this.bi(s4, d4, v4), t4 || this.pi(), l4 && this.ui.forEach(((t5) => t5(s4, o4, l4 ? { noSessionId: u5, activityTimeout: h4, sessionPastMaximumLength: a4 } : void 0))), { sessionId: s4, windowId: o4, sessionStartTimestamp: v4, changeReason: l4 ? { noSessionId: u5, activityTimeout: h4, sessionPastMaximumLength: a4 } : void 0, lastActivityTimestamp: r4 };
    }
    pi() {
      clearTimeout(this.Ci), this.Ci = setTimeout((() => {
        var [t4] = this.ki();
        if (this.hi((/* @__PURE__ */ new Date()).getTime(), t4)) {
          var e4 = this.di;
          this.resetSessionId(), this.ai.emit("forcedIdleReset", { idleSessionId: e4 });
        }
      }), 1.1 * this.sessionTimeoutMs);
    }
  };
  var xn = function(t4, e4) {
    if (!t4) return false;
    var i4 = t4.userAgent;
    if (i4 && R3(i4, e4)) return true;
    try {
      var r4 = null == t4 ? void 0 : t4.userAgentData;
      if (null != r4 && r4.brands && r4.brands.some(((t5) => R3(null == t5 ? void 0 : t5.brand, e4)))) return true;
    } catch (t5) {
    }
    return !!t4.webdriver;
  };
  var En = function(t4, e4) {
    if (!(function(t5) {
      try {
        new RegExp(t5);
      } catch (t6) {
        return false;
      }
      return true;
    })(e4)) return false;
    try {
      return new RegExp(e4).test(t4);
    } catch (t5) {
      return false;
    }
  };
  function Sn(t4, e4, i4) {
    return on2({ distinct_id: t4, userPropertiesToSet: e4, userPropertiesToSetOnce: i4 });
  }
  var $n = { exact: (t4, e4) => e4.some(((e5) => t4.some(((t5) => e5 === t5)))), is_not: (t4, e4) => e4.every(((e5) => t4.every(((t5) => e5 !== t5)))), regex: (t4, e4) => e4.some(((e5) => t4.some(((t5) => En(e5, t5))))), not_regex: (t4, e4) => e4.every(((e5) => t4.every(((t5) => !En(e5, t5))))), icontains: (t4, e4) => e4.map(Tn).some(((e5) => t4.map(Tn).some(((t5) => e5.includes(t5))))), not_icontains: (t4, e4) => e4.map(Tn).every(((e5) => t4.map(Tn).every(((t5) => !e5.includes(t5))))), gt: (t4, e4) => e4.some(((e5) => {
    var i4 = parseFloat(e5);
    return !isNaN(i4) && t4.some(((t5) => i4 > parseFloat(t5)));
  })), lt: (t4, e4) => e4.some(((e5) => {
    var i4 = parseFloat(e5);
    return !isNaN(i4) && t4.some(((t5) => i4 < parseFloat(t5)));
  })) };
  var Tn = (t4) => t4.toLowerCase();
  function kn(t4, e4) {
    return !t4 || Object.entries(t4).every(((t5) => {
      var [i4, r4] = t5, s4 = null == e4 ? void 0 : e4[i4];
      if (N2(s4) || B3(s4)) return false;
      var n3 = [String(s4)], o4 = $n[r4.operator];
      return !!o4 && o4(r4.values, n3);
    }));
  }
  var Rn = "custom";
  var Pn = "i.posthog.com";
  var On = /^\/static\//;
  var In = class {
    constructor(t4) {
      this.Ii = {}, this.instance = t4;
    }
    get apiHost() {
      var t4 = this.instance.config.api_host.trim().replace(/\/$/, "");
      return "https://app.posthog.com" === t4 ? "https://us.i.posthog.com" : t4;
    }
    get flagsApiHost() {
      var t4 = this.instance.config.flags_api_host;
      return t4 ? t4.trim().replace(/\/$/, "") : this.apiHost;
    }
    get uiHost() {
      var t4, e4 = null == (t4 = this.instance.config.ui_host) ? void 0 : t4.replace(/\/$/, "");
      return e4 || (e4 = this.apiHost.replace("." + Pn, ".posthog.com")), "https://app.posthog.com" === e4 ? "https://us.posthog.com" : e4;
    }
    get region() {
      return this.Ii[this.apiHost] || (this.Ii[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "us" : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "eu" : Rn), this.Ii[this.apiHost];
    }
    Ti(t4) {
      var e4 = this.instance.config.__preview_external_dependency_versioned_paths;
      if ("string" == typeof e4 && On.test(t4)) return e4.trim().replace(/\/$/, "") || void 0;
    }
    endpointFor(t4, e4) {
      if (void 0 === e4 && (e4 = ""), e4 && (e4 = "/" === e4[0] ? e4 : "/" + e4), "ui" === t4) return this.uiHost + e4;
      if ("flags" === t4) return this.flagsApiHost + e4;
      if ("assets" === t4) {
        var i4 = this.Ti(e4);
        if (i4) return "" + i4 + e4;
      }
      if (this.region === Rn) return this.apiHost + e4;
      var r4 = Pn + e4;
      switch (t4) {
        case "assets":
          return "https://" + this.region + "-assets." + r4;
        case "api":
          return "https://" + this.region + "." + r4;
      }
    }
  };
  var Cn = Ne("[Surveys]");
  var An = "seenSurvey_";
  var Fn = [os.Popover, os.Widget, os.API];
  var Mn = { ignoreConditions: false, ignoreDelay: false, displayType: vs.Popover };
  var Dn = Ne("[PostHog ExternalIntegrations]");
  var Un = { intercom: "intercom-integration", crispChat: "crisp-chat-integration" };
  var Ln = class {
    constructor(t4) {
      this._instance = t4;
    }
    lr(t4, e4) {
      var i4;
      null == (i4 = h3.__PosthogExtensions__) || null == i4.loadExternalDependency || i4.loadExternalDependency(this._instance, t4, ((t5) => {
        if (t5) return Dn.error("failed to load script", t5);
        e4();
      }));
    }
    startIfEnabledOrStop() {
      var t4 = this, e4 = function(e5) {
        var i5, s5, n3;
        !r4 || null != (i5 = h3.__PosthogExtensions__) && null != (i5 = i5.integrations) && i5[e5] || t4.lr(Un[e5], (() => {
          var i6;
          null == (i6 = h3.__PosthogExtensions__) || null == (i6 = i6.integrations) || null == (i6 = i6[e5]) || i6.start(t4._instance);
        })), !r4 && null != (s5 = h3.__PosthogExtensions__) && null != (s5 = s5.integrations) && s5[e5] && (null == (n3 = h3.__PosthogExtensions__) || null == (n3 = n3.integrations) || null == (n3 = n3[e5]) || n3.stop());
      };
      for (var [i4, r4] of Object.entries(null !== (s4 = this._instance.config.integrations) && void 0 !== s4 ? s4 : {})) {
        var s4;
        e4(i4);
      }
    }
  };
  var Nn;
  var jn = {};
  var zn = 0;
  var Bn = () => {
  };
  var Hn = 'Consent opt in/out is not valid with cookieless_mode="always" and will be ignored';
  var qn = "Surveys module not available";
  var Vn = "sanitize_properties is deprecated. Use before_send instead";
  var Wn = "Invalid value for property_denylist config: ";
  var Gn = "posthog";
  var Yn = !tn && -1 === (null == u4 ? void 0 : u4.indexOf("MSIE")) && -1 === (null == u4 ? void 0 : u4.indexOf("Mozilla"));
  var Jn = (e4) => {
    var i4;
    return f4({ api_host: "https://us.i.posthog.com", flags_api_host: null, ui_host: null, token: "", autocapture: true, cross_subdomain_cookie: rr(null == r3 ? void 0 : r3.location), persistence: "localStorage+cookie", persistence_name: "", cookie_persisted_properties: [], loaded: Bn, save_campaign_params: true, custom_campaign_params: [], custom_blocked_useragents: [], save_referrer: true, capture_pageleave: "if_capture_pageview", defaults: null != e4 ? e4 : "unset", __preview_deferred_init_extensions: false, __preview_external_dependency_versioned_paths: false, debug: s3 && j3(null == s3 ? void 0 : s3.search) && -1 !== s3.search.indexOf("__posthog_debug=true") || false, cookie_expiration: 365, upgrade: false, disable_session_recording: false, disable_persistence: false, disable_web_experiments: true, disable_surveys: false, disable_surveys_automatic_display: false, disable_conversations: false, disable_product_tours: false, disable_external_dependency_loading: false, enable_recording_console_log: void 0, secure_cookie: "https:" === (null == t3 || null == (i4 = t3.location) ? void 0 : i4.protocol), ip: false, opt_out_capturing_by_default: false, opt_out_persistence_by_default: false, opt_out_useragent_filter: false, opt_out_capturing_persistence_type: "localStorage", consent_persistence_name: null, opt_out_capturing_cookie_prefix: null, opt_in_site_apps: false, property_denylist: [], respect_dnt: false, sanitize_properties: null, request_headers: {}, request_batching: true, properties_string_max_length: 65535, mask_all_element_attributes: false, mask_all_text: false, mask_personal_data_properties: false, custom_personal_data_properties: [], advanced_disable_flags: false, advanced_disable_decide: false, advanced_disable_feature_flags: false, advanced_disable_feature_flags_on_first_load: false, advanced_only_evaluate_survey_feature_flags: false, advanced_feature_flags_dedup_per_session: false, advanced_enable_surveys: false, advanced_disable_toolbar_metrics: false, feature_flag_request_timeout_ms: 3e3, surveys_request_timeout_ms: 1e4, on_request_error(t4) {
      Le.error("Bad HTTP status: " + t4.statusCode + " " + t4.text);
    }, get_device_id: (t4) => t4, capture_performance: void 0, name: "posthog", bootstrap: {}, disable_compression: false, session_idle_timeout_seconds: 1800, person_profiles: Bi, before_send: void 0, request_queue_config: { flush_interval_ms: vn }, error_tracking: {}, _onCapture: Bn, __preview_eager_load_replay: false }, ((t4) => ({ rageclick: !t4 || "2025-11-30" > t4 || { content_ignorelist: true }, capture_pageview: !t4 || "2025-05-24" > t4 || "history_change", session_recording: t4 && t4 >= "2025-11-30" ? { strictMinimumDuration: true } : {}, external_scripts_inject_target: t4 && t4 >= "2026-01-30" ? "head" : "body", internal_or_test_user_hostname: t4 && t4 >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0 }))(e4));
  };
  var Kn = [["process_person", "person_profiles"], ["xhr_headers", "request_headers"], ["cookie_name", "persistence_name"], ["disable_cookie", "disable_persistence"], ["store_google", "save_campaign_params"], ["verbose", "debug"]];
  var Xn = (t4) => {
    var e4 = {};
    for (var [i4, r4] of Kn) N2(t4[i4]) || (e4[r4] = t4[i4]);
    var s4 = Xi({}, e4, t4);
    return M(t4.property_blacklist) && (N2(t4.property_denylist) ? s4.property_denylist = t4.property_blacklist : M(t4.property_denylist) ? s4.property_denylist = [...t4.property_blacklist, ...t4.property_denylist] : Le.error(Wn + t4.property_denylist)), s4;
  };
  var Qn = class {
    constructor() {
      this.__forceAllowLocalhost = false;
    }
    get Ei() {
      return this.__forceAllowLocalhost;
    }
    set Ei(t4) {
      Le.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = t4;
    }
  };
  var Zn = class _Zn {
    Mi(t4, e4) {
      if (t4) {
        var i4 = this.Pi.indexOf(t4);
        -1 !== i4 && this.Pi.splice(i4, 1);
      }
      return this.Pi.push(e4), null == e4.initialize || e4.initialize(), e4;
    }
    Ri() {
      return this.config.cookieless_mode === Ni || this.config.cookieless_mode === Li && this.consent.isRejected();
    }
    get decideEndpointWasHit() {
      var t4, e4;
      return null !== (t4 = null == (e4 = this.featureFlags) ? void 0 : e4.hasLoadedFlags) && void 0 !== t4 && t4;
    }
    get flagsEndpointWasHit() {
      var t4, e4;
      return null !== (t4 = null == (e4 = this.featureFlags) ? void 0 : e4.hasLoadedFlags) && void 0 !== t4 && t4;
    }
    constructor() {
      var t4;
      this.webPerformance = new Qn(), this.Oi = false, this.version = v3.LIB_VERSION, this.Li = new bn(), this.Pi = [], this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = Jn(), this.SentryIntegration = Ir, this.sentryIntegration = (t5) => (function(t6, e5) {
        var i4 = Or(t6, e5);
        return { name: Pr, processEvent: (t7) => i4(t7) };
      })(this, t5), this.__request_queue = [], this.__loaded = false, this.analyticsDefaultEndpoint = "/e/", this.Fi = false, this.Ai = null, this.Ni = null, this.$i = null, this.scrollManager = new _n(this), this.pageViewManager = new Cr(this), this.rateLimiter = new gs(this), this.requestRouter = new In(this), this.consent = new Er(this), this.externalIntegrations = new Ln(this);
      var e4 = null !== (t4 = _Zn.__defaultExtensionClasses) && void 0 !== t4 ? t4 : {};
      this.featureFlags = e4.featureFlags && new e4.featureFlags(this), this.toolbar = e4.toolbar && new e4.toolbar(this), this.surveys = e4.surveys && new e4.surveys(this), this.conversations = e4.conversations && new e4.conversations(this), this.logs = e4.logs && new e4.logs(this), this.experiments = e4.experiments && new e4.experiments(this), this.exceptions = e4.exceptions && new e4.exceptions(this), this.people = { set: (t5, e5, i4) => {
        var r4 = j3(t5) ? { [t5]: e5 } : t5;
        this.setPersonProperties(r4), null == i4 || i4({});
      }, set_once: (t5, e5, i4) => {
        var r4 = j3(t5) ? { [t5]: e5 } : t5;
        this.setPersonProperties(void 0, r4), null == i4 || i4({});
      } }, this.on("eventCaptured", ((t5) => Le.info('send "' + (null == t5 ? void 0 : t5.event) + '"', t5)));
    }
    init(t4, e4, i4) {
      if (i4 && i4 !== Gn) {
        var r4, s4 = null !== (r4 = jn[i4]) && void 0 !== r4 ? r4 : new _Zn();
        return s4._init(t4, e4, i4), jn[i4] = s4, jn[Gn][i4] = s4, s4;
      }
      return this._init(t4, e4, i4);
    }
    _init(e4, i4, r4) {
      var s4, n3;
      if (void 0 === i4 && (i4 = {}), N2(e4) || z3(e4)) return Le.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
      if (this.__loaded) return console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op"), this;
      this.__loaded = true, this.config = {}, i4.debug = this.Di(i4.debug), this.qi = i4, this.ji = [], i4.person_profiles ? this.Ni = i4.person_profiles : i4.process_person && (this.Ni = i4.process_person), this.set_config(Xi({}, Jn(i4.defaults), Xn(i4), { name: r4, token: e4 })), this.config.on_xhr_error && Le.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = i4.disable_compression ? void 0 : ws.GZipJS;
      var o4 = this.Hi();
      this.persistence = new es2(this.config, o4), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new es2(f4({}, this.config, { persistence: "sessionStorage" }), o4);
      var a4 = f4({}, this.persistence.props), l4 = f4({}, this.sessionPersistence.props);
      this.register({ $initialization_time: (/* @__PURE__ */ new Date()).toISOString() }), this.Ui = new cn(((t4) => this.Bi(t4)), this.config.request_queue_config), this.zi = new fn(this), this.__request_queue = [];
      var u5 = this.Ri();
      if (u5 || (this.sessionManager = new wn(this), this.sessionPropsManager = new mn(this, this.sessionManager, this.persistence)), this.config.__preview_deferred_init_extensions ? (Le.info("Deferring extension initialization to improve startup performance"), setTimeout((() => {
        this.Vi(u5);
      }), 0)) : (Le.info("Initializing extensions synchronously"), this.Vi(u5)), v3.DEBUG = v3.DEBUG || this.config.debug, v3.DEBUG && Le.info("Starting in debug mode", { this: this, config: i4, thisC: f4({}, this.config), p: a4, s: l4 }), !this.config.identity_distinct_id || null != (s4 = i4.bootstrap) && s4.distinctID || (i4.bootstrap = f4({}, i4.bootstrap, { distinctID: this.config.identity_distinct_id, isIdentifiedID: true })), void 0 !== (null == (n3 = i4.bootstrap) ? void 0 : n3.distinctID)) {
        var h4 = i4.bootstrap.distinctID, d4 = this.get_distinct_id(), c4 = this.persistence.get_property($i);
        if (i4.bootstrap.isIdentifiedID && null != d4 && d4 !== h4 && c4 === ji) this.identify(h4);
        else if (i4.bootstrap.isIdentifiedID && null != d4 && d4 !== h4 && c4 === zi) Le.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");
        else {
          var p4 = this.config.get_device_id(dr()), _3 = i4.bootstrap.isIdentifiedID ? p4 : h4;
          this.persistence.set_property($i, i4.bootstrap.isIdentifiedID ? zi : ji), this.register({ distinct_id: h4, $device_id: _3 });
        }
      }
      if (u5) this.register_once({ distinct_id: Ai, $device_id: null }, "");
      else if (!this.get_distinct_id()) {
        var g3 = this.config.get_device_id(dr());
        this.register_once({ distinct_id: g3, $device_id: g3 }, ""), this.persistence.set_property($i, ji);
      }
      return sr(t3, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), { passive: false }), i4.segment ? (function(t4, e5) {
        var i5 = t4.config.segment;
        if (!i5) return e5();
        !(function(t5, e6) {
          var i6 = t5.config.segment;
          if (!i6) return e6();
          var r5 = (i7) => {
            var r6 = () => i7.anonymousId() || dr();
            t5.config.get_device_id = r6, i7.id() && (t5.register({ distinct_id: i7.id(), $device_id: r6() }), t5.persistence.set_property($i, zi)), e6();
          }, s5 = i6.user();
          "then" in s5 && D3(s5.then) ? s5.then(r5) : r5(s5);
        })(t4, (() => {
          i5.register(((t5) => {
            Promise && Promise.resolve || Rr.warn("This browser does not have Promise support, and can not use the segment integration");
            var e6 = (e7, i6) => {
              if (!i6) return e7;
              e7.event.userId || e7.event.anonymousId === t5.get_distinct_id() || (Rr.info("No userId set, resetting PostHog"), t5.reset()), e7.event.userId && e7.event.userId !== t5.get_distinct_id() && (Rr.info("UserId set, identifying with PostHog"), t5.identify(e7.event.userId));
              var r5 = t5.calculateEventProperties(i6, e7.event.properties);
              return e7.event.properties = Object.assign({}, r5, e7.event.properties), e7;
            };
            return { name: "PostHog JS", type: "enrichment", version: "1.0.0", isLoaded: () => true, load: () => Promise.resolve(), track: (t6) => e6(t6, t6.event.event), page: (t6) => e6(t6, Vi), identify: (t6) => e6(t6, Gi), screen: (t6) => e6(t6, "$screen") };
          })(t4)).then((() => {
            e5();
          }));
        }));
      })(this, (() => this.Wi())) : this.Wi(), D3(this.config._onCapture) && this.config._onCapture !== Bn && (Le.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", ((t4) => this.config._onCapture(t4.event, t4)))), this.config.ip && Le.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'), this;
    }
    Vi(t4) {
      var e4, i4, r4, s4, n3, o4, a4, l4 = performance.now(), u5 = f4({}, _Zn.__defaultExtensionClasses, this.config.__extensionClasses), h4 = [];
      u5.featureFlags && this.Pi.push(this.featureFlags = null !== (e4 = this.featureFlags) && void 0 !== e4 ? e4 : new u5.featureFlags(this)), u5.exceptions && this.Pi.push(this.exceptions = null !== (i4 = this.exceptions) && void 0 !== i4 ? i4 : new u5.exceptions(this)), u5.historyAutocapture && this.Pi.push(this.historyAutocapture = new u5.historyAutocapture(this)), u5.tracingHeaders && this.Pi.push(new u5.tracingHeaders(this)), u5.siteApps && this.Pi.push(this.siteApps = new u5.siteApps(this)), u5.sessionRecording && !t4 && this.Pi.push(this.sessionRecording = new u5.sessionRecording(this)), this.config.disable_scroll_properties || h4.push((() => {
        this.scrollManager.startMeasuringScrollPosition();
      })), u5.autocapture && this.Pi.push(this.autocapture = new u5.autocapture(this)), u5.surveys && this.Pi.push(this.surveys = null !== (r4 = this.surveys) && void 0 !== r4 ? r4 : new u5.surveys(this)), u5.logs && this.Pi.push(this.logs = null !== (s4 = this.logs) && void 0 !== s4 ? s4 : new u5.logs(this)), u5.conversations && this.Pi.push(this.conversations = null !== (n3 = this.conversations) && void 0 !== n3 ? n3 : new u5.conversations(this)), u5.productTours && this.Pi.push(this.productTours = new u5.productTours(this)), u5.heatmaps && this.Pi.push(this.heatmaps = new u5.heatmaps(this)), u5.webVitalsAutocapture && this.Pi.push(this.webVitalsAutocapture = new u5.webVitalsAutocapture(this)), u5.exceptionObserver && this.Pi.push(this.exceptionObserver = new u5.exceptionObserver(this)), u5.deadClicksAutocapture && this.Pi.push(this.deadClicksAutocapture = new u5.deadClicksAutocapture(this, Tr)), u5.toolbar && this.Pi.push(this.toolbar = null !== (o4 = this.toolbar) && void 0 !== o4 ? o4 : new u5.toolbar(this)), u5.experiments && this.Pi.push(this.experiments = null !== (a4 = this.experiments) && void 0 !== a4 ? a4 : new u5.experiments(this)), this.Pi.forEach(((t5) => {
        t5.initialize && h4.push((() => {
          null == t5.initialize || t5.initialize();
        }));
      })), h4.push((() => {
        if (this.Zi) {
          var t5 = this.Zi;
          this.Zi = void 0, this.Rr(t5);
        }
      })), this.Gi(h4, l4);
    }
    Gi(t4, e4) {
      for (; t4.length > 0; ) {
        if (this.config.__preview_deferred_init_extensions && performance.now() - e4 >= 30 && t4.length > 0) return void setTimeout((() => {
          this.Gi(t4, e4);
        }), 0);
        var i4 = t4.shift();
        if (i4) try {
          i4();
        } catch (t5) {
          Le.error("Error initializing extension:", t5);
        }
      }
      var r4 = Math.round(performance.now() - e4);
      this.register_for_session({ [Fi]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous", [Mi]: r4 }), this.config.__preview_deferred_init_extensions && Le.info("PostHog extensions initialized (" + r4 + "ms)");
    }
    Rr(t4) {
      var e4;
      if (!r3 || !r3.body) return Le.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((() => {
        this.Rr(t4);
      }), 500);
      this.config.__preview_deferred_init_extensions && (this.Zi = t4), this.Qi = t4, this.compression = void 0, t4.supportedCompression && !this.config.disable_compression && (this.compression = P2(t4.supportedCompression, ws.GZipJS) ? ws.GZipJS : P2(t4.supportedCompression, ws.Base64) ? ws.Base64 : void 0), null != (e4 = t4.analytics) && e4.endpoint && (this.analyticsDefaultEndpoint = t4.analytics.endpoint), this.set_config({ person_profiles: this.Ni ? this.Ni : Bi }), this.Pi.forEach(((e5) => null == e5.onRemoteConfig ? void 0 : e5.onRemoteConfig(t4)));
    }
    Wi() {
      try {
        this.config.loaded(this);
      } catch (t5) {
        Le.critical("`loaded` function failed", t5);
      }
      if (this.Ji(), this.config.internal_or_test_user_hostname && null != s3 && s3.hostname) {
        var t4 = s3.hostname, e4 = this.config.internal_or_test_user_hostname;
        ("string" == typeof e4 ? t4 === e4 : e4.test(t4)) && this.setInternalOrTestUser();
      }
      this.config.capture_pageview && setTimeout((() => {
        (this.consent.isOptedIn() || this.Ri()) && this.Ki();
      }), 1), this.Yi = new bs(this), this.Yi.load();
    }
    Ji() {
      var t4;
      this.is_capturing() && this.config.request_batching && (null == (t4 = this.Ui) || t4.enable());
    }
    _dom_loaded() {
      this.is_capturing() && Ji(this.__request_queue, ((t4) => this.Bi(t4))), this.__request_queue = [], this.Ji();
    }
    _handle_unload() {
      var t4, e4, i4, r4;
      null == (t4 = this.surveys) || t4.handlePageUnload(), this.config.request_batching ? (this.Xi() && this.capture(Wi), null == (e4 = this.logs) || e4.flushLogs("sendBeacon"), null == (i4 = this.Ui) || i4.unload(), null == (r4 = this.zi) || r4.unload()) : this.Xi() && this.capture(Wi, null, { transport: "sendBeacon" });
    }
    _send_request(t4) {
      this.__loaded && (Yn ? this.__request_queue.push(t4) : this.rateLimiter.isServerRateLimited(t4.batchKey) || (t4.transport = t4.transport || this.config.api_transport, t4.url = nn(t4.url, { ip: this.config.ip ? 1 : 0 }), t4.headers = f4({}, this.config.request_headers, t4.headers), t4.compression = "best-available" === t4.compression ? this.compression : t4.compression, t4.disableXHRCredentials = this.config.__preview_disable_xhr_credentials, this.config.__preview_disable_beacon && (t4.disableTransport = ["sendBeacon"]), t4.fetchOptions = t4.fetchOptions || this.config.fetch_options, ((t5) => {
        var e4, i4, r4, s4 = f4({}, t5);
        s4.timeout = s4.timeout || 6e4, s4.url = hn(s4.url, s4.compression);
        var n3 = null !== (e4 = s4.transport) && void 0 !== e4 ? e4 : "fetch", o4 = dn.filter(((t6) => !s4.disableTransport || !t6.transport || !s4.disableTransport.includes(t6.transport))), a4 = null !== (i4 = null == (r4 = (function(t6, e5) {
          for (var i5 = 0; t6.length > i5; i5++) if (t6[i5].transport === n3) return t6[i5];
        })(o4)) ? void 0 : r4.method) && void 0 !== i4 ? i4 : o4[0].method;
        if (!a4) throw new Error("No available transport method");
        "sendBeacon" !== n3 && s4.data && s4.compression === ws.GZipJS && l3 && !rn ? un(s4).then(((t6) => {
          a4(t6);
        })).catch(((e5) => {
          if (x2(e5)) return rn = true, void a4(f4({}, s4, { compression: void 0, url: hn(t5.url, void 0) }));
          ((t6) => {
            if (!t6 || "object" != typeof t6) return false;
            var e6 = "name" in t6 ? String(t6.name) : "";
            return x2(t6) || e6 === y3;
          })(e5) && (rn = true), a4(s4);
        })) : a4(s4);
      })(f4({}, t4, { callback: (e4) => {
        var i4, r4;
        this.rateLimiter.checkForLimiting(e4), 400 > e4.statusCode || null == (i4 = (r4 = this.config).on_request_error) || i4.call(r4, e4), null == t4.callback || t4.callback(e4);
      } }))));
    }
    Bi(t4) {
      this.zi ? this.zi.retriableRequest(t4) : this._send_request(t4);
    }
    _execute_array(t4) {
      zn++;
      try {
        var e4, i4 = [], r4 = [], s4 = [];
        Ji(t4, ((t5) => {
          if (t5) if (M(e4 = t5[0])) s4.push(t5);
          else if (D3(t5)) try {
            t5.call(this);
          } catch (e5) {
            Le.error("Error executing queued PostHog call", t5, e5);
          }
          else M(t5) && "alias" === e4 ? i4.push(t5) : M(t5) && -1 !== e4.indexOf("capture") && D3(this[e4]) ? s4.push(t5) : r4.push(t5);
        }));
        var n3 = function(t5, e5) {
          Ji(t5, (function(t6) {
            try {
              if (M(t6[0])) {
                var i5 = e5;
                Ki(t6, (function(t7) {
                  i5 = i5[t7[0]].apply(i5, t7.slice(1));
                }));
              } else e5[t6[0]].apply(e5, t6.slice(1));
            } catch (e6) {
              Le.error("Error executing queued PostHog call", t6, e6);
            }
          }));
        };
        n3(i4, this), n3(r4, this), n3(s4, this);
      } finally {
        zn--;
      }
    }
    push(t4) {
      if (zn > 0 && M(t4) && j3(t4[0])) {
        var e4 = _Zn.prototype[t4[0]];
        D3(e4) && e4.apply(this, t4.slice(1));
      } else this._execute_array([t4]);
    }
    capture(t4, e4, i4) {
      var r4, s4, n3, o4, a4;
      if (this.__loaded && this.persistence && this.sessionPersistence && this.Ui) {
        if (this.is_capturing()) if (!N2(t4) && j3(t4)) {
          var l4 = !this.config.opt_out_useragent_filter && this._is_bot();
          if (!l4 || this.config.__preview_capture_bot_pageviews) {
            var u5 = null != i4 && i4.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
            if (null == u5 || !u5.isRateLimited) {
              null != e4 && e4.$current_url && !j3(null == e4 ? void 0 : e4.$current_url) && (Le.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), null == e4 || delete e4.$current_url), "$exception" !== t4 || null != i4 && i4.en || Le.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
              var h4 = /* @__PURE__ */ new Date(), d4 = (null == i4 ? void 0 : i4.timestamp) || h4, v4 = (null == i4 ? void 0 : i4.uuid) || dr(), c4 = { uuid: v4, event: t4, properties: this.calculateEventProperties(t4, e4 || {}, d4, v4) };
              t4 === Vi && this.config.__preview_capture_bot_pageviews && l4 && (c4.event = "$bot_pageview", c4.properties.$browser_type = "bot"), u5 && (c4.properties.$lib_rate_limit_remaining_tokens = u5.remainingTokens), (null == i4 ? void 0 : i4.$set) && (c4.$set = null == i4 ? void 0 : i4.$set);
              var p4, _3, g3, m4 = this.tn(null == i4 ? void 0 : i4.$set_once, t4 !== Yi, t4 === Gi);
              if (m4 && (c4.$set_once = m4), null != i4 && i4._noTruncate || (s4 = this.config.properties_string_max_length, n3 = c4, o4 = (t5) => j3(t5) ? t5.slice(0, s4) : t5, a4 = /* @__PURE__ */ new Set(), c4 = (function t5(e5, i5) {
                return e5 !== Object(e5) ? o4 ? o4(e5) : e5 : a4.has(e5) ? void 0 : (a4.add(e5), M(e5) ? (r5 = [], Ji(e5, ((e6) => {
                  r5.push(t5(e6));
                }))) : (r5 = {}, Ki(e5, ((e6, i6) => {
                  a4.has(e6) || (r5[i6] = t5(e6, i6));
                }))), r5);
                var r5;
              })(n3)), c4.timestamp = d4, N2(null == i4 ? void 0 : i4.timestamp) || (c4.properties.$event_time_override_provided = true, c4.properties.$event_time_override_system_time = h4), t4 === hs.DISMISSED || t4 === hs.SENT) {
                var b3 = null == e4 ? void 0 : e4[ds.SURVEY_ID], y4 = null == e4 ? void 0 : e4[ds.SURVEY_ITERATION];
                ((t5) => {
                  try {
                    var e5 = ((t6) => ((t7, e6) => {
                      var i5 = "" + An + e6.id;
                      return e6.current_iteration && e6.current_iteration > 0 && (i5 = "" + An + e6.id + "_" + e6.current_iteration), i5;
                    })(0, t6))(t5);
                    if (localStorage.getItem(e5)) return;
                    localStorage.setItem(e5, "true");
                  } catch (t6) {
                    Cn.error("Failed to persist survey seen state", t6);
                  }
                })({ id: b3, current_iteration: y4 }), c4.$set = f4({}, c4.$set, { [(p4 = { id: b3, current_iteration: y4 }, _3 = t4 === hs.SENT ? "responded" : "dismissed", g3 = "$survey_" + _3 + "/" + p4.id, p4.current_iteration && p4.current_iteration > 0 && (g3 = "$survey_" + _3 + "/" + p4.id + "/" + p4.current_iteration), g3)]: true });
              } else t4 === hs.SHOWN && (c4.$set = f4({}, c4.$set, { [ds.SURVEY_LAST_SEEN_DATE]: (/* @__PURE__ */ new Date()).toISOString() }));
              if (t4 === ps.SHOWN) {
                var w4 = null == e4 ? void 0 : e4[fs.TOUR_TYPE];
                w4 && (c4.$set = f4({}, c4.$set, { [fs.TOUR_LAST_SEEN_DATE + "/" + w4]: (/* @__PURE__ */ new Date()).toISOString() }));
              }
              var x3 = f4({}, c4.properties.$set, c4.$set);
              if (L2(x3) || this.setPersonPropertiesForFlags(x3), !H2(this.config.before_send)) {
                var E3 = this.rn(c4);
                if (!E3) return;
                c4 = E3;
              }
              this.Li.emit("eventCaptured", c4);
              var S3 = { method: "POST", url: null !== (r4 = null == i4 ? void 0 : i4._url) && void 0 !== r4 ? r4 : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint), data: c4, compression: "best-available", batchKey: null == i4 ? void 0 : i4._batchKey, transport: null == i4 ? void 0 : i4.transport };
              return !this.config.request_batching || i4 && (null == i4 || !i4._batchKey) || null != i4 && i4.send_instantly ? this.Bi(S3) : this.Ui.enqueue(S3), c4;
            }
            Le.critical("This capture call is ignored due to client rate limiting.");
          }
        } else Le.error("No event name provided to posthog.capture");
      } else Le.uninitializedWarning("posthog.capture");
    }
    _addCaptureHook(t4) {
      return this.on("eventCaptured", ((e4) => t4(e4.event, e4)));
    }
    calculateEventProperties(e4, i4, n3, o4, a4) {
      if (n3 = n3 || /* @__PURE__ */ new Date(), !this.persistence || !this.sessionPersistence) return i4;
      var l4 = a4 ? void 0 : this.persistence.remove_event_timer(e4), h4 = f4({}, i4);
      if (h4.token = this.config.token, h4.$config_defaults = this.config.defaults, this.Ri() && (h4.$cookieless_mode = true), "$snapshot" === e4) {
        var d4 = f4({}, this.persistence.properties(), this.sessionPersistence.properties());
        return h4.distinct_id = d4.distinct_id, (!j3(h4.distinct_id) && !q2(h4.distinct_id) || z3(h4.distinct_id)) && Le.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), h4;
      }
      var c4, p4 = (function(e5, i5) {
        var r4, n4, o5, a5;
        if (!u4) return {};
        var l5, h5, d5, c5, p5, f5, _4, g4, m5 = e5 ? [...jr, ...i5 || []] : [], [b4, y5] = (function(t4) {
          for (var e6 = 0; Zt.length > e6; e6++) {
            var [i6, r5] = Zt[e6], s4 = i6.exec(t4), n5 = s4 && (D3(r5) ? r5(s4, t4) : r5);
            if (n5) return n5;
          }
          return ["", ""];
        })(u4);
        return Xi(er({ $os: b4, $os_version: y5, $browser: Kt(u4, navigator.vendor), $device: te(u4), $device_type: (h5 = u4, d5 = { userAgentDataPlatform: null == (r4 = navigator) || null == (r4 = r4.userAgentData) ? void 0 : r4.platform, maxTouchPoints: null == (n4 = navigator) ? void 0 : n4.maxTouchPoints, screenWidth: null == t3 || null == (o5 = t3.screen) ? void 0 : o5.width, screenHeight: null == t3 || null == (a5 = t3.screen) ? void 0 : a5.height, devicePixelRatio: null == t3 ? void 0 : t3.devicePixelRatio }, g4 = te(h5), g4 === dt || g4 === ht || "Kobo" === g4 || "Kindle Fire" === g4 || g4 === zt ? ut : g4 === Ot || g4 === Ct || g4 === It || g4 === Lt ? "Console" : g4 === ct ? "Wearable" : g4 ? ot : "Android" === (null == d5 ? void 0 : d5.userAgentDataPlatform) && (null !== (c5 = null == d5 ? void 0 : d5.maxTouchPoints) && void 0 !== c5 ? c5 : 0) > 0 ? 600 > Math.min(null !== (p5 = null == d5 ? void 0 : d5.screenWidth) && void 0 !== p5 ? p5 : 0, null !== (f5 = null == d5 ? void 0 : d5.screenHeight) && void 0 !== f5 ? f5 : 0) / (null !== (_4 = null == d5 ? void 0 : d5.devicePixelRatio) && void 0 !== _4 ? _4 : 1) ? ot : ut : "Desktop"), $timezone: Qr(), $timezone_offset: Zr() }), { $current_url: Ur(null == s3 ? void 0 : s3.href, m5, Br), $host: null == s3 ? void 0 : s3.host, $pathname: null == s3 ? void 0 : s3.pathname, $raw_user_agent: u4.length > 1e3 ? u4.substring(0, 997) + "..." : u4, $browser_version: Qt(u4, navigator.vendor), $browser_language: Gr(), $browser_language_prefix: (l5 = Gr(), "string" == typeof l5 ? l5.split("-")[0] : void 0), $screen_height: null == t3 ? void 0 : t3.screen.height, $screen_width: null == t3 ? void 0 : t3.screen.width, $viewport_height: null == t3 ? void 0 : t3.innerHeight, $viewport_width: null == t3 ? void 0 : t3.innerWidth, $lib: v3.LIB_NAME, $lib_version: v3.LIB_VERSION, $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10), $time: Date.now() / 1e3 });
      })(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties);
      if (this.sessionManager) {
        var { sessionId: _3, windowId: g3 } = this.sessionManager.checkAndGetSessionAndWindowId(a4, n3.getTime());
        h4.$session_id = _3, h4.$window_id = g3;
      }
      this.sessionPropsManager && Xi(h4, this.sessionPropsManager.getSessionProps());
      try {
        var m4;
        this.sessionRecording && Xi(h4, this.sessionRecording.sdkDebugProperties), h4.$sdk_debug_retry_queue_size = null == (m4 = this.zi) ? void 0 : m4.length;
      } catch (t4) {
        h4.$sdk_debug_error_capturing_properties = String(t4);
      }
      if (this.requestRouter.region === Rn && (h4.$lib_custom_api_host = this.config.api_host), c4 = e4 !== Vi || a4 ? e4 !== Wi || a4 ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(n3) : this.pageViewManager.doPageView(n3, o4), h4 = Xi(h4, c4), e4 === Vi && r3 && (h4.title = r3.title), !N2(l4)) {
        var b3 = n3.getTime() - l4;
        h4.$duration = parseFloat((b3 / 1e3).toFixed(3));
      }
      u4 && this.config.opt_out_useragent_filter && (h4.$browser_type = this._is_bot() ? "bot" : "browser"), (h4 = Xi({}, p4, this.persistence.properties(), this.sessionPersistence.properties(), h4)).$is_identified = this._isIdentified(), M(this.config.property_denylist) ? Ki(this.config.property_denylist, (function(t4) {
        delete h4[t4];
      })) : Le.error(Wn + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
      var y4 = this.config.sanitize_properties;
      y4 && (Le.error(Vn), h4 = y4(h4, e4));
      var w4 = this.nn();
      return h4.$process_person_profile = w4, w4 && !a4 && this.sn("_calculate_event_properties"), h4;
    }
    tn(t4, e4, i4) {
      var r4;
      if (void 0 === e4 && (e4 = true), void 0 === i4 && (i4 = false), !this.persistence || !this.nn()) return t4;
      if (this.Oi && !i4) return t4;
      var s4 = this.persistence.get_initial_props(), n3 = null == (r4 = this.sessionPropsManager) ? void 0 : r4.getSetOnceProps(), o4 = Xi({}, s4, n3 || {}, t4 || {}), a4 = this.config.sanitize_properties;
      return a4 && (Le.error(Vn), o4 = a4(o4, "$set_once")), e4 && (this.Oi = true), L2(o4) ? void 0 : o4;
    }
    register(t4, e4) {
      var i4;
      null == (i4 = this.persistence) || i4.register(t4, e4);
    }
    register_once(t4, e4, i4) {
      var r4;
      null == (r4 = this.persistence) || r4.register_once(t4, e4, i4);
    }
    register_for_session(t4) {
      var e4;
      null == (e4 = this.sessionPersistence) || e4.register(t4);
    }
    unregister(t4) {
      var e4;
      null == (e4 = this.persistence) || e4.unregister(t4);
    }
    unregister_for_session(t4) {
      var e4;
      null == (e4 = this.sessionPersistence) || e4.unregister(t4);
    }
    an(t4, e4) {
      this.register({ [t4]: e4 });
    }
    getFeatureFlag(t4, e4) {
      var i4;
      return null == (i4 = this.featureFlags) ? void 0 : i4.getFeatureFlag(t4, e4);
    }
    getFeatureFlagPayload(t4) {
      var e4;
      return null == (e4 = this.featureFlags) ? void 0 : e4.getFeatureFlagPayload(t4);
    }
    getFeatureFlagResult(t4, e4) {
      var i4;
      return null == (i4 = this.featureFlags) ? void 0 : i4.getFeatureFlagResult(t4, e4);
    }
    isFeatureEnabled(t4, e4) {
      var i4;
      return null == (i4 = this.featureFlags) ? void 0 : i4.isFeatureEnabled(t4, e4);
    }
    reloadFeatureFlags() {
      var t4;
      null == (t4 = this.featureFlags) || t4.reloadFeatureFlags();
    }
    updateFlags(t4, e4, i4) {
      var r4;
      null == (r4 = this.featureFlags) || r4.updateFlags(t4, e4, i4);
    }
    updateEarlyAccessFeatureEnrollment(t4, e4, i4) {
      var r4;
      null == (r4 = this.featureFlags) || r4.updateEarlyAccessFeatureEnrollment(t4, e4, i4);
    }
    getEarlyAccessFeatures(t4, e4, i4) {
      var r4;
      return void 0 === e4 && (e4 = false), null == (r4 = this.featureFlags) ? void 0 : r4.getEarlyAccessFeatures(t4, e4, i4);
    }
    on(t4, e4) {
      return this.Li.on(t4, e4);
    }
    onFeatureFlags(t4) {
      return this.featureFlags ? this.featureFlags.onFeatureFlags(t4) : (t4([], {}, { errorsLoading: true }), () => {
      });
    }
    onSurveysLoaded(t4) {
      return this.surveys ? this.surveys.onSurveysLoaded(t4) : (t4([], { isLoaded: false, error: qn }), () => {
      });
    }
    onSessionId(t4) {
      var e4, i4;
      return null !== (e4 = null == (i4 = this.sessionManager) ? void 0 : i4.onSessionId(t4)) && void 0 !== e4 ? e4 : () => {
      };
    }
    getSurveys(t4, e4) {
      void 0 === e4 && (e4 = false), this.surveys ? this.surveys.getSurveys(t4, e4) : t4([], { isLoaded: false, error: qn });
    }
    getActiveMatchingSurveys(t4, e4) {
      void 0 === e4 && (e4 = false), this.surveys ? this.surveys.getActiveMatchingSurveys(t4, e4) : t4([], { isLoaded: false, error: qn });
    }
    renderSurvey(t4, e4) {
      var i4;
      null == (i4 = this.surveys) || i4.renderSurvey(t4, e4);
    }
    displaySurvey(t4, e4) {
      var i4;
      void 0 === e4 && (e4 = Mn), null == (i4 = this.surveys) || i4.displaySurvey(t4, e4);
    }
    cancelPendingSurvey(t4) {
      var e4;
      null == (e4 = this.surveys) || e4.cancelPendingSurvey(t4);
    }
    canRenderSurvey(t4) {
      var e4, i4;
      return null !== (e4 = null == (i4 = this.surveys) ? void 0 : i4.canRenderSurvey(t4)) && void 0 !== e4 ? e4 : { visible: false, disabledReason: qn };
    }
    canRenderSurveyAsync(t4, e4) {
      var i4, r4;
      return void 0 === e4 && (e4 = false), null !== (i4 = null == (r4 = this.surveys) ? void 0 : r4.canRenderSurveyAsync(t4, e4)) && void 0 !== i4 ? i4 : Promise.resolve({ visible: false, disabledReason: qn });
    }
    un(t4) {
      return !t4 || z3(t4) ? (Le.critical("Unique user id has not been set in posthog.identify"), false) : t4 === Ai ? (Le.critical('The string "' + t4 + '" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.'), false) : !["distinct_id", "distinctid"].includes(t4.toLowerCase()) && !["undefined", "null"].includes(t4.toLowerCase()) || (Le.critical('The string "' + t4 + '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'), false);
    }
    identify(t4, e4, i4) {
      if (!this.__loaded || !this.persistence) return Le.uninitializedWarning("posthog.identify");
      if (q2(t4) && (t4 = t4.toString(), Le.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), this.un(t4) && this.sn("posthog.identify")) {
        var r4 = this.get_distinct_id();
        this.register({ $user_id: t4 }), this.get_property(He) || this.register_once({ $had_persisted_distinct_id: true, $device_id: r4 }, ""), t4 !== r4 && t4 !== this.get_property(qe) && (this.unregister(qe), this.register({ distinct_id: t4 }));
        var s4, n3 = (this.persistence.get_property($i) || ji) === ji;
        t4 !== r4 && n3 ? (this.persistence.set_property($i, zi), this.setPersonPropertiesForFlags({ $set: e4 || {}, $set_once: i4 || {} }, false), this.capture(Gi, { distinct_id: t4, $anon_distinct_id: r4 }, { $set: e4 || {}, $set_once: i4 || {} }), this.$i = Sn(t4, e4, i4), null == (s4 = this.featureFlags) || s4.setAnonymousDistinctId(r4)) : (e4 || i4) && this.setPersonProperties(e4, i4), t4 !== r4 && (this.reloadFeatureFlags(), this.unregister(wi));
      }
    }
    setPersonProperties(t4, e4) {
      if ((t4 || e4) && this.sn("posthog.setPersonProperties")) {
        var i4 = Sn(this.get_distinct_id(), t4, e4);
        this.$i !== i4 ? (this.setPersonPropertiesForFlags({ $set: t4 || {}, $set_once: e4 || {} }, true), this.capture("$set", { $set: t4 || {}, $set_once: e4 || {} }), this.$i = i4) : Le.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.");
      }
    }
    group(t4, e4, i4) {
      if (t4 && e4) {
        var r4 = this.getGroups(), s4 = r4[t4] !== e4;
        if (s4 && this.resetGroupPropertiesForFlags(t4), this.register({ $groups: f4({}, r4, { [t4]: e4 }) }), s4 || i4) {
          var n3 = { $group_type: t4, $group_key: e4 };
          i4 && (n3.$group_set = i4), this.capture(Yi, n3);
        }
        i4 && this.setGroupPropertiesForFlags({ [t4]: i4 }), s4 && !i4 && this.reloadFeatureFlags();
      } else Le.error("posthog.group requires a group type and group key");
    }
    resetGroups() {
      this.register({ $groups: {} }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
    }
    setPersonPropertiesForFlags(t4, e4) {
      var i4;
      void 0 === e4 && (e4 = true), null == (i4 = this.featureFlags) || i4.setPersonPropertiesForFlags(t4, e4);
    }
    resetPersonPropertiesForFlags() {
      var t4;
      null == (t4 = this.featureFlags) || t4.resetPersonPropertiesForFlags();
    }
    setGroupPropertiesForFlags(t4, e4) {
      var i4;
      void 0 === e4 && (e4 = true), this.sn("posthog.setGroupPropertiesForFlags") && (null == (i4 = this.featureFlags) || i4.setGroupPropertiesForFlags(t4, e4));
    }
    resetGroupPropertiesForFlags(t4) {
      var e4;
      null == (e4 = this.featureFlags) || e4.resetGroupPropertiesForFlags(t4);
    }
    reset(t4) {
      var e4, i4, r4, s4, n3, o4, a4, l4;
      if (Le.info("reset"), !this.__loaded) return Le.uninitializedWarning("posthog.reset");
      var u5, h4 = this.get_property(He), d4 = this.get_property(ei);
      if (this.consent.reset(), null == (e4 = this.persistence) || e4.clear(), null == (i4 = this.sessionPersistence) || i4.clear(), N2(d4) || null == (u5 = this.persistence) || u5.register({ [ei]: d4 }), null == (r4 = this.surveys) || r4.reset(), null == (s4 = this.Yi) || s4.stop(), null == (n3 = this.featureFlags) || n3.reset(), null == (o4 = this.conversations) || o4.reset(), null == (a4 = this.persistence) || a4.set_property($i, ji), null == (l4 = this.sessionManager) || l4.resetSessionId(), this.$i = null, this.config.cookieless_mode === Ni) this.register_once({ distinct_id: Ai, $device_id: null }, "");
      else {
        var v4 = this.config.get_device_id(dr());
        this.register_once({ distinct_id: v4, $device_id: t4 ? v4 : h4 }, "");
      }
      this.register({ $last_posthog_reset: (/* @__PURE__ */ new Date()).toISOString() }, 1), delete this.config.identity_distinct_id, delete this.config.identity_hash, this.reloadFeatureFlags();
    }
    setIdentity(t4, e4) {
      var i4;
      this.config.identity_distinct_id = t4, this.config.identity_hash = e4, this.alias(t4), null == (i4 = this.conversations) || i4.ln();
    }
    clearIdentity() {
      var t4;
      delete this.config.identity_distinct_id, delete this.config.identity_hash, null == (t4 = this.conversations) || t4.hn();
    }
    get_distinct_id() {
      return this.get_property("distinct_id");
    }
    getGroups() {
      return this.get_property("$groups") || {};
    }
    get_session_id() {
      var t4, e4;
      return null !== (t4 = null == (e4 = this.sessionManager) ? void 0 : e4.checkAndGetSessionAndWindowId(true).sessionId) && void 0 !== t4 ? t4 : "";
    }
    get_session_replay_url(t4) {
      if (!this.sessionManager) return "";
      var { sessionId: e4, sessionStartTimestamp: i4 } = this.sessionManager.checkAndGetSessionAndWindowId(true), r4 = this.requestRouter.endpointFor("ui", "/project/" + this.config.token + "/replay/" + e4);
      if (null != t4 && t4.withTimestamp && i4) {
        var s4, n3 = null !== (s4 = t4.timestampLookBack) && void 0 !== s4 ? s4 : 10;
        if (!i4) return r4;
        r4 += "?t=" + Math.max(Math.floor(((/* @__PURE__ */ new Date()).getTime() - i4) / 1e3) - n3, 0);
      }
      return r4;
    }
    alias(t4, e4) {
      return t4 === this.get_property(Be) ? (Le.critical("Attempting to create alias for existing People user - aborting."), -2) : this.sn("posthog.alias") ? (N2(e4) && (e4 = this.get_distinct_id()), t4 !== e4 ? (this.an(qe, t4), this.capture("$create_alias", { alias: t4, distinct_id: e4 })) : (Le.warn("alias matches current distinct_id - skipping api call."), this.identify(t4), -1)) : void 0;
    }
    set_config(t4) {
      var e4 = f4({}, this.config);
      if (U(t4)) {
        var i4, r4, s4, n3, o4, a4, l4, u5, h4, d4;
        Xi(this.config, Xn(t4));
        var c4 = this.Hi();
        null == (i4 = this.persistence) || i4.update_config(this.config, e4, c4), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new es2(f4({}, this.config, { persistence: "sessionStorage" }), c4);
        var p4 = this.Di(this.config.debug);
        W(p4) && (this.config.debug = p4), W(this.config.debug) && (this.config.debug ? (v3.DEBUG = true, gr.R() && gr.N("ph_debug", true), Le.info("set_config", { config: t4, oldConfig: e4, newConfig: f4({}, this.config) })) : (v3.DEBUG = false, gr.R() && gr.q("ph_debug"))), null == (r4 = this.exceptionObserver) || r4.onConfigChange(), null == (s4 = this.exceptions) || s4.onConfigChange(), null == (n3 = this.sessionRecording) || n3.startIfEnabledOrStop(), null == (o4 = this.autocapture) || o4.startIfEnabled(), null == (a4 = this.heatmaps) || a4.startIfEnabled(), null == (l4 = this.exceptionObserver) || l4.startIfEnabledOrStop(), null == (u5 = this.deadClicksAutocapture) || u5.startIfEnabledOrStop(), null == (h4 = this.surveys) || h4.loadIfEnabled(), this.cn(), null == (d4 = this.externalIntegrations) || d4.startIfEnabledOrStop();
      }
    }
    _overrideSDKInfo(t4, e4) {
      v3.LIB_NAME = t4, v3.LIB_VERSION = e4;
    }
    startSessionRecording(t4) {
      var e4, i4, r4, s4, n3, o4 = true === t4, a4 = { sampling: o4 || !(null == t4 || !t4.sampling), linked_flag: o4 || !(null == t4 || !t4.linked_flag), url_trigger: o4 || !(null == t4 || !t4.url_trigger), event_trigger: o4 || !(null == t4 || !t4.event_trigger) };
      Object.values(a4).some(Boolean) && (null == (e4 = this.sessionManager) || e4.checkAndGetSessionAndWindowId(), a4.sampling && (null == (i4 = this.sessionRecording) || i4.overrideSampling()), a4.linked_flag && (null == (r4 = this.sessionRecording) || r4.overrideLinkedFlag()), a4.url_trigger && (null == (s4 = this.sessionRecording) || s4.overrideTrigger("url")), a4.event_trigger && (null == (n3 = this.sessionRecording) || n3.overrideTrigger("event")));
      this.set_config({ disable_session_recording: false });
    }
    stopSessionRecording() {
      this.set_config({ disable_session_recording: true });
    }
    sessionRecordingStarted() {
      var t4;
      return !(null == (t4 = this.sessionRecording) || !t4.started);
    }
    captureException(t4, e4) {
      if (this.exceptions) {
        var i4 = new Error("PostHog syntheticException"), r4 = this.exceptions.buildProperties(t4, { handled: true, syntheticException: i4 });
        return this.exceptions.sendExceptionEvent(f4({}, r4, e4));
      }
    }
    addExceptionStep(t4, e4) {
      var i4;
      null == (i4 = this.exceptions) || i4.addExceptionStep(t4, e4);
    }
    captureLog(t4) {
      var e4;
      null == (e4 = this.logs) || e4.captureLog(t4);
    }
    get logger() {
      var t4, e4;
      return null !== (t4 = null == (e4 = this.logs) ? void 0 : e4.logger) && void 0 !== t4 ? t4 : _Zn.dn;
    }
    startExceptionAutocapture(t4) {
      this.set_config({ capture_exceptions: null == t4 || t4 });
    }
    stopExceptionAutocapture() {
      this.set_config({ capture_exceptions: false });
    }
    loadToolbar(t4) {
      var e4, i4;
      return null !== (e4 = null == (i4 = this.toolbar) ? void 0 : i4.loadToolbar(t4)) && void 0 !== e4 && e4;
    }
    get_property(t4) {
      var e4;
      return null == (e4 = this.persistence) ? void 0 : e4.props[t4];
    }
    getSessionProperty(t4) {
      var e4;
      return null == (e4 = this.sessionPersistence) ? void 0 : e4.props[t4];
    }
    toString() {
      var t4, e4 = null !== (t4 = this.config.name) && void 0 !== t4 ? t4 : Gn;
      return e4 !== Gn && (e4 = Gn + "." + e4), e4;
    }
    _isIdentified() {
      var t4, e4;
      return (null == (t4 = this.persistence) ? void 0 : t4.get_property($i)) === zi || (null == (e4 = this.sessionPersistence) ? void 0 : e4.get_property($i)) === zi;
    }
    nn() {
      var t4, e4;
      return !("never" === this.config.person_profiles || this.config.person_profiles === Bi && !this._isIdentified() && L2(this.getGroups()) && (null == (t4 = this.persistence) || null == (t4 = t4.props) || !t4[qe]) && (null == (e4 = this.persistence) || null == (e4 = e4.props) || !e4[Ii]));
    }
    Xi() {
      return true === this.config.capture_pageleave || "if_capture_pageview" === this.config.capture_pageleave && (true === this.config.capture_pageview || "history_change" === this.config.capture_pageview);
    }
    createPersonProfile() {
      this.nn() || this.sn("posthog.createPersonProfile") && this.setPersonProperties({}, {});
    }
    setInternalOrTestUser() {
      this.sn("posthog.setInternalOrTestUser") && this.setPersonProperties({ $internal_or_test_user: true });
    }
    sn(t4) {
      return "never" === this.config.person_profiles ? (Le.error(t4 + ' was called, but process_person is set to "never". This call will be ignored.'), false) : (this.an(Ii, true), true);
    }
    Hi() {
      if ("always" === this.config.cookieless_mode) return true;
      var t4 = this.consent.isOptedOut();
      return this.config.disable_persistence || t4 && !(!this.config.opt_out_persistence_by_default && this.config.cookieless_mode !== Li);
    }
    cn() {
      var t4, e4, i4, r4, s4 = this.Hi();
      return (null == (t4 = this.persistence) ? void 0 : t4._r) !== s4 && (null == (i4 = this.persistence) || i4.set_disabled(s4)), (null == (e4 = this.sessionPersistence) ? void 0 : e4._r) !== s4 && (null == (r4 = this.sessionPersistence) || r4.set_disabled(s4)), s4;
    }
    opt_in_capturing(t4) {
      var e4;
      if (this.config.cookieless_mode !== Ni) {
        if (this.Ri()) {
          var i4, r4, s4, n3, o4;
          this.reset(true), null == (i4 = this.sessionManager) || i4.destroy(), null == (r4 = this.pageViewManager) || r4.destroy(), this.sessionManager = new wn(this), this.pageViewManager = new Cr(this), this.persistence && (this.sessionPropsManager = new mn(this, this.sessionManager, this.persistence));
          var a4, l4 = null !== (s4 = null == (n3 = this.config.__extensionClasses) ? void 0 : n3.sessionRecording) && void 0 !== s4 ? s4 : null == (o4 = _Zn.__defaultExtensionClasses) ? void 0 : o4.sessionRecording;
          l4 && (this.sessionRecording = this.Mi(this.sessionRecording, new l4(this)), this.Qi && (null == (a4 = this.sessionRecording) || null == a4.onRemoteConfig || a4.onRemoteConfig(this.Qi)));
        }
        var u5, h4;
        this.consent.optInOut(true), this.cn(), this.Ji(), null == (e4 = this.sessionRecording) || e4.startIfEnabledOrStop(), this.config.cookieless_mode == Li && (null == (u5 = this.surveys) || u5.loadIfEnabled()), (N2(null == t4 ? void 0 : t4.captureEventName) || null != t4 && t4.captureEventName) && this.capture(null !== (h4 = null == t4 ? void 0 : t4.captureEventName) && void 0 !== h4 ? h4 : "$opt_in", null == t4 ? void 0 : t4.captureProperties, { send_instantly: true }), this.config.capture_pageview && this.Ki();
      } else Le.warn(Hn);
    }
    opt_out_capturing() {
      var t4, e4, i4;
      this.config.cookieless_mode !== Ni ? (this.config.cookieless_mode === Li && this.consent.isOptedIn() && this.reset(true), this.consent.optInOut(false), this.cn(), this.config.cookieless_mode === Li && (this.register({ distinct_id: Ai, $device_id: null }), null == (t4 = this.sessionRecording) || t4.stopRecording(), this.sessionRecording = void 0, null == (e4 = this.sessionManager) || e4.destroy(), null == (i4 = this.pageViewManager) || i4.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, this.Ki())) : Le.warn(Hn);
    }
    has_opted_in_capturing() {
      return this.consent.isOptedIn();
    }
    has_opted_out_capturing() {
      return this.consent.isOptedOut();
    }
    get_explicit_consent_status() {
      var t4 = this.consent.consent;
      return 1 === t4 ? "granted" : 0 === t4 ? "denied" : "pending";
    }
    is_capturing() {
      return this.config.cookieless_mode === Ni || (this.config.cookieless_mode === Li ? this.consent.isRejected() || this.consent.isOptedIn() : !this.has_opted_out_capturing());
    }
    clear_opt_in_out_capturing() {
      this.consent.reset(), this.cn();
    }
    _is_bot() {
      return i3 ? xn(i3, this.config.custom_blocked_useragents) : void 0;
    }
    Ki() {
      r3 && ("visible" === r3.visibilityState ? this.Fi || (this.Fi = true, this.capture(Vi, { title: r3.title }, { send_instantly: true }), this.Ai && (r3.removeEventListener(Hi, this.Ai), this.Ai = null)) : this.Ai || (this.Ai = this.Ki.bind(this), sr(r3, Hi, this.Ai)));
    }
    debug(e4) {
      false === e4 ? (null == t3 || t3.console.log("You've disabled debug mode."), this.set_config({ debug: false })) : (null == t3 || t3.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({ debug: true }));
    }
    Lr() {
      var t4, e4, i4, r4, s4, n3, o4 = this.qi || {};
      return "advanced_disable_flags" in o4 ? !!o4.advanced_disable_flags : false !== this.config.advanced_disable_flags ? !!this.config.advanced_disable_flags : true === this.config.advanced_disable_decide ? (Le.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), true) : (i4 = "advanced_disable_decide", false, r4 = Le, s4 = (e4 = "advanced_disable_flags") in (t4 = o4) && !H2(t4[e4]), n3 = i4 in t4 && !H2(t4[i4]), s4 ? t4[e4] : !!n3 && (r4 && r4.warn("Config field '" + i4 + "' is deprecated. Please use '" + e4 + "' instead. The old field will be removed in a future major version."), t4[i4]));
    }
    rn(t4) {
      if (H2(this.config.before_send)) return t4;
      var e4 = M(this.config.before_send) ? this.config.before_send : [this.config.before_send], i4 = t4;
      for (var r4 of e4) {
        if (i4 = r4(i4), H2(i4)) {
          var s4 = "Event '" + t4.event + "' was rejected in beforeSend function";
          return Y(t4.event) ? Le.warn(s4 + ". This can cause unexpected behavior.") : Le.info(s4), null;
        }
        i4.properties && !L2(i4.properties) || Le.warn("Event '" + t4.event + "' has no properties after beforeSend function, this is likely an error.");
      }
      return i4;
    }
    getPageViewId() {
      var t4;
      return null == (t4 = this.pageViewManager.dr) ? void 0 : t4.pageViewId;
    }
    captureTraceFeedback(t4, e4) {
      this.capture("$ai_feedback", { $ai_trace_id: String(t4), $ai_feedback_text: e4 });
    }
    captureTraceMetric(t4, e4, i4) {
      this.capture("$ai_metric", { $ai_trace_id: String(t4), $ai_metric_name: e4, $ai_metric_value: String(i4) });
    }
    Di(t4) {
      var e4 = W(t4) && !t4, i4 = gr.R() && "true" === gr.A("ph_debug");
      return !e4 && (!!i4 || t4);
    }
  };
  Zn.__defaultExtensionClasses = {}, Zn.dn = { trace: Nn = () => {
  }, debug: Nn, info: Nn, warn: Nn, error: Nn, fatal: Nn }, (function(t4, e4) {
    for (var i4 = 0; e4.length > i4; i4++) t4.prototype[e4[i4]] = tr(t4.prototype[e4[i4]]);
  })(Zn, ["identify"]);
  var to = 1;
  var eo = 3;
  var io = 11;
  function ro(t4) {
    return t4 instanceof Element && (t4.id === Ci || !(null == t4.closest || !t4.closest(".toolbar-global-fade-container")));
  }
  function so(t4) {
    return !!t4 && t4.nodeType === to;
  }
  function no(t4, e4) {
    return !!t4 && !!t4.tagName && t4.tagName.toLowerCase() === e4.toLowerCase();
  }
  function oo(t4) {
    return !!t4 && t4.nodeType === eo;
  }
  function ao(t4) {
    return !!t4 && t4.nodeType === io && so(t4.host);
  }
  function lo(t4) {
    return t4 ? O2(t4).split(/\s+/) : [];
  }
  function uo(e4) {
    var i4 = null == t3 ? void 0 : t3.location.href;
    return !!(i4 && e4 && e4.some(((t4) => i4.match(t4))));
  }
  function ho(t4) {
    var e4 = "";
    switch (typeof t4.className) {
      case "string":
        e4 = t4.className;
        break;
      case "object":
        e4 = (t4.className && "baseVal" in t4.className ? t4.className.baseVal : null) || t4.getAttribute("class") || "";
        break;
      default:
        e4 = "";
    }
    return lo(e4);
  }
  function vo(t4) {
    return H2(t4) ? null : O2(t4).split(/(\s+)/).filter(((t5) => Oo(t5))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255);
  }
  function co(t4) {
    var e4 = "";
    return xo(t4) && !Eo(t4) && t4.childNodes && t4.childNodes.length && Ki(t4.childNodes, (function(t5) {
      var i4;
      oo(t5) && t5.textContent && (e4 += null !== (i4 = vo(t5.textContent)) && void 0 !== i4 ? i4 : "");
    })), O2(e4);
  }
  function po(t4) {
    return N2(t4.target) ? t4.srcElement || null : null != (e4 = t4.target) && e4.shadowRoot ? t4.composedPath()[0] || null : t4.target || null;
    var e4;
  }
  var fo = ["a", "button", "form", "input", "select", "textarea", "label"];
  function _o(t4, e4) {
    if (N2(e4)) return true;
    var i4, r4 = function(t5) {
      if (e4.some(((e5) => t5.matches(e5)))) return { v: true };
    };
    for (var s4 of t4) if (i4 = r4(s4)) return i4.v;
    return false;
  }
  function go(t4) {
    var e4 = t4.parentNode;
    return !(!e4 || !so(e4)) && e4;
  }
  var mo = ["next", "previous", "prev", ">", "<"];
  var bo = [".ph-no-rageclick", ".ph-no-capture"];
  var yo = (t4) => !t4 || no(t4, "html") || !so(t4);
  var wo = (e4, i4) => {
    if (!t3 || yo(e4)) return { parentIsUsefulElement: false, targetElementList: [] };
    for (var r4 = false, s4 = [e4], n3 = e4; n3.parentNode && !no(n3, "body"); ) if (ao(n3.parentNode)) s4.push(n3.parentNode.host), n3 = n3.parentNode.host;
    else {
      var o4 = go(n3);
      if (!o4) break;
      if (i4 || fo.indexOf(o4.tagName.toLowerCase()) > -1) r4 = true;
      else {
        var a4 = t3.getComputedStyle(o4);
        a4 && "pointer" === a4.getPropertyValue("cursor") && (r4 = true);
      }
      s4.push(o4), n3 = o4;
    }
    return { parentIsUsefulElement: r4, targetElementList: s4 };
  };
  function xo(t4) {
    for (var e4 = t4; e4.parentNode && !no(e4, "body"); e4 = e4.parentNode) {
      var i4 = ho(e4);
      if (P2(i4, "ph-sensitive") || P2(i4, "ph-no-capture")) return false;
    }
    if (P2(ho(t4), "ph-include")) return true;
    var r4 = t4.type || "";
    if (j3(r4)) switch (r4.toLowerCase()) {
      case "hidden":
      case "password":
        return false;
    }
    var s4 = t4.name || t4.id || "";
    return !j3(s4) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(s4.replace(/[^a-zA-Z0-9]/g, ""));
  }
  function Eo(t4) {
    return !!(no(t4, "input") && !["button", "checkbox", "submit", "reset"].includes(t4.type) || no(t4, "select") || no(t4, "textarea") || "true" === t4.getAttribute("contenteditable"));
  }
  var So = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})";
  var $o = new RegExp("^(?:" + So + ")$");
  var To = new RegExp(So);
  var ko = "\\d{3}-?\\d{2}-?\\d{4}";
  var Ro = new RegExp("^(" + ko + ")$");
  var Po = new RegExp("(" + ko + ")");
  function Oo(t4, e4) {
    if (void 0 === e4 && (e4 = true), H2(t4)) return false;
    if (j3(t4)) {
      if (t4 = O2(t4), (e4 ? $o : To).test((t4 || "").replace(/[- ]/g, ""))) return false;
      if ((e4 ? Ro : Po).test(t4)) return false;
    }
    return true;
  }
  function Io(t4) {
    var e4 = co(t4);
    return Oo(e4 = (e4 + " " + Co(t4)).trim()) ? e4 : "";
  }
  function Co(t4) {
    var e4 = "";
    return t4 && t4.childNodes && t4.childNodes.length && Ki(t4.childNodes, (function(t5) {
      var i4;
      if (t5 && "span" === (null == (i4 = t5.tagName) ? void 0 : i4.toLowerCase())) try {
        var r4 = co(t5);
        e4 = (e4 + " " + r4).trim(), t5.childNodes && t5.childNodes.length && (e4 = (e4 + " " + Co(t5)).trim());
      } catch (t6) {
        Le.error("[AutoCapture]", t6);
      }
    })), e4;
  }
  function Ao(t4) {
    return t4.replace(/"|\\"/g, '\\"');
  }
  function Fo(t4) {
    var e4 = t4.attr__class;
    return e4 ? M(e4) ? e4 : lo(e4) : void 0;
  }
  var Mo = class {
    constructor(t4) {
      this.disabled = false === t4;
      var e4 = U(t4) ? t4 : {};
      this.thresholdPx = e4.threshold_px || 30, this.timeoutMs = e4.timeout_ms || 1e3, this.clickCount = e4.click_count || 3, this.clicks = [];
    }
    isRageClick(t4, e4, i4) {
      if (this.disabled) return false;
      var r4 = this.clicks[this.clicks.length - 1];
      if (r4 && Math.abs(t4 - r4.x) + Math.abs(e4 - r4.y) < this.thresholdPx && this.timeoutMs > i4 - r4.timestamp) {
        if (this.clicks.push({ x: t4, y: e4, timestamp: i4 }), this.clicks.length === this.clickCount) return true;
      } else this.clicks = [{ x: t4, y: e4, timestamp: i4 }];
      return false;
    }
  };
  var Do = "$copy_autocapture";
  var Uo = Ne("[AutoCapture]");
  function Lo(t4, e4) {
    return e4.length > t4 ? e4.slice(0, t4) + "..." : e4;
  }
  function No(t4) {
    if (t4.previousElementSibling) return t4.previousElementSibling;
    var e4 = t4;
    do {
      e4 = e4.previousSibling;
    } while (e4 && !so(e4));
    return e4;
  }
  function jo(e4, i4) {
    var r4, s4, { e: n3, maskAllElementAttributes: o4, maskAllText: a4, elementAttributeIgnoreList: l4, elementsChainAsString: u5 } = i4;
    if (!so(e4)) return { props: {} };
    for (var h4 = [e4], d4 = e4; d4.parentNode && !no(d4, "body"); ) if (ao(d4.parentNode)) h4.push(d4.parentNode.host), d4 = d4.parentNode.host;
    else {
      if (!so(d4.parentNode)) break;
      h4.push(d4.parentNode), d4 = d4.parentNode;
    }
    var v4, c4, p4 = [], _3 = {}, g3 = false, m4 = false;
    if (Ki(h4, ((t4) => {
      var e5 = xo(t4);
      if (no(t4, "a")) {
        var i5 = t4.getAttribute("href");
        g3 = e5 && !!i5 && Oo(i5) && i5;
      }
      P2(ho(t4), "ph-no-capture") && (m4 = true), p4.push((function(t5, e6, i6, r6) {
        var s5 = t5.tagName.toLowerCase(), n4 = { tag_name: s5 };
        fo.indexOf(s5) > -1 && !i6 && (n4.$el_text = "a" === s5.toLowerCase() || "button" === s5.toLowerCase() ? Lo(1024, Io(t5)) : Lo(1024, co(t5)));
        var o5 = ho(t5);
        o5.length > 0 && (n4.classes = o5.filter((function(t6) {
          return "" !== t6;
        }))), Ki(t5.attributes, (function(i7) {
          var s6;
          if ((!Eo(t5) || -1 !== ["name", "id", "class", "aria-label"].indexOf(i7.name)) && (null == r6 || !r6.includes(i7.name)) && !e6 && Oo(i7.value) && (!j3(s6 = i7.name) || "_ngcontent" !== s6.substring(0, 10) && "_nghost" !== s6.substring(0, 7))) {
            var o6 = i7.value;
            "class" === i7.name && (o6 = lo(o6).join(" ")), n4["attr__" + i7.name] = Lo(1024, o6);
          }
        }));
        for (var a5 = 1, l5 = 1, u6 = t5; u6 = No(u6); ) a5++, u6.tagName === t5.tagName && l5++;
        return n4.nth_child = a5, n4.nth_of_type = l5, n4;
      })(t4, o4, a4, l4));
      var r5 = (function(t5) {
        if (!xo(t5)) return {};
        var e6 = {};
        return Ki(t5.attributes, (function(t6) {
          if (t6.name && 0 === t6.name.indexOf("data-ph-capture-attribute")) {
            var i6 = t6.name.replace("data-ph-capture-attribute-", ""), r6 = t6.value;
            i6 && r6 && Oo(r6) && (e6[i6] = r6);
          }
        })), e6;
      })(t4);
      Xi(_3, r5);
    })), m4) return { props: {}, explicitNoCapture: m4 };
    if (a4 || (p4[0].$el_text = no(e4, "a") || no(e4, "button") ? Io(e4) : co(e4)), g3) {
      var b3, y4;
      p4[0].attr__href = g3;
      var w4 = null == (b3 = Mr(g3)) ? void 0 : b3.host, x3 = null == t3 || null == (y4 = t3.location) ? void 0 : y4.host;
      w4 && x3 && w4 !== x3 && (v4 = g3);
    }
    return { props: Xi({ $event_type: n3.type, $ce_version: 1 }, u5 ? {} : { $elements: p4 }, { $elements_chain: (c4 = p4, (function(t4) {
      return t4.map(((t5) => {
        var e5, i5, r5 = "";
        if (t5.tag_name && (r5 += t5.tag_name), t5.attr_class) for (var s5 of (t5.attr_class.sort(), t5.attr_class)) r5 += "." + s5.replace(/"/g, "");
        var n4 = f4({}, t5.text ? { text: t5.text } : {}, { "nth-child": null !== (e5 = t5.nth_child) && void 0 !== e5 ? e5 : 0, "nth-of-type": null !== (i5 = t5.nth_of_type) && void 0 !== i5 ? i5 : 0 }, t5.href ? { href: t5.href } : {}, t5.attr_id ? { attr_id: t5.attr_id } : {}, t5.attributes), o5 = {};
        return Qi(n4).sort(((t6, e6) => {
          var [i6] = t6, [r6] = e6;
          return i6.localeCompare(r6);
        })).forEach(((t6) => {
          var [e6, i6] = t6;
          return o5[Ao(e6.toString())] = Ao(i6.toString());
        })), (r5 += ":") + Qi(o5).map(((t6) => {
          var [e6, i6] = t6;
          return e6 + '="' + i6 + '"';
        })).join("");
      })).join(";");
    })((function(t4) {
      return t4.map(((t5) => {
        var e5, i5, r5 = { text: null == (e5 = t5.$el_text) ? void 0 : e5.slice(0, 400), tag_name: t5.tag_name, href: null == (i5 = t5.attr__href) ? void 0 : i5.slice(0, 2048), attr_class: Fo(t5), attr_id: t5.attr__id, nth_child: t5.nth_child, nth_of_type: t5.nth_of_type, attributes: {} };
        return Qi(t5).filter(((t6) => {
          var [e6] = t6;
          return 0 === e6.indexOf("attr__");
        })).forEach(((t6) => {
          var [e6, i6] = t6;
          return r5.attributes[e6] = i6;
        })), r5;
      }));
    })(c4))) }, null != (r4 = p4[0]) && r4.$el_text ? { $el_text: null == (s4 = p4[0]) ? void 0 : s4.$el_text } : {}, v4 && "click" === n3.type ? { $external_click_url: v4 } : {}, _3) };
  }
  var zo = Ne("[ExceptionAutocapture]");
  function Bo(t4, e4, i4) {
    try {
      if (!(e4 in t4)) return () => {
      };
      var r4 = t4[e4], s4 = i4(r4);
      return D3(s4) && (s4.prototype = s4.prototype || {}, Object.defineProperties(s4, { __posthog_wrapped__: { enumerable: false, value: true } })), t4[e4] = s4, () => {
        t4[e4] = r4;
      };
    } catch (t5) {
      return () => {
      };
    }
  }
  var Ho = Ne("[TracingHeaders]");
  var qo = Ne("[Web Vitals]");
  var Vo = 9e5;
  var Wo = "disabled";
  var Go = "lazy_loading";
  var Yo = "awaiting_config";
  var Jo = "missing_config";
  Ne("[SessionRecording]"), Ne("[SessionRecording]");
  var Ko = "[SessionRecording]";
  var Xo = Ne(Ko);
  var Qo = Ne("[Heatmaps]");
  function Zo(t4) {
    return U(t4) && "clientX" in t4 && "clientY" in t4 && q2(t4.clientX) && q2(t4.clientY);
  }
  var ta = Ne("[Product Tours]");
  var ea = ["$set_once", "$set"];
  var ia = Ne("[SiteApps]");
  var ra = "Error while initializing PostHog app with config id ";
  function sa(t4, e4, i4) {
    if (H2(t4)) return false;
    switch (i4) {
      case "exact":
        return t4 === e4;
      case "contains":
        var r4 = e4.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
        return new RegExp(r4, "i").test(t4);
      case "regex":
        try {
          return new RegExp(e4).test(t4);
        } catch (t5) {
          return false;
        }
      default:
        return false;
    }
  }
  var na = class {
    constructor(t4) {
      this.vn = new bn(), this.fn = (t5, e4) => this.pn(t5, e4) && this.gn(t5, e4) && this.mn(t5, e4) && this.yn(t5, e4), this.pn = (t5, e4) => null == e4 || !e4.event || (null == t5 ? void 0 : t5.event) === (null == e4 ? void 0 : e4.event), this._instance = t4, this.bn = /* @__PURE__ */ new Set(), this._n = /* @__PURE__ */ new Set();
    }
    init() {
      var t4, e4;
      N2(null == (t4 = this._instance) ? void 0 : t4._addCaptureHook) || (null == (e4 = this._instance) || e4._addCaptureHook(((t5, e5) => {
        this.on(t5, e5);
      })));
    }
    register(t4) {
      var e4, i4;
      if (!N2(null == (e4 = this._instance) ? void 0 : e4._addCaptureHook) && (t4.forEach(((t5) => {
        var e5, i5;
        null == (e5 = this._n) || e5.add(t5), null == (i5 = t5.steps) || i5.forEach(((t6) => {
          var e6;
          null == (e6 = this.bn) || e6.add((null == t6 ? void 0 : t6.event) || "");
        }));
      })), null != (i4 = this._instance) && i4.autocapture)) {
        var r4, s4 = /* @__PURE__ */ new Set();
        t4.forEach(((t5) => {
          var e5;
          null == (e5 = t5.steps) || e5.forEach(((t6) => {
            null != t6 && t6.selector && s4.add(null == t6 ? void 0 : t6.selector);
          }));
        })), null == (r4 = this._instance) || r4.autocapture.setElementSelectors(s4);
      }
    }
    on(t4, e4) {
      var i4;
      null != e4 && 0 != t4.length && (this.bn.has(t4) || this.bn.has(null == e4 ? void 0 : e4.event)) && this._n && (null == (i4 = this._n) ? void 0 : i4.size) > 0 && this._n.forEach(((t5) => {
        this.wn(e4, t5) && this.vn.emit("actionCaptured", t5.name);
      }));
    }
    xn(t4) {
      this.onAction("actionCaptured", ((e4) => t4(e4)));
    }
    wn(t4, e4) {
      if (null == (null == e4 ? void 0 : e4.steps)) return false;
      for (var i4 of e4.steps) if (this.fn(t4, i4)) return true;
      return false;
    }
    onAction(t4, e4) {
      return this.vn.on(t4, e4);
    }
    gn(t4, e4) {
      if (null != e4 && e4.url) {
        var i4, r4 = null == t4 || null == (i4 = t4.properties) ? void 0 : i4.$current_url;
        if (!r4 || "string" != typeof r4) return false;
        if (!sa(r4, e4.url, e4.url_matching || "contains")) return false;
      }
      return true;
    }
    mn(t4, e4) {
      return !!this.Sn(t4, e4) && !!this.kn(t4, e4) && !!this.Cn(t4, e4);
    }
    Sn(t4, e4) {
      var i4;
      if (null == e4 || !e4.href) return true;
      var r4 = this.In(t4);
      if (r4.length > 0) return r4.some(((t5) => sa(t5.href, e4.href, e4.href_matching || "exact")));
      var s4, n3 = (null == t4 || null == (i4 = t4.properties) ? void 0 : i4.$elements_chain) || "";
      return !!n3 && sa((s4 = n3.match(/(?::|")href="(.*?)"/)) ? s4[1] : "", e4.href, e4.href_matching || "exact");
    }
    kn(t4, e4) {
      var i4;
      if (null == e4 || !e4.text) return true;
      var r4 = this.In(t4);
      if (r4.length > 0) return r4.some(((t5) => sa(t5.text, e4.text, e4.text_matching || "exact") || sa(t5.$el_text, e4.text, e4.text_matching || "exact")));
      var s4, n3, o4, a4 = (null == t4 || null == (i4 = t4.properties) ? void 0 : i4.$elements_chain) || "";
      return !!a4 && (s4 = (function(t5) {
        for (var e5, i5 = [], r5 = /(?::|")text="(.*?)"/g; !H2(e5 = r5.exec(t5)); ) i5.includes(e5[1]) || i5.push(e5[1]);
        return i5;
      })(a4), n3 = e4.text, o4 = e4.text_matching || "exact", s4.some(((t5) => sa(t5, n3, o4))));
    }
    Cn(t4, e4) {
      var i4, r4;
      if (null == e4 || !e4.selector) return true;
      var s4 = null == t4 || null == (i4 = t4.properties) ? void 0 : i4.$element_selectors;
      if (null != s4 && s4.includes(e4.selector)) return true;
      var n3 = (null == t4 || null == (r4 = t4.properties) ? void 0 : r4.$elements_chain) || "";
      if (e4.selector_regex && n3) try {
        return new RegExp(e4.selector_regex).test(n3);
      } catch (t5) {
        return false;
      }
      return false;
    }
    In(t4) {
      var e4;
      return null == (null == t4 || null == (e4 = t4.properties) ? void 0 : e4.$elements) ? [] : null == t4 ? void 0 : t4.properties.$elements;
    }
    yn(t4, e4) {
      return null == e4 || !e4.properties || 0 === e4.properties.length || kn(e4.properties.reduce(((t5, e5) => {
        var i4 = M(e5.value) ? e5.value.map(String) : null != e5.value ? [String(e5.value)] : [];
        return t5[e5.key] = { values: i4, operator: e5.operator || "exact" }, t5;
      }), {}), null == t4 ? void 0 : t4.properties);
    }
  };
  var oa = class {
    constructor(t4) {
      this._instance = t4, this.Tn = /* @__PURE__ */ new Map(), this.En = /* @__PURE__ */ new Map(), this.Mn = /* @__PURE__ */ new Map();
    }
    Pn(t4, e4) {
      return !!t4 && kn(t4.propertyFilters, null == e4 ? void 0 : e4.properties);
    }
    Rn(t4, e4) {
      var i4 = /* @__PURE__ */ new Map();
      return t4.forEach(((t5) => {
        var r4;
        null == (r4 = t5.conditions) || null == (r4 = r4[e4]) || null == (r4 = r4.values) || r4.forEach(((e5) => {
          if (null != e5 && e5.name) {
            var r5 = i4.get(e5.name) || [];
            r5.push(t5.id), i4.set(e5.name, r5);
          }
        }));
      })), i4;
    }
    On(t4, e4, i4) {
      var r4 = (i4 === is.Activation ? this.Tn : this.En).get(t4), s4 = [];
      return this.Ln(((t5) => {
        s4 = t5.filter(((t6) => null == r4 ? void 0 : r4.includes(t6.id)));
      })), s4.filter(((r5) => {
        var s5, n3 = null == (s5 = r5.conditions) || null == (s5 = s5[i4]) || null == (s5 = s5.values) ? void 0 : s5.find(((e5) => e5.name === t4));
        return this.Pn(n3, e4);
      }));
    }
    register(t4) {
      var e4;
      N2(null == (e4 = this._instance) ? void 0 : e4._addCaptureHook) || (this.Fn(t4), this.An(t4));
    }
    An(t4) {
      var e4 = t4.filter(((t5) => {
        var e5, i4;
        return (null == (e5 = t5.conditions) ? void 0 : e5.actions) && (null == (i4 = t5.conditions) || null == (i4 = i4.actions) || null == (i4 = i4.values) ? void 0 : i4.length) > 0;
      }));
      0 !== e4.length && (null == this.Nn && (this.Nn = new na(this._instance), this.Nn.init(), this.Nn.xn(((t5) => {
        this.onAction(t5);
      }))), e4.forEach(((t5) => {
        var e5, i4, r4, s4, n3;
        t5.conditions && null != (e5 = t5.conditions) && e5.actions && null != (i4 = t5.conditions) && null != (i4 = i4.actions) && i4.values && (null == (r4 = t5.conditions) || null == (r4 = r4.actions) || null == (r4 = r4.values) ? void 0 : r4.length) > 0 && (null == (s4 = this.Nn) || s4.register(t5.conditions.actions.values), null == (n3 = t5.conditions) || null == (n3 = n3.actions) || null == (n3 = n3.values) || n3.forEach(((e6) => {
          if (e6 && e6.name) {
            var i5 = this.Mn.get(e6.name);
            i5 && i5.push(t5.id), this.Mn.set(e6.name, i5 || [t5.id]);
          }
        })));
      })));
    }
    Fn(t4) {
      var e4, i4 = t4.filter(((t5) => {
        var e5, i5;
        return (null == (e5 = t5.conditions) ? void 0 : e5.events) && (null == (i5 = t5.conditions) || null == (i5 = i5.events) || null == (i5 = i5.values) ? void 0 : i5.length) > 0;
      })), r4 = t4.filter(((t5) => {
        var e5, i5;
        return (null == (e5 = t5.conditions) ? void 0 : e5.cancelEvents) && (null == (i5 = t5.conditions) || null == (i5 = i5.cancelEvents) || null == (i5 = i5.values) ? void 0 : i5.length) > 0;
      }));
      0 === i4.length && 0 === r4.length || (null == (e4 = this._instance) || e4._addCaptureHook(((t5, e5) => {
        this.onEvent(t5, e5);
      })), this.Tn = this.Rn(t4, is.Activation), this.En = this.Rn(t4, is.Cancellation));
    }
    onEvent(t4, e4) {
      var i4, r4 = this.le(), s4 = this.$n(), n3 = this.Dn(), o4 = (null == (i4 = this._instance) || null == (i4 = i4.persistence) ? void 0 : i4.props[s4]) || [];
      if (n3 === t4 && e4 && o4.length > 0) {
        var a4, l4;
        r4.info("event matched, removing item from activated items", { event: t4, eventPayload: e4, existingActivatedItems: o4 });
        var u5 = (null == e4 || null == (a4 = e4.properties) ? void 0 : a4.$survey_id) || (null == e4 || null == (l4 = e4.properties) ? void 0 : l4.$product_tour_id);
        if (u5) {
          var h4 = o4.indexOf(u5);
          0 > h4 || (o4.splice(h4, 1), this.qn(o4));
        }
      } else {
        if (this.En.has(t4)) {
          var d4 = this.On(t4, e4, is.Cancellation);
          d4.length > 0 && (r4.info("cancel event matched, cancelling items", { event: t4, itemsToCancel: d4.map(((t5) => t5.id)) }), d4.forEach(((t5) => {
            var e5 = o4.indexOf(t5.id);
            0 > e5 || o4.splice(e5, 1), this.jn(t5.id);
          })), this.qn(o4));
        }
        if (this.Tn.has(t4)) {
          r4.info("event name matched", { event: t4, eventPayload: e4, items: this.Tn.get(t4) });
          var v4 = this.On(t4, e4, is.Activation);
          this.qn(o4.concat(v4.map(((t5) => t5.id)) || []));
        }
      }
    }
    onAction(t4) {
      var e4, i4 = this.$n(), r4 = (null == (e4 = this._instance) || null == (e4 = e4.persistence) ? void 0 : e4.props[i4]) || [];
      this.Mn.has(t4) && this.qn(r4.concat(this.Mn.get(t4) || []));
    }
    qn(t4) {
      var e4 = this.le(), i4 = [...new Set(t4)].filter(((t5) => !this.Hn(t5)));
      e4.info("updating activated items", { activatedItems: i4 }), this.Un(i4);
    }
    getActivatedIds() {
      var t4, e4 = this.$n();
      return (null == (t4 = this._instance) || null == (t4 = t4.persistence) ? void 0 : t4.props[e4]) || [];
    }
    getEventToItemsMap() {
      return this.Tn;
    }
    Bn() {
      return this.Nn;
    }
  };
  var aa = class extends oa {
    constructor(t4) {
      super(t4);
    }
    $n() {
      return bi;
    }
    Dn() {
      return hs.SHOWN;
    }
    Ln(t4) {
      var e4;
      null == (e4 = this._instance) || e4.getSurveys(t4);
    }
    jn(t4) {
      var e4;
      null == (e4 = this._instance) || e4.cancelPendingSurvey(t4);
    }
    le() {
      return Cn;
    }
    Un(t4) {
      var e4;
      null == (e4 = this._instance) || null == (e4 = e4.persistence) || e4.register({ [bi]: t4 });
    }
    Hn() {
      return false;
    }
    getSurveys() {
      return this.getActivatedIds();
    }
    getEventToSurveys() {
      return this.getEventToItemsMap();
    }
  };
  var la = "SDK is not enabled or survey functionality is not yet loaded";
  var ua = "Disabled. Not loading surveys.";
  var ha = null != t3 && t3.location ? Lr(t3.location.hash, "__posthog") || Lr(location.hash, "state") : null;
  var da = "_postHogToolbarParams";
  var va = Ne("[Toolbar]");
  var ca = Ne("[FeatureFlags]");
  var pa = Ne("[FeatureFlags]", { debugEnabled: true });
  var fa = `" failed. Feature flags didn't load in time.`;
  var _a = (t4) => {
    for (var e4 = {}, i4 = 0; t4.length > i4; i4++) e4[t4[i4]] = true;
    return e4;
  };
  var ga = (t4) => {
    var e4 = {};
    for (var [i4, r4] of Qi(t4 || {})) r4 && (e4[i4] = r4);
    return e4;
  };
  var ma = Ne("[Error tracking]");
  var ba = "Refusing to render web experiment since the viewer is a likely bot";
  var ya = { icontains: (e4, i4) => !!t3 && i4.href.toLowerCase().indexOf(e4.toLowerCase()) > -1, not_icontains: (e4, i4) => !!t3 && -1 === i4.href.toLowerCase().indexOf(e4.toLowerCase()), regex: (e4, i4) => !!t3 && En(i4.href, e4), not_regex: (e4, i4) => !!t3 && !En(i4.href, e4), exact: (t4, e4) => e4.href === t4, is_not: (t4, e4) => e4.href !== t4 };
  var wa = class _wa {
    get qt() {
      return this._instance.config;
    }
    constructor(t4) {
      var e4 = this;
      this.getWebExperimentsAndEvaluateDisplayLogic = function(t5) {
        void 0 === t5 && (t5 = false), e4.getWebExperiments(((t6) => {
          _wa.zn("retrieved web experiments from the server"), e4.Vn = /* @__PURE__ */ new Map(), t6.forEach(((t7) => {
            if (t7.feature_flag_key) {
              var i4;
              e4.Vn && (_wa.zn("setting flag key ", t7.feature_flag_key, " to web experiment ", t7), null == (i4 = e4.Vn) || i4.set(t7.feature_flag_key, t7));
              var r4 = e4._instance.getFeatureFlag(t7.feature_flag_key);
              j3(r4) && t7.variants[r4] && e4.Wn(t7.name, r4, t7.variants[r4].transforms);
            } else if (t7.variants) for (var s4 in t7.variants) {
              var n3 = t7.variants[s4];
              _wa.Zn(n3) && e4.Wn(t7.name, s4, n3.transforms);
            }
          }));
        }), t5);
      }, this._instance = t4, this._instance.onFeatureFlags(((t5) => {
        this.onFeatureFlags(t5);
      }));
    }
    initialize() {
    }
    onFeatureFlags(t4) {
      if (this._is_bot()) _wa.zn(ba);
      else if (!this.qt.disable_web_experiments) {
        if (H2(this.Vn)) return this.Vn = /* @__PURE__ */ new Map(), this.loadIfEnabled(), void this.previewWebExperiment();
        _wa.zn("applying feature flags", t4), t4.forEach(((t5) => {
          var e4;
          if (this.Vn && null != (e4 = this.Vn) && e4.has(t5)) {
            var i4, r4 = this._instance.getFeatureFlag(t5), s4 = null == (i4 = this.Vn) ? void 0 : i4.get(t5);
            r4 && null != s4 && s4.variants[r4] && this.Wn(s4.name, r4, s4.variants[r4].transforms);
          }
        }));
      }
    }
    previewWebExperiment() {
      var t4 = _wa.getWindowLocation();
      if (null != t4 && t4.search) {
        var e4 = Dr(null == t4 ? void 0 : t4.search, "__experiment_id"), i4 = Dr(null == t4 ? void 0 : t4.search, "__experiment_variant");
        e4 && i4 && (_wa.zn("previewing web experiments " + e4 + " && " + i4), this.getWebExperiments(((t5) => {
          this.Gn(parseInt(e4), i4, t5);
        }), false, true));
      }
    }
    loadIfEnabled() {
      this.qt.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic();
    }
    getWebExperiments(t4, e4, i4) {
      if (this.qt.disable_web_experiments && !i4) return t4([]);
      var r4 = this._instance.get_property("$web_experiments");
      if (r4 && !e4) return t4(r4);
      this._instance._send_request({ url: this._instance.requestRouter.endpointFor("api", "/api/web_experiments/?token=" + this.qt.token), method: "GET", callback: (e5) => t4(200 === e5.statusCode && e5.json && e5.json.experiments || []) });
    }
    Gn(t4, e4, i4) {
      var r4 = i4.filter(((e5) => e5.id === t4));
      r4 && r4.length > 0 && (_wa.zn("Previewing web experiment [" + r4[0].name + "] with variant [" + e4 + "]"), this.Wn(r4[0].name, e4, r4[0].variants[e4].transforms));
    }
    static Zn(t4) {
      return !H2(t4.conditions) && _wa.Qn(t4) && _wa.Jn(t4);
    }
    static Qn(t4) {
      var e4;
      if (H2(t4.conditions) || H2(null == (e4 = t4.conditions) ? void 0 : e4.url)) return true;
      var i4, r4, s4, n3 = _wa.getWindowLocation();
      return !!n3 && (null == (i4 = t4.conditions) || !i4.url || ya[null !== (r4 = null == (s4 = t4.conditions) ? void 0 : s4.urlMatchType) && void 0 !== r4 ? r4 : "icontains"](t4.conditions.url, n3));
    }
    static getWindowLocation() {
      return null == t3 ? void 0 : t3.location;
    }
    static Jn(t4) {
      var e4;
      if (H2(t4.conditions) || H2(null == (e4 = t4.conditions) ? void 0 : e4.utm)) return true;
      var i4 = qr();
      if (i4.utm_source) {
        var r4, s4, n3, o4, a4, l4, u5, h4, d4 = null == (r4 = t4.conditions) || null == (r4 = r4.utm) || !r4.utm_campaign || (null == (s4 = t4.conditions) || null == (s4 = s4.utm) ? void 0 : s4.utm_campaign) == i4.utm_campaign, v4 = null == (n3 = t4.conditions) || null == (n3 = n3.utm) || !n3.utm_source || (null == (o4 = t4.conditions) || null == (o4 = o4.utm) ? void 0 : o4.utm_source) == i4.utm_source, c4 = null == (a4 = t4.conditions) || null == (a4 = a4.utm) || !a4.utm_medium || (null == (l4 = t4.conditions) || null == (l4 = l4.utm) ? void 0 : l4.utm_medium) == i4.utm_medium, p4 = null == (u5 = t4.conditions) || null == (u5 = u5.utm) || !u5.utm_term || (null == (h4 = t4.conditions) || null == (h4 = h4.utm) ? void 0 : h4.utm_term) == i4.utm_term;
        return d4 && c4 && p4 && v4;
      }
      return false;
    }
    static zn(t4) {
      for (var e4 = arguments.length, i4 = new Array(e4 > 1 ? e4 - 1 : 0), r4 = 1; e4 > r4; r4++) i4[r4 - 1] = arguments[r4];
      Le.info("[WebExperiments] " + t4, i4);
    }
    Wn(t4, e4, i4) {
      this._is_bot() ? _wa.zn(ba) : "control" !== e4 ? i4.forEach(((i5) => {
        if (i5.selector) {
          var r4;
          _wa.zn("applying transform of variant " + e4 + " for experiment " + t4 + " ", i5);
          var s4 = null == (r4 = document) ? void 0 : r4.querySelectorAll(i5.selector);
          null == s4 || s4.forEach(((t5) => {
            var e5 = t5;
            i5.html && (e5.innerHTML = i5.html), i5.css && e5.setAttribute("style", i5.css);
          }));
        }
      })) : _wa.zn("Control variants leave the page unmodified.");
    }
    _is_bot() {
      return i3 && this._instance ? xn(i3, this.qt.custom_blocked_useragents) : void 0;
    }
  };
  var xa = Ne("[Conversations]");
  var Ea = "Conversations not available yet.";
  var Sa = { featureFlags: class {
    constructor(t4) {
      this.Kn = false, this.Yn = false, this.Xn = false, this.es = false, this.ts = false, this.rs = false, this.ns = false, this.ss = false, this._instance = t4, this.featureFlagEventHandlers = [];
    }
    get qt() {
      return this._instance.config;
    }
    get ni() {
      return this._instance.persistence;
    }
    os(t4) {
      return this._instance.get_property(t4);
    }
    us() {
      var t4, e4;
      return null !== (t4 = null == (e4 = this.ni) ? void 0 : e4.wr(this.qt.feature_flag_cache_ttl_ms)) && void 0 !== t4 && t4;
    }
    ls() {
      return !!this.us() && (this.ss || this.Xn || (this.ss = true, ca.warn("Feature flag cache is stale, triggering refresh..."), this.reloadFeatureFlags()), true);
    }
    hs() {
      var t4, e4 = null !== (t4 = this.qt.evaluation_contexts) && void 0 !== t4 ? t4 : this.qt.evaluation_environments;
      return !this.qt.evaluation_environments || this.qt.evaluation_contexts || this.ns || (ca.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this.ns = true), null != e4 && e4.length ? e4.filter(((t5) => {
        var e5 = t5 && "string" == typeof t5 && t5.trim().length > 0;
        return e5 || ca.error("Invalid evaluation context found:", t5, "Expected non-empty string"), e5;
      })) : [];
    }
    cs() {
      return this.hs().length > 0;
    }
    initialize() {
      var t4, e4, { config: i4 } = this._instance, r4 = null !== (t4 = null == (e4 = i4.bootstrap) ? void 0 : e4.featureFlags) && void 0 !== t4 ? t4 : {};
      if (Object.keys(r4).length) {
        var s4, n3, o4 = null !== (s4 = null == (n3 = i4.bootstrap) ? void 0 : n3.featureFlagPayloads) && void 0 !== s4 ? s4 : {}, a4 = Object.keys(r4).filter(((t5) => !!r4[t5])).reduce(((t5, e5) => (t5[e5] = r4[e5] || false, t5)), {}), l4 = Object.keys(o4).filter(((t5) => a4[t5])).reduce(((t5, e5) => (o4[e5] && (t5[e5] = o4[e5]), t5)), {});
        this.receivedFeatureFlags({ featureFlags: a4, featureFlagPayloads: l4 });
      }
    }
    updateFlags(t4, e4, i4) {
      var r4 = null != i4 && i4.merge ? this.getFlagVariants() : {}, s4 = null != i4 && i4.merge ? this.getFlagPayloads() : {}, n3 = f4({}, r4, t4), o4 = f4({}, s4, e4), a4 = {};
      for (var [l4, u5] of Object.entries(n3)) {
        var h4 = "string" == typeof u5;
        a4[l4] = { key: l4, enabled: !!h4 || Boolean(u5), variant: h4 ? u5 : void 0, reason: void 0, metadata: N2(null == o4 ? void 0 : o4[l4]) ? void 0 : { id: 0, version: void 0, description: void 0, payload: o4[l4] } };
      }
      this.receivedFeatureFlags({ flags: a4 });
    }
    get hasLoadedFlags() {
      return this.Yn;
    }
    getFlags() {
      return Object.keys(this.getFlagVariants());
    }
    getFlagsWithDetails() {
      var t4 = this.os(di), e4 = this.os(pi), i4 = this.os(fi);
      if (!i4 && !e4) return t4 || {};
      var r4 = Xi({}, t4 || {}), s4 = [.../* @__PURE__ */ new Set([...Object.keys(i4 || {}), ...Object.keys(e4 || {})])];
      for (var n3 of s4) {
        var o4, a4, l4 = r4[n3], u5 = null == e4 ? void 0 : e4[n3], h4 = N2(u5) ? null !== (o4 = null == l4 ? void 0 : l4.enabled) && void 0 !== o4 && o4 : !!u5, d4 = N2(u5) ? l4.variant : "string" == typeof u5 ? u5 : void 0, v4 = null == i4 ? void 0 : i4[n3], c4 = f4({}, l4, { enabled: h4, variant: h4 ? null != d4 ? d4 : null == l4 ? void 0 : l4.variant : void 0 });
        h4 !== (null == l4 ? void 0 : l4.enabled) && (c4.original_enabled = null == l4 ? void 0 : l4.enabled), d4 !== (null == l4 ? void 0 : l4.variant) && (c4.original_variant = null == l4 ? void 0 : l4.variant), v4 && (c4.metadata = f4({}, null == l4 ? void 0 : l4.metadata, { payload: v4, original_payload: null == l4 || null == (a4 = l4.metadata) ? void 0 : a4.payload })), r4[n3] = c4;
      }
      return this.Kn || (ca.warn(" Overriding feature flag details!", { flagDetails: t4, overriddenPayloads: i4, finalDetails: r4 }), this.Kn = true), r4;
    }
    getFlagVariants() {
      var t4 = this.os(li), e4 = this.os(pi);
      if (!e4) return t4 || {};
      for (var i4 = Xi({}, t4), r4 = Object.keys(e4), s4 = 0; r4.length > s4; s4++) i4[r4[s4]] = e4[r4[s4]];
      return this.Kn || (ca.warn(" Overriding feature flags!", { enabledFlags: t4, overriddenFlags: e4, finalFlags: i4 }), this.Kn = true), i4;
    }
    getFlagPayloads() {
      var t4 = this.os(vi), e4 = this.os(fi);
      if (!e4) return t4 || {};
      for (var i4 = Xi({}, t4 || {}), r4 = Object.keys(e4), s4 = 0; r4.length > s4; s4++) i4[r4[s4]] = e4[r4[s4]];
      return this.Kn || (ca.warn(" Overriding feature flag payloads!", { flagPayloads: t4, overriddenPayloads: e4, finalPayloads: i4 }), this.Kn = true), i4;
    }
    reloadFeatureFlags() {
      this.es || this.qt.advanced_disable_feature_flags || this.ds || (this._instance.Li.emit("featureFlagsReloading", true), this.ds = setTimeout((() => {
        this.vs();
      }), 5));
    }
    fs() {
      clearTimeout(this.ds), this.ds = void 0;
    }
    ensureFlagsLoaded() {
      this.Yn || this.Xn || this.ds || this.reloadFeatureFlags();
    }
    setAnonymousDistinctId(t4) {
      this.$anon_distinct_id = t4;
    }
    setReloadingPaused(t4) {
      this.es = t4;
    }
    vs(t4) {
      var e4;
      if (this.fs(), !this._instance.Lr()) if (this.Xn) this.ts = true;
      else {
        var i4 = this.qt.token, r4 = this.os(He), s4 = { token: i4, distinct_id: this._instance.get_distinct_id(), groups: this._instance.getGroups(), $anon_distinct_id: this.$anon_distinct_id, person_properties: f4({}, (null == (e4 = this.ni) ? void 0 : e4.get_initial_props()) || {}, this.os(_i) || {}), group_properties: this.os(gi), timezone: Qr() };
        B3(r4) || N2(r4) || (s4.$device_id = r4), (null != t4 && t4.disableFlags || this.qt.advanced_disable_feature_flags) && (s4.disable_flags = true), this.cs() && (s4.evaluation_contexts = this.hs());
        var n3 = this._instance.requestRouter.endpointFor("flags", "/flags/?v=2" + (this.qt.advanced_only_evaluate_survey_feature_flags ? "&only_evaluate_survey_feature_flags=true" : ""));
        this.Xn = true, this._instance._send_request({ method: "POST", url: n3, data: s4, compression: this.qt.disable_compression ? void 0 : ws.Base64, timeout: this.qt.feature_flag_request_timeout_ms, callback: (t5) => {
          var e5, i5, r5, n4 = true;
          if (200 === t5.statusCode && (this.ts || (this.$anon_distinct_id = void 0), n4 = false), this.Xn = false, !s4.disable_flags || this.ts) {
            this.rs = !n4;
            var o4 = [];
            t5.error ? t5.error instanceof Error ? o4.push("AbortError" === t5.error.name ? "timeout" : "connection_error") : o4.push("unknown_error") : 200 !== t5.statusCode && o4.push("api_error_" + t5.statusCode), null != (e5 = t5.json) && e5.errorsWhileComputingFlags && o4.push("errors_while_computing_flags");
            var a4, l4 = !(null == (i5 = t5.json) || null == (i5 = i5.quotaLimited) || !i5.includes("feature_flags"));
            if (l4 && o4.push("quota_limited"), null == (r5 = this.ni) || r5.register({ [Ei]: o4 }), l4) ca.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.");
            else s4.disable_flags || this.receivedFeatureFlags(null !== (a4 = t5.json) && void 0 !== a4 ? a4 : {}, n4, { partialResponse: !!this.qt.advanced_only_evaluate_survey_feature_flags }), this.ts && (this.ts = false, this.vs());
          }
        } });
      }
    }
    getFeatureFlag(t4, e4) {
      var i4;
      if (void 0 === e4 && (e4 = {}), !e4.fresh || this.rs) if (this.Yn || this.getFlags() && this.getFlags().length > 0) {
        if (!this.ls()) {
          var r4 = this.getFeatureFlagResult(t4, e4);
          return null !== (i4 = null == r4 ? void 0 : r4.variant) && void 0 !== i4 ? i4 : null == r4 ? void 0 : r4.enabled;
        }
      } else ca.warn('getFeatureFlag for key "' + t4 + fa);
    }
    getFeatureFlagDetails(t4) {
      return this.getFlagsWithDetails()[t4];
    }
    getFeatureFlagPayload(t4) {
      var e4 = this.getFeatureFlagResult(t4, { send_event: false });
      return null == e4 ? void 0 : e4.payload;
    }
    getFeatureFlagResult(t4, e4) {
      if (void 0 === e4 && (e4 = {}), !e4.fresh || this.rs) if (this.Yn || this.getFlags() && this.getFlags().length > 0) {
        if (!this.ls()) {
          var i4 = this.getFlagVariants(), r4 = t4 in i4, s4 = i4[t4], n3 = this.getFlagPayloads()[t4], o4 = String(s4), a4 = this.os(ci) || void 0, l4 = this.os(Si) || void 0, u5 = this.os(wi) || {};
          if (this.qt.advanced_feature_flags_dedup_per_session) {
            var h4, d4 = this._instance.get_session_id(), v4 = this.os(xi);
            d4 && d4 !== v4 && (u5 = {}, null == (h4 = this.ni) || h4.register({ [wi]: u5, [xi]: d4 }));
          }
          if ((e4.send_event || !("send_event" in e4)) && (!(t4 in u5) || !u5[t4].includes(o4))) {
            var c4, p4, f5, _3, g3, m4, b3, y4, w4, x3;
            M(u5[t4]) ? u5[t4].push(o4) : u5[t4] = [o4], null == (c4 = this.ni) || c4.register({ [wi]: u5 });
            var E3 = this.getFeatureFlagDetails(t4), S3 = [...null !== (p4 = this.os(Ei)) && void 0 !== p4 ? p4 : []];
            N2(s4) && S3.push("flag_missing");
            var T4 = { $feature_flag: t4, $feature_flag_response: s4, $feature_flag_payload: n3 || null, $feature_flag_request_id: a4, $feature_flag_evaluated_at: l4, $feature_flag_bootstrapped_response: (null == (f5 = this.qt.bootstrap) || null == (f5 = f5.featureFlags) ? void 0 : f5[t4]) || null, $feature_flag_bootstrapped_payload: (null == (_3 = this.qt.bootstrap) || null == (_3 = _3.featureFlagPayloads) ? void 0 : _3[t4]) || null, $used_bootstrap_value: !this.rs };
            N2(null == E3 || null == (g3 = E3.metadata) ? void 0 : g3.version) || (T4.$feature_flag_version = E3.metadata.version);
            var k4, R4 = null !== (m4 = null == E3 || null == (b3 = E3.reason) ? void 0 : b3.description) && void 0 !== m4 ? m4 : null == E3 || null == (y4 = E3.reason) ? void 0 : y4.code;
            R4 && (T4.$feature_flag_reason = R4), null != E3 && null != (w4 = E3.metadata) && w4.id && (T4.$feature_flag_id = E3.metadata.id), N2(null == E3 ? void 0 : E3.original_variant) && N2(null == E3 ? void 0 : E3.original_enabled) || (T4.$feature_flag_original_response = N2(E3.original_variant) ? E3.original_enabled : E3.original_variant), null != E3 && null != (x3 = E3.metadata) && x3.original_payload && (T4.$feature_flag_original_payload = null == E3 || null == (k4 = E3.metadata) ? void 0 : k4.original_payload), S3.length && (T4.$feature_flag_error = S3.join(",")), this._instance.capture("$feature_flag_called", T4);
          }
          if (r4) {
            var P3 = n3;
            if (!N2(n3)) try {
              P3 = JSON.parse(n3);
            } catch (t5) {
            }
            return { key: t4, enabled: !!s4, variant: "string" == typeof s4 ? s4 : void 0, payload: P3 };
          }
        }
      } else ca.warn('getFeatureFlagResult for key "' + t4 + fa);
    }
    getRemoteConfigPayload(t4, e4) {
      var i4 = this.qt.token, r4 = { distinct_id: this._instance.get_distinct_id(), token: i4 };
      this.cs() && (r4.evaluation_contexts = this.hs()), this._instance._send_request({ method: "POST", url: this._instance.requestRouter.endpointFor("flags", "/flags/?v=2"), data: r4, compression: this.qt.disable_compression ? void 0 : ws.Base64, timeout: this.qt.feature_flag_request_timeout_ms, callback(i5) {
        var r5, s4 = null == (r5 = i5.json) ? void 0 : r5.featureFlagPayloads;
        e4((null == s4 ? void 0 : s4[t4]) || void 0);
      } });
    }
    isFeatureEnabled(t4, e4) {
      if (void 0 === e4 && (e4 = {}), !e4.fresh || this.rs) {
        if (this.Yn || this.getFlags() && this.getFlags().length > 0) {
          var i4 = this.getFeatureFlag(t4, e4);
          return N2(i4) ? void 0 : !!i4;
        }
        ca.warn('isFeatureEnabled for key "' + t4 + fa);
      }
    }
    addFeatureFlagsHandler(t4) {
      this.featureFlagEventHandlers.push(t4);
    }
    removeFeatureFlagsHandler(t4) {
      this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(((e4) => e4 !== t4));
    }
    receivedFeatureFlags(t4, e4, i4) {
      if (this.ni) {
        this.Yn = true;
        var r4 = this.getFlagVariants(), s4 = this.getFlagPayloads(), n3 = this.getFlagsWithDetails();
        !(function(t5, e5, i5, r5, s5, n4) {
          void 0 === i5 && (i5 = {}), void 0 === r5 && (r5 = {}), void 0 === s5 && (s5 = {});
          var o4 = ((t6) => {
            var e6 = t6.flags;
            return e6 ? (t6.featureFlags = Object.fromEntries(Object.keys(e6).map(((t7) => {
              var i6;
              return [t7, null !== (i6 = e6[t7].variant) && void 0 !== i6 ? i6 : e6[t7].enabled];
            }))), t6.featureFlagPayloads = Object.fromEntries(Object.keys(e6).filter(((t7) => e6[t7].enabled)).filter(((t7) => {
              var i6;
              return null == (i6 = e6[t7].metadata) ? void 0 : i6.payload;
            })).map(((t7) => {
              var i6;
              return [t7, null == (i6 = e6[t7].metadata) ? void 0 : i6.payload];
            })))) : ca.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), t6;
          })(t5), a4 = o4.flags, l4 = o4.featureFlags, u5 = o4.featureFlagPayloads;
          if (l4) {
            var h4 = t5.requestId, d4 = t5.evaluatedAt;
            if (M(l4)) {
              ca.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
              var v4 = {};
              if (l4) for (var c4 = 0; l4.length > c4; c4++) v4[l4[c4]] = true;
              e5 && e5.register({ [ui]: l4, [li]: v4 });
            } else {
              var p4 = l4, _3 = u5, g3 = a4;
              if (null != n4 && n4.partialResponse) p4 = f4({}, i5, p4), _3 = f4({}, r5, _3), g3 = f4({}, s5, g3);
              else if (t5.errorsWhileComputingFlags) if (a4) {
                var m4 = new Set(Object.keys(a4).filter(((t6) => {
                  var e6;
                  return !(null != (e6 = a4[t6]) && e6.failed);
                })));
                p4 = f4({}, i5, Object.fromEntries(Object.entries(p4).filter(((t6) => {
                  var [e6] = t6;
                  return m4.has(e6);
                })))), _3 = f4({}, r5, Object.fromEntries(Object.entries(_3 || {}).filter(((t6) => {
                  var [e6] = t6;
                  return m4.has(e6);
                })))), g3 = f4({}, s5, Object.fromEntries(Object.entries(g3 || {}).filter(((t6) => {
                  var [e6] = t6;
                  return m4.has(e6);
                }))));
              } else p4 = f4({}, i5, p4), _3 = f4({}, r5, _3), g3 = f4({}, s5, g3);
              e5 && e5.register(f4({ [ui]: Object.keys(ga(p4)), [li]: p4 || {}, [vi]: _3 || {}, [di]: g3 || {} }, h4 ? { [ci]: h4 } : {}, d4 ? { [Si]: d4 } : {}));
            }
          }
        })(t4, this.ni, r4, s4, n3, i4), e4 || (this.ss = false), this.ps(e4);
      }
    }
    override(t4, e4) {
      void 0 === e4 && (e4 = false), ca.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({ flags: t4, suppressWarning: e4 });
    }
    overrideFeatureFlags(t4) {
      if (!this._instance.__loaded || !this.ni) return ca.uninitializedWarning("posthog.featureFlags.overrideFeatureFlags");
      if (false === t4) return this.ni.unregister(pi), this.ni.unregister(fi), this.ps(), pa.info("All overrides cleared");
      if (M(t4)) {
        var e4 = _a(t4);
        return this.ni.register({ [pi]: e4 }), this.ps(), pa.info("Flag overrides set", { flags: t4 });
      }
      if (t4 && "object" == typeof t4 && ("flags" in t4 || "payloads" in t4)) {
        var i4, r4 = t4;
        if (this.Kn = Boolean(null !== (i4 = r4.suppressWarning) && void 0 !== i4 && i4), "flags" in r4) {
          if (false === r4.flags) this.ni.unregister(pi), pa.info("Flag overrides cleared");
          else if (r4.flags) {
            if (M(r4.flags)) {
              var s4 = _a(r4.flags);
              this.ni.register({ [pi]: s4 });
            } else this.ni.register({ [pi]: r4.flags });
            pa.info("Flag overrides set", { flags: r4.flags });
          }
        }
        return "payloads" in r4 && (false === r4.payloads ? (this.ni.unregister(fi), pa.info("Payload overrides cleared")) : r4.payloads && (this.ni.register({ [fi]: r4.payloads }), pa.info("Payload overrides set", { payloads: r4.payloads }))), void this.ps();
      }
      if (t4 && "object" == typeof t4) return this.ni.register({ [pi]: t4 }), this.ps(), pa.info("Flag overrides set", { flags: t4 });
      ca.warn("Invalid overrideOptions provided to overrideFeatureFlags", { overrideOptions: t4 });
    }
    onFeatureFlags(t4) {
      if (this.addFeatureFlagsHandler(t4), this.Yn) {
        var { flags: e4, flagVariants: i4 } = this.gs();
        t4(e4, i4);
      }
      return () => this.removeFeatureFlagsHandler(t4);
    }
    updateEarlyAccessFeatureEnrollment(t4, e4, i4) {
      var r4, s4 = (this.os(hi) || []).find(((e5) => e5.flagKey === t4)), n3 = { ["$feature_enrollment/" + t4]: e4 }, o4 = { $feature_flag: t4, $feature_enrollment: e4, $set: n3 };
      s4 && (o4.$early_access_feature_name = s4.name), i4 && (o4.$feature_enrollment_stage = i4), this._instance.capture("$feature_enrollment_update", o4), this.setPersonPropertiesForFlags(n3, false);
      var a4 = f4({}, this.getFlagVariants(), { [t4]: e4 });
      null == (r4 = this.ni) || r4.register({ [ui]: Object.keys(ga(a4)), [li]: a4 }), this.ps();
    }
    getEarlyAccessFeatures(t4, e4, i4) {
      void 0 === e4 && (e4 = false);
      var r4 = this.os(hi), s4 = i4 ? "&" + i4.map(((t5) => "stage=" + t5)).join("&") : "";
      if (r4 && !e4) return t4(r4);
      this._instance._send_request({ url: this._instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=" + this.qt.token + s4), method: "GET", callback: (e5) => {
        var i5, r5;
        if (e5.json) {
          var s5 = e5.json.earlyAccessFeatures;
          return null == (i5 = this.ni) || i5.unregister(hi), null == (r5 = this.ni) || r5.register({ [hi]: s5 }), t4(s5);
        }
      } });
    }
    gs() {
      var t4 = this.getFlags(), e4 = this.getFlagVariants();
      return { flags: t4.filter(((t5) => e4[t5])), flagVariants: Object.keys(e4).filter(((t5) => e4[t5])).reduce(((t5, i4) => (t5[i4] = e4[i4], t5)), {}) };
    }
    ps(t4) {
      var { flags: e4, flagVariants: i4 } = this.gs();
      this.featureFlagEventHandlers.forEach(((r4) => r4(e4, i4, { errorsLoading: t4 })));
    }
    setPersonPropertiesForFlags(t4, e4) {
      void 0 === e4 && (e4 = true);
      var i4 = this.os(_i) || {}, r4 = (null == t4 ? void 0 : t4.$set) || (null != t4 && t4.$set_once ? {} : t4), s4 = null == t4 ? void 0 : t4.$set_once, n3 = {};
      if (s4) for (var o4 in s4) ({}).hasOwnProperty.call(s4, o4) && (o4 in i4 || (n3[o4] = s4[o4]));
      this._instance.register({ [_i]: f4({}, i4, n3, r4) }), e4 && this._instance.reloadFeatureFlags();
    }
    resetPersonPropertiesForFlags() {
      this._instance.unregister(_i);
    }
    setGroupPropertiesForFlags(t4, e4) {
      void 0 === e4 && (e4 = true);
      var i4 = this.os(gi) || {};
      0 !== Object.keys(i4).length && Object.keys(i4).forEach(((e5) => {
        i4[e5] = f4({}, i4[e5], t4[e5]), delete t4[e5];
      })), this._instance.register({ [gi]: f4({}, i4, t4) }), e4 && this._instance.reloadFeatureFlags();
    }
    resetGroupPropertiesForFlags(t4) {
      if (t4) {
        var e4 = this.os(gi) || {};
        this._instance.register({ [gi]: f4({}, e4, { [t4]: {} }) });
      } else this._instance.unregister(gi);
    }
    reset() {
      this.Yn = false, this.Xn = false, this.es = false, this.ts = false, this.rs = false, this.$anon_distinct_id = void 0, this.fs(), this.Kn = false;
    }
  } };
  var $a = { sessionRecording: class {
    get qt() {
      return this._instance.config;
    }
    get ni() {
      return this._instance.persistence;
    }
    get started() {
      var t4;
      return !(null == (t4 = this.ys) || !t4.isStarted);
    }
    get status() {
      var t4, e4;
      return this.bs === Yo || this.bs === Jo ? this.bs : null !== (t4 = null == (e4 = this.ys) ? void 0 : e4.status) && void 0 !== t4 ? t4 : this.bs;
    }
    constructor(t4) {
      if (this._forceAllowLocalhostNetworkCapture = false, this.bs = Wo, this._s = void 0, this._instance = t4, !this._instance.sessionManager) throw Xo.error("started without valid sessionManager"), new Error(Ko + " started without valid sessionManager. This is a bug.");
      if (this.qt.cookieless_mode === Ni) throw new Error(Ko + ' cannot be used with cookieless_mode="always"');
    }
    initialize() {
      this.startIfEnabledOrStop();
    }
    get ws() {
      var e4, i4 = !(null == (e4 = this._instance.get_property(ei)) || !e4.enabled), r4 = !this.qt.disable_session_recording, s4 = this.qt.disable_session_recording || this._instance.consent.isOptedOut();
      return t3 && i4 && r4 && !s4;
    }
    startIfEnabledOrStop(t4) {
      var e4;
      if (!this.ws || null == (e4 = this.ys) || !e4.isStarted) {
        var i4 = !N2(Object.assign) && !N2(Array.from);
        this.ws && i4 ? (this.xs(t4), Xo.info("starting")) : (this.bs = Wo, this.stopRecording());
      }
    }
    xs(t4) {
      var e4, i4, r4;
      this.ws && (this.bs !== Yo && this.bs !== Jo && (this.bs = Go), null != h3 && null != (e4 = h3.__PosthogExtensions__) && null != (e4 = e4.rrweb) && e4.record && null != (i4 = h3.__PosthogExtensions__) && i4.initSessionRecording ? this.Ss(t4) : null == (r4 = h3.__PosthogExtensions__) || null == r4.loadExternalDependency || r4.loadExternalDependency(this._instance, this.ks, ((e5) => {
        if (e5) return Xo.error("could not load recorder", e5);
        this.Ss(t4);
      })));
    }
    stopRecording() {
      var t4, e4;
      null == (t4 = this._s) || t4.call(this), this._s = void 0, null == (e4 = this.ys) || e4.stop();
    }
    Cs() {
      var t4, e4;
      null == (t4 = this._s) || t4.call(this), this._s = void 0, null == (e4 = this.ys) || e4.discard();
    }
    Is() {
      var t4;
      null == (t4 = this.ni) || t4.unregister(ai);
    }
    Ts(t4, e4) {
      if (H2(t4)) return null;
      var i4, r4 = q2(t4) ? t4 : parseFloat(t4);
      return "number" != typeof (i4 = r4) || !Number.isFinite(i4) || 0 > i4 || i4 > 1 ? (Xo.warn(e4 + " must be between 0 and 1. Ignoring invalid value:", t4), null) : r4;
    }
    Es(t4) {
      if (this.ni) {
        var e4, i4, r4 = this.ni, s4 = () => {
          var e5, i5 = false === t4.sessionRecording ? void 0 : t4.sessionRecording, s5 = this.Ts(null == (e5 = this.qt.session_recording) ? void 0 : e5.sampleRate, "session_recording.sampleRate"), n3 = this.Ts(null == i5 ? void 0 : i5.sampleRate, "remote config sampleRate"), o4 = null != s5 ? s5 : n3;
          H2(o4) && this.Is();
          var a4 = null == i5 ? void 0 : i5.minimumDurationMilliseconds;
          r4.register({ [ei]: f4({ cache_timestamp: Date.now(), enabled: !!i5 }, i5, { networkPayloadCapture: f4({ capturePerformance: t4.capturePerformance }, null == i5 ? void 0 : i5.networkPayloadCapture), canvasRecording: { enabled: null == i5 ? void 0 : i5.recordCanvas, fps: null == i5 ? void 0 : i5.canvasFps, quality: null == i5 ? void 0 : i5.canvasQuality }, sampleRate: o4, minimumDurationMilliseconds: N2(a4) ? null : a4, endpoint: null == i5 ? void 0 : i5.endpoint, triggerMatchType: null == i5 ? void 0 : i5.triggerMatchType, masking: null == i5 ? void 0 : i5.masking, urlTriggers: null == i5 ? void 0 : i5.urlTriggers, version: null == i5 ? void 0 : i5.version, triggerGroups: null == i5 ? void 0 : i5.triggerGroups }) });
        };
        s4(), null == (e4 = this._s) || e4.call(this), this._s = null == (i4 = this._instance.sessionManager) ? void 0 : i4.onSessionId(s4);
      }
    }
    onRemoteConfig(t4) {
      return "sessionRecording" in t4 ? false === t4.sessionRecording ? (this.Es(t4), void this.Cs()) : (this.Es(t4), void this.startIfEnabledOrStop()) : (this.bs === Yo && (this.bs = Jo, Xo.warn("config refresh failed, recording will not start until page reload")), void this.startIfEnabledOrStop());
    }
    log(t4, e4) {
      var i4;
      void 0 === e4 && (e4 = "log"), null != (i4 = this.ys) && i4.log ? this.ys.log(t4, e4) : Xo.warn("log called before recorder was ready");
    }
    get ks() {
      var t4, e4, i4 = null == (t4 = this._instance) || null == (t4 = t4.persistence) ? void 0 : t4.get_property(ei);
      return (null == i4 || null == (e4 = i4.scriptConfig) ? void 0 : e4.script) || "lazy-recorder";
    }
    Ms() {
      var t4, e4, i4 = this._instance.get_property(ei);
      if (!i4) return false;
      try {
        e4 = "object" == typeof i4 ? i4 : JSON.parse(i4);
      } catch (t5) {
        return Xo.warn("persisted remote config for session recording is invalid and will be ignored", t5), false;
      }
      var r4 = null !== (t4 = e4.cache_timestamp) && void 0 !== t4 ? t4 : Date.now();
      return 36e5 >= Date.now() - r4;
    }
    Ss(t4) {
      var e4, i4;
      if (null == (e4 = h3.__PosthogExtensions__) || !e4.initSessionRecording) return Xo.warn("Called on script loaded before session recording is available. This can be caused by adblockers."), void this._instance.register_for_session({ [Di]: true });
      if (this.ys || (this.ys = null == (i4 = h3.__PosthogExtensions__) ? void 0 : i4.initSessionRecording(this._instance), this.ys._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this.Ms()) {
        if (this.bs === Jo || this.bs === Yo) return;
        return this.bs = Yo, Xo.info("persisted remote config is stale, requesting fresh config before starting"), void new bs(this._instance).load();
      }
      this.bs = Go, this.ys.start(t4);
    }
    onRRwebEmit(t4) {
      var e4;
      null == (e4 = this.ys) || null == e4.onRRwebEmit || e4.onRRwebEmit(t4);
    }
    overrideLinkedFlag() {
      var t4, e4;
      this.ys || null == (e4 = this.ni) || e4.register({ [ri]: true }), null == (t4 = this.ys) || t4.overrideLinkedFlag();
    }
    overrideSampling() {
      var t4, e4;
      this.ys || null == (e4 = this.ni) || e4.register({ [ii]: true }), null == (t4 = this.ys) || t4.overrideSampling();
    }
    overrideTrigger(t4) {
      var e4, i4;
      this.ys || null == (i4 = this.ni) || i4.register({ ["url" === t4 ? si : ni]: true }), null == (e4 = this.ys) || e4.overrideTrigger(t4);
    }
    get sdkDebugProperties() {
      var t4;
      return (null == (t4 = this.ys) ? void 0 : t4.sdkDebugProperties) || { $recording_status: this.status };
    }
    tryAddCustomEvent(t4, e4) {
      var i4;
      return !(null == (i4 = this.ys) || !i4.tryAddCustomEvent(t4, e4));
    }
  } };
  var Ta = { autocapture: class {
    constructor(t4) {
      this.Ps = false, this.Rs = null, this.Os = false, this.instance = t4, this.rageclicks = new Mo(t4.config.rageclick), this.Ls = null;
    }
    initialize() {
      this.startIfEnabled();
    }
    get qt() {
      var t4, e4, i4 = U(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
      return i4.url_allowlist = null == (t4 = i4.url_allowlist) ? void 0 : t4.map(((t5) => new RegExp(t5))), i4.url_ignorelist = null == (e4 = i4.url_ignorelist) ? void 0 : e4.map(((t5) => new RegExp(t5))), i4;
    }
    Fs() {
      if (this.isBrowserSupported()) {
        if (t3 && r3) {
          var e4 = (e5) => {
            e5 = e5 || (null == t3 ? void 0 : t3.event);
            try {
              this.As(e5);
            } catch (t4) {
              Uo.error("Failed to capture event", t4);
            }
          };
          if (sr(r3, "submit", e4, { capture: true }), sr(r3, "change", e4, { capture: true }), sr(r3, "click", e4, { capture: true }), this.qt.capture_copied_text) {
            var i4 = (e5) => {
              e5 = e5 || (null == t3 ? void 0 : t3.event);
              try {
                this.As(e5, Do);
              } catch (t4) {
                Uo.error("Failed to capture copy/cut event", t4);
              }
            };
            sr(r3, "copy", i4, { capture: true }), sr(r3, "cut", i4, { capture: true });
          }
        }
      } else Uo.info("Disabling Automatic Event Collection because this browser is not supported");
    }
    startIfEnabled() {
      this.isEnabled && !this.Ps && (this.Fs(), this.Ps = true);
    }
    onRemoteConfig(t4) {
      t4.elementsChainAsString && (this.Os = t4.elementsChainAsString), this.instance.persistence && this.instance.persistence.register({ [We]: !!t4.autocapture_opt_out }), this.Rs = !!t4.autocapture_opt_out, this.startIfEnabled();
    }
    setElementSelectors(t4) {
      this.Ls = t4;
    }
    getElementSelectors(t4) {
      var e4, i4 = [];
      return null == (e4 = this.Ls) || e4.forEach(((e5) => {
        var s4 = null == r3 ? void 0 : r3.querySelectorAll(e5);
        null == s4 || s4.forEach(((r4) => {
          t4 === r4 && i4.push(e5);
        }));
      })), i4;
    }
    get isEnabled() {
      var t4, e4, i4 = null == (t4 = this.instance.persistence) ? void 0 : t4.props[We];
      if (B3(this.Rs) && !W(i4) && !this.instance.Lr()) return false;
      var r4 = null !== (e4 = this.Rs) && void 0 !== e4 ? e4 : !!i4;
      return !!this.instance.config.autocapture && !r4;
    }
    As(e4, i4) {
      if (void 0 === i4 && (i4 = "$autocapture"), this.isEnabled) {
        var r4, s4 = po(e4);
        oo(s4) && (s4 = s4.parentNode || null), "$autocapture" === i4 && "click" === e4.type && e4 instanceof MouseEvent && this.instance.config.rageclick && null != (r4 = this.rageclicks) && r4.isRageClick(e4.clientX, e4.clientY, e4.timeStamp || (/* @__PURE__ */ new Date()).getTime()) && (function(e5, i5) {
          if (!t3 || yo(e5)) return false;
          var r5, s5, n4;
          if (W(i5) ? (r5 = !!i5 && bo, s5 = void 0) : (r5 = null !== (n4 = null == i5 ? void 0 : i5.css_selector_ignorelist) && void 0 !== n4 ? n4 : bo, s5 = null == i5 ? void 0 : i5.content_ignorelist), false === r5) return false;
          var { targetElementList: o5 } = wo(e5, false);
          return !(function(t4, e6) {
            if (false === t4 || N2(t4)) return false;
            var i6;
            if (true === t4) i6 = mo;
            else {
              if (!M(t4)) return false;
              if (t4.length > 10) return Le.error("[PostHog] content_ignorelist array cannot exceed 10 items. Use css_selector_ignorelist for more complex matching."), false;
              i6 = t4.map(((t5) => t5.toLowerCase()));
            }
            return e6.some(((t5) => {
              var { safeText: e7, ariaLabel: r6 } = t5;
              return i6.some(((t6) => e7.includes(t6) || r6.includes(t6)));
            }));
          })(s5, o5.map(((t4) => {
            var e6;
            return { safeText: co(t4).toLowerCase(), ariaLabel: (null == (e6 = t4.getAttribute("aria-label")) ? void 0 : e6.toLowerCase().trim()) || "" };
          }))) && !_o(o5, r5);
        })(s4, this.instance.config.rageclick) && this.As(e4, "$rageclick");
        var n3 = i4 === Do;
        if (s4 && (function(e5, i5, r5, s5, n4) {
          var o5, a5, l5, u6;
          if (void 0 === r5 && (r5 = void 0), !t3 || yo(e5)) return false;
          if (null != (o5 = r5) && o5.url_allowlist && !uo(r5.url_allowlist)) return false;
          if (null != (a5 = r5) && a5.url_ignorelist && uo(r5.url_ignorelist)) return false;
          if (null != (l5 = r5) && l5.dom_event_allowlist) {
            var h5 = r5.dom_event_allowlist;
            if (h5 && !h5.some(((t4) => i5.type === t4))) return false;
          }
          var { parentIsUsefulElement: d5, targetElementList: v4 } = wo(e5, s5);
          if (!(function(t4, e6) {
            var i6 = null == e6 ? void 0 : e6.element_allowlist;
            if (N2(i6)) return true;
            var r6, s6 = function(t5) {
              if (i6.some(((e7) => t5.tagName.toLowerCase() === e7))) return { v: true };
            };
            for (var n5 of t4) if (r6 = s6(n5)) return r6.v;
            return false;
          })(v4, r5)) return false;
          if (!_o(v4, null == (u6 = r5) ? void 0 : u6.css_selector_allowlist)) return false;
          var c4 = t3.getComputedStyle(e5);
          if (c4 && "pointer" === c4.getPropertyValue("cursor") && "click" === i5.type) return true;
          var p4 = e5.tagName.toLowerCase();
          switch (p4) {
            case "html":
              return false;
            case "form":
              return (n4 || ["submit"]).indexOf(i5.type) >= 0;
            case "input":
            case "select":
            case "textarea":
              return (n4 || ["change", "click"]).indexOf(i5.type) >= 0;
            default:
              return d5 ? (n4 || ["click"]).indexOf(i5.type) >= 0 : (n4 || ["click"]).indexOf(i5.type) >= 0 && (fo.indexOf(p4) > -1 || "true" === e5.getAttribute("contenteditable"));
          }
        })(s4, e4, this.qt, n3, n3 ? ["copy", "cut"] : void 0)) {
          var { props: o4, explicitNoCapture: a4 } = jo(s4, { e: e4, maskAllElementAttributes: this.instance.config.mask_all_element_attributes, maskAllText: this.instance.config.mask_all_text, elementAttributeIgnoreList: this.qt.element_attribute_ignorelist, elementsChainAsString: this.Os });
          if (a4) return false;
          var l4 = this.getElementSelectors(s4);
          if (l4 && l4.length > 0 && (o4.$element_selectors = l4), i4 === Do) {
            var u5, h4 = vo(null == t3 || null == (u5 = t3.getSelection()) ? void 0 : u5.toString()), d4 = e4.type || "clipboard";
            if (!h4) return false;
            o4.$selected_content = h4, o4.$copy_type = d4;
          }
          return this.instance.capture(i4, o4), true;
        }
      }
    }
    isBrowserSupported() {
      return D3(null == r3 ? void 0 : r3.querySelectorAll);
    }
  }, historyAutocapture: class {
    constructor(e4) {
      var i4;
      this._instance = e4, this.Ns = (null == t3 || null == (i4 = t3.location) ? void 0 : i4.pathname) || "";
    }
    initialize() {
      this.startIfEnabled();
    }
    get isEnabled() {
      return "history_change" === this._instance.config.capture_pageview;
    }
    startIfEnabled() {
      this.isEnabled && (Le.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges());
    }
    stop() {
      this.$s && this.$s(), this.$s = void 0, Le.info("History API monitoring stopped");
    }
    monitorHistoryChanges() {
      var e4, i4;
      if (t3 && t3.history) {
        var r4 = this;
        null != (e4 = t3.history.pushState) && e4.__posthog_wrapped__ || Bo(t3.history, "pushState", ((t4) => function(e5, i5, s4) {
          t4.call(this, e5, i5, s4), r4.Ds("pushState");
        })), null != (i4 = t3.history.replaceState) && i4.__posthog_wrapped__ || Bo(t3.history, "replaceState", ((t4) => function(e5, i5, s4) {
          t4.call(this, e5, i5, s4), r4.Ds("replaceState");
        })), this.qs();
      }
    }
    Ds(e4) {
      try {
        var i4, r4 = null == t3 || null == (i4 = t3.location) ? void 0 : i4.pathname;
        if (!r4) return;
        r4 !== this.Ns && this.isEnabled && this._instance.capture(Vi, { navigation_type: e4 }), this.Ns = r4;
      } catch (t4) {
        Le.error("Error capturing " + e4 + " pageview", t4);
      }
    }
    qs() {
      if (!this.$s) {
        var e4 = () => {
          this.Ds("popstate");
        };
        sr(t3, "popstate", e4), this.$s = () => {
          t3 && t3.removeEventListener("popstate", e4);
        };
      }
    }
  }, heatmaps: class {
    get qt() {
      return this.instance.config;
    }
    constructor(t4) {
      var e4;
      this.js = false, this.Ps = false, this.Hs = null, this.instance = t4, this.js = !(null == (e4 = this.instance.persistence) || !e4.props[Ge]), this.rageclicks = new Mo(t4.config.rageclick);
    }
    initialize() {
      this.startIfEnabled();
    }
    get flushIntervalMilliseconds() {
      var t4 = 5e3;
      return U(this.qt.capture_heatmaps) && this.qt.capture_heatmaps.flush_interval_milliseconds && (t4 = this.qt.capture_heatmaps.flush_interval_milliseconds), t4;
    }
    get isEnabled() {
      return H2(this.qt.capture_heatmaps) ? H2(this.qt.enable_heatmaps) ? this.js : this.qt.enable_heatmaps : false !== this.qt.capture_heatmaps;
    }
    startIfEnabled() {
      if (this.isEnabled) {
        if (this.Ps) return;
        Qo.info("starting..."), this.Us(), this.At();
      } else {
        var t4;
        clearInterval(null !== (t4 = this.Hs) && void 0 !== t4 ? t4 : void 0), this.Bs(), this.getAndClearBuffer();
      }
    }
    onRemoteConfig(t4) {
      if ("heatmaps" in t4) {
        var e4 = !!t4.heatmaps;
        this.instance.persistence && this.instance.persistence.register({ [Ge]: e4 }), this.js = e4, this.startIfEnabled();
      }
    }
    getAndClearBuffer() {
      var t4 = this.M;
      return this.M = void 0, t4;
    }
    zs(t4) {
      this.Mt(t4.originalEvent, "deadclick");
    }
    At() {
      this.Hs && clearInterval(this.Hs), this.Hs = "visible" === (null == r3 ? void 0 : r3.visibilityState) ? setInterval(this.Zr.bind(this), this.flushIntervalMilliseconds) : null;
    }
    Us() {
      t3 && r3 && (this.Vs = this.Zr.bind(this), sr(t3, qi, this.Vs), this.Ws = (e4) => this.Mt(e4 || (null == t3 ? void 0 : t3.event)), sr(r3, "click", this.Ws, { capture: true }), this.Zs = (e4) => this.Gs(e4 || (null == t3 ? void 0 : t3.event)), sr(r3, "mousemove", this.Zs, { capture: true }), this.Qs = new kr(this.instance, $r, this.zs.bind(this)), this.Qs.startIfEnabledOrStop(), this.Js = this.At.bind(this), sr(r3, Hi, this.Js), this.Ps = true);
    }
    Bs() {
      var e4;
      t3 && r3 && (this.Vs && t3.removeEventListener(qi, this.Vs), this.Ws && r3.removeEventListener("click", this.Ws, { capture: true }), this.Zs && r3.removeEventListener("mousemove", this.Zs, { capture: true }), this.Js && r3.removeEventListener(Hi, this.Js), clearTimeout(this.Ks), null == (e4 = this.Qs) || e4.stop(), this.Ps = false);
    }
    Ys(e4, i4) {
      var r4 = this.instance.scrollManager.scrollY(), s4 = this.instance.scrollManager.scrollX(), n3 = this.instance.scrollManager.scrollElement(), o4 = (function(e5, i5, r5) {
        for (var s5 = e5; s5 && so(s5) && !no(s5, "body"); ) {
          if (s5 === r5) return false;
          if (P2(i5, null == t3 ? void 0 : t3.getComputedStyle(s5).position)) return true;
          s5 = go(s5);
        }
        return false;
      })(po(e4), ["fixed", "sticky"], n3);
      return { x: e4.clientX + (o4 ? 0 : s4), y: e4.clientY + (o4 ? 0 : r4), target_fixed: o4, type: i4 };
    }
    Mt(t4, e4) {
      var i4;
      if (void 0 === e4 && (e4 = "click"), !ro(t4.target) && Zo(t4)) {
        var r4 = this.Ys(t4, e4);
        null != (i4 = this.rageclicks) && i4.isRageClick(t4.clientX, t4.clientY, (/* @__PURE__ */ new Date()).getTime()) && this.Xs(f4({}, r4, { type: "rageclick" })), this.Xs(r4);
      }
    }
    Gs(t4) {
      !ro(t4.target) && Zo(t4) && (clearTimeout(this.Ks), this.Ks = setTimeout((() => {
        this.Xs(this.Ys(t4, "mousemove"));
      }), 500));
    }
    Xs(e4) {
      if (t3) {
        var i4 = t3.location.href, r4 = this.qt.custom_personal_data_properties, s4 = this.qt.mask_personal_data_properties ? [...jr, ...r4 || []] : [], n3 = Ur(i4, s4, Br);
        this.M = this.M || {}, this.M[n3] || (this.M[n3] = []), this.M[n3].push(e4);
      }
    }
    Zr() {
      this.M && !L2(this.M) && this.instance.capture("$$heatmap", { $heatmap_data: this.getAndClearBuffer() });
    }
  }, deadClicksAutocapture: kr, webVitalsAutocapture: class {
    constructor(t4) {
      var e4;
      this.js = false, this.Ps = false, this.M = { url: void 0, metrics: [], firstMetricTimestamp: void 0 }, this.eo = () => {
        clearTimeout(this.ro), 0 !== this.M.metrics.length && (this._instance.capture("$web_vitals", this.M.metrics.reduce(((t5, e5) => f4({}, t5, { ["$web_vitals_" + e5.name + "_event"]: f4({}, e5), ["$web_vitals_" + e5.name + "_value"]: e5.value })), {})), this.M = { url: void 0, metrics: [], firstMetricTimestamp: void 0 });
      }, this.ht = (t5) => {
        var e5, i4 = null == (e5 = this._instance.sessionManager) ? void 0 : e5.checkAndGetSessionAndWindowId(true);
        if (N2(i4)) qo.error("Could not read session ID. Dropping metrics!");
        else {
          this.M = this.M || { url: void 0, metrics: [], firstMetricTimestamp: void 0 };
          var r4 = this.io();
          N2(r4) || (H2(null == t5 ? void 0 : t5.name) || H2(null == t5 ? void 0 : t5.value) ? qo.error("Invalid metric received", t5) : !this.no || this.no > t5.value ? (this.M.url !== r4 && (this.eo(), this.ro = setTimeout(this.eo, this.flushToCaptureTimeoutMs)), N2(this.M.url) && (this.M.url = r4), this.M.firstMetricTimestamp = N2(this.M.firstMetricTimestamp) ? Date.now() : this.M.firstMetricTimestamp, t5.attribution && t5.attribution.interactionTargetElement && (t5.attribution.interactionTargetElement = void 0), this.M.metrics.push(f4({}, t5, { $current_url: r4, $session_id: i4.sessionId, $window_id: i4.windowId, timestamp: Date.now() })), this.M.metrics.length === this.allowedMetrics.length && this.eo()) : qo.error("Ignoring metric with value >= " + this.no, t5));
        }
      }, this.so = () => {
        if (!this.Ps) {
          var t5, e5, i4, r4, s4 = h3.__PosthogExtensions__;
          N2(s4) || N2(s4.postHogWebVitalsCallbacks) || ({ onLCP: t5, onCLS: e5, onFCP: i4, onINP: r4 } = s4.postHogWebVitalsCallbacks), t5 && e5 && i4 && r4 ? (this.allowedMetrics.indexOf("LCP") > -1 && t5(this.ht.bind(this)), this.allowedMetrics.indexOf("CLS") > -1 && e5(this.ht.bind(this)), this.allowedMetrics.indexOf("FCP") > -1 && i4(this.ht.bind(this)), this.allowedMetrics.indexOf("INP") > -1 && r4(this.ht.bind(this)), this.Ps = true) : qo.error("web vitals callbacks not loaded - not starting");
        }
      }, this._instance = t4, this.js = !(null == (e4 = this._instance.persistence) || !e4.props[Xe]), this.startIfEnabled();
    }
    get oo() {
      return this._instance.config.capture_performance;
    }
    get allowedMetrics() {
      var t4, e4, i4 = U(this.oo) ? null == (t4 = this.oo) ? void 0 : t4.web_vitals_allowed_metrics : void 0;
      return H2(i4) ? (null == (e4 = this._instance.persistence) ? void 0 : e4.props[ti]) || ["CLS", "FCP", "INP", "LCP"] : i4;
    }
    get flushToCaptureTimeoutMs() {
      return (U(this.oo) ? this.oo.web_vitals_delayed_flush_ms : void 0) || 5e3;
    }
    get useAttribution() {
      var t4 = U(this.oo) ? this.oo.web_vitals_attribution : void 0;
      return null != t4 && t4;
    }
    get no() {
      var t4 = U(this.oo) && q2(this.oo.__web_vitals_max_value) ? this.oo.__web_vitals_max_value : Vo;
      return t4 > 0 && 6e4 >= t4 ? Vo : t4;
    }
    get isEnabled() {
      var t4 = null == s3 ? void 0 : s3.protocol;
      if ("http:" !== t4 && "https:" !== t4) return qo.info("Web Vitals are disabled on non-http/https protocols"), false;
      var e4 = U(this.oo) ? this.oo.web_vitals : W(this.oo) ? this.oo : void 0;
      return W(e4) ? e4 : this.js;
    }
    startIfEnabled() {
      this.isEnabled && !this.Ps && (qo.info("enabled, starting..."), this.lr(this.so));
    }
    onRemoteConfig(t4) {
      if ("capturePerformance" in t4) {
        var e4 = U(t4.capturePerformance) && !!t4.capturePerformance.web_vitals, i4 = U(t4.capturePerformance) ? t4.capturePerformance.web_vitals_allowed_metrics : void 0;
        this._instance.persistence && (this._instance.persistence.register({ [Xe]: e4 }), this._instance.persistence.register({ [ti]: i4 })), this.js = e4, this.startIfEnabled();
      }
    }
    lr(t4) {
      var e4, i4;
      null != (e4 = h3.__PosthogExtensions__) && e4.postHogWebVitalsCallbacks ? t4() : null == (i4 = h3.__PosthogExtensions__) || null == i4.loadExternalDependency || i4.loadExternalDependency(this._instance, this.useAttribution ? "web-vitals-with-attribution" : "web-vitals", ((e5) => {
        e5 ? qo.error("failed to load script", e5) : t4();
      }));
    }
    io() {
      var e4 = t3 ? t3.location.href : void 0;
      if (e4) {
        var i4 = this._instance.config.custom_personal_data_properties, r4 = this._instance.config.mask_personal_data_properties ? [...jr, ...i4 || []] : [];
        return Ur(e4, r4, Br);
      }
      qo.error("Could not determine current URL");
    }
  } };
  var ka = { exceptionObserver: class {
    constructor(e4) {
      var i4, r4, s4;
      this.so = () => {
        var e5;
        if (t3 && this.isEnabled && null != (e5 = h3.__PosthogExtensions__) && e5.errorWrappingFunctions) {
          var i5 = h3.__PosthogExtensions__.errorWrappingFunctions.wrapOnError, r5 = h3.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection, s5 = h3.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
          try {
            !this.ao && this.qt.capture_unhandled_errors && (this.ao = i5(this.captureException.bind(this))), !this.uo && this.qt.capture_unhandled_rejections && (this.uo = r5(this.captureException.bind(this))), !this.lo && this.qt.capture_console_errors && (this.lo = s5(this.captureException.bind(this)));
          } catch (t4) {
            zo.error("failed to start", t4), this.ho();
          }
        }
      }, this._instance = e4, this.co = !(null == (i4 = this._instance.persistence) || !i4.props[Ye]), this.do = new it({ refillRate: null !== (r4 = this._instance.config.error_tracking.__exceptionRateLimiterRefillRate) && void 0 !== r4 ? r4 : 1, bucketSize: null !== (s4 = this._instance.config.error_tracking.__exceptionRateLimiterBucketSize) && void 0 !== s4 ? s4 : 10, refillInterval: 1e4, Gt: zo }), this.qt = this.vo(), this.startIfEnabledOrStop();
    }
    vo() {
      var t4 = this._instance.config.capture_exceptions, e4 = { capture_unhandled_errors: false, capture_unhandled_rejections: false, capture_console_errors: false };
      return U(t4) ? e4 = f4({}, e4, t4) : (N2(t4) ? this.co : t4) && (e4 = f4({}, e4, { capture_unhandled_errors: true, capture_unhandled_rejections: true })), e4;
    }
    get isEnabled() {
      return this.qt.capture_console_errors || this.qt.capture_unhandled_errors || this.qt.capture_unhandled_rejections;
    }
    startIfEnabledOrStop() {
      this.isEnabled ? (zo.info("enabled"), this.ho(), this.lr(this.so)) : this.ho();
    }
    lr(t4) {
      var e4, i4;
      null != (e4 = h3.__PosthogExtensions__) && e4.errorWrappingFunctions && t4(), null == (i4 = h3.__PosthogExtensions__) || null == i4.loadExternalDependency || i4.loadExternalDependency(this._instance, "exception-autocapture", ((e5) => {
        if (e5) return zo.error("failed to load script", e5);
        t4();
      }));
    }
    ho() {
      var t4, e4, i4;
      null == (t4 = this.ao) || t4.call(this), this.ao = void 0, null == (e4 = this.uo) || e4.call(this), this.uo = void 0, null == (i4 = this.lo) || i4.call(this), this.lo = void 0;
    }
    onRemoteConfig(t4) {
      "autocaptureExceptions" in t4 && (this.co = !!t4.autocaptureExceptions || false, this._instance.persistence && this._instance.persistence.register({ [Ye]: this.co }), this.qt = this.vo(), this.startIfEnabledOrStop());
    }
    onConfigChange() {
      this.qt = this.vo();
    }
    captureException(t4) {
      var e4, i4, r4, s4 = null !== (e4 = null == t4 || null == (i4 = t4.$exception_list) || null == (i4 = i4[0]) ? void 0 : i4.type) && void 0 !== e4 ? e4 : "Exception";
      this.do.consumeRateLimit(s4) ? zo.info("Skipping exception capture because of client rate limiting.", { exception: s4 }) : null == (r4 = this._instance.exceptions) || r4.sendExceptionEvent(t4);
    }
  }, exceptions: class {
    constructor(t4) {
      var e4, i4;
      this.fo = [], this.po = new ae([new be(), new Pe(), new we(), new ye(), new ke(), new Te(), new Ee(), new Re()], (function(t5) {
        for (var e5 = arguments.length, i5 = new Array(e5 > 1 ? e5 - 1 : 0), r4 = 1; e5 > r4; r4++) i5[r4 - 1] = arguments[r4];
        return function(e6, r5) {
          void 0 === r5 && (r5 = 0);
          for (var s4 = [], n3 = e6.split("\n"), o4 = r5; n3.length > o4; o4++) {
            var a4 = n3[o4];
            if (1024 >= a4.length) {
              var l4 = me.test(a4) ? a4.replace(me, "$1") : a4;
              if (!l4.match(/\S*Error: /)) {
                for (var u5 of i5) {
                  var h4 = u5(l4, t5);
                  if (h4) {
                    s4.push(h4);
                    break;
                  }
                }
                if (s4.length >= 50) break;
              }
            }
          }
          return (function(t6) {
            if (!t6.length) return [];
            var e7 = Array.from(t6);
            return e7.reverse(), e7.slice(0, 50).map(((t7) => {
              return f4({}, t7, { filename: t7.filename || (i6 = e7, i6[i6.length - 1] || {}).filename, function: t7.function || le });
              var i6;
            }));
          })(s4);
        };
      })("web:javascript", pe, ge)), this._instance = t4, this.fo = null !== (e4 = null == (i4 = this._instance.persistence) ? void 0 : i4.get_property(Je)) && void 0 !== e4 ? e4 : [], this.mo = Fe(this.yo()), this.bo = new Me(this.mo);
    }
    onConfigChange() {
      this.mo = Fe(this.yo()), this.bo.setConfig(this.mo);
    }
    onRemoteConfig(t4) {
      var e4, i4, r4;
      if ("errorTracking" in t4) {
        var s4 = null !== (e4 = null == (i4 = t4.errorTracking) ? void 0 : i4.suppressionRules) && void 0 !== e4 ? e4 : [], n3 = null == (r4 = t4.errorTracking) ? void 0 : r4.captureExtensionExceptions;
        this.fo = s4, this._instance.persistence && this._instance.persistence.register({ [Je]: this.fo, [Ke]: n3 });
      }
    }
    get _o() {
      var t4, e4 = !!this._instance.get_property(Ke), i4 = this._instance.config.error_tracking.captureExtensionExceptions;
      return null !== (t4 = null != i4 ? i4 : e4) && void 0 !== t4 && t4;
    }
    buildProperties(t4, e4) {
      return this.po.buildFromUnknown(t4, { syntheticException: null == e4 ? void 0 : e4.syntheticException, mechanism: { handled: null == e4 ? void 0 : e4.handled } });
    }
    addExceptionStep(t4, e4) {
      if (this.mo.enabled) try {
        if (!j3(t4) || 0 === t4.trim().length) return void ma.warn("Ignoring exception step because message must be a non-empty string");
        var i4 = this.wo(e4), { sanitizedProperties: r4, droppedKeys: s4 } = (function(t5) {
          if (!t5) return { sanitizedProperties: {}, droppedKeys: [] };
          var e5 = [];
          return { sanitizedProperties: Object.keys(t5).reduce(((i5, r5) => Ce.has(r5) ? (e5.push(r5), i5) : (i5[r5] = t5[r5], i5)), {}), droppedKeys: e5 };
        })(i4);
        s4.length > 0 && ma.warn("Ignoring reserved exception step fields", { droppedKeys: s4 }), this.bo.add(f4({ [Oe]: t4, [Ie]: (/* @__PURE__ */ new Date()).toISOString() }, r4));
      } catch (t5) {
        ma.error("Failed to add exception step. Ignoring breadcrumb.", t5);
      }
    }
    sendExceptionEvent(t4) {
      try {
        var e4 = t4.$exception_list;
        if (this.xo(e4)) {
          if (this.So(e4)) return this.ko("Exception dropped: matched a suppression rule"), void ma.info("Skipping exception capture because a suppression rule matched");
          if (!this._o && this.Co(e4)) return this.ko("Exception dropped: thrown by a browser extension"), void ma.info("Skipping exception capture because it was thrown by an extension");
          if (!this._instance.config.error_tracking.__capturePostHogExceptions && this.Io(e4)) return this.ko("Exception dropped: thrown by the PostHog SDK"), void ma.info("Skipping exception capture because it was thrown by the PostHog SDK");
        }
        var i4 = this.mo.enabled && H2(t4.$exception_steps) ? this.To(t4) : t4;
        try {
          var r4 = this._instance.capture("$exception", i4, { _noTruncate: true, _batchKey: "exceptionEvent", en: true });
          return r4 && this.bo.clear(), r4;
        } catch (t5) {
          return ma.error("Failed to capture exception event. Dropping this exception.", t5), void this.bo.clear();
        }
      } catch (t5) {
        return void ma.error("Failed to process exception event. Ignoring this exception.", t5);
      }
    }
    To(t4) {
      try {
        var e4 = this.bo.getAttachable();
        return 0 === e4.length ? t4 : f4({}, t4, { $exception_steps: e4 });
      } catch (e5) {
        return ma.error("Failed to read buffered exception steps. Capturing exception without steps.", e5), t4;
      }
    }
    ko(t4) {
      this.mo.enabled && this.bo.add({ [Oe]: t4, [Ie]: (/* @__PURE__ */ new Date()).toISOString() });
    }
    wo(t4) {
      return U(t4) ? f4({}, t4) : {};
    }
    yo() {
      var t4, e4;
      return null !== (t4 = null == (e4 = this._instance.config.error_tracking) ? void 0 : e4.exception_steps) && void 0 !== t4 ? t4 : {};
    }
    So(t4) {
      if (0 === t4.length) return false;
      var e4 = t4.reduce(((t5, e5) => {
        var { type: i4, value: r4 } = e5;
        return j3(i4) && i4.length > 0 && t5.$exception_types.push(i4), j3(r4) && r4.length > 0 && t5.$exception_values.push(r4), t5;
      }), { $exception_types: [], $exception_values: [] });
      return this.fo.some(((t5) => {
        var i4 = t5.values.map(((t6) => {
          var i5, r4 = $n[t6.operator], s4 = M(t6.value) ? t6.value : [t6.value], n3 = null !== (i5 = e4[t6.key]) && void 0 !== i5 ? i5 : [];
          return s4.length > 0 && r4(s4, n3);
        }));
        return "OR" === t5.type ? i4.some(Boolean) : i4.every(Boolean);
      }));
    }
    Co(t4) {
      return t4.flatMap(((t5) => {
        var e4, i4;
        return null !== (e4 = null == (i4 = t5.stacktrace) ? void 0 : i4.frames) && void 0 !== e4 ? e4 : [];
      })).some(((t5) => t5.filename && t5.filename.startsWith("chrome-extension://")));
    }
    Io(t4) {
      if (t4.length > 0) {
        var e4, i4, r4, s4, n3 = null !== (e4 = null == (i4 = t4[0].stacktrace) ? void 0 : i4.frames) && void 0 !== e4 ? e4 : [], o4 = n3[n3.length - 1];
        return null !== (r4 = null == o4 || null == (s4 = o4.filename) ? void 0 : s4.includes("posthog.com/static")) && void 0 !== r4 && r4;
      }
      return false;
    }
    xo(t4) {
      return !H2(t4) && M(t4);
    }
  } };
  var Ra = f4({ productTours: class {
    get ni() {
      return this._instance.persistence;
    }
    constructor(t4) {
      this.Eo = null, this.Mo = null, this._instance = t4;
    }
    initialize() {
      this.loadIfEnabled();
    }
    onRemoteConfig(t4) {
      "productTours" in t4 && (this.ni && this.ni.register({ [Ze]: !!t4.productTours }), this.loadIfEnabled());
    }
    loadIfEnabled() {
      var t4, e4;
      this.Eo || (t4 = this._instance).config.disable_product_tours || null == (e4 = t4.persistence) || !e4.get_property(Ze) || this.lr((() => this.Po()));
    }
    lr(t4) {
      var e4, i4;
      null != (e4 = h3.__PosthogExtensions__) && e4.generateProductTours ? t4() : null == (i4 = h3.__PosthogExtensions__) || null == i4.loadExternalDependency || i4.loadExternalDependency(this._instance, "product-tours", ((e5) => {
        e5 ? ta.error("Could not load product tours script", e5) : t4();
      }));
    }
    Po() {
      var t4;
      !this.Eo && null != (t4 = h3.__PosthogExtensions__) && t4.generateProductTours && (this.Eo = h3.__PosthogExtensions__.generateProductTours(this._instance, true));
    }
    getProductTours(t4, e4) {
      if (void 0 === e4 && (e4 = false), !M(this.Mo) || e4) {
        var i4 = this.ni;
        if (i4) {
          var r4 = i4.props[yi];
          if (M(r4) && !e4) return this.Mo = r4, void t4(r4, { isLoaded: true });
        }
        this._instance._send_request({ url: this._instance.requestRouter.endpointFor("api", "/api/product_tours/?token=" + this._instance.config.token), method: "GET", callback: (e5) => {
          var r5 = e5.statusCode;
          if (200 !== r5 || !e5.json) {
            var s4 = "Product Tours API could not be loaded, status: " + r5;
            return ta.error(s4), void t4([], { isLoaded: false, error: s4 });
          }
          var n3 = M(e5.json.product_tours) ? e5.json.product_tours : [];
          this.Mo = n3, i4 && i4.register({ [yi]: n3 }), t4(n3, { isLoaded: true });
        } });
      } else t4(this.Mo, { isLoaded: true });
    }
    getActiveProductTours(t4) {
      H2(this.Eo) ? t4([], { isLoaded: false, error: "Product tours not loaded" }) : this.Eo.getActiveProductTours(t4);
    }
    showProductTour(t4) {
      var e4;
      null == (e4 = this.Eo) || e4.showTourById(t4);
    }
    previewTour(t4) {
      this.Eo ? this.Eo.previewTour(t4) : this.lr((() => {
        var e4;
        this.Po(), null == (e4 = this.Eo) || e4.previewTour(t4);
      }));
    }
    dismissProductTour() {
      var t4;
      null == (t4 = this.Eo) || t4.dismissTour("user_clicked_skip");
    }
    nextStep() {
      var t4;
      null == (t4 = this.Eo) || t4.nextStep();
    }
    previousStep() {
      var t4;
      null == (t4 = this.Eo) || t4.previousStep();
    }
    clearCache() {
      var t4;
      this.Mo = null, null == (t4 = this.ni) || t4.unregister(yi);
    }
    resetTour(t4) {
      var e4;
      null == (e4 = this.Eo) || e4.resetTour(t4);
    }
    resetAllTours() {
      var t4;
      null == (t4 = this.Eo) || t4.resetAllTours();
    }
    cancelPendingTour(t4) {
      var e4;
      null == (e4 = this.Eo) || e4.cancelPendingTour(t4);
    }
  } }, Sa);
  var Pa = { siteApps: class {
    constructor(t4) {
      this._instance = t4, this.Ro = [], this.apps = {};
    }
    get isEnabled() {
      return !!this._instance.config.opt_in_site_apps;
    }
    Oo(t4, e4) {
      if (e4) {
        var i4 = this.globalsForEvent(e4);
        this.Ro.push(i4), this.Ro.length > 1e3 && (this.Ro = this.Ro.slice(10));
      }
    }
    get siteAppLoaders() {
      var t4;
      return null == (t4 = h3._POSTHOG_REMOTE_CONFIG) || null == (t4 = t4[this._instance.config.token]) ? void 0 : t4.siteApps;
    }
    initialize() {
      if (this.isEnabled) {
        var t4 = this._instance._addCaptureHook(this.Oo.bind(this));
        this.Lo = () => {
          t4(), this.Ro = [], this.Lo = void 0;
        };
      }
    }
    globalsForEvent(t4) {
      var e4, i4, r4, s4, n3, o4, a4;
      if (!t4) throw new Error("Event payload is required");
      var l4 = {}, u5 = this._instance.get_property("$groups") || [], h4 = this._instance.get_property("$stored_group_properties") || {};
      for (var [d4, v4] of Object.entries(h4)) l4[d4] = { id: u5[d4], type: d4, properties: v4 };
      var { $set_once: c4, $set: p4 } = t4;
      return { event: f4({}, _2(t4, ea), { properties: f4({}, t4.properties, p4 ? { $set: f4({}, null !== (e4 = null == (i4 = t4.properties) ? void 0 : i4.$set) && void 0 !== e4 ? e4 : {}, p4) } : {}, c4 ? { $set_once: f4({}, null !== (r4 = null == (s4 = t4.properties) ? void 0 : s4.$set_once) && void 0 !== r4 ? r4 : {}, c4) } : {}), elements_chain: null !== (n3 = null == (o4 = t4.properties) ? void 0 : o4.$elements_chain) && void 0 !== n3 ? n3 : "", distinct_id: null == (a4 = t4.properties) ? void 0 : a4.distinct_id }), person: { properties: this._instance.get_property("$stored_person_properties") }, groups: l4 };
    }
    setupSiteApp(t4) {
      var e4 = this.apps[t4.id], i4 = () => {
        var i5;
        !e4.errored && this.Ro.length && (ia.info("Processing " + this.Ro.length + " events for site app with id " + t4.id), this.Ro.forEach(((t5) => null == e4.processEvent ? void 0 : e4.processEvent(t5))), e4.processedBuffer = true), Object.values(this.apps).every(((t5) => t5.processedBuffer || t5.errored)) && (null == (i5 = this.Lo) || i5.call(this));
      }, r4 = false, s4 = (s5) => {
        e4.errored = !s5, e4.loaded = true, ia.info("Site app with id " + t4.id + " " + (s5 ? "loaded" : "errored")), r4 && i4();
      };
      try {
        var { processEvent: n3 } = t4.init({ posthog: this._instance, callback(t5) {
          s4(t5);
        } });
        n3 && (e4.processEvent = n3), r4 = true;
      } catch (e5) {
        ia.error(ra + t4.id, e5), s4(false);
      }
      if (r4 && e4.loaded) try {
        i4();
      } catch (i5) {
        ia.error("Error while processing buffered events PostHog app with config id " + t4.id, i5), e4.errored = true;
      }
    }
    Fo() {
      var t4 = this.siteAppLoaders || [];
      for (var e4 of t4) this.apps[e4.id] = { id: e4.id, loaded: false, errored: false, processedBuffer: false };
      for (var i4 of t4) this.setupSiteApp(i4);
    }
    Ao(t4) {
      if (0 !== Object.keys(this.apps).length) {
        var e4 = this.globalsForEvent(t4);
        for (var i4 of Object.values(this.apps)) try {
          null == i4.processEvent || i4.processEvent(e4);
        } catch (e5) {
          ia.error("Error while processing event " + t4.event + " for site app " + i4.id, e5);
        }
      }
    }
    onRemoteConfig(t4) {
      var e4, i4, r4, s4 = this;
      if (null != (e4 = this.siteAppLoaders) && e4.length) return this.isEnabled ? (this.Fo(), void this._instance.on("eventCaptured", ((t5) => this.Ao(t5)))) : void ia.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
      if (null == (i4 = this.Lo) || i4.call(this), null != (r4 = t4.siteApps) && r4.length) if (this.isEnabled) {
        var n3 = function(t5) {
          var e5;
          h3["__$$ph_site_app_" + t5] = s4._instance, null == (e5 = h3.__PosthogExtensions__) || null == e5.loadSiteApp || e5.loadSiteApp(s4._instance, a4, ((e6) => {
            if (e6) return ia.error(ra + t5, e6);
          }));
        };
        for (var { id: o4, url: a4 } of t4.siteApps) n3(o4);
      } else ia.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
    }
  } };
  var Oa = { tracingHeaders: class {
    constructor(t4) {
      this.No = void 0, this.$o = void 0, this.so = () => {
        var t5, e4, i4 = this.Do() || [];
        N2(this.No) && (null == (t5 = h3.__PosthogExtensions__) || null == (t5 = t5.tracingHeadersPatchFns) || t5._patchXHR(i4, this._instance.get_distinct_id(), this._instance.sessionManager)), N2(this.$o) && (null == (e4 = h3.__PosthogExtensions__) || null == (e4 = e4.tracingHeadersPatchFns) || e4._patchFetch(i4, this._instance.get_distinct_id(), this._instance.sessionManager));
      }, this._instance = t4;
    }
    initialize() {
      this.startIfEnabledOrStop();
    }
    lr(t4) {
      var e4, i4;
      null != (e4 = h3.__PosthogExtensions__) && e4.tracingHeadersPatchFns && t4(), null == (i4 = h3.__PosthogExtensions__) || null == i4.loadExternalDependency || i4.loadExternalDependency(this._instance, "tracing-headers", ((e5) => {
        if (e5) return Ho.error("failed to load script", e5);
        t4();
      }));
    }
    Do() {
      var t4;
      return null !== (t4 = this._instance.config.addTracingHeaders) && void 0 !== t4 ? t4 : this._instance.config.__add_tracing_headers;
    }
    startIfEnabledOrStop() {
      var t4, e4;
      this.Do() ? this.lr(this.so) : (null == (t4 = this.No) || t4.call(this), null == (e4 = this.$o) || e4.call(this), this.No = void 0, this.$o = void 0);
    }
  } };
  var Ia = f4({ surveys: class {
    get qt() {
      return this._instance.config;
    }
    constructor(t4) {
      this.qo = void 0, this._surveyManager = null, this.jo = false, this.Ho = [], this.Uo = null, this._instance = t4, this._surveyEventReceiver = null;
    }
    initialize() {
      this.loadIfEnabled();
    }
    onRemoteConfig(t4) {
      if (!this.qt.disable_surveys) {
        var e4 = t4.surveys;
        if (H2(e4)) return Cn.warn("Flags not loaded yet. Not loading surveys.");
        var i4 = M(e4);
        this.qo = i4 ? e4.length > 0 : e4, Cn.info("flags response received, isSurveysEnabled: " + this.qo), this.loadIfEnabled();
      }
    }
    reset() {
      localStorage.removeItem("lastSeenSurveyDate");
      for (var t4 = [], e4 = 0; e4 < localStorage.length; e4++) {
        var i4 = localStorage.key(e4);
        (null != i4 && i4.startsWith(An) || null != i4 && i4.startsWith("inProgressSurvey_")) && t4.push(i4);
      }
      t4.forEach(((t5) => localStorage.removeItem(t5)));
    }
    loadIfEnabled() {
      if (!this._surveyManager) if (this.jo) Cn.info("Already initializing surveys, skipping...");
      else if (this.qt.disable_surveys) Cn.info(ua);
      else if (this.qt.cookieless_mode && this._instance.consent.isOptedOut()) Cn.info("Not loading surveys in cookieless mode without consent.");
      else {
        var t4 = null == h3 ? void 0 : h3.__PosthogExtensions__;
        if (t4) {
          if (!N2(this.qo) || this.qt.advanced_enable_surveys) {
            var e4 = this.qo || this.qt.advanced_enable_surveys;
            this.jo = true;
            try {
              var i4 = t4.generateSurveys;
              if (i4) return void this.Bo(i4, e4);
              var r4 = t4.loadExternalDependency;
              if (!r4) return void this.zo(Ui);
              r4(this._instance, "surveys", ((i5) => {
                i5 || !t4.generateSurveys ? this.zo("Could not load surveys script", i5) : this.Bo(t4.generateSurveys, e4);
              }));
            } catch (t5) {
              throw this.zo("Error initializing surveys", t5), t5;
            } finally {
              this.jo = false;
            }
          }
        } else Cn.error("PostHog Extensions not found.");
      }
    }
    Bo(t4, e4) {
      this._surveyManager = t4(this._instance, e4), this._surveyEventReceiver = new aa(this._instance), Cn.info("Surveys loaded successfully"), this.Vo({ isLoaded: true });
    }
    zo(t4, e4) {
      Cn.error(t4, e4), this.Vo({ isLoaded: false, error: t4 });
    }
    onSurveysLoaded(t4) {
      return this.Ho.push(t4), this._surveyManager && this.Vo({ isLoaded: true }), () => {
        this.Ho = this.Ho.filter(((e4) => e4 !== t4));
      };
    }
    getSurveys(t4, e4) {
      if (void 0 === e4 && (e4 = false), this.qt.disable_surveys) return Cn.info(ua), t4([]);
      var i4, r4 = this._instance.get_property(mi);
      if (r4 && !e4) return t4(r4, { isLoaded: true });
      "undefined" != typeof Promise && this.Uo ? this.Uo.then(((e5) => {
        var { surveys: i5, context: r5 } = e5;
        return t4(i5, r5);
      })) : ("undefined" != typeof Promise && (this.Uo = new Promise(((t5) => {
        i4 = t5;
      }))), this._instance._send_request({ url: this._instance.requestRouter.endpointFor("api", "/api/surveys/?token=" + this.qt.token), method: "GET", timeout: this.qt.surveys_request_timeout_ms, callback: (e5) => {
        var r5;
        this.Uo = null;
        var s4 = e5.statusCode;
        if (200 !== s4 || !e5.json) {
          var n3 = "Surveys API could not be loaded, status: " + s4;
          Cn.error(n3);
          var o4 = { isLoaded: false, error: n3 };
          return t4([], o4), void (null == i4 || i4({ surveys: [], context: o4 }));
        }
        var a4, l4 = e5.json.surveys || [], u5 = l4.filter(((t5) => (function(t6) {
          return !(!t6.start_date || t6.end_date);
        })(t5) && ((function(t6) {
          var e6;
          return !(null == (e6 = t6.conditions) || null == (e6 = e6.events) || null == (e6 = e6.values) || !e6.length);
        })(t5) || (function(t6) {
          var e6;
          return !(null == (e6 = t6.conditions) || null == (e6 = e6.actions) || null == (e6 = e6.values) || !e6.length);
        })(t5))));
        u5.length > 0 && (null == (a4 = this._surveyEventReceiver) || a4.register(u5)), null == (r5 = this._instance.persistence) || r5.register({ [mi]: l4 });
        var h4 = { isLoaded: true };
        t4(l4, h4), null == i4 || i4({ surveys: l4, context: h4 });
      } }));
    }
    Vo(t4) {
      for (var e4 of this.Ho) try {
        if (!t4.isLoaded) return e4([], t4);
        this.getSurveys(e4);
      } catch (t5) {
        Cn.error("Error in survey callback", t5);
      }
    }
    getActiveMatchingSurveys(t4, e4) {
      if (void 0 === e4 && (e4 = false), !H2(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(t4, e4);
      Cn.warn("init was not called");
    }
    Wo(t4) {
      var e4 = null;
      return this.getSurveys(((i4) => {
        var r4;
        e4 = null !== (r4 = i4.find(((e5) => e5.id === t4))) && void 0 !== r4 ? r4 : null;
      })), e4;
    }
    Zo(t4) {
      if (H2(this._surveyManager)) return { eligible: false, reason: la };
      var e4 = "string" == typeof t4 ? this.Wo(t4) : t4;
      return e4 ? this._surveyManager.checkSurveyEligibility(e4) : { eligible: false, reason: "Survey not found" };
    }
    canRenderSurvey(t4) {
      if (H2(this._surveyManager)) return Cn.warn("init was not called"), { visible: false, disabledReason: la };
      var e4 = this.Zo(t4);
      return { visible: e4.eligible, disabledReason: e4.reason };
    }
    canRenderSurveyAsync(t4, e4) {
      return H2(this._surveyManager) ? (Cn.warn("init was not called"), Promise.resolve({ visible: false, disabledReason: la })) : new Promise(((i4) => {
        this.getSurveys(((e5) => {
          var r4, s4 = null !== (r4 = e5.find(((e6) => e6.id === t4))) && void 0 !== r4 ? r4 : null;
          if (s4) {
            var n3 = this.Zo(s4);
            i4({ visible: n3.eligible, disabledReason: n3.reason });
          } else i4({ visible: false, disabledReason: "Survey not found" });
        }), e4);
      }));
    }
    renderSurvey(t4, e4, i4) {
      var s4;
      if (H2(this._surveyManager)) Cn.warn("init was not called");
      else {
        var n3 = "string" == typeof t4 ? this.Wo(t4) : t4;
        if (null != n3 && n3.id) if (Fn.includes(n3.type)) {
          var o4 = null == r3 ? void 0 : r3.querySelector(e4);
          if (o4) return null != (s4 = n3.appearance) && s4.surveyPopupDelaySeconds ? (Cn.info("Rendering survey " + n3.id + " with delay of " + n3.appearance.surveyPopupDelaySeconds + " seconds"), void setTimeout((() => {
            var t5, e5;
            Cn.info("Rendering survey " + n3.id + " with delay of " + (null == (t5 = n3.appearance) ? void 0 : t5.surveyPopupDelaySeconds) + " seconds"), null == (e5 = this._surveyManager) || e5.renderSurvey(n3, o4, i4), Cn.info("Survey " + n3.id + " rendered");
          }), 1e3 * n3.appearance.surveyPopupDelaySeconds)) : void this._surveyManager.renderSurvey(n3, o4, i4);
          Cn.warn("Survey element not found");
        } else Cn.warn("Surveys of type " + n3.type + " cannot be rendered in the app");
        else Cn.warn("Survey not found");
      }
    }
    displaySurvey(t4, e4) {
      var i4;
      if (H2(this._surveyManager)) Cn.warn("init was not called");
      else {
        var r4 = this.Wo(t4);
        if (r4) {
          var s4 = r4;
          if (null != (i4 = r4.appearance) && i4.surveyPopupDelaySeconds && e4.ignoreDelay && (s4 = f4({}, r4, { appearance: f4({}, r4.appearance, { surveyPopupDelaySeconds: 0 }) })), e4.displayType !== vs.Popover && e4.initialResponses && Cn.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), false === e4.ignoreConditions) {
            var n3 = this.canRenderSurvey(r4);
            if (!n3.visible) return void Cn.warn("Survey is not eligible to be displayed: ", n3.disabledReason);
          }
          e4.displayType !== vs.Inline ? this._surveyManager.handlePopoverSurvey(s4, e4) : this.renderSurvey(s4, e4.selector, e4.properties);
        } else Cn.warn("Survey not found");
      }
    }
    cancelPendingSurvey(t4) {
      H2(this._surveyManager) ? Cn.warn("init was not called") : this._surveyManager.cancelSurvey(t4);
    }
    handlePageUnload() {
      var t4;
      null == (t4 = this._surveyManager) || t4.handlePageUnload();
    }
  } }, Sa);
  var Ca = { toolbar: class {
    constructor(t4) {
      this.instance = t4;
    }
    Go(t4) {
      h3.ph_toolbar_state = t4;
    }
    Qo() {
      var t4;
      return null !== (t4 = h3.ph_toolbar_state) && void 0 !== t4 ? t4 : 0;
    }
    initialize() {
      return this.maybeLoadToolbar();
    }
    maybeLoadToolbar(e4, i4, s4) {
      if (void 0 === e4 && (e4 = void 0), void 0 === i4 && (i4 = void 0), void 0 === s4 && (s4 = void 0), nr(this.instance.config)) return false;
      if (!t3 || !r3) return false;
      e4 = null != e4 ? e4 : t3.location, s4 = null != s4 ? s4 : t3.history;
      try {
        if (!i4) {
          try {
            t3.localStorage.setItem("test", "test"), t3.localStorage.removeItem("test");
          } catch (t4) {
            return false;
          }
          i4 = null == t3 ? void 0 : t3.localStorage;
        }
        var n3, o4 = ha || Lr(e4.hash, "__posthog") || Lr(e4.hash, "state"), a4 = o4 ? Zi((() => JSON.parse(atob(decodeURIComponent(o4))))) || Zi((() => JSON.parse(decodeURIComponent(o4)))) : null;
        return a4 && "ph_authorize" === a4.action ? ((n3 = a4).source = "url", n3 && Object.keys(n3).length > 0 && (a4.desiredHash ? e4.hash = a4.desiredHash : s4 ? s4.replaceState(s4.state, "", e4.pathname + e4.search) : e4.hash = "")) : ((n3 = JSON.parse(i4.getItem(da) || "{}")).source = "localstorage", delete n3.userIntent), !(!n3.token || this.instance.config.token !== n3.token || (this.loadToolbar(n3), 0));
      } catch (t4) {
        return false;
      }
    }
    Jo(t4) {
      var e4 = h3.ph_load_toolbar || h3.ph_load_editor;
      !H2(e4) && D3(e4) ? e4(t4, this.instance) : va.warn("No toolbar load function found");
    }
    loadToolbar(e4) {
      var i4 = !(null == r3 || !r3.getElementById(Ci));
      if (!t3 || i4) return false;
      var s4 = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics, n3 = f4({ token: this.instance.config.token }, e4, { apiURL: this.instance.requestRouter.endpointFor("ui") }, s4 ? { instrument: false } : {});
      if (t3.localStorage.setItem(da, JSON.stringify(f4({}, n3, { source: void 0 }))), 2 === this.Qo()) this.Jo(n3);
      else if (0 === this.Qo()) {
        var o4;
        this.Go(1), null == (o4 = h3.__PosthogExtensions__) || null == o4.loadExternalDependency || o4.loadExternalDependency(this.instance, "toolbar", ((t4) => {
          if (t4) return va.error("[Toolbar] Failed to load", t4), void this.Go(0);
          this.Go(2), this.Jo(n3);
        })), sr(t3, "turbolinks:load", (() => {
          this.Go(0), this.loadToolbar(n3);
        }));
      }
      return true;
    }
    Ko(t4) {
      return this.loadToolbar(t4);
    }
    maybeLoadEditor(t4, e4, i4) {
      return void 0 === t4 && (t4 = void 0), void 0 === e4 && (e4 = void 0), void 0 === i4 && (i4 = void 0), this.maybeLoadToolbar(t4, e4, i4);
    }
  } };
  var Aa = f4({ experiments: wa }, Sa);
  var Fa = { conversations: class {
    constructor(t4) {
      this.Yo = void 0, this._conversationsManager = null, this.Xo = false, this.ea = null, this._instance = t4;
    }
    initialize() {
      this.loadIfEnabled();
    }
    onRemoteConfig(t4) {
      if (!this._instance.config.disable_conversations) {
        var e4 = t4.conversations;
        H2(e4) || (W(e4) ? this.Yo = e4 : (this.Yo = e4.enabled, this.ea = e4), this.loadIfEnabled());
      }
    }
    reset() {
      var t4;
      null == (t4 = this._conversationsManager) || t4.reset(), this._conversationsManager = null, this.Yo = void 0, this.ea = null;
    }
    loadIfEnabled() {
      if (!(this._conversationsManager || this.Xo || this._instance.config.disable_conversations || nr(this._instance.config) || this._instance.config.cookieless_mode && this._instance.consent.isOptedOut())) {
        var t4 = null == h3 ? void 0 : h3.__PosthogExtensions__;
        if (t4 && !N2(this.Yo) && this.Yo) if (this.ea && this.ea.token) {
          this.Xo = true;
          try {
            var e4 = t4.initConversations;
            if (e4) return this.ta(e4), void (this.Xo = false);
            var i4 = t4.loadExternalDependency;
            if (!i4) return void this.ra(Ui);
            i4(this._instance, "conversations", ((e5) => {
              e5 || !t4.initConversations ? this.ra("Could not load conversations script", e5) : this.ta(t4.initConversations), this.Xo = false;
            }));
          } catch (t5) {
            this.ra("Error initializing conversations", t5), this.Xo = false;
          }
        } else xa.error("Conversations enabled but missing token in remote config.");
      }
    }
    ta(t4) {
      if (this.ea) try {
        this._conversationsManager = t4(this.ea, this._instance), xa.info("Conversations loaded successfully");
      } catch (t5) {
        this.ra("Error completing conversations initialization", t5);
      }
      else xa.error("Cannot complete initialization: remote config is null");
    }
    ra(t4, e4) {
      xa.error(t4, e4), this._conversationsManager = null, this.Xo = false;
    }
    show() {
      this._conversationsManager ? this._conversationsManager.show() : xa.warn("Conversations not loaded yet.");
    }
    hide() {
      this._conversationsManager && this._conversationsManager.hide();
    }
    isAvailable() {
      return true === this.Yo && !B3(this._conversationsManager);
    }
    isVisible() {
      var t4, e4;
      return null !== (t4 = null == (e4 = this._conversationsManager) ? void 0 : e4.isVisible()) && void 0 !== t4 && t4;
    }
    sendMessage(t4, e4, i4) {
      var r4 = this;
      return p3((function* () {
        return r4._conversationsManager ? r4._conversationsManager.sendMessage(t4, e4, i4) : (xa.warn(Ea), null);
      }))();
    }
    getMessages(t4, e4) {
      var i4 = this;
      return p3((function* () {
        return i4._conversationsManager ? i4._conversationsManager.getMessages(t4, e4) : (xa.warn(Ea), null);
      }))();
    }
    markAsRead(t4) {
      var e4 = this;
      return p3((function* () {
        return e4._conversationsManager ? e4._conversationsManager.markAsRead(t4) : (xa.warn(Ea), null);
      }))();
    }
    getTickets(t4) {
      var e4 = this;
      return p3((function* () {
        return e4._conversationsManager ? e4._conversationsManager.getTickets(t4) : (xa.warn(Ea), null);
      }))();
    }
    requestRestoreLink(t4) {
      var e4 = this;
      return p3((function* () {
        return e4._conversationsManager ? e4._conversationsManager.requestRestoreLink(t4) : (xa.warn(Ea), null);
      }))();
    }
    restoreFromToken(t4) {
      var e4 = this;
      return p3((function* () {
        return e4._conversationsManager ? e4._conversationsManager.restoreFromToken(t4) : (xa.warn(Ea), null);
      }))();
    }
    restoreFromUrlToken() {
      var t4 = this;
      return p3((function* () {
        return t4._conversationsManager ? t4._conversationsManager.restoreFromUrlToken() : (xa.warn(Ea), null);
      }))();
    }
    getCurrentTicketId() {
      var t4, e4;
      return null !== (t4 = null == (e4 = this._conversationsManager) ? void 0 : e4.getCurrentTicketId()) && void 0 !== t4 ? t4 : null;
    }
    getWidgetSessionId() {
      var t4, e4;
      return null !== (t4 = null == (e4 = this._conversationsManager) ? void 0 : e4.getWidgetSessionId()) && void 0 !== t4 ? t4 : null;
    }
    ln() {
      var t4;
      null == (t4 = this._conversationsManager) || t4.setIdentity();
    }
    hn() {
      var t4;
      null == (t4 = this._conversationsManager) || t4.clearIdentity();
    }
  } };
  var Ma = { logs: class {
    constructor(t4) {
      var e4;
      this.ia = false, this.na = false, this.Gt = Ne("[logs]"), this.sa = [], this.oa = 0, this.aa = 0, this.ua = false, this._instance = t4, this._instance && null != (e4 = this._instance.config.logs) && e4.captureConsoleLogs && (this.ia = true);
    }
    initialize() {
      this.loadIfEnabled();
    }
    onRemoteConfig(t4) {
      var e4, i4 = null == (e4 = t4.logs) ? void 0 : e4.captureConsoleLogs;
      !H2(i4) && i4 && (this.ia = true, this.loadIfEnabled());
    }
    reset() {
      this.sa = [], this.qr && (clearTimeout(this.qr), this.qr = void 0), this.oa = 0, this.aa = 0, this.ua = false;
    }
    loadIfEnabled() {
      if (this.ia && !this.na) {
        var t4 = null == h3 ? void 0 : h3.__PosthogExtensions__;
        if (t4) {
          var e4 = t4.loadExternalDependency;
          e4 ? e4(this._instance, "logs", ((e5) => {
            var i4;
            e5 || null == (i4 = t4.logs) || !i4.initializeLogs ? this.Gt.error("Could not load logs script", e5) : (t4.logs.initializeLogs(this._instance), this.na = true);
          })) : this.Gt.error(Ui);
        } else this.Gt.error("PostHog Extensions not found.");
      }
    }
    captureLog(t4) {
      var e4, i4, r4, s4, n3, o4;
      if (this._instance.is_capturing()) if (t4 && t4.body) {
        var a4 = null !== (e4 = null == (i4 = this._instance.config.logs) ? void 0 : i4.flushIntervalMs) && void 0 !== e4 ? e4 : 3e3, l4 = null !== (r4 = null == (s4 = this._instance.config.logs) ? void 0 : s4.maxLogsPerInterval) && void 0 !== r4 ? r4 : 1e3, u5 = Date.now();
        if (a4 > u5 - this.aa || (this.aa = u5, this.oa = 0, this.ua = false), l4 > this.oa) {
          this.oa++;
          var h4 = (function(t5, e5) {
            var i5 = t5.level || "info", { text: r5, number: s5 } = ie[i5] || re, n4 = String(Date.now()) + "000000", o5 = {};
            e5.distinctId && (o5.posthogDistinctId = e5.distinctId), e5.sessionId && (o5.sessionId = e5.sessionId), e5.currentUrl && (o5["url.full"] = e5.currentUrl), e5.screenName && (o5["screen.name"] = e5.screenName), e5.appState && (o5["app.state"] = e5.appState), e5.activeFeatureFlags && e5.activeFeatureFlags.length > 0 && (o5.feature_flags = e5.activeFeatureFlags);
            var a5 = f4({}, o5, t5.attributes || {}), l5 = { timeUnixNano: n4, observedTimeUnixNano: n4, severityNumber: s5, severityText: r5, body: { stringValue: t5.body }, attributes: ne(a5) };
            return t5.trace_id && (l5.traceId = t5.trace_id), t5.span_id && (l5.spanId = t5.span_id), N2(t5.trace_flags) || (l5.flags = t5.trace_flags), l5;
          })(t4, this.la());
          this.sa.push({ record: h4 }), (null !== (n3 = null == (o4 = this._instance.config.logs) ? void 0 : o4.maxBufferSize) && void 0 !== n3 ? n3 : 100) > this.sa.length ? this.ha() : this.flushLogs();
        } else this.ua || (this.Gt.warn("captureLog dropping logs: exceeded " + l4 + " logs per " + a4 + "ms"), this.ua = true);
      } else this.Gt.warn("captureLog requires a body");
    }
    get logger() {
      return this.ca || (this.ca = { trace: (t4, e4) => this.captureLog({ body: t4, level: "trace", attributes: e4 }), debug: (t4, e4) => this.captureLog({ body: t4, level: "debug", attributes: e4 }), info: (t4, e4) => this.captureLog({ body: t4, level: "info", attributes: e4 }), warn: (t4, e4) => this.captureLog({ body: t4, level: "warn", attributes: e4 }), error: (t4, e4) => this.captureLog({ body: t4, level: "error", attributes: e4 }), fatal: (t4, e4) => this.captureLog({ body: t4, level: "fatal", attributes: e4 }) }), this.ca;
    }
    flushLogs(t4) {
      if (this.qr && (clearTimeout(this.qr), this.qr = void 0), 0 !== this.sa.length) {
        var e4 = this.sa;
        this.sa = [];
        var i4 = this._instance.config.logs, r4 = f4({ "service.name": (null == i4 ? void 0 : i4.serviceName) || "unknown_service" }, (null == i4 ? void 0 : i4.environment) && { "deployment.environment": i4.environment }, (null == i4 ? void 0 : i4.serviceVersion) && { "service.version": i4.serviceVersion }, null == i4 ? void 0 : i4.resourceAttributes), s4 = (function(t5, e5, i5, r5) {
          return { resourceLogs: [{ resource: { attributes: ne(e5) }, scopeLogs: [{ scope: { name: i5, version: r5 }, logRecords: t5 }] }] };
        })(e4.map(((t5) => t5.record)), r4, v3.LIB_NAME, v3.LIB_VERSION), n3 = this._instance.requestRouter.endpointFor("api", "/i/v1/logs") + "?token=" + encodeURIComponent(this._instance.config.token);
        this._instance.Bi({ method: "POST", url: n3, data: s4, compression: "best-available", batchKey: "logs", transport: t4 });
      }
    }
    ha() {
      var t4, e4;
      this.qr || (this.qr = setTimeout((() => {
        this.qr = void 0, this.flushLogs();
      }), null !== (t4 = null == (e4 = this._instance.config.logs) ? void 0 : e4.flushIntervalMs) && void 0 !== t4 ? t4 : 3e3));
    }
    la() {
      var t4, e4 = {};
      if (e4.distinctId = this._instance.get_distinct_id(), this._instance.sessionManager) {
        var { sessionId: i4 } = this._instance.sessionManager.checkAndGetSessionAndWindowId(true);
        e4.sessionId = i4;
      }
      if (null != h3 && null != (t4 = h3.location) && t4.href && (e4.currentUrl = h3.location.href), this._instance.featureFlags) {
        var r4 = this._instance.featureFlags.getFlags();
        r4 && r4.length > 0 && (e4.activeFeatureFlags = r4);
      }
      return e4;
    }
  } };
  var Da = f4({}, Sa, $a, Ta, ka, Ra, Pa, Ia, Oa, Ca, Aa, Fa, Ma);
  Zn.__defaultExtensionClasses = f4({}, Da);
  var Ua;
  var La = (Ua = jn[Gn] = new Zn(), (function() {
    function e4() {
      e4.done || (e4.done = true, Yn = false, Ki(jn, (function(t4) {
        t4._dom_loaded();
      })));
    }
    null != r3 && r3.addEventListener ? "complete" === r3.readyState ? e4() : sr(r3, "DOMContentLoaded", e4, { capture: false }) : t3 && Le.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized");
  })(), Ua);

  // js/analytics.js
  var POSTHOG_KEY = "YOUR_POSTHOG_API_KEY";
  var POSTHOG_HOST = "https://eu.i.posthog.com";
  var active = false;
  function initAnalytics({ lang, version }) {
    if (POSTHOG_KEY === "YOUR_POSTHOG_API_KEY") return;
    La.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      capture_pageview: true,
      autocapture: false,
      disable_session_recording: true,
      persistence: "localStorage"
    });
    La.register({ language: lang, app_version: version });
    active = true;
  }
  function trackTabView(tabId) {
    if (!active) return;
    La.capture("tab_viewed", { tab: tabId });
  }
  function trackLanguageChange(lang) {
    if (!active) return;
    La.register({ language: lang });
    La.capture("language_changed", { language: lang });
  }

  // app.js
  var reducedMotion = globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  var modalAnimationMs = reducedMotion ? 0 : 200;
  var ui2;
  var diary;
  var quiz;
  var emotionMap;
  var searchInput;
  var searchQuery = "";
  var i18n = createI18n({
    getLang: () => get("currentLang"),
    setLang: (lang) => set("currentLang", lang),
    onLanguageChanged: () => {
      searchQuery = searchInput?.value ?? "";
      ui2.renderCheckinTab();
      ui2.renderRecentEmotions();
      ui2.renderEmociones(searchQuery);
      if (get("currentTab") === "diario") diary.renderForTab();
      emotionMap?.onLanguageChanged();
      const bannerText = document.getElementById("offline-banner-text");
      if (bannerText) bannerText.textContent = i18n.t("offlineBanner");
      trackLanguageChange(get("currentLang"));
    }
  });
  diary = createDiary({
    t: i18n.t,
    getDisplayName: i18n.getDisplayName,
    emociones
  });
  on("tab:switch", ({ tabId }) => switchTab(tabId));
  on("quiz:open", () => quiz?.open());
  ui2 = createUI({
    emociones,
    relaciones: EMOTION_RELATIONS,
    getDisplayName: i18n.getDisplayName,
    getEmotionField: i18n.getEmotionField,
    t: i18n.t,
    modalAnimationMs,
    moodCategories: MOOD_CATEGORIES
  });
  function switchTab(tabId) {
    const nextTab = APP_TABS.includes(tabId) ? tabId : DEFAULT_TAB;
    for (const id of APP_TABS) {
      document.getElementById(`tab-${id}`)?.classList.toggle("hidden", id !== nextTab);
      const btn = document.getElementById(`nav-${id}`);
      if (btn) {
        btn.classList.toggle("text-slate-400", id !== nextTab);
        btn.classList.toggle("nav-active", id === nextTab);
        if (id === nextTab) {
          btn.setAttribute("aria-current", "page");
        } else {
          btn.removeAttribute("aria-current");
        }
      }
    }
    set("currentTab", nextTab);
    trackTabView(nextTab);
    if (nextTab === "diario") diary.renderForTab();
    if (nextTab === "mapa") emotionMap?.renderForTab();
  }
  function initTabNav() {
    for (const btn of document.querySelectorAll(".nav-tab")) {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    }
  }
  function bootstrap() {
    migrateStorageSchema();
    set("currentLang", i18n.detectInitialLanguage());
    i18n.applyStaticTranslations();
    initAnalytics({ lang: get("currentLang"), version: BUILD_VERSION });
    const versionEl = document.getElementById("build-version");
    if (versionEl) versionEl.textContent = BUILD_VERSION;
    initSettings({ setLanguage: i18n.setLanguage, getLang: () => get("currentLang") });
    initTabNav();
    ui2.bindBaseEvents();
    searchInput = /** @type {HTMLInputElement | null} */
    document.getElementById("search");
    searchQuery = searchInput?.value ?? "";
    searchInput?.addEventListener("input", (e4) => {
      searchQuery = /** @type {HTMLInputElement} */
      e4.target.value;
    });
    emotionMap = createEmotionMap({
      emociones,
      getDisplayName: i18n.getDisplayName,
      t: i18n.t
    });
    quiz = createQuiz({
      emociones,
      getDisplayName: i18n.getDisplayName,
      t: i18n.t
    });
    quiz.init();
    ui2.renderCheckinTab();
    ui2.renderRecentEmotions();
    ui2.renderEmociones(searchQuery);
    const crisis = createCrisisFlow({ t: i18n.t });
    crisis.init();
    initOfflineBanner({ t: i18n.t });
    initInstall();
    initServiceWorker();
  }
  bootstrap();
})();
