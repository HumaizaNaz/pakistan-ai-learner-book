"use client";
import ScSidebar from "@/components/ScSidebar";
import ContentTopBar from "@/components/ContentTopBar";
import { useLang } from "@/context/LanguageContext";

export default function SummerCampLayout({ children }: { children: React.ReactNode }) {
  const { lang } = useLang();
  return (
    <div style={{ background: "var(--bg)" }}>
      <ContentTopBar crumbs={[{ label: "Summer Camp", href: "/summer-camp" }]} />
      <ScSidebar lang={lang} />
      <main className="pt-12 md:ml-60 min-h-screen">
        {children}
      </main>
    </div>
  );
}
