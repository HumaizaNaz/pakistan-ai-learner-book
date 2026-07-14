# Chapter 6: TypeScript — Types and Interfaces Properly 🔷

**Week 3 | Builders Track**

---

## 📖 Story Scene

"NOVA, yesterday I got an interesting error in my TypeScript file. I saw `string | number` — what was that?"

"Ah," NOVA said. "Union types! In TypeScript, a variable can be one of two or more types. Let's learn advanced types — this is what gives TypeScript its real superpower."

---

## ✨ Magic Spell #6 — Advanced TypeScript Types

**Union Types — one or the other:**
```typescript
let id: string | number = "abc123";
id = 42; // both are valid!

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
  breed: string; // all Animal properties + this one
}

// Type alias — flexible
type ID = string | number;
type Callback = (data: string) => void;
```

---

**Generic Types — flexible types:**
```typescript
// Return the first element of any type of array
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const first = getFirst([1, 2, 3]);        // type: number
const firstName = getFirst(["a", "b"]);   // type: string
// TypeScript automatically figures out the type!
```

---

**Real Project Example — Chat Message:**
```typescript
interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";  // only these two are valid
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

Build a type-safe system for your school:

```typescript
interface Subject {
  name: string;
  teacher: string;
  marks: number;
  grade: "A+" | "A" | "B" | "C" | "D" | "F"; // only these grades are valid
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

// Test it:
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

> `"user" | "ai"` — this is a **literal union type**!
> It means that variable can only hold those two exact strings — nothing else.
> TypeScript will immediately error on a wrong value. This **stops bugs from reaching production!** 🛡️

---

## 💡 Fun Tip

Don't prefix `interface` with `I` (like `IStudent`) — that's old C# style. Modern TypeScript just writes `Student`. Clean code = professional code!

---

## ❓ Think About It

For a message's `sender` in a chatbot app — use `string` or the `"user" | "ai"` union type? What's the trade-off? Flexibility vs safety?
