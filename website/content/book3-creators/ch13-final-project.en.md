# Chapter 13: Final Project — Real-World AI Tool 🚀

**Week 7 | Creators Track**

---

## 📖 Story Scene

"Zara, what will you build for your final project?" Miss Sara asked.

Zara thought. Everything came back — from Book 1 to Book 3. HTML, CSS, JavaScript, TypeScript, Next.js, Claude API, Prompt Engineering, Tool Use, Agents...

"I'm going to build an **AI-Powered Study Assistant**," Zara said.

"What does it do?"

"It gives students personalized study plans. Identifies their weaknesses. Generates practice questions. Tracks their progress. All with AI — all automatic."

Miss Sara thought for a moment. "That's actually a real product idea."

Zara smiled. "Yes. And I'm going to build it."

---

## ✨ Magic Spell #13 — Project Planning

**Choose Your Project:**

| Project Idea | Complexity | Skills Used |
|-------------|-----------|-------------|
| AI Study Assistant | ⭐⭐⭐ | Full stack + Agent + Tools |
| Essay Grader App | ⭐⭐⭐ | Agent + Structured output |
| AI Tutor Chatbot | ⭐⭐ | System prompt + CoT + API |
| Code Explainer | ⭐⭐ | PE + API + Next.js |
| Quiz Generator | ⭐⭐ | Few-shot + Chaining |

---

**AI Study Assistant — Architecture:**

```
User Interface (Next.js)
    ↓
Student Profile Setup
    ↓
Weakness Assessment (AI Agent)
    ↓
Personalized Study Plan (Prompt Chaining)
    ↓
Practice Questions (Few-Shot)
    ↓
Progress Tracking (Database)
    ↓
Weekly Report (Structured Output)
```

---

**Core Features:**

```typescript
// Feature 1: Student Onboarding
interface StudentProfile {
  name: string;
  grade: string;
  subjects: string[];
  weakAreas: string[];
  studyHoursPerDay: number;
  examDate?: Date;
}

// Feature 2: Weakness Detector (AI)
async function assessWeaknesses(
  subject: string,
  studentAnswers: string[]
): Promise<string[]> {
  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 512,
    temperature: 0,
    system: "Analyze student answers and identify weak topics. Return JSON array of weak areas.",
    messages: [{
      role: "user",
      content: `Subject: ${subject}\nAnswers: ${JSON.stringify(studentAnswers)}`
    }]
  });
  return JSON.parse(response.content[0].type === "text" ? response.content[0].text : "[]");
}

// Feature 3: Study Plan Generator (Chaining)
async function generateStudyPlan(profile: StudentProfile): Promise<string> {
  // Step 1: Prioritize topics
  const priorities = await prioritizeTopics(profile.weakAreas, profile.examDate);
  // Step 2: Create daily schedule
  const schedule = await createSchedule(priorities, profile.studyHoursPerDay);
  // Step 3: Add resources
  return await addResources(schedule, profile.subjects);
}

// Feature 4: Practice Questions
async function generatePractice(
  topic: string,
  difficulty: "easy" | "medium" | "hard",
  count: number
): Promise<Question[]> {
  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 1024,
    temperature: 0,
    messages: [{
      role: "user",
      content: `Generate ${count} ${difficulty} questions about ${topic}.
      Return JSON: [{question, options: [4], correct: index, explanation}]`
    }]
  });
  return JSON.parse(response.content[0].type === "text" ? response.content[0].text : "[]");
}
```

---

**Project Timeline:**

```
Day 1: Setup + Student onboarding form
Day 2: AI weakness assessment
Day 3: Study plan generator (chaining)
Day 4: Practice questions feature
Day 5: Progress tracking (database)
Day 6: Dashboard UI
Day 7: Testing + Bug fixes
Day 8: Deploy to Vercel
```

---

## 🔥 Try It Yourself

Build the simplest version first — just:
1. Student form (name, subject, weak area)
2. Generate 5 practice questions with Claude
3. Show results with one button

Then add features!

---

## 🤯 Wow Moment

> What you're building — this is an **EdTech product**!
> Pakistan has 50 million+ school students.
> One good AI study tool = massive impact.
> **You are a solution builder, not a problem creator!** 🌍

---

## 💡 Fun Tip

Build the MVP (Minimum Viable Product) first — all features come later. One working simple product is more valuable than one broken complex product. Ship early, improve always!

---

## ❓ Think About It

If real students use this product — how would you handle data privacy? Who can see student data? How do you store it? What are the data laws in Pakistan?
