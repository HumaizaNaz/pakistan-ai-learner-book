"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronRight, Menu, X, BookOpen, LayoutDashboard } from "lucide-react";

const books = [
  { label: "Book 1 — Explorers", sub: "Grade 4–6", base: "/zara-nova/book-1", chapters: 16 },
  { label: "Book 2 — Builders", sub: "Grade 7–8", base: "/zara-nova/book-2", chapters: 16 },
  { label: "Book 3 — Creators", sub: "Grade 9–10", base: "/zara-nova/book-3", chapters: 16 },
];

export default function ZnSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expandedBook, setExpandedBook] = useState<number | null>(
    books.findIndex(b => pathname.startsWith(b.base))
  );

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 w-8 h-8 flex items-center justify-center rounded-md transition-colors"
        style={{ color: "var(--tx3)", background: "var(--bg2)", border: "1px solid var(--bdr)" }}
      >
        {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>

      <aside
        className={`fixed top-12 left-0 h-[calc(100vh-3rem)] w-60 flex flex-col z-40 transform transition-transform duration-200 ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        style={{ background: "var(--bg2)", borderRight: "1px solid var(--bdr)" }}
      >
        <div className="px-4 pt-5 pb-4" style={{ borderBottom: "1px solid var(--bdr)" }}>
<div className="flex items-center gap-2.5 mb-3">
            <div className="w-7 h-7 bg-violet-500/10 border border-violet-500/20 rounded-md flex items-center justify-center shrink-0">
              <BookOpen className="w-3.5 h-3.5 text-violet-400" />
            </div>
            <div>
              <p className="text-xs font-semibold" style={{ color: "var(--tx)" }}>Zara aur NOVA</p>
              <p className="text-[10px]" style={{ color: "var(--tx3)" }}>ki AI Duniya</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-3">
          <Link
            href="/zara-nova"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 px-2 py-2 rounded-md text-sm mb-3 transition-all"
            style={pathname === "/zara-nova"
              ? { background: "rgba(139,92,246,0.08)", color: "#a78bfa", border: "1px solid rgba(139,92,246,0.2)" }
              : { color: "var(--tx3)", border: "1px solid transparent" }
            }
          >
            <LayoutDashboard className="w-3.5 h-3.5 shrink-0" />
            <span className="text-xs font-medium">Introduction</span>
          </Link>

          <p className="text-[10px] font-semibold uppercase tracking-widest px-2 mb-2" style={{ color: "var(--tx4)" }}>Books</p>

          {books.map((book, i) => (
            <div key={book.base} className="mb-1">
              <button
                onClick={() => setExpandedBook(expandedBook === i ? null : i)}
                className="w-full flex items-center gap-2 px-2 py-2 rounded-md text-left transition-all"
                style={pathname.startsWith(book.base)
                  ? { background: "rgba(139,92,246,0.08)", color: "#a78bfa", border: "1px solid rgba(139,92,246,0.2)" }
                  : { color: "var(--tx3)", border: "1px solid transparent" }
                }
              >
                <BookOpen className="w-3.5 h-3.5 shrink-0" />
                <div className="flex-1 text-left">
                  <p className="text-xs font-medium truncate">{book.label}</p>
                  <p className="text-[10px]" style={{ color: "var(--tx4)" }}>{book.sub}</p>
                </div>
                <ChevronRight className={`w-3 h-3 shrink-0 transition-transform ${expandedBook === i ? "rotate-90" : ""}`} style={{ color: "var(--tx4)" }} />
              </button>

              {expandedBook === i && (
                <div className="ml-2 mt-1 grid grid-cols-5 gap-1">
                  {Array.from({ length: book.chapters }, (_, idx) => {
                    const ch = String(idx + 1).padStart(2, "0");
                    const href = `${book.base}/ch${ch}`;
                    const active = pathname === href;
                    return (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setOpen(false)}
                        className="text-center py-1 rounded text-xs font-medium transition-all"
                        style={active
                          ? { background: "#7c3aed", color: "white" }
                          : { background: "var(--bg3)", color: "var(--tx3)", border: "1px solid var(--bdr)" }
                        }
                      >
                        {idx + 1}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="px-4 py-3" style={{ borderTop: "1px solid var(--bdr)" }}>
          <p className="text-[10px]" style={{ color: "var(--tx4)" }}>Grade 4–10 · Roman Urdu · 48 Chapters</p>
        </div>
      </aside>

      {open && <div className="md:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setOpen(false)} />}
    </>
  );
}
