# Chapter 7: Advanced Prompting — Temperature, System Design 🎛️

**Week 4 | Creators Track**

---

## 📖 Story Scene

"NOVA, in some apps Claude is creative, in others it's very precise. How do you control that?"

"Temperature," NOVA said. "And not just that — the whole system prompt design matters. Today we're going to **engineer AI** — not just use it!"

---

## ✨ Magic Spell #7 — Advanced System Design

**Temperature in Practice:**

```typescript
// Factual extraction — temperature 0
const factExtractor = await client.messages.create({
  model: "claude-haiku-4-5-20251001",
  max_tokens: 256,
  temperature: 0,  // Always consistent
  system: "Extract only factual data. Return JSON only. No explanation.",
  messages: [{ role: "user", content: "Article: [article text]" }]
});

// Creative writing — higher temperature
const storyWriter = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 2048,
  temperature: 1,  // Creative
  system: "You are a creative story writer...",
  messages: [{ role: "user", content: "Write a story about..." }]
});
```

---

**Multi-Persona System — One app, multiple AI personalities:**

```typescript
const PERSONAS = {
  teacher: {
    system: `You are a patient, encouraging teacher.
    Explain concepts with simple examples.
    Gently correct student errors.
    Give a real-world connection in every explanation.`,
    temperature: 0.7
  },
  examiner: {
    system: `You are a strict examiner.
    Only ask questions — don't give answers.
    If the student is wrong, give a hint, not the answer.
    Track their progress.`,
    temperature: 0.3
  },
  mentor: {
    system: `You are a career mentor who helps students
    with future planning.
    Give honest but positive feedback.
    Suggest action items.`,
    temperature: 0.8
  }
};

async function chatWithPersona(persona: keyof typeof PERSONAS, message: string) {
  const config = PERSONAS[persona];
  return await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 512,
    temperature: config.temperature,
    system: config.system,
    messages: [{ role: "user", content: message }]
  });
}
```

---

**Structured Output — JSON responses:**

```typescript
const structuredPrompt = `
Analyze this student's essay and return ONLY valid JSON:
{
  "score": <number 1-100>,
  "strengths": [<string>, <string>],
  "improvements": [<string>, <string>],
  "grade": <"A+" | "A" | "B" | "C" | "D" | "F">
}

Essay: ${essayText}
`;

const response = await client.messages.create({
  model: "claude-haiku-4-5-20251001",
  max_tokens: 512,
  temperature: 0,  // For consistent JSON output
  messages: [{ role: "user", content: structuredPrompt }]
});

const analysis = JSON.parse(response.content[0].text);
// Now use it programmatically!
console.log(`Score: ${analysis.score}, Grade: ${analysis.grade}`);
```

---

## 🔥 Try It Yourself

Build a homework grader — with structured JSON output:

```typescript
async function gradeHomework(homework: string, subject: string) {
  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 512,
    temperature: 0,
    system: `You are a Pakistani school teacher. 
    Grade homework and return ONLY valid JSON with: 
    score (0-100), feedback (string), grade (A+/A/B/C/D/F), 
    suggestions (array of 2 strings).`,
    messages: [{
      role: "user",
      content: `Subject: ${subject}\nHomework: ${homework}`
    }]
  });

  return JSON.parse(response.content[0].text);
}
```

---

## 🤯 Wow Moment

> `temperature: 0` + structured output prompt = **reliable JSON every time**.
> With this technique, AI works like an API — predictable, parseable responses.
> **AI as a microservice** — this is enterprise-level architecture! 🏢

---

## 💡 Fun Tip

Always use `temperature: 0` for JSON output. Random output and JSON parsing don't work together — you'll get syntax errors. Consistency is critical for structured data!

---

## ❓ Think About It

Structured JSON output is powerful, but what are its limitations? What happens if Claude doesn't return valid JSON? How would you handle errors in a production app?
