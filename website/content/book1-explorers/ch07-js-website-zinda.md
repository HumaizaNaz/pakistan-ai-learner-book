# Chapter 7: JavaScript — Website ko Zinda Karo! ⚡

**Week 4 | Explorers Track**

---

## 📖 Story Scene

Zara ki website ab khoobsurat thi. Lekin kuch missing tha.

"NOVA, ye website sirf dekhi jaati hai. Kuch karna chahiye — button click hone par kuch ho, message aaye, kuch badle!"

NOVA ne kaha: "Ab time hai **JavaScript** ka!"

"HTML = ghar ki deewarein.
CSS = rang aur decoration.
JavaScript = **bijli**. Issi se website zinda hoti hai!"

Zara ne pehla JavaScript likha. Button dabaaya.

Screen par message aaya.

**"YAAR YE TOH SACH MEIN JAADU HAI!"** — Zara

---

## ✨ Magic Spell #7 — Pehla JavaScript

```html
<!DOCTYPE html>
<html>
<head>
  <title>Meri Zinda Website</title>
  <style>
    button {
      background-color: #6c63ff;
      color: white;
      padding: 12px 28px;
      border: none;
      border-radius: 8px;
      font-size: 18px;
      cursor: pointer;
    }
    button:hover {
      background-color: #5a52e0;
    }
    #message {
      font-size: 24px;
      color: #00b894;
      margin-top: 20px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>Meri Interactive Website</h1>
  <button onclick="greet()">Click Karo!</button>
  <p id="message"></p>

  <script>
    function greet() {
      document.getElementById("message").innerText = "🎉 Maine JavaScript use ki!";
    }
  </script>
</body>
</html>
```

**Kya ho raha hai step by step:**
1. Button click hota hai → `greet()` function call hoti hai
2. `document.getElementById("message")` → HTML mein `id="message"` wala element dhundho
3. `.innerText = "..."` → Us element ka text badal do

---

## 🔥 Try It Yourself

**Counter App banao:**

```html
<h1>Counter: <span id="count">0</span></h1>
<button onclick="addOne()">+1 Karo</button>
<button onclick="reset()">Reset</button>

<script>
  let number = 0;

  function addOne() {
    number = number + 1;
    document.getElementById("count").innerText = number;
  }

  function reset() {
    number = 0;
    document.getElementById("count").innerText = number;
  }
</script>
```

**Extra Challenge:** Minus button bhi add karo — `number - 1`!

---

## 🤯 Wow Moment

> Ye JavaScript jo tumne abhi likhi — ye wahi language hai jisme **Gmail, Google Maps, Netflix, Instagram** sab bane hain.
> Ek language. Poori duniya ka internet.
> Aur tum ne aaj isay chhuwa! 🌍

---

## 💡 Fun Tip

`onclick` sirf buttons ke liye nahi — **kisi bhi HTML element** par laga sakte ho!
```html
<img onclick="alert('Picture click ki!')" src="...">
<p onclick="changeColor()">Is text par click karo!</p>
```
Koi bhi cheez clickable ban sakti hai!

---

## ❓ Think About It

JavaScript ke bina internet kaisi lagti? YouTube ke play/pause button, Google Maps ka zoom — sab JavaScript hai. List banao — 5 cheezein jo JavaScript ke bina kaam nahi karte!
