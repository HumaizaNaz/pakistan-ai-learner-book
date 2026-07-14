# Chapter 4: HTML — Images aur Links 🖼️🔗

**Week 2 | Explorers Track**

---

## 📖 Story Scene

Zara khush thi. Usne apni pehli website bana li thi!

Lekin ek masla tha. "NOVA, ye sirf text hai. Koi picture nahi, koi link nahi. Ye boring lagti hai!"

NOVA ne kaha: "Toh aaj hum website mein jaan dalenge! Image add karte hain — aur ek link bhi."

"Kaise?"

"Sirf 2 nayi spells chahiye. Aur ye dono thodi alag hain — inke andar koi content nahi hota!"

Zara ne dekha — haan! `<img>` aur `<a>` ke closing tags alag style ke hain. Lekin kaam karte hain kamaal!

---

## ✨ Magic Spell #4 — Images aur Links

**Image add karna:**
```html
<img src="meri-photo.jpg" alt="Meri photo">
```
- `src` = image ka file name ya URL (kahan hai image)
- `alt` = agar image na dikhe toh kya text aaye

**Link add karna:**
```html
<a href="https://www.google.com">Google par jao!</a>
```
- `a` = anchor (link banana)
- `href` = kahan le jaaye

**Pura example:**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Zara ki Website</title>
  </head>
  <body>
    <h1>Main Hoon Zara!</h1>

    <img src="https://picsum.photos/200" alt="Random photo">

    <p>Mujhe coding aur cricket pasand hai.</p>

    <h2>Meri Favourite Websites:</h2>
    <p><a href="https://www.youtube.com">YouTube</a></p>
    <p><a href="https://claude.ai">Claude AI</a></p>
    <p><a href="https://www.google.com">Google</a></p>
  </body>
</html>
```

---

## 🔥 Try It Yourself

Apni website mein add karo:

1. **Ek image** — ye URL use karo (free random photos):
   ```html
   <img src="https://picsum.photos/300/200" alt="Sundar photo">
   ```

2. **3 links** — tumhari favourite websites:
   ```html
   <a href="[website URL]">[Kya likha dikhe]</a>
   ```

3. **Extra challenge:** Link ko naye tab mein kholo:
   ```html
   <a href="https://claude.ai" target="_blank">Claude AI</a>
   ```
   (`target="_blank"` = naye tab mein khulega)

---

## 🤯 Wow Moment

> `<a>` tag 1991 mein banaya gaya tha — **35 saal pehle!**
> Aaj bhi same tag use hota hai.
> Tim Berners-Lee ne ye banaya tha — woh internet ke "inventor" hain! 🌐

---

## 💡 Fun Tip

Apne computer ki koi image use karna chahte ho? Simple! Image file ko **same folder** mein rakho jahan HTML file hai. Phir:
```html
<img src="meri-photo.jpg" alt="Meri photo">
```
Bas! Local image kaam karegi.

---

## ❓ Think About It

`alt` attribute kyun zaroori hai? Socho agar kisi ki aankhein kamzor hain aur wo "screen reader" use karta hai jo text padhta hai... Alt text sunai deta hai unhe. Ye **accessibility** hai — technology sab ke liye!
