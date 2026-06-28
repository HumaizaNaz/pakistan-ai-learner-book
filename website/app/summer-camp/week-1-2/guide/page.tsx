"use client";
import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { ChevronRight, CheckCircle2, Circle, Lightbulb, BookOpen, Zap, Target, Users } from "lucide-react";

/* ─── Translation Object ─────────────────────────────────────── */
const t = {
  ur: {
    breadcrumb1: "Summer Camp",
    breadcrumb2: "Week 1–2",
    breadcrumb3: "Study Guide",
    badge: "Self Study Guide · 2–3 Ghante",
    title: "Week 1–2 Complete Study Guide",
    subtitle: "Yeh guide sirf tumhare liye hai. Top se shuru karo, step by step padho, aur har 'Try Karo' task zaroor karo. Koi teacher ki zaroorat nahi!",
    howToUse: "Is Guide Ko Kaise Use Karein?",
    steps: [
      "Har topic ko order mein padho — skip mat karna",
      "Har 'Try Karo' task abhi karo — baad ke liye mat chhorо",
      "Har section ke baad checklist tick karo",
      "Koi cheez samajh na aaye toh topic dobara padho",
    ],
    topics: [
      {
        num: "01",
        icon: "🤖",
        title: "AI Kya Hai?",
        color: "#22c55e",
        story: {
          heading: "📖 Pehle Ek Kahani...",
          text: `Ahmed ek 16 saal ka student hai Lahore mein. Ek din uski ammi ne kaha: "Ahmed, kal mehmaan aa rahe hain, unke liye kuch special banana hai — koi naya Pakistani dish." Ahmed ne apna phone uthaya aur ChatGPT mein likha: "Mujhe ek special Pakistani dish ki recipe chahiye jo mehmaan ke liye ban sake aur jis mein chicken ho." 2 seconds mein ChatGPT ne 5 options de diye complete recipe ke saath. Ahmed ki ammi hairan reh gayin!

Yeh jo ChatGPT ne kiya — yahi AI hai.`,
        },
        sections: [
          {
            heading: "📚 AI Ki Simple Definition",
            content: `**AI (Artificial Intelligence)** ek computer program hai jo insaanon ki tarah:
- Sawalon ke jawab deta hai
- Kuch naya create kar sakta hai (writing, images, code)
- Seekhta hai aur behtar hota jata hai

**Asaan shabd mein:** AI ek bahut smart computer program hai jisne crores kitabein, websites, aur articles parhe hain — isliye woh almost kisi bhi sawaal ka jawab de sakta hai.`,
          },
          {
            heading: "🌍 Tum Pehle Se AI Use Kar Rahe Ho!",
            content: `Yaqeen nahi? Dekho:

| Kya karte ho? | Kaun sa AI? |
|---|---|
| YouTube pe next video suggest hoti hai | YouTube ka AI |
| Google Maps shortest route dikhata hai | Google ka AI |
| WhatsApp auto-correct karta hai | AI |
| TikTok feed mein wahi aata hai jo pasand hai | TikTok ka AI |
| Instagram pe similar photos suggest hoti hain | Meta AI |
| Spam emails automatically filter hoti hain | Gmail ka AI |

**Matlab:** Tum roz AI use karte ho — bas pata nahi tha!`,
          },
          {
            heading: "🔢 AI Ki Teen Qismein",
            content: `**1. Narrow AI** — Sirf ek kaam karta hai
- Misal: Chess khelna, face unlock, spam filter
- Status: Abhi exist karta hai ✅

**2. General AI** — Insaan ki tarah soch sakta hai
- Misal: Koi bhi kaam kar sake independently
- Status: Abhi nahi hai, future mein ❌

**3. Generative AI** — Naya content banata hai
- Misal: ChatGPT (writing), DALL-E (images), Suno (music)
- Status: Abhi exist karta hai ✅ — Yehi tum seekhoge!`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try Karo — Abhi Karo!",
          steps: [
            "chat.openai.com kholо (ya Claude.ai — dono free hain)",
            "Login karo Google account se",
            'Yeh sawaal likho: "Mujhe Urdu mein batao ke AI kya hai — 5 saal ke bachay ko samjhao"',
            "Jawab padho — kaisa laga? Simple hai na?",
            'Ab dobara poocho: "Ab thoda aur detail mein batao, 16 saal ke student ke liye"',
            "Dekho kaise jawab change hua — yahi Prompt Engineering hai!",
          ],
        },
        checklist: [
          "Mujhe pata hai AI kya hai — simple definition yaad hai",
          "Main already AI use kar raha/rahi tha — examples yaad hain",
          "Generative AI kya hai — ChatGPT jaisi cheez",
          "ChatGPT ya Claude pe pehla sawaal pooch liya",
        ],
      },
      {
        num: "02",
        icon: "⚖️",
        title: "ChatGPT, Claude, Gemini — Fark Kya Hai?",
        color: "#3b82f6",
        story: {
          heading: "📖 Teen Teachers Ki Kahani",
          text: `Socho tumhare school mein teen alag alag teachers hain jo sab Urdu padhate hain:
- **Ustad Arif** — bahut detailed explain karta hai, essays likhwata hai, coding bhi janta hai
- **Ustad Bilal** — bahut careful hai, galat nahi bolta, long documents analyse karta hai
- **Ustad Careem** — real-time news janta hai, Google se connected hai, research mein best hai

Tum kaunsa choose karoge? Depends karta hai — kya chahiye! Yehi ChatGPT, Claude, aur Gemini ka farak hai.`,
        },
        sections: [
          {
            heading: "📊 Detailed Comparison",
            content: `| Feature | ChatGPT | Claude | Gemini |
|---|---|---|---|
| **Company** | OpenAI | Anthropic | Google |
| **Free Version** | ✅ Haan | ✅ Haan | ✅ Haan |
| **Best for** | Writing, coding, general | Long docs, careful answers | Real-time info, research |
| **Pakistani Urdu** | Theek | Theek | Theek |
| **Image banana** | DALL-E (paid) | ❌ | ✅ Imagen |
| **Internet access** | ✅ (limited) | ❌ (mostly) | ✅ Haan |`,
          },
          {
            heading: "🎯 Kab Kaunsa Use Karein?",
            content: `**ChatGPT use karo jab:**
- CV ya cover letter likhna ho
- Code likhna ho
- Brainstorming karni ho
- General sawalon ke jawab chahiye hon

**Claude use karo jab:**
- Koi lamba document read/summarize karna ho
- Careful, thoughtful answer chahiye
- Kisi cheez ko detail mein explain karwana ho

**Gemini use karo jab:**
- Latest news ya current events chahiye hon
- Google Drive ya Gmail ke saath kaam karna ho
- Research karni ho

**💡 Pro Tip:** Teeno free hain! Ek hi sawaal teeno se poochho aur compare karo — jo best answer de, woh use karo.`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try Karo — Tino Compare Karo!",
          steps: [
            "Teeno websites kholо: chat.openai.com, claude.ai, gemini.google.com",
            "Teeno mein yahi prompt dalo: \"Mujhe Pakistan ke top 5 IT companies ke baare mein batao\"",
            "Teeno ke jawab compare karo — length, accuracy, style",
            "Apna favorite note karo — kisi copybook mein likh lo",
          ],
        },
        checklist: [
          "ChatGPT, Claude, Gemini — teeno ka account bana liya",
          "Sama prompt teeno pe try kiya",
          "Mujhe pata hai kab kaunsa use karna hai",
          "Apna favorite AI tool choose kar liya",
        ],
      },
      {
        num: "03",
        icon: "🔮",
        title: "AI ka Future — Pakistan Mein Kya Hoga?",
        color: "#f97316",
        story: {
          heading: "📖 Waqt Ki Ek Baat...",
          text: `2010 mein agar koi kehta "main YouTuber banunga" toh log haste. 2015 mein "Social Media Manager" koi job nahi thi. 2020 mein "Crypto Trader" naya concept tha.

2025 mein **AI Engineer, Prompt Engineer, AI Content Creator** — yeh Pakistan mein nayi jobs hain. 2027 mein aur nai jobs hongi jo abhi exist bhi nahi karti.

Tum aaj jo seekh rahe ho — yehi tumhara future banana hai.`,
        },
        sections: [
          {
            heading: "💼 AI Se Jo Jobs Aayengi Pakistan Mein",
            content: `**1. Prompt Engineer**
- Kya karta hai: AI ko sahi instructions deta hai taake behtar results aayein
- Salary: $500–2000/month (remote!)
- Seekhna: Prompt Engineering — yehi is course mein hai!

**2. AI Content Creator**
- Kya karta hai: AI tools se videos, blogs, social media content banata hai
- Salary: Freelance $200–1000/project
- Seekhna: ChatGPT + Canva AI + CapCut AI

**3. No-Code AI Developer**
- Kya karta hai: Bina coding ke AI apps banata hai (Bubble.io, Bolt.new)
- Salary: $300–1500/project
- Seekhna: Week 7–8 mein!

**4. AI Trainer/Evaluator**
- Kya karta hai: AI ke jawab check karta hai, galatiyon ko theek karta hai
- Salary: Part-time $10–20/hour
- Seekhna: Prompt Engineering + quality sense`,
          },
          {
            heading: "🇵🇰 Pakistan Mein AI Ka Scene",
            content: `**Acha news:** Pakistan mein AI education abhi bahut kam hai. Jo log abhi seekh rahe hain woh aage hain.

**Current situation:**
- Karachi, Lahore, Islamabad mein AI startups ban rahe hain
- Fiverr, Upwork pe Pakistani freelancers AI tools se kaam le rahe hain
- NUST, LUMS, IBA mein AI courses start hue hain
- Government "Digital Pakistan" initiative — AI ko priority

**Tumhara opportunity:** Abhi jo seekh rahe ho — 2 saal mein ye skills premium hogi Pakistan mein.`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try Karo — Apna AI Future Socho!",
          steps: [
            'ChatGPT mein yeh prompt dalo: "Main ek 16 saal ka Pakistani student hoon jo AI seekh raha hoon. Mujhe 5 realistic AI career options batao jo 2027 tak Pakistan mein available hogi, salary ke saath"',
            "Jawab padho — kaunsi job most interesting lagi?",
            "LinkedIn pe search karo: \"AI jobs Pakistan\" — dekho kya openings hain",
            'Apni copybook mein likho: "Main [job naam] banana chahta/chahti hoon kyunki [reason]"',
          ],
        },
        checklist: [
          "Mujhe pata hai AI se kaunsi jobs aayengi",
          "Pakistan mein AI ka scene samajh aa gaya",
          "Apna preferred AI career think kar liya",
          "LinkedIn pe AI jobs search kar li",
        ],
      },
      {
        num: "04",
        icon: "✍️",
        title: "Prompt Engineering — AI Se Sahi Kaam Kaise Lo",
        color: "#a855f7",
        story: {
          heading: "📖 Naya Kaam Wali Kahani",
          text: `Socho tumne ek naya kaam rakhा hai — woh bahut capable hai lekin tumhe clearly batana hoga kya karna hai.

**Tum:** "Kuch likho."
**Kaam wala:** *confused* — Kya? Kiske liye? Kitna? Kaisa?

**Tum:** "Ek formal email likho Ahmed sahab ko, main unhe interview ke liye invite kar raha hoon Monday 10 baje, Company HR Manager ki taraf se."
**Kaam wala:** *perfecto email* ✅

AI bilkul isi tarah kaam karta hai. Jitna clear instruction, utna behtar result.`,
        },
        sections: [
          {
            heading: "❌ Bure Prompts vs ✅ Aache Prompts",
            content: `| Bura Prompt | Acha Prompt |
|---|---|
| "Essay likho" | "Climate change pe 500 words ka essay likho, 16 saal ke student ke liye, simple Urdu mein, 3 paragraphs mein" |
| "CV banao" | "Mera professional CV banao. Naam: Sara Ahmed, 17 saal, Karachi. Skills: AI tools, Canva, basic coding. Education: Matric 2024. Goal: IT field" |
| "Translate karo" | "Yeh paragraph formal Urdu mein translate karo, business letter style mein" |
| "Idea do" | "Mujhe 10 unique YouTube channel ideas do jo Pakistani teenagers ke liye hon aur AI tools use karen" |`,
          },
          {
            heading: "🔑 RTCF Formula — Perfect Prompt Ka Secret",
            content: `Har acha prompt mein 4 cheezein hoti hain:

**R — ROLE** (Tu kaun hai?)
> "Tu ek professional career counselor hai jo Pakistani students ko guide karta hai..."

**T — TASK** (Kya karna hai?)
> "...mujhe ek study plan banao..."

**C — CONTEXT** (Background kya hai?)
> "...Main 17 saal ka hoon, ICS kar raha hoon, computer science mein career banana chahta hoon..."

**F — FORMAT** (Kaise chahiye?)
> "...bullet points mein, 1 hafte ka plan, easy Urdu mein"

**Complete Prompt:**
> "Tu ek professional career counselor hai jo Pakistani students ko guide karta hai. Mujhe ek study plan banao. Main 17 saal ka hoon, ICS kar raha hoon, computer science mein career banana chahta hoon. Bullet points mein, 1 hafte ka plan, easy Urdu mein."`,
          },
          {
            heading: "💡 Advanced Tips — Pro Bano",
            content: `**1. Iterate karo (Refine karte raho)**
Pehla jawab perfect nahi hoga. Phir kaho:
- "Thoda aur detail mein batao"
- "Simple karo — 10 saal ke bachay ko samjhao"
- "Is part ko change karo: [part]"

**2. Examples do**
> "Mujhe ek LinkedIn bio likhna hai. Yeh ek example hai jaise main chahta hoon: [example paste karo]"

**3. Role play karo**
> "Tu mera mentor hai. Main tumse career advice lete hoon."

**4. Length control karo**
> "100 words se zyada mat likhna" ya "Minimum 500 words likhna"`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try Karo — RTCF Formula Practice!",
          steps: [
            "Copybook mein RTCF formula likho aur apna khud ka prompt banao",
            "Apne baare mein ek CV prompt banao RTCF se: Role (career expert), Task (CV banana), Context (tumhari details), Format (professional, 1 page)",
            "ChatGPT ya Claude mein submit karo",
            "Result dekho — kya acha laga? Kya change karna chahoge?",
            "Ek baar refine karo — kuch add karo ya change karo aur dobara bhejo",
            "Final version Google Docs mein save karo",
          ],
        },
        checklist: [
          "RTCF formula yaad kar liya",
          "Apna CV AI se banwa liya",
          "Ek prompt ko 2–3 baar refine kiya",
          "Bure aur aache prompt ka farak samajh aaya",
        ],
      },
      {
        num: "05",
        icon: "🪪",
        title: "LinkedIn + GitHub — Tumhari Professional Identity",
        color: "#06b6d4",
        story: {
          heading: "📖 Interview Ka Scene",
          text: `Sara ka interview hai ek tech company mein. HR manager kehta hai: "Apna kaam dikhao."

Sara #1 (bina profiles ke): "Main CV layi hoon..." *awkward silence*
Sara #2 (LinkedIn + GitHub ke saath): "Zaroor! Yeh mera LinkedIn hai, yahan mere projects hain, aur GitHub pe mera code hai." *HR impressed!*

2025 mein LinkedIn + GitHub tumhari **digital identity** hai. Degree se pehle yeh dekhte hain.`,
        },
        sections: [
          {
            heading: "🔗 LinkedIn — Step by Step Setup",
            content: `**Step 1: Account Banao**
1. linkedin.com kholо
2. "Join now" pe click karo
3. Google account se sign up karo (easy!)
4. Apna real naam daalo

**Step 2: Profile Complete Karo**
1. Professional photo upload karo (clean background, smiling)
2. **Headline likhо:** "AI Learner | Future Tech Professional | Class 11 | Karachi"
3. **Location:** Karachi, Pakistan (ya apna sheher)

**Step 3: About Section — AI Se Likhwao**
ChatGPT mein yeh prompt dalo:
> "Mera naam [naam] hai, main [saal] saal ka Pakistani student hoon [sheher] mein. Main AI aur technology seekh raha hoon. Mujhe ek engaging LinkedIn About section likho — 3 short paragraphs, professional lekin friendly tone, English mein."

**Step 4: Skills Add Karo**
- ChatGPT, Claude AI, Prompt Engineering, Canva, Microsoft Office

**Step 5: Pehli Post Karo!**
> "Aaj maine AI learning start ki! Yeh Summer Camp mein pehla din hai. #AI #Learning #Pakistan #StudentLife"`,
          },
          {
            heading: "🐙 GitHub — Step by Step Setup",
            content: `**GitHub kya hai?**
GitHub woh jagah hai jahan developers apna code share karte hain. Yeh tumhara **project portfolio** hai — employers dekh sakte hain tumne kya banaya.

**Step 1: Account Banao**
1. github.com kholо
2. "Sign up" pe click karo
3. Username choose karo: apna real naam use karo (jaise sara-ahmed ya saraahmed)
4. Email aur password set karo

**Step 2: Profile Complete Karo**
1. Profile photo add karo (same jo LinkedIn pe hai)
2. Bio likhо: "AI Learner | Pakistani Student | Building my future with AI 🚀"
3. Location: Pakistan add karo

**Step 3: README Banao — AI Se**
ChatGPT mein:
> "Mere liye GitHub profile README likho. Naam [naam], Pakistani student, AI seekh raha hoon, interests: technology, coding, AI tools. Fun fact bhi add karo. GitHub markdown format mein."

**Step 4: LinkedIn Link Add Karo**
Profile mein LinkedIn URL add karo — dono connect ho jayein`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try Karo — Dono Profiles Banao!",
          steps: [
            "LinkedIn account banao — real naam aur photo ke saath",
            "ChatGPT se apna LinkedIn About section likhwao (RTCF formula use karo!)",
            "LinkedIn pe pehli post publish karo — \"Maine aaj AI learning start ki!\"",
            "GitHub account banao — professional username choose karo",
            "ChatGPT se README likhwao aur upload karo",
            "LinkedIn par GitHub profile ka link add karo",
            "Dono profile links apni copybook mein note karo",
          ],
        },
        checklist: [
          "LinkedIn profile live hai — photo aur headline ke saath",
          "LinkedIn pe pehli post publish ki",
          "GitHub account bana liya",
          "GitHub README AI se likhwaya aur upload kiya",
          "Dono profiles aapas mein linked hain",
        ],
      },
    ],
    finalChecklist: {
      title: "🎉 Week 1–2 Complete Checklist",
      subtitle: "Agar yeh sab tick hai toh tum Week 1–2 complete kar chuke ho!",
      items: [
        "AI kya hai — mujhe pata hai aur kisi ko bhi samjha sakta/sakti hoon",
        "ChatGPT, Claude, Gemini — teeno try kiye aur pata hai kab kaunsa use karna hai",
        "AI future ke baare mein socha — apna career direction clear hai",
        "RTCF formula yaad hai — AI se professional prompts likh sakta/sakti hoon",
        "Apna CV AI se banaya",
        "LinkedIn profile live hai",
        "GitHub account bana liya",
        "Pehli LinkedIn post publish ki",
      ],
    },
    nextWeek: {
      title: "⏭️ Next: Week 3–4",
      desc: "Prompt Mastery + Content Creation — Canva AI, CapCut AI, aur advanced prompting seekhenge!",
      btn: "Week 3–4 Dekho →",
    },
  },

  en: {
    breadcrumb1: "Summer Camp",
    breadcrumb2: "Week 1–2",
    breadcrumb3: "Study Guide",
    badge: "Self Study Guide · 2–3 Hours",
    title: "Week 1–2 Complete Study Guide",
    subtitle: "This guide is just for you. Start from the top, read step by step, and make sure to do every 'Try It' task. No teacher needed!",
    howToUse: "How to Use This Guide",
    steps: [
      "Read every topic in order — don't skip anything",
      "Do every 'Try It' task right now — don't leave it for later",
      "Tick the checklist after each section",
      "If something isn't clear, read that section again",
    ],
    topics: [
      {
        num: "01",
        icon: "🤖",
        title: "What is AI?",
        color: "#22c55e",
        story: {
          heading: "📖 First, a Story...",
          text: `Ahmed is a 16-year-old student from Lahore. One day his mother said: "Ahmed, guests are coming tomorrow — make something special, a new Pakistani dish." Ahmed picked up his phone and typed into ChatGPT: "Give me a special Pakistani recipe I can make for guests using chicken." In 2 seconds, ChatGPT gave 5 options with complete recipes. Ahmed's mother was amazed!

What ChatGPT just did — that is AI.`,
        },
        sections: [
          {
            heading: "📚 Simple Definition of AI",
            content: `**AI (Artificial Intelligence)** is a computer program that can, like humans:
- Answer questions
- Create new things (writing, images, code)
- Learn and get better over time

**In simple words:** AI is an incredibly smart computer program that has read billions of books, websites, and articles — which is why it can answer almost any question.`,
          },
          {
            heading: "🌍 You Already Use AI!",
            content: `Don't believe it? Look:

| What you do | Which AI? |
|---|---|
| YouTube suggests your next video | YouTube's AI |
| Google Maps finds the fastest route | Google's AI |
| WhatsApp auto-corrects your typing | AI |
| TikTok shows you what you love | TikTok's AI |
| Instagram suggests similar photos | Meta AI |
| Spam emails automatically filtered | Gmail's AI |

**That means:** You already use AI every day — you just didn't know!`,
          },
          {
            heading: "🔢 Three Types of AI",
            content: `**1. Narrow AI** — Does only one task
- Example: Chess, face unlock, spam filter
- Status: Exists now ✅

**2. General AI** — Thinks like a human
- Example: Can do any task independently
- Status: Doesn't exist yet, future ❌

**3. Generative AI** — Creates new content
- Example: ChatGPT (writing), DALL-E (images), Suno (music)
- Status: Exists now ✅ — This is what you'll learn!`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try It — Do It Right Now!",
          steps: [
            "Open chat.openai.com (or Claude.ai — both are free)",
            "Log in with your Google account",
            'Type this question: "Explain what AI is — as if you\'re talking to a 5-year-old"',
            "Read the answer — isn't it easy to understand?",
            'Now ask again: "Now explain in more detail for a 16-year-old student"',
            "See how the answer changed — this is Prompt Engineering!",
          ],
        },
        checklist: [
          "I know what AI is — I remember the simple definition",
          "I was already using AI — I remember the examples",
          "I know what Generative AI is — things like ChatGPT",
          "I asked my first question on ChatGPT or Claude",
        ],
      },
      {
        num: "02",
        icon: "⚖️",
        title: "ChatGPT, Claude, Gemini — What's the Difference?",
        color: "#3b82f6",
        story: {
          heading: "📖 The Three Teachers Story",
          text: `Imagine your school has three different teachers who all teach English:
- **Mr. Arif** — explains things in great detail, gives essays, knows coding too
- **Mr. Bilal** — very careful, never says wrong things, best at analyzing long documents
- **Mr. Kareem** — knows real-time news, connected to Google, best at research

Which would you choose? Depends on what you need! That's the difference between ChatGPT, Claude, and Gemini.`,
        },
        sections: [
          {
            heading: "📊 Detailed Comparison",
            content: `| Feature | ChatGPT | Claude | Gemini |
|---|---|---|---|
| **Company** | OpenAI | Anthropic | Google |
| **Free Version** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Best for** | Writing, coding, general | Long docs, careful answers | Real-time info, research |
| **Image creation** | DALL-E (paid) | ❌ | ✅ Imagen |
| **Internet access** | ✅ (limited) | ❌ (mostly) | ✅ Yes |`,
          },
          {
            heading: "🎯 When to Use Which?",
            content: `**Use ChatGPT when:**
- Writing a CV or cover letter
- Writing code
- Brainstorming ideas
- Need answers to general questions

**Use Claude when:**
- Need to read/summarize a long document
- Need a careful, thoughtful answer
- Want something explained in detail

**Use Gemini when:**
- Need latest news or current events
- Working with Google Drive or Gmail
- Doing research

**💡 Pro Tip:** All three are free! Ask all three the same question and compare — use whichever gives the best answer.`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try It — Compare All Three!",
          steps: [
            "Open all three: chat.openai.com, claude.ai, gemini.google.com",
            "Give all three this prompt: \"Tell me about the top 5 IT companies in Pakistan\"",
            "Compare all three answers — length, accuracy, style",
            "Note your favorite — write it in your notebook",
          ],
        },
        checklist: [
          "Created accounts on all three — ChatGPT, Claude, Gemini",
          "Tried the same prompt on all three",
          "I know when to use which one",
          "I've chosen my favorite AI tool",
        ],
      },
      {
        num: "03",
        icon: "🔮",
        title: "The Future of AI — What's Coming to Pakistan?",
        color: "#f97316",
        story: {
          heading: "📖 A Story About Time...",
          text: `In 2010, if someone said "I'll become a YouTuber" — people would laugh. In 2015, "Social Media Manager" wasn't a job. In 2020, "Crypto Trader" was a new concept.

In 2025, **AI Engineer, Prompt Engineer, AI Content Creator** are new jobs in Pakistan. By 2027 there will be even more jobs that don't even exist yet.

What you're learning today — this is what will build your future.`,
        },
        sections: [
          {
            heading: "💼 AI Jobs Coming to Pakistan",
            content: `**1. Prompt Engineer**
- What they do: Give AI the right instructions for better results
- Salary: $500–2000/month (remote!)
- How to learn: Prompt Engineering — it's in this course!

**2. AI Content Creator**
- What they do: Create videos, blogs, social content using AI tools
- Salary: Freelance $200–1000/project
- How to learn: ChatGPT + Canva AI + CapCut AI

**3. No-Code AI Developer**
- What they do: Build AI apps without coding (Bubble.io, Bolt.new)
- Salary: $300–1500/project
- How to learn: Week 7–8!

**4. AI Trainer/Evaluator**
- What they do: Review AI answers, fix mistakes
- Salary: Part-time $10–20/hour
- How to learn: Prompt Engineering + quality sense`,
          },
          {
            heading: "🇵🇰 AI Scene in Pakistan",
            content: `**Good news:** AI education in Pakistan is still very limited. People learning it now are ahead of everyone else.

**Current situation:**
- AI startups are growing in Karachi, Lahore, Islamabad
- Pakistani freelancers are using AI tools on Fiverr, Upwork
- NUST, LUMS, IBA have started AI courses
- Government "Digital Pakistan" initiative — AI is a priority

**Your opportunity:** What you're learning now — these skills will be premium in Pakistan in 2 years.`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try It — Think About Your AI Future!",
          steps: [
            'Enter this prompt in ChatGPT: "I am a 16-year-old Pakistani student learning AI. Give me 5 realistic AI career options that will be available in Pakistan by 2027, with salaries"',
            "Read the answer — which job sounds most interesting?",
            "Search on LinkedIn: \"AI jobs Pakistan\" — see what openings are there",
            'Write in your notebook: "I want to become a [job name] because [reason]"',
          ],
        },
        checklist: [
          "I know which jobs AI will create",
          "I understand the AI scene in Pakistan",
          "I've thought about my preferred AI career",
          "I searched for AI jobs on LinkedIn",
        ],
      },
      {
        num: "04",
        icon: "✍️",
        title: "Prompt Engineering — How to Get the Best from AI",
        color: "#a855f7",
        story: {
          heading: "📖 The New Employee Story",
          text: `Imagine you hired a new employee — they're very capable but you need to tell them clearly what to do.

**You:** "Write something."
**Employee:** *confused* — What? For whom? How much? What style?

**You:** "Write a formal email to Mr. Ahmed inviting him for an interview on Monday at 10am, from the Company HR Manager."
**Employee:** *perfect email* ✅

AI works exactly the same way. The clearer the instruction, the better the result.`,
        },
        sections: [
          {
            heading: "❌ Bad Prompts vs ✅ Good Prompts",
            content: `| Bad Prompt | Good Prompt |
|---|---|
| "Write an essay" | "Write a 500-word essay about climate change for a 16-year-old student, simple English, 3 paragraphs" |
| "Make a CV" | "Create my professional CV. Name: Sara Ahmed, 17 years old, Karachi. Skills: AI tools, Canva, basic coding. Education: Matric 2024. Goal: IT field" |
| "Translate this" | "Translate this paragraph into formal Urdu, business letter style" |
| "Give me ideas" | "Give me 10 unique YouTube channel ideas for Pakistani teenagers who use AI tools" |`,
          },
          {
            heading: "🔑 RTCF Formula — The Secret to Perfect Prompts",
            content: `Every good prompt has 4 things:

**R — ROLE** (Who are you?)
> "You are a professional career counselor who guides Pakistani students..."

**T — TASK** (What needs to be done?)
> "...create a study plan for me..."

**C — CONTEXT** (What's the background?)
> "...I am 17, studying ICS, want to build a career in computer science..."

**F — FORMAT** (How should it look?)
> "...in bullet points, 1-week plan, easy English"

**Complete Prompt:**
> "You are a professional career counselor who guides Pakistani students. Create a study plan for me. I am 17, studying ICS, want to build a career in computer science. In bullet points, 1-week plan, easy English."`,
          },
          {
            heading: "💡 Advanced Tips — Go Pro",
            content: `**1. Iterate (Keep refining)**
The first answer won't be perfect. Then say:
- "Tell me in more detail"
- "Make it simpler — explain like I'm 10"
- "Change this part: [part]"

**2. Give examples**
> "I need to write a LinkedIn bio. Here's an example of what I want: [paste example]"

**3. Role play**
> "You are my mentor. I'm coming to you for career advice."

**4. Control length**
> "Don't write more than 100 words" or "Write at least 500 words"`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try It — RTCF Formula Practice!",
          steps: [
            "Write the RTCF formula in your notebook and build your own prompt",
            "Build a CV prompt using RTCF: Role (career expert), Task (build CV), Context (your details), Format (professional, 1 page)",
            "Submit it to ChatGPT or Claude",
            "See the result — what did you like? What would you change?",
            "Refine it once — add or change something and send again",
            "Save the final version in Google Docs",
          ],
        },
        checklist: [
          "I've memorized the RTCF formula",
          "I created my CV using AI",
          "I refined one prompt 2–3 times",
          "I understand the difference between bad and good prompts",
        ],
      },
      {
        num: "05",
        icon: "🪪",
        title: "LinkedIn + GitHub — Your Professional Identity",
        color: "#06b6d4",
        story: {
          heading: "📖 The Interview Scene",
          text: `Sara has an interview at a tech company. The HR manager says: "Show us your work."

Sara #1 (without profiles): "I brought my CV..." *awkward silence*
Sara #2 (with LinkedIn + GitHub): "Of course! Here's my LinkedIn, my projects are here, and my code is on GitHub." *HR impressed!*

In 2025, LinkedIn + GitHub is your **digital identity**. They look at this before your degree.`,
        },
        sections: [
          {
            heading: "🔗 LinkedIn — Step by Step Setup",
            content: `**Step 1: Create Account**
1. Open linkedin.com
2. Click "Join now"
3. Sign up with Google account (easy!)
4. Enter your real name

**Step 2: Complete Profile**
1. Upload a professional photo (clean background, smiling)
2. **Write Headline:** "AI Learner | Future Tech Professional | Class 11 | Karachi"
3. **Location:** Karachi, Pakistan (or your city)

**Step 3: About Section — Get AI to Write It**
Enter this prompt in ChatGPT:
> "My name is [name], I am a [age]-year-old Pakistani student from [city]. I am learning AI and technology. Write an engaging LinkedIn About section for me — 3 short paragraphs, professional but friendly tone, in English."

**Step 4: Add Skills**
- ChatGPT, Claude AI, Prompt Engineering, Canva, Microsoft Office

**Step 5: Make Your First Post!**
> "Today I started my AI learning journey! This is day one of my Summer Camp. #AI #Learning #Pakistan #StudentLife"`,
          },
          {
            heading: "🐙 GitHub — Step by Step Setup",
            content: `**What is GitHub?**
GitHub is where developers share their code. It's your **project portfolio** — employers can see what you've built.

**Step 1: Create Account**
1. Open github.com
2. Click "Sign up"
3. Choose username: use your real name (like sara-ahmed or saraahmed)
4. Set email and password

**Step 2: Complete Profile**
1. Add profile photo (same one as LinkedIn)
2. Write bio: "AI Learner | Pakistani Student | Building my future with AI 🚀"
3. Add location: Pakistan

**Step 3: Create README — With AI Help**
In ChatGPT:
> "Write a GitHub profile README for me. Name [name], Pakistani student, learning AI, interests: technology, coding, AI tools. Include a fun fact too. Write in GitHub markdown format."

**Step 4: Add LinkedIn Link**
Add your LinkedIn URL to your profile — connect both`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try It — Build Both Profiles!",
          steps: [
            "Create your LinkedIn account — with real name and photo",
            "Use ChatGPT to write your LinkedIn About section (use RTCF formula!)",
            "Publish your first post on LinkedIn — \"Today I started my AI learning journey!\"",
            "Create your GitHub account — choose a professional username",
            "Get ChatGPT to write your README and upload it",
            "Add your GitHub profile link to LinkedIn",
            "Note both profile links in your notebook",
          ],
        },
        checklist: [
          "LinkedIn profile is live — with photo and headline",
          "Published first post on LinkedIn",
          "Created GitHub account",
          "Got AI to write GitHub README and uploaded it",
          "Both profiles are linked to each other",
        ],
      },
    ],
    finalChecklist: {
      title: "🎉 Week 1–2 Complete Checklist",
      subtitle: "If all of these are ticked, you've completed Week 1–2!",
      items: [
        "What AI is — I know and can explain it to anyone",
        "ChatGPT, Claude, Gemini — tried all three, know when to use which",
        "Thought about AI future — my career direction is clear",
        "RTCF formula memorized — can write professional prompts with AI",
        "Built my CV using AI",
        "LinkedIn profile is live",
        "GitHub account created",
        "Published first LinkedIn post",
      ],
    },
    nextWeek: {
      title: "⏭️ Next: Week 3–4",
      desc: "Prompt Mastery + Content Creation — Canva AI, CapCut AI, and advanced prompting!",
      btn: "Go to Week 3–4 →",
    },
  },
};

/* ─── Markdown-lite renderer ─────────────────────────────────── */
function renderContent(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    if (line.startsWith("| ") || line.startsWith("|---")) return null;
    if (line.startsWith("**") && line.endsWith("**")) {
      return <p key={i} className="text-sm font-bold mt-3 mb-1" style={{ color: "var(--tx)" }}>{line.replace(/\*\*/g, "")}</p>;
    }
    if (line.startsWith("- ") || line.startsWith("* ")) {
      return <li key={i} className="text-sm ml-4 mb-1 list-disc" style={{ color: "var(--tx3)" }} dangerouslySetInnerHTML={{ __html: line.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong style='color:var(--tx2)'>$1</strong>") }} />;
    }
    if (line.trim() === "") return <div key={i} className="h-2" />;
    return <p key={i} className="text-sm mb-1.5 leading-relaxed" style={{ color: "var(--tx3)" }} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, "<strong style='color:var(--tx2)'>$1</strong>") }} />;
  });
}

function renderTable(text: string) {
  const lines = text.split("\n").filter(l => l.startsWith("|"));
  if (lines.length < 2) return null;
  const headers = lines[0].split("|").filter(c => c.trim());
  const rows = lines.slice(2).map(l => l.split("|").filter(c => c.trim()));
  return (
    <div className="overflow-x-auto rounded-xl mb-4" style={{ border: "1px solid var(--bdr)" }}>
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: "var(--bg3)" }}>
            {headers.map((h, i) => (
              <th key={i} className="px-3 py-2.5 text-left text-xs font-semibold" style={{ color: "var(--tx)" }}
                dangerouslySetInnerHTML={{ __html: h.trim().replace(/\*\*(.*?)\*\*/g, "$1") }} />
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderTop: "1px solid var(--bdr)", background: i % 2 === 0 ? "var(--bg2)" : "var(--bg3)" }}>
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2" style={{ color: "var(--tx3)" }}
                  dangerouslySetInnerHTML={{ __html: cell.trim().replace(/\*\*(.*?)\*\*/g, "<strong style='color:var(--tx2)'>$1</strong>") }} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderSection(content: string) {
  const hasTable = content.includes("| ");
  if (hasTable) {
    const parts = content.split(/(?=\|)/);
    return (
      <>
        {renderContent(parts[0])}
        {renderTable(content)}
        {parts.length > 1 && renderContent(parts.slice(1).join("").replace(/^\|.*\n/gm, ""))}
      </>
    );
  }
  return <>{renderContent(content)}</>;
}

/* ─── Page Component ─────────────────────────────────────────── */
export default function Week12GuidePage() {
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
        <Link href="/summer-camp/week-1-2" className="hover:underline" style={{ color: "var(--tx3)" }}>{tx.breadcrumb2}</Link>
        <ChevronRight className="w-3 h-3" />
        <span style={{ color: "var(--tx2)" }}>{tx.breadcrumb3}</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-green-400 px-3 py-1 rounded-full mb-4"
          style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}>
          <BookOpen className="w-3 h-3" />
          {tx.badge}
        </div>
        <h1 className="text-2xl md:text-3xl font-black mb-3 tracking-tight" style={{ color: "var(--tx)" }}>{tx.title}</h1>
        <p className="text-sm leading-relaxed" style={{ color: "var(--tx3)" }}>{tx.subtitle}</p>
      </div>

      {/* How to use */}
      <div className="rounded-2xl p-5 mb-8" style={{ background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.2)" }}>
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="w-4 h-4 text-green-400" />
          <p className="text-sm font-bold text-green-400">{tx.howToUse}</p>
        </div>
        <ol className="space-y-1.5">
          {tx.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--tx3)" }}>
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5"
                style={{ background: "rgba(34,197,94,0.15)", color: "#4ade80" }}>{i + 1}</span>
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
            {/* Topic Header */}
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
              style={{ background: "var(--bg2)", borderLeft: `4px solid ${topic.color}`, border: `1px solid var(--bdr)`, borderLeftColor: topic.color, borderLeftWidth: "4px" }}>
              <p className="text-xs font-bold mb-2" style={{ color: topic.color }}>{topic.story.heading}</p>
              <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "var(--tx3)" }}>{topic.story.text}</p>
            </div>

            {/* Content Sections */}
            {topic.sections.map((sec, si) => (
              <div key={si} className="rounded-2xl p-4 mb-3" style={{ background: "var(--bg2)", border: "1px solid var(--bdr)" }}>
                <p className="text-sm font-bold mb-3" style={{ color: "var(--tx)" }}>{sec.heading}</p>
                {renderSection(sec.content)}
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
                        ? <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-green-400" />
                        : <Circle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--bdr2)" }} />}
                      <span className="text-sm" style={{ color: done ? "var(--tx4)" : "var(--tx2)", textDecoration: done ? "line-through" : "none" }}>
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="mt-8 mb-2" style={{ borderBottom: "1px solid var(--bdr)" }} />
          </div>
        );
      })}

      {/* Final Checklist */}
      <div className="rounded-3xl p-6 mb-6" style={{ background: "rgba(34,197,94,0.05)", border: "2px solid rgba(34,197,94,0.3)" }}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-black text-green-400">{tx.finalChecklist.title}</h3>
          <span className="text-sm font-bold text-green-400">{doneFinal}/{totalFinal}</span>
        </div>
        <p className="text-xs mb-4" style={{ color: "var(--tx3)" }}>{tx.finalChecklist.subtitle}</p>

        {/* Progress bar */}
        <div className="h-1.5 rounded-full mb-5" style={{ background: "var(--bg3)" }}>
          <div className="h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${(doneFinal / totalFinal) * 100}%`, background: "linear-gradient(90deg, #22c55e, #4ade80)" }} />
        </div>

        <div className="space-y-2.5">
          {tx.finalChecklist.items.map((item) => {
            const key = `final-${item}`;
            const done = !!checked[key];
            return (
              <button key={item} onClick={() => toggle(key)}
                className="w-full flex items-start gap-2.5 text-left transition-all">
                {done
                  ? <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-green-400" />
                  : <Circle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--bdr2)" }} />}
                <span className="text-sm" style={{ color: done ? "var(--tx4)" : "var(--tx2)", textDecoration: done ? "line-through" : "none" }}>
                  {item}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Next Week */}
      <div className="rounded-2xl p-5 flex items-center justify-between gap-4" style={{ background: "var(--bg2)", border: "1px solid var(--bdr)" }}>
        <div>
          <p className="text-sm font-bold mb-1" style={{ color: "var(--tx)" }}>{tx.nextWeek.title}</p>
          <p className="text-xs" style={{ color: "var(--tx3)" }}>{tx.nextWeek.desc}</p>
        </div>
        <Link href="/summer-camp/week-3-4"
          className="shrink-0 px-4 py-2 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
          style={{ background: "#22c55e" }}>
          {tx.nextWeek.btn}
        </Link>
      </div>

    </div>
  );
}
