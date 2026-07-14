# Chapter 9: Claude API — Talk to NOVA Through Code! 🤖💻

**Week 5 | Builders Track**

---

## 📖 Story Scene

"NOVA, you're on my phone. But can I bring you to my website too? So when visitors come, they can talk to you as well?"

"Yes," NOVA said. "That's what the **Claude API** is for."

"API?" Zara asked.

"Application Programming Interface. In simple words: a door. You write code, the door opens, Claude responds. In Book 1 you only used claude.ai — typing manually. Now you'll talk to Claude directly through code!"

Zara wrote her first API call. Claude responded.

The first AI response appeared on her website.

**"WAIT, THIS IS ACTUAL MAGIC!"** — Zara

---

## ✨ Magic Spell #9 — Claude API Setup

**Step 1: Get your API Key**
Go to `console.anthropic.com` → Sign up → API Keys → Create Key

**Step 2: Install the SDK**
```bash
npm install @anthropic-ai/sdk
```

**Step 3: Create `.env.local`** (in project root):
```
ANTHROPIC_API_KEY=sk-ant-...your-key-here...
```

> ⚠️ IMPORTANT: Never put `.env.local` on GitHub! This is a secret!

---

**Step 4: Create API Route** — `app/api/chat/route.ts`:
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

**Step 5: Call from the frontend** — `app/page.tsx`:
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
      <h1>Talk to NOVA! 🤖</h1>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask NOVA anything..."
        style={{ width: "100%", padding: "12px", height: "100px", borderRadius: "8px" }}
      />
      <button
        onClick={askClaude}
        disabled={loading}
        style={{ background: "#6c63ff", color: "white", padding: "12px 24px",
                 border: "none", borderRadius: "8px", marginTop: "8px", cursor: "pointer" }}
      >
        {loading ? "Thinking... 🤔" : "Ask! ✨"}
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

1. Get your API key from anthropic.com
2. Add it to `.env.local`
3. Create `app/api/chat/route.ts`
4. Update `app/page.tsx`
5. `npm run dev` → test in browser — did Claude respond?!

---

## 🤯 Wow Moment

> What did you just build?
> **API Route** (backend) + **React Component** (frontend) + **Claude AI**
> = A working AI app!
>
> This is the exact same technology that websites like ChatGPT and Claude.ai are built on.
> You built a full-stack AI app — in secondary school! 🏆

---

## 💡 Fun Tip

`claude-haiku-4-5-20251001` — this is Claude's fastest, cheapest model. Perfect for chatbots. Use `claude-sonnet-4-6` for advanced analysis. Models trade off: speed vs capability vs cost.

---

## ❓ Think About It

Why is the API key kept in `.env.local`? What would happen if you wrote it directly in your code? Someone on GitHub could see it → use your key → drain your account's credits! Security first!
