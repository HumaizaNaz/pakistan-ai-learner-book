# Chapter 4: TypeScript Advanced — Generics and Utility Types 🔷

**Week 2 | Creators Track**

---

## 📖 Story Scene

"NOVA, I need a function that returns the first element of any type of array."

"Generics," NOVA said directly.

"Then I need a type that makes all fields of any interface optional."

"Utility types."

"Is all of that in TypeScript?"

"Yes. And once you learn this, your code will be 10x cleaner!"

---

## ✨ Magic Spell #4 — Advanced TypeScript

**Generics — Flexible Type-Safe Code:**

```typescript
// Without generics
function getFirstNumber(arr: number[]): number { return arr[0]; }
function getFirstString(arr: string[]): string { return arr[0]; }
// Duplicate!

// With generics — one function, any type
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const num = getFirst([1, 2, 3]);       // type: number
const str = getFirst(["a", "b", "c"]); // type: string
const obj = getFirst([{id: 1}]);        // type: {id: number}

// Generic with constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = { name: "Zara", age: 15 };
const name = getProperty(user, "name"); // TypeScript knows this is a string!
```

---

**Utility Types — Built-in Type Transformations:**

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Partial — all optional
type UpdateUser = Partial<User>;
// { id?: number; name?: string; email?: string; password?: string }

// Required — all required
type StrictUser = Required<User>;

// Pick — only some fields
type PublicUser = Pick<User, "id" | "name" | "email">;
// { id: number; name: string; email: string }
// (no password — secure!)

// Omit — remove some fields
type UserWithoutPassword = Omit<User, "password">;

// Readonly — cannot be changed
type FrozenUser = Readonly<User>;
```

---

**Type Guards:**

```typescript
interface Cat { type: "cat"; meow: () => void; }
interface Dog { type: "dog"; bark: () => void; }
type Pet = Cat | Dog;

function makeSound(pet: Pet) {
  if (pet.type === "cat") {
    pet.meow(); // TypeScript knows this is a Cat
  } else {
    pet.bark(); // TypeScript knows this is a Dog
  }
}
```

---

**Mapped Types:**

```typescript
// Make every property optional and nullable
type Nullable<T> = { [K in keyof T]: T[K] | null };

const user: Nullable<User> = {
  id: null,  // allowed!
  name: "Zara",
  email: null,
  password: null
};
```

---

## 🔥 Try It Yourself

Build a generic wrapper type for API responses:

```typescript
interface ApiResponse<T> {
  data: T;
  success: boolean;
  error: string | null;
  timestamp: string;
}

// Use it:
type UsersResponse = ApiResponse<User[]>;
type SingleUserResponse = ApiResponse<User>;
type MessageResponse = ApiResponse<{ message: string }>;

// Generic function:
async function apiCall<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(url);
    const data: T = await res.json();
    return { data, success: true, error: null, timestamp: new Date().toISOString() };
  } catch (e) {
    return { data: null as T, success: false, error: String(e), timestamp: new Date().toISOString() };
  }
}
```

---

## 🤯 Wow Moment

> TypeScript Utility Types — these are built-in, no library needed!
> `Partial<T>`, `Pick<T,K>`, `Omit<T,K>`, `Readonly<T>`, `Record<K,V>` — all free.
> In large codebases these types **prevent hundreds of bugs!** 🛡️

---

## 💡 Fun Tip

`Omit<User, "password">` — always omit sensitive fields from API responses. TypeScript forces you to think about what you should expose. Security by design!

---

## ❓ Think About It

Why is the generic named `<T>`? Is it a convention or required? Would `<Data>` or `<ItemType>` work too? When are descriptive names more helpful?
