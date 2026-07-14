# Chapter 4: HTML — Images and Links 🖼️🔗

**Week 2 | Explorers Track**

---

## 📖 Story Scene

Zara was happy. She had built her first website!

But there was a problem. "NOVA, it's just text. No pictures, no links. It looks so boring!"

NOVA said: "Then today we're bringing your website to life! Let's add an image — and a link too."

"How?"

"Just 2 new spells. And these ones are a little different — they don't have any content inside them!"

Zara looked — yes! The `<img>` and `<a>` tags work differently from the others. But the results are amazing!

---

## ✨ Magic Spell #4 — Images and Links

**Adding an image:**
```html
<img src="my-photo.jpg" alt="My photo">
```
- `src` = the image file name or URL (where is the image?)
- `alt` = what text appears if the image doesn't load

**Adding a link:**
```html
<a href="https://www.google.com">Go to Google!</a>
```
- `a` = anchor (creating a link)
- `href` = where should it go?

**Full example:**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Zara's Website</title>
  </head>
  <body>
    <h1>I'm Zara!</h1>

    <img src="https://picsum.photos/200" alt="Random photo">

    <p>I love coding and cricket.</p>

    <h2>My Favourite Websites:</h2>
    <p><a href="https://www.youtube.com">YouTube</a></p>
    <p><a href="https://claude.ai">Claude AI</a></p>
    <p><a href="https://www.google.com">Google</a></p>
  </body>
</html>
```

---

## 🔥 Try It Yourself

Add these to your website:

1. **An image** — use this URL (free random photos):
   ```html
   <img src="https://picsum.photos/300/200" alt="Beautiful photo">
   ```

2. **3 links** — your favourite websites:
   ```html
   <a href="[website URL]">[Link text to show]</a>
   ```

3. **Extra challenge:** Open a link in a new tab:
   ```html
   <a href="https://claude.ai" target="_blank">Claude AI</a>
   ```
   (`target="_blank"` = opens in a new tab)

---

## 🤯 Wow Moment

> The `<a>` tag was created in 1991 — **35 years ago!**
> And the same tag is still used today.
> Tim Berners-Lee invented it — he's the "inventor" of the internet! 🌐

---

## 💡 Fun Tip

Want to use an image from your own computer? Easy! Put the image file in the **same folder** as your HTML file. Then:
```html
<img src="my-photo.jpg" alt="My photo">
```
Done! Your local image will work.

---

## ❓ Think About It

Why is the `alt` attribute important? Think about someone with weak eyesight using a "screen reader" that reads text aloud... the alt text is what they hear. This is **accessibility** — technology that works for everyone!
