# Chapter 8: Prompt Chaining — Complex Tasks Step by Step 🔗

**Week 4 | Creators Track**

---

## 📖 Story Scene

"NOVA, I need a complete lesson plan — from topic research, to outline, to content, to quiz. All in one shot?"

"No," NOVA said. "One prompt can't do it all — quality will suffer. Use **Prompt Chaining** — each task in a separate step, where the previous output becomes the next step's input!"

---

## ✨ Magic Spell #8 — Prompt Chaining

**Concept:**
```
Step 1 Output → Step 2 Input → Step 3 Input → Final Result
```

**Lesson Plan Generator — 4 Step Chain:**

```typescript
interface LessonPlan {
  topic: string;
  keyPoints: string[];
  outline: string;
  content: string;
  quiz: string;
}

async function generateLessonPlan(topic: string): Promise<LessonPlan> {

  // STEP 1: Key points research
  const step1 = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 512,
    temperature: 0,
    messages: [{
      role: "user",
      content: `Topic: ${topic}
      
Extract 5 most important key points to teach this topic.
Return as numbered list. Grade 8 level. Be specific.`
    }]
  });
  const keyPointsText = step1.content[0].type === "text" ? step1.content[0].text : "";

  // STEP 2: Lesson outline (uses step 1 output)
  const step2 = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 512,
    temperature: 0,
    messages: [{
      role: "user",
      content: `Topic: ${topic}
Key Points: ${keyPointsText}

Based on these key points, create a 45-minute lesson outline:
- 5 min: Introduction/hook
- 30 min: Main teaching (use the key points)
- 10 min: Practice activity
Format as structured outline.`
    }]
  });
  const outline = step2.content[0].type === "text" ? step2.content[0].text : "";

  // STEP 3: Main content (uses step 1 + 2)
  const step3 = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 2048,
    temperature: 0.7,
    messages: [{
      role: "user",
      content: `Write the main lesson content for:
Topic: ${topic}
Outline: ${outline}

Write engaging, student-friendly content.
Include examples, analogies, and Pakistan-relevant context.`
    }]
  });
  const content = step3.content[0].type === "text" ? step3.content[0].text : "";

  // STEP 4: Quiz (uses all previous)
  const step4 = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 512,
    temperature: 0,
    messages: [{
      role: "user",
      content: `Based on this lesson content:
${content}

Create a 5-question quiz:
- 3 multiple choice (4 options each)
- 2 short answer
Include answer key at end.`
    }]
  });
  const quiz = step4.content[0].type === "text" ? step4.content[0].text : "";

  return {
    topic,
    keyPoints: keyPointsText.split("\n").filter(l => l.trim()),
    outline,
    content,
    quiz
  };
}

// Use:
const plan = await generateLessonPlan("Photosynthesis");
console.log(plan.content);
```

---

**When to use Chaining:**

```
✅ Use when:
- Task needs multiple distinct steps
- Earlier steps inform later steps
- Quality matters more than speed
- Different models/params for each step

❌ Don't use when:
- Simple single-step task
- Speed is critical
- Steps are independent (use parallel instead)
```

---

**Parallel Chains (Independent Steps):**

```typescript
// Independent tasks — run simultaneously!
const [research, examples, quiz] = await Promise.all([
  getResearch(topic),
  getExamples(topic),
  getQuizQuestions(topic)
]);

// Then combine them
const lesson = combine(research, examples, quiz);
```

---

## 🔥 Try It Yourself

Build an essay reviewer — 3 step chain:
1. Grammar check
2. Content analysis
3. Final grade with combined feedback

---

## 🤯 Wow Moment

> `Promise.all()` — parallel API calls!
> 3 sequential calls = 3x wait time
> 3 parallel calls = 1x wait time
> **Same result, 3x faster!** ⚡

---

## 💡 Fun Tip

Log each step's output during development — `console.log("Step 1:", step1Output)`. Debugging chained prompts is the hardest part — visibility helps!

---

## ❓ Think About It

Prompt chaining is a pipeline — one step's output is the next step's input. Is this reliable? What happens if step 2's output comes in the wrong format for step 3? How would you add validation?
