import { notFound } from "next/navigation";
import { readFileSync, existsSync } from "fs";
import path from "path";
import ChapterContent from "./ChapterContent";

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

function readChapterFile(folder: string, chapter: string, ext: ".md" | ".en.md"): string {
  const contentDir = path.join(process.cwd(), "content");
  const dir = path.join(contentDir, folder);

  try {
    const { readdirSync } = require("fs");
    const files: string[] = readdirSync(dir);
    const baseName = ext === ".en.md"
      ? files.find(f => f.startsWith(`${chapter}-`) && f.endsWith(".en.md"))
      : files.find(f => f.startsWith(`${chapter}-`) && f.endsWith(".md") && !f.endsWith(".en.md"));
    if (baseName) return readFileSync(path.join(dir, baseName), "utf-8");
  } catch {}

  return "";
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ book: string; chapter: string }>;
}) {
  const { book, chapter } = await params;
  const folder = bookFolderMap[book];
  if (!folder) notFound();

  const contentUr = readChapterFile(folder, chapter, ".md");
  const contentEn = readChapterFile(folder, chapter, ".en.md");

  if (!contentUr && !contentEn) notFound();

  const info = bookInfo[book];
  const chNum = parseInt(chapter.replace("ch0", "").replace("ch", ""), 10);
  const prevBook = book === "book-2" ? "book-1" : book === "book-3" ? "book-2" : null;
  const nextBook = book === "book-1" ? "book-2" : book === "book-2" ? "book-3" : null;

  return (
    <ChapterContent
      contentUr={contentUr}
      contentEn={contentEn}
      book={book}
      chNum={chNum}
      accent={info.accent}
      bookTitle={info.title}
      prevBook={prevBook}
      nextBook={nextBook}
      totalChapters={16}
    />
  );
}
