# Chapter 1: HTML + CSS — Depth Mein 🏗️

**Week 1 | Builders Track**

---

## 📖 Story Scene

Zara ne apni purani website kholi. Ek saal pehle kitni proud thi is par!

"NOVA, ye website... acha hai. Lekin kuch missing hai."

NOVA: "Tum grow kar gayi ho Zara. Ab tumhe zyada dikhta hai. Chalo is website ko properly rebuild karte hain — is baar alag tarah."

"Kaise alag?"

"Is baar **semantic HTML** use karenge. CSS organize karenge properly. Mobile par bhi theek dikhegi. Professional level!"

---

## ✨ Magic Spell #1 — Semantic HTML

**Semantic = Meaning wali HTML**

```html
<!-- Bad — koi meaning nahi -->
<div class="header">...</div>
<div class="nav">...</div>
<div class="main-content">...</div>

<!-- Good — meaning clear hai -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<article>...</article>
<footer>...</footer>
```

**Semantic tags kyun zaroori hain:**
- Google inhe samajhta hai → better search ranking
- Screen readers inhe sahi padhte hain → accessibility
- Code zyada readable hota hai

---

**Proper Page Structure:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <h1>Main Heading</h1>
    </section>

    <section class="content">
      <article>
        <h2>Article Title</h2>
        <p>Content...</p>
      </article>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Meri Website</p>
  </footer>

</body>
</html>
```

---

**CSS Variables — Ek jagah se sab badlo:**
```css
:root {
  --primary: #6c63ff;
  --secondary: #fd79a8;
  --bg: #f0f4ff;
  --text: #2d2d2d;
  --radius: 12px;
}

/* Ab ye variables use karo */
.card {
  background: var(--primary);
  border-radius: var(--radius);
  color: white;
}

/* Ek jagah change karo — poori website badal jaaye! */
```

---

## 🔥 Try It Yourself

Apni old website ko semantic HTML se rebuild karo:
1. Sab `<div>` ko replace karo with `<header>`, `<nav>`, `<main>`, `<footer>`
2. CSS variables add karo `:root` mein
3. Chrome DevTools (F12) se check karo — errors?

---

## 🤯 Wow Moment

> `<meta name="viewport" content="width=device-width">` — ye ek line
> tumhari website ko **mobile-friendly** banati hai!
> Iske bina website phone par zoom out dikhti hai. Ek line — bada fark! 📱

---

## 💡 Fun Tip

CSS mein `*` selector sab elements ko target karta hai:
```css
* { box-sizing: border-box; margin: 0; padding: 0; }
```
Ye "CSS Reset" hai — har professional codebase mein ye hota hai!

---

## ❓ Think About It

`<article>` vs `<div>` — dono ek jaisa dikhta hai screen par. Toh fark kya hai? Kya sirf dikhna matter karta hai ya meaning bhi?
