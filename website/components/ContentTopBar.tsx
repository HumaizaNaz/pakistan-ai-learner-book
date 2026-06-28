"use client";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";

interface Crumb { label: string; href?: string; }

export default function ContentTopBar({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between pl-14 pr-6 md:px-6 h-12"
      style={{ background: "var(--bg)", borderBottom: "1px solid var(--bdr)" }}
    >
      {/* Brand + breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--tx4)" }}>
        <Link href="/" className="flex items-center gap-1.5 font-semibold transition-colors shrink-0"
          style={{ color: "var(--tx3)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--tx)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--tx3)") }>
          <Sparkles className="w-3 h-3 shrink-0" />
          <span className="hidden md:inline">AI Learning Hub</span>
        </Link>
        {crumbs.map((c, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <ChevronRight className="w-3 h-3" style={{ color: "var(--tx4)" }} />
            {c.href ? (
              <Link href={c.href} className="hover:underline" style={{ color: "var(--tx3)" }}>{c.label}</Link>
            ) : (
              <span style={{ color: "var(--tx3)" }}>{c.label}</span>
            )}
          </span>
        ))}
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </div>
  );
}
