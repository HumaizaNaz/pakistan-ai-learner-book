# Chapter 6: CSS — Boxes, Borders, aur Beautiful Layout 📦

**Week 3 | Explorers Track**

---

## 📖 Story Scene

"NOVA, main chahti hoon meri website ek khoobsurat room jaisi lage. Har cheez apni jagah pe ho. Cards hon, borders hon."

NOVA ne kaha: "CSS mein har element ek **box** hai. Ye box ka size, border, padding — sab control kar sakte ho. Isko kehte hain **Box Model**."

"Box Model?" Zara ne socha — ye interesting lagta hai.

"Ek design banate hain milke?"

Kuch minute baad — Zara ki website mein sundar cards the. Borders thin. Shadows thin. Ye kuch alag hi lag rahi thi!

---

## ✨ Magic Spell #6 — Box Model aur Cards

**CSS ka Box Model — yaad rakho ye diagram:**

```
+--------------------------------+
|           MARGIN               |  ← Bahar ki space
|  +-------------------------+   |
|  |        BORDER           |   |  ← Line/frame
|  |  +-------------------+  |   |
|  |  |      PADDING      |  |   |  ← Andar ki space
|  |  |  +-------------+  |  |   |
|  |  |  |   CONTENT   |  |  |   |  ← Actual text/image
|  |  |  +-------------+  |  |   |
|  |  +-------------------+  |   |
|  +-------------------------+   |
+--------------------------------+
```

**Sundar Card banana:**

```html
<style>
  .card {
    width: 300px;
    background-color: white;
    border: 2px solid #6c63ff;
    border-radius: 12px;
    padding: 20px;
    margin: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .card h2 {
    color: #6c63ff;
  }
</style>

<div class="card">
  <h2>Mera Card</h2>
  <p>Ye ek khoobsurat card hai!</p>
</div>
```

**Ye kya kar raha hai:**
- `border-radius: 12px` → Round corners
- `padding: 20px` → Andar se space
- `margin: 20px` → Bahar se space
- `box-shadow` → Neeche se shadow

---

## 🔥 Try It Yourself

Apna "About Me" card banao:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Mera Card</title>
  <style>
    body {
      background-color: #f0f4ff;
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      padding: 40px;
    }
    .card {
      width: 350px;
      background: white;
      border-radius: 16px;
      padding: 32px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.12);
      text-align: center;
    }
    h1 { color: #6c63ff; margin-bottom: 8px; }
    p { color: #555; margin: 8px 0; }
    .badge {
      background: #6c63ff;
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 14px;
      display: inline-block;
      margin: 4px;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>[Tumhara Naam]</h1>
    <p>Class: [tumhari class]</p>
    <p>School: [school naam]</p>
    <div>
      <span class="badge">[Hobby 1]</span>
      <span class="badge">[Hobby 2]</span>
      <span class="badge">[Hobby 3]</span>
    </div>
    <p style="margin-top: 16px;">💭 Dream: [tumhara sapna]</p>
  </div>
</body>
</html>
```

---

## 🤯 Wow Moment

> `border-radius: 50%` — ye ek line likho aur koi bhi box **perfect circle** ban jaata hai!
> Instagram, WhatsApp ke profile pictures isi trick se round hoti hain! 🔵
> Try karo: apni image par `border-radius: 50%` lagao!

---

## 💡 Fun Tip

`margin: 0 auto` kisi bhi element ko **center** mein le aata hai — ye ek magic spell hai jo har web developer use karta hai! Sirf width bhi define karni padti hai saath mein.

---

## ❓ Think About It

Facebook posts, Instagram photos, YouTube video thumbnails — in sab par "cards" hain. Sab CSS box model se bante hain. Kya tum identify kar sakte ho unka padding, border, aur margin?
