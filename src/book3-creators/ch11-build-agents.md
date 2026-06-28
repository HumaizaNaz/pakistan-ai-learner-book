# Chapter 11: AI Agents Banana — Planning + Execution 🤖

**Week 6 | Creators Track**

---

## 📖 Story Scene

"NOVA, main ek real agent banana chahti hoon — jo meri school ke liye actually useful ho. Students ke essays grade kare, feedback de, progress track kare."

"Perfect project hai," NOVA ne kaha. "Ek **Essay Grading Agent** banate hain. Wo khud decide karega: kya check karna hai, kitne steps mein, kya feedback dena hai."

---

## ✨ Magic Spell #11 — Essay Grading Agent

**Agent Tools:**

```typescript
const gradingTools: Anthropic.Tool[] = [
  {
    name: "check_grammar",
    description: "Check grammar and spelling in text",
    input_schema: {
      type: "object",
      properties: { text: { type: "string" } },
      required: ["text"]
    }
  },
  {
    name: "check_structure",
    description: "Analyze essay structure: intro, body, conclusion",
    input_schema: {
      type: "object",
      properties: { essay: { type: "string" } },
      required: ["essay"]
    }
  },
  {
    name: "evaluate_content",
    description: "Evaluate content quality and argumentation",
    input_schema: {
      type: "object",
      properties: {
        essay: { type: "string" },
        topic: { type: "string" }
      },
      required: ["essay", "topic"]
    }
  },
  {
    name: "generate_feedback",
    description: "Generate comprehensive student feedback",
    input_schema: {
      type: "object",
      properties: {
        grammar_score: { type: "number" },
        structure_score: { type: "number" },
        content_score: { type: "number" },
        notes: { type: "string" }
      },
      required: ["grammar_score", "structure_score", "content_score", "notes"]
    }
  }
];
```

---

**Agent System Prompt:**

```typescript
const GRADER_SYSTEM = `Tum ek experienced Pakistani school teacher ho 
jo essay grading mein expert ho.

Essay grade karne ke liye ye steps follow karo:
1. Pehle grammar aur spelling check karo
2. Phir essay ki structure analyze karo
3. Phir content ki quality evaluate karo
4. Finally, comprehensive feedback generate karo

Scoring:
- Grammar: 25 points
- Structure: 35 points  
- Content: 40 points
- Total: 100 points

Feedback always in Roman Urdu — encouraging lekin honest.`;
```

---

**Tool Implementations:**

```typescript
function implementTool(name: string, input: Record<string, any>): string {
  switch (name) {
    case "check_grammar":
      // Real: use grammar API or Claude itself
      return JSON.stringify({
        errors: ["comma missing", "verb tense inconsistent"],
        score: 20,
        suggestion: "Punctuation improve karo"
      });

    case "check_structure":
      const hasIntro = input.essay.toLowerCase().includes("introduction") ||
                       input.essay.split("\n").length > 3;
      return JSON.stringify({
        hasIntroduction: hasIntro,
        hasClear_paragraphs: input.essay.split("\n\n").length >= 3,
        hasConclusion: input.essay.toLowerCase().includes("conclusion"),
        score: 28,
        feedback: "Structure theek hai, conclusion thoda weak hai"
      });

    case "evaluate_content":
      return JSON.stringify({
        relevance: "high",
        depth: "moderate",
        examples: "2 examples found",
        score: 32,
        feedback: "Content relevant hai, zyada examples add karo"
      });

    case "generate_feedback": {
      const total = input.grammar_score + input.structure_score + input.content_score;
      const grade = total >= 90 ? "A+" : total >= 80 ? "A" :
                    total >= 70 ? "B" : total >= 60 ? "C" : "D";
      return JSON.stringify({
        total_score: total,
        grade,
        message: `Masha'Allah ${total}/100! ${input.notes}. Keep it up!`
      });
    }

    default:
      return "Unknown tool";
  }
}
```

---

**Complete Agent Runner:**

```typescript
async function gradeEssay(essay: string, topic: string) {
  const messages: Anthropic.MessageParam[] = [{
    role: "user",
    content: `Grade this essay about "${topic}":\n\n${essay}`
  }];

  while (true) {
    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 2048,
      system: GRADER_SYSTEM,
      tools: gradingTools,
      messages
    });

    if (response.stop_reason === "end_turn") {
      const text = response.content.find(b => b.type === "text");
      return text?.type === "text" ? text.text : "";
    }

    messages.push({ role: "assistant", content: response.content });

    const results: Anthropic.ToolResultBlockParam[] = response.content
      .filter(b => b.type === "tool_use")
      .map(block => {
        if (block.type !== "tool_use") return null!;
        const result = implementTool(block.name, block.input as Record<string, any>);
        return { type: "tool_result" as const, tool_use_id: block.id, content: result };
      })
      .filter(Boolean);

    messages.push({ role: "user", content: results });
  }
}

// Use it:
const feedback = await gradeEssay(
  "Pakistan is a beautiful country with rich culture...",
  "My Country Pakistan"
);
console.log(feedback);
```

---

## 🔥 Try It Yourself

Agent run karo, console mein dekho — step by step kya karta hai. Phir essay badlo aur dekho feedback kaise change hota hai.

---

## 🤯 Wow Moment

> Ye agent khud decide karta hai: pehle grammar, phir structure, phir content — tumne ye order nahi bataya!
> **AI is making decisions autonomously within your system.** 
> Ye jo tum ne banaya — ye EdTech startup material hai! 📚

---

## 💡 Fun Tip

Tools ko "mock" karte ho initially — phir real APIs se replace karo. Ye TDD (Test Driven Development) jaisa approach hai — pehle behavior define karo, phir implement karo!

---

## ❓ Think About It

AI essay grader ke ethical implications kya hain? Teacher replace ho sakta hai? Kya AI bias ho sakta hai? Kaise ensure karoge ke grading fair hai sab students ke liye?
