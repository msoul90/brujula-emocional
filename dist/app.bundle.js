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
    function t3(key) {
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
          el.textContent = t3("title");
        },
        "app-subtitle": (el) => {
          el.textContent = t3("subtitle");
        },
        "search": (el) => {
          el.placeholder = t3("searchPlaceholder");
        },
        "recent-title": (el) => {
          el.textContent = t3("recentTitle");
        },
        "close-button": (el) => {
          el.textContent = t3("closeButton");
        },
        "share-btn": (el) => {
          el.setAttribute("aria-label", t3("shareButton"));
        },
        "share-btn-label": (el) => {
          el.textContent = t3("shareButton");
        },
        "diary-add-btn": (el) => {
          el.setAttribute("aria-label", t3("diary.addShort"));
        },
        "diary-add-label": (el) => {
          el.textContent = t3("diary.addShort");
        },
        "nav-label-emociones": (el) => {
          el.textContent = t3("nav.emociones");
        },
        "nav-label-checkin": (el) => {
          el.textContent = t3("nav.checkin");
        },
        "nav-label-diario": (el) => {
          el.textContent = t3("nav.diary");
        },
        "nav-label-mapa": (el) => {
          el.textContent = t3("nav.mapa");
        },
        "install-app-button": (el) => {
          el.textContent = t3("install.button");
        },
        "ios-install-title": (el) => {
          el.textContent = t3("install.iosTitle");
        },
        "ios-install-step-1": (el) => {
          el.textContent = t3("install.iosStep1");
        },
        "ios-install-step-2": (el) => {
          el.textContent = t3("install.iosStep2");
        },
        "ios-install-close": (el) => {
          el.textContent = t3("install.iosClose");
        },
        "quiz-trigger-title": (el) => {
          el.textContent = t3("quiz.trigger");
        },
        "quiz-trigger-sub": (el) => {
          el.textContent = t3("quiz.triggerSub");
        },
        "crisis-trigger-title": (el) => {
          el.textContent = t3("crisis.triggerTitle");
        },
        "crisis-trigger-sub": (el) => {
          el.textContent = t3("crisis.triggerSub");
        },
        "crisis-trigger-btn-label": (el) => {
          el.textContent = t3("crisis.triggerBtn");
        },
        "crisis-panel-close": (el) => {
          el.setAttribute("aria-label", t3("crisis.close"));
        },
        "settings-btn": (el) => {
          el.setAttribute("aria-label", t3("settings.label"));
        },
        "settings-theme-label": (el) => {
          el.textContent = t3("settings.themeLabel");
        },
        "settings-lang-label": (el) => {
          el.textContent = t3("langLabel");
        },
        "theme-btn-light": (el) => {
          el.setAttribute("aria-label", t3("settings.themeLight"));
          el.setAttribute("title", t3("settings.themeLight"));
        },
        "theme-btn-auto": (el) => {
          el.setAttribute("aria-label", t3("settings.themeAuto"));
          el.setAttribute("title", t3("settings.themeAuto"));
        },
        "theme-btn-dark": (el) => {
          el.setAttribute("aria-label", t3("settings.themeDark"));
          el.setAttribute("title", t3("settings.themeDark"));
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
      t: t3,
      getDisplayName,
      getEmotionField,
      detectInitialLanguage,
      applyStaticTranslations,
      setLanguage
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
  function m(n2, l3) {
    for (var u4 in l3) n2[u4] = l3[u4];
    return n2;
  }
  function b(n2) {
    n2 && n2.parentNode && n2.parentNode.removeChild(n2);
  }
  function k(l3, u4, t3) {
    var i3, r3, o3, e3 = {};
    for (o3 in u4) "key" == o3 ? i3 = u4[o3] : "ref" == o3 ? r3 = u4[o3] : e3[o3] = u4[o3];
    if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps) for (o3 in l3.defaultProps) void 0 === e3[o3] && (e3[o3] = l3.defaultProps[o3]);
    return x(l3, e3, i3, r3, null);
  }
  function x(n2, t3, i3, r3, o3) {
    var e3 = { type: n2, props: t3, key: i3, ref: r3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o3 ? ++u : o3, __i: -1, __u: 0 };
    return null == o3 && null != l.vnode && l.vnode(e3), e3;
  }
  function S(n2) {
    return n2.children;
  }
  function C(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function $(n2, l3) {
    if (null == l3) return n2.__ ? $(n2.__, n2.__i + 1) : null;
    for (var u4; l3 < n2.__k.length; l3++) if (null != (u4 = n2.__k[l3]) && null != u4.__e) return u4.__e;
    return "function" == typeof n2.type ? $(n2) : null;
  }
  function I(n2) {
    if (n2.__P && n2.__d) {
      var u4 = n2.__v, t3 = u4.__e, i3 = [], r3 = [], o3 = m({}, u4);
      o3.__v = u4.__v + 1, l.vnode && l.vnode(o3), q(n2.__P, o3, u4, n2.__n, n2.__P.namespaceURI, 32 & u4.__u ? [t3] : null, i3, null == t3 ? $(u4) : t3, !!(32 & u4.__u), r3), o3.__v = u4.__v, o3.__.__k[o3.__i] = o3, D(i3, o3, r3), u4.__e = u4.__ = null, o3.__e != t3 && P(o3);
    }
  }
  function P(n2) {
    if (null != (n2 = n2.__) && null != n2.__c) return n2.__e = n2.__c.base = null, n2.__k.some(function(l3) {
      if (null != l3 && null != l3.__e) return n2.__e = n2.__c.base = l3.__e;
    }), P(n2);
  }
  function A(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !H.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(H);
  }
  function H() {
    try {
      for (var n2, l3 = 1; i.length; ) i.length > l3 && i.sort(e), n2 = i.shift(), l3 = i.length, I(n2);
    } finally {
      i.length = H.__r = 0;
    }
  }
  function L(n2, l3, u4, t3, i3, r3, o3, e3, f4, c3, s3) {
    var a3, h3, p3, v3, y3, _2, g2, m3 = t3 && t3.__k || w, b2 = l3.length;
    for (f4 = T(u4, l3, m3, f4, b2), a3 = 0; a3 < b2; a3++) null != (p3 = u4.__k[a3]) && (h3 = -1 != p3.__i && m3[p3.__i] || d, p3.__i = a3, _2 = q(n2, p3, h3, i3, r3, o3, e3, f4, c3, s3), v3 = p3.__e, p3.ref && h3.ref != p3.ref && (h3.ref && J(h3.ref, null, p3), s3.push(p3.ref, p3.__c || v3, p3)), null == y3 && null != v3 && (y3 = v3), (g2 = !!(4 & p3.__u)) || h3.__k === p3.__k ? (f4 = j(p3, f4, n2, g2), g2 && h3.__e && (h3.__e = null)) : "function" == typeof p3.type && void 0 !== _2 ? f4 = _2 : v3 && (f4 = v3.nextSibling), p3.__u &= -7);
    return u4.__e = y3, f4;
  }
  function T(n2, l3, u4, t3, i3) {
    var r3, o3, e3, f4, c3, s3 = u4.length, a3 = s3, h3 = 0;
    for (n2.__k = new Array(i3), r3 = 0; r3 < i3; r3++) null != (o3 = l3[r3]) && "boolean" != typeof o3 && "function" != typeof o3 ? ("string" == typeof o3 || "number" == typeof o3 || "bigint" == typeof o3 || o3.constructor == String ? o3 = n2.__k[r3] = x(null, o3, null, null, null) : g(o3) ? o3 = n2.__k[r3] = x(S, { children: o3 }, null, null, null) : void 0 === o3.constructor && o3.__b > 0 ? o3 = n2.__k[r3] = x(o3.type, o3.props, o3.key, o3.ref ? o3.ref : null, o3.__v) : n2.__k[r3] = o3, f4 = r3 + h3, o3.__ = n2, o3.__b = n2.__b + 1, e3 = null, -1 != (c3 = o3.__i = O(o3, u4, f4, a3)) && (a3--, (e3 = u4[c3]) && (e3.__u |= 2)), null == e3 || null == e3.__v ? (-1 == c3 && (i3 > s3 ? h3-- : i3 < s3 && h3++), "function" != typeof o3.type && (o3.__u |= 4)) : c3 != f4 && (c3 == f4 - 1 ? h3-- : c3 == f4 + 1 ? h3++ : (c3 > f4 ? h3-- : h3++, o3.__u |= 4))) : n2.__k[r3] = null;
    if (a3) for (r3 = 0; r3 < s3; r3++) null != (e3 = u4[r3]) && 0 == (2 & e3.__u) && (e3.__e == t3 && (t3 = $(e3)), K(e3, e3));
    return t3;
  }
  function j(n2, l3, u4, t3) {
    var i3, r3;
    if ("function" == typeof n2.type) {
      for (i3 = n2.__k, r3 = 0; i3 && r3 < i3.length; r3++) i3[r3] && (i3[r3].__ = n2, l3 = j(i3[r3], l3, u4, t3));
      return l3;
    }
    n2.__e != l3 && (t3 && (l3 && n2.type && !l3.parentNode && (l3 = $(n2)), u4.insertBefore(n2.__e, l3 || null)), l3 = n2.__e);
    do {
      l3 = l3 && l3.nextSibling;
    } while (null != l3 && 8 == l3.nodeType);
    return l3;
  }
  function O(n2, l3, u4, t3) {
    var i3, r3, o3, e3 = n2.key, f4 = n2.type, c3 = l3[u4], s3 = null != c3 && 0 == (2 & c3.__u);
    if (null === c3 && null == e3 || s3 && e3 == c3.key && f4 == c3.type) return u4;
    if (t3 > (s3 ? 1 : 0)) {
      for (i3 = u4 - 1, r3 = u4 + 1; i3 >= 0 || r3 < l3.length; ) if (null != (c3 = l3[o3 = i3 >= 0 ? i3-- : r3++]) && 0 == (2 & c3.__u) && e3 == c3.key && f4 == c3.type) return o3;
    }
    return -1;
  }
  function z(n2, l3, u4) {
    "-" == l3[0] ? n2.setProperty(l3, null == u4 ? "" : u4) : n2[l3] = null == u4 ? "" : "number" != typeof u4 || _.test(l3) ? u4 : u4 + "px";
  }
  function N(n2, l3, u4, t3, i3) {
    var r3, o3;
    n: if ("style" == l3) if ("string" == typeof u4) n2.style.cssText = u4;
    else {
      if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3) for (l3 in t3) u4 && l3 in u4 || z(n2.style, l3, "");
      if (u4) for (l3 in u4) t3 && u4[l3] == t3[l3] || z(n2.style, l3, u4[l3]);
    }
    else if ("o" == l3[0] && "n" == l3[1]) r3 = l3 != (l3 = l3.replace(a, "$1")), o3 = l3.toLowerCase(), l3 = o3 in n2 || "onFocusOut" == l3 || "onFocusIn" == l3 ? o3.slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u4, u4 ? t3 ? u4[s] = t3[s] : (u4[s] = h, n2.addEventListener(l3, r3 ? v : p, r3)) : n2.removeEventListener(l3, r3 ? v : p, r3);
    else {
      if ("http://www.w3.org/2000/svg" == i3) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2) try {
        n2[l3] = null == u4 ? "" : u4;
        break n;
      } catch (n3) {
      }
      "function" == typeof u4 || (null == u4 || false === u4 && "-" != l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u4 ? "" : u4));
    }
  }
  function V(n2) {
    return function(u4) {
      if (this.l) {
        var t3 = this.l[u4.type + n2];
        if (null == u4[c]) u4[c] = h++;
        else if (u4[c] < t3[s]) return;
        return t3(l.event ? l.event(u4) : u4);
      }
    };
  }
  function q(n2, u4, t3, i3, r3, o3, e3, f4, c3, s3) {
    var a3, h3, p3, v3, y3, d3, _2, k3, x2, M, $2, I2, P2, A3, H2, T3 = u4.type;
    if (void 0 !== u4.constructor) return null;
    128 & t3.__u && (c3 = !!(32 & t3.__u), o3 = [f4 = u4.__e = t3.__e]), (a3 = l.__b) && a3(u4);
    n: if ("function" == typeof T3) try {
      if (k3 = u4.props, x2 = T3.prototype && T3.prototype.render, M = (a3 = T3.contextType) && i3[a3.__c], $2 = a3 ? M ? M.props.value : a3.__ : i3, t3.__c ? _2 = (h3 = u4.__c = t3.__c).__ = h3.__E : (x2 ? u4.__c = h3 = new T3(k3, $2) : (u4.__c = h3 = new C(k3, $2), h3.constructor = T3, h3.render = Q), M && M.sub(h3), h3.state || (h3.state = {}), h3.__n = i3, p3 = h3.__d = true, h3.__h = [], h3._sb = []), x2 && null == h3.__s && (h3.__s = h3.state), x2 && null != T3.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = m({}, h3.__s)), m(h3.__s, T3.getDerivedStateFromProps(k3, h3.__s))), v3 = h3.props, y3 = h3.state, h3.__v = u4, p3) x2 && null == T3.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), x2 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
      else {
        if (x2 && null == T3.getDerivedStateFromProps && k3 !== v3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(k3, $2), u4.__v == t3.__v || !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(k3, h3.__s, $2)) {
          u4.__v != t3.__v && (h3.props = k3, h3.state = h3.__s, h3.__d = false), u4.__e = t3.__e, u4.__k = t3.__k, u4.__k.some(function(n3) {
            n3 && (n3.__ = u4);
          }), w.push.apply(h3.__h, h3._sb), h3._sb = [], h3.__h.length && e3.push(h3);
          break n;
        }
        null != h3.componentWillUpdate && h3.componentWillUpdate(k3, h3.__s, $2), x2 && null != h3.componentDidUpdate && h3.__h.push(function() {
          h3.componentDidUpdate(v3, y3, d3);
        });
      }
      if (h3.context = $2, h3.props = k3, h3.__P = n2, h3.__e = false, I2 = l.__r, P2 = 0, x2) h3.state = h3.__s, h3.__d = false, I2 && I2(u4), a3 = h3.render(h3.props, h3.state, h3.context), w.push.apply(h3.__h, h3._sb), h3._sb = [];
      else do {
        h3.__d = false, I2 && I2(u4), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
      } while (h3.__d && ++P2 < 25);
      h3.state = h3.__s, null != h3.getChildContext && (i3 = m(m({}, i3), h3.getChildContext())), x2 && !p3 && null != h3.getSnapshotBeforeUpdate && (d3 = h3.getSnapshotBeforeUpdate(v3, y3)), A3 = null != a3 && a3.type === S && null == a3.key ? E(a3.props.children) : a3, f4 = L(n2, g(A3) ? A3 : [A3], u4, t3, i3, r3, o3, e3, f4, c3, s3), h3.base = u4.__e, u4.__u &= -161, h3.__h.length && e3.push(h3), _2 && (h3.__E = h3.__ = null);
    } catch (n3) {
      if (u4.__v = null, c3 || null != o3) if (n3.then) {
        for (u4.__u |= c3 ? 160 : 128; f4 && 8 == f4.nodeType && f4.nextSibling; ) f4 = f4.nextSibling;
        o3[o3.indexOf(f4)] = null, u4.__e = f4;
      } else {
        for (H2 = o3.length; H2--; ) b(o3[H2]);
        B(u4);
      }
      else u4.__e = t3.__e, u4.__k = t3.__k, n3.then || B(u4);
      l.__e(n3, u4, t3);
    }
    else null == o3 && u4.__v == t3.__v ? (u4.__k = t3.__k, u4.__e = t3.__e) : f4 = u4.__e = G(t3.__e, u4, t3, i3, r3, o3, e3, c3, s3);
    return (a3 = l.diffed) && a3(u4), 128 & u4.__u ? void 0 : f4;
  }
  function B(n2) {
    n2 && (n2.__c && (n2.__c.__e = true), n2.__k && n2.__k.some(B));
  }
  function D(n2, u4, t3) {
    for (var i3 = 0; i3 < t3.length; i3++) J(t3[i3], t3[++i3], t3[++i3]);
    l.__c && l.__c(u4, n2), n2.some(function(u5) {
      try {
        n2 = u5.__h, u5.__h = [], n2.some(function(n3) {
          n3.call(u5);
        });
      } catch (n3) {
        l.__e(n3, u5.__v);
      }
    });
  }
  function E(n2) {
    return "object" != typeof n2 || null == n2 || n2.__b > 0 ? n2 : g(n2) ? n2.map(E) : m({}, n2);
  }
  function G(u4, t3, i3, r3, o3, e3, f4, c3, s3) {
    var a3, h3, p3, v3, y3, w3, _2, m3 = i3.props || d, k3 = t3.props, x2 = t3.type;
    if ("svg" == x2 ? o3 = "http://www.w3.org/2000/svg" : "math" == x2 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != e3) {
      for (a3 = 0; a3 < e3.length; a3++) if ((y3 = e3[a3]) && "setAttribute" in y3 == !!x2 && (x2 ? y3.localName == x2 : 3 == y3.nodeType)) {
        u4 = y3, e3[a3] = null;
        break;
      }
    }
    if (null == u4) {
      if (null == x2) return document.createTextNode(k3);
      u4 = document.createElementNS(o3, x2, k3.is && k3), c3 && (l.__m && l.__m(t3, e3), c3 = false), e3 = null;
    }
    if (null == x2) m3 === k3 || c3 && u4.data == k3 || (u4.data = k3);
    else {
      if (e3 = e3 && n.call(u4.childNodes), !c3 && null != e3) for (m3 = {}, a3 = 0; a3 < u4.attributes.length; a3++) m3[(y3 = u4.attributes[a3]).name] = y3.value;
      for (a3 in m3) y3 = m3[a3], "dangerouslySetInnerHTML" == a3 ? p3 = y3 : "children" == a3 || a3 in k3 || "value" == a3 && "defaultValue" in k3 || "checked" == a3 && "defaultChecked" in k3 || N(u4, a3, null, y3, o3);
      for (a3 in k3) y3 = k3[a3], "children" == a3 ? v3 = y3 : "dangerouslySetInnerHTML" == a3 ? h3 = y3 : "value" == a3 ? w3 = y3 : "checked" == a3 ? _2 = y3 : c3 && "function" != typeof y3 || m3[a3] === y3 || N(u4, a3, y3, m3[a3], o3);
      if (h3) c3 || p3 && (h3.__html == p3.__html || h3.__html == u4.innerHTML) || (u4.innerHTML = h3.__html), t3.__k = [];
      else if (p3 && (u4.innerHTML = ""), L("template" == t3.type ? u4.content : u4, g(v3) ? v3 : [v3], t3, i3, r3, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o3, e3, f4, e3 ? e3[0] : i3.__k && $(i3, 0), c3, s3), null != e3) for (a3 = e3.length; a3--; ) b(e3[a3]);
      c3 || (a3 = "value", "progress" == x2 && null == w3 ? u4.removeAttribute("value") : null != w3 && (w3 !== u4[a3] || "progress" == x2 && !w3 || "option" == x2 && w3 != m3[a3]) && N(u4, a3, w3, m3[a3], o3), a3 = "checked", null != _2 && _2 != u4[a3] && N(u4, a3, _2, m3[a3], o3));
    }
    return u4;
  }
  function J(n2, u4, t3) {
    try {
      if ("function" == typeof n2) {
        var i3 = "function" == typeof n2.__u;
        i3 && n2.__u(), i3 && null == u4 || (n2.__u = n2(u4));
      } else n2.current = u4;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function K(n2, u4, t3) {
    var i3, r3;
    if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current != n2.__e || J(i3, null, u4)), null != (i3 = n2.__c)) {
      if (i3.componentWillUnmount) try {
        i3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u4);
      }
      i3.base = i3.__P = null;
    }
    if (i3 = n2.__k) for (r3 = 0; r3 < i3.length; r3++) i3[r3] && K(i3[r3], u4, t3 || "function" != typeof n2.type);
    t3 || b(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
  }
  function Q(n2, l3, u4) {
    return this.constructor(n2, u4);
  }
  function R(u4, t3, i3) {
    var r3, o3, e3, f4;
    t3 == document && (t3 = document.documentElement), l.__ && l.__(u4, t3), o3 = (r3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, e3 = [], f4 = [], q(t3, u4 = (!r3 && i3 || t3).__k = k(S, null, [u4]), o3 || d, d, t3.namespaceURI, !r3 && i3 ? [i3] : o3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, e3, !r3 && i3 ? i3 : o3 ? o3.__e : t3.firstChild, r3, f4), D(e3, u4, f4);
  }
  n = w.slice, l = { __e: function(n2, l3, u4, t3) {
    for (var i3, r3, o3; l3 = l3.__; ) if ((i3 = l3.__c) && !i3.__) try {
      if ((r3 = i3.constructor) && null != r3.getDerivedStateFromError && (i3.setState(r3.getDerivedStateFromError(n2)), o3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), o3 = i3.__d), o3) return i3.__E = i3;
    } catch (l4) {
      n2 = l4;
    }
    throw n2;
  } }, u = 0, t = function(n2) {
    return null != n2 && void 0 === n2.constructor;
  }, C.prototype.setState = function(n2, l3) {
    var u4;
    u4 = null != this.__s && this.__s != this.state ? this.__s : this.__s = m({}, this.state), "function" == typeof n2 && (n2 = n2(m({}, u4), this.props)), n2 && m(u4, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), A(this));
  }, C.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), A(this));
  }, C.prototype.render = S, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l3) {
    return n2.__v.__b - l3.__v.__b;
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
  function p2(n2, t3) {
    c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
    var u4 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u4.__.length && u4.__.push({}), u4.__[n2];
  }
  function d2(n2) {
    return o2 = 1, h2(D2, n2);
  }
  function h2(n2, u4, i3) {
    var o3 = p2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u4) : D2(void 0, u4), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.__f)) {
      var f4 = function(n3, t3, r3) {
        if (!o3.__c.__H) return true;
        var u5 = o3.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u5.every(function(n4) {
          return !n4.__N;
        })) return !c3 || c3.call(this, n3, t3, r3);
        var i4 = o3.__c.props !== n3;
        return u5.some(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), c3 && c3.call(this, n3, t3, r3) || i4;
      };
      r2.__f = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u5 = c3;
          c3 = void 0, f4(n3, t3, r3), c3 = u5;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f4;
    }
    return o3.__N || o3.__;
  }
  function y2(n2, u4) {
    var i3 = p2(t2++, 3);
    !c2.__s && C2(i3.__H, u4) && (i3.__ = n2, i3.u = u4, r2.__H.__h.push(i3));
  }
  function A2(n2) {
    return o2 = 5, T2(function() {
      return { current: n2 };
    }, []);
  }
  function T2(n2, r3) {
    var u4 = p2(t2++, 7);
    return C2(u4.__H, r3) && (u4.__ = n2(), u4.__H = r3, u4.__h = n2), u4.__;
  }
  function j2() {
    for (var n2; n2 = f2.shift(); ) {
      var t3 = n2.__H;
      if (n2.__P && t3) try {
        t3.__h.some(z2), t3.__h.some(B2), t3.__h = [];
      } catch (r3) {
        t3.__h = [], c2.__e(r3, n2.__v);
      }
    }
  }
  c2.__b = function(n2) {
    r2 = null, e2 && e2(n2);
  }, c2.__ = function(n2, t3) {
    n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
  }, c2.__r = function(n2) {
    a2 && a2(n2), t2 = 0;
    var i3 = (r2 = n2.__c).__H;
    i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.some(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = void 0;
    })) : (i3.__h.some(z2), i3.__h.some(B2), i3.__h = [], t2 = 0)), u2 = r2;
  }, c2.diffed = function(n2) {
    v2 && v2(n2);
    var t3 = n2.__c;
    t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.some(function(n3) {
      n3.u && (n3.__H = n3.u), n3.u = void 0;
    })), u2 = r2 = null;
  }, c2.__c = function(n2, t3) {
    t3.some(function(n3) {
      try {
        n3.__h.some(z2), n3.__h = n3.__h.filter(function(n4) {
          return !n4.__ || B2(n4);
        });
      } catch (r3) {
        t3.some(function(n4) {
          n4.__h && (n4.__h = []);
        }), t3 = [], c2.__e(r3, n3.__v);
      }
    }), l2 && l2(n2, t3);
  }, c2.unmount = function(n2) {
    m2 && m2(n2);
    var t3, r3 = n2.__c;
    r3 && r3.__H && (r3.__H.__.some(function(n3) {
      try {
        z2(n3);
      } catch (n4) {
        t3 = n4;
      }
    }), r3.__H = void 0, t3 && c2.__e(t3, r3.__v));
  };
  var k2 = "function" == typeof requestAnimationFrame;
  function w2(n2) {
    var t3, r3 = function() {
      clearTimeout(u4), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u4 = setTimeout(r3, 35);
    k2 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t3 = r2, u4 = n2.__c;
    "function" == typeof u4 && (n2.__c = void 0, u4()), r2 = t3;
  }
  function B2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function C2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function D2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
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
    const r3 = Number.parseInt(safeHex.slice(0, 2), 16);
    const g2 = Number.parseInt(safeHex.slice(2, 4), 16);
    const b2 = Number.parseInt(safeHex.slice(4, 6), 16);
    if ([r3, g2, b2].some(Number.isNaN)) return "#0f172a";
    const luminance = (0.299 * r3 + 0.587 * g2 + 0.114 * b2) / 255;
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

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f3 = 0;
  function u3(e3, t3, n2, o3, i3, u4) {
    t3 || (t3 = {});
    var a3, c3, p3 = t3;
    if ("ref" in p3) for (c3 in p3 = {}, t3) "ref" == c3 ? a3 = t3[c3] : p3[c3] = t3[c3];
    var l3 = { type: e3, props: p3, key: n2, ref: a3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f3, __i: -1, __u: 0, __source: i3, __self: u4 };
    if ("function" == typeof e3 && (a3 = e3.defaultProps)) for (c3 in a3) void 0 === p3[c3] && (p3[c3] = a3[c3]);
    return l.vnode && l.vnode(l3), l3;
  }

  // js/ui.jsx
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
  function roundRectPath(ctx, x2, y3, w3, h3, radii) {
    const [tl, tr, br, bl] = Array.isArray(radii) ? radii : [radii, radii, radii, radii];
    ctx.moveTo(x2 + tl, y3);
    ctx.lineTo(x2 + w3 - tr, y3);
    ctx.arcTo(x2 + w3, y3, x2 + w3, y3 + tr, tr);
    ctx.lineTo(x2 + w3, y3 + h3 - br);
    ctx.arcTo(x2 + w3, y3 + h3, x2 + w3 - br, y3 + h3, br);
    ctx.lineTo(x2 + bl, y3 + h3);
    ctx.arcTo(x2, y3 + h3, x2, y3 + h3 - bl, bl);
    ctx.lineTo(x2, y3 + tl);
    ctx.arcTo(x2, y3, x2 + tl, y3, tl);
    ctx.closePath();
  }
  async function buildEmotionCanvas(e3, displayName, tagLabel, mensaje, responseLabel, respuesta) {
    await document.fonts.load("900 1px Inter").catch(() => {
    });
    const W = 1080, H2 = 1350, PAD2 = 84;
    const SANS = `'Inter', system-ui, -apple-system, sans-serif`;
    const SERIF = `Georgia, "Times New Roman", serif`;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H2;
    const ctx = canvas.getContext("2d");
    const textOnColor = getReadableTextColor(e3.color);
    const tagAlpha = textOnColor === "#f8fafc" ? "rgba(255,255,255,0.6)" : "rgba(15,23,42,0.4)";
    ctx.fillStyle = "#f8fafc";
    ctx.beginPath();
    roundRectPath(ctx, 0, 0, W, H2, 0);
    ctx.fill();
    const ACCENT_H = 320;
    ctx.fillStyle = e3.color;
    ctx.beginPath();
    roundRectPath(ctx, 0, 0, W, ACCENT_H, [0, 0, 0, 0]);
    ctx.fill();
    ctx.fillStyle = tagAlpha;
    ctx.font = `600 26px ${SANS}`;
    ctx.fillText(tagLabel.toUpperCase(), PAD2, 112);
    ctx.fillStyle = textOnColor;
    ctx.font = `900 92px ${SANS}`;
    ctx.fillText(displayName, PAD2, 248);
    let y3 = ACCENT_H + 76;
    ctx.fillStyle = "#475569";
    ctx.font = `italic 42px ${SERIF}`;
    const msgLines = wrapTextLines(ctx, `"${mensaje}"`, W - PAD2 * 2);
    for (const line of msgLines) {
      ctx.fillText(line, PAD2, y3);
      y3 += 64;
    }
    y3 += 48;
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(PAD2, y3);
    ctx.lineTo(W - PAD2, y3);
    ctx.stroke();
    y3 += 56;
    ctx.fillStyle = "#94a3b8";
    ctx.font = `700 22px ${SANS}`;
    ctx.fillText(responseLabel.toUpperCase(), PAD2, y3);
    y3 += 50;
    ctx.fillStyle = "#1e293b";
    ctx.font = `500 38px ${SANS}`;
    const respLines = wrapTextLines(ctx, respuesta, W - PAD2 * 2);
    for (const line of respLines) {
      ctx.fillText(line, PAD2, y3);
      y3 += 58;
    }
    const contentFloor = y3 + 20;
    if (contentFloor < H2 - 220) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, contentFloor, W, H2 - contentFloor);
      ctx.clip();
      ctx.fillStyle = e3.color;
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
    const a3 = document.createElement("a");
    a3.href = url;
    a3.download = `${filename}.png`;
    document.body.appendChild(a3);
    a3.click();
    a3.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
  }
  var MOOD_SVGS = {
    agitado: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true"><circle cx="40" cy="42" r="26" stroke="currentColor" stroke-width="3.5"/><line x1="26" y1="32" x2="34" y2="36" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><line x1="54" y1="32" x2="46" y2="36" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="32" cy="42" r="2" fill="currentColor"/><circle cx="48" cy="42" r="2" fill="currentColor"/><path d="M30 54 L34 50 L38 54 L42 50 L46 54 L50 50" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    triste: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true"><circle cx="40" cy="42" r="26" stroke="currentColor" stroke-width="3.5"/><path d="M28 40 C 30 44, 34 44, 36 40" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M44 40 C 46 44, 50 44, 52 40" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M32 56 C 36 50, 44 50, 48 56" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M34 48 C 33 52, 31 54, 32 56 C 33 56, 34 54, 34 48 Z" fill="currentColor"/></svg>`,
    confundido: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true"><circle cx="40" cy="42" r="26" stroke="currentColor" stroke-width="3.5"/><line x1="26" y1="34" x2="34" y2="32" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><line x1="46" y1="32" x2="54" y2="36" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="32" cy="42" r="2" fill="currentColor"/><circle cx="48" cy="42" r="2" fill="currentColor"/><path d="M30 54 C 34 52, 38 56, 42 54 C 46 52, 48 56, 52 54" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
    bien: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true"><circle cx="40" cy="42" r="26" stroke="currentColor" stroke-width="3.5"/><path d="M28 42 C 30 38, 34 38, 36 42" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M44 42 C 46 38, 50 38, 52 42" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M30 52 C 34 60, 46 60, 50 52" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`
  };
  function CheckinCard({ cat, t: t3, onClick }) {
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
          /* @__PURE__ */ u3("span", { class: "font-black text-base leading-tight", children: t3(cat.labelKey) })
        ]
      }
    );
  }
  function EmotionCard({ e: e3, getDisplayName, t: t3, onSelect }) {
    return /* @__PURE__ */ u3(
      "div",
      {
        class: "emotion-card p-5 rounded-2xl shadow-sm cursor-pointer flex justify-between items-center bg-white",
        style: `border-left:8px solid ${e3.color}`,
        tabIndex: 0,
        role: "button",
        "aria-label": `${t3("openDetailAria")} ${getDisplayName(e3.nombre)}`,
        onClick: (ev) => onSelect(e3, ev.currentTarget),
        onKeyDown: (ev) => {
          if (ev.key === "Enter" || ev.key === " ") {
            ev.preventDefault();
            onSelect(e3, ev.currentTarget);
          }
        },
        children: [
          /* @__PURE__ */ u3("span", { class: "font-bold text-lg text-slate-700", children: getDisplayName(e3.nombre) }),
          /* @__PURE__ */ u3("svg", { class: "w-4 h-4 text-slate-300 shrink-0", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ u3("path", { d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" }) })
        ]
      }
    );
  }
  function TechniqueSection({ emotionNombre, t: t3, lang }) {
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
            t3("technique.practice")
          ]
        }
      ),
      open && /* @__PURE__ */ u3("div", { id: "technique-body", class: "bg-indigo-50 border-2 border-indigo-100 rounded-2xl p-4", children: [
        /* @__PURE__ */ u3("p", { class: "text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2", children: [
          t3("technique.label"),
          " \xB7 ",
          data.name
        ] }),
        /* @__PURE__ */ u3("ol", { class: "space-y-2", children: data.steps.map((s3, i3) => /* @__PURE__ */ u3("li", { class: "flex gap-2 text-sm text-indigo-900 leading-snug", children: [
          /* @__PURE__ */ u3("span", { class: "font-black text-indigo-400 shrink-0", children: [
            i3 + 1,
            "."
          ] }),
          /* @__PURE__ */ u3("span", { children: s3 })
        ] }, i3)) })
      ] })
    ] });
  }
  function CopyButton({ text, t: t3 }) {
    const [copied, setCopied] = d2(false);
    if (typeof navigator === "undefined" || !navigator.clipboard) return null;
    return /* @__PURE__ */ u3(
      "button",
      {
        id: "copy-response-btn",
        type: "button",
        class: "flex items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors text-[11px] font-bold",
        "aria-label": t3("copyButton"),
        onClick: async () => {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 2e3);
        },
        children: [
          /* @__PURE__ */ u3("svg", { class: "w-3.5 h-3.5", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ u3("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" }) }),
          /* @__PURE__ */ u3("span", { id: "copy-response-label", children: copied ? t3("copiedFeedback") : t3("copyButton") })
        ]
      }
    );
  }
  function ModalContent({ e: e3, t: t3, getDisplayName, getEmotionField, relaciones, emociones: emociones2, onShowDetail }) {
    const quoteTextColor = getReadableTextColor(e3.color);
    const quoteLabelColor = quoteTextColor === "#f8fafc" ? "rgba(248,250,252,0.9)" : "rgba(15,23,42,0.85)";
    const lang = get("currentLang") || "es";
    const maskedEmotions = relaciones.filter((r3) => r3.type === "enmascara" && r3.from === e3.nombre).map((r3) => emociones2.find((em) => em.nombre === r3.to)).filter(Boolean);
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("div", { class: "inline-block px-4 py-1 rounded-full mb-2", style: `background-color:${e3.color}; color:${quoteTextColor}`, children: /* @__PURE__ */ u3("span", { class: "text-xs font-black uppercase tracking-widest", children: t3("emotionTag") }) }),
      /* @__PURE__ */ u3("h2", { id: "modal-emotion-title", class: "text-4xl font-black mb-6 text-slate-800", children: getDisplayName(e3.nombre) }),
      /* @__PURE__ */ u3("div", { class: "space-y-6", children: [
        /* @__PURE__ */ u3("div", { class: "grid grid-cols-1 gap-4", children: [
          { labelKey: "feelLabel", field: "siente" },
          { labelKey: "triggerLabel", field: "dispara" },
          { labelKey: "functionLabel", field: "funcion" }
        ].map(({ labelKey, field }) => /* @__PURE__ */ u3("div", { class: "bg-slate-50 p-4 rounded-2xl", children: [
          /* @__PURE__ */ u3("p", { class: "text-[11px] font-black text-slate-500 uppercase tracking-widest mb-1", children: t3(labelKey) }),
          /* @__PURE__ */ u3("p", { class: "text-slate-700 leading-relaxed font-medium", children: getEmotionField(e3, field) })
        ] }, field)) }),
        /* @__PURE__ */ u3(
          "div",
          {
            class: "relative p-6 rounded-3xl overflow-hidden shadow-lg",
            style: `background-color:${e3.color}; color:${quoteTextColor}`,
            children: [
              /* @__PURE__ */ u3("svg", { class: "absolute -top-2 -left-2 text-black/10 w-16 h-16", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ u3("path", { d: "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" }) }),
              /* @__PURE__ */ u3("p", { class: "text-[11px] font-black uppercase tracking-widest mb-2", style: `color:${quoteLabelColor}`, children: t3("messageLabel") }),
              /* @__PURE__ */ u3(
                "p",
                {
                  class: "text-[1.45rem] sm:text-[1.65rem] font-serif italic leading-[1.35] sm:leading-snug",
                  style: `color:${quoteTextColor}`,
                  children: [
                    '"',
                    getEmotionField(e3, "mensaje"),
                    '"'
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ u3("div", { children: [
          /* @__PURE__ */ u3("p", { class: "text-[11px] font-black text-amber-600 uppercase tracking-widest mb-2 px-1", children: t3("impulseLabel") }),
          /* @__PURE__ */ u3("div", { class: "bg-amber-50 border-2 border-amber-100 p-4 rounded-2xl", children: /* @__PURE__ */ u3("p", { class: "text-amber-900 font-bold leading-relaxed", children: getEmotionField(e3, "impulso") }) })
        ] }),
        /* @__PURE__ */ u3("div", { children: [
          /* @__PURE__ */ u3("div", { class: "flex items-center justify-between mb-2 px-1", children: [
            /* @__PURE__ */ u3("p", { class: "text-[11px] font-black text-slate-500 uppercase tracking-widest", children: t3("responseLabel") }),
            /* @__PURE__ */ u3(CopyButton, { text: getEmotionField(e3, "respuesta"), t: t3 })
          ] }),
          /* @__PURE__ */ u3("div", { class: "bg-emerald-50 border-2 border-emerald-100 p-4 rounded-2xl", children: /* @__PURE__ */ u3("p", { class: "text-emerald-900 font-bold leading-relaxed", children: getEmotionField(e3, "respuesta") }) })
        ] }),
        /* @__PURE__ */ u3(TechniqueSection, { emotionNombre: e3.nombre, t: t3, lang }),
        maskedEmotions.length > 0 && /* @__PURE__ */ u3("div", { class: "border-t border-slate-100 pt-4", children: [
          /* @__PURE__ */ u3("p", { class: "text-[11px] font-black text-violet-500 uppercase tracking-widest mb-2 px-1", children: t3("map.relEnmascara") }),
          /* @__PURE__ */ u3("div", { class: "flex flex-wrap gap-2 mb-2", children: maskedEmotions.map((m3) => /* @__PURE__ */ u3(
            "button",
            {
              type: "button",
              class: "masked-chip px-3 py-1.5 rounded-full text-sm font-bold transition-opacity hover:opacity-80",
              style: `background-color:${m3.color}; color:${getReadableTextColor(m3.color)}`,
              onClick: () => onShowDetail(m3),
              children: getDisplayName(m3.nombre)
            },
            m3.nombre
          )) }),
          /* @__PURE__ */ u3("p", { class: "text-xs text-slate-400 px-1", children: t3("masksHint") })
        ] })
      ] })
    ] });
  }
  function createUI({
    emociones: emociones2,
    relaciones = [],
    getDisplayName,
    getEmotionField,
    t: t3,
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
        if (section) section.classList.add("hidden");
        if (grid) R(null, grid);
        return;
      }
      if (section) section.classList.remove("hidden");
      if (!grid) return;
      const items = recents.map((nombre) => emociones2.find((e3) => e3.nombre === nombre)).filter(Boolean);
      R(
        /* @__PURE__ */ u3(S, { children: items.map((emotion) => {
          const displayName = getDisplayName(emotion.nombre);
          return /* @__PURE__ */ u3(
            "button",
            {
              type: "button",
              class: "emotion-card shrink-0 w-20 h-20 rounded-full shadow-sm bg-white border-4 flex items-center justify-center text-center px-2 text-[11px] font-bold leading-tight text-slate-700",
              style: `border-color:${emotion.color}`,
              "aria-label": `${t3("openEmotionAria")} ${displayName}`,
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
      const normalized = normalizeText(filter.trim());
      const visible = emociones2.filter((e3) => {
        if (!normalized) return true;
        const searchText = [
          e3.nombre,
          getDisplayName(e3.nombre),
          e3.siente,
          e3.dispara,
          e3.mensaje,
          getEmotionField(e3, "siente"),
          getEmotionField(e3, "dispara"),
          getEmotionField(e3, "mensaje"),
          getEmotionField(e3, "respuesta")
        ].map(normalizeText).join(" ");
        return searchText.includes(normalized);
      });
      R(
        /* @__PURE__ */ u3(S, { children: [
          visible.map((e3) => /* @__PURE__ */ u3(
            EmotionCard,
            {
              e: e3,
              getDisplayName,
              t: t3,
              onSelect: (emotion, el) => {
                set("lastFocusedCard", el);
                showDetail(emotion);
              }
            },
            e3.nombre
          )),
          !visible.length && /* @__PURE__ */ u3("div", { class: "search-empty-state bg-white rounded-2xl p-5 text-center shadow-sm border border-slate-200", children: [
            /* @__PURE__ */ u3("p", { class: "text-slate-700 font-bold mb-1", children: t3("emptyTitle") }),
            /* @__PURE__ */ u3("p", { class: "text-slate-500 text-sm", children: t3("emptyHint") })
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
            t: t3,
            onClick: () => renderCheckinEmotions(cat.key)
          },
          cat.key
        )) }),
        grid
      );
      if (activeCheckinCat) renderCheckinEmotions(activeCheckinCat);
    }
    function renderCheckinEmotions(catKey) {
      const cat = moodCategories.find((c3) => c3.key === catKey);
      if (!cat) return;
      activeCheckinCat = catKey;
      const section = document.getElementById("checkin-emotion-section");
      const label = document.getElementById("checkin-selected-label");
      const filteredGrid = document.getElementById("checkin-filtered-grid");
      const resetBtn = document.getElementById("checkin-reset-btn");
      if (!section || !filteredGrid) return;
      section.classList.remove("hidden");
      if (label) label.textContent = `${cat.emoji} ${t3(cat.labelKey)}`;
      const filtered = emociones2.filter((em) => cat.emotions.includes(em.nombre));
      R(
        /* @__PURE__ */ u3(S, { children: filtered.map((e3) => /* @__PURE__ */ u3(
          EmotionCard,
          {
            e: e3,
            getDisplayName,
            t: t3,
            onSelect: (emotion, el) => {
              set("lastFocusedCard", el);
              showDetail(emotion);
            }
          },
          e3.nombre
        )) }),
        filteredGrid
      );
      if (resetBtn) {
        resetBtn.textContent = t3("checkin.reset");
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
            <label for="diary-note-input" class="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2 block">${t3("diary.noteLabel")}</label>
            <textarea id="diary-note-input" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-200" rows="2" placeholder="${t3("diary.notePlaceholder")}"></textarea>
            <div class="flex gap-2 mt-2">
                <button id="diary-note-save" type="button" class="flex-1 bg-slate-800 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-slate-700 transition-colors">${t3("diary.saveButton")}</button>
                <button id="diary-note-cancel" type="button" class="flex-1 bg-slate-100 text-slate-600 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors">${t3("diary.cancelButton")}</button>
            </div>
        `;
      const panel = document.getElementById("modal-panel");
      if (!panel) return;
      panel.appendChild(form);
      form.querySelector("#diary-note-input").focus();
      panel.scrollTop = panel.scrollHeight;
      form.querySelector("#diary-note-save").addEventListener("click", () => {
        const note = form.querySelector("#diary-note-input").value;
        if (onAddToDiary) onAddToDiary(emotionNombre, note);
        form.innerHTML = `<p class="text-emerald-600 font-bold text-sm text-center py-2">\u2713 ${t3("diary.addedFeedback")}</p>`;
        setTimeout(() => form.remove(), 1800);
      });
      form.querySelector("#diary-note-cancel").addEventListener("click", () => form.remove());
    }
    function showDetail(e3) {
      document.getElementById("diary-inline-form")?.remove();
      const content = document.getElementById("modal-content");
      if (!content) return;
      R(
        /* @__PURE__ */ u3(
          ModalContent,
          {
            e: e3,
            t: t3,
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
      saveRecentEmotion(e3.nombre);
      const shareBtn = document.getElementById("share-btn");
      if (shareBtn) {
        shareBtn.onclick = async () => {
          const canvas = await buildEmotionCanvas(
            e3,
            getDisplayName(e3.nombre),
            t3("emotionTag"),
            getEmotionField(e3, "mensaje"),
            t3("responseLabel"),
            getEmotionField(e3, "respuesta")
          );
          shareEmotionCard(canvas, getDisplayName(e3.nombre));
        };
      }
      const diaryAddBtn = document.getElementById("diary-add-btn");
      if (diaryAddBtn && onAddToDiary) {
        diaryAddBtn.onclick = () => showDiaryForm(e3.nombre);
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
      if (!modal || !modal.open || get("isClosingModal")) return;
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
      search?.addEventListener("input", (event) => renderEmociones(event.target.value));
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
    const a3 = Object.entries(attrs).map(([k3, v3]) => `${k3}="${v3}"`).join(" ");
    if (part.tag === "ellipse") return `<ellipse cx="${part.cx}" cy="${part.cy}" rx="${part.rx}" ry="${part.ry}" ${a3}/>`;
    if (part.tag === "path") return `<path d="${part.d}" ${a3}/>`;
    return "";
  }
  function getZoneEmotionNames(zoneId, mode) {
    const detailZones = mode === "simple" ? SIMPLE_ZONE_GROUPS[zoneId] || [zoneId] : [zoneId];
    const names = /* @__PURE__ */ new Set();
    for (const dz of detailZones) for (const n2 of BODY_ZONE_EMOTIONS[dz] || []) names.add(n2);
    return names;
  }
  function buildSvgInner(zones, rects, selectedZones, lineColor, bodyFill, t3) {
    const clipShapes = BODY_PARTS.map((p3) => bodyPartStr(p3, { fill: "white" })).join("");
    const zoneRects = zones.map((zone) => {
      const on2 = selectedZones.has(zone.id);
      const fill = on2 ? zone.color + "66" : zone.color + "33";
      const strk = on2 ? zone.color : zone.color + "66";
      const sw = on2 ? "1.5" : "0.75";
      return (rects[zone.id] || []).map(
        (r3) => `<rect x="${r3.x}" y="${r3.y}" width="${r3.w}" height="${r3.h}" data-zone="${zone.id}" fill="${fill}" stroke="${strk}" stroke-width="${sw}" cursor="pointer" class="zone-hit"/>`
      ).join("");
    }).join("");
    const zoneLabels = zones.filter((z3) => selectedZones.has(z3.id) && z3.id !== "arms").map((z3) => {
      const r3 = (rects[z3.id] || [])[0];
      if (!r3) return "";
      const lx = r3.x + r3.w / 2;
      const ly = r3.y + r3.h / 2 + 4;
      return `<text x="${lx}" y="${ly}" text-anchor="middle" font-size="7.5" font-weight="700" fill="${z3.color}" pointer-events="none" opacity="0.9">${t3(z3.labelKey)}</text>`;
    }).join("");
    const bodyOutline = BODY_PARTS.map((p3) => bodyPartStr(p3, {
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
  function ZoneChips({ zones, selectedZones, t: t3, onRemove }) {
    const selected = zones.filter((z3) => selectedZones.has(z3.id));
    return /* @__PURE__ */ u3("div", { class: "flex flex-wrap gap-1.5 mb-4 min-h-[28px]", children: selected.map((z3) => /* @__PURE__ */ u3(
      "span",
      {
        class: "inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full text-white",
        style: `background:${z3.color}`,
        children: [
          t3(z3.labelKey),
          /* @__PURE__ */ u3(
            "button",
            {
              type: "button",
              "aria-label": `Quitar ${t3(z3.labelKey)}`,
              class: "opacity-80 hover:opacity-100 leading-none",
              onClick: (ev) => {
                ev.stopPropagation();
                onRemove(z3.id);
              },
              children: /* @__PURE__ */ u3("svg", { class: "w-3 h-3", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ u3("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }) })
            }
          )
        ]
      },
      z3.id
    )) });
  }
  function ResultSection({ matching, selectedZones, dark, t: t3, getDisplayName, onSelect, onDismiss }) {
    const emptyC = dark ? "text-slate-500" : "text-slate-400";
    if (selectedZones.size === 0) {
      return /* @__PURE__ */ u3("p", { class: `text-sm text-center ${emptyC} py-3 px-2`, children: t3("body.tapPrompt") });
    }
    if (matching.length === 0) {
      return /* @__PURE__ */ u3("p", { class: `text-sm text-center ${emptyC} py-3 px-2`, children: t3("body.noMatch") });
    }
    const titleC = dark ? "text-slate-300" : "text-slate-500";
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("p", { class: `text-[11px] font-black ${titleC} uppercase tracking-widest mb-3`, children: t3("body.resultTitle") }),
      /* @__PURE__ */ u3("div", { class: "space-y-2", children: matching.map((e3) => /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          class: "w-full text-left px-4 py-3 rounded-2xl flex items-center gap-3 transition-all hover:shadow-md",
          style: `background:${e3.color}25; border-left:5px solid ${e3.color}`,
          onClick: () => {
            onDismiss();
            onSelect(e3);
          },
          children: [
            /* @__PURE__ */ u3("span", { class: "font-bold text-sm", style: `color:${e3.text}`, children: getDisplayName(e3.nombre) }),
            /* @__PURE__ */ u3("span", { class: "ml-auto text-xs font-bold opacity-60 shrink-0", style: `color:${e3.text}`, children: "Ver \u2192" })
          ]
        },
        e3.nombre
      )) })
    ] });
  }
  function BodyMapPanel({
    t: t3,
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
    const svgInner = buildSvgInner(zones, rects, selectedZones, lineColor, bodyFill, t3);
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("div", { class: "flex items-center justify-between mb-5", children: [
        /* @__PURE__ */ u3("h2", { class: `text-xl font-black ${headerC}`, children: t3("body.mapTitle") }),
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
            children: t3("body.modeSimple")
          }
        ),
        /* @__PURE__ */ u3(
          "button",
          {
            type: "button",
            onClick: () => onModeChange("detailed"),
            class: `flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${mode === "detailed" ? activeC : inactiveC}`,
            children: t3("body.modeDetailed")
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
          "aria-label": t3("body.mapTitle"),
          onClick: onZoneClick,
          dangerouslySetInnerHTML: { __html: svgInner }
        }
      ) }),
      /* @__PURE__ */ u3(ZoneChips, { zones, selectedZones, t: t3, onRemove: onRemoveZone }),
      /* @__PURE__ */ u3(
        ResultSection,
        {
          matching,
          selectedZones,
          dark,
          t: t3,
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
          children: t3("body.clear")
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
            t3("quiz.tabQuestions")
          ]
        }
      )
    ] });
  }
  function createBodyMap({ emociones: emociones2, getDisplayName, t: t3, showDetail, onDismiss, onSwitchToQuiz }) {
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
      return emociones2.filter((e3) => counts.has(e3.nombre)).sort((a3, b2) => counts.get(b2.nombre) - counts.get(a3.nombre) || a3.nombre.localeCompare(b2.nombre));
    }
    function render_() {
      const content = document.getElementById("quiz-content");
      if (!content) return;
      const dark = isDarkMode();
      const zones = BODY_ZONES[mode];
      const rects = ZONE_RECTS[mode];
      const lineColor = dark ? "#64748b" : "#94a3b8";
      const bodyFill = dark ? "#0f172a" : "#f8fafc";
      R(
        /* @__PURE__ */ u3(
          BodyMapPanel,
          {
            t: t3,
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
              const hit = ev.target.closest(".zone-hit");
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
            onSelectEmotion: (e3) => showDetail(e3)
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
  function QuizHeader({ t: t3, dark, onDismiss }) {
    const titleC = dark ? "text-slate-100" : "text-slate-800";
    const closeC = dark ? "bg-slate-700 text-slate-400 hover:bg-slate-600" : "bg-slate-100 text-slate-500 hover:bg-slate-200";
    return /* @__PURE__ */ u3("div", { class: "flex items-center justify-between mb-8", children: [
      /* @__PURE__ */ u3("h2", { class: `text-xl font-black ${titleC}`, children: t3("quiz.title") }),
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
  function QuizStep({ t: t3, dark, step, historyLen, onPickOption, onBack, onSwitchToBody }) {
    const questionC = dark ? "text-slate-100" : "text-slate-800";
    const optionC = dark ? "bg-slate-800 text-slate-200 border-slate-700 hover:border-blue-400" : "bg-white text-slate-700 border-transparent hover:border-blue-300";
    const backC = dark ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600";
    const toBodyC = dark ? "text-slate-300 border-slate-600 hover:border-slate-400 hover:bg-slate-800" : "text-slate-500 border-slate-300 hover:border-slate-400 hover:bg-slate-50";
    const inactiveDot = dark ? "bg-slate-700" : "bg-slate-200";
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("div", { class: "flex gap-2 mb-8", "aria-hidden": "true", children: [0, 1, 2].map((i3) => /* @__PURE__ */ u3("div", { class: `w-2 h-2 rounded-full transition-colors ${i3 <= historyLen ? "bg-blue-500" : inactiveDot}` }, i3)) }),
      /* @__PURE__ */ u3("p", { class: `text-2xl font-black ${questionC} leading-snug mb-8`, children: t3(step.textKey) }),
      /* @__PURE__ */ u3("div", { class: "space-y-3", children: step.options.map((opt, i3) => /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          class: `quiz-option w-full text-left p-5 rounded-2xl shadow-sm border-2 hover:shadow-md transition-all font-medium ${optionC}`,
          onClick: () => onPickOption(opt),
          children: t3(opt.labelKey)
        },
        i3
      )) }),
      historyLen > 0 ? /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          onClick: onBack,
          class: `mt-6 flex items-center gap-2 text-sm font-medium transition-colors ${backC}`,
          children: [
            /* @__PURE__ */ u3("svg", { class: "w-4 h-4", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ u3("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" }) }),
            t3("quiz.back")
          ]
        }
      ) : /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          onClick: onSwitchToBody,
          class: `mt-6 w-full py-3 text-sm font-semibold transition-colors border rounded-2xl ${toBodyC}`,
          children: [
            t3("quiz.tabBody"),
            " \u2192"
          ]
        }
      )
    ] });
  }
  function QuizResult({ t: t3, dark, emotions, getDisplayName, onRestart, onDismiss, onShowAll, onShowDetail }) {
    const titleC = dark ? "text-slate-300" : "text-slate-500";
    const restartC = dark ? "bg-slate-800 text-slate-200 hover:bg-slate-700" : "bg-slate-100 text-slate-700 hover:bg-slate-200";
    const closeC = dark ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600";
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("p", { class: `text-[11px] font-black ${titleC} uppercase tracking-widest mb-4`, children: t3("quiz.resultTitle") }),
      /* @__PURE__ */ u3("div", { class: "space-y-3", children: emotions.map((e3) => /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          class: "quiz-result-card w-full text-left p-4 rounded-2xl flex items-center gap-4 hover:shadow-md transition-all",
          style: `border-left:6px solid ${e3.color}; background:${e3.color}${dark ? "22" : "15"}`,
          onClick: () => {
            onDismiss();
            onShowDetail(e3);
          },
          children: [
            /* @__PURE__ */ u3("span", { class: "font-bold", style: `color:${e3.text}`, children: getDisplayName(e3.nombre) }),
            /* @__PURE__ */ u3("span", { class: "ml-auto text-xs font-bold opacity-70 shrink-0", style: `color:${e3.text}`, children: "Ver \u2192" })
          ]
        },
        e3.nombre
      )) }),
      /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          id: "quiz-restart-btn",
          onClick: onRestart,
          class: `mt-6 w-full py-3 font-bold rounded-2xl text-sm transition-colors ${restartC}`,
          children: t3("quiz.restart")
        }
      ),
      /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          id: "quiz-close-result-btn",
          onClick: () => {
            onDismiss();
            if (onShowAll) onShowAll();
          },
          class: `mt-2 w-full py-3 text-sm font-medium transition-colors ${closeC}`,
          children: t3("quiz.close")
        }
      )
    ] });
  }
  function createQuiz({ emociones: emociones2, getDisplayName, t: t3, showDetail, onShowAll }) {
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
      t: t3,
      showDetail,
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
            /* @__PURE__ */ u3(QuizHeader, { t: t3, dark, onDismiss: dismiss }),
            /* @__PURE__ */ u3(
              QuizResult,
              {
                t: t3,
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
                onDismiss: dismiss,
                onShowAll,
                onShowDetail: showDetail
              }
            )
          ] }),
          contentEl
        );
      } else {
        R(
          /* @__PURE__ */ u3("div", { children: [
            /* @__PURE__ */ u3(QuizHeader, { t: t3, dark, onDismiss: dismiss }),
            /* @__PURE__ */ u3(
              QuizStep,
              {
                t: t3,
                dark,
                step: QUIZ_STEPS[currentStepKey],
                historyLen: history.length,
                onPickOption: pickOption,
                onBack: () => {
                  currentStepKey = history.pop();
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
        resultEmotions = option.result.map((nombre) => emociones2.find((e3) => e3.nombre === nombre)).filter(Boolean);
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
      panel.addEventListener("cancel", (e3) => {
        e3.preventDefault();
        dismiss();
      });
    };
    return { init, open };
  }

  // js/diary.jsx
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
    return entries.filter((e3) => e3.id !== id);
  }
  function loadEntries() {
    return parseDiaryEntries(localStorage.getItem(DIARY_KEY));
  }
  function saveEntries(entries) {
    localStorage.setItem(DIARY_KEY, JSON.stringify(entries));
  }
  function addEntryToStorage(emotionNombre, note = "", tags = []) {
    const entry = createDiaryEntry(emotionNombre, note, tags);
    saveEntries([entry, ...loadEntries()]);
    return entry;
  }
  function deleteEntryFromStorage(id) {
    saveEntries(deleteDiaryEntryById(loadEntries(), id));
  }
  function EmotionSearch({ emociones: emociones2, getDisplayName, t: t3, onSelect }) {
    const [query, setQuery] = d2("");
    const [open, setOpen] = d2(false);
    const [chosen, setChosen] = d2("");
    const norm = normalizeText(query.trim());
    const filtered = emociones2.filter((e3) => {
      if (!norm) return true;
      const name = normalizeText(getDisplayName(e3.nombre));
      return name.includes(norm) || normalizeText(e3.nombre).includes(norm);
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
          placeholder: t3("diary.pickEmotion"),
          value: query,
          class: "w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-200",
          onFocus: () => {
            if (filtered.length) setOpen(true);
          },
          onInput: (ev) => {
            const val = ev.target.value;
            setQuery(val);
            setChosen("");
            onSelect("");
            setOpen(true);
            ev.target.classList.remove("ring-2", "ring-red-300");
          },
          onBlur: () => setTimeout(() => setOpen(false), 150),
          onKeyDown: (ev) => {
            if (ev.key === "Escape") {
              setOpen(false);
              ev.target.blur();
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
          children: filtered.map((e3) => /* @__PURE__ */ u3(
            "button",
            {
              type: "button",
              class: "emotion-option w-full text-left px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2.5 transition-colors",
              onMouseDown: (ev) => {
                ev.preventDefault();
                selectEmotion(e3.nombre);
              },
              children: [
                /* @__PURE__ */ u3("span", { class: "w-2.5 h-2.5 rounded-full shrink-0", style: `background-color:${e3.color}` }),
                getDisplayName(e3.nombre)
              ]
            },
            e3.nombre
          ))
        }
      )
    ] });
  }
  function DiaryForm({ emociones: emociones2, getDisplayName, t: t3, onSave, onCancel }) {
    const [selectedEmotion, setSelectedEmotion] = d2("");
    const [selectedTags, setSelectedTags] = d2(/* @__PURE__ */ new Set());
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
      const note = document.getElementById("diary-note-input")?.value ?? "";
      onSave(selectedEmotion, note, [...selectedTags]);
    }
    return /* @__PURE__ */ u3("div", { id: "diary-add-form", class: "bg-white rounded-2xl p-4 shadow-sm mb-4 border-2 border-blue-100", children: [
      /* @__PURE__ */ u3("p", { class: "text-[11px] font-black text-slate-500 uppercase tracking-widest mb-3", children: t3("diary.newEntry") }),
      /* @__PURE__ */ u3(
        EmotionSearch,
        {
          emociones: emociones2,
          getDisplayName,
          t: t3,
          onSelect: setSelectedEmotion
        }
      ),
      /* @__PURE__ */ u3(
        "textarea",
        {
          id: "diary-note-input",
          rows: "2",
          placeholder: t3("diary.notePlaceholder"),
          class: "w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-200 mb-3"
        }
      ),
      /* @__PURE__ */ u3("div", { class: "mb-3", children: [
        /* @__PURE__ */ u3("p", { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2", children: t3("diary.tagLabel") }),
        /* @__PURE__ */ u3("div", { class: "flex flex-wrap gap-1.5", children: DIARY_TAGS.map((tag) => {
          const active = selectedTags.has(tag);
          const label = t3(`diary.tag${tag.charAt(0).toUpperCase()}${tag.slice(1)}`);
          return /* @__PURE__ */ u3(
            "button",
            {
              type: "button",
              "data-tag": tag,
              class: `diary-tag-btn px-3 py-1 rounded-full text-[11px] font-bold transition-colors ${active ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`,
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
            children: t3("diary.saveButton")
          }
        ),
        /* @__PURE__ */ u3(
          "button",
          {
            id: "diary-form-cancel",
            type: "button",
            onClick: onCancel,
            class: "flex-1 bg-slate-100 text-slate-600 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors",
            children: t3("diary.cancelButton")
          }
        )
      ] })
    ] });
  }
  function EntryList({ entries, emociones: emociones2, getDisplayName, t: t3, formatDate, onDelete, onClearAll }) {
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("div", { class: "space-y-3", children: entries.map((entry) => {
        const emotion = emociones2.find((e3) => e3.nombre === entry.emotion);
        const displayName = emotion ? getDisplayName(entry.emotion) : entry.emotion;
        const color = emotion?.color ?? "#e2e8f0";
        const tags = entry.tags?.length ? entry.tags.map((tag) => {
          const label = t3(`diary.tag${tag.charAt(0).toUpperCase()}${tag.slice(1)}`);
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
              "aria-label": t3("diary.deleteButton"),
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
          children: t3("diary.clearAll")
        }
      )
    ] });
  }
  function EmptyState({ t: t3 }) {
    return /* @__PURE__ */ u3("div", { class: "text-center py-8 px-2", children: [
      /* @__PURE__ */ u3("p", { class: "text-slate-400 text-sm mb-5", children: t3("diary.emptyPrompt") }),
      /* @__PURE__ */ u3("div", { class: "flex flex-col gap-2 max-w-xs mx-auto", children: [
        /* @__PURE__ */ u3(
          "button",
          {
            id: "diary-empty-checkin",
            type: "button",
            class: "w-full bg-slate-800 text-white py-3 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-colors",
            onClick: () => emit("tab:switch", { tabId: "checkin" }),
            children: t3("diary.emptyAction1")
          }
        ),
        /* @__PURE__ */ u3(
          "button",
          {
            id: "diary-empty-quiz",
            type: "button",
            class: "w-full bg-slate-100 text-slate-700 py-3 rounded-2xl font-bold text-sm hover:bg-slate-200 transition-colors",
            onClick: () => emit("quiz:open"),
            children: t3("diary.emptyAction2")
          }
        )
      ] })
    ] });
  }
  function DiaryPanel({
    t: t3,
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
      const d3 = new Date(isoString);
      const now = /* @__PURE__ */ new Date();
      const time = d3.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      if (d3.toDateString() === now.toDateString()) return `${t3("diary.todayLabel")}, ${time}`;
      return `${d3.toLocaleDateString([], { day: "numeric", month: "short", year: "numeric" })} \xB7 ${time}`;
    }
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("div", { class: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ u3("h2", { id: "diary-title-heading", class: "text-xl font-black text-slate-800", children: t3("diary.title") }),
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
                t3("diary.exportButton")
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
                t3("diary.newEntry")
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ u3("p", { class: "text-xs text-slate-400 mb-4 flex items-start gap-1.5", children: [
        /* @__PURE__ */ u3("svg", { class: "w-3.5 h-3.5 shrink-0 mt-0.5", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ u3("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" }) }),
        t3("diary.privacyNote")
      ] }),
      showForm && /* @__PURE__ */ u3(
        DiaryForm,
        {
          emociones: emociones2,
          getDisplayName,
          t: t3,
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
          t: t3,
          formatDate,
          onDelete,
          onClearAll
        }
      ) : /* @__PURE__ */ u3(EmptyState, { t: t3 })
    ] });
  }
  function createDiary({ t: t3, getDisplayName, emociones: emociones2 }) {
    let showForm = false;
    function rerender() {
      const content = document.getElementById("diary-content");
      if (!content) return;
      R(
        /* @__PURE__ */ u3(
          DiaryPanel,
          {
            t: t3,
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
              if (confirm(t3("diary.clearConfirm"))) {
                saveEntries([]);
                rerender();
              }
            },
            onExport: () => {
              const entries = loadEntries();
              const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
              const blob = new Blob([JSON.stringify(entries, null, 2)], { type: "application/json" });
              const url = URL.createObjectURL(blob);
              const a3 = document.createElement("a");
              a3.href = url;
              a3.download = `diario-emocional-${date}.json`;
              document.body.appendChild(a3);
              a3.click();
              a3.remove();
              setTimeout(() => URL.revokeObjectURL(url), 1e3);
            }
          }
        ),
        content
      );
    }
    function addEntry(emotionNombre, note = "", tags = []) {
      return addEntryToStorage(emotionNombre, note, tags);
    }
    function renderForTab() {
      showForm = false;
      rerender();
    }
    return { addEntry, renderForTab };
  }

  // js/emotionMap.jsx
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
  function applyRepulsion(nodes, k3) {
    for (let i3 = 0; i3 < nodes.length; i3++) {
      for (let j3 = i3 + 1; j3 < nodes.length; j3++) {
        let dx = nodes[i3].x - nodes[j3].x;
        let dy = nodes[i3].y - nodes[j3].y;
        if (!dx && !dy) {
          dx = 0.01;
        }
        const d3 = Math.hypot(dx, dy);
        const f4 = k3 * k3 / d3;
        nodes[i3].fx += dx / d3 * f4;
        nodes[i3].fy += dy / d3 * f4;
        nodes[j3].fx -= dx / d3 * f4;
        nodes[j3].fy -= dy / d3 * f4;
      }
    }
  }
  function runForce(nodes, edges, W, H2) {
    const k3 = Math.sqrt(W * H2 / nodes.length) * 0.95;
    for (let it = 0; it < 500; it++) {
      const temp = 35 * (1 - it / 500);
      for (const n2 of nodes) {
        n2.fx = 0;
        n2.fy = 0;
      }
      applyRepulsion(nodes, k3);
      for (const e3 of edges) {
        const a3 = nodes[e3.ai], b2 = nodes[e3.bi];
        const dx = b2.x - a3.x, dy = b2.y - a3.y;
        const d3 = Math.hypot(dx, dy) || 0.01;
        const f4 = d3 * d3 / k3 * 0.3;
        a3.fx += dx / d3 * f4;
        a3.fy += dy / d3 * f4;
        b2.fx -= dx / d3 * f4;
        b2.fy -= dy / d3 * f4;
      }
      for (const n2 of nodes) {
        const d3 = Math.hypot(n2.fx, n2.fy) || 0.01;
        n2.x = clamp(n2.x + n2.fx / d3 * Math.min(d3, temp), R2 + 28, W - R2 - 28);
        n2.y = clamp(n2.y + n2.fy / d3 * Math.min(d3, temp), R2 + 24, H2 - R2 - 28);
      }
    }
    resolveCollisions(nodes, W, H2);
  }
  function clamp(v3, lo, hi) {
    return Math.min(Math.max(v3, lo), hi);
  }
  function resolveCollisions(nodes, W, H2) {
    const minDist = R2 * 2 + 10;
    for (let pass = 0; pass < 12; pass++) {
      for (let i3 = 0; i3 < nodes.length; i3++) {
        for (let j3 = i3 + 1; j3 < nodes.length; j3++) {
          const dx = nodes[i3].x - nodes[j3].x;
          const dy = nodes[i3].y - nodes[j3].y;
          const d3 = Math.hypot(dx, dy) || 0.01;
          if (d3 < minDist) {
            const push = (minDist - d3) / 2;
            const ux = dx / d3, uy = dy / d3;
            nodes[i3].x = clamp(nodes[i3].x + ux * push, R2 + 28, W - R2 - 28);
            nodes[i3].y = clamp(nodes[i3].y + uy * push, R2 + 24, H2 - R2 - 28);
            nodes[j3].x = clamp(nodes[j3].x - ux * push, R2 + 28, W - R2 - 28);
            nodes[j3].y = clamp(nodes[j3].y - uy * push, R2 + 24, H2 - R2 - 28);
          }
        }
      }
    }
  }
  function escHtml(value) {
    return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
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
    return EMOTION_RELATIONS.flatMap((r3) => {
      const ai = nameToIdx[r3.from];
      const bi = nameToIdx[r3.to];
      if (ai === void 0 || bi === void 0) {
        const missing = [];
        if (ai === void 0) missing.push(`from="${r3.from}"`);
        if (bi === void 0) missing.push(`to="${r3.to}"`);
        console.warn("[emotionMap] Dropping relation %s with unknown endpoint(s): %s", String(r3.type), missing.join(", "));
        return [];
      }
      return [{ ai, bi, type: r3.type }];
    });
  }
  function buildForceData(emociones2, getDisplayName, W, H2) {
    const rng = makeRng(48879);
    const nameToIdx = {};
    const nodes = emociones2.map((e3, idx) => {
      nameToIdx[e3.nombre] = idx;
      const ci = MOOD_CATEGORIES.findIndex((c3) => c3.emotions.includes(e3.nombre));
      const q2 = QUAD_MAP[Math.max(ci, 0)];
      return {
        nombre: e3.nombre,
        label: getDisplayName(e3.nombre),
        color: e3.color,
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
      const count = cat.emotions.filter((n2) => emociones2.find((e3) => e3.nombre === n2)).length;
      const rows = Math.ceil(count / maxCols);
      if (QUAD_MAP[ci] < 2) maxRowsTop = Math.max(maxRowsTop, rows);
      else maxRowsBot = Math.max(maxRowsBot, rows);
    });
    const QH = QUAD_HDR + PAD + Math.max(maxRowsTop, 1) * ROW_H + R2 + 16;
    const H2 = QH * 2;
    const nameToIdx = {};
    const nodes = [];
    MOOD_CATEGORIES.forEach((cat, ci) => {
      const q2 = QUAD_MAP[ci];
      const ox = q2 % 2 * QW;
      const oy = Math.floor(q2 / 2) * QH;
      cat.emotions.forEach((nombre, pos) => {
        const e3 = emociones2.find((em) => em.nombre === nombre);
        if (!e3) return;
        nameToIdx[nombre] = nodes.length;
        nodes.push({
          nombre,
          label: getDisplayName(nombre),
          color: e3.color,
          x: ox + PAD + R2 + pos % maxCols * STEP,
          y: oy + QUAD_HDR + PAD + R2 + Math.floor(pos / maxCols) * ROW_H
        });
      });
    });
    return { nodes, edges: buildEdges(nameToIdx), nameToIdx, H: H2 };
  }
  function buildQuadrantFilter(catIdx, visibleEdges, nodes) {
    if (catIdx === null) return null;
    const cat = MOOD_CATEGORIES[catIdx];
    const nodeNames = new Set(nodes.map((n2) => n2.nombre));
    const inQuadrant = new Set(cat.emotions.filter((n2) => nodeNames.has(n2)));
    const neighbors = /* @__PURE__ */ new Set();
    for (const e3 of visibleEdges) {
      const aN = nodes[e3.ai].nombre, bN = nodes[e3.bi].nombre;
      if (inQuadrant.has(aN) && !inQuadrant.has(bN)) neighbors.add(bN);
      if (inQuadrant.has(bN) && !inQuadrant.has(aN)) neighbors.add(aN);
    }
    return { inQuadrant, neighbors };
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
  function buildNeighborhoodData(selName, nodes, visibleEdges, W, H2) {
    const neighborEdges = visibleEdges.filter(
      (e3) => nodes[e3.ai].nombre === selName || nodes[e3.bi].nombre === selName
    );
    const memberNames = new Set(neighborEdges.flatMap((e3) => [nodes[e3.ai].nombre, nodes[e3.bi].nombre]));
    memberNames.add(selName);
    const rng = makeRng(61453);
    const subNameToIdx = {};
    const subNodes = nodes.filter((n2) => memberNames.has(n2.nombre)).map((n2, i3) => {
      subNameToIdx[n2.nombre] = i3;
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
    const subEdges = neighborEdges.map((e3) => ({
      ai: subNameToIdx[nodes[e3.ai].nombre],
      bi: subNameToIdx[nodes[e3.bi].nombre],
      type: e3.type
    })).filter((e3) => e3.ai !== void 0 && e3.bi !== void 0);
    runForce(subNodes, subEdges, W, H2);
    return { nodes: subNodes, edges: subEdges };
  }
  function buildSvgBody(nodes, edges, W, H2, sel, view, { t: t3, activeTypes, activeQuadrant, nameFilter }) {
    const dark = document.documentElement.classList.contains("dark");
    const labelFill = dark ? "#cbd5e1" : "#1e293b";
    const visibleEdges = edges.filter((e3) => activeTypes.has(e3.type));
    const quadrantFilter = buildQuadrantFilter(activeQuadrant, visibleEdges, nodes);
    const connectedNames = sel ? new Set(
      visibleEdges.filter((e3) => nodes[e3.ai].nombre === sel || nodes[e3.bi].nombre === sel).flatMap((e3) => [nodes[e3.ai].nombre, nodes[e3.bi].nombre])
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
        bg += `<text x="${ox + QW / 2}" y="${oy + 15}" text-anchor="middle" font-size="11" font-weight="700" fill="${htC}">${t3(cat.labelKey).toUpperCase()}</text>`;
      });
      const divC = dark ? "#334155" : "#94a3b8";
      bg += `<line x1="${W / 2}" y1="0" x2="${W / 2}" y2="${H2}" stroke="${divC}" stroke-width="1"/>`;
      bg += `<line x1="0" y1="${H2 / 2}" x2="${W}" y2="${H2 / 2}" stroke="${divC}" stroke-width="1"/>`;
    }
    const normalizedFilter = nameFilter ? normalizeText(nameFilter) : "";
    const eStr = visibleEdges.map((e3) => {
      const a3 = nodes[e3.ai], b2 = nodes[e3.bi];
      let op = 0.4;
      if (sel) {
        op = sel === a3.nombre || sel === b2.nombre ? 0.9 : 0;
      } else if (quadrantFilter) {
        const aIn = quadrantFilter.inQuadrant.has(a3.nombre);
        const bIn = quadrantFilter.inQuadrant.has(b2.nombre);
        if (!aIn && !bIn) op = 0;
        else if (aIn && bIn) op = 0.75;
        else op = 0.35;
      } else if (normalizedFilter) {
        const aMatch = normalizeText(a3.label).includes(normalizedFilter);
        const bMatch = normalizeText(b2.label).includes(normalizedFilter);
        op = aMatch || bMatch ? 0.3 : 0;
      }
      const rel = RELS[e3.type];
      return `<line x1="${Math.trunc(a3.x)}" y1="${Math.trunc(a3.y)}" x2="${Math.trunc(b2.x)}" y2="${Math.trunc(b2.y)}" stroke="${rel.color}" stroke-width="2.5" opacity="${op}" stroke-dasharray="${rel.dash}"/>`;
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
      return `<g class="map-node" data-nombre="${escAttr(n2.nombre)}" tabindex="0" role="button" aria-label="${escAttr(n2.label)}" style="cursor:pointer" opacity="${nodeOp}" ${hide ? 'pointer-events="none"' : ""}>
            <title>${escHtml(n2.label)}</title>
            <circle cx="${cx}" cy="${cy}" r="${R2 + 6}" fill="transparent"/>
            <circle cx="${cx}" cy="${cy}" r="${R2}" fill="${n2.color}" stroke="${sc}" stroke-width="${sw}" pointer-events="none"/>
            <text x="${cx}" y="${Math.trunc(n2.y + R2 + 12)}" text-anchor="middle" font-size="11" font-weight="600" fill="${labelFill}" pointer-events="none">${escHtml(lbl)}</text>
        </g>`;
    }).join("");
    return `${bg}<g>${eStr}</g><g>${nStr}</g>`;
  }
  function containerW() {
    return document.getElementById("map-content")?.clientWidth || 340;
  }
  function EmotionMapPanel({
    view,
    selected,
    nameFilter,
    activeTypes,
    activeQuadrant,
    nodes,
    edges,
    H: H2,
    W,
    t: t3,
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
      let svgNodes, svgEdges, svgActiveQuadrant;
      if (isNeighborhood) {
        const hood = buildNeighborhoodData(selected, nodes, edges.filter((e3) => activeTypes.has(e3.type)), W, H2);
        svgNodes = hood.nodes;
        svgEdges = hood.edges;
        svgActiveQuadrant = null;
      } else {
        svgNodes = nodes;
        svgEdges = edges;
        svgActiveQuadrant = activeQuadrant;
      }
      svg.innerHTML = buildSvgBody(
        svgNodes,
        svgEdges,
        W,
        H2,
        selected,
        view,
        { t: t3, activeTypes, activeQuadrant: svgActiveQuadrant, nameFilter }
      );
      svg.onclick = svgEventHandler.click;
      svg.onkeydown = svgEventHandler.keydown;
    });
    const activeC = dark ? "bg-slate-100 text-slate-900 border-slate-100" : "bg-slate-800 text-white border-slate-800";
    const inactiveC = dark ? "bg-slate-800 text-slate-400 border-slate-600" : "bg-white text-slate-500 border-slate-200";
    const effectiveQuadrant = view === "graph" && selected !== null ? null : activeQuadrant;
    const hasMatch = (() => {
      if (!nameFilter || selected !== null) return true;
      const norm = normalizeText(nameFilter);
      return nodes.some((n2) => normalizeText(n2.label).includes(norm));
    })();
    let infoPanel = null;
    if (selected) {
      const myEdges = edges.filter((e3) => nodes[e3.ai]?.nombre === selected || nodes[e3.bi]?.nombre === selected);
      const grouped = {};
      for (const e3 of myEdges) {
        const other = nodes[e3.ai].nombre === selected ? nodes[e3.bi] : nodes[e3.ai];
        grouped[e3.type] = grouped[e3.type] || [];
        grouped[e3.type].push(other.label);
      }
      const borderC = dark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100";
      const nameC = dark ? "text-slate-100" : "text-slate-800";
      infoPanel = /* @__PURE__ */ u3("div", { id: "map-info-panel", class: `mt-3 rounded-2xl p-4 border ${borderC} shadow-sm`, children: [
        /* @__PURE__ */ u3("div", { class: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ u3("span", { class: `font-bold ${nameC}`, children: nodes.find((n2) => n2.nombre === selected)?.label ?? selected }),
          /* @__PURE__ */ u3("div", { class: "flex items-center gap-1", children: [
            /* @__PURE__ */ u3(
              "button",
              {
                id: "map-open-btn",
                onClick: onOpenDetail,
                class: "text-xs font-bold text-blue-500 hover:text-blue-600 px-2 py-1 rounded-lg transition-colors",
                children: t3("openChip")
              }
            ),
            /* @__PURE__ */ u3(
              "button",
              {
                id: "map-clear-btn",
                "aria-label": t3("map.clearSelection"),
                onClick: onClearSelection,
                class: "w-6 h-6 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors",
                children: /* @__PURE__ */ u3("svg", { class: "w-3.5 h-3.5", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ u3("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }) })
              }
            )
          ] })
        ] }),
        Object.keys(grouped).length > 0 ? /* @__PURE__ */ u3("ul", { class: "space-y-1.5", children: Object.entries(grouped).map(([type, names]) => {
          const rel = RELS[type];
          return /* @__PURE__ */ u3("li", { class: "flex items-start gap-2 text-sm leading-snug", children: [
            /* @__PURE__ */ u3("span", { class: "mt-1 shrink-0 inline-block w-2.5 h-2.5 rounded-full", style: `background:${rel.color}` }),
            /* @__PURE__ */ u3("span", { children: [
              /* @__PURE__ */ u3("strong", { class: dark ? "text-slate-300" : "text-slate-700", children: [
                t3(rel.labelKey),
                ":"
              ] }),
              " ",
              /* @__PURE__ */ u3("span", { class: dark ? "text-slate-400" : "text-slate-500", children: names.join(", ") })
            ] })
          ] }, type);
        }) }) : /* @__PURE__ */ u3("p", { class: "text-xs text-slate-400", children: t3("map.infoNone") })
      ] });
    }
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("div", { class: "flex gap-2 mb-2", children: [
        /* @__PURE__ */ u3(
          "button",
          {
            id: "map-graph-btn",
            onClick: onGraphView,
            class: `flex-1 py-2 text-sm font-bold rounded-xl border transition-colors ${view === "graph" ? activeC : inactiveC}`,
            children: t3("map.viewGraph")
          }
        ),
        /* @__PURE__ */ u3(
          "button",
          {
            id: "map-quad-btn",
            onClick: onQuadView,
            class: `flex-1 py-2 text-sm font-bold rounded-xl border transition-colors ${view === "quad" ? activeC : inactiveC}`,
            children: t3("map.viewQuad")
          }
        )
      ] }),
      /* @__PURE__ */ u3("div", { class: "flex flex-wrap gap-x-3 gap-y-1 mb-2", role: "list", "aria-label": t3("map.legendLabel"), children: Object.entries(RELS).map(([type, rel]) => {
        const on2 = activeTypes.has(type);
        const dimLine = dark ? "#475569" : "#cbd5e1";
        const lineColor = on2 ? rel.color : dimLine;
        const onTextC = dark ? "text-slate-300" : "text-slate-600";
        const offTextC = dark ? "text-slate-600" : "text-slate-400";
        const onBgC = dark ? "bg-slate-700" : "bg-slate-100";
        return /* @__PURE__ */ u3(
          "button",
          {
            type: "button",
            "data-rel-type": type,
            role: "listitem",
            "aria-pressed": String(on2),
            class: `flex items-center gap-1 text-[11px] px-1.5 py-0.5 rounded-lg transition-colors ${on2 ? onTextC : offTextC} ${on2 ? onBgC : ""}`,
            onClick: () => onRelTypeToggle(type),
            children: [
              /* @__PURE__ */ u3("svg", { width: "14", height: "6", "aria-hidden": "true", children: /* @__PURE__ */ u3("line", { x1: "0", y1: "3", x2: "14", y2: "3", stroke: lineColor, "stroke-width": "2", "stroke-dasharray": rel.dash }) }),
              t3(rel.labelKey)
            ]
          },
          type
        );
      }) }),
      /* @__PURE__ */ u3("div", { class: "flex flex-wrap gap-1.5 mb-2", children: [
        /* @__PURE__ */ u3(
          "button",
          {
            type: "button",
            "data-quad": "all",
            "aria-pressed": String(effectiveQuadrant === null),
            class: `text-[11px] font-bold px-2.5 py-0.5 rounded-full border transition-colors ${effectiveQuadrant === null ? activeC : inactiveC}`,
            onClick: () => onQuadrantChange(null),
            children: t3("map.filterAll")
          }
        ),
        MOOD_CATEGORIES.map((cat, i3) => {
          const isActive = effectiveQuadrant === i3;
          return /* @__PURE__ */ u3(
            "button",
            {
              type: "button",
              "data-quad": String(i3),
              "aria-pressed": String(isActive),
              class: `text-[11px] font-bold px-2.5 py-0.5 rounded-full border transition-colors ${isActive ? "" : inactiveC}`,
              style: isActive ? `background-color:${cat.color};color:${cat.ink};border-color:${cat.color}` : "",
              onClick: () => onQuadrantChange(i3),
              children: t3(cat.labelKey)
            },
            cat.key
          );
        })
      ] }),
      /* @__PURE__ */ u3("div", { class: "relative mb-2", children: [
        /* @__PURE__ */ u3(
          "input",
          {
            id: "map-search",
            type: "text",
            autocomplete: "off",
            placeholder: t3("map.searchPlaceholder"),
            defaultValue: nameFilter,
            class: `w-full text-[13px] px-3 py-1.5 rounded-xl border transition-colors ${dark ? "bg-slate-800 border-slate-600 text-slate-200 placeholder:text-slate-500" : "bg-white border-slate-200 text-slate-700 placeholder:text-slate-400"}`,
            onInput: onSearch
          }
        ),
        /* @__PURE__ */ u3(
          "ul",
          {
            id: "map-suggestions",
            role: "listbox",
            class: `absolute z-20 w-full mt-1 rounded-xl border shadow-lg max-h-48 overflow-y-auto hidden ${dark ? "bg-slate-800 border-slate-600" : "bg-white border-slate-200"}`
          }
        )
      ] }),
      /* @__PURE__ */ u3("p", { id: "map-hint", class: "text-[11px] text-slate-400 mb-1.5 px-0.5", children: selected ? t3("map.hintSelected") : t3("map.hint") }),
      /* @__PURE__ */ u3("div", { class: "rounded-2xl overflow-hidden", style: `background:${canvasBg}`, children: /* @__PURE__ */ u3(
        "svg",
        {
          id: "map-svg",
          ref: svgRef,
          viewBox: `0 0 ${W} ${H2}`,
          style: "width:100%;display:block;touch-action:pan-y",
          role: "img",
          "aria-label": t3("nav.mapa")
        }
      ) }),
      /* @__PURE__ */ u3("p", { id: "map-empty", class: `${hasMatch ? "hidden" : ""} text-[13px] text-center text-slate-400 mt-4 py-2`, children: t3("map.searchEmpty") }),
      infoPanel
    ] });
  }
  function createEmotionMap({ emociones: emociones2, getDisplayName, t: t3, showDetail }) {
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
        quadData = buildQuadData(emociones2, getDisplayName, containerW());
      }
    }
    function render_() {
      const wrap = document.getElementById("map-content");
      if (!wrap) return;
      ensureData();
      const { nodes, edges, H: H2 } = view === "graph" ? forceData : quadData;
      const W = containerW();
      const dark = document.documentElement.classList.contains("dark");
      const svgEventHandler = {
        click: (ev) => {
          const node = ev.target.closest(".map-node");
          if (!node) {
            selected = null;
            render_();
            return;
          }
          const nombre = node.dataset.nombre;
          selected = selected === nombre ? null : nombre;
          render_();
        },
        keydown: (ev) => {
          if (ev.key !== "Enter" && ev.key !== " ") return;
          const node = ev.target.closest(".map-node");
          if (!node) return;
          ev.preventDefault();
          const nombre = node.dataset.nombre;
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
            H: H2,
            W,
            t: t3,
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
            onQuadrantChange: (q2) => {
              activeQuadrant = q2;
              selected = null;
              render_();
            },
            onOpenDetail: () => {
              const e3 = emociones2.find((em) => em.nombre === selected);
              if (e3) showDetail(e3);
            },
            onClearSelection: () => {
              selected = null;
              nameFilter = "";
              render_();
            },
            onSearch: (ev) => {
              nameFilter = ev.target.value;
              selected = null;
              render_();
              requestAnimationFrame(() => populateSuggestions(nameFilter));
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
      const matches = emociones2.filter((e3) => normalizeText(getDisplayName(e3.nombre)).includes(norm)).slice(0, 8);
      if (!matches.length) {
        suggestionsList.classList.add("hidden");
        return;
      }
      suggestionsList.innerHTML = matches.map(
        (e3) => `<li role="option" tabindex="-1" data-nombre="${escAttr(e3.nombre)}"
                class="px-3 py-2 text-[13px] cursor-pointer transition-colors ${itemC}">
                ${escHtml(getDisplayName(e3.nombre))}
            </li>`
      ).join("");
      suggestionsList.classList.remove("hidden");
      suggestionsList.onmousedown = (ev) => ev.preventDefault();
      suggestionsList.onclick = (ev) => {
        const li = ev.target.closest("li[data-nombre]");
        if (!li) return;
        const e3 = emociones2.find((em) => em.nombre === li.dataset.nombre);
        if (e3) {
          nameFilter = getDisplayName(e3.nombre);
          selected = e3.nombre;
          const searchInput = document.getElementById("map-search");
          if (searchInput) searchInput.value = nameFilter;
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
      if (forceData) for (const n2 of forceData.nodes) n2.label = getDisplayName(n2.nombre);
      if (quadData) for (const n2 of quadData.nodes) n2.label = getDisplayName(n2.nombre);
      if (document.getElementById("map-content")) render_();
    }
    return { renderForTab, onLanguageChanged };
  }

  // js/crisis.jsx
  var TOTAL_STEPS = 3;
  function Progress({ t: t3, step }) {
    return /* @__PURE__ */ u3("div", { class: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ u3("span", { class: "text-xs font-bold text-slate-400", children: [
        t3("crisis.step"),
        " ",
        step,
        " ",
        t3("crisis.of"),
        " ",
        TOTAL_STEPS
      ] }),
      /* @__PURE__ */ u3("div", { class: "flex gap-1.5", children: Array.from({ length: TOTAL_STEPS }, (_2, i3) => /* @__PURE__ */ u3("div", { class: `h-1.5 w-8 rounded-full ${i3 < step ? "bg-slate-800" : "bg-slate-200"}` })) })
    ] });
  }
  function Step1({ t: t3, onNext }) {
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("div", { class: "text-center mb-8", children: [
        /* @__PURE__ */ u3("div", { class: "text-5xl mb-4", "aria-hidden": "true", children: "\u{1F30A}" }),
        /* @__PURE__ */ u3("h3", { class: "text-2xl font-black text-slate-800 mb-3", children: t3("crisis.step1Title") }),
        /* @__PURE__ */ u3("p", { class: "text-slate-600 leading-relaxed", children: t3("crisis.step1Body") })
      ] }),
      /* @__PURE__ */ u3(
        "button",
        {
          id: "crisis-next-btn",
          type: "button",
          onClick: onNext,
          class: "w-full bg-slate-800 text-white py-4 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-colors",
          children: t3("crisis.next")
        }
      )
    ] });
  }
  function Step2({ t: t3, onNext }) {
    const items = t3("crisis.step2Items").split("|");
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("div", { class: "mb-6", children: [
        /* @__PURE__ */ u3("h3", { class: "text-2xl font-black text-slate-800 mb-1", children: t3("crisis.step2Title") }),
        /* @__PURE__ */ u3("p", { class: "text-slate-500 text-sm mb-4", children: t3("crisis.step2Intro") }),
        /* @__PURE__ */ u3("ul", { class: "divide-y divide-slate-100", children: items.map((item, i3) => /* @__PURE__ */ u3("li", { class: "flex items-center gap-3 py-2.5 border-b border-slate-100 last:border-0", children: [
          /* @__PURE__ */ u3("span", { class: "w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 text-xs font-black flex items-center justify-center shrink-0", children: items.length - i3 }),
          /* @__PURE__ */ u3("span", { class: "text-slate-700 font-medium text-sm", children: item })
        ] }, i3)) })
      ] }),
      /* @__PURE__ */ u3(
        "button",
        {
          id: "crisis-next-btn",
          type: "button",
          onClick: onNext,
          class: "w-full bg-slate-800 text-white py-4 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-colors",
          children: t3("crisis.done")
        }
      )
    ] });
  }
  function Step3({ t: t3, onClose }) {
    const actions = t3("crisis.step3Actions").split("|");
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("div", { class: "mb-6", children: [
        /* @__PURE__ */ u3("h3", { class: "text-2xl font-black text-slate-800 mb-1", children: t3("crisis.step3Title") }),
        /* @__PURE__ */ u3("p", { class: "text-slate-500 text-sm mb-4", children: t3("crisis.step3Intro") }),
        /* @__PURE__ */ u3("div", { class: "divide-y divide-slate-100", children: actions.map((action, i3) => /* @__PURE__ */ u3("label", { class: "flex items-center gap-3 py-3 cursor-pointer group", children: [
          /* @__PURE__ */ u3(
            "input",
            {
              type: "radio",
              name: "crisis-action",
              value: String(i3),
              class: "w-4 h-4 accent-slate-800 shrink-0"
            }
          ),
          /* @__PURE__ */ u3("span", { class: "text-slate-700 font-medium text-sm group-hover:text-slate-900 transition-colors", children: action })
        ] }, i3)) })
      ] }),
      /* @__PURE__ */ u3("p", { class: "text-slate-400 text-xs text-center mb-4", children: t3("crisis.step3End") }),
      /* @__PURE__ */ u3(
        "button",
        {
          id: "crisis-close-btn",
          type: "button",
          onClick: onClose,
          class: "w-full bg-slate-800 text-white py-4 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-colors",
          children: t3("crisis.close")
        }
      )
    ] });
  }
  function CrisisFlow({ t: t3, step, onNext, onClose }) {
    return /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3(Progress, { t: t3, step }),
      step === 1 && /* @__PURE__ */ u3(Step1, { t: t3, onNext }),
      step === 2 && /* @__PURE__ */ u3(Step2, { t: t3, onNext }),
      step === 3 && /* @__PURE__ */ u3(Step3, { t: t3, onClose })
    ] });
  }
  function closeCrisis() {
    document.getElementById("crisis-panel")?.close();
    document.getElementById("crisis-trigger-btn")?.focus();
  }
  function createCrisisFlow({ t: t3 }) {
    let step = 1;
    let contentEl = null;
    function rerender() {
      R(
        /* @__PURE__ */ u3(CrisisFlow, { t: t3, step, onNext: handleNext, onClose: closeCrisis }),
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
    for (const t3 of ["light", "auto", "dark"]) {
      document.getElementById(`theme-btn-${t3}`)?.classList.toggle("settings-option-active", t3 === theme);
    }
    for (const l3 of ["es", "en"]) {
      document.getElementById(`lang-btn-${l3}`)?.classList.toggle("settings-option-active", l3 === lang);
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
  function initOfflineBanner({ t: t3 }) {
    const banner = document.getElementById("offline-banner");
    const text = document.getElementById("offline-banner-text");
    if (!banner || !text) return;
    const update = () => {
      text.textContent = t3("offlineBanner");
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
  var BUILD_VERSION = "mp9w1xgp";

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
