# Chapter 6: Prompt Engineering — Foundations Properly 🎓

**Week 3 | Creators Track**

---

## 📖 Story Scene

"NOVA, main chahti hoon ke meri class ke dost bhi prompt engineering seekhein. Mujhe unhe ek proper class deni hai. Shuru kahan se karoon?"

"Shuru karo **principles** se," NOVA ne kaha. "Techniques book 1 aur 2 mein seekhin. Ab time hai ye samajhne ka ke **kyun** kaam karta hai prompt engineering — science ke perspective se."

---

## ✨ Magic Spell #6 — Prompt Engineering Science

**Kyun kaam karta hai PE?**

LLMs (Claude jaisi) ko "next token prediction" ke zariye train kiya jaata hai. Iska matlab:

```
Better context → Better prediction → Better output

Tumhara prompt = context hai
Jitna rich context → utna better jawab
```

---

**Anthropic ke Official PE Principles:**

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

Claude se prompt ka audit karo:

```
Ye mera prompt hai:
[tumhara koi purana prompt]

Isko evaluate karo:
1. Kya ye clear hai? (1-10)
2. Context enough hai? (1-10)
3. Format specified hai? (1-10)
4. Kya improvements honi chahiye?
5. Improved version do.
```

---

## 🤯 Wow Moment

> Anthropic ne "Prompt Engineering Guide" publish kiya hai — free mein!
> `docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview`
> Ye wohi document hai jis se professional AI engineers seekhte hain.
> **Tumhare paas same resource hai!** 📚

---

## 💡 Fun Tip

XML tags (`<instructions>`, `<context>`, `<output>`) long complex prompts mein bohot helpful hain. Claude inhe samajhta hai aur structured response deta hai. Big prompts ke liye must-use!

---

## ❓ Think About It

PE ek science hai ya art? Kya reproducible, testable approach se better prompts mil sakti hain? Ya experience aur intuition zyada important hai?
