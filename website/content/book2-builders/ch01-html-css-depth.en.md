# Chapter 1: HTML + CSS — Going Deeper 🏗️

**Week 1 | Builders Track**

---

## 📖 Story Scene

Zara opened her old website. She had been so proud of it a year ago!

"NOVA, this website is... fine. But something's missing."

NOVA: "You've grown, Zara. You see more now. Let's rebuild this website properly — differently this time."

"How differently?"

"This time we'll use **semantic HTML**. We'll organise CSS properly. It'll look good on mobile too. Professional level!"

---

## ✨ Magic Spell #1 — Semantic HTML

**Semantic = HTML with meaning**

```html
<!-- Bad — no meaning -->
<div class="header">...</div>
<div class="nav">...</div>
<div class="main-content">...</div>

<!-- Good — meaning is clear -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<article>...</article>
<footer>...</footer>
```

**Why semantic tags matter:**
- Google understands them → better search ranking
- Screen readers read them correctly → accessibility
- Code becomes much more readable

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
    <p>&copy; 2026 My Website</p>
  </footer>

</body>
</html>
```

---

**CSS Variables — Change everything from one place:**
```css
:root {
  --primary: #6c63ff;
  --secondary: #fd79a8;
  --bg: #f0f4ff;
  --text: #2d2d2d;
  --radius: 12px;
}

/* Now use these variables */
.card {
  background: var(--primary);
  border-radius: var(--radius);
  color: white;
}

/* Change in one place — the whole website updates! */
```

---

## 🔥 Try It Yourself

Rebuild your old website using semantic HTML:
1. Replace all `<div>` tags with `<header>`, `<nav>`, `<main>`, `<footer>`
2. Add CSS variables inside `:root`
3. Check in Chrome DevTools (F12) — any errors?

---

## 🤯 Wow Moment

> `<meta name="viewport" content="width=device-width">` — just this one line
> makes your website **mobile-friendly**!
> Without it, your website appears zoomed out on phones. One line — huge difference! 📱

---

## 💡 Fun Tip

The `*` selector in CSS targets every element:
```css
* { box-sizing: border-box; margin: 0; padding: 0; }
```
This is the "CSS Reset" — every professional codebase starts with this!

---

## ❓ Think About It

`<article>` vs `<div>` — both look the same on screen. So what's the difference? Does only the appearance matter, or does meaning matter too?
