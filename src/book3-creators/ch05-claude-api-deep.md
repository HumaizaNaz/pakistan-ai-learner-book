# Chapter 5: Claude API Deep Dive — Streaming aur Parameters 🔬

**Week 3 | Creators Track**

---

## 📖 Story Scene

"NOVA, mera chatbot sab kuch ek baar mein show karta hai — wait karna padta hai. Real Claude ki tarah word by word dikhao!"

"Streaming," NOVA ne kaha. "Aur kuch API parameters bhi hain jo tumhe abhi tak nahi pata. Aaj poora Claude API seekhte hain properly."

---

## ✨ Magic Spell #5 — Claude API Advanced

**API Parameters explained:**

```typescript
const response = await client.messages.create({
  model: "claude-haiku-4-5-20251001",    // Model choice
  max_tokens: 1024,                       // Maximum response length
  temperature: 1,                         // 0=focused, 1=creative (default)
  system: "...",                          // Permanent instructions
  messages: [
    { role: "user", content: "Hello" }    // Conversation history
  ]
});
```

**Temperature explained:**
```
temperature: 0.0  → Always same answer, very predictable
temperature: 0.5  → Balanced
temperature: 1.0  → Creative, varied (default)
temperature: 1.5+ → Very random, unpredictable

Use cases:
0.0 → Data extraction, factual answers
0.5 → Analysis, summaries
1.0 → Conversation, creative writing
```

---

**Streaming — Word by Word:**

```typescript
// app/api/stream/route.ts
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(request: Request) {
  const { message } = await request.json();

  const stream = await client.messages.stream({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 1024,
    messages: [{ role: "user", content: message }]
  });

  // ReadableStream banao
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        if (chunk.type === "content_block_delta" &&
            chunk.delta.type === "text_delta") {
          controller.enqueue(new TextEncoder().encode(chunk.delta.text));
        }
      }
      controller.close();
    }
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}
```

**Frontend — Stream receive karo:**

```tsx
async function sendWithStreaming(message: string) {
  setResponse("");
  const res = await fetch("/api/stream", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const reader = res.body!.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    const text = decoder.decode(value);
    setResponse(prev => prev + text); // Har chunk add karo
  }
}
```

---

**Conversation History — Multi-turn:**

```typescript
interface Message {
  role: "user" | "assistant";
  content: string;
}

// Poori history bhejo — Claude context yaad rakhega
const response = await client.messages.create({
  model: "claude-haiku-4-5-20251001",
  max_tokens: 1024,
  messages: [
    { role: "user", content: "Mera naam Zara hai" },
    { role: "assistant", content: "Hello Zara! Kaise madad karoon?" },
    { role: "user", content: "Mera naam kya hai?" },  // Claude ko pata hai!
  ]
});
```

---

## 🔥 Try It Yourself

Streaming endpoint banao aur frontend mein connect karo. Words ek ek kar ke aate hue dekho!

---

## 🤯 Wow Moment

> Claude.ai par jo streaming dikha — word by word — tumhara app bhi exactly aise karta hai ab!
> Same underlying technology. Tum ne wo implement kiya jo Anthropic ne khud use kiya! 🎯

---

## 💡 Fun Tip

`max_tokens` wisely set karo:
- Simple answers: 256
- Detailed explanation: 1024
- Long creative content: 4096
Zyada tokens = zyada cost. Balance karo!

---

## ❓ Think About It

Streaming UX ke liye better hai — user waiting feel nahi karta. Lekin kya koi case hai jahan streaming bad idea ho? (Hint: jab response process karna ho programmatically)
