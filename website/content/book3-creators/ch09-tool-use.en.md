# Chapter 9: Tool Use — NOVA Gets Hands! 🤝

**Week 5 | Creators Track**

---

## 📖 Story Scene

"NOVA, you know so much but you don't have real-time information — today's weather, live prices, database data..."

"That's what **Tool Use** is for," NOVA said. "You can give me tools. I decide when to use them, and build answers from the results."

"You decide yourself?"

"Yes. This is one of AI's most powerful features — autonomy with tools!"

---

## ✨ Magic Spell #9 — Tool Use (Function Calling)

**Concept:**
```
User asks question
→ Claude decides: do I need a tool?
→ If yes: make the tool call
→ Receive tool result
→ Give final answer
```

**Define Your Tools:**

```typescript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Define tools
const tools: Anthropic.Tool[] = [
  {
    name: "get_weather",
    description: "Get current weather for a city in Pakistan",
    input_schema: {
      type: "object",
      properties: {
        city: {
          type: "string",
          description: "City name e.g. Karachi, Lahore, Islamabad"
        }
      },
      required: ["city"]
    }
  },
  {
    name: "calculate",
    description: "Perform mathematical calculations",
    input_schema: {
      type: "object",
      properties: {
        expression: {
          type: "string",
          description: "Math expression e.g. '2 + 2', '15% of 3000'"
        }
      },
      required: ["expression"]
    }
  }
];

// Implement tools (actual logic)
function executeWeather(city: string): string {
  // In a real app: call a weather API
  return `${city}: 35°C, Sunny, Humidity: 65%`;
}

function executeCalculate(expression: string): string {
  try {
    // Careful: eval is unsafe for untrusted input!
    // Use a math library in production
    const result = Function('"use strict"; return (' + expression + ')')();
    return String(result);
  } catch {
    return "Calculation error";
  }
}

// Main function with tool loop
async function chatWithTools(userMessage: string): Promise<string> {
  const messages: Anthropic.MessageParam[] = [
    { role: "user", content: userMessage }
  ];

  while (true) {
    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      tools,
      messages
    });

    // Tool use request?
    if (response.stop_reason === "tool_use") {
      const toolUseBlock = response.content.find(b => b.type === "tool_use");
      if (!toolUseBlock || toolUseBlock.type !== "tool_use") break;

      // Execute the tool
      let toolResult: string;
      if (toolUseBlock.name === "get_weather") {
        toolResult = executeWeather((toolUseBlock.input as any).city);
      } else if (toolUseBlock.name === "calculate") {
        toolResult = executeCalculate((toolUseBlock.input as any).expression);
      } else {
        toolResult = "Unknown tool";
      }

      // Give result back to Claude
      messages.push({ role: "assistant", content: response.content });
      messages.push({
        role: "user",
        content: [{
          type: "tool_result",
          tool_use_id: toolUseBlock.id,
          content: toolResult
        }]
      });
    } else {
      // Final answer
      const textBlock = response.content.find(b => b.type === "text");
      return textBlock?.type === "text" ? textBlock.text : "No response";
    }
  }

  return "Error in tool loop";
}

// Test:
const answer = await chatWithTools("What's the weather in Karachi today? And what is 15% of 5000?");
console.log(answer);
```

---

## 🔥 Try It Yourself

Build a database tool — give Claude access to school data:

```typescript
const dbTool: Anthropic.Tool = {
  name: "get_student_info",
  description: "Get student information by name",
  input_schema: {
    type: "object",
    properties: {
      name: { type: "string", description: "Student name" }
    },
    required: ["name"]
  }
};

// Mock database
const students = [
  { name: "Zara", grade: "A+", attendance: "95%", subject: "Computer" },
  { name: "Ali", grade: "B", attendance: "88%", subject: "Math" },
];

function getStudentInfo(name: string): string {
  const student = students.find(s => s.name.toLowerCase() === name.toLowerCase());
  return student ? JSON.stringify(student) : "Student not found";
}
```

---

## 🤯 Wow Moment

> Tool Use = Claude's "hands in the real world"!
> Claude decides itself when to use a tool — without your instructions.
> **This is the beginning of AI autonomy — this is where agents start!** 🤖

---

## 💡 Fun Tip

Tool names and descriptions are very important — Claude uses them to decide which tool to call when. Clear, specific descriptions = better tool selection!

---

## ❓ Think About It

With tool use you're trusting Claude to pick the right tool at the right time. What safeguards should you have? What if Claude makes a wrong tool call or takes a dangerous action?
