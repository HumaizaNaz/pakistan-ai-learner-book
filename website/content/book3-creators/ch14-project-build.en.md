# Chapter 14: Project — Build + Optimize 🛠️

**Week 7 | Creators Track**

---

## 📖 Story Scene

Zara's project was running. But there were some issues.

"NOVA, API calls are slow. And sometimes Claude gives weird responses."

"Optimization time," NOVA said. "Every professional project goes through this phase. Performance, reliability, error handling — now we polish all of this!"

---

## ✨ Magic Spell #14 — Project Optimization

**1. Response Caching — Avoid repeat calls:**

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

**2. Prompt Validation — Filter bad inputs:**

```typescript
function validatePrompt(input: string): { valid: boolean; error?: string } {
  if (!input || input.trim().length === 0) {
    return { valid: false, error: "Input is empty" };
  }
  if (input.length > 4000) {
    return { valid: false, error: "Input is too long (max 4000 chars)" };
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
        Try Again
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

**4. Rate Limiting — Limit API calls:**

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
  throw new Error("Too many requests! Please wait a moment.");
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

1. Add caching — ask the same question twice, second time should be faster
2. Add input validation — handle empty/too long input
3. Add rate limiter — 5 requests/minute
4. Add loading skeleton

---

## 🤯 Wow Moment

> Caching + Rate Limiting + Error Handling + Validation
> These are "non-functional requirements" — not visible features but the backbone of the product.
> **Junior developers build features. Senior developers build these!** 🏗️

---

## 💡 Fun Tip

`console.time()` and `console.timeEnd()` — perfect for quick performance measurement:
```javascript
console.time("api-call");
const result = await callAPI();
console.timeEnd("api-call"); // "api-call: 342ms"
```

---

## ❓ Think About It

Cache can go stale — what if Claude's knowledge updates or a wrong answer gets cached? What's your cache invalidation strategy? This is a famous engineering problem!
