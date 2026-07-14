# Chapter 13: Project — Build an AI Chatbot! 🤖💬

**Week 7 | Builders Track**

---

## 📖 Story Scene

"NOVA, now I want to build a real chatbot. One that lives on my school's website. Students can ask their homework questions, check the syllabus, see the schedule."

"Perfect project," NOVA said. "You've learned everything. Now let's combine it all. Today we're building the **School Helper Bot**!"

---

## ✨ Magic Spell #13 — Chatbot Project

**Project Structure:**
```
school-bot/
├── app/
│   ├── page.tsx           ← Chat UI
│   ├── api/
│   │   └── chat/
│   │       └── route.ts   ← API endpoint
│   ├── components/
│   │   ├── ChatBubble.tsx ← One message
│   │   └── ChatInput.tsx  ← Input box
│   └── globals.css
├── .env.local             ← API key (secret!)
└── package.json
```

---

**Step 1: ChatBubble Component** — `app/components/ChatBubble.tsx`:
```tsx
interface ChatBubbleProps {
  message: string;
  sender: "user" | "ai";
}

export default function ChatBubble({ message, sender }: ChatBubbleProps) {
  const isUser = sender === "user";
  return (
    <div style={{
      display: "flex",
      justifyContent: isUser ? "flex-end" : "flex-start",
      margin: "8px 0"
    }}>
      <div style={{
        maxWidth: "70%",
        padding: "12px 16px",
        borderRadius: isUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
        background: isUser ? "#6c63ff" : "#f0f4ff",
        color: isUser ? "white" : "#2d2d2d",
        fontSize: "15px",
        lineHeight: "1.5"
      }}>
        {!isUser && <span style={{ marginRight: "8px" }}>🤖</span>}
        {message}
      </div>
    </div>
  );
}
```

---

**Step 2: API Route** — `app/api/chat/route.ts`:
```typescript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are "NOVA" — a friendly School Helper Bot.

You help with:
- Homework questions
- Explaining subject concepts
- Giving study tips
- Providing motivation

Rules:
- Answer in clear, simple English
- Simple, friendly tone
- If someone asks something off-topic: politely redirect
- Always give encouragement!`;

export async function POST(request: Request) {
  const { messages } = await request.json();

  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 512,
    system: SYSTEM_PROMPT,
    messages
  });

  const text = response.content[0].type === "text"
    ? response.content[0].text : "Error occurred";

  return Response.json({ reply: text });
}
```

---

**Step 3: Main Chat Page** — `app/page.tsx`:
```tsx
"use client";
import { useState, useRef, useEffect } from "react";
import ChatBubble from "./components/ChatBubble";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I'm NOVA — your School Helper Bot. What would you like to know? 😊" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim()) return;
    const userMessage: Message = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: updatedMessages })
    });
    const data = await response.json();
    setMessages([...updatedMessages, { role: "assistant", content: data.reply }]);
    setLoading(false);
  }

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column",
                  background: "#f0f4ff", fontFamily: "Arial" }}>
      <header style={{ background: "#6c63ff", color: "white",
                       padding: "16px 24px", textAlign: "center" }}>
        <h1 style={{ margin: 0 }}>🤖 NOVA — School Helper Bot</h1>
      </header>

      <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px" }}>
        {messages.map((msg, i) => (
          <ChatBubble key={i} message={msg.content}
            sender={msg.role === "user" ? "user" : "ai"} />
        ))}
        {loading && <ChatBubble message="Thinking... ⏳" sender="ai" />}
        <div ref={bottomRef} />
      </div>

      <div style={{ padding: "16px 24px", background: "white",
                    display: "flex", gap: "12px", borderTop: "1px solid #eee" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your question..."
          style={{ flex: 1, padding: "12px 16px", borderRadius: "24px",
                   border: "2px solid #6c63ff", fontSize: "15px" }}
        />
        <button onClick={sendMessage} disabled={loading}
          style={{ background: "#6c63ff", color: "white", border: "none",
                   borderRadius: "24px", padding: "12px 24px", cursor: "pointer" }}>
          Send ✉️
        </button>
      </div>
    </div>
  );
}
```

---

## 🔥 Try It Yourself

1. Implement Steps 1-3
2. Run with `npm run dev`
3. Ask NOVA a maths question
4. Change the system prompt — see different behavior!

---

## 🤯 Wow Moment

> You just built a **production-ready AI chatbot**!
> TypeScript ✅ Next.js ✅ React ✅ Claude API ✅ Real-time chat ✅
> This is the exact same tech stack startups use! 🚀

---

## 💡 Fun Tip

`useRef` + `scrollIntoView` — this makes the chat automatically scroll to new messages. It's a small UX detail but professional apps always have it!

---

## ❓ Think About It

Your chatbot tracks the conversation history (sends all messages). What's one problem with this? (Hint: token limit and cost). What would be a solution?
