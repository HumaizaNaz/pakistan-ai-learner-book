# Chapter 5: TypeScript — Safe JavaScript! 🛡️

**Week 3 | Builders Track**

---

## 📖 Story Scene

Zara was building a big project. Suddenly an error appeared — a function needed a number, but she had sent a string. The program crashed.

"NOVA, it took me an hour to find this bug! Is there a better way?"

"Yes," NOVA said. "**TypeScript**. It's JavaScript's big brother. It tells you where the mistake is before you even run the code."

"You mean before the bug happens?"

"Exactly. It's called type safety. Learn it today and save yourself an hour tomorrow!"

---

## ✨ Magic Spell #5 — TypeScript Basics

**TypeScript = JavaScript + Types**

```typescript
// JavaScript — no type checking
function add(a, b) {
  return a + b;
}
add(5, "10"); // "510" — bug! String concatenation happened

// TypeScript — define types
function add(a: number, b: number): number {
  return a + b;
}
add(5, "10"); // ERROR before running! TypeScript catches it
```

---

**Basic Types:**
```typescript
// Primitive types
let name: string = "Zara";
let age: number = 13;
let isStudent: boolean = true;

// Array types
let fruits: string[] = ["mango", "banana"];
let scores: number[] = [95, 87, 92];

// Object type (interface)
interface Student {
  name: string;
  age: number;
  grade: string;
  isActive: boolean;
}

const zara: Student = {
  name: "Zara",
  age: 13,
  grade: "7th",
  isActive: true,
};
```

---

**Function with types:**
```typescript
// Define parameter and return types
function greetStudent(name: string, grade: string): string {
  return `Hello ${name} from ${grade}!`;
}

// Optional parameter (add ?)
function createCard(name: string, hobby?: string): string {
  return hobby
    ? `${name} loves ${hobby}`
    : `${name}`;
}
```

---

**TypeScript Install and Run:**
```bash
# Install
npm install -g typescript

# Create a .ts file
# Compile it
tsc myfile.ts

# Or run directly
npx ts-node myfile.ts
```

---

## 🔥 Try It Yourself

Write this TypeScript code and watch for errors:

```typescript
interface Product {
  name: string;
  price: number;
  inStock: boolean;
}

function showProduct(product: Product): string {
  return `${product.name} — Rs. ${product.price}`;
}

// This will work:
const biryani: Product = { name: "Biryani", price: 250, inStock: true };
console.log(showProduct(biryani));

// This will give an error — try it:
const curry = { name: "Curry", price: "200", inStock: true }; // price is a string!
```

---

## 🤯 Wow Moment

> TypeScript was created by Microsoft in 2012. Today **90% of professional web projects** use TypeScript.
> Google, Facebook, Airbnb — all on TypeScript.
> You just learned the language that powers most of the modern internet! 🚀

---

## 💡 Fun Tip

VS Code understands TypeScript automatically — when a type is wrong, a red underline appears **in real time**, even before you save! This is your first AI coding assistant!

---

## ❓ Think About It

TypeScript requires a little extra typing — you have to write `name: string`. Is it worth it? When would TypeScript be helpful and when would it be overkill? What's the difference between small and large projects?
