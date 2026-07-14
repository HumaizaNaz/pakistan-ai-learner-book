# Chapter 9: Tool Use — NOVA ko Haath Mile! 🤝

**Week 5 | Creators Track**

---

## 📖 Story Scene

"NOVA, tum bahut kuch jaanti ho lekin real-time information nahi hai tumhare paas — aaj ka weather, live prices, database data..."

"Isliye **Tool Use** hai," NOVA ne kaha. "Tum mujhe tools de sakte ho. Main khud decide karti hoon kab use karna hai, aur results se jawab banati hoon."

"Tum khud decide karo ge?"

"Haan. Ye AI ka ek powerful feature hai — autonomy with tools!"

---

## ✨ Magic Spell #9 — Tool Use (Function Calling)

**Concept:**
```
User asks question
→ Claude decides: kya mujhe tool chahiye?
→ Agar haan: tool call karo
→ Tool result receive karo
→ Final answer do
```

**Tool Define karo:**

```typescript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Tools define karo
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

// Tool implement karo (actual logic)
function executeWeather(city: string): string {
  // Real app mein: weather API call karo
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

      // Tool execute karo
      let toolResult: string;
      if (toolUseBlock.name === "get_weather") {
        toolResult = executeWeather((toolUseBlock.input as any).city);
      } else if (toolUseBlock.name === "calculate") {
        toolResult = executeCalculate((toolUseBlock.input as any).expression);
      } else {
        toolResult = "Unknown tool";
      }

      // Result Claude ko do
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
const answer = await chatWithTools("Karachi mein aaj kya weather hai? Aur 15% of 5000 kya hoga?");
console.log(answer);
```

---

## 🔥 Try It Yourself

Database tool banao — Claude ko school data access deo:

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

> Tool Use = Claude ka "real world mein haath"!
> Claude khud decide karta hai kab tool use karna hai — bina tumhari instructions ke.
> **Ye AI autonomy ki shuruat hai — yahan se agents start hote hain!** 🤖

---

## 💡 Fun Tip

Tool names aur descriptions bohot important hain — Claude inhi se decide karta hai kaunsa tool kab use kare. Clear, specific descriptions = better tool selection!

---

## ❓ Think About It

Tool use mein Claude ko trust karte ho ke wo sahi tool sahi waqt use kare. Kya safeguards hone chahiye? Agar Claude ne galat tool call kiya ya dangerous action kiya toh?
