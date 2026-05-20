// @ts-check
import { render } from "preact";
import { DIARY_TAGS } from "./constants.js";
import { getDiaryEntries } from "./persistence.js";

/** @typedef {import('./types.js').TFn} TFn */
/** @typedef {import('./types.js').GetDisplayNameFn} GetDisplayNameFn */
/** @typedef {import('./data/emotions.js').Emotion} Emotion */
/** @typedef {import('./diary.jsx').DiaryEntry} DiaryEntry */

const CHART_HEIGHT = 80;
const BAR_WIDTH    = 24;
const BAR_GAP      = 8;

// ── Pure data helpers ─────────────────────────────────────────────────────────

/** @param {DiaryEntry[]} entries @returns {Map<string, number>} */
function countByEmotion(entries) {
    const map = new Map();
    for (const e of entries) map.set(e.emotion, (map.get(e.emotion) ?? 0) + 1);
    return map;
}

/** @param {DiaryEntry[]} entries @returns {Map<string, number>} */
function countByTag(entries) {
    const map = new Map();
    for (const tag of DIARY_TAGS) map.set(tag, 0);
    for (const e of entries) {
        for (const tag of e.tags) {
            if (map.has(tag)) map.set(tag, map.get(tag) + 1);
        }
    }
    return map;
}

/** @param {string} isoDate @returns {string} ISO week key "YYYY-Www" */
function isoWeekKey(isoDate) {
    const d   = new Date(isoDate);
    const day = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - day);
    const year = d.getUTCFullYear();
    const week = Math.ceil(((d - new Date(Date.UTC(year, 0, 1))) / 86400000 + 1) / 7);
    return `${year}-W${String(week).padStart(2, "0")}`;
}

/** @param {DiaryEntry[]} entries @returns {{ key: string, count: number }[]} last 8 weeks */
function last8Weeks(entries) {
    const today   = new Date();
    const weeks   = [];
    for (let i = 7; i >= 0; i--) {
        const d = new Date(today);
        d.setUTCDate(today.getUTCDate() - i * 7);
        weeks.push(isoWeekKey(d.toISOString()));
    }
    const counts = new Map(weeks.map((w) => [w, 0]));
    for (const e of entries) {
        const k = isoWeekKey(e.date);
        if (counts.has(k)) counts.set(k, counts.get(k) + 1);
    }
    return weeks.map((key) => ({ key, count: counts.get(key) ?? 0 }));
}

// ── Chart components ──────────────────────────────────────────────────────────

/**
 * @param {{ items: { label: string, count: number, color?: string }[], t: TFn }} props
 */
function VerticalBarChart({ items, t }) {
    const max = Math.max(...items.map((i) => i.count), 1);
    const svgW = items.length * (BAR_WIDTH + BAR_GAP) - BAR_GAP + 8;

    return (
        <div class="overflow-x-auto hide-scroll pb-1">
            <svg width={svgW} height={CHART_HEIGHT + 36} aria-hidden="true">
                {items.map((item, idx) => {
                    const barH  = Math.max(2, Math.round((item.count / max) * CHART_HEIGHT));
                    const x     = idx * (BAR_WIDTH + BAR_GAP) + 4;
                    const y     = CHART_HEIGHT - barH;
                    const fill  = item.color ?? "#7C5CFC";
                    return (
                        <g key={item.label}>
                            <rect x={x} y={y} width={BAR_WIDTH} height={barH}
                                rx="4" fill={fill} opacity="0.85" />
                            <text x={x + BAR_WIDTH / 2} y={CHART_HEIGHT + 13}
                                text-anchor="middle" font-size="9" fill="currentColor"
                                class="text-slate-400" opacity="0.8">
                                {item.label.slice(0, 5)}
                            </text>
                            {item.count > 0 && (
                                <text x={x + BAR_WIDTH / 2} y={y - 3}
                                    text-anchor="middle" font-size="9" font-weight="600"
                                    fill="currentColor" class="text-slate-600">
                                    {item.count}
                                </text>
                            )}
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}

/**
 * @param {{ items: { label: string, count: number }[], max: number }} props
 */
function HorizontalBarChart({ items, max }) {
    return (
        <div class="space-y-2">
            {items.map((item) => (
                <div key={item.label} class="flex items-center gap-2">
                    <span class="text-xs text-slate-500 w-14 shrink-0 truncate capitalize">{item.label}</span>
                    <div class="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div class="h-2 rounded-full bg-violet-400"
                            style={{ width: `${max > 0 ? Math.round((item.count / max) * 100) : 0}%` }} />
                    </div>
                    <span class="text-xs font-semibold text-slate-500 w-5 text-right">{item.count}</span>
                </div>
            ))}
        </div>
    );
}

// ── Section card wrapper ──────────────────────────────────────────────────────

/** @param {{ title: string, children: any }} props */
function Card({ title, children }) {
    return (
        <div class="bg-white rounded-2xl p-4 shadow-sm mb-4">
            <h3 class="text-sm font-bold text-slate-600 mb-3">{title}</h3>
            {children}
        </div>
    );
}

// ── Main panel ────────────────────────────────────────────────────────────────

/**
 * @param {{ entries: DiaryEntry[], t: TFn, getDisplayName: GetDisplayNameFn, emociones: Emotion[] }} props
 */
function ReportsPanel({ entries, t, getDisplayName, emociones }) {
    if (entries.length === 0) {
        return (
            <div class="flex flex-col items-center justify-center py-16 text-center px-4">
                <svg class="w-12 h-12 text-slate-200 mb-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"/>
                </svg>
                <p class="text-slate-400 text-sm">{t("reports.noEntries")}</p>
            </div>
        );
    }

    // Emotion frequency — top 8
    const emotionCounts = countByEmotion(entries);
    const topEmotions   = Array.from(emotionCounts.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8);
    const emotionItems  = topEmotions.map(([nombre, count]) => {
        const emocion = emociones.find((e) => e.nombre === nombre);
        return { label: getDisplayName(nombre), count, color: emocion?.color ?? "#7C5CFC" };
    });

    // Most frequent (all-time stat)
    const [topNombre, topCount] = topEmotions[0] ?? ["", 0];

    // Tags distribution
    const tagCounts = countByTag(entries);
    const tagItems  = DIARY_TAGS.map((tag) => ({ label: tag, count: tagCounts.get(tag) ?? 0 }));
    const tagMax    = Math.max(...tagItems.map((i) => i.count), 1);

    // Weekly entries — last 8 weeks
    const weeks     = last8Weeks(entries);
    const weekItems = weeks.map((w) => ({ label: w.key.slice(5), count: w.count }));

    return (
        <div>
            <h2 class="text-xl font-black text-slate-800 mb-4">{t("reports.title")}</h2>

            {topNombre && (
                <div class="bg-violet-50 rounded-2xl p-4 mb-4 flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: emociones.find((e) => e.nombre === topNombre)?.color ?? "#7C5CFC" }}>
                        <span class="text-white text-lg">★</span>
                    </div>
                    <div>
                        <p class="text-xs text-violet-500 font-semibold uppercase tracking-wide">{t("reports.allTimeStat")}</p>
                        <p class="text-slate-800 font-bold">{getDisplayName(topNombre)}
                            <span class="text-xs text-slate-400 font-normal ml-1">· {topCount} {t("reports.times")}</span>
                        </p>
                    </div>
                </div>
            )}

            <Card title={t("reports.emotionFreq")}>
                <VerticalBarChart items={emotionItems} t={t} />
            </Card>

            <Card title={t("reports.tagDist")}>
                <HorizontalBarChart items={tagItems} max={tagMax} />
            </Card>

            <Card title={t("reports.weeklyCount")}>
                <VerticalBarChart items={weekItems} t={t} />
            </Card>
        </div>
    );
}

// ── Factory ───────────────────────────────────────────────────────────────────

/**
 * @param {{ t: TFn, getDisplayName: GetDisplayNameFn, emociones: Emotion[] }} opts
 * @returns {{ renderForTab: () => void }}
 */
export function createReports({ t, getDisplayName, emociones }) {
    function renderForTab() {
        const content = document.getElementById("reports-content");
        if (!content) return;
        const entries = getDiaryEntries();
        render(
            <ReportsPanel entries={entries} t={t} getDisplayName={getDisplayName} emociones={emociones} />,
            content
        );
    }

    return { renderForTab };
}
