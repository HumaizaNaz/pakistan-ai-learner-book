# Chapter 7: Advanced Prompting — Temperature, System Design 🎛️

**Week 4 | Creators Track**

---

## 📖 Story Scene

"NOVA, kuch apps mein Claude creative hoti hai, kuch mein bilkul precise. Ye control kaise karte hain?"

"Temperature," NOVA ne kaha. "Aur sirf ye nahi — poore system prompt ka design matter karta hai. Aaj hum **AI ko engineer karte hain** — sirf use nahi karte!"

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

**Multi-Persona System — Ek app, kai AI personalities:**

```typescript
const PERSONAS = {
  teacher: {
    system: `Tum ek patient, encouraging teacher ho.
    Concepts simple examples se explain karo.
    Student ki errors correct karo gently.
    Har explanation mein ek real-world connection do.`,
    temperature: 0.7
  },
  examiner: {
    system: `Tum ek strict examiner ho.
    Sirf sawaal poochho — answers mat do.
    Agar student galat ho, hint do, seedha answer nahi.
    Progress track karo.`,
    temperature: 0.3
  },
  mentor: {
    system: `Tum ek career mentor ho jo students ko
    future planning mein help karta hai.
    Honest lekin positive feedback do.
    Action items suggest karo.`,
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
  temperature: 0,  // Consistent JSON output ke liye
  messages: [{ role: "user", content: structuredPrompt }]
});

const analysis = JSON.parse(response.content[0].text);
// Ab programmatically use karo!
console.log(`Score: ${analysis.score}, Grade: ${analysis.grade}`);
```

---

## 🔥 Try It Yourself

Homework grader banao — structured JSON output ke saath:

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
> Ye technique se AI ek API ki tarah kaam karta hai — predictable, parseable responses.
> **AI as a microservice** — ye enterprise-level architecture hai! 🏢

---

## 💡 Fun Tip

JSON output ke liye hamesha `temperature: 0` use karo. Random output aur JSON parsing ek saath kaam nahi karte — syntax errors aate hain. Consistency critical hai structured data ke liye!

---

## ❓ Think About It

Structured JSON output powerful hai lekin kya limitations hain? Kya hoga agar Claude ne bilkul valid JSON nahi diya? Production app mein error handling kaise karoge?
