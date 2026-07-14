"use client";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

function inline(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`(.*?)`/g, "<code>$1</code>");
}

function renderTable(tableLines: string[]): string {
  const rows = tableLines.map(l =>
    l.replace(/^\|/, "").replace(/\|$/, "").split("|").map(c => c.trim())
  );
  if (rows.length < 2) return rows.map(r => `<p>${r.join(" ")}</p>`).join("\n");
  const [header, , ...body] = rows;
  const th = header.map(h => `<th>${inline(h)}</th>`).join("");
  const trs = body.map(r => `<tr>${r.map(c => `<td>${inline(c)}</td>`).join("")}</tr>`).join("\n");
  return `<div style="overflow-x:auto"><table><thead><tr>${th}</tr></thead><tbody>${trs}</tbody></table></div>`;
}

function renderMarkdown(content: string): string {
  const lines = content.split("\n");
  const out: string[] = [];
  let inCode = false;
  let codeLines: string[] = [];
  let codeLang = "";
  let tableLines: string[] = [];

  const flushTable = () => {
    if (tableLines.length) { out.push(renderTable(tableLines)); tableLines = []; }
  };

  for (const line of lines) {
    if (line.startsWith("```")) {
      flushTable();
      if (!inCode) {
        inCode = true;
        codeLines = [];
        codeLang = line.slice(3).trim();
      } else {
        const code = codeLines.join("\n").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        out.push(`<pre><code>${codeLang ? `<span style="opacity:0.4;font-size:0.75rem">${codeLang}\n</span>` : ""}${code}</code></pre>`);
        inCode = false;
        codeLines = [];
      }
      continue;
    }
    if (inCode) { codeLines.push(line); continue; }

    if (line.trimStart().startsWith("|")) {
      tableLines.push(line);
      continue;
    }
    flushTable();

    if (line.startsWith("# "))        out.push(`<h1>${line.slice(2)}</h1>`);
    else if (line.startsWith("## "))  out.push(`<h2>${line.slice(3)}</h2>`);
    else if (line.startsWith("### ")) out.push(`<h3>${line.slice(4)}</h3>`);
    else if (line.startsWith("---"))  out.push(`<hr />`);
    else if (line.startsWith("> "))   out.push(`<blockquote>${inline(line.slice(2))}</blockquote>`);
    else if (line.match(/^\d+\. /))   out.push(`<li style="list-style-type:decimal">${inline(line.replace(/^\d+\. /, ""))}</li>`);
    else if (line.startsWith("- "))   out.push(`<li style="list-style-type:disc">${inline(line.slice(2))}</li>`);
    else if (line.trim() === "")      out.push(`<div style="height:0.5rem"></div>`);
    else                              out.push(`<p>${inline(line)}</p>`);
  }
  flushTable();
  return out.join("\n");
}

interface Props {
  contentUr: string;
  contentEn: string;
  book: string;
  chNum: number;
  accent: string;
  bookTitle: string;
  prevBook: string | null;
  nextBook: string | null;
  totalChapters: number;
}

export default function ChapterContent({
  contentUr, contentEn, book, chNum, accent, bookTitle, prevBook, nextBook, totalChapters,
}: Props) {
  const { lang } = useLang();
  const content = lang === "en" && contentEn ? contentEn : contentUr;
  const missingEn = lang === "en" && !contentEn;

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs mb-8" style={{ color: "var(--tx4)" }}>
        <Link href="/zara-nova" style={{ color: "var(--tx3)" }} className="hover:underline">Zara NOVA</Link>
        <span>›</span>
        <Link href={`/zara-nova/${book}`} style={{ color: "var(--tx3)" }} className="hover:underline">{bookTitle}</Link>
        <span>›</span>
        <span style={{ color: "var(--tx3)" }}>Chapter {chNum}</span>
      </div>

      {/* Chapter badge */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full font-mono"
          style={{ background: `${accent}12`, color: accent, border: `1px solid ${accent}25` }}>
          Ch.{String(chNum).padStart(2, "0")}
        </span>
        {missingEn && (
          <span className="text-xs px-2 py-0.5 rounded" style={{ background: "rgba(251,191,36,0.1)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.2)" }}>
            English version coming soon — showing Roman Urdu
          </span>
        )}
      </div>

      {/* Markdown Content */}
      <div className="prose" dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }} />

      {/* Navigation */}
      <div className="flex justify-between mt-12 pt-6" style={{ borderTop: "1px solid var(--bdr)" }}>
        {chNum > 1 ? (
          <Link href={`/zara-nova/${book}/ch${String(chNum - 1).padStart(2, "0")}`}
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all"
            style={{ color: "var(--tx3)", border: "1px solid var(--bdr)", background: "var(--bg2)" }}>
            <ChevronLeft className="w-3.5 h-3.5" /> Ch.{chNum - 1}
          </Link>
        ) : prevBook ? (
          <Link href={`/zara-nova/${prevBook}`}
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg"
            style={{ color: "var(--tx3)", border: "1px solid var(--bdr)", background: "var(--bg2)" }}>
            <ChevronLeft className="w-3.5 h-3.5" /> Previous Book
          </Link>
        ) : <div />}

        {chNum < totalChapters ? (
          <Link href={`/zara-nova/${book}/ch${String(chNum + 1).padStart(2, "0")}`}
            className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all"
            style={{ background: `${accent}15`, color: accent, border: `1px solid ${accent}30` }}>
            Ch.{chNum + 1} <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        ) : nextBook ? (
          <Link href={`/zara-nova/${nextBook}`}
            className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg"
            style={{ background: `${accent}15`, color: accent, border: `1px solid ${accent}30` }}>
            Next Book <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
