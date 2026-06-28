"use client";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { ChevronRight, ArrowRight } from "lucide-react";

const chapters = [
  { n: "01", title: "Internet aur Computer — Duniya Ka Darvaza" },
  { n: "02", title: "Browser aur Website — Screen Pe Kya Hai?" },
  { n: "03", title: "HTML — Pehli Spell" },
  { n: "04", title: "HTML — Images aur Links" },
  { n: "05", title: "CSS — Colors aur Fonts" },
  { n: "06", title: "CSS — Boxes aur Borders" },
  { n: "07", title: "JavaScript — Website Ko Zinda Karo" },
  { n: "08", title: "AI Kya Hai?" },
  { n: "09", title: "Prompting — Pehli Baar" },
  { n: "10", title: "Clear Prompts Likhna" },
  { n: "11", title: "Role Prompting" },
  { n: "12", title: "Creative Prompting" },
  { n: "13", title: "Claude Se Website Content" },
  { n: "14", title: "Mini Project Start" },
  { n: "15", title: "Project Polish aur Present" },
  { n: "16", title: "Future — AI Duniya" },
];

export default function Book1Page() {
  const { lang } = useLang();

  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <div className="flex items-center gap-1.5 text-xs mb-8" style={{ color: "var(--tx4)" }}>
        <Link href="/zara-nova" style={{ color: "var(--tx3)" }} className="hover:underline">Zara NOVA</Link>
        <ChevronRight className="w-3 h-3" />
        <span style={{ color: "var(--tx3)" }}>Book 1</span>
      </div>

      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-500 px-2.5 py-1 rounded-full mb-4"
          style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}>
          Grade 4–6 · Explorers Track
        </div>
        <h1 className="text-3xl font-bold mb-2 tracking-tight" style={{ color: "var(--tx)" }}>Zara ki Pehli Spell</h1>
        <p className="text-sm" style={{ color: "var(--tx3)" }}>
          {lang === "ur"
            ? "HTML, CSS, JavaScript basics + Prompt Engineering — Zara ki pehli coding journey"
            : "HTML, CSS, JavaScript basics + Prompt Engineering — Zara's first coding journey"}
        </p>
      </div>

      <div className="p-4 rounded-xl mb-8" style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)" }}>
        <p className="font-semibold text-green-400 text-xs mb-1">{lang === "ur" ? "آخری پروجیکٹ" : "Final Project"}</p>
        <p className="text-sm" style={{ color: "var(--tx3)" }}>
          {lang === "ur" ? '"Mera Sapna" — Claude ki madad se apna pehla webpage banao' : '"Mera Sapna" — Build your first webpage with Claude\'s help'}
        </p>
      </div>

      <div className="space-y-1.5">
        {chapters.map((ch, i) => (
          <Link key={ch.n} href={`/zara-nova/book-1/ch${ch.n}`}
            className="flex items-center gap-4 px-4 py-3 rounded-lg transition-all group"
            style={{ background: "var(--bg2)", border: "1px solid var(--bdr)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(34,197,94,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--bdr)"; }}
          >
            <span className="text-xs font-mono w-8 shrink-0" style={{ color: "var(--tx4)" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm flex-1 font-medium" style={{ color: "var(--tx2)" }}>{ch.title}</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-green-400" />
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <Link href="/zara-nova/book-2"
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          style={{ color: "var(--tx3)", border: "1px solid var(--bdr)", background: "var(--bg2)" }}>
          {lang === "ur" ? "Book 2: Builders" : "Book 2: Builders"} <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
