# Chapter 9: Claude API — Code se NOVA se Baat Karo! 🤖💻

**Week 5 | Builders Track**

---

## 📖 Story Scene

"NOVA, tum mere phone mein ho. Lekin kya main tumhe apni website mein bhi laa sakti hoon? Jab koi visitor aaye toh wo bhi tumse baat kar sake?"

"Haan," NOVA ne kaha. "Iske liye hai **Claude API**."

"API?" Zara ne poochha.

"Application Programming Interface. Simple words mein: ek door hai. Tum code likhti ho, door khulti hai, Claude jawab deta hai. Tum ne Book 1 mein sirf claude.ai use kiya — manually type kar ke. Ab code se direct baat karoge!"

Zara ne pehla API call likha. Claude ne jawab diya.

Uski website par pehla AI response aa gaya.

**"YAAR YE TOH ACTUAL MAGIC HAI!"** — Zara

---

## ✨ Magic Spell #9 — Claude API Setup

**Step 1: API Key lo**
`console.anthropic.com` par jao → Sign up → API Keys → Create Key

**Step 2: Install karo**
```bash
npm install @anthropic-ai/sdk
```

**Step 3: `.env.local` file banao** (project root mein):
```
ANTHROPIC_API_KEY=sk-ant-...tumhari-key-yahan...
```

> ⚠️ IMPORTANT: `.env.local` kabhi GitHub par mat daalo! Ye secret hai!

---

**Step 4: API Route banao** — `app/api/chat/route.ts`:
```typescript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: Request) {
  const { message } = await request.json();

  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: message
      }
    ]
  });

  const text = response.content[0].type === "text"
    ? response.content[0].text
    : "Error";

  return Response.json({ reply: text });
}
```

---

**Step 5: Frontend se call karo** — `app/page.tsx`:
```tsx
"use client";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function askClaude() {
    setLoading(true);
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });
    const data = await response.json();
    setReply(data.reply);
    setLoading(false);
  }

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>NOVA se Baat Karo! 🤖</h1>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="NOVA se kuch poochho..."
        style={{ width: "100%", padding: "12px", height: "100px", borderRadius: "8px" }}
      />
      <button
        onClick={askClaude}
        disabled={loading}
        style={{ background: "#6c63ff", color: "white", padding: "12px 24px",
                 border: "none", borderRadius: "8px", marginTop: "8px", cursor: "pointer" }}
      >
        {loading ? "Soch rahi hoon... 🤔" : "Poochho! ✨"}
      </button>
      {reply && (
        <div style={{ marginTop: "24px", background: "#f0f4ff",
                      padding: "20px", borderRadius: "12px" }}>
          <strong>NOVA:</strong>
          <p>{reply}</p>
        </div>
      )}
    </div>
  );
}
```

---

## 🔥 Try It Yourself

1. API key lo anthropic.com se
2. `.env.local` mein add karo
3. `app/api/chat/route.ts` banao
4. `app/page.tsx` update karo
5. `npm run dev` → browser mein test karo — kya Claude ne jawab diya?!

---

## 🤯 Wow Moment

> Tum ne abhi kya banaya?
> **API Route** (backend) + **React Component** (frontend) + **Claude AI**
> = Working AI app!
> 
> Ye wohi technology hai jis par ChatGPT, Claude.ai jaisi websites bani hain.
> Tum ne full-stack AI app bana li — Grade 7-8 mein! 🏆

---

## 💡 Fun Tip

`claude-haiku-4-5-20251001` — ye Claude ka fastest, cheapest model hai. Chatbot ke liye perfect. Advanced analysis ke liye `claude-sonnet-4-6` use karo. Models ka trade-off: speed vs capability vs cost.

---

## ❓ Think About It

API key `.env.local` mein kyun rakhi? Agar code mein directly likh dein toh kya hoga? GitHub par koi dekh sakta hai → tumhari key use kar sakta hai → tumhara account ka paisa khatam! Security pehle!
