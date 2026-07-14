# Chapter 5: CSS — Color Your World! 🎨

**Week 3 | Explorers Track**

---

## 📖 Story Scene

Zara's website was ready. But looking at it didn't make her happy.

"NOVA, this is so boring. Everything is plain white and black."

NOVA smiled. "HTML builds the house — bare walls. Bring in CSS — paint it, add furniture, put up curtains!"

"CSS?" Zara asked.

"**Cascading Style Sheets**. But forget the name — just think: CSS is the magic that makes a website beautiful."

Zara opened the file... and for the first time wrote CSS. Saved it. Reloaded.

Colour appeared on screen.

"OH WOW THIS IS ACTUAL MAGIC!" — Zara

---

## ✨ Magic Spell #5 — CSS: First Lesson

Add CSS inside `<head>` in your HTML file:

```html
<head>
  <title>Zara's Colourful Website</title>
  <style>

    body {
      background-color: #f0f4ff;
      font-family: Arial, sans-serif;
    }

    h1 {
      color: #6c63ff;
      font-size: 36px;
    }

    p {
      color: #2d2d2d;
      font-size: 18px;
    }

  </style>
</head>
```

**The CSS formula:**
```
selector {
  property: value;
}
```

Meaning: **"what"** to style → **"what to do"** → **"how much/what kind"**

---

**Common Colors — Hex Codes:**

| Color | Code | How it looks |
|-------|------|-------------|
| Purple | `#6c63ff` | Magical! |
| Pink | `#fd79a8` | Cute! |
| Green | `#00b894` | Fresh! |
| Blue | `#0984e3` | Trustworthy! |
| Orange | `#e17055` | Energetic! |
| Dark | `#2d3436` | Professional |

---

## 🔥 Try It Yourself

Add this CSS to your website — then keep changing the colours until you find your favourite colour scheme:

```html
<style>
  body {
    background-color: #ffeaa7;
    font-family: Georgia, serif;
  }
  h1 {
    color: #6c63ff;
    font-size: 42px;
  }
  p {
    color: #2d2d2d;
    font-size: 20px;
    line-height: 1.6;
  }
</style>
```

**Extra Challenge:** Add `text-align: center;` to `h1` — what happens?

---

## 🤯 Wow Moment

> CSS can produce **more than 16 million colours!**
> Every colour has a secret code — like `#ff0000` is red.
> It uses `#RRGGBB` format — mixing Red, Green, Blue!
> `#ff0000` = full red, zero green, zero blue = pure red 🔴

---

## 💡 Fun Tip

**Search "color picker" on Google** — you'll get Google's built-in colour picker! Choose any colour and copy its hex code. No guessing needed!

---

## ❓ Think About It

Why does a website's colour scheme matter? Think — why do a hospital's website and a gaming website have completely different colours? Colours affect psychology — what feeling does each colour give you?
