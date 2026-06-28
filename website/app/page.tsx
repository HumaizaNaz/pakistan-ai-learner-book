"use client";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";
import { BookOpen, Tent, ArrowRight, Sparkles, ChevronRight } from "lucide-react";

const t = {
  ur: {
    nav: "AI Learning Hub",
    badge: "Pakistan · June 2026",
    h1: "AI Skills Seekho.",
    h2: "Future Khud Banao.",
    sub: "Bina coding ke 8 hafton mein professional AI tools master karo. ChatGPT, Canva AI, GitHub — sab real projects ke saath.",
    sc_eyebrow: "Summer Camp",
    sc_title: "2-Month No-Code AI Course",
    sc_desc: "Ages 15–18 ke liye. LinkedIn, GitHub aur 10+ AI tools — pehle din se practical.",
    sc_meta: ["Ages 15–18", "8 Hafte", "No Coding"],
    sc_cta: "Course Dekho",
    zn_eyebrow: "Zara aur NOVA",
    zn_title: "ki AI Duniya",
    zn_desc: "Grade 4–10 ke liye Roman Urdu mein coding curriculum. HTML se AI Agents tak — 3 books, 48 chapters.",
    zn_meta: ["Grade 4–10", "48 Chapters", "Roman Urdu"],
    zn_cta: "Books Dekho",
    footer: "Pakistan AI Education Initiative · 2026",
  },
  en: {
    nav: "AI Learning Hub",
    badge: "Pakistan · June 2026",
    h1: "Learn AI Skills.",
    h2: "Build Your Future.",
    sub: "Master professional AI tools in 8 weeks — no coding required. ChatGPT, Canva AI, GitHub — all through real projects.",
    sc_eyebrow: "Summer Camp",
    sc_title: "2-Month No-Code AI Course",
    sc_desc: "For ages 15–18. LinkedIn, GitHub and 10+ AI tools — practical from day one.",
    sc_meta: ["Ages 15–18", "8 Weeks", "No Coding"],
    sc_cta: "View Course",
    zn_eyebrow: "Zara & NOVA",
    zn_title: "AI Universe",
    zn_desc: "Coding curriculum in Roman Urdu for Grade 4–10. From HTML to AI Agents — 3 books, 48 chapters.",
    zn_meta: ["Grade 4–10", "48 Chapters", "Roman Urdu"],
    zn_cta: "View Books",
    footer: "Pakistan AI Education Initiative · 2026",
  },
};

export default function HomePage() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--bg)" }}>

      {/* ── Nav ── */}
      <nav
        className="sticky top-0 z-20 flex items-center justify-between px-6 md:px-10 h-14"
        style={{
          borderBottom: "1px solid var(--bdr)",
          background: "var(--bg)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "var(--tx)" }}>
            <Sparkles className="w-3 h-3" style={{ color: "var(--bg)" }} />
          </div>
          <span className="text-sm font-semibold" style={{ color: "var(--tx)" }}>{tx.nav}</span>
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 flex-1">

        {/* Eyebrow badge */}
        <div
          className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full mb-10"
          style={{ border: "1px solid var(--bdr2)", color: "var(--tx3)", background: "var(--bg2)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
          {tx.badge}
        </div>

        {/* Headline */}
        <h1 className="font-black tracking-tight leading-[1.06] mb-5" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
          <span style={{ color: "var(--tx)" }}>{tx.h1}</span>
          <br />
          <span style={{
            background: "linear-gradient(90deg, #22c55e, #a78bfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            {tx.h2}
          </span>
        </h1>

        {/* Sub */}
        <p className="text-sm md:text-base max-w-md leading-relaxed mb-16" style={{ color: "var(--tx3)" }}>
          {tx.sub}
        </p>

        {/* ── Bento Cards ── */}
        <div className="w-full max-w-2xl grid md:grid-cols-2 gap-3 text-left">

          {/* Summer Camp Card */}
          <Link
            href="/summer-camp"
            className="group flex flex-col rounded-2xl p-6 transition-all duration-200"
            style={{ background: "var(--bg2)", border: "1px solid var(--bdr)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(34,197,94,0.4)"; e.currentTarget.style.background = "var(--bg3)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--bdr)"; e.currentTarget.style.background = "var(--bg2)"; }}
          >
            {/* Icon + eyebrow */}
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}
              >
                <Tent className="w-4 h-4 text-green-400" />
              </div>
              <span className="text-xs font-bold text-green-500 uppercase tracking-widest">{tx.sc_eyebrow}</span>
            </div>

            {/* Title */}
            <h2 className="text-base font-bold mb-2 leading-snug" style={{ color: "var(--tx)" }}>{tx.sc_title}</h2>

            {/* Desc */}
            <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--tx3)" }}>{tx.sc_desc}</p>

            {/* Meta pills */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {tx.sc_meta.map(m => (
                <span key={m} className="text-[11px] font-medium px-2 py-0.5 rounded-md"
                  style={{ background: "rgba(34,197,94,0.08)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.15)" }}>
                  {m}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-1 text-sm font-semibold text-green-400 group-hover:gap-2 transition-all">
              {tx.sc_cta} <ChevronRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Zara NOVA Card */}
          <Link
            href="/zara-nova"
            className="group flex flex-col rounded-2xl p-6 transition-all duration-200"
            style={{ background: "var(--bg2)", border: "1px solid var(--bdr)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(139,92,246,0.4)"; e.currentTarget.style.background = "var(--bg3)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--bdr)"; e.currentTarget.style.background = "var(--bg2)"; }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}
              >
                <BookOpen className="w-4 h-4 text-violet-400" />
              </div>
              <span className="text-xs font-bold text-violet-500 uppercase tracking-widest">{tx.zn_eyebrow}</span>
            </div>

            <h2 className="text-base font-bold mb-2 leading-snug" style={{ color: "var(--tx)" }}>
              Zara aur NOVA <span className="text-violet-400">{tx.zn_title}</span>
            </h2>

            <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--tx3)" }}>{tx.zn_desc}</p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {tx.zn_meta.map(m => (
                <span key={m} className="text-[11px] font-medium px-2 py-0.5 rounded-md"
                  style={{ background: "rgba(139,92,246,0.08)", color: "#a78bfa", border: "1px solid rgba(139,92,246,0.15)" }}>
                  {m}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-1 text-sm font-semibold text-violet-400 group-hover:gap-2 transition-all">
              {tx.zn_cta} <ChevronRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-4 text-center text-xs" style={{ borderTop: "1px solid var(--bdr)", color: "var(--tx4)" }}>
        {tx.footer}
      </footer>
    </div>
  );
}
