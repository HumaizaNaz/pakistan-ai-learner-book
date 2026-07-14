# Chapter 12: Multi-Step Agents + Error Handling 🔄

**Week 6 | Creators Track**

---

## 📖 Story Scene

"NOVA, my agent sometimes fails in the middle. One step fails and the whole agent shuts down."

"This is a common problem in production agents," NOVA said. "Error handling, retry logic, and graceful degradation — these are all essential in real agents."

---

## ✨ Magic Spell #12 — Robust Agent Patterns

**Retry Logic:**

```typescript
async function callWithRetry<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === maxRetries) throw error;
      console.log(`Attempt ${attempt} failed. Retrying in ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay * attempt));
    }
  }
  throw new Error("Max retries exceeded");
}

// Use:
const response = await callWithRetry(() =>
  client.messages.create({ model: "...", messages: [...] })
);
```

---

**Agent State Management:**

```typescript
interface AgentState {
  task: string;
  steps: AgentStep[];
  status: "running" | "completed" | "failed" | "paused";
  result: string | null;
  error: string | null;
}

interface AgentStep {
  stepNumber: number;
  action: string;
  toolUsed: string | null;
  result: string;
  timestamp: Date;
  success: boolean;
}

class ManagedAgent {
  private state: AgentState;

  constructor(task: string) {
    this.state = { task, steps: [], status: "running", result: null, error: null };
  }

  private logStep(action: string, tool: string | null, result: string, success: boolean) {
    this.state.steps.push({
      stepNumber: this.state.steps.length + 1,
      action, toolUsed: tool, result,
      timestamp: new Date(), success
    });
  }

  async run(): Promise<AgentState> {
    const messages: Anthropic.MessageParam[] = [
      { role: "user", content: this.state.task }
    ];

    let maxSteps = 15;

    while (maxSteps > 0) {
      maxSteps--;

      try {
        const response = await callWithRetry(() =>
          client.messages.create({
            model: "claude-sonnet-4-6",
            max_tokens: 2048,
            tools: gradingTools,
            messages
          })
        );

        if (response.stop_reason === "end_turn") {
          const text = response.content.find(b => b.type === "text");
          this.state.result = text?.type === "text" ? text.text : "";
          this.state.status = "completed";
          this.logStep("Final answer generated", null, this.state.result, true);
          break;
        }

        // Handle tool calls
        messages.push({ role: "assistant", content: response.content });
        const results: Anthropic.ToolResultBlockParam[] = [];

        for (const block of response.content) {
          if (block.type !== "tool_use") continue;

          try {
            const result = implementTool(block.name, block.input as Record<string, any>);
            results.push({ type: "tool_result", tool_use_id: block.id, content: result });
            this.logStep(`Tool: ${block.name}`, block.name, result, true);
          } catch (toolError) {
            const errorMsg = `Tool failed: ${String(toolError)}`;
            results.push({ type: "tool_result", tool_use_id: block.id, content: errorMsg, is_error: true });
            this.logStep(`Tool: ${block.name}`, block.name, errorMsg, false);
          }
        }

        messages.push({ role: "user", content: results });

      } catch (error) {
        this.state.status = "failed";
        this.state.error = String(error);
        this.logStep("Agent error", null, String(error), false);
        break;
      }
    }

    if (maxSteps === 0) {
      this.state.status = "failed";
      this.state.error = "Max steps reached";
    }

    return this.state;
  }

  getReport(): string {
    return `
Agent Task: ${this.state.task}
Status: ${this.state.status}
Steps Taken: ${this.state.steps.length}
Successful Steps: ${this.state.steps.filter(s => s.success).length}
${this.state.error ? `Error: ${this.state.error}` : ""}
Result: ${this.state.result || "N/A"}
    `.trim();
  }
}

// Use:
const agent = new ManagedAgent("Grade this essay: [essay text]");
const finalState = await agent.run();
console.log(agent.getReport());
```

---

## 🔥 Try It Yourself

Use the `ManagedAgent` class — grade multiple essays and check the state. Deliberately create an error (wrong tool input) — does it handle gracefully?

---

## 🤯 Wow Moment

> You just built a **production-grade agent architecture**!
> Error handling + retry logic + state management + logging
> This is what junior developers take years to learn. 🏗️

---

## 💡 Fun Tip

`is_error: true` in the tool result — Claude knows the tool failed. Claude then decides: retry? Try a different approach? Tell the user? Real intelligence!

---

## ❓ Think About It

You're logging the agent's steps — that's an audit trail. What are the privacy considerations if you're processing student essays? Think about GDPR/data protection!
