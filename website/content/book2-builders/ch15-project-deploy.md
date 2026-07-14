# Chapter 15: Project Deploy — Real Internet Par! 🌍

**Week 8 | Builders Track**

---

## 📖 Story Scene

Zara ka chatbot ready tha. Aur iss baar wo sirf school mein dikhana nahi chahti thi — wo chahti thi ye **real internet** par ho!

"NOVA, apne dost ko link bhejoon toh wo bhi access kar sake — kaise?"

"Deploy karte hain," NOVA ne kaha. "Aur Next.js ke liye best option hai... **Vercel**!"

---

## ✨ Magic Spell #15 — Vercel Par Deploy

**Kya hai Vercel?**
Next.js ke banane wale company. Free mein Next.js apps deploy karte hain. 2 minute mein live!

---

**Step 1: GitHub par code daalo**

```bash
git init
git add .
git commit -m "My AI chatbot - ready to deploy!"
```

GitHub.com par naya repo banao → code push karo.

---

**Step 2: Vercel par deploy karo**

1. `vercel.com` par jao → Sign up (GitHub se)
2. "New Project" → tumhara GitHub repo select karo
3. **Environment Variables add karo:**
   - `ANTHROPIC_API_KEY` = tumhari API key
4. Deploy button dabaao!

5 minute baad: `your-app.vercel.app` — **LIVE!**

---

**Step 3: Custom domain (optional)**

Vercel free subdomain deta hai: `your-app.vercel.app`

Ya khud ka domain lagao:
1. `.pk` domain kharido (~Rs. 500/year)
2. Vercel settings mein "Domains" → add karo
3. DNS settings update karo

---

**Environment Variables — Production mein:**

`.env.local` sirf local development ke liye tha. Production mein Vercel Dashboard mein add karo:
```
Settings → Environment Variables → Add:
ANTHROPIC_API_KEY = sk-ant-...
```

Redeploy karo — API key securely stored hai!

---

**Production Checklist:**

```
[ ] API key Vercel env variables mein hai (not in code!)
[ ] System prompt final aur tested hai
[ ] Error handling hai — kya hoga agar API fail ho?
[ ] Loading states smooth hain
[ ] Mobile par test kiya
[ ] Kisi aur ko test karne diya (user testing!)
```

---

## 🔥 Try It Yourself

1. GitHub repo banao aur code push karo
2. Vercel par deploy karo
3. Link apne 3 dosto ko bhejo
4. Unka feedback lo — kya problems aaye?
5. Fix karo aur redeploy karo (git push → auto redeploy!)

---

## 🤯 Wow Moment

> Har baar tum `git push` karte ho → Vercel automatically new version deploy karta hai!
> Ye **CI/CD** (Continuous Deployment) hai — jo professional teams use karti hain.
> Tum ne without knowing it — professional workflow adopt kar liya! 🚀

---

## 💡 Fun Tip

Vercel mein **Preview Deployments** feature hai — har GitHub branch ka alag preview URL milta hai. Kuch changes try karne ho bina production affect kiye — branch banao aur test karo!

---

## ❓ Think About It

Tumhare chatbot ko improve karne ke liye tumhe user feedback chahiye. Real app mein feedback kaise collect karte hain? Thumbs up/down button? Star rating? Simple survey? Plan banao!
