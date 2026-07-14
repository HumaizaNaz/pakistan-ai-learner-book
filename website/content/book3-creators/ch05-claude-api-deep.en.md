# Chapter 5: Claude API Deep Dive — Streaming and Parameters 🔬

**Week 3 | Creators Track**

---

## 📖 Story Scene

"NOVA, my chatbot shows everything at once — you have to wait for the whole response. Show it word by word, like the real Claude!"

"Streaming," NOVA said. "And there are some API parameters you still don't know about. Today we're going to properly learn the full Claude API."

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
temperature: 0.0  → Always the same answer, very predictable
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

  // Create a ReadableStream
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

**Frontend — Receive the stream:**

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
    setResponse(prev => prev + text); // Add each chunk
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

// Send full history — Claude will remember context
const response = await client.messages.create({
  model: "claude-haiku-4-5-20251001",
  max_tokens: 1024,
  messages: [
    { role: "user", content: "My name is Zara" },
    { role: "assistant", content: "Hello Zara! How can I help?" },
    { role: "user", content: "What is my name?" },  // Claude knows!
  ]
});
```

---

## 🔥 Try It Yourself

Build a streaming endpoint and connect it to the frontend. Watch the words appear one by one!

---

## 🤯 Wow Moment

> The streaming you saw on Claude.ai — word by word — your app does exactly that now!
> Same underlying technology. You implemented what Anthropic itself uses! 🎯

---

## 💡 Fun Tip

Set `max_tokens` wisely:
- Simple answers: 256
- Detailed explanation: 1024
- Long creative content: 4096
More tokens = more cost. Find the balance!

---

## ❓ Think About It

Streaming is better for UX — users don't feel like they're waiting. But is there a case where streaming is a bad idea? (Hint: when you need to process the response programmatically)
