import Link from "next/link";
import { notFound } from "next/navigation";
import { readFileSync, existsSync } from "fs";
import path from "path";

const bookFolderMap: Record<string, string> = {
  "book-1": "book1-explorers",
  "book-2": "book2-builders",
  "book-3": "book3-creators",
};

const bookInfo: Record<string, { title: string; accent: string }> = {
  "book-1": { title: "Book 1 — Explorers", accent: "#22c55e" },
  "book-2": { title: "Book 2 — Builders",  accent: "#3b82f6" },
  "book-3": { title: "Book 3 — Creators",  accent: "#f97316" },
};

function renderMarkdown(content: string): string {
  const lines = content.split("\n");
  const out: string[] = [];
  let inCode = false;
  let codeLines: string[] = [];
  let codeLang = "";

  for (const line of lines) {
    if (line.startsWith("```")) {
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
  return out.join("\n");
}

function inline(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`(.*?)`/g, "<code>$1</code>");
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ book: string; chapter: string }>;
}) {
  const { book, chapter } = await params;
  const folder = bookFolderMap[book];
  if (!folder) notFound();

  const srcDir = path.join(process.cwd(), "content");
  let content = "";
  let found = false;

  try {
    const { readdirSync } = await import("fs");
    const files = readdirSync(path.join(srcDir, folder));
    const match = files.find(f => f.startsWith(`${chapter}-`));
    if (match) {
      content = readFileSync(path.join(srcDir, folder, match), "utf-8");
      found = true;
    }
  } catch {}

  if (!found) {
    // Try specific known filenames
    const possibles = [
      `${chapter}-internet-computer.md`, `${chapter}-browser-website.md`,
      `${chapter}-html-pehli-spell.md`, `${chapter}-html-images-links.md`,
      `${chapter}-css-colors-fonts.md`, `${chapter}-css-boxes-borders.md`,
      `${chapter}-js-website-zinda.md`, `${chapter}-ai-kya-hai.md`,
      `${chapter}-prompting-pehli-baar.md`, `${chapter}-clear-prompts.md`,
      `${chapter}-role-prompting.md`, `${chapter}-creative-prompting.md`,
      `${chapter}-claude-website-content.md`, `${chapter}-mini-project-start.md`,
      `${chapter}-project-polish-present.md`, `${chapter}-future-ai-duniya.md`,
    ];
    for (const fn of possibles) {
      const fp = path.join(srcDir, folder, fn);
      if (existsSync(fp)) { content = readFileSync(fp, "utf-8"); found = true; break; }
    }
  }

  if (!found) notFound();

  const info = bookInfo[book];
  const chNum = parseInt(chapter.replace("ch", ""), 10);
  const prevBook = book === "book-2" ? "book-1" : book === "book-3" ? "book-2" : null;
  const nextBook = book === "book-1" ? "book-2" : book === "book-2" ? "book-3" : null;

  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs mb-8" style={{ color: "var(--tx4)" }}>
        <Link href="/zara-nova" style={{ color: "var(--tx3)" }} className="hover:underline">Zara NOVA</Link>
        <span>›</span>
        <Link href={`/zara-nova/${book}`} style={{ color: "var(--tx3)" }} className="hover:underline">{info.title}</Link>
        <span>›</span>
        <span style={{ color: "var(--tx3)" }}>Chapter {chNum}</span>
      </div>

      {/* Chapter badge */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full font-mono"
          style={{ background: `${info.accent}12`, color: info.accent, border: `1px solid ${info.accent}25` }}>
          Ch.{String(chNum).padStart(2, "0")}
        </span>
      </div>

      {/* Markdown Content */}
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
      />

      {/* Navigation */}
      <div className="flex justify-between mt-12 pt-6" style={{ borderTop: "1px solid var(--bdr)" }}>
        {chNum > 1 ? (
          <Link href={`/zara-nova/${book}/ch${String(chNum - 1).padStart(2, "0")}`}
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all"
            style={{ color: "var(--tx3)", border: "1px solid var(--bdr)", background: "var(--bg2)" }}>
            ← Ch.{chNum - 1}
          </Link>
        ) : prevBook ? (
          <Link href={`/zara-nova/${prevBook}`}
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg"
            style={{ color: "var(--tx3)", border: "1px solid var(--bdr)", background: "var(--bg2)" }}>
            ← Previous Book
          </Link>
        ) : <div />}

        {chNum < 16 ? (
          <Link href={`/zara-nova/${book}/ch${String(chNum + 1).padStart(2, "0")}`}
            className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all"
            style={{ background: `${info.accent}15`, color: info.accent, border: `1px solid ${info.accent}30` }}>
            Ch.{chNum + 1} →
          </Link>
        ) : nextBook ? (
          <Link href={`/zara-nova/${nextBook}`}
            className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg"
            style={{ background: `${info.accent}15`, color: info.accent, border: `1px solid ${info.accent}30` }}>
            Next Book →
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
