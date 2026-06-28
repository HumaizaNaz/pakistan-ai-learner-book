"use client";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { ChevronRight, ArrowRight, CheckSquare, Wrench } from "lucide-react";

const weeks = [
  { href: "/summer-camp/week-1-2", n: "01", current: true,  accent: "#22c55e",
    en: { week: "Week 1–2", title: "AI Foundations",          topics: ["What is AI?", "ChatGPT vs Claude vs Gemini", "Prompt Engineering", "LinkedIn + GitHub"], del: "LinkedIn live + first post" },
    ur: { week: "Week 1–2", title: "AI ki Duniya",            topics: ["AI kya hai?", "ChatGPT vs Claude vs Gemini", "Prompt Engineering", "LinkedIn + GitHub"], del: "LinkedIn live + pehli post" } },
  { href: "/summer-camp/week-3-4", n: "02", current: false, accent: "#3b82f6",
    en: { week: "Week 3–4", title: "Prompt Mastery + Content", topics: ["Advanced Prompting", "Canva AI", "CapCut AI", "LinkedIn strategy"], del: "Blog + image + video content package" },
    ur: { week: "Week 3–4", title: "Prompt Mastery + Content", topics: ["Advanced Prompting", "Canva AI", "CapCut AI", "LinkedIn strategy"], del: "Blog + image + video content package" } },
  { href: "/summer-camp/week-5-6", n: "03", current: false, accent: "#f97316",
    en: { week: "Week 5–6", title: "Personal AI Project",     topics: ["Choose your project", "GitHub repository", "README with ChatGPT", "LinkedIn announce"], del: "Live GitHub project" },
    ur: { week: "Week 5–6", title: "Personal AI Project",     topics: ["Apna project choose karo", "GitHub repository", "ChatGPT se README", "LinkedIn pe announce"], del: "Live GitHub project" } },
  { href: "/summer-camp/week-7-8", n: "04", current: false, accent: "#a855f7",
    en: { week: "Week 7–8", title: "Portfolio Website",       topics: ["HTML/CSS basics", "Build with Bolt.new", "GitHub Pages deploy", "Connect platforms"], del: "yourusername.github.io — live!" },
    ur: { week: "Week 7–8", title: "Portfolio Website",       topics: ["HTML/CSS basics", "Bolt.new se banao", "GitHub Pages pe live", "Sab connect karo"], del: "yourusername.github.io — live!" } },
];

const tools = ["ChatGPT", "Claude", "Gemini", "Canva AI", "CapCut AI", "Bolt.new", "GitHub", "GitHub Pages", "Gamma.app", "LinkedIn"];

export default function SummerCampPage() {
  const { lang } = useLang();

  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <div className="flex items-center gap-1.5 text-xs mb-8" style={{ color: "var(--tx4)" }}>
        <Link href="/" className="hover:underline transition-colors" style={{ color: "var(--tx3)" }}>Home</Link>
        <ChevronRight className="w-3 h-3" />
        <span style={{ color: "var(--tx3)" }}>Summer Camp</span>
      </div>

      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-500 px-2.5 py-1 rounded-full mb-4"
          style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          {lang === "ur" ? "ابھی چل رہا ہے — June 2026" : "Currently Running — June 2026"}
        </div>
        <h1 className="text-3xl font-bold mb-3 tracking-tight" style={{ color: "var(--tx)" }}>2-Month AI Summer Camp</h1>
        <p className="text-base leading-relaxed max-w-xl" style={{ color: "var(--tx3)" }}>
          {lang === "ur" ? "8 hafton mein AI skills seekho — bina kisi coding ke. Har hafte ek real project." : "Learn practical AI skills in 8 weeks — no coding required. One real deliverable every week."}
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          {["8 Weeks", "Ages 15–18", "No Coding", "15+ AI Tools"].map(tag => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-md" style={{ color: "var(--tx3)", background: "var(--bg3)", border: "1px solid var(--bdr2)" }}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="mb-8" style={{ borderTop: "1px solid var(--bdr)" }} />

      <div className="space-y-3">
        {weeks.map(w => {
          const tx = lang === "ur" ? w.ur : w.en;
          return (
            <Link key={w.href} href={w.href}
              className="group flex items-start gap-4 p-5 rounded-xl transition-all duration-150"
              style={{ border: "1px solid var(--bdr)", background: "var(--bg2)" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--bdr2)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--bdr)")}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-bold"
                style={{ background: `${w.accent}15`, border: `1px solid ${w.accent}30`, color: w.accent }}>
                {w.n}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium" style={{ color: "var(--tx4)" }}>{tx.week}</span>
                  {w.current && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full text-green-500"
                      style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}>
                      {lang === "ur" ? "ابھی" : "Current"}
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-semibold mb-2" style={{ color: "var(--tx)" }}>{tx.title}</h3>
                <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
                  {tx.topics.map(t => (
                    <span key={t} className="text-xs flex items-center gap-1" style={{ color: "var(--tx3)" }}>
                      <span className="w-1 h-1 rounded-full inline-block" style={{ background: "var(--bdr2)" }} />{t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--tx4)" }}>
                  <CheckSquare className="w-3 h-3" />{tx.del}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 shrink-0 mt-1 transition-colors" style={{ color: "var(--tx4)" }} />
            </Link>
          );
        })}
      </div>

      <div className="mt-8 p-5 rounded-xl" style={{ border: "1px solid var(--bdr)", background: "var(--bg2)" }}>
        <div className="flex items-center gap-2 mb-3">
          <Wrench className="w-3.5 h-3.5" style={{ color: "var(--tx3)" }} />
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--tx3)" }}>
            {lang === "ur" ? "Tools Jo Seekhoge" : "Tools You Will Learn"}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tools.map(t => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-md" style={{ color: "var(--tx3)", background: "var(--bg3)", border: "1px solid var(--bdr)" }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
