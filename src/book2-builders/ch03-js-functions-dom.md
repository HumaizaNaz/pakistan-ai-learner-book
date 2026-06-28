# Chapter 3: JavaScript — Functions, Events, DOM 🔧

**Week 2 | Builders Track**

---

## 📖 Story Scene

"NOVA, Book 1 mein Maine JavaScript mein sirf button click kiya tha. Lekin ye toh bohot basic hai. Real websites mein JavaScript kya karta hai?"

"Bohat kuch," NOVA ne kaha. "Lekin sabse important 3 cheezein hain: **Functions** properly samajhna, **Events** handle karna, aur **DOM** manipulate karna."

"DOM kya hai?" Zara ne poochha.

"Document Object Model. Ye basically HTML ka JavaScript version hai — tumhara poora webpage ek object ban jaata hai jise JavaScript control kar sakti hai."

---

## ✨ Magic Spell #3 — Functions Properly

```javascript
// Basic function
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Zara")); // "Hello, Zara!"

// Arrow function (modern style)
const greet = (name) => {
  return "Hello, " + name + "!";
}

// Short arrow function (ek line)
const greet = (name) => "Hello, " + name + "!";

// Ye teeno same kaam karte hain!
```

---

**DOM — HTML ko JavaScript se control karo:**

```javascript
// Element dhundho
const heading = document.querySelector("h1");
const btn = document.getElementById("myBtn");
const allCards = document.querySelectorAll(".card");

// Content badlo
heading.textContent = "Naya Heading!";
heading.innerHTML = "<em>Italic Heading!</em>";

// Style badlo
heading.style.color = "purple";
heading.style.fontSize = "48px";

// Class add/remove karo
heading.classList.add("active");
heading.classList.remove("active");
heading.classList.toggle("active"); // add if not there, remove if there

// Naya element banao
const newPara = document.createElement("p");
newPara.textContent = "Naya paragraph!";
document.body.appendChild(newPara);
```

---

**Events — User actions handle karo:**

```javascript
const btn = document.getElementById("myBtn");

// Click event
btn.addEventListener("click", function() {
  alert("Button click hua!");
});

// Input event — jab user kuch type kare
const input = document.getElementById("myInput");
input.addEventListener("input", function() {
  console.log("User ne likha:", input.value);
});

// Real example — Live character counter:
input.addEventListener("input", function() {
  const count = document.getElementById("charCount");
  count.textContent = input.value.length + " characters";
});
```

---

## 🔥 Try It Yourself

**Dark Mode Toggle banana:**

```html
<button id="themeBtn">🌙 Dark Mode</button>

<style>
  body { background: white; color: black; transition: 0.3s; }
  body.dark { background: #1a1a2e; color: white; }
</style>

<script>
  const btn = document.getElementById("themeBtn");
  btn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    btn.textContent = document.body.classList.contains("dark")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });
</script>
```

---

## 🤯 Wow Moment

> `document.querySelector` — ye ek function hai jo poori duniya ki har website use karti hai.
> Instagram, Twitter, Google — sab ke sab isi se HTML elements ko JavaScript se control karte hain.
> Ye fundamental skill hai! 🌍

---

## 💡 Fun Tip

`console.log()` tumhara best friend hai debugging mein! Koi bhi variable print karo aur F12 → Console mein dekho. Professional developers din bhar ye use karte hain.

---

## ❓ Think About It

`addEventListener` vs `onclick` — dono click handle karte hain. Lekin `addEventListener` zyada powerful kyun hai? Ek element par kitne `addEventListener` laga sakte ho?
