# Chapter 6: TypeScript — Types aur Interfaces Properly 🔷

**Week 3 | Builders Track**

---

## 📖 Story Scene

"NOVA, kal meri TypeScript file mein ek interesting error aaya. Maine `string | number` dekha — ye kya tha?"

"Ah," NOVA ne kaha. "Union types! TypeScript mein ek variable do ya zyada types ka ho sakta hai. Chalo advanced types seekhte hain — ye woh cheez hai jo TypeScript ko real superpower deti hai."

---

## ✨ Magic Spell #6 — Advanced TypeScript Types

**Union Types — ek ya doosra:**
```typescript
let id: string | number = "abc123";
id = 42; // dono valid hain!

function showId(id: string | number) {
  if (typeof id === "string") {
    console.log("String ID:", id.toUpperCase());
  } else {
    console.log("Number ID:", id);
  }
}
```

---

**Enum — fixed options:**
```typescript
enum Status {
  Active = "active",
  Inactive = "inactive",
  Pending = "pending"
}

const userStatus: Status = Status.Active;
console.log(userStatus); // "active"
```

---

**Interface vs Type:**
```typescript
// Interface — extendable (preferred for objects)
interface Animal {
  name: string;
  sound: string;
}

interface Dog extends Animal {
  breed: string; // Animal ki sab properties + ye
}

// Type alias — flexible
type ID = string | number;
type Callback = (data: string) => void;
```

---

**Generic Types — flexible types:**
```typescript
// Kisi bhi type ka array return karo
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const first = getFirst([1, 2, 3]);        // type: number
const firstName = getFirst(["a", "b"]);   // type: string
// TypeScript automatically type samajh leta hai!
```

---

**Real Project Example — Chat Message:**
```typescript
interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";  // sirf ye dono valid hain
  timestamp: Date;
}

interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

function addMessage(state: ChatState, text: string, sender: "user" | "ai"): ChatState {
  const newMessage: Message = {
    id: Date.now(),
    text,
    sender,
    timestamp: new Date()
  };
  return {
    ...state,
    messages: [...state.messages, newMessage]
  };
}
```

---

## 🔥 Try It Yourself

Apne school ke liye ek type-safe system banao:

```typescript
interface Subject {
  name: string;
  teacher: string;
  marks: number;
  grade: "A+" | "A" | "B" | "C" | "D" | "F"; // sirf ye valid grades
}

interface Student {
  name: string;
  rollNo: number;
  subjects: Subject[];
}

function calculateAverage(student: Student): number {
  const total = student.subjects.reduce((sum, s) => sum + s.marks, 0);
  return total / student.subjects.length;
}

// Test karo:
const zara: Student = {
  name: "Zara",
  rollNo: 5,
  subjects: [
    { name: "Math", teacher: "Mr. Ali", marks: 92, grade: "A+" },
    { name: "Science", teacher: "Miss Sara", marks: 88, grade: "A" },
  ]
};
console.log(calculateAverage(zara)); // 90
```

---

## 🤯 Wow Moment

> `"user" | "ai"` — ye **literal union type** hai!
> Matlab woh variable sirf ye do exact strings le sakta hai — koi aur string nahi.
> TypeScript galat value pe immediately error dega. Ye bugs ko **production mein jaane se rokta hai!** 🛡️

---

## 💡 Fun Tip

`interface` ko `I` se shuru mat karo (`IStudent`) — ye purani C# style hai. Modern TypeScript mein sirf `Student` likhte hain. Clean code = professional code!

---

## ❓ Think About It

Ek chatbot app mein message ke `sender` ke liye `string` use karo ya `"user" | "ai"` union type? Kya trade-off hai? Flexibility vs safety?
