export const BODY_ZONES = {
    simple: [
        { id: "head",    labelKey: "zoneHead",    color: "#818cf8" },
        { id: "chest",   labelKey: "zoneChest",   color: "#f472b6" },
        { id: "stomach", labelKey: "zoneStomach", color: "#fb923c" },
        { id: "arms",    labelKey: "zoneArms",    color: "#34d399" },
        { id: "legs",    labelKey: "zoneLegs",    color: "#fbbf24" },
    ],
    detailed: [
        { id: "head",      labelKey: "zoneHead",      color: "#818cf8" },
        { id: "face",      labelKey: "zoneFace",       color: "#f87171" },
        { id: "throat",    labelKey: "zoneThroat",    color: "#e879f9" },
        { id: "shoulders", labelKey: "zoneShoulders", color: "#60a5fa" },
        { id: "chest",     labelKey: "zoneChest",     color: "#f472b6" },
        { id: "stomach",   labelKey: "zoneStomach",   color: "#fb923c" },
        { id: "arms",      labelKey: "zoneArms",      color: "#34d399" },
        { id: "legs",      labelKey: "zoneLegs",      color: "#fbbf24" },
    ],
};

// In simple mode, each zone covers the union of these detailed zones
export const SIMPLE_ZONE_GROUPS = {
    head:    ["head", "face"],
    chest:   ["chest", "throat", "shoulders"],
    stomach: ["stomach"],
    arms:    ["arms"],
    legs:    ["legs"],
};

// Which emotions manifest in each detailed zone
export const BODY_ZONE_EMOTIONS = {
    head:      ["Confusión", "Preocupación", "Ansiedad", "Angustia"],
    face:      ["Vergüenza", "Enojo", "Tristeza", "Alegría"],
    throat:    ["Angustia", "Miedo", "Asco", "Vergüenza"],
    shoulders: ["Ansiedad", "Frustración", "Irritabilidad", "Preocupación", "Enojo"],
    chest:     ["Enojo", "Tristeza", "Miedo", "Culpa", "Soledad", "Alegría", "Calma",
                "Angustia", "Gratitud", "Orgullo", "Nostalgia", "Alivio", "Ternura",
                "Celos", "Rechazo", "Frustración", "Preocupación"],
    stomach:   ["Miedo", "Ansiedad", "Asco", "Culpa", "Celos", "Angustia", "Decepción", "Envidia"],
    arms:      ["Enojo", "Frustración", "Entusiasmo", "Irritabilidad"],
    legs:      ["Tristeza", "Alegría", "Aburrimiento", "Ansiedad", "Calma", "Felicidad"],
};
