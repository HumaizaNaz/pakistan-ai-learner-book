# Chapter 2: CSS Flexbox + Grid — Sab Apni Jagah! 📐

**Week 1 | Builders Track**

---

## 📖 Story Scene

"NOVA, main chahti hoon ye cards side by side hon. Lekin wo ek ke neeche ek aa jaate hain!"

"Ye classic problem hai," NOVA ne kaha. "Book 1 mein hum ne sirf basic layout kiya. Ab **Flexbox** aur **Grid** seekhte hain — ye CSS ke superpowers hain!"

Zara ne flex add kiya. Cards side by side ho gaye.

"YE... ITNA AASAAN THA?!" — Zara

---

## ✨ Magic Spell #2 — Flexbox

Flexbox = ek dimension mein layout (row ya column)

```css
.container {
  display: flex;

  /* Direction */
  flex-direction: row;        /* left to right (default) */
  /* flex-direction: column; */ /* top to bottom */

  /* Alignment — horizontal */
  justify-content: center;      /* center mein */
  /* justify-content: space-between; */ /* equal space */
  /* justify-content: flex-end; */      /* end mein */

  /* Alignment — vertical */
  align-items: center;          /* vertically center */

  /* Wrap — next line pe jaao agar space nahi */
  flex-wrap: wrap;
  gap: 16px;                    /* items ke beech space */
}
```

**Centering kuch bhi — ye magic combo:**
```css
.center-me {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

---

## ✨ Magic Spell #2b — CSS Grid

Grid = do dimensions mein layout (rows + columns)

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  gap: 24px;
}

/* Responsive — screen chhoti ho toh columns kam ho jaayein */
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

`auto-fit, minmax(250px, 1fr)` — ye ek line automatically responsive grid banati hai! Screen chhoti hogi toh columns automatically kam honge.

---

## 🔥 Try It Yourself

1. Ek `div.container` banao
2. Usme 4 colored cards rakho
3. `display: flex; flex-wrap: wrap; gap: 16px;` add karo
4. Browser window resize karo — kya cards wrap hote hain?
5. Ab `display: grid; grid-template-columns: repeat(2, 1fr);` try karo

---

## 🤯 Wow Moment

> `repeat(auto-fit, minmax(250px, 1fr))` — ye ek line!
> Aur tumhara layout automatically phones, tablets, computers par sahi dikhega.
> **Responsive design seekh li tum ne — ye skill freelancers lakhon mein kamaate hain!** 💰

---

## 💡 Fun Tip

**Flexbox** = ek direction (jaise drawer — side by side ya upar neeche)
**Grid** = dono directions (jaise chess board — rows aur columns)
Dono ki zaroorat hoti hai — galat nahi koi!

---

## ❓ Think About It

Instagram ki gallery, YouTube ki video list, Amazon ki products — kaunsa CSS layout use hoga? Flex ya Grid? DevTools se check karo!
