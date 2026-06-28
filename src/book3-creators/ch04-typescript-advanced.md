# Chapter 4: TypeScript Advanced — Generics aur Utility Types 🔷

**Week 2 | Creators Track**

---

## 📖 Story Scene

"NOVA, mujhe ek function chahiye jo kisi bhi type ke array ka first element return kare."

"Generics," NOVA ne seedha kaha.

"Phir ek type chahiye jo kisi bhi interface ke sab fields optional banaye."

"Utility types."

"Ye sab TypeScript mein hai?"

"Haan. Aur ye seekhne ke baad tumhara code 10x cleaner hoga!"

---

## ✨ Magic Spell #4 — Advanced TypeScript

**Generics — Flexible Type-Safe Code:**

```typescript
// Bina generic
function getFirstNumber(arr: number[]): number { return arr[0]; }
function getFirstString(arr: string[]): string { return arr[0]; }
// Duplicate!

// Generic ke saath — ek function, koi bhi type
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
const name = getProperty(user, "name"); // TypeScript jaanta hai ye string hai!
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

// Partial — sab optional
type UpdateUser = Partial<User>;
// { id?: number; name?: string; email?: string; password?: string }

// Required — sab required
type StrictUser = Required<User>;

// Pick — sirf kuch fields
type PublicUser = Pick<User, "id" | "name" | "email">;
// { id: number; name: string; email: string }
// (password nahi — secure!)

// Omit — kuch fields hata do
type UserWithoutPassword = Omit<User, "password">;

// Readonly — change nahi ho sakta
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
    pet.meow(); // TypeScript jaanta hai ye Cat hai
  } else {
    pet.bark(); // TypeScript jaanta hai ye Dog hai
  }
}
```

---

**Mapped Types:**

```typescript
// Har property ko optional aur nullable banao
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

API response ke liye generic wrapper type banao:

```typescript
interface ApiResponse<T> {
  data: T;
  success: boolean;
  error: string | null;
  timestamp: string;
}

// Use karo:
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

> TypeScript Utility Types — ye built-in hain, koi library nahi!
> `Partial<T>`, `Pick<T,K>`, `Omit<T,K>`, `Readonly<T>`, `Record<K,V>` — ye sab free mein milte hain.
> Large codebases mein ye types **hundreds of bugs** prevent karte hain! 🛡️

---

## 💡 Fun Tip

`Omit<User, "password">` — API responses mein hamesha sensitive fields omit karo. TypeScript tumhe force karta hai sochne par ke kya expose karna chahiye. Security by design!

---

## ❓ Think About It

Generic `<T>` ka naam `T` kyun hota hai? Convention hai ya required? Kya `<Data>` ya `<ItemType>` bhi chalega? Kab descriptive names zyada helpful hain?
