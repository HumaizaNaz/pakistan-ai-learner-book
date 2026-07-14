# Chapter 7: Next.js — Apna Pehla Real Website! 🚀

**Week 4 | Builders Track**

---

## 📖 Story Scene

"NOVA, main HTML files toh banaa sakti hoon. Lekin ye real companies wali websites alag kyun lagti hain?"

"Isliye ke wo sirf HTML files nahi hain," NOVA ne kaha. "Wo **frameworks** use karti hain. Jaise **Next.js**."

"Next.js kya hai?"

"Ek powerful tool jo tumhari website ko super fast banata hai, automatically pages manage karta hai, aur real backend bhi de sakta hai. Aur ye sab React ke upar bana hai."

"React?" Zara confused.

"Ek step ek baar. Pehle Next.js install karte hain — aur tum khud dekh logi ke kya hota hai!"

---

## ✨ Magic Spell #7 — Next.js Setup

**Install karo:**
```bash
npx create-next-app@latest meri-app
```

Ye poochhega:
```
✔ TypeScript? → Yes
✔ ESLint? → Yes
✔ Tailwind CSS? → No (abhi nahi)
✔ App Router? → Yes
```

**Run karo:**
```bash
cd meri-app
npm run dev
```

Browser mein jao: `http://localhost:3000` — tumhari website live!

---

**Folder Structure:**
```
meri-app/
├── app/
│   ├── page.tsx          ← Home page (localhost:3000)
│   ├── about/
│   │   └── page.tsx      ← About page (localhost:3000/about)
│   ├── layout.tsx        ← Har page ka wrapper
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
        Meri Next.js Website! 🚀
      </h1>
      <p>Ye mera pehla Next.js page hai.</p>
    </main>
  );
}
```

**Naya page banana — automatic routing!**

`app/about/page.tsx` file banao:
```tsx
export default function About() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>About Me</h1>
      <p>Main Zara hoon, ek web developer!</p>
    </main>
  );
}
```

Automatically `localhost:3000/about` par available! Koi routing setup nahi karna!

---

## 🔥 Try It Yourself

1. `npx create-next-app@latest meri-app` run karo
2. `npm run dev` se start karo
3. `app/page.tsx` edit karo — apna naam add karo
4. `app/about/page.tsx` naya file banao
5. Browser mein `/about` par jao — magic!

---

## 🤯 Wow Moment

> File banao → Page ready!
> Next.js automatically **file-based routing** karta hai.
> Koi router setup nahi, koi config nahi.
> `app/contact/page.tsx` banao → `localhost:3000/contact` automatically kaam karta hai! ✨

---

## 💡 Fun Tip

Next.js ke pages mein `.tsx` extension hoti hai — TypeScript + JSX (JavaScript + HTML mixed).
JSX mein HTML aur JavaScript ek saath likhte hain — ye alag lagta hai pehle, lekin jaldi habit ho jaati hai!

---

## ❓ Think About It

HTML files mein har page ek alag file hoti hai — link manually likhne padte hain. Next.js mein folder = route. Ye approach kyun better hai large projects ke liye?
