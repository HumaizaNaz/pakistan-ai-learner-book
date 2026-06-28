# Chapter 2: Next.js Advanced — Server Components, API Routes 🔧

**Week 1 | Creators Track**

---

## 📖 Story Scene

"NOVA, meri website slow hai. Bade data ke liye wait karna padta hai."

"Isliye ke tum sab kuch **client side** kar rahi ho," NOVA ne kaha. "Server Components try karo — data server pe fetch ho, already ready page user tak pahonche!"

---

## ✨ Magic Spell #2 — Server vs Client Components

**By default Next.js App Router mein — sab Server Components hain!**

```tsx
// Server Component (default) — NO "use client"
// Directly database/API call kar sako
// User ko JavaScript nahi bhejta — fast!
export default async function ProductList() {
  // Ye server pe chalta hai — secure!
  const products = await fetch("https://api.example.com/products");
  const data = await products.json();

  return (
    <ul>
      {data.map((p: any) => <li key={p.id}>{p.name}</li>)}
    </ul>
  );
}

// Client Component — "use client" zaroori
// Interactive cheezein: onClick, useState, useEffect
"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

**Advanced API Routes:**

```typescript
// app/api/students/route.ts
export async function GET() {
  const students = [
    { id: 1, name: "Zara", grade: "A+" },
    { id: 2, name: "Ali", grade: "A" },
  ];
  return Response.json(students);
}

export async function POST(request: Request) {
  const body = await request.json();
  // Normally database mein save karte
  console.log("New student:", body);
  return Response.json({ success: true, student: body }, { status: 201 });
}

// Dynamic route — app/api/students/[id]/route.ts
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  // Database se us ID ka student fetch karo
  return Response.json({ id, name: "Zara" });
}
```

---

**Loading aur Error states:**

```tsx
// app/students/loading.tsx — automatic loading UI
export default function Loading() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <div>Loading... ⏳</div>
    </div>
  );
}

// app/students/error.tsx — automatic error UI
"use client";
export default function Error({ error, reset }: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Kuch galat hua! 😅</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Dobara Try Karo</button>
    </div>
  );
}
```

---

## 🔥 Try It Yourself

Server Component banao jo Claude API se directly data fetch kare:

```tsx
// app/ai-content/page.tsx (Server Component)
import Anthropic from "@anthropic-ai/sdk";

export default async function AIContent() {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 256,
    messages: [{ role: "user", content: "Aaj ka motivational quote do — Roman Urdu mein, 2 lines" }]
  });

  const quote = response.content[0].type === "text" ? response.content[0].text : "";

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Aaj ka Quote ✨</h1>
      <blockquote style={{ fontSize: "24px", color: "#6c63ff", fontStyle: "italic" }}>
        {quote}
      </blockquote>
    </div>
  );
}
```

---

## 🤯 Wow Moment

> Server Components mein API key directly use kar sako — client ko bhejne ki zaroorat nahi!
> Ye zyada **secure** hai. Code browser mein nahi jaata.
> Server pe secret. Client pe safe. **Architecture matters!** 🔐

---

## 💡 Fun Tip

Rule of thumb: Interactivity chahiye (`onClick`, `useState`) → Client Component. Sirf data fetch → Server Component. Mix bhi kar sakte ho — Server ke andar Client Component!

---

## ❓ Think About It

Server Component vs Client Component performance mein kya fark aata hai? JavaScript bundle size ke baare mein socho — server render kiya hua page vs client side rendered page.
