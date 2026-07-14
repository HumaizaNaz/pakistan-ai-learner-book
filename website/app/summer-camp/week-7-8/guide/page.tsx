"use client";
import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { ChevronRight, CheckCircle2, Circle, Lightbulb, BookOpen, Zap, Target, Trophy } from "lucide-react";

/* ─── Translation Object ─────────────────────────────────────── */
const t = {
  ur: {
    breadcrumb1: "Summer Camp",
    breadcrumb2: "Week 7–8",
    breadcrumb3: "Study Guide",
    badge: "Self Study Guide · 2–3 Ghante",
    title: "Week 7–8 Complete Study Guide",
    subtitle: "Yeh aakhri hafte ka guide hai — sab kuch ek jagah connect karo. Top se shuru karo, step by step karo, aur har 'Try Karo' task zaroor mukammal karo!",
    howToUse: "Is Guide Ko Kaise Use Karein?",
    steps: [
      "Har topic ko order mein karo — skip mat karna",
      "Har 'Try Karo' task abhi karo — yeh final week hai!",
      "Har section ke baad checklist tick karo",
      "Aakhir mein apna poora professional package complete karo",
    ],
    topics: [
      {
        num: "01",
        icon: "💼",
        title: "Portfolio Website Kyun Zaroori Hai?",
        color: "#a855f7",
        story: {
          heading: "📖 Do Candidates Ki Kahani...",
          text: `Do students ek hi tech company mein interview ke liye jaate hain. Dono ki education same hai. Dono kehte hain: "Mujhe AI aata hai."

HR manager poochha: "Apna kaam dikhao."

Pehla student: "Mere paas CV hai..." awkward silence.

Doosra student: "Zaroor! Yeh meri website hai — ismein mere projects, LinkedIn, GitHub, aur CV sab ek jagah hain." HR impressed!

Tum bataao — kaun job paayega?

Portfolio website tumhara proof hai — ke tum sirf baatein nahi karte, kaam bhi karte ho.`,
        },
        sections: [
          {
            heading: "📚 Portfolio Mein Kya Kya Hona Chahiye",
            content: `**Hero / Introduction**
Tumhara naam, ek-line description, professional photo

**About Me**
2-3 sentences — tum kaun ho, kya seekh rahe ho, tumhare goals

**Skills**
ChatGPT, Canva AI, CapCut AI, Prompt Engineering, GitHub

**Projects**
Week 5-6 personal project ka GitHub link + baaki kaam

**LinkedIn + GitHub Buttons**
Direct links tumhare profiles pe

**CV Download**
Button jo tumhara AI-generated CV PDF mein download karaaye

**Contact**
Tumhara email ya LinkedIn link`,
          },
          {
            heading: "🔧 3 Tools Jo Hum Use Karenge",
            content: `**Bolt.new** — AI se poori website banao
Sirf English mein describe karo — seconds mein working HTML/CSS/JS generate ho jaata hai. Koi coding nahi chahiye.

**GitHub** — Website ka code host karo
Tumhara code GitHub repository mein safe hai — har jagah se accessible.

**GitHub Pages** — Website free mein live karo
GitHub Pages tumhari files ko real URL deta hai: yourusername.github.io — bilkul free, koi hosting fee nahi.

**Total cost: $0** — Sab kuch completely free hai!`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try Karo — Abhi Karo!",
          steps: [
            "Ek paper pe apna portfolio plan karo — sections draw karo",
            "ChatGPT se apna About Me section likhwao (RTCF formula use karo)",
            "Apni Skills list banao — is course mein jo bhi seekha",
            "Projects list karo — Week 5-6 project + koi aur kaam",
            "Plan ready? Agli topic pe jao — Bolt.new se website banayenge!",
          ],
        },
        checklist: [
          "Portfolio ka plan paper pe bana liya",
          "ChatGPT se About Me likhwaya",
          "Skills aur Projects list ready hai",
          "Samajh aa gaya portfolio kyun zaroori hai",
        ],
      },
      {
        num: "02",
        icon: "🏗️",
        title: "HTML aur CSS: Samjho, Yaad Mat Karo",
        color: "#3b82f6",
        story: {
          heading: "📖 Gaadi Chalane Ki Misal...",
          text: `Gaadi chalane ke liye mechanic hona zaruri nahi. Lekin yeh jaanna ke accelerator dabaane se speed badhti hai — yeh basic samajh tumhe behtar driver banati hai.

HTML aur CSS bhi aise hi hain.

Bolt.new tumhare liye sab kuch likhega — tum khud code nahi likhoge. Lekin jab AI-generated code dekhо aur samajh aaye ke yeh kya kar raha hai — tum confident feel karoge aur zaroorat parne par kuch bhi change kar sakoge.

Sirf basics samajhna hai. Yaad nahi karna.`,
        },
        sections: [
          {
            heading: "📚 HTML — Webpage Ka Dhancha",
            content: `HTML webpage ka skeleton hai. Yeh define karta hai page pe kya exist karta hai.

**h1 se h6** — Headings — sabse bada h1, sabse chota h6
**p** — Text ka ek paragraph
**img** — Image dikhata hai
**a** — Clickable link
**button** — Clickable button
**div** — Container ya section — doosri cheezein group karne ke liye`,
          },
          {
            heading: "🎨 CSS — Style aur Design",
            content: `CSS page ko khoobsurat banata hai. Colors, fonts, sizes, spacing sab CSS se control hota hai.

**color** — Text ka rang
**background-color** — Background colour
**font-size** — Text kitna bada
**padding** — Element ke andar space
**margin** — Element ke bahar space
**border-radius** — Rounded corners

**Sabse Zaroori Baat:**
Tumhe HTML ya CSS likhna NAHI hai. Bolt.new sab khud generate kar deta hai. Sirf yeh samajhna hai ke yeh kya hai — taake code dekhke darne ki zaroorat na ho.`,
          },
          {
            heading: "🔍 HTML/CSS Apni Aankhon Se Dekho",
            content: `Koi bhi website kholo Chrome mein aur yeh karo:

**Step 1:** Chrome mein koi bhi website kholo
**Step 2:** F12 daba do (ya right-click → Inspect)
**Step 3:** "Elements" tab pe click karo
**Step 4:** Left side mein HTML code hai, right side mein CSS

**Mouse se hover karo** — webpage pe wo hissa highlight ho jayega!

> "Har website jo tum dekhte ho — yahi HTML aur CSS hai. Aur tum abhi iske andar dekh rahe ho!"`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try Karo — HTML/CSS Apni Aankhon Se Dekho!",
          steps: [
            "Chrome mein google.com kholo",
            "F12 dabo — DevTools khul jayega",
            "Elements tab pe click karo",
            "Left side mein HTML lines pe hover karo — page pe highlight dekho",
            "Styles tab mein koi CSS value double-click karo aur change karo",
            "Dekho kya change hua — refresh karo aur wapas normal ho jaayega",
            "Daro mat — yeh sirf tumhare screen pe hai, website nahi tooti!",
          ],
        },
        checklist: [
          "HTML kya hai samajh aa gaya — webpage ka skeleton",
          "CSS kya hai samajh aa gaya — design aur style",
          "Chrome DevTools se kisi website ka code dekha",
          "Ek CSS value change karke dekha kya hota hai",
        ],
      },
      {
        num: "03",
        icon: "⚡",
        title: "Bolt.new: AI Se Apna Portfolio Banao",
        color: "#f97316",
        story: {
          heading: "📖 Zara Ka Portfolio...",
          text: `Zara ne socha portfolio banana mushkil hoga — coding seekhni hogi, designer hire karna hoga.

Phir NOVA ne kaha: "Bolt.new try karo."

Zara ne English mein apni website describe ki. 45 seconds mein ek complete, mobile-friendly, professional portfolio website ready thi — HTML, CSS, JavaScript sab ke saath.

Zara ne sirf apna naam aur details update kiye. GitHub pe upload kiya. 10 minute mein live website!

NOVA ne kaha: "Yeh AI ka jadoo hai — tumne website describe ki, AI ne banayi."`,
        },
        sections: [
          {
            heading: "🔑 Bolt.new Step-by-Step",
            content: `**Step 1:** bolt.new par jao — Google account se free sign up karo

**Step 2:** Prompt box mein apni portfolio ki detailed description type karo

**Step 3:** 30-60 seconds wait karo — Bolt tumhari complete website generate karta hai

**Step 4:** Browser mein preview dekho

**Step 5:** Koi bhi text seedha edit karo — click karo aur badlo

**Step 6:** Code ZIP file mein download karo

**Step 7:** GitHub pe upload karo — next topic mein live karenge!`,
          },
          {
            heading: "📝 Bolt.new Prompt — Copy Karo aur Customize Karo",
            content: `Yeh prompt copy karo, [brackets] mein apni details bharo, aur Bolt.new mein paste karo:

> "Create a clean, modern, single-page portfolio website for [Tumhara Naam], a [tumhari umar]-year-old AI learner based in [tumhara sheher], Pakistan. Include: a hero section with my name and title 'AI Learner & Content Creator'; an About Me section with 3 sentences about my background; a Skills section listing Prompt Engineering, ChatGPT, Canva AI, CapCut AI, GitHub, Content Creation; a Projects section with 2 project placeholders with GitHub links; a Contact section with LinkedIn and GitHub buttons. Use a professional navy blue and white colour scheme. Make it mobile-friendly. Clean, minimal design."

**ChatGPT Tip:** Pehle ChatGPT se ek aur detailed description likhwao taake Bolt ko zyada context mile!`,
          },
          {
            heading: "✏️ Website Customize Karo",
            content: `**Text Edit karo:**
Bolt mein kisi bhi text pe click karo aur seedha type karo — real naam, real description, real skills.

**Colors Change karo:**
Chat box mein likho: "Change the hero background to dark purple" — Bolt update kar deta hai.

**Section Add karo:**
"Add a testimonials section with 3 placeholder quotes" — naya section add ho jaata hai.

**Photo Add karo:**
Apni professional photo ka link paste karo ya placeholder rakhо — baad mein update kar sakte ho.

**Download karo:**
Jab khush ho jao — top right mein Download button → ZIP file milegi.`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try Karo — Apna Portfolio Banao!",
          steps: [
            "bolt.new par jao aur free account banao",
            "Upar diya gaya prompt copy karo — apni details bharо",
            "Bolt mein paste karo aur Enter dabo",
            "30-60 seconds wait karo — preview dekho",
            "Apna real naam aur details update karo",
            "Kuch colors ya sections change karo chat mein likh ke",
            "ZIP download karo — agla step GitHub pe upload karna hai!",
          ],
        },
        checklist: [
          "Bolt.new pe account bana liya",
          "Prompt use karke portfolio generate kiya",
          "Apna real naam aur details update kiye",
          "ZIP file download kar li",
          "Portfolio mobile pe bhi theek dikh raha hai",
        ],
      },
      {
        num: "04",
        icon: "🚀",
        title: "GitHub Pages: Website Free Mein Live Karo",
        color: "#22c55e",
        story: {
          heading: "📖 Real URL Ka Jadoo...",
          text: `Ali ne apna portfolio Bolt.new pe bana liya. Beautiful tha. Lekin sirf uske computer pe tha.

"NOVA, main yeh kisi ko kaise dikhaaun?" Ali ne poocha.

"GitHub Pages," NOVA ne kaha. "Ek free service jo tumhari files ko real URL deta hai — yourusername.github.io. Koi bhi duniya mein is link se tumhara portfolio dekh sakta hai."

Ali ne steps follow kiye. 5 minute mein uska portfolio live tha: ali-ahmed.github.io

Usne link LinkedIn pe share kiya. Teacher ko bheja. Parents ko dikhaya.

"Yeh meri website hai" — Ali ne pehli baar yeh kaha aur sach tha.`,
        },
        sections: [
          {
            heading: "🔑 GitHub Pages Step-by-Step",
            content: `**Step 1:** GitHub pe naya repository banao
Naam EXACTLY yeh rakho: yourusername.github.io
(apna actual GitHub username likhо — jaise ali-ahmed.github.io)

**Step 2:** Bolt.new ZIP ki saari portfolio files is repository mein upload karo
"Add file" → "Upload files" → sab files drag karo

**Step 3:** Repository Settings tab kholo

**Step 4:** Left sidebar mein "Pages" dhundho

**Step 5:** "Source" ke neeche "Deploy from a branch" select karo

**Step 6:** "main" branch aur "/ (root)" folder choose karo → Save click karo

**Step 7:** 2-3 minute wait karo

**Step 8:** Visit karo: https://yourusername.github.io

**🎉 Tumhari website live hai!**`,
          },
          {
            heading: "📣 Live Hone Ke Baad — Sab Ko Batao!",
            content: `**LinkedIn pe:**
Featured section mein website URL add karo
About section mein add karo
Ek post karo: "Meri portfolio website live ho gayi!"

**GitHub pe:**
Profile bio mein website URL add karo

**CV mein:**
Portfolio website ka link add karo — PDF update karo

**Ghar mein:**
Family ko apna live portfolio dikhao!

> "Ek student ka portfolio website hona — Pakistan mein abhi bhi bohot rare hai. Tum already crowd se alag ho."`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try Karo — Website Live Karo!",
          steps: [
            "GitHub pe naya repository banao — naam: yourusername.github.io",
            "Bolt.new se download ki ZIP kholo — sab files nikaalo",
            "GitHub repository mein saari files upload karo",
            "Settings → Pages → Deploy from branch → main → Save",
            "3 minute wait karo phir https://yourusername.github.io visit karo",
            "Live hai? LinkedIn pe URL share karo abhi!",
            "GitHub bio mein bhi URL add karo",
          ],
        },
        checklist: [
          "yourusername.github.io repository banayi",
          "Saari portfolio files upload ki",
          "GitHub Pages enable kiya",
          "Website live hai — real URL pe kaam kar raha hai",
          "LinkedIn pe portfolio URL add kiya",
          "GitHub bio mein URL add kiya",
        ],
      },
      {
        num: "05",
        icon: "🕸️",
        title: "Sab Connect Karo: Complete Professional Identity",
        color: "#06b6d4",
        story: {
          heading: "📖 Spider Web Ki Tarah...",
          text: `NOVA ne Zara ko samjhaya:

"Socho spider web ki tarah. Har thread doosre se connected hai. Ek thread cut bhi ho jaye — web kaam karta rehta hai kyunki baaki connections hain."

"In 8 haftaon mein tumne jo platforms banaye hain — LinkedIn, GitHub, Portfolio, CV — yeh sab ek doosre se connected hone chahiye. Jab koi bhi ek jagah se aaye — woh fauran baaki sab tak pohonch sake."

Zara ne samjha. Yeh sirf websites nahi thi — yeh ek professional network tha. Aur woh iski center thi.`,
        },
        sections: [
          {
            heading: "🔗 Connections Ka Chart",
            content: `**LinkedIn Profile pe add karo:**
Portfolio website URL — About section + Featured section mein

**GitHub Bio pe add karo:**
LinkedIn URL + Portfolio website URL

**Portfolio Website pe add karo:**
LinkedIn button + GitHub button + CV download button

**CV (PDF) pe add karo:**
LinkedIn URL + GitHub URL + Portfolio website URL

**Matlab:** Har jagah se baaki sab tak rasta hai!`,
          },
          {
            heading: "📝 Final LinkedIn Post — Course Completion",
            content: `Yeh template use karo — apni details bharо:

> 2 mahine pehle mujhe AI ke baare mein kuch nahi pata tha.
>
> Aaj mere paas hai:
> ✔ Ek live portfolio website
> ✔ Active LinkedIn [X] posts ke saath
> ✔ GitHub [X] projects ke saath
> ✔ Ek personal AI project jo maine khud banaya
> ✔ Ek professional CV
> ✔ Content package: blog + design + video
> ✔ Personal Prompt Library
>
> Maine seekha: prompt engineering, Canva AI, CapCut AI, GitHub, portfolio building, aur AI ko tool ki tarah use karna — shortcut ki tarah nahi.
>
> Yeh sirf shuruat hai. 🚀
>
> Portfolio: [tumhari website link] | GitHub: [tumhari GitHub link]
>
> #AI #Portfolio #GitHub #Pakistan #StudentLife #Learning #PromptEngineering

**ChatGPT Tip:** Yeh template ChatGPT ko do aur kaho: "Ise aur personal banao — mere baare mein: [tumhari story]"`,
          },
          {
            heading: "🚀 Aage Ka Raasta",
            content: `**Yeh khatam nahi — yeh shuruat hai!**

**Path A: Creator / Content**
LinkedIn pe grow karte raho
Brands ya causes ke liye AI content banao
CapCut se video creation aur gehri explore karo
AI writing tools aur deeply seekho

**Path B: Technical / Developer**
Aur HTML, CSS, JavaScript seekho
Python basics AI ki madad se explore karo
Bolt.new ya Lovable pe complex tools banao
APIs aur automation seekho

**Dono paths valid hain.** Important yeh hai ke seekhte rehо aur banate rehо.`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try Karo — Sab Connect Karo!",
          steps: [
            "LinkedIn pe portfolio website URL About section mein add karo",
            "LinkedIn Featured section mein bhi URL add karo",
            "GitHub bio mein LinkedIn + Portfolio links add karo",
            "Portfolio website mein LinkedIn aur GitHub buttons sahi links pe point kar rahe hain check karo",
            "CV PDF mein portfolio link add karo — update karo",
            "Final completion post ChatGPT se likhwao — template use karo",
            "Post LinkedIn pe publish karo — yeh tumhara sabse bada LinkedIn moment hai! 🎉",
          ],
        },
        checklist: [
          "LinkedIn mein portfolio URL add kiya",
          "GitHub bio mein sab links add kiye",
          "Portfolio website mein sab buttons sahi hain",
          "CV mein sab links update kiye",
          "Final course completion post publish ki",
        ],
      },
    ],
    finalChecklist: {
      title: "🎓 Week 7–8 Complete Checklist",
      subtitle: "Agar yeh sab tick hai toh tumhara 2 mahine ka AI course mukammal ho gaya!",
      items: [
        "Portfolio website Bolt.new se banayi",
        "GitHub Pages pe live deploy kiya — real URL mila",
        "LinkedIn pe portfolio URL add kiya",
        "GitHub bio mein portfolio link add kiya",
        "CV mein saare links add kiye",
        "Week 5-6 project portfolio ke Projects section mein add kiya",
        "Phone pe portfolio test kiya — mobile pe theek dikh raha hai",
        "Final course completion post LinkedIn pe publish ki",
      ],
    },
    complete: {
      title: "🎉 Course Complete!",
      desc: "Tumne 8 hafte mein jo seekha — yeh sirf shuruat hai. Tumhara journey abhi start hua hai!",
      back: "← Week 5–6 Pe Wapas Jao",
    },
  },

  en: {
    breadcrumb1: "Summer Camp",
    breadcrumb2: "Week 7–8",
    breadcrumb3: "Study Guide",
    badge: "Self Study Guide · 2–3 Hours",
    title: "Week 7–8 Complete Study Guide",
    subtitle: "This is the final week's guide — connect everything in one place. Start from the top, go step by step, and complete every 'Try It' task!",
    howToUse: "How to Use This Guide",
    steps: [
      "Complete every topic in order — don't skip anything",
      "Do every 'Try It' task right now — this is the final week!",
      "Tick the checklist after each section",
      "At the end, complete your full professional package",
    ],
    topics: [
      {
        num: "01",
        icon: "💼",
        title: "Why Do You Need a Portfolio Website?",
        color: "#a855f7",
        story: {
          heading: "📖 The Story of Two Candidates...",
          text: `Two students go for an interview at the same tech company. Same education. Both say: "I know AI."

The HR manager asks: "Show me your work."

First student: "I have a CV..." awkward silence.

Second student: "Of course! Here's my website — it has my projects, LinkedIn, GitHub, and CV all in one place." HR impressed!

You tell me — who gets the job?

A portfolio website is your proof — that you don't just talk, you actually do the work.`,
        },
        sections: [
          {
            heading: "📚 What Should Be in Your Portfolio",
            content: `**Hero / Introduction**
Your name, one-line description, professional photo

**About Me**
2-3 sentences — who you are, what you're learning, your goals

**Skills**
ChatGPT, Canva AI, CapCut AI, Prompt Engineering, GitHub

**Projects**
Your Week 5-6 personal project's GitHub link + other work

**LinkedIn + GitHub Buttons**
Direct links to your profiles

**CV Download**
A button that lets visitors download your AI-generated CV as a PDF

**Contact**
Your email or LinkedIn link`,
          },
          {
            heading: "🔧 3 Tools We'll Use",
            content: `**Bolt.new** — Build a website with AI
Just describe your website in English — in seconds it generates working HTML/CSS/JS. No coding required.

**GitHub** — Host your website's code
Your code lives safely in a GitHub repository — accessible from anywhere.

**GitHub Pages** — Make your website live for free
GitHub Pages takes your files and gives you a real URL: yourusername.github.io — completely free, no hosting fees.

**Total cost: $0** — Everything is completely free!`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try It — Do It Now!",
          steps: [
            "Plan your portfolio on paper — sketch the sections",
            "Get ChatGPT to write your About Me section (use the RTCF formula)",
            "Make your Skills list — everything you've learned in this course",
            "List your Projects — Week 5-6 project + anything else you've made",
            "Plan ready? Move to the next topic — we'll build it in Bolt.new!",
          ],
        },
        checklist: [
          "Portfolio plan sketched on paper",
          "ChatGPT wrote my About Me",
          "Skills and Projects list is ready",
          "I understand why a portfolio matters",
        ],
      },
      {
        num: "02",
        icon: "🏗️",
        title: "HTML and CSS: Understand, Don't Memorize",
        color: "#3b82f6",
        story: {
          heading: "📖 The Driving Analogy...",
          text: `You don't need to be a mechanic to drive a car. But knowing that pressing the accelerator increases speed — that basic understanding makes you a better driver.

HTML and CSS are the same.

Bolt.new will write all the code for you — you won't type a single line of code yourself. But when you see AI-generated code and understand what it's doing, you'll feel confident — and if you ever need to change something, you'll know how.

You just need to understand the basics. No memorizing.`,
        },
        sections: [
          {
            heading: "📚 HTML — The Skeleton of a Webpage",
            content: `HTML is a webpage's skeleton. It defines what exists on the page.

**h1 to h6** — Headings — h1 is biggest, h6 is smallest
**p** — A paragraph of text
**img** — Displays an image
**a** — A clickable link
**button** — A clickable button
**div** — A container or section — used to group other things`,
          },
          {
            heading: "🎨 CSS — Style and Design",
            content: `CSS makes the page look beautiful. Colors, fonts, sizes, spacing — all controlled by CSS.

**color** — Text color
**background-color** — Background color
**font-size** — How big the text is
**padding** — Space inside an element
**margin** — Space outside an element
**border-radius** — Rounded corners

**Most Important Thing:**
You do NOT need to write HTML or CSS. Bolt.new generates everything automatically. You just need to understand what it is — so you're not scared when you see the code.`,
          },
          {
            heading: "🔍 See HTML/CSS With Your Own Eyes",
            content: `Open any website in Chrome and do this:

**Step 1:** Open any website in Chrome
**Step 2:** Press F12 (or right-click → Inspect)
**Step 3:** Click the "Elements" tab
**Step 4:** HTML code is on the left, CSS is on the right

**Hover your mouse** — that part of the webpage will highlight!

> "Every website you've ever visited is made of exactly this HTML and CSS. And right now you're looking inside it!"`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try It — See HTML/CSS With Your Own Eyes!",
          steps: [
            "Open google.com in Chrome",
            "Press F12 — DevTools will open",
            "Click the Elements tab",
            "Hover over HTML lines on the left — watch the page highlight",
            "In the Styles tab, double-click any CSS value and change it",
            "See what changes — refresh to go back to normal",
            "Don't be scared — it's only on your screen, the website isn't broken!",
          ],
        },
        checklist: [
          "I understand what HTML is — the webpage's skeleton",
          "I understand what CSS is — design and style",
          "I looked at a website's code using Chrome DevTools",
          "I changed a CSS value and saw what happened",
        ],
      },
      {
        num: "03",
        icon: "⚡",
        title: "Bolt.new: Build Your Portfolio with AI",
        color: "#f97316",
        story: {
          heading: "📖 Zara's Portfolio...",
          text: `Zara thought building a portfolio would be hard — she'd need to learn coding or hire a designer.

Then NOVA said: "Try Bolt.new."

Zara described her website in English. In 45 seconds, a complete, mobile-friendly, professional portfolio website was ready — with HTML, CSS, and JavaScript included.

Zara just updated her name and details. Uploaded it to GitHub. In 10 minutes she had a live website!

NOVA said: "This is the magic of AI — you described the website, AI built it."`,
        },
        sections: [
          {
            heading: "🔑 Bolt.new Step-by-Step",
            content: `**Step 1:** Go to bolt.new — sign up free with Google account

**Step 2:** Type a detailed description of your portfolio in the prompt box

**Step 3:** Wait 30-60 seconds — Bolt generates your complete website

**Step 4:** View the preview in the browser

**Step 5:** Edit any text directly — click and type

**Step 6:** Download the code as a ZIP file

**Step 7:** Upload to GitHub — in the next topic we'll make it live!`,
          },
          {
            heading: "📝 Bolt.new Prompt — Copy and Customize",
            content: `Copy this prompt, fill in your details in [brackets], and paste it into Bolt.new:

> "Create a clean, modern, single-page portfolio website for [Your Name], a [your age]-year-old AI learner based in [your city], Pakistan. Include: a hero section with my name and title 'AI Learner & Content Creator'; an About Me section with 3 sentences about my background; a Skills section listing Prompt Engineering, ChatGPT, Canva AI, CapCut AI, GitHub, Content Creation; a Projects section with 2 project placeholders with GitHub links; a Contact section with LinkedIn and GitHub buttons. Use a professional navy blue and white colour scheme. Make it mobile-friendly. Clean, minimal design."

**ChatGPT Tip:** First get ChatGPT to write an even more detailed description — more context means better results from Bolt!`,
          },
          {
            heading: "✏️ Customize Your Website",
            content: `**Edit text:**
Click any text in Bolt and type directly — your real name, real description, real skills.

**Change colors:**
Type in the chat box: "Change the hero background to dark purple" — Bolt updates it.

**Add a section:**
"Add a testimonials section with 3 placeholder quotes" — new section appears.

**Add your photo:**
Paste your professional photo's link or keep a placeholder — you can update it later.

**Download:**
When you're happy — Download button at top right → you'll get a ZIP file.`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try It — Build Your Portfolio!",
          steps: [
            "Go to bolt.new and create a free account",
            "Copy the prompt above — fill in your details",
            "Paste into Bolt and press Enter",
            "Wait 30-60 seconds — view the preview",
            "Update your real name and details",
            "Change some colors or sections by typing in the chat",
            "Download the ZIP file — next step is uploading to GitHub!",
          ],
        },
        checklist: [
          "Created Bolt.new account",
          "Generated portfolio using the prompt",
          "Updated with my real name and details",
          "Downloaded the ZIP file",
          "Portfolio looks good on mobile too",
        ],
      },
      {
        num: "04",
        icon: "🚀",
        title: "GitHub Pages: Make Your Website Live for Free",
        color: "#22c55e",
        story: {
          heading: "📖 The Magic of a Real URL...",
          text: `Ali built his portfolio on Bolt.new. It was beautiful. But it was only on his computer.

"NOVA, how do I show this to anyone?" Ali asked.

"GitHub Pages," NOVA said. "A free service that gives your files a real URL — yourusername.github.io. Anyone in the world can see your portfolio at that link."

Ali followed the steps. In 5 minutes his portfolio was live: ali-ahmed.github.io

He shared the link on LinkedIn. Sent it to his teacher. Showed his parents.

"This is my website" — Ali said it for the first time, and it was true.`,
        },
        sections: [
          {
            heading: "🔑 GitHub Pages Step-by-Step",
            content: `**Step 1:** Create a new repository on GitHub
Name it EXACTLY this: yourusername.github.io
(use your actual GitHub username — like ali-ahmed.github.io)

**Step 2:** Upload all your portfolio files from the Bolt.new ZIP into this repository
"Add file" → "Upload files" → drag all files

**Step 3:** Open the repository's Settings tab

**Step 4:** Find "Pages" in the left sidebar

**Step 5:** Under "Source" select "Deploy from a branch"

**Step 6:** Choose "main" branch and "/ (root)" folder → click Save

**Step 7:** Wait 2-3 minutes

**Step 8:** Visit: https://yourusername.github.io

**🎉 Your website is live!**`,
          },
          {
            heading: "📣 Once It's Live — Tell Everyone!",
            content: `**On LinkedIn:**
Add the website URL to your About section
Add it to the Featured section
Post: "My portfolio website is live!"

**On GitHub:**
Add the website URL to your profile bio

**On your CV:**
Add the portfolio website link — update the PDF

**At home:**
Show your family your live portfolio!

> "A student having a live portfolio website — that's still very rare in Pakistan. You're already standing out from the crowd."`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try It — Make It Live!",
          steps: [
            "Create a new GitHub repository — name: yourusername.github.io",
            "Open the ZIP you downloaded from Bolt.new — extract all files",
            "Upload all files to the GitHub repository",
            "Settings → Pages → Deploy from branch → main → Save",
            "Wait 3 minutes then visit https://yourusername.github.io",
            "Is it live? Share the URL on LinkedIn right now!",
            "Add the URL to your GitHub bio too",
          ],
        },
        checklist: [
          "Created yourusername.github.io repository",
          "Uploaded all portfolio files",
          "Enabled GitHub Pages",
          "Website is live — working at real URL",
          "Added portfolio URL to LinkedIn",
          "Added URL to GitHub bio",
        ],
      },
      {
        num: "05",
        icon: "🕸️",
        title: "Connect Everything: Complete Professional Identity",
        color: "#06b6d4",
        story: {
          heading: "📖 Like a Spider Web...",
          text: `NOVA explained to Zara:

"Think of it like a spider web. Every thread is connected to every other. Even if one thread breaks — the web keeps working because the other connections are there."

"All the platforms you've built over these 8 weeks — LinkedIn, GitHub, Portfolio, CV — they should all link to each other. Wherever someone finds you — they should be able to reach everything else instantly."

Zara understood. These weren't just websites — this was a professional network. And she was at the center of it.`,
        },
        sections: [
          {
            heading: "🔗 The Connection Map",
            content: `**Add to your LinkedIn Profile:**
Portfolio website URL — in both About section and Featured section

**Add to your GitHub Bio:**
LinkedIn URL + Portfolio website URL

**Add to your Portfolio Website:**
LinkedIn button + GitHub button + CV download button

**Add to your CV (PDF):**
LinkedIn URL + GitHub URL + Portfolio website URL

**Result:** From anywhere, there's a path to everywhere else!`,
          },
          {
            heading: "📝 Final LinkedIn Post — Course Completion",
            content: `Use this template — fill in your details:

> 2 months ago I knew nothing about AI.
>
> Today I have:
> ✔ A live portfolio website
> ✔ Active LinkedIn with [X] posts
> ✔ GitHub with [X] projects
> ✔ A personal AI project I built myself
> ✔ A professional CV
> ✔ Content package: blog + design + video
> ✔ Personal Prompt Library
>
> I learned: prompt engineering, Canva AI, CapCut AI, GitHub, portfolio building, and how to use AI as a tool — not a shortcut.
>
> This is only the beginning. 🚀
>
> Portfolio: [your website link] | GitHub: [your GitHub link]
>
> #AI #Portfolio #GitHub #Pakistan #StudentLife #Learning #PromptEngineering

**ChatGPT Tip:** Give this template to ChatGPT and say: "Make this more personal — about me: [your story]"`,
          },
          {
            heading: "🚀 What Comes Next",
            content: `**This isn't the end — it's the beginning!**

**Path A: Creator / Content**
Keep growing on LinkedIn
Create AI content for brands or causes
Go deeper with CapCut video creation
Explore AI writing tools more deeply

**Path B: Technical / Developer**
Learn more HTML, CSS, JavaScript
Explore Python basics with AI's help
Build more complex tools on Bolt.new or Lovable
Learn about APIs and automation

**Both paths are valid.** What matters is that you keep learning and keep building.`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try It — Connect Everything!",
          steps: [
            "Add your portfolio website URL to LinkedIn's About section",
            "Add it to LinkedIn's Featured section too",
            "Add LinkedIn + Portfolio links to your GitHub bio",
            "Check that LinkedIn and GitHub buttons in your portfolio point to the right links",
            "Add your portfolio link to your CV PDF — update it",
            "Get ChatGPT to write your final completion post using the template",
            "Publish the post on LinkedIn — this is your biggest LinkedIn moment! 🎉",
          ],
        },
        checklist: [
          "Added portfolio URL to LinkedIn",
          "Added all links to GitHub bio",
          "All buttons in portfolio website are correct",
          "Updated CV with all links",
          "Published final course completion post",
        ],
      },
    ],
    finalChecklist: {
      title: "🎓 Week 7–8 Complete Checklist",
      subtitle: "If all of these are ticked, your 2-month AI course is complete!",
      items: [
        "Built portfolio website with Bolt.new",
        "Deployed live on GitHub Pages — got a real URL",
        "Added portfolio URL to LinkedIn",
        "Added portfolio link to GitHub bio",
        "Added all links to CV",
        "Added Week 5-6 project to portfolio's Projects section",
        "Tested portfolio on phone — looks good on mobile",
        "Published final course completion post on LinkedIn",
      ],
    },
    complete: {
      title: "🎉 Course Complete!",
      desc: "What you've learned in 8 weeks — this is only the beginning. Your journey has just started!",
      back: "← Back to Week 5–6",
    },
  },
};

/* ─── Markdown-lite renderer ─────────────────────────────────── */
function renderContent(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    if (line.startsWith("**") && line.endsWith("**")) {
      return <p key={i} className="text-sm font-bold mt-3 mb-1" style={{ color: "var(--tx)" }}>{line.replace(/\*\*/g, "")}</p>;
    }
    if (line.startsWith("- ") || line.startsWith("* ")) {
      return <li key={i} className="text-sm ml-4 mb-1 list-disc" style={{ color: "var(--tx3)" }} dangerouslySetInnerHTML={{ __html: line.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong style='color:var(--tx2)'>$1</strong>") }} />;
    }
    if (line.startsWith("> ")) {
      return (
        <div key={i} className="my-2 px-3 py-2 rounded-lg text-sm" style={{ background: "var(--bg3)", borderLeft: "3px solid var(--bdr2)", color: "var(--tx3)" }}>
          {line.slice(2)}
        </div>
      );
    }
    if (line.trim() === "") return <div key={i} className="h-2" />;
    return <p key={i} className="text-sm mb-1.5 leading-relaxed" style={{ color: "var(--tx3)" }} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, "<strong style='color:var(--tx2)'>$1</strong>") }} />;
  });
}

/* ─── Page Component ─────────────────────────────────────────── */
export default function Week78GuidePage() {
  const { lang } = useLang();
  const tx = t[lang];
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => setChecked(prev => ({ ...prev, [key]: !prev[key] }));

  const totalFinal = tx.finalChecklist.items.length;
  const doneFinal = tx.finalChecklist.items.filter((item) => checked[`final-${item}`]).length;

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">

      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs mb-6" style={{ color: "var(--tx4)" }}>
        <Link href="/summer-camp" className="hover:underline" style={{ color: "var(--tx3)" }}>{tx.breadcrumb1}</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/summer-camp/week-7-8" className="hover:underline" style={{ color: "var(--tx3)" }}>{tx.breadcrumb2}</Link>
        <ChevronRight className="w-3 h-3" />
        <span style={{ color: "var(--tx2)" }}>{tx.breadcrumb3}</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 px-3 py-1 rounded-full mb-4"
          style={{ background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.2)" }}>
          <BookOpen className="w-3 h-3" />
          {tx.badge}
        </div>
        <h1 className="text-2xl md:text-3xl font-black mb-3 tracking-tight" style={{ color: "var(--tx)" }}>{tx.title}</h1>
        <p className="text-sm leading-relaxed" style={{ color: "var(--tx3)" }}>{tx.subtitle}</p>
      </div>

      {/* How to use */}
      <div className="rounded-2xl p-5 mb-8" style={{ background: "rgba(168,85,247,0.05)", border: "1px solid rgba(168,85,247,0.2)" }}>
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="w-4 h-4 text-purple-400" />
          <p className="text-sm font-bold text-purple-400">{tx.howToUse}</p>
        </div>
        <ol className="space-y-1.5">
          {tx.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--tx3)" }}>
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5"
                style={{ background: "rgba(168,85,247,0.15)", color: "#c084fc" }}>{i + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      {/* Topics */}
      {tx.topics.map((topic) => {
        const topicDone = topic.checklist.filter(c => checked[`${topic.num}-${c}`]).length;
        return (
          <div key={topic.num} className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white shrink-0"
                style={{ background: topic.color }}>
                {topic.num}
              </div>
              <div>
                <h2 className="text-lg font-black" style={{ color: "var(--tx)" }}>
                  {topic.icon} {topic.title}
                </h2>
                <p className="text-[11px]" style={{ color: "var(--tx4)" }}>
                  {topicDone}/{topic.checklist.length} complete
                </p>
              </div>
            </div>

            {/* Story Box */}
            <div className="rounded-2xl p-4 mb-4"
              style={{ background: "var(--bg2)", border: "1px solid var(--bdr)", borderLeftColor: topic.color, borderLeftWidth: "4px" }}>
              <p className="text-xs font-bold mb-2" style={{ color: topic.color }}>{topic.story.heading}</p>
              <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "var(--tx3)" }}>{topic.story.text}</p>
            </div>

            {/* Content Sections */}
            {topic.sections.map((sec, si) => (
              <div key={si} className="rounded-2xl p-4 mb-3" style={{ background: "var(--bg2)", border: "1px solid var(--bdr)" }}>
                <p className="text-sm font-bold mb-3" style={{ color: "var(--tx)" }}>{sec.heading}</p>
                <>{renderContent(sec.content)}</>
              </div>
            ))}

            {/* Try Karo */}
            <div className="rounded-2xl p-5 mb-4"
              style={{ background: `${topic.color}08`, border: `2px solid ${topic.color}30` }}>
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4" style={{ color: topic.color }} />
                <p className="text-sm font-bold" style={{ color: topic.color }}>{topic.tryKaro.heading}</p>
              </div>
              <ol className="space-y-2">
                {topic.tryKaro.steps.map((step, si) => (
                  <li key={si} className="flex items-start gap-3 text-sm" style={{ color: "var(--tx3)" }}>
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 mt-0.5"
                      style={{ background: `${topic.color}20`, color: topic.color }}>
                      {si + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Checklist */}
            <div className="rounded-2xl p-4" style={{ background: "var(--bg3)", border: "1px solid var(--bdr2)" }}>
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-3.5 h-3.5" style={{ color: "var(--tx3)" }} />
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--tx4)" }}>
                  {topicDone}/{topic.checklist.length} ✓
                </p>
              </div>
              <div className="space-y-2">
                {topic.checklist.map((item) => {
                  const key = `${topic.num}-${item}`;
                  const done = !!checked[key];
                  return (
                    <button key={item} onClick={() => toggle(key)}
                      className="w-full flex items-start gap-2.5 text-left transition-opacity"
                      style={{ opacity: done ? 0.6 : 1 }}>
                      {done
                        ? <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-purple-400" />
                        : <Circle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--bdr2)" }} />}
                      <span className="text-sm" style={{ color: done ? "var(--tx4)" : "var(--tx2)", textDecoration: done ? "line-through" : "none" }}>
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 mb-2" style={{ borderBottom: "1px solid var(--bdr)" }} />
          </div>
        );
      })}

      {/* Final Checklist */}
      <div className="rounded-3xl p-6 mb-6" style={{ background: "rgba(168,85,247,0.05)", border: "2px solid rgba(168,85,247,0.3)" }}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-black text-purple-400">{tx.finalChecklist.title}</h3>
          <span className="text-sm font-bold text-purple-400">{doneFinal}/{totalFinal}</span>
        </div>
        <p className="text-xs mb-4" style={{ color: "var(--tx3)" }}>{tx.finalChecklist.subtitle}</p>

        <div className="h-1.5 rounded-full mb-5" style={{ background: "var(--bg3)" }}>
          <div className="h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${(doneFinal / totalFinal) * 100}%`, background: "linear-gradient(90deg, #a855f7, #c084fc)" }} />
        </div>

        <div className="space-y-2.5">
          {tx.finalChecklist.items.map((item) => {
            const key = `final-${item}`;
            const done = !!checked[key];
            return (
              <button key={item} onClick={() => toggle(key)}
                className="w-full flex items-start gap-2.5 text-left transition-all">
                {done
                  ? <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-purple-400" />
                  : <Circle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--bdr2)" }} />}
                <span className="text-sm" style={{ color: done ? "var(--tx4)" : "var(--tx2)", textDecoration: done ? "line-through" : "none" }}>
                  {item}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Course Complete Card */}
      <div className="rounded-3xl p-8 mb-6 text-center"
        style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.12), rgba(251,191,36,0.08))", border: "2px solid rgba(168,85,247,0.35)" }}>
        <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
        <h3 className="text-2xl font-black mb-3" style={{ color: "var(--tx)" }}>{tx.complete.title}</h3>
        <p className="text-sm leading-relaxed max-w-md mx-auto" style={{ color: "var(--tx3)" }}>{tx.complete.desc}</p>
      </div>

      {/* Back nav */}
      <div className="pt-4" style={{ borderTop: "1px solid var(--bdr)" }}>
        <Link href="/summer-camp/week-5-6"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium"
          style={{ color: "var(--tx3)", border: "1px solid var(--bdr)", background: "var(--bg2)" }}>
          {tx.complete.back}
        </Link>
      </div>
    </div>
  );
}
