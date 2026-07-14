# Chapter 2: CSS Flexbox + Grid — Everything in Its Place! 📐

**Week 1 | Builders Track**

---

## 📖 Story Scene

"NOVA, I want these cards to sit side by side. But they keep stacking on top of each other!"

"That's a classic problem," NOVA said. "In Book 1 we only did basic layout. Now we learn **Flexbox** and **Grid** — these are CSS superpowers!"

Zara added flex. The cards lined up side by side.

"THAT... WAS SO EASY?!" — Zara

---

## ✨ Magic Spell #2 — Flexbox

Flexbox = layout in one dimension (row or column)

```css
.container {
  display: flex;

  /* Direction */
  flex-direction: row;        /* left to right (default) */
  /* flex-direction: column; */ /* top to bottom */

  /* Alignment — horizontal */
  justify-content: center;      /* center */
  /* justify-content: space-between; */ /* equal spacing */
  /* justify-content: flex-end; */      /* push to end */

  /* Alignment — vertical */
  align-items: center;          /* vertically centered */

  /* Wrap — move to next line if no space */
  flex-wrap: wrap;
  gap: 16px;                    /* space between items */
}
```

**Centering anything — the magic combo:**
```css
.center-me {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

---

## ✨ Magic Spell #2b — CSS Grid

Grid = layout in two dimensions (rows + columns)

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  gap: 24px;
}

/* Responsive — fewer columns on smaller screens */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
```

---

**Cards Layout — Full Example:**
```html
<style>
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
    padding: 32px;
  }
  .card {
    background: white;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
</style>

<div class="cards-grid">
  <div class="card"><h3>Card 1</h3><p>Content</p></div>
  <div class="card"><h3>Card 2</h3><p>Content</p></div>
  <div class="card"><h3>Card 3</h3><p>Content</p></div>
</div>
```

`auto-fit, minmax(250px, 1fr)` — this one line automatically creates a responsive grid! Columns reduce as the screen gets smaller.

---

## 🔥 Try It Yourself

1. Create a `div.container`
2. Put 4 coloured cards inside it
3. Add `display: flex; flex-wrap: wrap; gap: 16px;`
4. Resize your browser window — do the cards wrap?
5. Now try `display: grid; grid-template-columns: repeat(2, 1fr);`

---

## 🤯 Wow Moment

> `repeat(auto-fit, minmax(250px, 1fr))` — just one line!
> And your layout automatically looks right on phones, tablets, and computers.
> **You just learned responsive design — a skill freelancers earn lakhs with!** 💰

---

## 💡 Fun Tip

**Flexbox** = one direction (like a drawer — side by side or top to bottom)
**Grid** = both directions (like a chessboard — rows and columns)
Both have their uses — neither is wrong!

---

## ❓ Think About It

Instagram's gallery, YouTube's video list, Amazon's products — which CSS layout would they use? Flex or Grid? Check with DevTools!
