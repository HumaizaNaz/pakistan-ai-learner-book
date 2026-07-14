# Chapter 14: Mini Project — "Mera Sapna" Webpage 🌟

**Week 7 | Explorers Track**

---

## 📖 Story Scene

"Zara, final project mein tum kya banao gi?" Miss Ayesha ne poochha.

Zara ne socha. Usne HTML seekhi, CSS seekhi, JavaScript seekhi, prompting seekhi. Ab ek cheez banana hai jo **uski apni** ho.

"Main apna 'Dream Webpage' banaungi," Zara ne kaha. "Jisme mera sapna ho — main kya banna chahti hoon, kaise duniya change karna chahti hoon, mere baare mein sab kuch."

Miss Ayesha muskurai. "Perfect."

NOVA ne screen par smiley dikhaya. "Best idea ever. Chalo plan banate hain!"

---

## ✨ Magic Spell #14 — Project Planning

Koi bhi project shuru karne se pehle **plan banao** — warna confuse ho jaoge!

**Project Plan Template:**
```
PROJECT NAAM: _______________

TOPIC: _______________

PAGES:
[ ] index.html    → Home (introduction)
[ ] about.html    → Mere baare mein
[ ] sapna.html    → Mera sapna

COLOR THEME: _______________

FEATURES:
[ ] Navigation (links between pages)
[ ] My photo / avatar
[ ] Interesting content (Claude se banwao!)
[ ] One interactive element (button/animation)
[ ] Beautiful CSS design

TOOLS:
[ ] HTML for structure
[ ] CSS for design  
[ ] JavaScript for one fun thing
[ ] Claude for content help
```

---

**Folder Structure:**
```
mera-sapna/
├── index.html      ← Home page (pehle ye banao)
├── about.html      ← About Me
├── sapna.html      ← Mera Sapna
├── style.css       ← Poori website ki CSS (ek file mein!)
└── images/         ← Tumhari pictures (optional)
```

---

**index.html — Start karo isse:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Tumhara Naam] ka Sapna</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="navbar">
    <span class="logo">✨ [Tumhara Naam]</span>
    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="about.html">About Me</a>
      <a href="sapna.html">Mera Sapna</a>
    </div>
  </nav>

  <main class="hero">
    <h1>Assalamu Alaikum! 👋</h1>
    <p>Main [Naam] hoon — ye meri duniya hai.</p>
    <a href="about.html" class="btn">Mere baare mein janno</a>
  </main>
</body>
</html>
```

**style.css — Basic styles:**
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f0f4ff;
  color: #2d2d2d;
}

.navbar {
  background: #6c63ff;
  color: white;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar .logo { font-size: 20px; font-weight: bold; }
.nav-links a {
  color: white;
  text-decoration: none;
  margin-left: 24px;
  font-size: 16px;
}

.hero {
  text-align: center;
  padding: 80px 20px;
}

.hero h1 { font-size: 48px; color: #6c63ff; margin-bottom: 16px; }
.hero p { font-size: 20px; color: #555; margin-bottom: 32px; }

.btn {
  background: #6c63ff;
  color: white;
  padding: 14px 32px;
  border-radius: 30px;
  text-decoration: none;
  font-size: 18px;
}
```

---

## 🔥 Try It Yourself

**Aaj ka kaam:**
1. `mera-sapna` folder banao
2. `index.html` banao upar wale code se
3. `style.css` banao
4. Chrome mein open karo — kya dikhta hai?
5. Claude se apna hero section ka content banwao!

---

## 🤯 Wow Moment

> Tum sirf 7 chapters mein itna seekh gaye:
> Internet → HTML → CSS → JavaScript → AI → Prompting → Project Planning
>
> **Ye journey jyadatar log kabhi shuru nahi karte. Tum khatam karne wale ho!** ⭐

---

## 💡 Fun Tip

Stuck ho gaye? Claude se poochho:
`"Ye mera code hai: [code paste karo]. Kya problem hai? Fix karo aur explain karo."`
AI ek instant debugging partner hai!

---

## ❓ Think About It

Tumhara dream kya hai? Sach mein. Apni `sapna.html` page mein woh likhoge — duniya dekh sakti hai. Kya tum ready ho apna sapna share karne ke liye?
