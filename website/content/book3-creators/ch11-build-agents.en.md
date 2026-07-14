# Chapter 11: Building AI Agents — Planning + Execution 🤖

**Week 6 | Creators Track**

---

## 📖 Story Scene

"NOVA, I want to build a real agent — one that's actually useful for my school. It should grade student essays, give feedback, and track progress."

"Perfect project," NOVA said. "Let's build an **Essay Grading Agent**. It will decide on its own: what to check, how many steps, what feedback to give."

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
const GRADER_SYSTEM = `You are an experienced Pakistani school teacher 
who is an expert at essay grading.

To grade an essay, follow these steps:
1. First check grammar and spelling
2. Then analyze essay structure
3. Then evaluate content quality
4. Finally generate comprehensive feedback

Scoring:
- Grammar: 25 points
- Structure: 35 points  
- Content: 40 points
- Total: 100 points

Feedback should be encouraging but honest.`;
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
        suggestion: "Improve punctuation"
      });

    case "check_structure":
      const hasIntro = input.essay.toLowerCase().includes("introduction") ||
                       input.essay.split("\n").length > 3;
      return JSON.stringify({
        hasIntroduction: hasIntro,
        hasClear_paragraphs: input.essay.split("\n\n").length >= 3,
        hasConclusion: input.essay.toLowerCase().includes("conclusion"),
        score: 28,
        feedback: "Structure is okay, conclusion is a bit weak"
      });

    case "evaluate_content":
      return JSON.stringify({
        relevance: "high",
        depth: "moderate",
        examples: "2 examples found",
        score: 32,
        feedback: "Content is relevant, add more examples"
      });

    case "generate_feedback": {
      const total = input.grammar_score + input.structure_score + input.content_score;
      const grade = total >= 90 ? "A+" : total >= 80 ? "A" :
                    total >= 70 ? "B" : total >= 60 ? "C" : "D";
      return JSON.stringify({
        total_score: total,
        grade,
        message: `Well done ${total}/100! ${input.notes}. Keep it up!`
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

Run the agent, watch the console — see what it does step by step. Then change the essay and see how the feedback changes.

---

## 🤯 Wow Moment

> This agent decides on its own: first grammar, then structure, then content — you didn't tell it that order!
> **AI is making decisions autonomously within your system.** 
> What you built here — this is EdTech startup material! 📚

---

## 💡 Fun Tip

Mock tools initially — then replace with real APIs. This is like a TDD (Test Driven Development) approach — define behavior first, then implement!

---

## ❓ Think About It

What are the ethical implications of an AI essay grader? Can it replace a teacher? Can AI be biased? How would you ensure grading is fair for all students?
