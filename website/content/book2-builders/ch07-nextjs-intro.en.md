# Chapter 7: Next.js — Your First Real Website! 🚀

**Week 4 | Builders Track**

---

## 📖 Story Scene

"NOVA, I can build HTML files. But why do websites from real companies feel so different?"

"Because they're not just HTML files," NOVA said. "They use **frameworks**. Like **Next.js**."

"What's Next.js?"

"A powerful tool that makes your website super fast, manages pages automatically, and can even give you a real backend. And it's all built on top of React."

"React?" Zara looked confused.

"One step at a time. Let's install Next.js first — and you'll see for yourself what it can do!"

---

## ✨ Magic Spell #7 — Next.js Setup

**Install it:**
```bash
npx create-next-app@latest my-app
```

It will ask:
```
✔ TypeScript? → Yes
✔ ESLint? → Yes
✔ Tailwind CSS? → No (not yet)
✔ App Router? → Yes
```

**Run it:**
```bash
cd my-app
npm run dev
```

Go to your browser: `http://localhost:3000` — your website is live!

---

**Folder Structure:**
```
my-app/
├── app/
│   ├── page.tsx          ← Home page (localhost:3000)
│   ├── about/
│   │   └── page.tsx      ← About page (localhost:3000/about)
│   ├── layout.tsx        ← Wrapper for every page
│   └── globals.css       ← Global CSS
├── public/               ← Images, files
└── package.json
```

---

**app/page.tsx — Home Page:**
```tsx
export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1 style={{ color: "#6c63ff" }}>
        My Next.js Website! 🚀
      </h1>
      <p>This is my first Next.js page.</p>
    </main>
  );
}
```

**Creating a new page — automatic routing!**

Create the file `app/about/page.tsx`:
```tsx
export default function About() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>About Me</h1>
      <p>I'm Zara, a web developer!</p>
    </main>
  );
}
```

Automatically available at `localhost:3000/about`! No routing setup needed!

---

## 🔥 Try It Yourself

1. Run `npx create-next-app@latest my-app`
2. Start with `npm run dev`
3. Edit `app/page.tsx` — add your name
4. Create a new file `app/about/page.tsx`
5. Go to `/about` in the browser — magic!

---

## 🤯 Wow Moment

> Create a file → page is ready!
> Next.js automatically does **file-based routing**.
> No router setup, no configuration.
> Create `app/contact/page.tsx` → `localhost:3000/contact` just works! ✨

---

## 💡 Fun Tip

Pages in Next.js use the `.tsx` extension — TypeScript + JSX (JavaScript + HTML mixed together).
In JSX you write HTML and JavaScript at the same time — it looks strange at first, but you get used to it quickly!

---

## ❓ Think About It

In HTML files, each page is a separate file — links have to be written manually. In Next.js, a folder equals a route. Why is this approach better for large projects?
