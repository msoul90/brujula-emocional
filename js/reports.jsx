// @ts-check
import { render } from "preact";
import { useState } from "preact/hooks";
import { DIARY_TAGS } from "./constants.js";
import { getDiaryEntries } from "./persistence.js";
import { get } from "./store.js";

/** @typedef {import('./types.js').TFn} TFn */
/** @typedef {import('./types.js').GetDisplayNameFn} GetDisplayNameFn */
/** @typedef {import('./data/emotions.js').Emotion} Emotion */
/** @typedef {import('./diary.jsx').DiaryEntry} DiaryEntry */
/** @typedef {"7d"|"30d"|"all"} Period */

const CHART_HEIGHT = 80;
const BAR_WIDTH    = 24;
const BAR_GAP      = 8;

// ── Pure data helpers ─────────────────────────────────────────────────────────

/** @param {DiaryEntry[]} entries @returns {Map<string, number>} */
export function countByEmotion(entries) {
    const map = new Map();
    for (const e of entries) map.set(e.emotion, (map.get(e.emotion) ?? 0) + 1);
    return map;
}

/** @param {DiaryEntry[]} entries @returns {Map<string, number>} */
export function countByTag(entries) {
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
export function isoWeekKey(isoDate) {
    const d   = new Date(isoDate);
    const day = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - day);
    const year = d.getUTCFullYear();
    const week = Math.ceil(((d.getTime() - Date.UTC(year, 0, 1)) / 86400000 + 1) / 7);
    return `${year}-W${String(week).padStart(2, "0")}`;
}

/** @param {string} weekKey @returns {Date} Monday of that ISO week */
function isoWeekToMonday(weekKey) {
    const [yearStr, weekStr] = weekKey.split("-W");
    const year = Number.parseInt(yearStr, 10);
    const week = Number.parseInt(weekStr, 10);
    const jan4 = new Date(Date.UTC(year, 0, 4));
    const dow  = jan4.getUTCDay() || 7;
    return new Date(jan4.getTime() + (week - 1) * 7 * 86400000 - (dow - 1) * 86400000);
}

/** @param {DiaryEntry[]} entries @param {string} [lang] @returns {{ key: string, count: number, label: string }[]} last 8 weeks */
export function last8Weeks(entries, lang = "es") {
    const today = new Date();
    const weeks = [];
    for (let i = 7; i >= 0; i--) {
        const d = new Date(today);
        d.setUTCDate(today.getUTCDate() - i * 7);
        const key    = isoWeekKey(d.toISOString());
        const monday = isoWeekToMonday(key);
        const label  = `${monday.getUTCDate()} ${monday.toLocaleDateString(lang, { month: "short" })}`;
        weeks.push({ key, label });
    }
    const counts = new Map(weeks.map((w) => [w.key, 0]));
    for (const e of entries) {
        const k = isoWeekKey(e.date);
        if (counts.has(k)) counts.set(k, counts.get(k) + 1);
    }
    return weeks.map(({ key, label }) => ({ key, count: counts.get(key) ?? 0, label }));
}

/** @param {DiaryEntry[]} entries @param {Period} period @returns {DiaryEntry[]} */
export function filterByPeriod(entries, period) {
    if (period === "all") return entries;
    const days   = period === "7d" ? 7 : 30;
    const cutoff = Date.now() - days * 86400000;
    return entries.filter((e) => new Date(e.date).getTime() >= cutoff);
}

/** @param {Date} d @returns {string} */
function dayKey(d) { return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`; }

/** @param {DiaryEntry[]} allEntries @returns {number} consecutive days journaled up to today */
export function calcStreak(allEntries) {
    if (!allEntries.length) return 0;
    const days      = new Set(allEntries.map((e) => dayKey(new Date(e.date))));
    const today     = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    if (!days.has(dayKey(today)) && !days.has(dayKey(yesterday))) return 0;
    const startOffset = days.has(dayKey(today)) ? 0 : 1;
    let streak = 0;
    for (let i = startOffset; i <= 365; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);
        if (days.has(dayKey(d))) streak++;
        else break;
    }
    return streak;
}

/** @param {DiaryEntry[]} allEntries @param {Period} period @returns {number} delta vs previous period */
export function calcTrend(allEntries, period) {
    if (period === "all") return 0;
    const days          = period === "7d" ? 7 : 30;
    const now           = Date.now();
    const currentCutoff = now - days * 86400000;
    const prevCutoff    = now - 2 * days * 86400000;
    const current = allEntries.filter((e) => new Date(e.date).getTime() >= currentCutoff).length;
    const prev    = allEntries.filter((e) => {
        const t = new Date(e.date).getTime();
        return t >= prevCutoff && t < currentCutoff;
    }).length;
    return current - prev;
}

/** @param {DiaryEntry[]} entries @returns {{ morning: number, afternoon: number, night: number }} */
export function countByTimeOfDay(entries) {
    let morning = 0, afternoon = 0, night = 0;
    for (const e of entries) {
        const hour = new Date(e.date).getHours();
        if (hour >= 6 && hour < 12) morning++;
        else if (hour >= 12 && hour < 20) afternoon++;
        else night++;
    }
    return { morning, afternoon, night };
}

// ── Chart components ──────────────────────────────────────────────────────────

/**
 * @param {{ items: { label: string, count: number, color?: string, key?: string }[], currentWeekKey?: string }} props
 */
function VerticalBarChart({ items, currentWeekKey }) {
    const max  = Math.max(...items.map((i) => i.count), 1);
    const svgW = items.length * (BAR_WIDTH + BAR_GAP) - BAR_GAP + 8;

    return (
        <div class="overflow-x-auto hide-scroll pb-1">
            <svg width={svgW} height={CHART_HEIGHT + 36} aria-hidden="true">
                {items.map((item, idx) => {
                    const barH    = Math.max(2, Math.round((item.count / max) * CHART_HEIGHT));
                    const x       = idx * (BAR_WIDTH + BAR_GAP) + 4;
                    const y       = CHART_HEIGHT - barH;
                    const fill    = item.color ?? "#7C5CFC";
                    let opacity = "0.85";
                    if (currentWeekKey != null) {
                        opacity = item.key === currentWeekKey ? "1" : "0.55";
                    }
                    return (
                        <g key={item.label}>
                            <rect x={x} y={y} width={BAR_WIDTH} height={barH}
                                rx="4" fill={fill} opacity={opacity} />
                            <text x={x + BAR_WIDTH / 2} y={CHART_HEIGHT + 14}
                                text-anchor="middle" font-size="8" fill="currentColor"
                                class="text-slate-400" opacity="0.8">
                                {item.label.length > 6 ? item.label.slice(0, 5) + "." : item.label}
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

/** @param {{ items: { label: string, count: number }[], max: number }} props */
function HorizontalBarChart({ items, max }) {
    return (
        <div class="space-y-2">
            {items.map((item) => (
                <div key={item.label} class="flex items-center gap-2">
                    <span class="text-xs text-slate-500 w-16 shrink-0 truncate capitalize">{item.label}</span>
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

// ── Section card ──────────────────────────────────────────────────────────────

/** @param {{ title: string, children: any }} props */
function Card({ title, children }) {
    return (
        <div class="bg-white rounded-2xl p-4 shadow-sm mb-4">
            <h3 class="text-sm font-bold text-slate-600 mb-3">{title}</h3>
            {children}
        </div>
    );
}

// ── New components ────────────────────────────────────────────────────────────

/** @param {{ period: Period, onChange: (p: Period) => void, t: TFn }} props */
function PeriodFilter({ period, onChange, t }) {
    /** @type {[Period, string][]} */
    const options = [
        ["7d",  t("reports.period7d")],
        ["30d", t("reports.period30d")],
        ["all", t("reports.periodAll")],
    ];
    return (
        <div class="flex gap-2 mb-4">
            {options.map(([id, label]) => (
                <button key={id} type="button"
                    class={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${period === id ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}
                    onClick={() => onChange(id)}>
                    {label}
                </button>
            ))}
        </div>
    );
}

/**
 * @param {{ filtered: DiaryEntry[], period: Period, topNombre: string, topTag: string, t: TFn, getDisplayName: GetDisplayNameFn }} props
 */
function NarrativeCard({ filtered, period, topNombre, topTag, t, getDisplayName }) {
    const count = filtered.length;
    if (count === 0) return null;

    let periodLabel = t("reports.narrativeAll");
    if (period === "7d") periodLabel = t("reports.narrativeWeek");
    else if (period === "30d") periodLabel = t("reports.narrativeMonth");

    const countPhrase = count === 1
        ? t("reports.narrativeRegistered")
        : t("reports.narrativeRegisteredPlural").replace("{n}", String(count));

    let topPhrase = "";
    if (topNombre) {
        const emotionName = getDisplayName(topNombre);
        if (topTag) {
            const tagLabel = t(`diary.tag${topTag.charAt(0).toUpperCase()}${topTag.slice(1)}`).toLowerCase();
            topPhrase = " " + t("reports.narrativeTopWithTag")
                .replace("{emotion}", emotionName)
                .replace("{context}", tagLabel);
        } else {
            topPhrase = " " + t("reports.narrativeTop").replace("{emotion}", emotionName);
        }
    }

    return (
        <p class="text-sm text-slate-600 leading-relaxed mb-4 px-1">
            <span class="font-semibold text-slate-700">{periodLabel}</span>{" "}
            {countPhrase}{topPhrase}
        </p>
    );
}

/**
 * @param {{ total: number, streak: number, trend: number, period: Period, distinctEmotions: number, t: TFn }} props
 */
function MetricsRow({ total, streak, trend, period, distinctEmotions, t }) {
    let trendColor = "text-slate-400";
    if (trend > 0) trendColor = "text-emerald-600";
    else if (trend < 0) trendColor = "text-rose-500";

    let trendLabel = String(trend);
    if (trend > 0) trendLabel = `+${trend}`;
    else if (trend === 0) trendLabel = "=";

    return (
        <div class="grid grid-cols-3 gap-2 mb-4">
            <div class="bg-white rounded-2xl p-3 shadow-sm text-center">
                <p class="text-2xl font-black text-slate-800">{total}</p>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wide mt-0.5">{t("reports.totalEntries")}</p>
            </div>
            <div class="bg-white rounded-2xl p-3 shadow-sm text-center">
                <p class="text-2xl font-black text-slate-800">{streak}</p>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wide mt-0.5">{t("reports.streak")}</p>
            </div>
            {period === "all" ? (
                <div class="bg-white rounded-2xl p-3 shadow-sm text-center">
                    <p class="text-2xl font-black text-slate-800">{distinctEmotions}</p>
                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wide mt-0.5">{t("reports.distinctEmotions")}</p>
                </div>
            ) : (
                <div class="bg-white rounded-2xl p-3 shadow-sm text-center">
                    <p class={`text-2xl font-black ${trendColor}`}>{trendLabel}</p>
                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wide mt-0.5">{t("reports.trend")}</p>
                </div>
            )}
        </div>
    );
}

/** @param {{ counts: { morning: number, afternoon: number, night: number }, t: TFn }} props */
function TimeOfDayCard({ counts, t }) {
    const total = counts.morning + counts.afternoon + counts.night;
    if (total === 0) return null;

    const items = [
        { label: t("reports.timeMorning"),   count: counts.morning },
        { label: t("reports.timeAfternoon"), count: counts.afternoon },
        { label: t("reports.timeNight"),     count: counts.night },
    ];

    return (
        <Card title={t("reports.timeOfDay")}>
            <div class="flex gap-3">
                {items.map((item) => {
                    const pct = Math.round((item.count / total) * 100);
                    return (
                        <div key={item.label} class="flex-1 text-center">
                            <div class="bg-slate-100 rounded-full h-1.5 overflow-hidden mb-2">
                                <div class="h-1.5 rounded-full bg-violet-400"
                                    style={{ width: `${pct}%` }} />
                            </div>
                            <p class="text-[10px] text-slate-500 font-medium">{item.label}</p>
                            <p class="text-xs font-bold text-slate-700">{item.count}</p>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
}

/** @param {{ total: number, t: TFn }} props */
function MotivationalNote({ total, t }) {
    let msg = t("reports.motiveLow");
    if (total >= 15) msg = t("reports.motiveHigh");
    else if (total >= 5) msg = t("reports.motiveMid");
    return (
        <p class="text-center text-xs text-slate-400 leading-relaxed pb-2 px-4 italic">{msg}</p>
    );
}

// ── Empty states ──────────────────────────────────────────────────────────────

/** @param {{ t: TFn, onGoToEntries: () => void }} props */
function EmptyState({ t, onGoToEntries }) {
    return (
        <div class="flex flex-col items-center justify-center py-12 text-center px-6">
            <svg class="w-12 h-12 text-slate-200 mb-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
            <p class="text-slate-600 font-semibold text-sm mb-1">{t("reports.noEntries")}</p>
            <p class="text-slate-400 text-xs leading-relaxed mb-5">{t("reports.emptyPrompt")}</p>
            <button type="button" onClick={onGoToEntries}
                class="bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-slate-700 transition-colors">
                {t("reports.goToEntries")}
            </button>
        </div>
    );
}

/** @param {{ period: Period, t: TFn }} props */
function EmptyPeriodState({ period, t }) {
    const periodLabel = period === "7d" ? t("reports.period7d") : t("reports.period30d");
    return (
        <div class="bg-white rounded-2xl p-6 shadow-sm text-center mt-2">
            <p class="text-slate-400 text-sm">{t("reports.noEntriesInPeriod").replace("{period}", periodLabel)}</p>
        </div>
    );
}

// ── Main panel ────────────────────────────────────────────────────────────────

/**
 * @param {{ entries: DiaryEntry[], t: TFn, getDisplayName: GetDisplayNameFn, emociones: Emotion[], onGoToEntries: () => void }} props
 */
function ReportsPanel({ entries, t, getDisplayName, emociones, onGoToEntries }) {
    const [period, setPeriod] = useState(/** @type {Period} */ ("30d"));

    if (entries.length === 0) {
        return <EmptyState t={t} onGoToEntries={onGoToEntries} />;
    }

    const filtered        = filterByPeriod(entries, period);
    const streak          = calcStreak(entries);
    const trend           = calcTrend(entries, period);
    const distinctEmotions = new Set(filtered.map((e) => e.emotion)).size;

    // Emotion frequency — top 8 in filtered period
    const emotionCounts = countByEmotion(filtered);
    const topEmotions   = Array.from(emotionCounts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 8);
    const emotionItems  = topEmotions.map(([nombre, count]) => {
        const emocion = emociones.find((e) => e.nombre === nombre);
        return { label: getDisplayName(nombre), count, color: emocion?.color ?? "#7C5CFC" };
    });
    const [topNombre] = topEmotions[0] ?? ["", 0];

    // Top tag for narrative (most used tag in filtered period)
    const tagCounts  = countByTag(filtered);
    const topTagEntry = Array.from(tagCounts.entries())
        .filter(([, c]) => c > 0)
        .sort((a, b) => b[1] - a[1])[0];
    const topTag = topTagEntry?.[0] ?? "";

    // Tags — only show used ones
    const tagItems = DIARY_TAGS
        .map((tag) => ({
            label: t(`diary.tag${tag.charAt(0).toUpperCase()}${tag.slice(1)}`),
            count: tagCounts.get(tag) ?? 0,
        }))
        .filter((item) => item.count > 0);
    const tagMax = Math.max(...tagItems.map((i) => i.count), 1);

    // Weekly chart — always last 8 weeks, independent of period filter
    const lang           = /** @type {string} */ (get("currentLang") || "es");
    const currentWeekKey = isoWeekKey(new Date().toISOString());
    const weeks          = last8Weeks(entries, lang);
    const weekItems  = weeks.map((w) => ({ label: w.label, count: w.count, key: w.key }));

    const timeOfDay = countByTimeOfDay(filtered);

    return (
        <div>
            <PeriodFilter period={period} onChange={setPeriod} t={t} />

            <NarrativeCard filtered={filtered} period={period} topNombre={topNombre}
                topTag={topTag} t={t} getDisplayName={getDisplayName} />

            <MetricsRow total={filtered.length} streak={streak} trend={trend}
                period={period} distinctEmotions={distinctEmotions} t={t} />

            {filtered.length === 0 ? (
                <EmptyPeriodState period={period} t={t} />
            ) : (
                <>
                    {emotionItems.length > 0 && (
                        <Card title={t("reports.emotionFreq")}>
                            <VerticalBarChart items={emotionItems} />
                        </Card>
                    )}

                    <TimeOfDayCard counts={timeOfDay} t={t} />

                    {tagItems.length > 0 ? (
                        <Card title={t("reports.tagDist")}>
                            <HorizontalBarChart items={tagItems} max={tagMax} />
                        </Card>
                    ) : (
                        <div class="bg-white rounded-2xl p-4 shadow-sm mb-4">
                            <h3 class="text-sm font-bold text-slate-600 mb-1">{t("reports.tagDist")}</h3>
                            <p class="text-xs text-slate-400 leading-relaxed">{t("reports.noTagsNote")}</p>
                        </div>
                    )}

                    <Card title={t("reports.weeklyCount")}>
                        <VerticalBarChart items={weekItems} currentWeekKey={currentWeekKey} />
                    </Card>

                    <MotivationalNote total={entries.length} t={t} />
                </>
            )}
        </div>
    );
}

// ── Factory ───────────────────────────────────────────────────────────────────

/**
 * @param {{ t: TFn, getDisplayName: GetDisplayNameFn, emociones: Emotion[], onGoToEntries?: () => void }} opts
 * @returns {{ renderForTab: () => void }}
 */
export function createReports({ t, getDisplayName, emociones, onGoToEntries = () => {} }) {
    function renderForTab() {
        const content = document.getElementById("reports-content");
        if (!content) return;
        const entries = getDiaryEntries();
        render(
            <ReportsPanel entries={entries} t={t} getDisplayName={getDisplayName}
                emociones={emociones} onGoToEntries={onGoToEntries} />,
            content
        );
    }

    return { renderForTab };
}
