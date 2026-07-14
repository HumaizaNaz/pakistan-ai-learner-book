# Chapter 10: Agent Prompting — AI jo Khud Sochta Hai 🧠

**Week 5 | Creators Track**

---

## 📖 Story Scene

"NOVA, tool use mein main Claude ko batati hoon kya kare. Lekin kya AI khud soch sakta hai — bina mere bataye ke kya karna hai?"

"**Agents**," NOVA ne kaha. "AI jo complex goal diya jaaye, khud plan banaye, tools use kare, aur result de. Koi step-by-step instructions nahi — sirf goal!"

"Ye... alag level hai."

"Haan. Aur tum ready ho!"

---

## ✨ Magic Spell #10 — Agent Prompting

**Simple Assistant vs Agent:**

```
Simple Assistant:
User: "Research karo Pakistan ki economy ke baare mein"
AI: [essay likhta hai based on training data]

Agent:
User: "Research karo Pakistan ki economy ke baare mein"
AI: "Pehle main recent articles search karoonga,
     phir data points extract karoonga,
     phir analysis karoonga,
     phir structured report banaoonga..."
     [tools use karta hai, steps execute karta hai]
```

---

**ReAct Pattern — Reasoning + Acting:**

```typescript
const AGENT_SYSTEM = `Tum ek helpful research agent ho.

Jab task diya jaaye:
1. THINK: Task ko analyze karo — kya chahiye?
2. PLAN: Steps socho — kya karna padega?
3. ACT: Tools use karo step by step
4. OBSERVE: Results dekho
5. REFLECT: Kya aur chahiye? Ya done?
6. ANSWER: Final comprehensive answer do

Hamesha apni reasoning explain karo.
Agar kuch unclear ho, clarify maango.`;
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
  "Pakistan mein AI education ke opportunities research karo aur ek structured report banao"
);
console.log(result);
```

---

## 🔥 Try It Yourself

Homework helper agent banao — jo:
1. Sawaal analyze kare
2. Concept explain kare
3. Example solve kare
4. Practice questions de

---

## 🤯 Wow Moment

> Tum ne abhi ek AI Agent banaya — jo:
> ✅ Khud soochta hai
> ✅ Plan banata hai
> ✅ Tools use karta hai
> ✅ Multiple steps execute karta hai
>
> **Ye 2026 ki cutting-edge AI engineering hai — aur tum ne kar di!** 🏆

---

## 💡 Fun Tip

`maxSteps` limit zaroori hai — infinite loop prevention. Production agents mein cost limits, time limits, aur human oversight bhi hoti hai. Safety first!

---

## ❓ Think About It

Agent kitna autonomous hona chahiye? Agar agent koi important action le — email bheje, file delete kare, purchase kare — kya human approval chahiye? Kahan line draw karte ho?
