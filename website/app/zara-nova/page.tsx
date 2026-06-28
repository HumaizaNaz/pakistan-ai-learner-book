"use client";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { ArrowRight, BookOpen } from "lucide-react";

const books = [
  { href: "/zara-nova/book-1", n: "01", accent: "#22c55e",
    en: { num: "Book 1", grade: "Grade 4–6", track: "Explorers", title: "Zara ki Pehli Spell", topics: ["HTML — webpage basics", "CSS — colors, fonts, design", "JavaScript — make it interactive", "Prompt Engineering (CKFC formula)", "Claude.ai for content"], project: '"Mera Sapna" — Your First Webpage' },
    ur: { num: "Book 1", grade: "Grade 4–6", track: "Explorers", title: "Zara ki Pehli Spell", topics: ["HTML — webpage ka dhancha", "CSS — colors, fonts, design", "JavaScript — website ko zinda karo", "Prompt Engineering (CKFC formula)", "Claude.ai se content likhwao"], project: '"Mera Sapna" — Apna Pehla Webpage' },
  },
  { href: "/zara-nova/book-2", n: "02", accent: "#3b82f6",
    en: { num: "Book 2", grade: "Grade 7–8", track: "Builders", title: "Zara ka AI Secret", topics: ["TypeScript — type-safe coding", "Next.js — professional framework", "Claude API — add AI to your app", "System Prompts, CoT, Few-Shot", "Deploy on Vercel"], project: "AI Chatbot — Live on Vercel" },
    ur: { num: "Book 2", grade: "Grade 7–8", track: "Builders", title: "Zara ka AI Secret", topics: ["TypeScript — type-safe coding", "Next.js — professional framework", "Claude API — AI apne app mein", "System Prompts, CoT, Few-Shot", "Vercel pe deploy karo"], project: "AI Chatbot — Vercel Pe Live" },
  },
  { href: "/zara-nova/book-3", n: "03", accent: "#f97316",
    en: { num: "Book 3", grade: "Grade 9–10", track: "Creators", title: "Zara aur Future", topics: ["Full-stack Next.js — Server Components", "TypeScript Advanced", "Streaming — real-time AI", "Tool Use — give AI tools", "AI Agents — ReAct pattern"], project: "AI-Powered Study Assistant" },
    ur: { num: "Book 3", grade: "Grade 9–10", track: "Creators", title: "Zara aur Future", topics: ["Full-stack Next.js — Server Components", "TypeScript Advanced", "Streaming — real-time AI responses", "Tool Use — AI ko tools dena", "AI Agents — ReAct pattern"], project: "AI-Powered Study Assistant" },
  },
];

const chars = [
  { name: "Zara", desc_en: "Pakistani school girl from Karachi. Starts afraid of computers — by Book 3 she's a full-stack AI developer.", desc_ur: "Pakistani school girl Karachi se. Shuruat mein computers se darti hai — Book 3 tak full-stack AI developer ban jaati hai." },
  { name: "NOVA", desc_en: "Claude-powered AI assistant. Gives wrong answers to vague prompts intentionally — teaching you why precise prompts matter.", desc_ur: "Claude-powered AI assistant. Vague prompts pe galat jawab deti hai — yeh intentional hai! Seekhata hai ke precise prompts kyun zaroori hain." },
];

const techStack = ["HTML", "CSS", "JavaScript", "TypeScript", "Next.js", "React", "Claude API", "Prompt Engineering", "AI Agents", "Vercel", "Git"];

export default function ZaraNovaPage() {
  const { lang } = useLang();

  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-500 px-2.5 py-1 rounded-full mb-4"
          style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.2)" }}>
          Coding Curriculum — Grade 4–10
        </div>
        <h1 className="text-3xl font-bold mb-3 tracking-tight" style={{ color: "var(--tx)" }}>
          Zara aur NOVA ki AI Duniya
        </h1>
        <p className="text-base leading-relaxed max-w-xl" style={{ color: "var(--tx3)" }}>
          {lang === "ur"
            ? "Zara aur NOVA ki kahani ke saath coding seekho — HTML se lekar AI Agents tak. 3 books, 48 chapters."
            : "Learn coding through Zara and NOVA's story — from HTML to AI Agents. 3 books, 48 chapters."}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        {[["3", lang === "ur" ? "Kitabein" : "Books"], ["48", "Chapters"], ["16", lang === "ur" ? "Chapters/Book" : "Ch/Book"], ["4–10", "Grade"]].map(([n, l]) => (
          <div key={l} className="p-4 rounded-xl text-center" style={{ background: "var(--bg2)", border: "1px solid var(--bdr)" }}>
            <p className="text-xl font-bold text-violet-400">{n}</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--tx3)" }}>{l}</p>
          </div>
        ))}
      </div>

      {/* Characters */}
      <div className="p-5 rounded-xl mb-8" style={{ background: "var(--bg2)", border: "1px solid rgba(139,92,246,0.2)" }}>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--tx4)" }}>Characters</p>
        <div className="grid md:grid-cols-2 gap-3">
          {chars.map(c => (
            <div key={c.name} className="p-4 rounded-lg" style={{ background: "var(--bg3)", border: "1px solid var(--bdr)" }}>
              <p className="font-semibold text-sm mb-1 text-violet-400">{c.name}</p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--tx3)" }}>
                {lang === "ur" ? c.desc_ur : c.desc_en}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Books */}
      <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--tx4)" }}>
        {lang === "ur" ? "تین کتابیں" : "3 Books"}
      </p>
      <div className="space-y-3 mb-8">
        {books.map(book => {
          const tx = lang === "ur" ? book.ur : book.en;
          return (
            <div key={book.href} className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--bdr)" }}>
              <div className="p-5" style={{ background: "var(--bg2)" }}>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${book.accent}12`, border: `1px solid ${book.accent}25` }}>
                      <BookOpen className="w-4 h-4" style={{ color: book.accent }} />
                    </div>
                    <div>
                      <p className="text-xs font-medium mb-0.5" style={{ color: "var(--tx4)" }}>
                        {tx.num} · {tx.grade}
                        <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] font-semibold"
                          style={{ background: `${book.accent}12`, color: book.accent }}>{tx.track}</span>
                      </p>
                      <h3 className="text-base font-bold" style={{ color: "var(--tx)" }}>{tx.title}</h3>
                    </div>
                  </div>
                  <Link href={book.href}
                    className="shrink-0 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                    style={{ background: `${book.accent}15`, color: book.accent, border: `1px solid ${book.accent}25` }}>
                    {lang === "ur" ? "کھولیں" : "Open"} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--tx4)" }}>Topics</p>
                    <ul className="space-y-1">
                      {tx.topics.map(t => (
                        <li key={t} className="text-xs flex items-start gap-1.5" style={{ color: "var(--tx3)" }}>
                          <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: "var(--tx4)" }} />{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--tx4)" }}>Final Project</p>
                    <div className="p-3 rounded-lg text-xs font-medium" style={{ background: `${book.accent}08`, border: `1px solid ${book.accent}20`, color: book.accent }}>
                      {tx.project}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tech Stack */}
      <div className="p-5 rounded-xl" style={{ background: "var(--bg2)", border: "1px solid var(--bdr)" }}>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--tx4)" }}>
          {lang === "ur" ? "Tech Stack Jo Seekhoge" : "Tech Stack You Will Learn"}
        </p>
        <div className="flex flex-wrap gap-2">
          {techStack.map(t => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-md" style={{ color: "var(--tx3)", background: "var(--bg3)", border: "1px solid var(--bdr)" }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
