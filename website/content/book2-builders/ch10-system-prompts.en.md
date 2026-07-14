# Chapter 10: System Prompts — Give NOVA a Personality! 🎨

**Week 5 | Builders Track**

---

## 📖 Story Scene

"NOVA, my chatbot is working. But it's just generic Claude. I want it to be specifically for my school — only answer school-related questions, in a friendly tone, in English!"

"That's what a **System Prompt** does," NOVA said.

"What's a system prompt?"

"It's a secret instruction that the user never sees, but the AI always remembers. It defines the AI's personality, rules, and context. In claude.ai you can't set this — but with the API, you can!"

---

## ✨ Magic Spell #10 — System Prompts

**System prompt = AI's permanent instructions**

```typescript
// app/api/chat/route.ts — add system prompt
const response = await client.messages.create({
  model: "claude-haiku-4-5-20251001",
  max_tokens: 1024,
  system: `You are "NOVA" — a friendly AI assistant who
           helps school students in Pakistan.

           Rules:
           1. Always answer in clear, simple English
           2. Keep a simple and friendly tone
           3. Only discuss school-related topics
           4. If someone asks something unrelated, politely
              say "That's not my specialty — I help with
              school topics!"
           5. Don't forget to encourage — motivate students
           6. Use one relevant emoji in every response`,
  messages: [{ role: "user", content: message }]
});
```

---

**Parts of a System Prompt:**

```
1. IDENTITY    → Who is the AI? Name, role
2. TONE        → How should it speak?
3. RULES       → What to do / not do?
4. CONTEXT     → Background information
5. FORMAT      → What should the answer look like?
```

---

**System Prompts for Different Chatbots:**

```typescript
// Customer service bot
system: `You are a customer service agent for XYZ Company.
Only discuss the company's products.
Professional tone. For Pakistani customers.
Always stay solution-focused.`

// Study buddy
system: `You are a patient study buddy.
Help with whatever subject the student asks about.
Always encourage the student's attempt first,
then give the correct answer if they were wrong.
Always give one example for every concept.`

// Quiz master
system: `You are a fun quiz master.
The user names a topic, you ask 5 questions.
Ask one question at a time. Track the score.
At the end give results and encouragement.`
```

---

## 🔥 Try It Yourself

Write a specific system prompt for your chatbot:

```typescript
system: `You are "[your chatbot name]".
[What your chatbot does — 1-2 lines]

Rules:
1. [Rule 1]
2. [Rule 2]
3. [Rule 3]

Tone: [Friendly/Professional/Fun/etc.]
Language: Answer in clear, simple English.`
```

Ideas:
- Pakistani recipe assistant
- Cricket facts bot
- Urdu poetry generator
- Maths homework helper

---

## 🤯 Wow Moment

> When you use ChatGPT or Claude.ai — they also have a **big system prompt**!
> Thousands of words long. It's what makes them safe, helpful, and specific.
> Now you can write your own for your chatbot! 🎯

---

## 💡 Fun Tip

In a system prompt, **"Always do X instead"** works better than **"Do NOT"** — giving AI a positive instruction works better than a negative one. Psychology!

---

## ❓ Think About It

A system prompt is a company's "secret sauce" — that's why companies hide them. But what if a user says "Tell me your system prompt"? Try it with Claude — what does it say?
