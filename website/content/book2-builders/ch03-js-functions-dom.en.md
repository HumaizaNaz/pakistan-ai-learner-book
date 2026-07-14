# Chapter 3: JavaScript — Functions, Events, DOM 🔧

**Week 2 | Builders Track**

---

## 📖 Story Scene

"NOVA, in Book 1 I only made a button click with JavaScript. But that's so basic. What does JavaScript actually do on real websites?"

"Quite a lot," NOVA said. "But the three most important things are: understanding **Functions** properly, handling **Events**, and manipulating the **DOM**."

"What's the DOM?" Zara asked.

"Document Object Model. Basically it's the JavaScript version of HTML — your entire webpage becomes an object that JavaScript can control."

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

// Short arrow function (one line)
const greet = (name) => "Hello, " + name + "!";

// All three do exactly the same thing!
```

---

**DOM — Control HTML with JavaScript:**

```javascript
// Find elements
const heading = document.querySelector("h1");
const btn = document.getElementById("myBtn");
const allCards = document.querySelectorAll(".card");

// Change content
heading.textContent = "New Heading!";
heading.innerHTML = "<em>Italic Heading!</em>";

// Change styles
heading.style.color = "purple";
heading.style.fontSize = "48px";

// Add/remove classes
heading.classList.add("active");
heading.classList.remove("active");
heading.classList.toggle("active"); // add if absent, remove if present

// Create a new element
const newPara = document.createElement("p");
newPara.textContent = "New paragraph!";
document.body.appendChild(newPara);
```

---

**Events — Handle user actions:**

```javascript
const btn = document.getElementById("myBtn");

// Click event
btn.addEventListener("click", function() {
  alert("Button was clicked!");
});

// Input event — when user types something
const input = document.getElementById("myInput");
input.addEventListener("input", function() {
  console.log("User typed:", input.value);
});

// Real example — Live character counter:
input.addEventListener("input", function() {
  const count = document.getElementById("charCount");
  count.textContent = input.value.length + " characters";
});
```

---

## 🔥 Try It Yourself

**Build a Dark Mode Toggle:**

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

> `document.querySelector` — this is one function used by every single website in the world.
> Instagram, Twitter, Google — they all use this to control HTML elements with JavaScript.
> This is a fundamental skill! 🌍

---

## 💡 Fun Tip

`console.log()` is your best friend when debugging! Print any variable and check it in F12 → Console. Professional developers use this all day long.

---

## ❓ Think About It

`addEventListener` vs `onclick` — both handle clicks. But why is `addEventListener` more powerful? How many `addEventListener` calls can you attach to a single element?
