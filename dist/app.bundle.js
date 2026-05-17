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
  var RECENT_LIMIT = 5;
  var DIARY_TAGS = ["trabajo", "pareja", "familia", "cuerpo", "dinero"];
  var TRANSLATIONS = { es, en };

  // js/i18n.js
  function detectInitialLanguage() {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
    const browserLang = globalThis.navigator?.language?.toLowerCase() ?? "es";
    return browserLang.startsWith("en") ? "en" : "es";
  }
  function createI18n({ getLang, setLang, onLanguageChanged }) {
    function t2(key) {
      const lang = getLang();
      const parts = key.split(".");
      if (parts.length === 1) {
        return TRANSLATIONS[lang]?.[key] ?? TRANSLATIONS.es[key] ?? key;
      }
      let val = TRANSLATIONS[lang];
      for (const part of parts) val = val?.[part];
      if (val === void 0) {
        val = TRANSLATIONS.es;
        for (const part of parts) val = val?.[part];
      }
      return val !== void 0 ? String(val) : key;
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
          el.textContent = t2("title");
        },
        "app-subtitle": (el) => {
          el.textContent = t2("subtitle");
        },
        "search": (el) => {
          el.placeholder = t2("searchPlaceholder");
        },
        "recent-title": (el) => {
          el.textContent = t2("recentTitle");
        },
        "close-button": (el) => {
          el.textContent = t2("closeButton");
        },
        "share-btn": (el) => {
          el.setAttribute("aria-label", t2("shareButton"));
        },
        "share-btn-label": (el) => {
          el.textContent = t2("shareButton");
        },
        "diary-add-btn": (el) => {
          el.setAttribute("aria-label", t2("diary.addShort"));
        },
        "diary-add-label": (el) => {
          el.textContent = t2("diary.addShort");
        },
        "nav-label-emociones": (el) => {
          el.textContent = t2("nav.emociones");
        },
        "nav-label-checkin": (el) => {
          el.textContent = t2("nav.checkin");
        },
        "nav-label-diario": (el) => {
          el.textContent = t2("nav.diary");
        },
        "nav-label-mapa": (el) => {
          el.textContent = t2("nav.mapa");
        },
        "install-app-button": (el) => {
          el.textContent = t2("install.button");
        },
        "ios-install-title": (el) => {
          el.textContent = t2("install.iosTitle");
        },
        "ios-install-step-1": (el) => {
          el.textContent = t2("install.iosStep1");
        },
        "ios-install-step-2": (el) => {
          el.textContent = t2("install.iosStep2");
        },
        "ios-install-close": (el) => {
          el.textContent = t2("install.iosClose");
        },
        "quiz-trigger-title": (el) => {
          el.textContent = t2("quiz.trigger");
        },
        "quiz-trigger-sub": (el) => {
          el.textContent = t2("quiz.triggerSub");
        },
        "crisis-trigger-title": (el) => {
          el.textContent = t2("crisis.triggerTitle");
        },
        "crisis-trigger-sub": (el) => {
          el.textContent = t2("crisis.triggerSub");
        },
        "crisis-trigger-btn-label": (el) => {
          el.textContent = t2("crisis.triggerBtn");
        },
        "crisis-panel-close": (el) => {
          el.setAttribute("aria-label", t2("crisis.close"));
        },
        "settings-btn": (el) => {
          el.setAttribute("aria-label", t2("settings.label"));
        },
        "settings-theme-label": (el) => {
          el.textContent = t2("settings.themeLabel");
        },
        "settings-lang-label": (el) => {
          el.textContent = t2("langLabel");
        },
        "theme-btn-light": (el) => {
          el.setAttribute("aria-label", t2("settings.themeLight"));
          el.setAttribute("title", t2("settings.themeLight"));
        },
        "theme-btn-auto": (el) => {
          el.setAttribute("aria-label", t2("settings.themeAuto"));
          el.setAttribute("title", t2("settings.themeAuto"));
        },
        "theme-btn-dark": (el) => {
          el.setAttribute("aria-label", t2("settings.themeDark"));
          el.setAttribute("title", t2("settings.themeDark"));
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
      t: t2,
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
    const r2 = Number.parseInt(safeHex.slice(0, 2), 16);
    const g2 = Number.parseInt(safeHex.slice(2, 4), 16);
    const b2 = Number.parseInt(safeHex.slice(4, 6), 16);
    if ([r2, g2, b2].some(Number.isNaN)) return "#0f172a";
    const luminance = (0.299 * r2 + 0.587 * g2 + 0.114 * b2) / 255;
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

  // js/bus.js
  var listeners = {};
  function on(event, fn) {
    (listeners[event] ??= []).push(fn);
  }
  function emit(event, data) {
    listeners[event]?.forEach((fn) => fn(data));
  }

  // js/store.js
  var _state = {
    currentLang: "es",
    currentTab: "emociones",
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
  function roundRectPath(ctx, x2, y2, w2, h2, radii) {
    const [tl, tr, br, bl] = Array.isArray(radii) ? radii : [radii, radii, radii, radii];
    ctx.moveTo(x2 + tl, y2);
    ctx.lineTo(x2 + w2 - tr, y2);
    ctx.arcTo(x2 + w2, y2, x2 + w2, y2 + tr, tr);
    ctx.lineTo(x2 + w2, y2 + h2 - br);
    ctx.arcTo(x2 + w2, y2 + h2, x2 + w2 - br, y2 + h2, br);
    ctx.lineTo(x2 + bl, y2 + h2);
    ctx.arcTo(x2, y2 + h2, x2, y2 + h2 - bl, bl);
    ctx.lineTo(x2, y2 + tl);
    ctx.arcTo(x2, y2, x2 + tl, y2, tl);
    ctx.closePath();
  }
  async function buildEmotionCanvas(e2, displayName, tagLabel, mensaje, responseLabel, respuesta) {
    await document.fonts.load("900 1px Inter").catch(() => {
    });
    const W = 1080, H2 = 1350, PAD2 = 84;
    const SANS = `'Inter', system-ui, -apple-system, sans-serif`;
    const SERIF = `Georgia, "Times New Roman", serif`;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H2;
    const ctx = canvas.getContext("2d");
    const textOnColor = getReadableTextColor(e2.color);
    const tagAlpha = textOnColor === "#f8fafc" ? "rgba(255,255,255,0.6)" : "rgba(15,23,42,0.4)";
    ctx.fillStyle = "#f8fafc";
    ctx.beginPath();
    roundRectPath(ctx, 0, 0, W, H2, 0);
    ctx.fill();
    const ACCENT_H = 320;
    ctx.fillStyle = e2.color;
    ctx.beginPath();
    roundRectPath(ctx, 0, 0, W, ACCENT_H, [0, 0, 0, 0]);
    ctx.fill();
    ctx.fillStyle = tagAlpha;
    ctx.font = `600 26px ${SANS}`;
    ctx.fillText(tagLabel.toUpperCase(), PAD2, 112);
    ctx.fillStyle = textOnColor;
    ctx.font = `900 92px ${SANS}`;
    ctx.fillText(displayName, PAD2, 248);
    let y2 = ACCENT_H + 76;
    ctx.fillStyle = "#475569";
    ctx.font = `italic 42px ${SERIF}`;
    const msgLines = wrapTextLines(ctx, `\u201C${mensaje}\u201D`, W - PAD2 * 2);
    for (const line of msgLines) {
      ctx.fillText(line, PAD2, y2);
      y2 += 64;
    }
    y2 += 48;
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(PAD2, y2);
    ctx.lineTo(W - PAD2, y2);
    ctx.stroke();
    y2 += 56;
    ctx.fillStyle = "#94a3b8";
    ctx.font = `700 22px ${SANS}`;
    ctx.fillText(responseLabel.toUpperCase(), PAD2, y2);
    y2 += 50;
    ctx.fillStyle = "#1e293b";
    ctx.font = `500 38px ${SANS}`;
    const respLines = wrapTextLines(ctx, respuesta, W - PAD2 * 2);
    for (const line of respLines) {
      ctx.fillText(line, PAD2, y2);
      y2 += 58;
    }
    const contentFloor = y2 + 20;
    if (contentFloor < H2 - 220) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, contentFloor, W, H2 - contentFloor);
      ctx.clip();
      ctx.fillStyle = e2.color;
      ctx.globalAlpha = 0.2;
      ctx.beginPath();
      ctx.arc(W * 0.85, H2 * 0.78, 380, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 0.14;
      ctx.beginPath();
      ctx.arc(W * 0.12, H2 * 0.92, 260, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 0.1;
      ctx.beginPath();
      ctx.arc(W * 0.55, H2 * 0.96, 190, 0, Math.PI * 2);
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
    ctx.fillText(brand, W - PAD2 - ctx.measureText(brand).width, H2 - 56);
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
    const a2 = document.createElement("a");
    a2.href = url;
    a2.download = `${filename}.png`;
    document.body.appendChild(a2);
    a2.click();
    a2.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
  }
  function createUI({
    emociones: emociones2,
    relaciones = [],
    getDisplayName,
    getEmotionField,
    t: t2,
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
        const emotion = emociones2.find((e2) => e2.nombre === nombre);
        if (!emotion) return;
        const card = document.createElement("button");
        card.type = "button";
        card.className = "emotion-card shrink-0 w-20 h-20 rounded-full shadow-sm bg-white border-4 flex items-center justify-center text-center px-2 text-[11px] font-bold leading-tight text-slate-700";
        card.style.borderColor = emotion.color;
        const displayName = getDisplayName(emotion.nombre);
        card.setAttribute("aria-label", `${t2("openEmotionAria")} ${displayName}`);
        card.title = displayName;
        card.innerHTML = `<span>${shortRecentLabel(displayName)}</span>`;
        card.addEventListener("click", () => {
          set("lastFocusedCard", card);
          showDetail(emotion);
        });
        grid.appendChild(card);
      });
    }
    function buildEmotionCardEl(e2) {
      const card = document.createElement("div");
      card.className = "emotion-card p-5 rounded-2xl shadow-sm cursor-pointer flex justify-between items-center bg-white";
      card.style.borderLeft = `8px solid ${e2.color}`;
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `${t2("openDetailAria")} ${getDisplayName(e2.nombre)}`);
      card.onclick = () => {
        set("lastFocusedCard", card);
        showDetail(e2);
      };
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          set("lastFocusedCard", card);
          showDetail(e2);
        }
      });
      card.innerHTML = `
            <span class="font-bold text-lg text-slate-700">${getDisplayName(e2.nombre)}</span>
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
                <span class="font-black text-base leading-tight">${t2(cat.labelKey)}</span>
            </button>
        `).join("");
      for (const btn of grid.querySelectorAll(".checkin-card")) {
        btn.addEventListener("click", () => renderCheckinEmotions(btn.dataset.mood));
      }
      if (activeCheckinCat) renderCheckinEmotions(activeCheckinCat);
    }
    function renderCheckinEmotions(catKey) {
      const cat = moodCategories.find((c2) => c2.key === catKey);
      if (!cat) return;
      activeCheckinCat = catKey;
      const section = document.getElementById("checkin-emotion-section");
      const label = document.getElementById("checkin-selected-label");
      const filteredGrid = document.getElementById("checkin-filtered-grid");
      const resetBtn = document.getElementById("checkin-reset-btn");
      if (!section || !filteredGrid) return;
      section.classList.remove("hidden");
      if (label) label.textContent = `${cat.emoji} ${t2(cat.labelKey)}`;
      filteredGrid.innerHTML = "";
      for (const e2 of emociones2.filter((em) => cat.emotions.includes(em.nombre))) {
        filteredGrid.appendChild(buildEmotionCardEl(e2));
      }
      if (resetBtn) {
        const freshBtn = resetBtn.cloneNode(true);
        resetBtn.replaceWith(freshBtn);
        freshBtn.textContent = t2("checkin.reset");
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
      for (const e2 of emociones2) {
        const card = buildEmotionCardEl(e2);
        card.dataset.search = [
          e2.nombre,
          getDisplayName(e2.nombre),
          e2.siente,
          e2.dispara,
          e2.mensaje,
          getEmotionField(e2, "siente"),
          getEmotionField(e2, "dispara"),
          getEmotionField(e2, "mensaje"),
          getEmotionField(e2, "respuesta")
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
                <p class="text-slate-700 font-bold mb-1">${t2("emptyTitle")}</p>
                <p class="text-slate-500 text-sm">${t2("emptyHint")}</p>
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
            <label for="diary-note-input" class="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2 block">${t2("diary.noteLabel")}</label>
            <textarea id="diary-note-input" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-200" rows="2" placeholder="${t2("diary.notePlaceholder")}"></textarea>
            <div class="flex gap-2 mt-2">
                <button id="diary-note-save" type="button" class="flex-1 bg-slate-800 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-slate-700 transition-colors">${t2("diary.saveButton")}</button>
                <button id="diary-note-cancel" type="button" class="flex-1 bg-slate-100 text-slate-600 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors">${t2("diary.cancelButton")}</button>
            </div>
        `;
      const panel = document.getElementById("modal-panel");
      panel.appendChild(form);
      form.querySelector("#diary-note-input").focus();
      panel.scrollTop = panel.scrollHeight;
      form.querySelector("#diary-note-save").addEventListener("click", () => {
        const note = form.querySelector("#diary-note-input").value;
        if (onAddToDiary) onAddToDiary(emotionNombre, note);
        form.innerHTML = `<p class="text-emerald-600 font-bold text-sm text-center py-2">\u2713 ${t2("diary.addedFeedback")}</p>`;
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
    function buildTechniqueSection(emotionNombre) {
      const tech = REGULATION_TECHNIQUES[emotionNombre];
      if (!tech) return "";
      const lang = get("currentLang");
      const data = tech[lang] ?? tech.es;
      const steps = data.steps.map((s2, i2) => `
            <li class="flex gap-2 text-sm text-indigo-900 leading-snug">
                <span class="font-black text-indigo-400 shrink-0">${i2 + 1}.</span>
                <span>${s2}</span>
            </li>`).join("");
      return `
            <div>
                <button id="technique-toggle" type="button"
                    class="flex items-center gap-2 text-[11px] font-black text-indigo-500 uppercase tracking-widest w-full text-left px-1 mb-2"
                    aria-expanded="false">
                    <svg id="technique-chevron" class="w-3.5 h-3.5 transition-transform shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
                    ${t2("technique.practice")}
                </button>
                <div id="technique-body" class="hidden bg-indigo-50 border-2 border-indigo-100 rounded-2xl p-4">
                    <p class="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">${t2("technique.label")} \xB7 ${data.name}</p>
                    <ol class="space-y-2">${steps}</ol>
                </div>
            </div>
        `;
    }
    function showDetail(e2) {
      document.getElementById("diary-inline-form")?.remove();
      const quoteTextColor = getReadableTextColor(e2.color);
      const quoteLabelColor = quoteTextColor === "#f8fafc" ? "rgba(248,250,252,0.9)" : "rgba(15,23,42,0.85)";
      const maskedEmotions = relaciones.filter((r2) => r2.type === "enmascara" && r2.from === e2.nombre).map((r2) => emociones2.find((em) => em.nombre === r2.to)).filter(Boolean);
      const masksSection = maskedEmotions.length > 0 ? `
                <div class="border-t border-slate-100 pt-4">
                    <p class="text-[11px] font-black text-violet-500 uppercase tracking-widest mb-2 px-1">${t2("map.relEnmascara")}</p>
                    <div class="flex flex-wrap gap-2 mb-2">
                        ${maskedEmotions.map((m2) => `
                            <button type="button" data-masked="${m2.nombre}"
                                class="masked-chip px-3 py-1.5 rounded-full text-sm font-bold transition-opacity hover:opacity-80"
                                style="background-color:${m2.color}; color:${getReadableTextColor(m2.color)}">
                                ${getDisplayName(m2.nombre)}
                            </button>
                        `).join("")}
                    </div>
                    <p class="text-xs text-slate-400 px-1">${t2("masksHint")}</p>
                </div>
        ` : "";
      const content = document.getElementById("modal-content");
      content.innerHTML = `
            <div class="inline-block px-4 py-1 rounded-full mb-2" style="background-color:${e2.color}; color:${quoteTextColor}">
                <span class="text-xs font-black uppercase tracking-widest">${t2("emotionTag")}</span>
            </div>
            <h2 id="modal-emotion-title" class="text-4xl font-black mb-6 text-slate-800">${getDisplayName(e2.nombre)}</h2>

            <div class="space-y-6">
                <div class="grid grid-cols-1 gap-4">
                    <div class="bg-slate-50 p-4 rounded-2xl">
                        <p class="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-1">${t2("feelLabel")}</p>
                        <p class="text-slate-700 leading-relaxed font-medium">${getEmotionField(e2, "siente")}</p>
                    </div>
                    <div class="bg-slate-50 p-4 rounded-2xl">
                        <p class="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-1">${t2("triggerLabel")}</p>
                        <p class="text-slate-700 leading-relaxed font-medium">${getEmotionField(e2, "dispara")}</p>
                    </div>
                    <div class="bg-slate-50 p-4 rounded-2xl">
                        <p class="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-1">${t2("functionLabel")}</p>
                        <p class="text-slate-700 leading-relaxed font-medium">${getEmotionField(e2, "funcion")}</p>
                    </div>
                </div>

                <div class="relative p-6 rounded-3xl overflow-hidden shadow-lg" style="background-color:${e2.color}; color:${quoteTextColor}">
                    <svg class="absolute -top-2 -left-2 text-black/10 w-16 h-16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>
                    <p class="text-[11px] font-black uppercase tracking-widest mb-2" style="color:${quoteLabelColor}">${t2("messageLabel")}</p>
                    <p class="text-[1.45rem] sm:text-[1.65rem] font-serif italic leading-[1.35] sm:leading-snug" style="color:${quoteTextColor}">"${getEmotionField(e2, "mensaje")}"</p>
                </div>

                <div>
                    <p class="text-[11px] font-black text-amber-600 uppercase tracking-widest mb-2 px-1">${t2("impulseLabel")}</p>
                    <div class="bg-amber-50 border-2 border-amber-100 p-4 rounded-2xl">
                        <p class="text-amber-900 font-bold leading-relaxed">${getEmotionField(e2, "impulso")}</p>
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between mb-2 px-1">
                        <p class="text-[11px] font-black text-slate-500 uppercase tracking-widest">${t2("responseLabel")}</p>
                        <button id="copy-response-btn" type="button" class="flex items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors text-[11px] font-bold" aria-label="${t2("copyButton")}">
                            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                            <span id="copy-response-label">${t2("copyButton")}</span>
                        </button>
                    </div>
                    <div class="bg-emerald-50 border-2 border-emerald-100 p-4 rounded-2xl">
                        <p class="text-emerald-900 font-bold leading-relaxed">${getEmotionField(e2, "respuesta")}</p>
                    </div>
                </div>

                ${buildTechniqueSection(e2.nombre)}
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
      saveRecentEmotion(e2.nombre);
      const copyBtn = document.getElementById("copy-response-btn");
      const copyLabel = document.getElementById("copy-response-label");
      if (copyBtn && navigator.clipboard) {
        copyBtn.addEventListener("click", async () => {
          await navigator.clipboard.writeText(getEmotionField(e2, "respuesta"));
          copyLabel.textContent = t2("copiedFeedback");
          setTimeout(() => {
            copyLabel.textContent = t2("copyButton");
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
            e2,
            getDisplayName(e2.nombre),
            t2("emotionTag"),
            getEmotionField(e2, "mensaje"),
            t2("responseLabel"),
            getEmotionField(e2, "respuesta")
          );
          shareEmotionCard(canvas, getDisplayName(e2.nombre));
        });
      }
      wireDiaryButton(e2.nombre);
      const techniqueToggle = content.querySelector("#technique-toggle");
      if (techniqueToggle) {
        techniqueToggle.addEventListener("click", () => {
          const body = content.querySelector("#technique-body");
          const chevron = content.querySelector("#technique-chevron");
          const expanded = techniqueToggle.getAttribute("aria-expanded") === "true";
          techniqueToggle.setAttribute("aria-expanded", String(!expanded));
          body?.classList.toggle("hidden", expanded);
          chevron?.classList.toggle("rotate-90", !expanded);
        });
      }
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
      if (!modal.open || get("isClosingModal")) return;
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
    const a2 = Object.entries(attrs).map(([k2, v2]) => `${k2}="${v2}"`).join(" ");
    if (part.tag === "ellipse") return `<ellipse cx="${part.cx}" cy="${part.cy}" rx="${part.rx}" ry="${part.ry}" ${a2}/>`;
    if (part.tag === "path") return `<path d="${part.d}" ${a2}/>`;
    return "";
  }
  function getZoneEmotionNames(zoneId, mode) {
    const detailZones = mode === "simple" ? SIMPLE_ZONE_GROUPS[zoneId] || [zoneId] : [zoneId];
    const names = /* @__PURE__ */ new Set();
    for (const dz of detailZones) {
      for (const n2 of BODY_ZONE_EMOTIONS[dz] || []) names.add(n2);
    }
    return names;
  }
  function buildSvgZoneRects(zones, rects, selectedZones) {
    return zones.map((zone) => {
      const on2 = selectedZones.has(zone.id);
      const fill = on2 ? zone.color + "66" : zone.color + "33";
      const strk = on2 ? zone.color : zone.color + "66";
      const sw = on2 ? "1.5" : "0.75";
      return (rects[zone.id] || []).map(
        (r2) => `<rect x="${r2.x}" y="${r2.y}" width="${r2.w}" height="${r2.h}"
                data-zone="${zone.id}" fill="${fill}" stroke="${strk}" stroke-width="${sw}"
                cursor="pointer" class="zone-hit"/>`
      ).join("");
    }).join("");
  }
  function buildSvgZoneLabels(zones, rects, selectedZones, t2) {
    return zones.filter((z2) => selectedZones.has(z2.id) && z2.id !== "arms").map((z2) => {
      const r2 = (rects[z2.id] || [])[0];
      if (!r2) return "";
      const lx = r2.x + r2.w / 2;
      const ly = r2.y + r2.h / 2 + 4;
      return `<text x="${lx}" y="${ly}" text-anchor="middle" font-size="7.5" font-weight="700"
                fill="${z2.color}" pointer-events="none" opacity="0.9">${t2(z2.labelKey)}</text>`;
    }).join("");
  }
  function buildChipsHtml(zones, selectedZones, t2) {
    return zones.filter((z2) => selectedZones.has(z2.id)).map((z2) => `
            <span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                style="background:${z2.color}">
                ${t2(z2.labelKey)}
                <button type="button" data-remove-zone="${z2.id}" aria-label="Quitar ${t2(z2.labelKey)}"
                    class="opacity-80 hover:opacity-100 leading-none">
                    <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </button>
            </span>`).join("");
  }
  function buildResultHtml(matching, selectedZones, dark, t2, getDisplayName) {
    const emptyC = dark ? "text-slate-500" : "text-slate-400";
    if (selectedZones.size === 0) {
      return `<p class="text-sm text-center ${emptyC} py-3 px-2">${t2("body.tapPrompt")}</p>`;
    }
    if (matching.length === 0) {
      return `<p class="text-sm text-center ${emptyC} py-3 px-2">${t2("body.noMatch")}</p>`;
    }
    const titleC = dark ? "text-slate-300" : "text-slate-500";
    const cards = matching.map((e2) => `
        <button type="button" data-body-emotion="${e2.nombre}"
            class="body-result-card w-full text-left px-4 py-3 rounded-2xl flex items-center gap-3 transition-all hover:shadow-md"
            style="background:${e2.color}25; border-left:5px solid ${e2.color}">
            <span class="font-bold text-sm" style="color:${e2.text}">${getDisplayName(e2.nombre)}</span>
            <span class="ml-auto text-xs font-bold opacity-60 shrink-0" style="color:${e2.text}">Ver \u2192</span>
        </button>`).join("");
    return `
        <p class="text-[11px] font-black ${titleC} uppercase tracking-widest mb-3">${t2("body.resultTitle")}</p>
        <div class="space-y-2">${cards}</div>`;
  }
  var BODY_CLIP_SHAPES = BODY_PARTS.map((p2) => bodyPartSvg(p2, { fill: "white" })).join("");
  function createBodyMap({ emociones: emociones2, getDisplayName, t: t2, showDetail, onDismiss, onSwitchToQuiz }) {
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
      return emociones2.filter((e2) => counts.has(e2.nombre)).sort((a2, b2) => counts.get(b2.nombre) - counts.get(a2.nombre) || a2.nombre.localeCompare(b2.nombre));
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
      const zoneLabels = buildSvgZoneLabels(zones, rects, selectedZones, t2);
      const bodyOutline = BODY_PARTS.map((p2) => bodyPartSvg(p2, {
        fill: bodyFill,
        "fill-opacity": "0.35",
        stroke: lineColor,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "pointer-events": "none"
      })).join("");
      const divider = `<line x1="29" y1="100" x2="71" y2="100"
            stroke="${lineColor}" stroke-dasharray="3,2" opacity="0.35" pointer-events="none"/>`;
      const chipsHtml = buildChipsHtml(zones, selectedZones, t2);
      const resultHtml = buildResultHtml(getMatchingEmotions(), selectedZones, dark, t2, getDisplayName);
      const clearBtn = selectedZones.size > 0 ? `<button id="body-clear-btn" type="button"
                class="mt-4 w-full py-2.5 rounded-2xl text-sm font-bold transition-colors ${clearBtnC}">
                ${t2("body.clear")}
               </button>` : "";
      const headerC = dark ? "text-slate-100" : "text-slate-800";
      const closeRingC = dark ? "bg-slate-700 text-slate-400 hover:bg-slate-600" : "bg-slate-100 text-slate-500 hover:bg-slate-200";
      const toggleBgC = dark ? "bg-slate-800" : "bg-slate-100";
      content.innerHTML = `
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-xl font-black ${headerC}">${t2("body.mapTitle")}</h2>
                <button id="body-close-btn" type="button" aria-label="Cerrar"
                    class="w-8 h-8 flex items-center justify-center rounded-full ${closeRingC} transition-colors">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </button>
            </div>
            <div class="flex gap-1 mb-4 p-1 rounded-xl ${toggleBgC}">
                <button type="button" id="body-mode-simple"
                    class="flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${mode === "simple" ? activeC : inactiveC}">
                    ${t2("body.modeSimple")}
                </button>
                <button type="button" id="body-mode-detailed"
                    class="flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${mode === "detailed" ? activeC : inactiveC}">
                    ${t2("body.modeDetailed")}
                </button>
            </div>
            <div class="flex justify-center mb-4">
                <svg id="body-svg" viewBox="0 0 100 200"
                    style="width:130px;height:auto;touch-action:manipulation"
                    role="img" aria-label="${t2("body.mapTitle")}">
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
                \u2190 ${t2("quiz.tabQuestions")}
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
          const emotion = matching.find((e2) => e2.nombre === btn.dataset.bodyEmotion);
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
  function createQuiz({ emociones: emociones2, getDisplayName, t: t2, showDetail, onShowAll }) {
    let history = [];
    let currentStepKey = "q1";
    const dismiss = () => {
      document.getElementById("quiz-panel").close();
      document.getElementById("quiz-trigger")?.focus();
    };
    const bodyMap = createBodyMap({
      emociones: emociones2,
      getDisplayName,
      t: t2,
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
                <h2 class="text-xl font-black ${titleC}">${t2("quiz.title")}</h2>
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
      const emotions = emotionNames.map((nombre) => emociones2.find((e2) => e2.nombre === nombre)).filter(Boolean);
      const titleC = dark ? "text-slate-300" : "text-slate-500";
      const restartC = dark ? "bg-slate-800 text-slate-200 hover:bg-slate-700" : "bg-slate-100 text-slate-700 hover:bg-slate-200";
      const closeResC = dark ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600";
      const content = document.getElementById("quiz-content");
      content.innerHTML = `
            ${headerHtml(dark)}
            <p class="text-[11px] font-black ${titleC} uppercase tracking-widest mb-4">${t2("quiz.resultTitle")}</p>
            <div class="space-y-3">
                ${emotions.map((e2) => `
                    <button type="button" data-emotion="${e2.nombre}"
                        class="quiz-result-card w-full text-left p-4 rounded-2xl flex items-center gap-4 hover:shadow-md transition-all"
                        style="border-left:6px solid ${e2.color}; background:${e2.color}${dark ? "22" : "15"}">
                        <span class="font-bold" style="color:${e2.text}">${getDisplayName(e2.nombre)}</span>
                        <span class="ml-auto text-xs font-bold opacity-70 shrink-0" style="color:${e2.text}">Ver \u2192</span>
                    </button>
                `).join("")}
            </div>
            <button id="quiz-restart-btn" type="button"
                class="mt-6 w-full py-3 font-bold rounded-2xl text-sm transition-colors ${restartC}">
                ${t2("quiz.restart")}
            </button>
            <button id="quiz-close-result-btn" type="button"
                class="mt-2 w-full py-3 text-sm font-medium transition-colors ${closeResC}">
                ${t2("quiz.close")}
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
          const emotion = emociones2.find((e2) => e2.nombre === btn.dataset.emotion);
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
      const dotsHtml = ["q1", "q2", "q3"].map((_2, i2) => {
        const active = i2 <= history.length;
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
            <p class="text-2xl font-black ${questionC} leading-snug mb-8">${t2(step.textKey)}</p>
            <div class="space-y-3">
                ${step.options.map((opt, i2) => `
                    <button type="button" data-option-index="${i2}"
                        class="quiz-option w-full text-left p-5 rounded-2xl shadow-sm border-2 hover:shadow-md transition-all font-medium ${optionC}">
                        ${t2(opt.labelKey)}
                    </button>
                `).join("")}
            </div>
            ${history.length > 0 ? `
                <button id="quiz-back-btn" type="button"
                    class="mt-6 flex items-center gap-2 text-sm font-medium transition-colors ${backC}">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    ${t2("quiz.back")}
                </button>
            ` : `
                <button id="quiz-to-body-btn" type="button"
                    class="mt-6 w-full py-3 text-sm font-semibold transition-colors border rounded-2xl ${toBodyC}">
                    ${t2("quiz.tabBody")} \u2192
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
      panel.addEventListener("cancel", (e2) => {
        e2.preventDefault();
        dismiss();
      });
    };
    return { init, open };
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
    return entries.filter((e2) => e2.id !== id);
  }
  function loadEntries() {
    return parseDiaryEntries(localStorage.getItem(DIARY_KEY));
  }
  function saveEntries(entries) {
    localStorage.setItem(DIARY_KEY, JSON.stringify(entries));
  }
  function addEntry(emotionNombre, note = "", tags = []) {
    const entry = createDiaryEntry(emotionNombre, note, tags);
    saveEntries([entry, ...loadEntries()]);
    return entry;
  }
  function deleteEntry(id) {
    saveEntries(deleteDiaryEntryById(loadEntries(), id));
  }
  function createDiary({ t: t2, getDisplayName, emociones: emociones2 }) {
    function renderTagPills(tags) {
      if (!tags?.length) return "";
      const pills = tags.map((tag) => {
        const label = t2(`diary.tag${tag.charAt(0).toUpperCase()}${tag.slice(1)}`);
        return `<span class="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold">${label}</span>`;
      }).join("");
      return `<div class="flex flex-wrap gap-1 mt-1.5">${pills}</div>`;
    }
    function formatDate(isoString) {
      const d2 = new Date(isoString);
      const now = /* @__PURE__ */ new Date();
      const time = d2.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      if (d2.toDateString() === now.toDateString()) return `${t2("diary.todayLabel")}, ${time}`;
      return `${d2.toLocaleDateString([], { day: "numeric", month: "short", year: "numeric" })} \xB7 ${time}`;
    }
    function buildAddFormHtml() {
      return `
            <div id="diary-add-form" class="bg-white rounded-2xl p-4 shadow-sm mb-4 border-2 border-blue-100">
                <p class="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-3">${t2("diary.newEntry")}</p>
                <div class="relative mb-3">
                    <input type="text" id="diary-emotion-search" autocomplete="off"
                        placeholder="${t2("diary.pickEmotion")}"
                        class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-200">
                    <input type="hidden" id="diary-emotion-value">
                    <div id="diary-emotion-dropdown"
                        class="hidden absolute z-50 left-0 right-0 mt-1 bg-white rounded-xl shadow-lg border border-slate-200 hide-scroll"
                        style="max-height:11rem;overflow-y:auto"></div>
                </div>
                <textarea id="diary-note-input" rows="2" placeholder="${t2("diary.notePlaceholder")}"
                    class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-200 mb-3"></textarea>
                <div class="mb-3">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">${t2("diary.tagLabel")}</p>
                    <div class="flex flex-wrap gap-1.5">
                        ${DIARY_TAGS.map((tag) => `
                            <button type="button" data-tag="${tag}"
                                class="diary-tag-btn px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors">
                                ${t2(`diary.tag${tag.charAt(0).toUpperCase()}${tag.slice(1)}`)}
                            </button>
                        `).join("")}
                    </div>
                </div>
                <div class="flex gap-2">
                    <button id="diary-form-save" type="button"
                        class="flex-1 bg-slate-800 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-slate-700 transition-colors">
                        ${t2("diary.saveButton")}
                    </button>
                    <button id="diary-form-cancel" type="button"
                        class="flex-1 bg-slate-100 text-slate-600 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors">
                        ${t2("diary.cancelButton")}
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
        const q2 = normalizeText(query.trim());
        const filtered = emociones2.filter((e2) => {
          const name = normalizeText(getDisplayName(e2.nombre));
          return !q2 || name.includes(q2) || normalizeText(e2.nombre).includes(q2);
        });
        if (!filtered.length) {
          dropdown.classList.add("hidden");
          return;
        }
        dropdown.innerHTML = filtered.map((e2) => `
                <button type="button" data-nombre="${e2.nombre}"
                    class="emotion-option w-full text-left px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2.5 transition-colors">
                    <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background-color:${e2.color}"></span>
                    ${getDisplayName(e2.nombre)}
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
                ${t2("diary.exportButton")}
            </button>
        ` : "";
      const headerHtml = `
            <div class="flex items-center justify-between mb-4">
                <h2 id="diary-title-heading" class="text-xl font-black text-slate-800">${t2("diary.title")}</h2>
                <div class="flex items-center gap-2">
                    ${exportBtn}
                    <button id="diary-new-btn" type="button"
                        class="flex items-center gap-1.5 bg-slate-800 text-white text-xs font-bold px-3 py-2 rounded-xl hover:bg-slate-700 transition-colors">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                        ${t2("diary.newEntry")}
                    </button>
                </div>
            </div>
        `;
      const privacyHtml = `
            <p class="text-xs text-slate-400 mb-4 flex items-start gap-1.5">
                <svg class="w-3.5 h-3.5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
                ${t2("diary.privacyNote")}
            </p>
        `;
      const formHtml = showForm ? buildAddFormHtml() : "";
      let entriesHtml;
      if (entries.length) {
        entriesHtml = `
                <div class="space-y-3">
                    ${entries.map((entry) => {
          const emotion = emociones2.find((e2) => e2.nombre === entry.emotion);
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
                                    ${renderTagPills(entry.tags)}
                                </div>
                                <button type="button" class="diary-delete-btn text-slate-300 hover:text-red-400 transition-colors shrink-0" data-id="${entry.id}" aria-label="${t2("diary.deleteButton")}">
                                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                                </button>
                            </div>
                        `;
        }).join("")}
                </div>
                ${entries.length > 1 ? `
                    <button id="diary-clear-btn" type="button"
                        class="mt-5 w-full text-xs text-slate-400 hover:text-red-400 transition-colors py-2">
                        ${t2("diary.clearAll")}
                    </button>
                ` : ""}
            `;
      } else {
        entriesHtml = `
            <div class="text-center py-8 px-2">
                <p class="text-slate-400 text-sm mb-5">${t2("diary.emptyPrompt")}</p>
                <div class="flex flex-col gap-2 max-w-xs mx-auto">
                    <button id="diary-empty-checkin" type="button"
                        class="w-full bg-slate-800 text-white py-3 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-colors">
                        ${t2("diary.emptyAction1")}
                    </button>
                    <button id="diary-empty-quiz" type="button"
                        class="w-full bg-slate-100 text-slate-700 py-3 rounded-2xl font-bold text-sm hover:bg-slate-200 transition-colors">
                        ${t2("diary.emptyAction2")}
                    </button>
                </div>
            </div>
        `;
      }
      content.innerHTML = headerHtml + privacyHtml + formHtml + entriesHtml;
      content.querySelector("#diary-empty-checkin")?.addEventListener("click", () => emit("tab:switch", { tabId: "checkin" }));
      content.querySelector("#diary-empty-quiz")?.addEventListener("click", () => emit("quiz:open"));
      content.querySelector("#diary-export-btn")?.addEventListener("click", () => {
        const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
        const blob = new Blob([JSON.stringify(entries, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a2 = document.createElement("a");
        a2.href = url;
        a2.download = `diario-emocional-${date}.json`;
        document.body.appendChild(a2);
        a2.click();
        a2.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1e3);
      });
      const selectedTags = /* @__PURE__ */ new Set();
      if (showForm) {
        wireEmotionSearch(content);
        for (const btn of content.querySelectorAll(".diary-tag-btn")) {
          btn.addEventListener("click", () => {
            const tag = btn.dataset.tag;
            if (selectedTags.has(tag)) {
              selectedTags.delete(tag);
              btn.classList.remove("bg-slate-800", "text-white");
              btn.classList.add("bg-slate-100", "text-slate-500");
            } else {
              selectedTags.add(tag);
              btn.classList.add("bg-slate-800", "text-white");
              btn.classList.remove("bg-slate-100", "text-slate-500");
            }
          });
        }
      }
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
          addEntry(emotionValue.value, note, [...selectedTags]);
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
          if (confirm(t2("diary.clearConfirm"))) {
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
  function applyRepulsion(nodes, k2) {
    for (let i2 = 0; i2 < nodes.length; i2++) {
      for (let j2 = i2 + 1; j2 < nodes.length; j2++) {
        let dx = nodes[i2].x - nodes[j2].x;
        let dy = nodes[i2].y - nodes[j2].y;
        if (!dx && !dy) {
          dx = 0.01;
        }
        const d2 = Math.hypot(dx, dy);
        const f3 = k2 * k2 / d2;
        nodes[i2].fx += dx / d2 * f3;
        nodes[i2].fy += dy / d2 * f3;
        nodes[j2].fx -= dx / d2 * f3;
        nodes[j2].fy -= dy / d2 * f3;
      }
    }
  }
  function runForce(nodes, edges, W, H2) {
    const k2 = Math.sqrt(W * H2 / nodes.length) * 0.95;
    for (let it = 0; it < 500; it++) {
      const temp = 35 * (1 - it / 500);
      for (const n2 of nodes) {
        n2.fx = 0;
        n2.fy = 0;
      }
      applyRepulsion(nodes, k2);
      for (const e2 of edges) {
        const a2 = nodes[e2.ai], b2 = nodes[e2.bi];
        const dx = b2.x - a2.x, dy = b2.y - a2.y;
        const d2 = Math.hypot(dx, dy) || 0.01;
        const f3 = d2 * d2 / k2 * 0.3;
        a2.fx += dx / d2 * f3;
        a2.fy += dy / d2 * f3;
        b2.fx -= dx / d2 * f3;
        b2.fy -= dy / d2 * f3;
      }
      for (const n2 of nodes) {
        const d2 = Math.hypot(n2.fx, n2.fy) || 0.01;
        n2.x = clamp(n2.x + n2.fx / d2 * Math.min(d2, temp), R + 28, W - R - 28);
        n2.y = clamp(n2.y + n2.fy / d2 * Math.min(d2, temp), R + 24, H2 - R - 28);
      }
    }
    resolveCollisions(nodes, W, H2);
  }
  function clamp(v2, lo, hi) {
    return Math.min(Math.max(v2, lo), hi);
  }
  function resolveCollisions(nodes, W, H2) {
    const minDist = R * 2 + 10;
    for (let pass = 0; pass < 12; pass++) {
      for (let i2 = 0; i2 < nodes.length; i2++) {
        for (let j2 = i2 + 1; j2 < nodes.length; j2++) {
          const dx = nodes[i2].x - nodes[j2].x;
          const dy = nodes[i2].y - nodes[j2].y;
          const d2 = Math.hypot(dx, dy) || 0.01;
          if (d2 < minDist) {
            const push = (minDist - d2) / 2;
            const ux = dx / d2, uy = dy / d2;
            nodes[i2].x = clamp(nodes[i2].x + ux * push, R + 28, W - R - 28);
            nodes[i2].y = clamp(nodes[i2].y + uy * push, R + 24, H2 - R - 28);
            nodes[j2].x = clamp(nodes[j2].x - ux * push, R + 28, W - R - 28);
            nodes[j2].y = clamp(nodes[j2].y - uy * push, R + 24, H2 - R - 28);
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
    return EMOTION_RELATIONS.flatMap((r2) => {
      const ai = nameToIdx[r2.from];
      const bi = nameToIdx[r2.to];
      if (ai === void 0 || bi === void 0) {
        const missing = [];
        if (ai === void 0) missing.push(`from="${r2.from}"`);
        if (bi === void 0) missing.push(`to="${r2.to}"`);
        console.warn(
          "[emotionMap] Dropping relation %s with unknown endpoint(s): %s",
          String(r2.type),
          missing.join(", ")
        );
        return [];
      }
      return [{ ai, bi, type: r2.type }];
    });
  }
  function buildForceData(emociones2, getDisplayName, W, H2) {
    const rng = makeRng(48879);
    const nameToIdx = {};
    const nodes = emociones2.map((e2, idx) => {
      nameToIdx[e2.nombre] = idx;
      const ci = MOOD_CATEGORIES.findIndex((c2) => c2.emotions.includes(e2.nombre));
      const q2 = QUAD_MAP[Math.max(ci, 0)];
      return {
        nombre: e2.nombre,
        label: getDisplayName(e2.nombre),
        color: e2.color,
        x: (q2 % 2 + 0.2 + rng() * 0.6) * (W / 2),
        y: (Math.floor(q2 / 2) + 0.2 + rng() * 0.6) * (H2 / 2),
        fx: 0,
        fy: 0
      };
    });
    const edges = buildEdges(nameToIdx);
    runForce(nodes, edges, W, H2);
    return { nodes, edges, nameToIdx };
  }
  function buildQuadData(emociones2, getDisplayName, W) {
    const QW = Math.floor(W / 2);
    const maxCols = Math.max(2, Math.floor((QW - PAD * 2 + 8) / STEP));
    let maxRowsTop = 0, maxRowsBot = 0;
    MOOD_CATEGORIES.forEach((cat, ci) => {
      const count = cat.emotions.filter((n2) => emociones2.find((e2) => e2.nombre === n2)).length;
      const rows = Math.ceil(count / maxCols);
      if (QUAD_MAP[ci] < 2) maxRowsTop = Math.max(maxRowsTop, rows);
      else maxRowsBot = Math.max(maxRowsBot, rows);
    });
    const QH = QUAD_HDR + PAD + Math.max(maxRowsTop, 1) * ROW_H + R + 16;
    const H2 = QH * 2;
    const nameToIdx = {};
    const nodes = [];
    MOOD_CATEGORIES.forEach((cat, ci) => {
      const q2 = QUAD_MAP[ci];
      const ox = q2 % 2 * QW;
      const oy = Math.floor(q2 / 2) * QH;
      cat.emotions.forEach((nombre, pos) => {
        const e2 = emociones2.find((em) => em.nombre === nombre);
        if (!e2) return;
        nameToIdx[nombre] = nodes.length;
        nodes.push({
          nombre,
          label: getDisplayName(nombre),
          color: e2.color,
          x: ox + PAD + R + pos % maxCols * STEP,
          y: oy + QUAD_HDR + PAD + R + Math.floor(pos / maxCols) * ROW_H
        });
      });
    });
    return { nodes, edges: buildEdges(nameToIdx), nameToIdx, H: H2 };
  }
  function buildLegendItems(dark, activeTypes, t2) {
    return Object.entries(RELS).map(([type, rel]) => {
      const on2 = activeTypes.has(type);
      const dimLine = dark ? "#475569" : "#cbd5e1";
      const lineColor = on2 ? rel.color : dimLine;
      const onTextC = dark ? "text-slate-300" : "text-slate-600";
      const offTextC = dark ? "text-slate-600" : "text-slate-400";
      const textC = on2 ? onTextC : offTextC;
      const onBgC = dark ? "bg-slate-700" : "bg-slate-100";
      const bgC = on2 ? onBgC : "";
      return `<button type="button" data-rel-type="${type}" role="listitem" aria-pressed="${on2}"
            class="flex items-center gap-1 text-[11px] px-1.5 py-0.5 rounded-lg transition-colors ${textC} ${bgC}">
            <svg width="14" height="6" aria-hidden="true"><line x1="0" y1="3" x2="14" y2="3" stroke="${lineColor}" stroke-width="2" stroke-dasharray="${rel.dash}"/></svg>
            ${t2(rel.labelKey)}
        </button>`;
    }).join("");
  }
  function buildQuadrantBtns(effectiveQuadrant, activeC, inactiveC, t2) {
    const allBtnC = effectiveQuadrant === null ? activeC : inactiveC;
    return [
      `<button type="button" data-quad="all" aria-pressed="${effectiveQuadrant === null}"
            class="text-[11px] font-bold px-2.5 py-0.5 rounded-full border transition-colors ${allBtnC}">
            ${t2("map.filterAll")}
        </button>`
    ].concat(MOOD_CATEGORIES.map((cat, i2) => {
      const isActive = effectiveQuadrant === i2;
      const inlineStyle = isActive ? `background-color:${cat.color};color:${cat.ink};border-color:${cat.color}` : "";
      const btnC = isActive ? "" : inactiveC;
      return `<button type="button" data-quad="${i2}" aria-pressed="${isActive}"
            class="text-[11px] font-bold px-2.5 py-0.5 rounded-full border transition-colors ${btnC}"
            style="${inlineStyle}">${t2(cat.labelKey)}</button>`;
    })).join("");
  }
  function buildInfoPanel(selected, nodes, edges, dark, t2, getDisplayName) {
    if (!selected) return "";
    const myEdges = edges.filter(
      (e2) => nodes[e2.ai]?.nombre === selected || nodes[e2.bi]?.nombre === selected
    );
    const grouped = {};
    for (const e2 of myEdges) {
      const other = nodes[e2.ai].nombre === selected ? nodes[e2.bi] : nodes[e2.ai];
      grouped[e2.type] = grouped[e2.type] || [];
      grouped[e2.type].push(other.label);
    }
    const rows = Object.entries(grouped).map(([type, names]) => {
      const rel = RELS[type];
      return `<li class="flex items-start gap-2 text-sm leading-snug">
            <span class="mt-1 shrink-0 inline-block w-2.5 h-2.5 rounded-full" style="background:${rel.color}"></span>
            <span><strong class="${dark ? "text-slate-300" : "text-slate-700"}">${t2(rel.labelKey)}:</strong> <span class="${dark ? "text-slate-400" : "text-slate-500"}">${names.join(", ")}</span></span>
        </li>`;
    }).join("");
    const borderC = dark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100";
    const nameC = dark ? "text-slate-100" : "text-slate-800";
    const body = rows ? `<ul class="space-y-1.5">${rows}</ul>` : `<p class="text-xs text-slate-400">${t2("map.infoNone")}</p>`;
    return `<div id="map-info-panel" class="mt-3 rounded-2xl p-4 border ${borderC} shadow-sm">
        <div class="flex items-center justify-between mb-2">
            <span class="font-bold ${nameC}">${getDisplayName(selected)}</span>
            <div class="flex items-center gap-1">
                <button id="map-open-btn" class="text-xs font-bold text-blue-500 hover:text-blue-600 px-2 py-1 rounded-lg transition-colors">${t2("openChip")}</button>
                <button id="map-clear-btn" aria-label="${t2("map.clearSelection")}"
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
    const nodeNames = new Set(nodes.map((n2) => n2.nombre));
    const inQuadrant = new Set(cat.emotions.filter((n2) => nodeNames.has(n2)));
    const neighbors = /* @__PURE__ */ new Set();
    for (const e2 of visibleEdges) {
      const aN = nodes[e2.ai].nombre;
      const bN = nodes[e2.bi].nombre;
      if (inQuadrant.has(aN) && !inQuadrant.has(bN)) neighbors.add(bN);
      if (inQuadrant.has(bN) && !inQuadrant.has(aN)) neighbors.add(aN);
    }
    return { inQuadrant, neighbors };
  }
  function hasNameFilterMatch(nameFilter, selected, nodes) {
    if (!nameFilter || selected !== null) return true;
    const norm = normalizeText(nameFilter);
    return nodes.some((n2) => normalizeText(n2.label).includes(norm));
  }
  function calcNodeOpacity(n2, sel, isSel, isConn, quadrantFilter, normalizedFilter) {
    if (sel) return isSel || isConn ? 1 : 0;
    if (quadrantFilter) {
      if (quadrantFilter.inQuadrant.has(n2.nombre)) return 1;
      if (quadrantFilter.neighbors.has(n2.nombre)) return 0.45;
      return 0;
    }
    if (normalizedFilter) return normalizeText(n2.label).includes(normalizedFilter) ? 1 : 0.15;
    return 1;
  }
  function svgBody(nodes, edges, W, H2, sel, view, { t: t2, activeTypes, activeQuadrant, nameFilter }) {
    const dark = document.documentElement.classList.contains("dark");
    const labelFill = dark ? "#cbd5e1" : "#1e293b";
    const visibleEdges = edges.filter((e2) => activeTypes.has(e2.type));
    const quadrantFilter = buildQuadrantFilter(activeQuadrant, visibleEdges, nodes);
    const connectedNames = sel ? new Set(
      visibleEdges.filter((e2) => nodes[e2.ai].nombre === sel || nodes[e2.bi].nombre === sel).flatMap((e2) => [nodes[e2.ai].nombre, nodes[e2.bi].nombre])
    ) : null;
    let bg = "";
    if (view === "quad") {
      const QW = W / 2, QH = H2 / 2;
      MOOD_CATEGORIES.forEach((cat, ci) => {
        const q2 = QUAD_MAP[ci];
        const ox = q2 % 2 * QW;
        const oy = Math.floor(q2 / 2) * QH;
        const bgC = dark ? cat.ink + "28" : cat.color + "55";
        const hdC = dark ? cat.ink + "99" : cat.color + "cc";
        const htC = dark ? "#f1f5f9" : cat.ink;
        bg += `<rect x="${ox}" y="${oy}" width="${QW}" height="${QH}" fill="${bgC}"/>`;
        bg += `<rect x="${ox}" y="${oy}" width="${QW}" height="${QUAD_HDR}" fill="${hdC}"/>`;
        bg += `<text x="${ox + QW / 2}" y="${oy + 15}" text-anchor="middle" font-size="11" font-weight="700" fill="${htC}">${t2(cat.labelKey).toUpperCase()}</text>`;
      });
      const divC = dark ? "#334155" : "#94a3b8";
      bg += `<line x1="${W / 2}" y1="0" x2="${W / 2}" y2="${H2}" stroke="${divC}" stroke-width="1"/>`;
      bg += `<line x1="0" y1="${H2 / 2}" x2="${W}" y2="${H2 / 2}" stroke="${divC}" stroke-width="1"/>`;
    }
    const normalizedFilter = nameFilter ? normalizeText(nameFilter) : "";
    const eStr = visibleEdges.map((e2) => {
      const a2 = nodes[e2.ai], b2 = nodes[e2.bi];
      let op = 0.4;
      if (sel) {
        op = sel === a2.nombre || sel === b2.nombre ? 0.9 : 0;
      } else if (quadrantFilter) {
        const aIn = quadrantFilter.inQuadrant.has(a2.nombre);
        const bIn = quadrantFilter.inQuadrant.has(b2.nombre);
        if (!aIn && !bIn) op = 0;
        else if (aIn && bIn) op = 0.75;
        else op = 0.35;
      } else if (normalizedFilter) {
        const aMatch = normalizeText(a2.label).includes(normalizedFilter);
        const bMatch = normalizeText(b2.label).includes(normalizedFilter);
        op = aMatch || bMatch ? 0.3 : 0;
      }
      const rel = RELS[e2.type];
      return `<line x1="${Math.trunc(a2.x)}" y1="${Math.trunc(a2.y)}" x2="${Math.trunc(b2.x)}" y2="${Math.trunc(b2.y)}" stroke="${rel.color}" stroke-width="2.5" opacity="${op}" stroke-dasharray="${rel.dash}"/>`;
    }).join("");
    const nStr = nodes.map((n2) => {
      const isSel = sel === n2.nombre;
      const isConn = connectedNames ? connectedNames.has(n2.nombre) : true;
      const nodeOp = calcNodeOpacity(n2, sel, isSel, isConn, quadrantFilter, normalizedFilter);
      const hide = nodeOp === 0;
      const sc = isSel ? "#2563eb" : "none";
      const sw = isSel ? "3" : "0";
      const lbl = n2.label.length > 10 ? n2.label.slice(0, 9) + "\u2026" : n2.label;
      const cx = Math.trunc(n2.x), cy = Math.trunc(n2.y);
      return `<g class="map-node" data-nombre="${escapeHtmlAttr(n2.nombre)}" tabindex="0" role="button" aria-label="${escapeHtmlAttr(n2.label)}" style="cursor:pointer" opacity="${nodeOp}" ${hide ? 'pointer-events="none"' : ""}>
            <title>${escapeHtmlText(n2.label)}</title>
            <circle cx="${cx}" cy="${cy}" r="${R + 6}" fill="transparent"/>
            <circle cx="${cx}" cy="${cy}" r="${R}" fill="${n2.color}" stroke="${sc}" stroke-width="${sw}" pointer-events="none"/>
            <text x="${cx}" y="${Math.trunc(n2.y + R + 12)}" text-anchor="middle" font-size="11" font-weight="600" fill="${labelFill}" pointer-events="none">${escapeHtmlText(lbl)}</text>
        </g>`;
    }).join("");
    return `${bg}<g>${eStr}</g><g>${nStr}</g>`;
  }
  function buildNeighborhoodData(selName, nodes, visibleEdges, W, H2) {
    const neighborEdges = visibleEdges.filter(
      (e2) => nodes[e2.ai].nombre === selName || nodes[e2.bi].nombre === selName
    );
    const memberNames = new Set(
      neighborEdges.flatMap((e2) => [nodes[e2.ai].nombre, nodes[e2.bi].nombre])
    );
    memberNames.add(selName);
    const rng = makeRng(61453);
    const subNameToIdx = {};
    const subNodes = nodes.filter((n2) => memberNames.has(n2.nombre)).map((n2, i2) => {
      subNameToIdx[n2.nombre] = i2;
      return {
        nombre: n2.nombre,
        label: n2.label,
        color: n2.color,
        x: (0.15 + rng() * 0.7) * W,
        y: (0.15 + rng() * 0.7) * H2,
        fx: 0,
        fy: 0
      };
    });
    const subEdges = neighborEdges.map((e2) => ({
      ai: subNameToIdx[nodes[e2.ai].nombre],
      bi: subNameToIdx[nodes[e2.bi].nombre],
      type: e2.type
    })).filter((e2) => e2.ai !== void 0 && e2.bi !== void 0);
    runForce(subNodes, subEdges, W, H2);
    return { nodes: subNodes, edges: subEdges };
  }
  function containerW() {
    return document.getElementById("map-content")?.clientWidth || 340;
  }
  function createEmotionMap({ emociones: emociones2, getDisplayName, t: t2, showDetail }) {
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
      const { nodes, edges, H: H2 } = view === "graph" ? forceData : quadData;
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
          edges.filter((e2) => activeTypes.has(e2.type)),
          W,
          H2
        );
        svgNodes = hood.nodes;
        svgEdges = hood.edges;
        svgActiveQuadrant = null;
      } else {
        svgNodes = nodes;
        svgEdges = edges;
        svgActiveQuadrant = activeQuadrant;
      }
      const infoHtml = buildInfoPanel(selected, nodes, edges, dark, t2, getDisplayName);
      const activeC = dark ? "bg-slate-100 text-slate-900 border-slate-100" : "bg-slate-800 text-white border-slate-800";
      const inactiveC = dark ? "bg-slate-800 text-slate-400 border-slate-600" : "bg-white text-slate-500 border-slate-200";
      const canvasBg = dark ? "#0f172a" : "#f8fafc";
      const legendItems = buildLegendItems(dark, activeTypes, t2);
      const effectiveQuadrant = isNeighborhood ? null : activeQuadrant;
      const quadrantBtns = buildQuadrantBtns(effectiveQuadrant, activeC, inactiveC, t2);
      const hasMatch = hasNameFilterMatch(nameFilter, selected, nodes);
      wrap.innerHTML = `
            <div class="flex gap-2 mb-2">
                <button id="map-graph-btn" class="flex-1 py-2 text-sm font-bold rounded-xl border transition-colors ${view === "graph" ? activeC : inactiveC}">${t2("map.viewGraph")}</button>
                <button id="map-quad-btn"  class="flex-1 py-2 text-sm font-bold rounded-xl border transition-colors ${view === "quad" ? activeC : inactiveC}">${t2("map.viewQuad")}</button>
            </div>
            <div class="flex flex-wrap gap-x-3 gap-y-1 mb-2" role="list" aria-label="${t2("map.legendLabel")}">
                ${legendItems}
            </div>
            <div class="flex flex-wrap gap-1.5 mb-2">
                ${quadrantBtns}
            </div>
            <div class="relative mb-2">
                <input id="map-search" type="text" autocomplete="off"
                    placeholder="${t2("map.searchPlaceholder")}"
                    value="${escapeHtmlAttr(nameFilter)}"
                    class="w-full text-[13px] px-3 py-1.5 rounded-xl border transition-colors
                        ${dark ? "bg-slate-800 border-slate-600 text-slate-200 placeholder:text-slate-500" : "bg-white border-slate-200 text-slate-700 placeholder:text-slate-400"}">
                <ul id="map-suggestions" role="listbox"
                    class="absolute z-20 w-full mt-1 rounded-xl border shadow-lg max-h-48 overflow-y-auto hidden
                        ${dark ? "bg-slate-800 border-slate-600" : "bg-white border-slate-200"}">
                </ul>
            </div>
            <p id="map-hint" class="text-[11px] text-slate-400 mb-1.5 px-0.5">
                ${selected ? t2("map.hintSelected") : t2("map.hint")}
            </p>
            <div class="rounded-2xl overflow-hidden" style="background:${canvasBg}">
                <svg id="map-svg" viewBox="0 0 ${W} ${H2}" style="width:100%;display:block;touch-action:pan-y" role="img" aria-label="${t2("nav.mapa")}">
                    ${svgBody(svgNodes, svgEdges, W, H2, selected, view, { t: t2, activeTypes, activeQuadrant: svgActiveQuadrant, nameFilter })}
                </svg>
            </div>
            <p id="map-empty" class="${hasMatch ? "hidden" : ""} text-[13px] text-center text-slate-400 mt-4 py-2">${t2("map.searchEmpty")}</p>
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
      const { nodes, edges, H: H2 } = view === "graph" ? forceData : quadData;
      const W = containerW();
      const isNeighborhood = view === "graph" && selected !== null;
      let svgNodes, svgEdges, svgActiveQuadrant;
      if (isNeighborhood) {
        const hood = buildNeighborhoodData(
          selected,
          nodes,
          edges.filter((e2) => activeTypes.has(e2.type)),
          W,
          H2
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
          H2,
          selected,
          view,
          { t: t2, activeTypes, activeQuadrant: svgActiveQuadrant, nameFilter }
        );
        bindSvgEvents(svg);
      }
      const hasMatch = hasNameFilterMatch(nameFilter, selected, nodes);
      const emptyEl = wrap.querySelector("#map-empty");
      if (emptyEl) emptyEl.classList.toggle("hidden", hasMatch);
      const hintEl = wrap.querySelector("#map-hint");
      if (hintEl) hintEl.textContent = selected ? t2("map.hintSelected") : t2("map.hint");
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
          const q2 = btn.dataset.quad;
          activeQuadrant = q2 === "all" ? null : Number(q2);
          selected = null;
          render();
        });
      }
      wrap.querySelector("#map-open-btn")?.addEventListener("click", () => {
        const e2 = emociones2.find((em) => em.nombre === selected);
        if (e2) showDetail(e2);
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
          const matches = emociones2.filter((e2) => normalizeText(getDisplayName(e2.nombre)).includes(norm)).slice(0, 8);
          if (!matches.length) {
            hideSuggestions();
            return;
          }
          suggestionsList.innerHTML = matches.map(
            (e2) => `<li role="option" tabindex="-1" data-nombre="${escapeHtmlAttr(e2.nombre)}"
                        class="px-3 py-2 text-[13px] cursor-pointer transition-colors ${itemC}">
                        ${escapeHtmlText(getDisplayName(e2.nombre))}
                    </li>`
          ).join("");
          suggestionsList.classList.remove("hidden");
        };
        const trySelectExact = () => {
          const norm = normalizeText(nameFilter);
          const found = norm && emociones2.find(
            (e2) => normalizeText(getDisplayName(e2.nombre)) === norm
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
            const e2 = emociones2.find((em) => em.nombre === li.dataset.nombre);
            if (e2) {
              nameFilter = getDisplayName(e2.nombre);
              selected = e2.nombre;
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
      if (forceData) for (const n2 of forceData.nodes) n2.label = getDisplayName(n2.nombre);
      if (quadData) for (const n2 of quadData.nodes) n2.label = getDisplayName(n2.nombre);
      if (document.getElementById("map-content")) render();
    }
    return { renderForTab, onLanguageChanged };
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
  function m(n2, l2) {
    for (var u3 in l2) n2[u3] = l2[u3];
    return n2;
  }
  function b(n2) {
    n2 && n2.parentNode && n2.parentNode.removeChild(n2);
  }
  function k(l2, u3, t2) {
    var i2, r2, o2, e2 = {};
    for (o2 in u3) "key" == o2 ? i2 = u3[o2] : "ref" == o2 ? r2 = u3[o2] : e2[o2] = u3[o2];
    if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps) for (o2 in l2.defaultProps) void 0 === e2[o2] && (e2[o2] = l2.defaultProps[o2]);
    return x(l2, e2, i2, r2, null);
  }
  function x(n2, t2, i2, r2, o2) {
    var e2 = { type: n2, props: t2, key: i2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o2 ? ++u : o2, __i: -1, __u: 0 };
    return null == o2 && null != l.vnode && l.vnode(e2), e2;
  }
  function S(n2) {
    return n2.children;
  }
  function C(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function $(n2, l2) {
    if (null == l2) return n2.__ ? $(n2.__, n2.__i + 1) : null;
    for (var u3; l2 < n2.__k.length; l2++) if (null != (u3 = n2.__k[l2]) && null != u3.__e) return u3.__e;
    return "function" == typeof n2.type ? $(n2) : null;
  }
  function I(n2) {
    if (n2.__P && n2.__d) {
      var u3 = n2.__v, t2 = u3.__e, i2 = [], r2 = [], o2 = m({}, u3);
      o2.__v = u3.__v + 1, l.vnode && l.vnode(o2), q(n2.__P, o2, u3, n2.__n, n2.__P.namespaceURI, 32 & u3.__u ? [t2] : null, i2, null == t2 ? $(u3) : t2, !!(32 & u3.__u), r2), o2.__v = u3.__v, o2.__.__k[o2.__i] = o2, D(i2, o2, r2), u3.__e = u3.__ = null, o2.__e != t2 && P(o2);
    }
  }
  function P(n2) {
    if (null != (n2 = n2.__) && null != n2.__c) return n2.__e = n2.__c.base = null, n2.__k.some(function(l2) {
      if (null != l2 && null != l2.__e) return n2.__e = n2.__c.base = l2.__e;
    }), P(n2);
  }
  function A(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !H.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(H);
  }
  function H() {
    try {
      for (var n2, l2 = 1; i.length; ) i.length > l2 && i.sort(e), n2 = i.shift(), l2 = i.length, I(n2);
    } finally {
      i.length = H.__r = 0;
    }
  }
  function L(n2, l2, u3, t2, i2, r2, o2, e2, f3, c2, s2) {
    var a2, h2, p2, v2, y2, _2, g2, m2 = t2 && t2.__k || w, b2 = l2.length;
    for (f3 = T(u3, l2, m2, f3, b2), a2 = 0; a2 < b2; a2++) null != (p2 = u3.__k[a2]) && (h2 = -1 != p2.__i && m2[p2.__i] || d, p2.__i = a2, _2 = q(n2, p2, h2, i2, r2, o2, e2, f3, c2, s2), v2 = p2.__e, p2.ref && h2.ref != p2.ref && (h2.ref && J(h2.ref, null, p2), s2.push(p2.ref, p2.__c || v2, p2)), null == y2 && null != v2 && (y2 = v2), (g2 = !!(4 & p2.__u)) || h2.__k === p2.__k ? (f3 = j(p2, f3, n2, g2), g2 && h2.__e && (h2.__e = null)) : "function" == typeof p2.type && void 0 !== _2 ? f3 = _2 : v2 && (f3 = v2.nextSibling), p2.__u &= -7);
    return u3.__e = y2, f3;
  }
  function T(n2, l2, u3, t2, i2) {
    var r2, o2, e2, f3, c2, s2 = u3.length, a2 = s2, h2 = 0;
    for (n2.__k = new Array(i2), r2 = 0; r2 < i2; r2++) null != (o2 = l2[r2]) && "boolean" != typeof o2 && "function" != typeof o2 ? ("string" == typeof o2 || "number" == typeof o2 || "bigint" == typeof o2 || o2.constructor == String ? o2 = n2.__k[r2] = x(null, o2, null, null, null) : g(o2) ? o2 = n2.__k[r2] = x(S, { children: o2 }, null, null, null) : void 0 === o2.constructor && o2.__b > 0 ? o2 = n2.__k[r2] = x(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : n2.__k[r2] = o2, f3 = r2 + h2, o2.__ = n2, o2.__b = n2.__b + 1, e2 = null, -1 != (c2 = o2.__i = O(o2, u3, f3, a2)) && (a2--, (e2 = u3[c2]) && (e2.__u |= 2)), null == e2 || null == e2.__v ? (-1 == c2 && (i2 > s2 ? h2-- : i2 < s2 && h2++), "function" != typeof o2.type && (o2.__u |= 4)) : c2 != f3 && (c2 == f3 - 1 ? h2-- : c2 == f3 + 1 ? h2++ : (c2 > f3 ? h2-- : h2++, o2.__u |= 4))) : n2.__k[r2] = null;
    if (a2) for (r2 = 0; r2 < s2; r2++) null != (e2 = u3[r2]) && 0 == (2 & e2.__u) && (e2.__e == t2 && (t2 = $(e2)), K(e2, e2));
    return t2;
  }
  function j(n2, l2, u3, t2) {
    var i2, r2;
    if ("function" == typeof n2.type) {
      for (i2 = n2.__k, r2 = 0; i2 && r2 < i2.length; r2++) i2[r2] && (i2[r2].__ = n2, l2 = j(i2[r2], l2, u3, t2));
      return l2;
    }
    n2.__e != l2 && (t2 && (l2 && n2.type && !l2.parentNode && (l2 = $(n2)), u3.insertBefore(n2.__e, l2 || null)), l2 = n2.__e);
    do {
      l2 = l2 && l2.nextSibling;
    } while (null != l2 && 8 == l2.nodeType);
    return l2;
  }
  function O(n2, l2, u3, t2) {
    var i2, r2, o2, e2 = n2.key, f3 = n2.type, c2 = l2[u3], s2 = null != c2 && 0 == (2 & c2.__u);
    if (null === c2 && null == e2 || s2 && e2 == c2.key && f3 == c2.type) return u3;
    if (t2 > (s2 ? 1 : 0)) {
      for (i2 = u3 - 1, r2 = u3 + 1; i2 >= 0 || r2 < l2.length; ) if (null != (c2 = l2[o2 = i2 >= 0 ? i2-- : r2++]) && 0 == (2 & c2.__u) && e2 == c2.key && f3 == c2.type) return o2;
    }
    return -1;
  }
  function z(n2, l2, u3) {
    "-" == l2[0] ? n2.setProperty(l2, null == u3 ? "" : u3) : n2[l2] = null == u3 ? "" : "number" != typeof u3 || _.test(l2) ? u3 : u3 + "px";
  }
  function N(n2, l2, u3, t2, i2) {
    var r2, o2;
    n: if ("style" == l2) if ("string" == typeof u3) n2.style.cssText = u3;
    else {
      if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u3 && l2 in u3 || z(n2.style, l2, "");
      if (u3) for (l2 in u3) t2 && u3[l2] == t2[l2] || z(n2.style, l2, u3[l2]);
    }
    else if ("o" == l2[0] && "n" == l2[1]) r2 = l2 != (l2 = l2.replace(a, "$1")), o2 = l2.toLowerCase(), l2 = o2 in n2 || "onFocusOut" == l2 || "onFocusIn" == l2 ? o2.slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u3, u3 ? t2 ? u3[s] = t2[s] : (u3[s] = h, n2.addEventListener(l2, r2 ? v : p, r2)) : n2.removeEventListener(l2, r2 ? v : p, r2);
    else {
      if ("http://www.w3.org/2000/svg" == i2) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
        n2[l2] = null == u3 ? "" : u3;
        break n;
      } catch (n3) {
      }
      "function" == typeof u3 || (null == u3 || false === u3 && "-" != l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u3 ? "" : u3));
    }
  }
  function V(n2) {
    return function(u3) {
      if (this.l) {
        var t2 = this.l[u3.type + n2];
        if (null == u3[c]) u3[c] = h++;
        else if (u3[c] < t2[s]) return;
        return t2(l.event ? l.event(u3) : u3);
      }
    };
  }
  function q(n2, u3, t2, i2, r2, o2, e2, f3, c2, s2) {
    var a2, h2, p2, v2, y2, d2, _2, k2, x2, M, $2, I2, P2, A2, H2, T2 = u3.type;
    if (void 0 !== u3.constructor) return null;
    128 & t2.__u && (c2 = !!(32 & t2.__u), o2 = [f3 = u3.__e = t2.__e]), (a2 = l.__b) && a2(u3);
    n: if ("function" == typeof T2) try {
      if (k2 = u3.props, x2 = T2.prototype && T2.prototype.render, M = (a2 = T2.contextType) && i2[a2.__c], $2 = a2 ? M ? M.props.value : a2.__ : i2, t2.__c ? _2 = (h2 = u3.__c = t2.__c).__ = h2.__E : (x2 ? u3.__c = h2 = new T2(k2, $2) : (u3.__c = h2 = new C(k2, $2), h2.constructor = T2, h2.render = Q), M && M.sub(h2), h2.state || (h2.state = {}), h2.__n = i2, p2 = h2.__d = true, h2.__h = [], h2._sb = []), x2 && null == h2.__s && (h2.__s = h2.state), x2 && null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = m({}, h2.__s)), m(h2.__s, T2.getDerivedStateFromProps(k2, h2.__s))), v2 = h2.props, y2 = h2.state, h2.__v = u3, p2) x2 && null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), x2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
      else {
        if (x2 && null == T2.getDerivedStateFromProps && k2 !== v2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(k2, $2), u3.__v == t2.__v || !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(k2, h2.__s, $2)) {
          u3.__v != t2.__v && (h2.props = k2, h2.state = h2.__s, h2.__d = false), u3.__e = t2.__e, u3.__k = t2.__k, u3.__k.some(function(n3) {
            n3 && (n3.__ = u3);
          }), w.push.apply(h2.__h, h2._sb), h2._sb = [], h2.__h.length && e2.push(h2);
          break n;
        }
        null != h2.componentWillUpdate && h2.componentWillUpdate(k2, h2.__s, $2), x2 && null != h2.componentDidUpdate && h2.__h.push(function() {
          h2.componentDidUpdate(v2, y2, d2);
        });
      }
      if (h2.context = $2, h2.props = k2, h2.__P = n2, h2.__e = false, I2 = l.__r, P2 = 0, x2) h2.state = h2.__s, h2.__d = false, I2 && I2(u3), a2 = h2.render(h2.props, h2.state, h2.context), w.push.apply(h2.__h, h2._sb), h2._sb = [];
      else do {
        h2.__d = false, I2 && I2(u3), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
      } while (h2.__d && ++P2 < 25);
      h2.state = h2.__s, null != h2.getChildContext && (i2 = m(m({}, i2), h2.getChildContext())), x2 && !p2 && null != h2.getSnapshotBeforeUpdate && (d2 = h2.getSnapshotBeforeUpdate(v2, y2)), A2 = null != a2 && a2.type === S && null == a2.key ? E(a2.props.children) : a2, f3 = L(n2, g(A2) ? A2 : [A2], u3, t2, i2, r2, o2, e2, f3, c2, s2), h2.base = u3.__e, u3.__u &= -161, h2.__h.length && e2.push(h2), _2 && (h2.__E = h2.__ = null);
    } catch (n3) {
      if (u3.__v = null, c2 || null != o2) if (n3.then) {
        for (u3.__u |= c2 ? 160 : 128; f3 && 8 == f3.nodeType && f3.nextSibling; ) f3 = f3.nextSibling;
        o2[o2.indexOf(f3)] = null, u3.__e = f3;
      } else {
        for (H2 = o2.length; H2--; ) b(o2[H2]);
        B(u3);
      }
      else u3.__e = t2.__e, u3.__k = t2.__k, n3.then || B(u3);
      l.__e(n3, u3, t2);
    }
    else null == o2 && u3.__v == t2.__v ? (u3.__k = t2.__k, u3.__e = t2.__e) : f3 = u3.__e = G(t2.__e, u3, t2, i2, r2, o2, e2, c2, s2);
    return (a2 = l.diffed) && a2(u3), 128 & u3.__u ? void 0 : f3;
  }
  function B(n2) {
    n2 && (n2.__c && (n2.__c.__e = true), n2.__k && n2.__k.some(B));
  }
  function D(n2, u3, t2) {
    for (var i2 = 0; i2 < t2.length; i2++) J(t2[i2], t2[++i2], t2[++i2]);
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function E(n2) {
    return "object" != typeof n2 || null == n2 || n2.__b > 0 ? n2 : g(n2) ? n2.map(E) : m({}, n2);
  }
  function G(u3, t2, i2, r2, o2, e2, f3, c2, s2) {
    var a2, h2, p2, v2, y2, w2, _2, m2 = i2.props || d, k2 = t2.props, x2 = t2.type;
    if ("svg" == x2 ? o2 = "http://www.w3.org/2000/svg" : "math" == x2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != e2) {
      for (a2 = 0; a2 < e2.length; a2++) if ((y2 = e2[a2]) && "setAttribute" in y2 == !!x2 && (x2 ? y2.localName == x2 : 3 == y2.nodeType)) {
        u3 = y2, e2[a2] = null;
        break;
      }
    }
    if (null == u3) {
      if (null == x2) return document.createTextNode(k2);
      u3 = document.createElementNS(o2, x2, k2.is && k2), c2 && (l.__m && l.__m(t2, e2), c2 = false), e2 = null;
    }
    if (null == x2) m2 === k2 || c2 && u3.data == k2 || (u3.data = k2);
    else {
      if (e2 = e2 && n.call(u3.childNodes), !c2 && null != e2) for (m2 = {}, a2 = 0; a2 < u3.attributes.length; a2++) m2[(y2 = u3.attributes[a2]).name] = y2.value;
      for (a2 in m2) y2 = m2[a2], "dangerouslySetInnerHTML" == a2 ? p2 = y2 : "children" == a2 || a2 in k2 || "value" == a2 && "defaultValue" in k2 || "checked" == a2 && "defaultChecked" in k2 || N(u3, a2, null, y2, o2);
      for (a2 in k2) y2 = k2[a2], "children" == a2 ? v2 = y2 : "dangerouslySetInnerHTML" == a2 ? h2 = y2 : "value" == a2 ? w2 = y2 : "checked" == a2 ? _2 = y2 : c2 && "function" != typeof y2 || m2[a2] === y2 || N(u3, a2, y2, m2[a2], o2);
      if (h2) c2 || p2 && (h2.__html == p2.__html || h2.__html == u3.innerHTML) || (u3.innerHTML = h2.__html), t2.__k = [];
      else if (p2 && (u3.innerHTML = ""), L("template" == t2.type ? u3.content : u3, g(v2) ? v2 : [v2], t2, i2, r2, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o2, e2, f3, e2 ? e2[0] : i2.__k && $(i2, 0), c2, s2), null != e2) for (a2 = e2.length; a2--; ) b(e2[a2]);
      c2 || (a2 = "value", "progress" == x2 && null == w2 ? u3.removeAttribute("value") : null != w2 && (w2 !== u3[a2] || "progress" == x2 && !w2 || "option" == x2 && w2 != m2[a2]) && N(u3, a2, w2, m2[a2], o2), a2 = "checked", null != _2 && _2 != u3[a2] && N(u3, a2, _2, m2[a2], o2));
    }
    return u3;
  }
  function J(n2, u3, t2) {
    try {
      if ("function" == typeof n2) {
        var i2 = "function" == typeof n2.__u;
        i2 && n2.__u(), i2 && null == u3 || (n2.__u = n2(u3));
      } else n2.current = u3;
    } catch (n3) {
      l.__e(n3, t2);
    }
  }
  function K(n2, u3, t2) {
    var i2, r2;
    if (l.unmount && l.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current != n2.__e || J(i2, null, u3)), null != (i2 = n2.__c)) {
      if (i2.componentWillUnmount) try {
        i2.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u3);
      }
      i2.base = i2.__P = null;
    }
    if (i2 = n2.__k) for (r2 = 0; r2 < i2.length; r2++) i2[r2] && K(i2[r2], u3, t2 || "function" != typeof n2.type);
    t2 || b(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
  }
  function Q(n2, l2, u3) {
    return this.constructor(n2, u3);
  }
  function R2(u3, t2, i2) {
    var r2, o2, e2, f3;
    t2 == document && (t2 = document.documentElement), l.__ && l.__(u3, t2), o2 = (r2 = "function" == typeof i2) ? null : i2 && i2.__k || t2.__k, e2 = [], f3 = [], q(t2, u3 = (!r2 && i2 || t2).__k = k(S, null, [u3]), o2 || d, d, t2.namespaceURI, !r2 && i2 ? [i2] : o2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, e2, !r2 && i2 ? i2 : o2 ? o2.__e : t2.firstChild, r2, f3), D(e2, u3, f3);
  }
  n = w.slice, l = { __e: function(n2, l2, u3, t2) {
    for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
      if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
    } catch (l3) {
      n2 = l3;
    }
    throw n2;
  } }, u = 0, t = function(n2) {
    return null != n2 && void 0 === n2.constructor;
  }, C.prototype.setState = function(n2, l2) {
    var u3;
    u3 = null != this.__s && this.__s != this.state ? this.__s : this.__s = m({}, this.state), "function" == typeof n2 && (n2 = n2(m({}, u3), this.props)), n2 && m(u3, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), A(this));
  }, C.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), A(this));
  }, C.prototype.render = S, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l2) {
    return n2.__v.__b - l2.__v.__b;
  }, H.__r = 0, f = Math.random().toString(8), c = "__d" + f, s = "__a" + f, a = /(PointerCapture)$|Capture$/i, h = 0, p = V(false), v = V(true), y = 0;

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f2 = 0;
  function u2(e2, t2, n2, o2, i2, u3) {
    t2 || (t2 = {});
    var a2, c2, p2 = t2;
    if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
    var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
    if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
    return l.vnode && l.vnode(l2), l2;
  }

  // js/crisis.jsx
  var TOTAL_STEPS = 3;
  function Progress({ t: t2, step }) {
    return /* @__PURE__ */ u2("div", { class: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ u2("span", { class: "text-xs font-bold text-slate-400", children: [
        t2("crisis.step"),
        " ",
        step,
        " ",
        t2("crisis.of"),
        " ",
        TOTAL_STEPS
      ] }),
      /* @__PURE__ */ u2("div", { class: "flex gap-1.5", children: Array.from({ length: TOTAL_STEPS }, (_2, i2) => /* @__PURE__ */ u2("div", { class: `h-1.5 w-8 rounded-full ${i2 < step ? "bg-slate-800" : "bg-slate-200"}` })) })
    ] });
  }
  function Step1({ t: t2, onNext }) {
    return /* @__PURE__ */ u2("div", { children: [
      /* @__PURE__ */ u2("div", { class: "text-center mb-8", children: [
        /* @__PURE__ */ u2("div", { class: "text-5xl mb-4", "aria-hidden": "true", children: "\u{1F30A}" }),
        /* @__PURE__ */ u2("h3", { class: "text-2xl font-black text-slate-800 mb-3", children: t2("crisis.step1Title") }),
        /* @__PURE__ */ u2("p", { class: "text-slate-600 leading-relaxed", children: t2("crisis.step1Body") })
      ] }),
      /* @__PURE__ */ u2(
        "button",
        {
          id: "crisis-next-btn",
          type: "button",
          onClick: onNext,
          class: "w-full bg-slate-800 text-white py-4 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-colors",
          children: t2("crisis.next")
        }
      )
    ] });
  }
  function Step2({ t: t2, onNext }) {
    const items = t2("crisis.step2Items").split("|");
    return /* @__PURE__ */ u2("div", { children: [
      /* @__PURE__ */ u2("div", { class: "mb-6", children: [
        /* @__PURE__ */ u2("h3", { class: "text-2xl font-black text-slate-800 mb-1", children: t2("crisis.step2Title") }),
        /* @__PURE__ */ u2("p", { class: "text-slate-500 text-sm mb-4", children: t2("crisis.step2Intro") }),
        /* @__PURE__ */ u2("ul", { class: "divide-y divide-slate-100", children: items.map((item, i2) => /* @__PURE__ */ u2("li", { class: "flex items-center gap-3 py-2.5 border-b border-slate-100 last:border-0", children: [
          /* @__PURE__ */ u2("span", { class: "w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 text-xs font-black flex items-center justify-center shrink-0", children: items.length - i2 }),
          /* @__PURE__ */ u2("span", { class: "text-slate-700 font-medium text-sm", children: item })
        ] }, i2)) })
      ] }),
      /* @__PURE__ */ u2(
        "button",
        {
          id: "crisis-next-btn",
          type: "button",
          onClick: onNext,
          class: "w-full bg-slate-800 text-white py-4 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-colors",
          children: t2("crisis.done")
        }
      )
    ] });
  }
  function Step3({ t: t2, onClose }) {
    const actions = t2("crisis.step3Actions").split("|");
    return /* @__PURE__ */ u2("div", { children: [
      /* @__PURE__ */ u2("div", { class: "mb-6", children: [
        /* @__PURE__ */ u2("h3", { class: "text-2xl font-black text-slate-800 mb-1", children: t2("crisis.step3Title") }),
        /* @__PURE__ */ u2("p", { class: "text-slate-500 text-sm mb-4", children: t2("crisis.step3Intro") }),
        /* @__PURE__ */ u2("div", { class: "divide-y divide-slate-100", children: actions.map((action, i2) => /* @__PURE__ */ u2("label", { class: "flex items-center gap-3 py-3 cursor-pointer group", children: [
          /* @__PURE__ */ u2(
            "input",
            {
              type: "radio",
              name: "crisis-action",
              value: String(i2),
              class: "w-4 h-4 accent-slate-800 shrink-0"
            }
          ),
          /* @__PURE__ */ u2("span", { class: "text-slate-700 font-medium text-sm group-hover:text-slate-900 transition-colors", children: action })
        ] }, i2)) })
      ] }),
      /* @__PURE__ */ u2("p", { class: "text-slate-400 text-xs text-center mb-4", children: t2("crisis.step3End") }),
      /* @__PURE__ */ u2(
        "button",
        {
          id: "crisis-close-btn",
          type: "button",
          onClick: onClose,
          class: "w-full bg-slate-800 text-white py-4 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-colors",
          children: t2("crisis.close")
        }
      )
    ] });
  }
  function CrisisFlow({ t: t2, step, onNext, onClose }) {
    return /* @__PURE__ */ u2("div", { children: [
      /* @__PURE__ */ u2(Progress, { t: t2, step }),
      step === 1 && /* @__PURE__ */ u2(Step1, { t: t2, onNext }),
      step === 2 && /* @__PURE__ */ u2(Step2, { t: t2, onNext }),
      step === 3 && /* @__PURE__ */ u2(Step3, { t: t2, onClose })
    ] });
  }
  function closeCrisis() {
    document.getElementById("crisis-panel")?.close();
    document.getElementById("crisis-trigger-btn")?.focus();
  }
  function createCrisisFlow({ t: t2 }) {
    let step = 1;
    let contentEl = null;
    function rerender() {
      R2(
        /* @__PURE__ */ u2(CrisisFlow, { t: t2, step, onNext: handleNext, onClose: closeCrisis }),
        contentEl
      );
    }
    function handleNext() {
      if (step >= TOTAL_STEPS) return;
      step++;
      rerender();
    }
    function open() {
      const dialog = document.getElementById("crisis-panel");
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
  function getTheme() {
    return localStorage.getItem(THEME_KEY) || "auto";
  }
  function applyTheme(theme, getLang) {
    const prefersDark = globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
    if (theme === "dark" || theme === "auto" && prefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem(THEME_KEY, theme);
    updateActiveStates(theme, getLang());
  }
  function updateActiveStates(theme, lang) {
    for (const t2 of ["light", "auto", "dark"]) {
      document.getElementById(`theme-btn-${t2}`)?.classList.toggle("settings-option-active", t2 === theme);
    }
    for (const l2 of ["es", "en"]) {
      document.getElementById(`lang-btn-${l2}`)?.classList.toggle("settings-option-active", l2 === lang);
    }
  }
  function initSettings({ setLanguage, getLang }) {
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
      btn.addEventListener("click", () => applyTheme(btn.dataset.themeBtn, getLang));
    }
    for (const btn of settingsPanel.querySelectorAll("[data-lang-btn]")) {
      btn.addEventListener("click", () => {
        setLanguage(btn.dataset.langBtn);
        updateActiveStates(getTheme(), getLang());
      });
    }
    globalThis.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      if (getTheme() === "auto") applyTheme("auto", getLang);
    });
    updateActiveStates(getTheme(), getLang());
    return { applyTheme: (theme) => applyTheme(theme, getLang), getTheme, updateActiveStates };
  }

  // js/install.js
  function isIosDevice() {
    const ua = navigator.userAgent.toLowerCase();
    const touchMac = ua.includes("macintosh") && navigator.maxTouchPoints > 1;
    return /iphone|ipad|ipod/.test(ua) || touchMac;
  }
  function isStandalone() {
    return globalThis.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
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

  // js/offlineBanner.js
  function initOfflineBanner({ t: t2 }) {
    const banner = document.getElementById("offline-banner");
    const text = document.getElementById("offline-banner-text");
    if (!banner || !text) return;
    const update = () => {
      text.textContent = t2("offlineBanner");
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

  // js/version.js
  var BUILD_VERSION = "mp9ekju7";

  // app.js
  var reducedMotion = globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  var modalAnimationMs = reducedMotion ? 0 : 200;
  var ui;
  var diary;
  var quiz;
  var emotionMap;
  var i18n = createI18n({
    getLang: () => get("currentLang"),
    setLang: (lang) => set("currentLang", lang),
    onLanguageChanged: () => {
      ui.renderCheckinTab();
      ui.renderRecentEmotions();
      ui.renderEmociones(document.getElementById("search")?.value ?? "");
      if (get("currentTab") === "diario") diary.renderForTab();
      emotionMap?.onLanguageChanged();
      const bannerText = document.getElementById("offline-banner-text");
      if (bannerText) bannerText.textContent = i18n.t("offlineBanner");
    }
  });
  diary = createDiary({
    t: i18n.t,
    getDisplayName: i18n.getDisplayName,
    emociones
  });
  on("tab:switch", ({ tabId }) => switchTab(tabId));
  on("quiz:open", () => quiz?.open());
  ui = createUI({
    emociones,
    relaciones: EMOTION_RELATIONS,
    getDisplayName: i18n.getDisplayName,
    getEmotionField: i18n.getEmotionField,
    t: i18n.t,
    modalAnimationMs,
    moodCategories: MOOD_CATEGORIES,
    onAddToDiary: (nombre, note) => {
      diary.addEntry(nombre, note);
      if (get("currentTab") === "diario") diary.renderForTab();
    }
  });
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
    set("currentTab", tabId);
    if (tabId === "diario") diary.renderForTab();
    if (tabId === "mapa") emotionMap?.renderForTab();
  }
  function initTabNav() {
    for (const btn of document.querySelectorAll(".nav-tab")) {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    }
  }
  function bootstrap() {
    set("currentLang", i18n.detectInitialLanguage());
    i18n.applyStaticTranslations();
    const versionEl = document.getElementById("build-version");
    if (versionEl) versionEl.textContent = BUILD_VERSION;
    initSettings({ setLanguage: i18n.setLanguage, getLang: () => get("currentLang") });
    initTabNav();
    ui.bindBaseEvents();
    emotionMap = createEmotionMap({
      emociones,
      getDisplayName: i18n.getDisplayName,
      t: i18n.t,
      showDetail: ui.showDetail
    });
    quiz = createQuiz({
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
    const crisis = createCrisisFlow({ t: i18n.t });
    crisis.init();
    initOfflineBanner({ t: i18n.t });
    initInstall();
    initServiceWorker();
  }
  bootstrap();
})();
