# Chapter 3: Next.js — Building a Full Stack App 🏗️

**Week 2 | Creators Track**

---

## 📖 Story Scene

"NOVA, now I want to build a proper app — one that saves data too. Something to track students' homework submissions."

"Now we add a database," NOVA said. "But first, the simplest approach — **a JSON file as a database**. Then we'll learn a real database."

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

// GET — all submissions
export async function GET() {
  const submissions = readData();
  return Response.json(submissions);
}

// POST — add a new submission
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
      <h2>Homework Submitted!</h2>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "40px auto", padding: "24px" }}>
      <h1>Submit Homework</h1>
      {["studentName", "subject"].map(field => (
        <input key={field} placeholder={field}
          value={form[field as keyof typeof form]}
          onChange={e => setForm({...form, [field]: e.target.value})}
          required style={{ display: "block", width: "100%", padding: "12px",
                           margin: "8px 0", borderRadius: "8px", border: "1px solid #ddd" }}
        />
      ))}
      <textarea placeholder="Write your homework here..."
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

1. Create `lib/db.ts`
2. Create `data/` folder (add to `.gitignore`!)
3. Build the API routes
4. Build the form page
5. Submit — check `data/submissions.json`!

---

## 🤯 Wow Moment

> You just built a **complete CRUD app** — architecture ready for Create, Read, Update, Delete!
> Backend APIs + Frontend Forms + Data Storage — this is proper software engineering! 🏆

---

## 💡 Fun Tip

Add `data/` to `.gitignore` — production data should stay on the local machine, not on GitHub! Real apps use Postgres/MongoDB.

---

## ❓ Think About It

What are the problems with a JSON file as a database? What if multiple users submit at the same time? What about large data (10,000+ records)? When is a real database necessary?
