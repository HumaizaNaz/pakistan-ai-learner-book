# Chapter 8: Next.js — Pages, Routing, Components 🗺️

**Week 4 | Builders Track**

---

## 📖 Story Scene

"NOVA, I have 5 pages now. But I keep having to copy and paste the navigation into every page. If I want to change something, I have to change it everywhere!"

"That's a classic problem," NOVA said. "That's exactly what **Components** are for. Build once — use everywhere. And Next.js's `layout.tsx` is perfect for this!"

---

## ✨ Magic Spell #8 — Components and Layout

**Component = a reusable piece of UI:**

Create `app/components/Navbar.tsx`:
```tsx
// Reusable Navbar component
export default function Navbar() {
  return (
    <nav style={{
      background: "#6c63ff",
      padding: "16px 32px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <span style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
        ✨ My Website
      </span>
      <div style={{ display: "flex", gap: "24px" }}>
        <a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a>
        <a href="/about" style={{ color: "white", textDecoration: "none" }}>About</a>
        <a href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
      </div>
    </nav>
  );
}
```

---

**app/layout.tsx — Wrapper for every page:**
```tsx
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <Navbar />          {/* Automatically on every page! */}
        <main>{children}</main>
      </body>
    </html>
  );
}
```

Now Navbar appears **automatically** on every page — change it in one place, it changes everywhere!

---

**Next.js Link — Better navigation:**
```tsx
import Link from "next/link";

// Use Link instead of the a tag
<Link href="/about" style={{ color: "white" }}>
  About
</Link>
```

`Link` does fast page transitions — no full reload!

---

**Props — Pass data to a component:**
```tsx
// Card component
interface CardProps {
  title: string;
  description: string;
  emoji?: string;
}

function Card({ title, description, emoji = "⭐" }: CardProps) {
  return (
    <div style={{
      background: "white",
      borderRadius: "12px",
      padding: "24px",
      margin: "16px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}>
      <div style={{ fontSize: "32px" }}>{emoji}</div>
      <h3 style={{ color: "#6c63ff" }}>{title}</h3>
      <p style={{ color: "#555" }}>{description}</p>
    </div>
  );
}

// Use it:
<Card title="HTML" description="The structure of a website" emoji="🏗️" />
<Card title="CSS" description="Design and colours" emoji="🎨" />
<Card title="JavaScript" description="Interactivity" emoji="⚡" />
```

---

## 🔥 Try It Yourself

1. Create an `app/components/` folder
2. Build a `Navbar.tsx` component
3. Add it to `layout.tsx`
4. Build a `Card.tsx` component
5. Use 3 cards on the home page

---

## 🤯 Wow Moment

> Component-based development = LEGO blocks!
> Build once → use everywhere → fix in one place → fixed everywhere.
> **Facebook, Instagram, Airbnb are all built with React/Next.js using exactly this approach!** 🏗️

---

## 💡 Fun Tip

Component names always start with a **Capital letter**:
- `Navbar` ✅ — it's a component
- `navbar` ❌ — TypeScript/JSX reads this as an HTML tag
This rule is important in TypeScript/JSX!

---

## ❓ Think About It

What components would you build for an e-commerce website? ProductCard, CartItem, NavBar, Footer, SearchBar — make a list. Which ones would be reused most often?
