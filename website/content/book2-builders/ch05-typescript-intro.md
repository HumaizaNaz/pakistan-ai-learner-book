# Chapter 5: TypeScript — Safe JavaScript! 🛡️

**Week 3 | Builders Track**

---

## 📖 Story Scene

Zara ek bada project bana rahi thi. Achanak ek error aaya — ek function ko number chahiye tha, usne string bhej di. Program crash ho gaya.

"NOVA, ye bug dhundne mein mujhe 1 ghanta lag gaya! Koi better tarika hai?"

"Haan," NOVA ne kaha. "**TypeScript**. Ye JavaScript ka big brother hai. Code likhne se pehle hi batata hai ke galti kahan hai."

"Matlab bug hone se pehle?"

"Exactly. Type safety kehte hain ise. Aaj seekhoge toh kal ka 1 ghanta bachao ge!"

---

## ✨ Magic Spell #5 — TypeScript Basics

**TypeScript = JavaScript + Types**

```typescript
// JavaScript — koi type check nahi
function add(a, b) {
  return a + b;
}
add(5, "10"); // "510" — bug! String concatenation hua

// TypeScript — types define karo
function add(a: number, b: number): number {
  return a + b;
}
add(5, "10"); // ERROR before running! TypeScript pakad leta hai
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
// Parameters aur return type define karo
function greetStudent(name: string, grade: string): string {
  return `Hello ${name} from ${grade}!`;
}

// Optional parameter (? lagao)
function createCard(name: string, hobby?: string): string {
  return hobby
    ? `${name} loves ${hobby}`
    : `${name}`;
}
```

---

**TypeScript Install aur Run:**
```bash
# Install
npm install -g typescript

# .ts file banao
# Compile karo
tsc myfile.ts

# Ya seedha run karo
npx ts-node myfile.ts
```

---

## 🔥 Try It Yourself

Ye TypeScript code likhao aur errors dekho:

```typescript
interface Product {
  name: string;
  price: number;
  inStock: boolean;
}

function showProduct(product: Product): string {
  return `${product.name} — Rs. ${product.price}`;
}

// Ye kaam karega:
const biryani: Product = { name: "Biryani", price: 250, inStock: true };
console.log(showProduct(biryani));

// Ye error dega — try karo:
const curry = { name: "Curry", price: "200", inStock: true }; // price string hai!
```

---

## 🤯 Wow Moment

> TypeScript 2012 mein Microsoft ne banaya. Abhi **90% professional web projects** TypeScript use karte hain.
> Google, Facebook, Airbnb — sab TypeScript pe hain.
> Tum ne woh language seekh li jis par internet ka zyaatar modern code chalta hai! 🚀

---

## 💡 Fun Tip

VS Code TypeScript ko automatically samajhta hai — jab type galat ho, red underline aayega **real time mein**, save karne se bhi pehle! Ye your first AI coding assistant hai!

---

## ❓ Think About It

TypeScript thodi zyada typing chahta hai — `name: string` likhna padta hai. Kya ye worth it hai? Kab TypeScript helpful hoga aur kab overkill? Small projects vs large projects mein fark kya hai?
