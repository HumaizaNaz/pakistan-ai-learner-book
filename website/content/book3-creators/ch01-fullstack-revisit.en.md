# Chapter 1: Full Stack — Speed Run! 🏎️

**Week 1 | Creators Track**

---

## 📖 Story Scene

Zara had to teach a junior student, Ali. In one hour.

"Ali, have you done HTML?"

"A little..."

"Okay. Let me show you the whole stack the fast way. Just what you need."

NOVA smiled from the side. *"This is the same Zara who used to say 'I don't know anything' two years ago."*

---

## ✨ Magic Spell #1 — Full Stack Speed Summary

**The Big Picture:**

```
Frontend (In the Browser)      Backend (On the Server)
──────────────────────         ──────────────────────
HTML → Structure               Node.js/Python → Logic
CSS  → Design                  Database → Data store
JS/TS → Interactivity          API → Data exchange
React/Next.js → Framework      Claude API → AI brain
```

---

**Next.js — Full Stack in ONE framework:**

```tsx
// Frontend (app/page.tsx) — what the user sees
"use client";
export default function Page() {
  return <h1>Hello from frontend!</h1>;
}

// Backend (app/api/hello/route.ts) — runs on the server
export async function GET() {
  const data = { message: "Hello from backend!" };
  return Response.json(data);
}

// Frontend calling Backend:
const res = await fetch("/api/hello");
const data = await res.json();
```

---

**TypeScript Quick Reference:**

```typescript
// Types
const name: string = "Zara";
const age: number = 15;
const active: boolean = true;

// Interface
interface User {
  id: number;
  name: string;
  role: "student" | "teacher" | "admin";
}

// Function
async function fetchUser(id: number): Promise<User> {
  const res = await fetch(`/api/users/${id}`);
  return res.json();
}
```

---

**CSS — Modern Approach:**

```css
/* Variables */
:root { --primary: #6c63ff; --gap: 16px; }

/* Flexbox */
.row { display: flex; gap: var(--gap); align-items: center; }

/* Grid */
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--gap); }

/* Responsive */
@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
```

---

## 🔥 Try It Yourself

30-minute challenge — build a working full-stack app:

1. `npx create-next-app@latest quick-app --typescript`
2. `app/api/data/route.ts` — return a hardcoded list
3. `app/page.tsx` — fetch that list and display in cards
4. Style it decently with CSS

---

## 🤯 Wow Moment

> In 2 years you learned:
> HTML → CSS → JavaScript → TypeScript → Next.js → Claude API
> This is the same stack used by: **Vercel, Notion, Linear, Loom** — billion-dollar companies!
> Same tools. In your hands. 🔥

---

## 💡 Fun Tip

Do a speed-run exercise every week — build a simple full-stack app without any help. You'll get faster every time. **Muscle memory works in coding too!**

---

## ❓ Think About It

Frontend developer vs Backend developer vs Full Stack — what's the difference? In 2026, which role is most valuable? What will change after AI?
