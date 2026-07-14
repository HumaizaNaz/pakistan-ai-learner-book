# Chapter 14: Project — UI Polish + Better Prompts 💅

**Week 7 | Builders Track**

---

## 📖 Story Scene

Zara's chatbot was working! But a few things needed improvement.

"NOVA, the bot's answers are sometimes too long. And the UI looks a bit plain."

"Two things to do — **tune the prompt** and **polish the UI**. Both are essential parts of professional apps!"

---

## ✨ Magic Spell #14 — Prompt Tuning + UI Polish

**Prompt Tuning — Response Control:**

```typescript
const SYSTEM_PROMPT = `You are NOVA — School Helper Bot.

[Add these response rules:]

Response Rules:
- Answer in maximum 3-4 sentences (keep it short!)
- Use bullet points when there are 3+ points
- If a question is unclear, ask for clarification first
- End with one follow-up question
- Use encouraging emojis occasionally 😊`;
```

---

**Improve Loading State:**

```tsx
// Typing animation
{loading && (
  <div style={{ display: "flex", alignItems: "center", gap: "4px",
                padding: "12px 16px", background: "#f0f4ff",
                borderRadius: "18px", width: "fit-content" }}>
    <span style={{ animation: "bounce 0.6s infinite" }}>●</span>
    <span style={{ animation: "bounce 0.6s 0.2s infinite" }}>●</span>
    <span style={{ animation: "bounce 0.6s 0.4s infinite" }}>●</span>
    <style>{`
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }
    `}</style>
  </div>
)}
```

---

**Add a Welcome Screen:**

```tsx
// Welcome message when chatbot starts
const [started, setStarted] = useState(false);

if (!started) return (
  <div style={{ height: "100vh", display: "flex", alignItems: "center",
                justifyContent: "center", flexDirection: "column",
                background: "linear-gradient(135deg, #667eea, #764ba2)", color: "white",
                textAlign: "center", padding: "40px" }}>
    <div style={{ fontSize: "80px", marginBottom: "24px" }}>🤖</div>
    <h1>NOVA School Helper</h1>
    <p style={{ opacity: 0.9, maxWidth: "400px", marginBottom: "32px" }}>
      I'm here to solve your school problems!
      Homework, concepts, tips — I'm ready for everything.
    </p>
    <button onClick={() => setStarted(true)}
      style={{ background: "white", color: "#6c63ff", padding: "16px 32px",
               border: "none", borderRadius: "30px", fontSize: "18px",
               cursor: "pointer", fontWeight: "bold" }}>
      Let's Start! ✨
    </button>
  </div>
);
```

---

**Quick Reply Buttons:**

```tsx
const quickReplies = [
  "Help me with maths",
  "Explain a science concept",
  "Give me study tips",
  "Motivate me! 💪"
];

<div style={{ display: "flex", gap: "8px", flexWrap: "wrap", padding: "8px 24px" }}>
  {quickReplies.map(reply => (
    <button key={reply} onClick={() => { setInput(reply); }}
      style={{ background: "#f0f4ff", border: "2px solid #6c63ff",
               color: "#6c63ff", padding: "8px 16px", borderRadius: "20px",
               cursor: "pointer", fontSize: "13px" }}>
      {reply}
    </button>
  ))}
</div>
```

---

## 🔥 Try It Yourself

1. Add the typing animation
2. Add the welcome screen
3. Add quick reply buttons
4. Tune the system prompt — test making responses shorter/longer
5. Let a friend test it — get their feedback!

---

## 🤯 Wow Moment

> UX (User Experience) developers don't just write code — they design **feelings**.
> Typing animation, welcome screen, quick replies — these are all psychological tricks!
> Make the user feel comfortable, trust it, come back. **The science of design!** 🧠

---

## 💡 Fun Tip

A/B test your prompt: try one prompt, then another, compare results. Professional teams always do this. It's called **data-driven prompting**!

---

## ❓ Think About It

What's missing from your chatbot's responses that a real helpful teacher would have? Warmth? Patience? Remembering past conversations? How would you add these?
