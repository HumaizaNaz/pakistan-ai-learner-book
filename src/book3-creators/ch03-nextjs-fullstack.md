# Chapter 3: Next.js — Full Stack App Banana 🏗️

**Week 2 | Creators Track**

---

## 📖 Story Scene

"NOVA, ab main ek proper app banana chahti hoon — jisme data save bhi ho. Students ki homework submissions track ho sakein."

"Ab hum database add karte hain," NOVA ne kaha. "Lekin pehle simplest approach — **JSON file as database**. Phir real database sikhenge."

---

## ✨ Magic Spell #3 — Full Stack App with Data

**Simple JSON "Database" — File System:**

```typescript
// lib/db.ts — simple file-based storage
import fs from "fs";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "submissions.json");

export function readData() {
  if (!fs.existsSync(DB_PATH)) return [];
  const content = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(content);
}

export function writeData(data: any[]) {
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}
```

---

**API Routes — CRUD Operations:**

```typescript
// app/api/submissions/route.ts
import { readData, writeData } from "@/lib/db";

// GET — sab submissions
export async function GET() {
  const submissions = readData();
  return Response.json(submissions);
}

// POST — naya submission add karo
export async function POST(request: Request) {
  const body = await request.json();
  const submissions = readData();

  const newSubmission = {
    id: Date.now(),
    ...body,
    createdAt: new Date().toISOString(),
  };

  submissions.push(newSubmission);
  writeData(submissions);

  return Response.json(newSubmission, { status: 201 });
}
```

---

**Frontend Form:**

```tsx
// app/submit/page.tsx
"use client";
import { useState } from "react";

export default function SubmitPage() {
  const [form, setForm] = useState({ studentName: "", homework: "", subject: "" });
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSubmitted(true);
  }

  if (submitted) return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <div style={{ fontSize: "60px" }}>🎉</div>
      <h2>Homework Submit Ho Gaya!</h2>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "40px auto", padding: "24px" }}>
      <h1>Homework Submit Karo</h1>
      {["studentName", "subject"].map(field => (
        <input key={field} placeholder={field}
          value={form[field as keyof typeof form]}
          onChange={e => setForm({...form, [field]: e.target.value})}
          required style={{ display: "block", width: "100%", padding: "12px",
                           margin: "8px 0", borderRadius: "8px", border: "1px solid #ddd" }}
        />
      ))}
      <textarea placeholder="Apna homework yahan likho..."
        value={form.homework}
        onChange={e => setForm({...form, homework: e.target.value})}
        required rows={5}
        style={{ display: "block", width: "100%", padding: "12px",
                 margin: "8px 0", borderRadius: "8px", border: "1px solid #ddd" }}
      />
      <button type="submit"
        style={{ background: "#6c63ff", color: "white", padding: "12px 32px",
                 border: "none", borderRadius: "8px", cursor: "pointer", width: "100%" }}>
        Submit! 📤
      </button>
    </form>
  );
}
```

---

## 🔥 Try It Yourself

1. `lib/db.ts` banao
2. `data/` folder banao (`.gitignore` mein add karo!)
3. API routes banao
4. Form page banao
5. Submit karo — `data/submissions.json` mein dekho!

---

## 🤯 Wow Moment

> Tum ne abhi ek **complete CRUD app** banaya — Create, Read, Update, Delete ke liye ready architecture!
> Backend APIs + Frontend Forms + Data Storage — ye toh proper software engineering hai! 🏆

---

## 💡 Fun Tip

`.gitignore` mein `data/` add karo — production data local machine par hona chahiye, GitHub par nahi! Real apps mein Postgres/MongoDB use karte hain.

---

## ❓ Think About It

JSON file as database ke kya problems hain? Multiple users ek saath submit karein toh? Large data (10,000+ records) ho toh? Kab real database zaroori hai?
