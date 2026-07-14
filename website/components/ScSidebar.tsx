"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Tent, LayoutDashboard, BookMarked, BookOpen, ChevronRight } from "lucide-react";

const navItems = [
  { href: "/summer-camp", label: "Overview", labelUr: "Overview", icon: LayoutDashboard, sub: [] },
  {
    href: "/summer-camp/week-1-2", label: "Week 1–2: AI Foundations", labelUr: "Week 1–2: AI ki Duniya", icon: BookMarked,
    sub: [
      { href: "/summer-camp/week-1-2/guide", label: "Study Guide", labelUr: "Study Guide" },
    ],
  },
  {
    href: "/summer-camp/week-3-4", label: "Week 3–4: Prompt Mastery", labelUr: "Week 3–4: Prompt Mastery", icon: BookMarked,
    sub: [
      { href: "/summer-camp/week-3-4/guide", label: "Study Guide", labelUr: "Study Guide" },
    ],
  },
  { href: "/summer-camp/week-5-6", label: "Week 5–6: AI Project", labelUr: "Week 5–6: AI Project", icon: BookMarked, sub: [] },
  { href: "/summer-camp/week-7-8", label: "Week 7–8: Portfolio", labelUr: "Week 7–8: Portfolio", icon: BookMarked, sub: [] },
];

export default function ScSidebar({ lang }: { lang: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 text-[var(--tx3)] hover:text-[var(--tx)] w-8 h-8 flex items-center justify-center rounded-md bg-[var(--bg2)] border border-[var(--bdr)] transition-colors"
      >
        {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>

      <aside
        className={`fixed top-12 left-0 h-[calc(100vh-3rem)] w-60 flex flex-col z-40 transform transition-transform duration-200 ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        style={{ background: "var(--bg2)", borderRight: "1px solid var(--bdr)" }}
      >
        <div className="px-4 pt-5 pb-4" style={{ borderBottom: "1px solid var(--bdr)" }}>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-7 h-7 bg-green-500/10 border border-green-500/20 rounded-md flex items-center justify-center shrink-0">
              <Tent className="w-3.5 h-3.5 text-green-400" />
            </div>
            <div>
              <p className="text-xs font-semibold" style={{ color: "var(--tx)" }}>Summer Camp</p>
              <p className="text-[10px]" style={{ color: "var(--tx3)" }}>2-Month AI Course</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest px-2 mb-2" style={{ color: "var(--tx4)" }}>Weeks</p>
          {navItems.map(item => {
            const active = pathname === item.href;
            const isParentOfActive = item.sub.some(s => pathname === s.href);
            const Icon = item.icon;
            return (
              <div key={item.href} className="mb-0.5">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5 px-2 py-2 rounded-md text-sm transition-all"
                  style={active
                    ? { background: "rgba(34,197,94,0.08)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.2)" }
                    : isParentOfActive
                    ? { color: "#4ade80", border: "1px solid transparent" }
                    : { color: "var(--tx3)", border: "1px solid transparent" }
                  }
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate text-xs font-medium flex-1">
                    {lang === "ur" ? item.labelUr : item.label}
                  </span>
                  {item.sub.length > 0 && (
                    <ChevronRight className="w-3 h-3 shrink-0 opacity-40" />
                  )}
                </Link>

                {item.sub.length > 0 && (pathname.startsWith(item.href) || isParentOfActive) && (
                  <div className="ml-4 mt-0.5 mb-1">
                    {item.sub.map(s => {
                      const subActive = pathname === s.href;
                      return (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2 px-2 py-1.5 rounded-md transition-all"
                          style={subActive
                            ? { background: "rgba(34,197,94,0.1)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.2)" }
                            : { color: "var(--tx3)", border: "1px solid transparent" }
                          }
                        >
                          <BookOpen className="w-3 h-3 shrink-0" />
                          <span className="text-[11px] font-medium">
                            {lang === "ur" ? s.labelUr : s.label}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="px-4 py-3" style={{ borderTop: "1px solid var(--bdr)" }}>
          <p className="text-[10px]" style={{ color: "var(--tx4)" }}>Ages 15–18 · No Coding · June 2026</p>
        </div>
      </aside>

      {open && <div className="md:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setOpen(false)} />}
    </>
  );
}
