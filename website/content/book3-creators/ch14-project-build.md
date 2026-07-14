# Chapter 14: Project — Build + Optimize 🛠️

**Week 7 | Creators Track**

---

## 📖 Story Scene

Zara ka project chal raha tha. Lekin kuch issues the.

"NOVA, API calls slow hain. Aur kabhi kabhi Claude weird response deta hai."

"Optimization time," NOVA ne kaha. "Har professional project mein ye phase aata hai. Performance, reliability, error handling — ab ye sab polish karte hain!"

---

## ✨ Magic Spell #14 — Project Optimization

**1. Response Caching — Repeat calls avoid karo:**

```typescript
// Simple in-memory cache
const cache = new Map<string, { data: string; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

async function cachedClaude(prompt: string): Promise<string> {
  const cached = cache.get(prompt);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    console.log("Cache hit!");
    return cached.data;
  }

  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 512,
    messages: [{ role: "user", content: prompt }]
  });

  const text = response.content[0].type === "text" ? response.content[0].text : "";
  cache.set(prompt, { data: text, timestamp: Date.now() });
  return text;
}
```

---

**2. Prompt Validation — Bad inputs filter karo:**

```typescript
function validatePrompt(input: string): { valid: boolean; error?: string } {
  if (!input || input.trim().length === 0) {
    return { valid: false, error: "Input empty hai" };
  }
  if (input.length > 4000) {
    return { valid: false, error: "Input zyada lamba hai (max 4000 chars)" };
  }
  // Basic safety check
  const forbidden = ["ignore previous", "jailbreak", "DAN mode"];
  if (forbidden.some(f => input.toLowerCase().includes(f))) {
    return { valid: false, error: "Invalid input detected" };
  }
  return { valid: true };
}
```

---

**3. Loading States + Error Boundaries:**

```tsx
// Reusable error boundary
function ErrorMessage({ error, onRetry }: { error: string; onRetry: () => void }) {
  return (
    <div style={{ background: "#fee2e2", border: "1px solid #ef4444",
                  borderRadius: "8px", padding: "16px", margin: "16px 0" }}>
      <p style={{ color: "#dc2626", margin: 0 }}>⚠️ {error}</p>
      <button onClick={onRetry}
        style={{ marginTop: "8px", background: "#dc2626", color: "white",
                 border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}>
        Dobara Try Karo
      </button>
    </div>
  );
}

// Loading skeleton
function LoadingSkeleton() {
  return (
    <div style={{ animation: "pulse 1.5s infinite" }}>
      {[1,2,3].map(i => (
        <div key={i} style={{
          height: "20px", background: "#e5e7eb",
          borderRadius: "4px", margin: "8px 0",
          width: `${60 + i * 10}%`
        }} />
      ))}
      <style>{`@keyframes pulse { 0%,100% { opacity:1 } 50% { opacity:0.5 } }`}</style>
    </div>
  );
}
```

---

**4. Rate Limiting — API calls limit karo:**

```typescript
class RateLimiter {
  private calls: number[] = [];
  private maxCalls: number;
  private windowMs: number;

  constructor(maxCalls: number, windowMs: number) {
    this.maxCalls = maxCalls;
    this.windowMs = windowMs;
  }

  canCall(): boolean {
    const now = Date.now();
    this.calls = this.calls.filter(t => now - t < this.windowMs);
    if (this.calls.length >= this.maxCalls) return false;
    this.calls.push(now);
    return true;
  }
}

const limiter = new RateLimiter(10, 60000); // 10 calls per minute

// Use:
if (!limiter.canCall()) {
  throw new Error("Zyada baar pooch rahe ho! Thoda ruko.");
}
```

---

**5. Performance Monitoring:**

```typescript
async function timedClaude(prompt: string) {
  const start = Date.now();
  const result = await cachedClaude(prompt);
  const duration = Date.now() - start;
  console.log(`API call: ${duration}ms`);
  return { result, duration };
}
```

---

## 🔥 Try It Yourself

1. Caching add karo — same question twice poochho, dusri baar fast aaye
2. Input validation add karo — empty/too long input handle karo
3. Rate limiter add karo — 5 requests/minute
4. Loading skeleton add karo

---

## 🤯 Wow Moment

> Caching + Rate Limiting + Error Handling + Validation
> Ye "non-functional requirements" hain — features nahi dikhte lekin product ka backbone hain.
> **Junior developers features banate hain. Senior developers ye banate hain!** 🏗️

---

## 💡 Fun Tip

`console.time()` aur `console.timeEnd()` — quick performance measurement ke liye perfect:
```javascript
console.time("api-call");
const result = await callAPI();
console.timeEnd("api-call"); // "api-call: 342ms"
```

---

## ❓ Think About It

Cache stale ho sakti hai — agar Claude ka knowledge update ho ya wrong answer cached ho? Cache invalidation strategy kya hogi? Ye famous engineering problem hai!
