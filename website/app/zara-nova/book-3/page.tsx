"use client";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { ChevronRight, ArrowRight } from "lucide-react";

const chapters = [
  { n: "01", title: "Full-Stack Revisit — Sab Kuch Ek Jagah" },
  { n: "02", title: "Next.js Advanced — Server Components" },
  { n: "03", title: "Next.js Full-Stack — API Routes" },
  { n: "04", title: "TypeScript Advanced — Generics" },
  { n: "05", title: "Claude API Deep Dive — Streaming" },
  { n: "06", title: "Prompt Engineering Foundations Review" },
  { n: "07", title: "Advanced Prompting Techniques" },
  { n: "08", title: "Prompt Chaining" },
  { n: "09", title: "Tool Use — AI Ko Tools Dena" },
  { n: "10", title: "Agent Prompting — ReAct Pattern" },
  { n: "11", title: "Build Agents" },
  { n: "12", title: "Multi-Step Agents" },
  { n: "13", title: "Final Project — AI Study Assistant Planning" },
  { n: "14", title: "Project Build + Optimize" },
  { n: "15", title: "Project Present" },
  { n: "16", title: "AI Engineer Banna — Career aur Future" },
];

export default function Book3Page() {
  const { lang } = useLang();

  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <div className="flex items-center gap-1.5 text-xs mb-8" style={{ color: "var(--tx4)" }}>
        <Link href="/zara-nova" style={{ color: "var(--tx3)" }} className="hover:underline">Zara NOVA</Link>
        <ChevronRight className="w-3 h-3" />
        <span style={{ color: "var(--tx3)" }}>Book 3</span>
      </div>

      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 px-2.5 py-1 rounded-full mb-4"
          style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)" }}>
          Grade 9–10 · Creators Track
        </div>
        <h1 className="text-3xl font-bold mb-2 tracking-tight" style={{ color: "var(--tx)" }}>Zara aur Future</h1>
        <p className="text-sm" style={{ color: "var(--tx3)" }}>
          {lang === "ur"
            ? "AI Agents, Streaming, Tool Use, Full-Stack — Zara ek real-world AI product deploy karti hai"
            : "AI Agents, Streaming, Tool Use, Full-Stack — Zara deploys a real-world AI product"}
        </p>
      </div>

      <div className="p-4 rounded-xl mb-8" style={{ background: "rgba(249,115,22,0.06)", border: "1px solid rgba(249,115,22,0.2)" }}>
        <p className="font-semibold text-orange-400 text-xs mb-1">{lang === "ur" ? "آخری پروجیکٹ" : "Final Project"}</p>
        <p className="text-sm" style={{ color: "var(--tx3)" }}>
          {lang === "ur"
            ? "AI-Powered Study Assistant — weakness assessment, study plan, practice questions, progress tracking"
            : "AI-Powered Study Assistant — weakness assessment, study plan, practice questions, progress tracking"}
        </p>
      </div>

      <div className="space-y-1.5">
        {chapters.map((ch, i) => (
          <Link key={ch.n} href={`/zara-nova/book-3/ch${ch.n}`}
            className="flex items-center gap-4 px-4 py-3 rounded-lg transition-all group"
            style={{ background: "var(--bg2)", border: "1px solid var(--bdr)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(249,115,22,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--bdr)"; }}
          >
            <span className="text-xs font-mono w-8 shrink-0" style={{ color: "var(--tx4)" }}>{String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm flex-1 font-medium" style={{ color: "var(--tx2)" }}>{ch.title}</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-orange-400" />
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <Link href="/zara-nova/book-2" className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg w-fit"
          style={{ color: "var(--tx3)", border: "1px solid var(--bdr)", background: "var(--bg2)" }}>
          <ChevronRight className="w-3.5 h-3.5 rotate-180" /> Book 2
        </Link>
      </div>
    </div>
  );
}
