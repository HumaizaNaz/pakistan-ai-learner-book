"use client";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { ChevronRight, ArrowRight } from "lucide-react";

const chapters = [
  { n: "01", title: "HTML/CSS Depth — Professional Level" },
  { n: "02", title: "Flexbox aur Grid" },
  { n: "03", title: "JavaScript — Functions aur DOM" },
  { n: "04", title: "JavaScript — Arrays aur Loops" },
  { n: "05", title: "TypeScript Intro" },
  { n: "06", title: "TypeScript Types" },
  { n: "07", title: "Next.js Intro" },
  { n: "08", title: "Next.js Routing" },
  { n: "09", title: "Claude API — Pehla Connection" },
  { n: "10", title: "System Prompts" },
  { n: "11", title: "Chain of Thought" },
  { n: "12", title: "Few-Shot Prompting" },
  { n: "13", title: "Project — AI Chatbot" },
  { n: "14", title: "Project Polish" },
  { n: "15", title: "Project Deploy — Vercel Pe Live" },
  { n: "16", title: "Prompt Engineering Review" },
];

export default function Book2Page() {
  const { lang } = useLang();

  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <div className="flex items-center gap-1.5 text-xs mb-8" style={{ color: "var(--tx4)" }}>
        <Link href="/zara-nova" style={{ color: "var(--tx3)" }} className="hover:underline">Zara NOVA</Link>
        <ChevronRight className="w-3 h-3" />
        <span style={{ color: "var(--tx3)" }}>Book 2</span>
      </div>

      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 px-2.5 py-1 rounded-full mb-4"
          style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)" }}>
          Grade 7–8 · Builders Track
        </div>
        <h1 className="text-3xl font-bold mb-2 tracking-tight" style={{ color: "var(--tx)" }}>Zara ka AI Secret</h1>
        <p className="text-sm" style={{ color: "var(--tx3)" }}>
          {lang === "ur"
            ? "TypeScript, Next.js, Claude API — Zara apna pehla AI chatbot banati hai aur Vercel pe deploy karti hai"
            : "TypeScript, Next.js, Claude API — Zara builds her first AI chatbot and deploys it on Vercel"}
        </p>
      </div>

      <div className="p-4 rounded-xl mb-8" style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.2)" }}>
        <p className="font-semibold text-blue-400 text-xs mb-1">{lang === "ur" ? "آخری پروجیکٹ" : "Final Project"}</p>
        <p className="text-sm" style={{ color: "var(--tx3)" }}>
          {lang === "ur" ? "AI Chatbot — Claude API se powered, Vercel pe deployed, live URL ke saath" : "AI Chatbot — powered by Claude API, deployed on Vercel with a live URL"}
        </p>
      </div>

      <div className="space-y-1.5">
        {chapters.map((ch, i) => (
          <Link key={ch.n} href={`/zara-nova/book-2/ch${ch.n}`}
            className="flex items-center gap-4 px-4 py-3 rounded-lg transition-all group"
            style={{ background: "var(--bg2)", border: "1px solid var(--bdr)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--bdr)"; }}
          >
            <span className="text-xs font-mono w-8 shrink-0" style={{ color: "var(--tx4)" }}>{String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm flex-1 font-medium" style={{ color: "var(--tx2)" }}>{ch.title}</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <Link href="/zara-nova/book-1" className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg"
          style={{ color: "var(--tx3)", border: "1px solid var(--bdr)", background: "var(--bg2)" }}>
          <ChevronRight className="w-3.5 h-3.5 rotate-180" /> Book 1
        </Link>
        <Link href="/zara-nova/book-3" className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg"
          style={{ color: "var(--tx3)", border: "1px solid var(--bdr)", background: "var(--bg2)" }}>
          Book 3 <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
