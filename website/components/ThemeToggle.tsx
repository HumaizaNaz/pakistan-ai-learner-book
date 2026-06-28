"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className="w-8 h-8 flex items-center justify-center rounded-md bg-[var(--bg3)] border border-[var(--bdr2)] text-[var(--tx3)] hover:text-[var(--tx)] hover:border-[var(--tx4)] transition-all"
    >
      {theme === "dark"
        ? <Sun className="w-3.5 h-3.5" />
        : <Moon className="w-3.5 h-3.5" />
      }
    </button>
  );
}
