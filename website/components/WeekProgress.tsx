"use client";

const weeks = [
  { n: 1, label: "Week 1–2", href: "/summer-camp/week-1-2" },
  { n: 2, label: "Week 3–4", href: "/summer-camp/week-3-4" },
  { n: 3, label: "Week 5–6", href: "/summer-camp/week-5-6" },
  { n: 4, label: "Week 7–8", href: "/summer-camp/week-7-8" },
];

export default function WeekProgress({ current }: { current: 1 | 2 | 3 | 4 }) {
  const pct = (current / 4) * 100;

  return (
    <div className="px-8 py-4 mb-2" style={{ borderBottom: "1px solid var(--bdr)" }}>
      {/* Label row */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold" style={{ color: "var(--tx3)" }}>
          Block {current} of 4
        </span>
        <span className="text-xs" style={{ color: "var(--tx4)" }}>{pct}% complete</span>
      </div>

      {/* Progress bar */}
      <div className="relative h-1 rounded-full mb-3" style={{ background: "var(--bg3)" }}>
        <div className="absolute left-0 top-0 h-1 rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, background: "linear-gradient(90deg, #22c55e, #4ade80)" }} />
      </div>

      {/* Week dots */}
      <div className="grid grid-cols-4 gap-2">
        {weeks.map(w => (
          <a key={w.n} href={w.href}
            className="flex items-center gap-1.5 text-[11px] font-medium rounded-md px-2 py-1 transition-all"
            style={w.n === current
              ? { background: "rgba(34,197,94,0.1)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.2)" }
              : w.n < current
              ? { color: "#4ade80", opacity: 0.6 }
              : { color: "var(--tx4)" }
            }>
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${w.n <= current ? "bg-green-400" : "bg-[var(--bdr2)]"}`} />
            {w.label}
          </a>
        ))}
      </div>
    </div>
  );
}
