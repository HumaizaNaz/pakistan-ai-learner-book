# Chapter 2: Next.js Advanced — Server Components, API Routes 🔧

**Week 1 | Creators Track**

---

## 📖 Story Scene

"NOVA, my website is slow. I have to wait a long time for big data to load."

"That's because you're doing everything on the **client side**," NOVA said. "Try Server Components — the data fetches on the server, and the page arrives already ready for the user!"

---

## ✨ Magic Spell #2 — Server vs Client Components

**By default in Next.js App Router — everything is a Server Component!**

```tsx
// Server Component (default) — NO "use client"
// Can directly call database/API
// Doesn't send JavaScript to the user — fast!
export default async function ProductList() {
  // This runs on the server — secure!
  const products = await fetch("https://api.example.com/products");
  const data = await products.json();

  return (
    <ul>
      {data.map((p: any) => <li key={p.id}>{p.name}</li>)}
    </ul>
  );
}

// Client Component — "use client" required
// For interactive things: onClick, useState, useEffect
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
  // Normally you'd save to a database
  console.log("New student:", body);
  return Response.json({ success: true, student: body }, { status: 201 });
}

// Dynamic route — app/api/students/[id]/route.ts
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  // Fetch student with that ID from database
  return Response.json({ id, name: "Zara" });
}
```

---

**Loading and Error states:**

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
      <h2>Something went wrong! 😅</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try Again</button>
    </div>
  );
}
```

---

## 🔥 Try It Yourself

Build a Server Component that fetches data directly from the Claude API:

```tsx
// app/ai-content/page.tsx (Server Component)
import Anthropic from "@anthropic-ai/sdk";

export default async function AIContent() {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 256,
    messages: [{ role: "user", content: "Give me today's motivational quote — in 2 lines" }]
  });

  const quote = response.content[0].type === "text" ? response.content[0].text : "";

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Today's Quote ✨</h1>
      <blockquote style={{ fontSize: "24px", color: "#6c63ff", fontStyle: "italic" }}>
        {quote}
      </blockquote>
    </div>
  );
}
```

---

## 🤯 Wow Moment

> In Server Components you can use the API key directly — no need to send it to the client!
> This is more **secure**. The code never goes to the browser.
> Secret on the server. Safe for the client. **Architecture matters!** 🔐

---

## 💡 Fun Tip

Rule of thumb: Need interactivity (`onClick`, `useState`) → Client Component. Just fetching data → Server Component. You can mix them too — a Client Component inside a Server Component!

---

## ❓ Think About It

What's the performance difference between Server Components and Client Components? Think about JavaScript bundle size — a server-rendered page vs a client-side rendered page.
