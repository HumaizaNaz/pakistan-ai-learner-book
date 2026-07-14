# Chapter 8: Next.js — Pages, Routing, Components 🗺️

**Week 4 | Builders Track**

---

## 📖 Story Scene

"NOVA, mere paas 5 pages hain ab. Lekin har page par navigation copy paste karna pad raha hai. Koi change karna ho toh sab mein karna padega!"

"Ye classic problem hai," NOVA ne kaha. "Isliye **Components** hoti hain. Ek baar banao — har jagah use karo. Aur Next.js ka `layout.tsx` iske liye perfect hai!"

---

## ✨ Magic Spell #8 — Components aur Layout

**Component = reusable UI piece:**

`app/components/Navbar.tsx` banao:
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
        ✨ Meri Website
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

**app/layout.tsx — Har page ka wrapper:**
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
        <Navbar />          {/* Har page par automatically! */}
        <main>{children}</main>
      </body>
    </html>
  );
}
```

Ab Navbar **automatically** har page par aayega — ek jagah change karo, sab jagah badlega!

---

**Next.js Link — Better navigation:**
```tsx
import Link from "next/link";

// a tag ki jagah Link use karo
<Link href="/about" style={{ color: "white" }}>
  About
</Link>
```

`Link` fast page transitions karta hai — full reload nahi hota!

---

**Props — Component ko data do:**
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

// Use karo:
<Card title="HTML" description="Website ka structure" emoji="🏗️" />
<Card title="CSS" description="Design aur colors" emoji="🎨" />
<Card title="JavaScript" description="Interactivity" emoji="⚡" />
```

---

## 🔥 Try It Yourself

1. `app/components/` folder banao
2. `Navbar.tsx` component banao
3. `layout.tsx` mein add karo
4. `Card.tsx` component banao
5. Home page par 3 cards use karo

---

## 🤯 Wow Moment

> Component-based development = LEGO blocks!
> Ek baar banao → har jagah use karo → ek jagah fix karo → sab jagah theek.
> **React/Next.js mein poori Facebook, Instagram, Airbnb bani hai isi approach se!** 🏗️

---

## 💡 Fun Tip

Component naam hamesha **Capital letter** se shuru hota hai:
- `Navbar` ✅ — component
- `navbar` ❌ — ye sirf HTML tag
TypeScript/JSX mein ye rule important hai!

---

## ❓ Think About It

Ek e-commerce website ke liye kaunse components banaoge? ProductCard, CartItem, NavBar, Footer, SearchBar — list banao. Kya ek cheez zyada baar use hogi?
