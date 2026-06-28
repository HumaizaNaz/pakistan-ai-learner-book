"use client";
import { createContext, useContext, useState, useEffect } from "react";

type Lang = "en" | "ur";
interface LangCtx { lang: Lang; setLang: (l: Lang) => void; }

const Ctx = createContext<LangCtx>({ lang: "ur", setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ur");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "ur") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
