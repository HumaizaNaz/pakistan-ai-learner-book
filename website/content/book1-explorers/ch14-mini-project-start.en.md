# Chapter 14: Mini Project — "My Dream" Webpage 🌟

**Week 7 | Explorers Track**

---

## 📖 Story Scene

"Zara, what are you going to build for your final project?" Miss Ayesha asked.

Zara thought about it. She had learned HTML, CSS, JavaScript, prompting. Now she needed to build something that was **truly hers**.

"I'm going to build my 'Dream Webpage'," Zara said. "It'll have my dream — what I want to become, how I want to change the world, everything about me."

Miss Ayesha smiled. "Perfect."

NOVA showed a smiley on screen. "Best idea ever. Let's plan it!"

---

## ✨ Magic Spell #14 — Project Planning

Before starting any project, **make a plan** — otherwise you'll get confused!

**Project Plan Template:**
```
PROJECT NAME: _______________

TOPIC: _______________

PAGES:
[ ] index.html    → Home (introduction)
[ ] about.html    → About Me
[ ] dream.html    → My Dream

COLOUR THEME: _______________

FEATURES:
[ ] Navigation (links between pages)
[ ] My photo / avatar
[ ] Interesting content (get Claude to help!)
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
my-dream/
├── index.html      ← Home page (build this first)
├── about.html      ← About Me
├── dream.html      ← My Dream
├── style.css       ← CSS for the whole site (one file!)
└── images/         ← Your pictures (optional)
```

---

**index.html — Start here:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Your Name]'s Dream</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="navbar">
    <span class="logo">✨ [Your Name]</span>
    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="about.html">About Me</a>
      <a href="dream.html">My Dream</a>
    </div>
  </nav>

  <main class="hero">
    <h1>Hello! 👋</h1>
    <p>I'm [Name] — this is my world.</p>
    <a href="about.html" class="btn">Learn about me</a>
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

**Today's tasks:**
1. Create a `my-dream` folder
2. Create `index.html` using the code above
3. Create `style.css`
4. Open it in Chrome — what do you see?
5. Ask Claude to write content for your hero section!

---

## 🤯 Wow Moment

> In just 7 chapters you've learned:
> Internet → HTML → CSS → JavaScript → AI → Prompting → Project Planning
>
> **This is a journey most people never even start. You're about to finish it!** ⭐

---

## 💡 Fun Tip

Stuck? Ask Claude:
`"This is my code: [paste code]. What's wrong? Fix it and explain."`
AI is your instant debugging partner!

---

## ❓ Think About It

What is your dream? Honestly. You're going to write it on your `dream.html` page — the whole world could see it. Are you ready to share your dream?
