"use client";
import ZnSidebar from "@/components/ZnSidebar";
import ContentTopBar from "@/components/ContentTopBar";

export default function ZaraNovaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "var(--bg)" }}>
      <ContentTopBar crumbs={[{ label: "Zara aur NOVA", href: "/zara-nova" }]} />
      <ZnSidebar />
      <main className="pt-12 md:ml-60 min-h-screen">
        {children}
      </main>
    </div>
  );
}
