# Chapter 15: Project Deploy — Live on the Real Internet! 🌍

**Week 8 | Builders Track**

---

## 📖 Story Scene

Zara's chatbot was ready. And this time she didn't just want to show it at school — she wanted it on the **real internet**!

"NOVA, if I send my friend a link, can they access it too — how?"

"We'll deploy it," NOVA said. "And for Next.js, the best option is... **Vercel**!"

---

## ✨ Magic Spell #15 — Deploy to Vercel

**What is Vercel?**
The company that built Next.js. They host Next.js apps for free. Live in 2 minutes!

---

**Step 1: Put your code on GitHub**

```bash
git init
git add .
git commit -m "My AI chatbot - ready to deploy!"
```

Create a new repo on GitHub.com → push your code.

---

**Step 2: Deploy to Vercel**

1. Go to `vercel.com` → Sign up (with GitHub)
2. "New Project" → select your GitHub repo
3. **Add Environment Variables:**
   - `ANTHROPIC_API_KEY` = your API key
4. Click the Deploy button!

After 5 minutes: `your-app.vercel.app` — **LIVE!**

---

**Step 3: Custom Domain (optional)**

Vercel gives you a free subdomain: `your-app.vercel.app`

Or add your own domain:
1. Buy a `.pk` domain (~Rs. 500/year)
2. In Vercel settings go to "Domains" → add it
3. Update DNS settings

---

**Environment Variables — In Production:**

`.env.local` was only for local development. In production, add variables in the Vercel Dashboard:
```
Settings → Environment Variables → Add:
ANTHROPIC_API_KEY = sk-ant-...
```

Redeploy — API key is now securely stored!

---

**Production Checklist:**

```
[ ] API key is in Vercel env variables (not in code!)
[ ] System prompt is finalised and tested
[ ] Error handling exists — what if the API fails?
[ ] Loading states are smooth
[ ] Tested on mobile
[ ] Let someone else test it (user testing!)
```

---

## 🔥 Try It Yourself

1. Create a GitHub repo and push your code
2. Deploy to Vercel
3. Send the link to 3 friends
4. Get their feedback — what problems came up?
5. Fix them and redeploy (git push → auto redeploy!)

---

## 🤯 Wow Moment

> Every time you `git push` → Vercel automatically deploys a new version!
> This is **CI/CD** (Continuous Deployment) — what professional teams use.
> Without even knowing it — you've adopted a professional workflow! 🚀

---

## 💡 Fun Tip

Vercel has a **Preview Deployments** feature — each GitHub branch gets its own separate preview URL. Want to try some changes without affecting production — create a branch and test!

---

## ❓ Think About It

To improve your chatbot you need user feedback. In real apps, how is feedback collected? Thumbs up/down button? Star rating? Simple survey? Make a plan!
