# Chapter 11: Chain of Thought Prompting 🧠

**Week 6 | Builders Track**

---

## 📖 Story Scene

Zara asked Claude to solve a maths problem. Claude gave a direct answer — but it was wrong!

"NOVA, Claude is getting the maths wrong!"

"That's because you only asked for the answer," NOVA said. "If you ask it to **think step by step** — the result will be completely different!"

"Just that?"

"Try it and see."

Zara added "step by step." Claude showed all the working. And this time the answer was... correct.

"What just happened?" Zara asked.

"**Chain of Thought** prompting. When AI shows its thinking — mistakes decrease!"

---

## ✨ Magic Spell #11 — Chain of Thought (CoT)

**Normal prompt vs Chain of Thought:**

```
❌ Normal:
Solve this problem: Sarah has 15 apples.
She gives 1/3 to a friend, and takes 1/4 to school.
How many are left?

✅ Chain of Thought:
Solve this problem step by step.
Explain each step.
Sarah has 15 apples.
She gives 1/3 to a friend, and takes 1/4 to school.
How many are left?
```

---

**CoT Trigger Words:**

```
"Let's think step by step..."
"First do X, then Y..."
"Break this down into parts..."
"Explain your reasoning..."
"Think out loud..."
"Let's work through this..."
```

---

**CoT in code:**
```typescript
// Force CoT in the system prompt
system: `Whenever there is a complex problem:
1. First understand the problem
2. Think about the approach — what needs to be done?
3. Execute step by step
4. Give the final answer clearly
5. Verify — does the answer seem correct?`
```

---

**Structured Reasoning Prompt:**
```
I need to make this decision: [your decision]

Let's think through it:
1. What are the pros? (3-4 points)
2. What are the cons? (3-4 points)
3. What information is missing?
4. What is the best decision and why?

Separate each section clearly.
```

---

**Multi-step Analysis:**
```
There is a bug in this code:
[paste code]

Debug it step by step:
1. What was the code supposed to do?
2. What is the code actually doing?
3. Where is the difference?
4. What is the fix?
5. What should we test after the fix?
```

---

## 🔥 Try It Yourself

Do this with Claude — without CoT and with CoT. Compare the results:

**Round 1 — Without CoT:**
```
Suggest the best colour scheme for a website.
```

**Round 2 — With CoT:**
```
Suggest the best colour scheme for a school website.
Think step by step:
1. Who is the target audience for the website?
2. How do you want them to feel?
3. What does colour psychology say?
4. Then give a final recommendation with reasons.
```

---

## 🤯 Wow Moment

> Research papers have proven: CoT prompting can improve AI's accuracy on maths problems by **up to 40%**!
> Just "step by step" — no new technology, no extra cost.
> **Free improvement!** 🎯

---

## 💡 Fun Tip

After CoT, ask AI: "Was your approach correct? Is there an alternative way?" AI critiques its own answer — and sometimes gives an even better solution!

---

## ❓ Think About It

Do we use CoT in real life too? When you need to make a difficult decision — do you automatically think through "pros and cons"? When is explicitly writing out the steps helpful?
