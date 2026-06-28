"use client";
import { useLang } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center bg-[var(--bg3)] border border-[var(--bdr2)] rounded-md p-0.5 gap-0.5">
      <button
        onClick={() => setLang("ur")}
        className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
          lang === "ur"
            ? "bg-[var(--bg)] text-[var(--tx)] border border-[var(--bdr2)] shadow-sm"
            : "text-[var(--tx3)] hover:text-[var(--tx)]"
        }`}
      >
        اردو
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
          lang === "en"
            ? "bg-[var(--bg)] text-[var(--tx)] border border-[var(--bdr2)] shadow-sm"
            : "text-[var(--tx3)] hover:text-[var(--tx)]"
        }`}
      >
        EN
      </button>
    </div>
  );
}
