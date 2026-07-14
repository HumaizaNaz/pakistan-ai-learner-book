# Chapter 6: Prompt Engineering — Foundations Properly 🎓

**Week 3 | Creators Track**

---

## 📖 Story Scene

"NOVA, I want my classmates to learn prompt engineering too. I need to teach them a proper class. Where do I start?"

"Start with the **principles**," NOVA said. "You learned the techniques in Books 1 and 2. Now it's time to understand **why** prompt engineering works — from a scientific perspective."

---

## ✨ Magic Spell #6 — Prompt Engineering Science

**Why does PE work?**

LLMs (like Claude) are trained through "next token prediction." This means:

```
Better context → Better prediction → Better output

Your prompt = the context
Richer context → Better answer
```

---

**Anthropic's Official PE Principles:**

**1. Be Clear and Specific**
```
❌ "Write something about Pakistan"
✅ "Write a 3-paragraph informative essay about 
    Pakistan's cultural heritage, focusing on 
    Mughal architecture. Target audience: 
    Grade 10 students. Formal but engaging tone."
```

**2. Provide Context**
```
❌ "Fix this bug"
✅ "I'm building a Next.js chatbot. This API route 
    should accept POST requests with {message: string} 
    and return {reply: string}. The bug is: 
    [exact error message]. Here's the code: [code]"
```

**3. Use Structure**
```
✅ Use XML tags for complex prompts:
<instructions>
  Analyze the following code review.
</instructions>

<code>
  [code here]
</code>

<output_format>
  Provide: 1) bugs found 2) improvements 3) overall rating
</output_format>
```

**4. Show Examples (Few-Shot)**
```
✅ Include 1-3 examples of desired input/output
```

**5. Let Claude Think (CoT)**
```
✅ "Think step by step before answering"
✅ "Explain your reasoning"
✅ "Work through this carefully"
```

---

**XML Prompting — Advanced Technique:**

```python
prompt = """
<role>
You are an expert code reviewer with 10 years experience 
in Python and JavaScript.
</role>

<task>
Review the following code for:
1. Security vulnerabilities
2. Performance issues
3. Code quality
</task>

<code>
def get_user(username):
    query = f"SELECT * FROM users WHERE name = '{username}'"
    return db.execute(query)
</code>

<output_format>
Provide your review as:
- CRITICAL: [security/breaking issues]
- WARNINGS: [performance/quality issues]  
- SUGGESTIONS: [optional improvements]
- SCORE: [1-10]
</output_format>
"""
```

---

**Prompt Iteration Process:**

```
1. Write initial prompt
2. Test with diverse inputs
3. Find failure cases
4. Understand WHY it fails
5. Improve prompt
6. Repeat until satisfied
```

---

## 🔥 Try It Yourself

Get Claude to audit your prompt:

```
This is my prompt:
[one of your old prompts]

Evaluate it:
1. Is it clear? (1-10)
2. Is there enough context? (1-10)
3. Is the format specified? (1-10)
4. What improvements should be made?
5. Give me an improved version.
```

---

## 🤯 Wow Moment

> Anthropic published a "Prompt Engineering Guide" — for free!
> `docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview`
> This is the same document professional AI engineers learn from.
> **You have the same resource!** 📚

---

## 💡 Fun Tip

XML tags (`<instructions>`, `<context>`, `<output>`) are extremely helpful in long, complex prompts. Claude understands them and gives structured responses. A must-use for big prompts!

---

## ❓ Think About It

Is PE a science or an art? Can a reproducible, testable approach produce better prompts? Or is experience and intuition more important?
