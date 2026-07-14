# Chapter 10: Agent Prompting — AI That Thinks for Itself 🧠

**Week 5 | Creators Track**

---

## 📖 Story Scene

"NOVA, with tool use I tell Claude what to do. But can AI think for itself — without me telling it every step?"

"**Agents**," NOVA said. "Give AI a complex goal, let it make its own plan, use tools, and deliver results. No step-by-step instructions — just the goal!"

"That's... a different level."

"Yes. And you're ready!"

---

## ✨ Magic Spell #10 — Agent Prompting

**Simple Assistant vs Agent:**

```
Simple Assistant:
User: "Research Pakistan's economy"
AI: [writes an essay based on training data]

Agent:
User: "Research Pakistan's economy"
AI: "First I'll search for recent articles,
     then extract data points,
     then do analysis,
     then create a structured report..."
     [uses tools, executes steps]
```

---

**ReAct Pattern — Reasoning + Acting:**

```typescript
const AGENT_SYSTEM = `You are a helpful research agent.

When given a task:
1. THINK: Analyze the task — what's needed?
2. PLAN: Think through steps — what needs to happen?
3. ACT: Use tools step by step
4. OBSERVE: Review results
5. REFLECT: Is more needed? Or done?
6. ANSWER: Give final comprehensive answer

Always explain your reasoning.
If something is unclear, ask for clarification.`;
```

---

**Simple Research Agent:**

```typescript
const tools: Anthropic.Tool[] = [
  {
    name: "web_search",
    description: "Search for current information",
    input_schema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Search query" }
      },
      required: ["query"]
    }
  },
  {
    name: "summarize_text",
    description: "Summarize a long piece of text",
    input_schema: {
      type: "object",
      properties: {
        text: { type: "string" },
        length: { type: "string", enum: ["short", "medium", "long"] }
      },
      required: ["text", "length"]
    }
  },
  {
    name: "save_note",
    description: "Save an important note for later reference",
    input_schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        content: { type: "string" }
      },
      required: ["title", "content"]
    }
  }
];

// Agent loop
async function runAgent(task: string, maxSteps: number = 10): Promise<string> {
  const messages: Anthropic.MessageParam[] = [
    { role: "user", content: task }
  ];

  const notes: Record<string, string> = {};
  let steps = 0;

  while (steps < maxSteps) {
    steps++;
    console.log(`\n--- Agent Step ${steps} ---`);

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 2048,
      system: AGENT_SYSTEM,
      tools,
      messages
    });

    if (response.stop_reason === "end_turn") {
      const text = response.content.find(b => b.type === "text");
      return text?.type === "text" ? text.text : "No final answer";
    }

    if (response.stop_reason === "tool_use") {
      messages.push({ role: "assistant", content: response.content });

      const toolResults: Anthropic.ToolResultBlockParam[] = [];

      for (const block of response.content) {
        if (block.type !== "tool_use") continue;
        console.log(`Tool: ${block.name}`, block.input);

        let result = "";
        // Mock implementations:
        if (block.name === "web_search") {
          result = `Search results for "${(block.input as any).query}": [Mock: relevant information found]`;
        } else if (block.name === "summarize_text") {
          result = `Summary: [Mock: key points extracted from text]`;
        } else if (block.name === "save_note") {
          notes[(block.input as any).title] = (block.input as any).content;
          result = "Note saved successfully";
        }

        toolResults.push({ type: "tool_result", tool_use_id: block.id, content: result });
      }

      messages.push({ role: "user", content: toolResults });
    }
  }

  return "Max steps reached";
}

// Test:
const result = await runAgent(
  "Research AI education opportunities in Pakistan and create a structured report"
);
console.log(result);
```

---

## 🔥 Try It Yourself

Build a homework helper agent — that:
1. Analyzes the question
2. Explains the concept
3. Solves an example
4. Gives practice questions

---

## 🤯 Wow Moment

> You just built an AI Agent — one that:
> ✅ Thinks for itself
> ✅ Makes plans
> ✅ Uses tools
> ✅ Executes multiple steps
>
> **This is cutting-edge AI engineering in 2026 — and you built it!** 🏆

---

## 💡 Fun Tip

The `maxSteps` limit is essential — it prevents infinite loops. Production agents also have cost limits, time limits, and human oversight. Safety first!

---

## ❓ Think About It

How autonomous should an agent be? If an agent takes an important action — sends an email, deletes a file, makes a purchase — should it require human approval? Where do you draw the line?
