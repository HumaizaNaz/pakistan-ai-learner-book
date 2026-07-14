# Chapter 12: Few-Shot Prompting — Give Examples, Teach! 📚

**Week 6 | Builders Track**

---

## 📖 Story Scene

"NOVA, I want Claude to write notes in my school's style — exactly like Miss Ayesha writes. Bullet points, simple language, key terms bold."

"Give it **examples**," NOVA said.

"Examples?"

"Give one or two examples of what you want. AI will copy that pattern. This is called **Few-Shot Prompting** — a few examples, and it learns!"

---

## ✨ Magic Spell #12 — Few-Shot Prompting

**Zero-shot (no examples):**
```
Write notes about climate change.
```
Result: AI writes in its own style — which may not be your preferred style.

---

**Few-Shot (with examples):**
```
I want notes in exactly this format:

Example 1:
**Topic: Photosynthesis**
- 🌱 Definition: Plants make food from sunlight
- 🔑 Key terms: **chlorophyll**, **glucose**, **CO2**
- ⚡ Process: Sunlight → Water + CO2 → Glucose + O2
- 📝 Remember: Light = energy source

Example 2:
**Topic: Water Cycle**
- 🌊 Definition: Water's continuous journey
- 🔑 Key terms: **evaporation**, **condensation**, **precipitation**
- ⚡ Process: Sea → Evaporation → Clouds → Rain → Repeat
- 📝 Remember: Sun drives the cycle

Now write notes in this exact same format:
Topic: Climate Change
```

AI will follow the exact same format!

---

**Types of Few-Shot:**

**1. Format examples:**
```
I want product descriptions in this format:

"[Product name] — [One catchy line].
✅ Features: [3 points]
💰 Price: [range]"

Example:
"Chocolate Cake — The companion for every celebration.
✅ Features: Moist, rich, customizable
💰 Price: Rs. 500-1500"

Now use this format for: Vanilla Ice Cream
```

**2. Tone examples:**
```
I want to write in this tone:
Example: "Listen, this CSS trick is absolutely brilliant!
Grid layout changed my life — seriously!"

Now write something about Next.js in this tone.
```

**3. Code examples:**
```
I want TypeScript interfaces written like this:

// Example:
interface BlogPost {
  id: number;
  title: string;
  content: string;
  publishedAt: Date;
  tags: string[];
}

Now in this style, write:
- User profile interface
- Product interface
- Order interface
```

---

## 🔥 Try It Yourself

Design a notes format for your class subject:
1. Manually write one example in your preferred style
2. Give that example to Claude
3. Ask for notes on 3 more topics in the same format

---

## 🤯 Wow Moment

> Few-shot prompting originally came from machine learning research — models were given examples during training.
> Now you're using the same technique in just plain text — no code at all!
> **You used an AI training technique — today!** 🧠

---

## 💡 Fun Tip

The more examples you give, the better the AI understands the pattern. But returns diminish beyond 3-5 examples. **2-3 good examples = sweet spot!**

---

## ❓ Think About It

Few-shot prompting works on humans too! When you join a new job — the manager gives you examples of how the work is done. Same psychology. What similarities are there between AI training and human learning?
