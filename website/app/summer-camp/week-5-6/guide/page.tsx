"use client";
import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { ChevronRight, CheckCircle2, Circle, Lightbulb, BookOpen, Zap, Target } from "lucide-react";

/* ─── Translation Object ─────────────────────────────────────── */
const t = {
  ur: {
    breadcrumb1: "Summer Camp",
    breadcrumb2: "Week 5–6",
    breadcrumb3: "Study Guide",
    badge: "Self Study Guide · 2–3 Ghante",
    title: "Week 5–6 Complete Study Guide",
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
        icon: "💡",
        title: "Personal Project Kya Hota Hai?",
        color: "#f97316",
        story: {
          heading: "📖 Pehle Ek Kahani...",
          text: `Interview mein do students baithay hain. Dono ki education same hai. Dono kehte hain: "Mujhe AI aata hai."

HR manager ne pehle student se kaha: "Kuch dikhao." Pehle ne ek printed CV nikala.

Doosre student ne phone uthaya: "Yeh mera GitHub hai — ismein mera project hai, yeh meri LinkedIn post hai jis mein 200 likes aaye, aur yeh woh AI tool hai jo maine khud banaya."

HR ne second student ko hi hire kiya.

Project proof hai — ke tum sirf baatein nahi karte, kaam bhi karte ho.`,
        },
        sections: [
          {
            heading: "📚 Personal Project Ki Types",
            content: `Kaunsa bhi project sahi hai — bus genuine hona chahiye:

**AI Chatbot**
Ek chatbot jo tumhare favourite sport ya hobby ke baare mein sawal jawab kare
Tools: ChatGPT API ya Bolt.new

**Content Series**
10 LinkedIn posts ya blog series kisi pasandida topic pe
Tools: ChatGPT + Canva AI

**Research Report**
AI se banaya hua professional report kisi topic pe
Tools: ChatGPT + Gamma.app

**Creative Project**
AI se bani short story, poetry collection, ya artwork series
Tools: ChatGPT + Canva

**Tool / Template**
Ek prompt library ya template set jo doosre bhi use kar sakein
Tools: ChatGPT + Google Docs

**Presentation**
Gamma.app se banaya professional slide deck kisi interesting topic pe
Tools: Gamma.app + ChatGPT`,
          },
          {
            heading: "🔑 Acha Personal Project — 3 Zaroori Rules",
            content: `**Rule 1 — Genuine Interest**
Kisi aisi cheez ke baare mein ho jisme tumhara genuinely dil lage — jo impressive lage woh nahi.
> Agar cricket boring lagta hai toh cricket project mat banao. Jo topic tum ghanton discuss kar sako — woh choose karo.

**Rule 2 — Deliverable**
Kuch jo tum dikha sako, link share kar sako.
> CV mein "maine AI project banaya" likhne se kuch nahi hota. "Yeh dekho: [link]" — yeh kaam karta hai.

**Rule 3 — GitHub Pe Hona**
Document, PDF, image collection — koi bhi format chalti hai. Bas GitHub pe honi chahiye.
> GitHub free hai. Agar project GitHub pe nahi hai toh woh exist nahi karta professionally.`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try Karo — Abhi Karo!",
          steps: [
            "3 topics likho jin mein tumhara genuinely dil lagta ho (koi bhi — cricket, fashion, cooking, gaming)",
            "Har topic ke liye ek sentence likho: 'Main [project type] bana sakta/sakti hoon [tool] se'",
            "Apna favourite choose karo — yeh tumhara Week 5-6 project hai",
            "ChatGPT mein yeh prompt dalo: 'Main [topic] pe ek [project type] banana chahta/chahti hoon. Mujhe ek simple project plan do — kya banana hai, kaunse tools, aur final deliverable kya hoga'",
            "Plan apni copybook mein likho — ab tumhare paas direction hai!",
          ],
        },
        checklist: [
          "3 genuine interest topics likhe",
          "Apna final project topic choose kar liya",
          "ChatGPT se project plan banwaya",
          "Samajh aaya project ko GitHub pe kyon hona chahiye",
        ],
      },
      {
        num: "02",
        icon: "🎯",
        title: "Project Choose Karo: Interest + AI",
        color: "#22c55e",
        story: {
          heading: "📖 Bilal Ki Kahani...",
          text: `Bilal ne socha: "Main ek AI project banana chahta hoon lekin pata nahi kya banao."

Teacher ne kaha: "Tumhara favourite topic kya hai?"

"Cricket."

"Toh phir cricket pe project banao."

"Lekin yeh AI project nahi lagta..."

"ChatGPT + Canva se Pakistan cricket pe top 10 AI insights banao — blog, graphics, LinkedIn posts. Yeh AI project hi hai. Aur tum cricket ke baare mein itna jaante ho jo ek random developer nahi jaanta."

Bilal ka project 3 weeks mein complete hua. Uski LinkedIn post pe 400 reactions aaye — sirf isliye ke woh genuinely passionate tha.

AI tumhe tools deta hai. Tumhara interest use rooh deta hai.`,
        },
        sections: [
          {
            heading: "📊 Interest + AI Tool + Project Idea",
            content: `| Tumhara Interest | AI Tool | Project Idea |
|---|---|---|
| Cricket / Sports | ChatGPT + Canva | 'Pakistan cricket ke top 10 AI insights' — blog + graphic |
| Fashion / Style | Canva AI + ChatGPT | 'Eid ke liye AI-designed outfit moodboard' — visual + desc |
| Cooking / Food | ChatGPT | 'AI se banaya fusion recipe book' — PDF with 10 recipes |
| Gaming | ChatGPT + Canva | 'AI character backstory series' — written + illustrated |
| Mental Health / Study | ChatGPT | 'AI study schedule generator' — template jo doosre use kar sakein |
| Local Community | ChatGPT + Canva | '[Tumhara sheher] ka AI guide' — blog + infographic |
| Music / Poetry | ChatGPT | 'AI poetry collection [favourite artist] se inspired' |
| Environment | ChatGPT + Canva | 'Pakistan mein climate change pe AI infographic' |`,
          },
          {
            heading: "💡 3 Sawaal Apne Aap Se — Project Decide Karo",
            content: `**Sawaal 1:**
> Kis topic ke baare mein dosto se ghanton baat kar sakta/sakti hoon bor hue bina?

**Sawaal 2:**
> Kaunsa topic hai jis pe ek hafte research karna enjoyable lagega — bojh nahi?

**Sawaal 3:**
> Kya main yeh kisi ko dikhaaon aur proud feel karun?

Agar teeno ka jawab "haan" hai — wahi topic choose karo!

**Project Scope — Realistic Rakho:**
Ek week mein: 5-10 pieces of content ya ek simple tool ya ek well-researched report
Zyada mat socho — shuru karo. Completion > perfection.`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try Karo — Project Finalize Karo!",
          steps: [
            "Upar 3 sawaal apne aap se poochho — answers copybook mein likho",
            "Upar table mein apna interest dhundho — ya apna khud ka idea likhо",
            "Final project topic decide karo",
            "ChatGPT mein dalo: 'Mere [topic] project ke liye ek detailed outline banao — 5-7 main sections, har section mein kya hoga, aur kaunsa AI tool use karunga'",
            "Outline save karo — yeh tumhara project roadmap hai",
          ],
        },
        checklist: [
          "3 sawaal apne aap se poochhe — answers likhe",
          "Final project topic confirm kar liya",
          "ChatGPT se project outline banwaya",
          "Project scope realistic hai — ek week mein ho sakta hai",
        ],
      },
      {
        num: "03",
        icon: "🐙",
        title: "GitHub: Project Upload Aur Present Karo",
        color: "#3b82f6",
        story: {
          heading: "📖 Library Ki Shelf...",
          text: `GitHub ek library ki shelf ki tarah hai. Har project jo tum upload karte ho, ek kitaab hai us shelf pe.

Jab koi tumhara profile dekhe — teacher, employer, ya collaborator — woh exactly dekhta hai tumne kya banaya hai, kab banaya, aur kaise banaya.

Sara ka GitHub profile 6 projects dikhata tha. Ek recruiter ne dekha, README padha, impressed hua — aur DM kiya.

Sara ne interview bhi nahi diya. Portfolio ne kaam kar diya.

Tumhara GitHub = Tumhara silent salesperson jo 24/7 kaam karta hai.`,
        },
        sections: [
          {
            heading: "🔑 Pehli Repository Banana — Step by Step",
            content: `**Step 1:** github.com pe log in karo

**Step 2:** Top right corner mein '+' icon click karo → 'New repository'

**Step 3:** Clear naam do — dashes use karo:
> 'ai-cricket-insights' ya 'pakistan-recipe-book' ya 'ai-poetry-collection'

**Step 4:** Short description add karo (1 line):
> "AI-generated insights about Pakistan cricket using ChatGPT and Canva"

**Step 5:** 'Add a README file' pe tick karo

**Step 6:** 'Create repository' click karo — ho gaya!

**Files Upload Karna:**
1. Repo mein 'Add file' click karo → 'Upload files'
2. Apna Word doc, PDF, images, ya koi bhi files drag and drop karo
3. Neeche 'Commit changes' click karo — save ho jaata hai
4. Tumhari files ab internet pe live hain!`,
          },
          {
            heading: "📝 README Kaise Likhein — ChatGPT Se",
            content: `**ChatGPT Prompt:**
> "Mere project [project naam] ke liye ek professional GitHub README likho. Yeh [kya hai tumhara project] ke baare mein hai. Maine ise [tools] se banaya hai. Include karo: short introduction, project mein kya hai, koi ise kaise use kar sakta hai, aur maine isse kya seekha. Friendly aur clear rakho. GitHub markdown format mein."

**Acha README Mein Kya Hona Chahiye:**
- Project ka naam aur ek-line description
- Project kya hai aur tumne kyun banaya
- Kaunse tools aur AI use kiye
- Kaunsi files hain aur har ek mein kya hai
- Is project se kya seekha
- Neeche tumhara LinkedIn link

**💡 Tip:** README hi sabse pehle dikhti hai — ise clear aur engaging rakho. 5 minutes ka kaam hai lekin impression bada karta hai.`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try Karo — Abhi Karo!",
          steps: [
            "github.com pe log in karo",
            "Naya repository banao — project ke liye clear naam choose karo",
            "Short description add karo, README file ka option check karo",
            "ChatGPT se README likhwao (upar wala prompt use karo apni details ke saath)",
            "README ko repository mein edit karo — ChatGPT ka text paste karo",
            "Apne project ki pehli file upload karo (draft, outline, ya koi bhi content)",
            "Repository link apni copybook mein save karo",
          ],
        },
        checklist: [
          "GitHub pe naya repository banaya — clear naam ke saath",
          "ChatGPT se README likhwaya",
          "README repository mein upload/edit ki",
          "Kam az kam ek project file upload ki",
          "Repository link save kar liya",
        ],
      },
      {
        num: "04",
        icon: "📣",
        title: "LinkedIn Pe Project Announce Karo",
        color: "#a855f7",
        story: {
          heading: "📖 Share Karne Ki Himmat...",
          text: `Aisha ne apna project complete kiya. Woh proud thi lekin share karne se dara rahi thi.

"Kya log judge karenge? Kya yeh perfect hai? Kya koi dekhega bhi?"

Uske teacher ne kaha: "Ek imperfect project jo public hai zyada valuable hai us perfect project se jo koi nahi dekhta. Share karo."

Aisha ne post ki — ek honest announcement, GitHub link ke saath.

47 likes, 12 comments, 3 new connections — aur ek teacher ne usse apne students ko mentor karne ke liye invite kiya.

Woh moment jab tum post karte ho — tum learner se creator ban jaate ho.`,
        },
        sections: [
          {
            heading: "🔑 Project Announcement Post Formula",
            content: `Har effective announcement post mein yeh 7 cheezein hoti hain:

**KYA BANAYA** (1-2 lines)
> "Maine apna pehla personal AI project complete kiya — [project naam]!"

**KYUN YEH TOPIC** (personal angle)
> "Maine yeh topic isliye choose kiya kyunki [genuine reason]..."

**KAUNSE TOOLS** (specifics)
> "Maine ChatGPT se [kya liya], Canva se [kya banaya], GitHub pe publish kiya."

**KYA SEEKHA** (honest lesson)
> "Sabse badi cheez jo maine seekhi: [ek real lesson]"

**GITHUB LINK**
> "Yahan dekho: [GitHub link]"

**CALL TO ACTION**
> "Tum kaun sa project bana rahe ho? ↓" ya "Save karo baad ke liye 🔖"

**HASHTAGS**
> #AI #PersonalProject #GitHub #Pakistan #StudentLife`,
          },
          {
            heading: "✉️ Example Post — Copy Aur Customize Karo",
            content: `Maine apna pehla personal AI project complete kar liya — aur share karne ka time aa gaya.

Maine **[project naam]** banaya — ek [kya hai] jo [topic] ke baare mein hai.

Maine yeh topic isliye choose kiya kyunki **[personal reason]**.

Maine ise banaya:
- ChatGPT se [kya kaam liya]
- Canva se [kya banaya]
- GitHub pe publish kiya

Sabse badi cheez jo maine seekhi: **[ek honest lesson]**

Yahan dekho: **[GitHub link]**

Tum kaun sa project bana rahe ho? Comments mein batao ↓

#AI #PersonalProject #GitHub #Pakistan #StudentLife #Learning`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try Karo — Announce Karo!",
          steps: [
            "Canva mein ek project announcement image banao (1200x628, LinkedIn Post size)",
            "ChatGPT mein dalo: 'Mere project [naam] ke liye LinkedIn announcement post likho using this formula: Kya banaya, Kyun yeh topic, Kaunse tools, Kya seekha, GitHub link, CTA, Hashtags. Conversational tone, Pakistani audience.'",
            "Post copy karo, LinkedIn kholо",
            "Image attach karo + GitHub link add karo",
            "Publish karo — notifications check karo",
            "Comments ka jawab do — engagement badhata hai reach",
          ],
        },
        checklist: [
          "Canva mein project announcement image banayi",
          "ChatGPT se announcement post likhwaya",
          "LinkedIn pe project announce kiya — GitHub link ke saath",
          "Kam az kam 3 comments ka jawab diya",
        ],
      },
      {
        num: "05",
        icon: "📊",
        title: "Gamma.app: AI-Powered Presentations",
        color: "#06b6d4",
        story: {
          heading: "📖 2 Minute Mein Slide Deck...",
          text: `Hassan ne apna research project present karna tha. Raat ko 11 baje yaad aaya.

PowerPoint banana — 2 ghante. Design banana — skill nahi. Google Slides — boring.

Dost ne kaha: "Gamma.app try karo."

Hassan ne apna topic type kiya. 45 seconds mein 10 professional slides ready thi — proper headings, icons, colors, layout sab kuch.

Usne sirf text customize kiya — 20 minute mein done.

Presentation ke baad teacher ne poochha: "Yeh design kisne banaya?"

"AI ne."

"Seekhao mujhe bhi."`,
        },
        sections: [
          {
            heading: "🔑 Gamma.app Step-by-Step",
            content: `**Step 1:** gamma.app par jaao — Google account se free sign up karo

**Step 2:** 'New' click karo → 'Generate with AI' choose karo

**Step 3:** Apna topic type karo:
> "Pakistan mein students ke liye AI tools ki beginner guide — 8 slides"
> "Mera personal AI project [naam] — 6 slides ke saath"

**Step 4:** Apna style aur colour theme choose karo

**Step 5:** AI 30-45 seconds mein 8-12 slides generate kar deta hai

**Step 6:** Koi bhi slide click karo aur edit karo — text badlo, images add karo

**Step 7:** Share karo:
- Link copy karo — presentation ko koi bhi dekh sakta hai
- PDF export karo — GitHub pe upload karo ya email pe share karo

**Kab Gamma Use Karo (Canva Ki Jagah):**
- Jab project ek presentation format mein best dikhta ho
- Jab multiple slides mein content organize karna ho
- Jab quickly professional slides chahiye hon`,
          },
          {
            heading: "💡 Gamma + ChatGPT = Power Combo",
            content: `**Best workflow:**

**Step 1:** ChatGPT se outline banwao
> "Mujhe [topic] pe 8-slide presentation ka outline do. Har slide ka heading aur 3 bullet points."

**Step 2:** Outline copy karo

**Step 3:** Gamma mein "Generate from outline" use karo — apna ChatGPT outline paste karo

**Step 4:** AI outline ko professional slides mein convert kar deta hai

**Step 5:** Customize karo — colors, images, layout

**Result:** 30 minutes mein professional presentation jo khud banana ghante leta.

**💡 Tip:** Gamma ka free plan kaafi hai is project ke liye. Paid features optional hain.`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try Karo — Presentation Banao!",
          steps: [
            "gamma.app par jaao aur free account banao (Google se sign up karo)",
            "ChatGPT se apne project topic pe 6-slide outline banwao",
            "Gamma mein 'New' → 'Generate with AI' → outline paste karo",
            "Style aur theme choose karo — generate karo",
            "Kam az kam 3 slides customize karo — apni real details add karo",
            "Link copy karo — teacher ya doston ke saath share karo",
            "PDF export karo aur GitHub repository mein upload karo",
          ],
        },
        checklist: [
          "Gamma.app free account bana liya",
          "ChatGPT se presentation outline banwaya",
          "Gamma mein slides generate ki",
          "3 slides customize ki — real project details add ki",
          "Link share kiya ya PDF GitHub pe upload ki",
        ],
      },
    ],
    finalChecklist: {
      title: "🎉 Week 5–6 Complete Checklist",
      subtitle: "Agar yeh sab tick hai toh tum Week 5–6 complete kar chuke ho!",
      items: [
        "Project topic choose kiya aur plan likha",
        "GitHub repository clear naam ke saath banayi",
        "ChatGPT se README likhi aur upload ki",
        "Saari project files GitHub pe upload ki",
        "Project complete hai (blog/report/presentation/creative work)",
        "LinkedIn announcement ke liye Canva visual banayi",
        "LinkedIn announcement post GitHub link ke saath publish ki",
        "Gamma.app try kiya — ek presentation banayi",
      ],
    },
    nextWeek: {
      title: "⏭️ Next: Week 7–8",
      desc: "Portfolio Website + GitHub Pages — apni live website banao aur sab kuch ek jagah connect karo!",
      btn: "Week 7–8 Dekho →",
    },
  },

  en: {
    breadcrumb1: "Summer Camp",
    breadcrumb2: "Week 5–6",
    breadcrumb3: "Study Guide",
    badge: "Self Study Guide · 2–3 Hours",
    title: "Week 5–6 Complete Study Guide",
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
        icon: "💡",
        title: "What is a Personal Project?",
        color: "#f97316",
        story: {
          heading: "📖 First, a Story...",
          text: `Two students are sitting in an interview. Same education. Both say: "I know AI."

The HR manager asks the first: "Show me something." He pulls out a printed CV.

The second picks up her phone: "Here's my GitHub — this is my project, here's my LinkedIn post that got 200 likes, and this is the AI tool I built myself."

HR hires the second student.

A project is proof — that you don't just talk about things, you actually build them.`,
        },
        sections: [
          {
            heading: "📚 Types of Personal Projects",
            content: `Any project works — it just has to be genuine:

**AI Chatbot**
A chatbot that answers questions about your favourite sport or hobby
Tools: ChatGPT API or Bolt.new

**Content Series**
10 LinkedIn posts or a blog series on a topic you love
Tools: ChatGPT + Canva AI

**Research Report**
A professional report on any topic built with AI
Tools: ChatGPT + Gamma.app

**Creative Project**
A short story, poetry collection, or artwork series made with AI
Tools: ChatGPT + Canva

**Tool / Template**
A prompt library or template set that others can use too
Tools: ChatGPT + Google Docs

**Presentation**
A professional slide deck on an interesting topic using Gamma.app
Tools: Gamma.app + ChatGPT`,
          },
          {
            heading: "🔑 A Good Personal Project — 3 Essential Rules",
            content: `**Rule 1 — Genuine Interest**
It should be about something you genuinely care about — not something that just sounds impressive.
> If cricket bores you, don't make a cricket project. Choose a topic you could talk about for hours.

**Rule 2 — Deliverable**
Something you can show people, share a link to.
> Writing "I made an AI project" on a CV means nothing. "Here, look: [link]" — that works.

**Rule 3 — Must Be on GitHub**
Documents, PDFs, image collections — any format works. It just needs to be on GitHub.
> GitHub is free. If a project isn't on GitHub, it doesn't exist professionally.`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try It — Do It Right Now!",
          steps: [
            "Write down 3 topics you genuinely care about (anything — cricket, fashion, cooking, gaming)",
            "For each topic write one sentence: 'I can make [project type] about this using [tool]'",
            "Choose your favourite — this is your Week 5-6 project",
            "Enter this into ChatGPT: 'I want to make a [project type] about [topic]. Give me a simple project plan — what to build, which tools, and what the final deliverable will be'",
            "Write the plan in your notebook — now you have direction!",
          ],
        },
        checklist: [
          "Wrote down 3 genuine interest topics",
          "Chose my final project topic",
          "Got ChatGPT to make a project plan",
          "I understand why the project needs to be on GitHub",
        ],
      },
      {
        num: "02",
        icon: "🎯",
        title: "Choose Your Project: Interest + AI",
        color: "#22c55e",
        story: {
          heading: "📖 Bilal's Story...",
          text: `Bilal thought: "I want to make an AI project but I don't know what."

His teacher asked: "What's your favourite topic?"

"Cricket."

"Then make a project about cricket."

"But that doesn't sound like an AI project..."

"Use ChatGPT and Canva to make top 10 AI insights about Pakistan cricket — blog, graphics, LinkedIn posts. That IS an AI project. And you know things about cricket that a random developer doesn't."

Bilal's project was done in 3 weeks. His LinkedIn post got 400 reactions — simply because he was genuinely passionate.

AI gives you the tools. Your interest gives it a soul.`,
        },
        sections: [
          {
            heading: "📊 Interest + AI Tool + Project Idea",
            content: `| Your Interest | AI Tool | Project Idea |
|---|---|---|
| Cricket / Sports | ChatGPT + Canva | 'Top 10 AI insights about Pakistan cricket' — blog + graphic |
| Fashion / Style | Canva AI + ChatGPT | 'AI-designed Eid outfit moodboard' — visual + description |
| Cooking / Food | ChatGPT | 'AI fusion recipe book' — PDF with 10 recipes |
| Gaming | ChatGPT + Canva | 'AI character backstory series' — written + illustrated |
| Mental Health / Study | ChatGPT | 'AI study schedule generator' — template others can use |
| Local Community | ChatGPT + Canva | '[Your city] AI guide' — blog + infographic |
| Music / Poetry | ChatGPT | 'AI poetry collection inspired by [favourite artist]' |
| Environment | ChatGPT + Canva | 'AI infographic on climate change in Pakistan' |`,
          },
          {
            heading: "💡 3 Questions to Ask Yourself — Decide Your Project",
            content: `**Question 1:**
> Which topic could I talk to my friends about for hours without getting bored?

**Question 2:**
> Which topic would I genuinely enjoy researching for a week — not find it a burden?

**Question 3:**
> Would I show this to someone and feel proud?

If all three answers are "yes" — that's the topic to choose!

**Keep the Project Scope Realistic:**
In one week: 5-10 pieces of content, or one simple tool, or one well-researched report.
Don't overthink — start. Completion > perfection.`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try It — Finalise Your Project!",
          steps: [
            "Ask yourself the 3 questions above — write the answers in your notebook",
            "Find your interest in the table above — or write your own idea",
            "Decide on a final project topic",
            "Enter into ChatGPT: 'Create a detailed outline for my [topic] project — 5-7 main sections, what goes in each section, and which AI tool I'll use'",
            "Save the outline — this is your project roadmap",
          ],
        },
        checklist: [
          "Asked myself the 3 questions — wrote the answers",
          "Confirmed final project topic",
          "Got ChatGPT to make a project outline",
          "Project scope is realistic — achievable in one week",
        ],
      },
      {
        num: "03",
        icon: "🐙",
        title: "GitHub: Upload and Present Your Project",
        color: "#3b82f6",
        story: {
          heading: "📖 The Library Shelf...",
          text: `GitHub is like a library shelf. Every project you upload is a book on that shelf.

When anyone looks at your profile — a teacher, employer, or collaborator — they can see exactly what you've built, when you built it, and how.

Sara's GitHub profile showed 6 projects. A recruiter found it, read a README, was impressed — and sent her a DM.

Sara didn't even have an interview. Her portfolio did the work.

Your GitHub = Your silent salesperson working 24/7.`,
        },
        sections: [
          {
            heading: "🔑 Creating Your First Repository — Step by Step",
            content: `**Step 1:** Log in to github.com

**Step 2:** Click the '+' icon in the top right → 'New repository'

**Step 3:** Give it a clear name — use dashes:
> 'ai-cricket-insights' or 'pakistan-recipe-book' or 'ai-poetry-collection'

**Step 4:** Add a short description (1 line):
> "AI-generated insights about Pakistan cricket using ChatGPT and Canva"

**Step 5:** Tick 'Add a README file'

**Step 6:** Click 'Create repository' — done!

**Uploading Files:**
1. Click 'Add file' inside your repo → 'Upload files'
2. Drag and drop your Word doc, PDF, images, or any files
3. Click 'Commit changes' at the bottom — it's saved
4. Your files are now live on the internet!`,
          },
          {
            heading: "📝 How to Write Your README — With ChatGPT",
            content: `**ChatGPT Prompt:**
> "Write a professional GitHub README for my project called [project name]. It's about [what your project is]. I made it using [tools]. Include: a short introduction, what's in the project, how someone can use it, and what I learned. Keep it friendly and clear. Write in GitHub markdown format."

**What a Good README Should Have:**
- Project name and one-line description
- What the project is and why you made it
- Which tools and AI were used
- What files are included and what's in each
- What you learned from this project
- Your LinkedIn link at the bottom

**💡 Tip:** The README is the first thing anyone sees — keep it clear and engaging. It takes 5 minutes but makes a huge impression.`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try It — Do It Right Now!",
          steps: [
            "Log in to github.com",
            "Create a new repository — choose a clear name for your project",
            "Add a short description, tick the README file option",
            "Get ChatGPT to write your README (use the prompt above with your own details)",
            "Edit the README in your repository — paste in ChatGPT's text",
            "Upload your first project file (a draft, outline, or any content)",
            "Save your repository link in your notebook",
          ],
        },
        checklist: [
          "Created a new GitHub repository with a clear name",
          "Got ChatGPT to write a README",
          "Uploaded/edited README in the repository",
          "Uploaded at least one project file",
          "Saved the repository link",
        ],
      },
      {
        num: "04",
        icon: "📣",
        title: "Announce Your Project on LinkedIn",
        color: "#a855f7",
        story: {
          heading: "📖 The Courage to Share...",
          text: `Aisha finished her project. She was proud but scared to share it.

"Will people judge me? Is it perfect enough? Will anyone even see it?"

Her teacher said: "An imperfect project that's public is more valuable than a perfect project that no one sees. Share it."

Aisha posted — an honest announcement with a GitHub link.

47 likes, 12 comments, 3 new connections — and a teacher invited her to mentor her students.

The moment you post — you go from being a learner to being a creator.`,
        },
        sections: [
          {
            heading: "🔑 Project Announcement Post Formula",
            content: `Every effective announcement post has these 7 things:

**WHAT YOU BUILT** (1-2 lines)
> "I just completed my first personal AI project — [project name]!"

**WHY THIS TOPIC** (personal angle)
> "I chose this topic because [genuine reason]..."

**WHICH TOOLS** (be specific)
> "I used ChatGPT for [what], Canva for [what], published on GitHub."

**WHAT YOU LEARNED** (honest lesson)
> "The biggest thing I learned: [one real lesson]"

**GITHUB LINK**
> "See it here: [GitHub link]"

**CALL TO ACTION**
> "What project are you working on? ↓" or "Save this for later 🔖"

**HASHTAGS**
> #AI #PersonalProject #GitHub #Pakistan #StudentLife`,
          },
          {
            heading: "✉️ Example Post — Copy and Customize",
            content: `I just completed my first personal AI project — and it's time to share it.

I built **[project name]** — a [what it is] about [topic].

I chose this topic because **[personal reason]**.

Here's how I built it:
- ChatGPT for [what you used it for]
- Canva for [what you designed]
- Published on GitHub

The biggest thing I learned: **[one honest lesson]**

See it here: **[GitHub link]**

What project are you working on? Tell me in the comments ↓

#AI #PersonalProject #GitHub #Pakistan #StudentLife #Learning`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try It — Make the Announcement!",
          steps: [
            "Make a project announcement image in Canva (1200x628, LinkedIn Post size)",
            "Enter into ChatGPT: 'Write a LinkedIn announcement post for my project [name] using this formula: What I built, Why this topic, Which tools, What I learned, GitHub link, CTA, Hashtags. Conversational tone, Pakistani audience.'",
            "Copy the post, open LinkedIn",
            "Attach your image + add your GitHub link",
            "Publish — check notifications",
            "Reply to comments — engagement increases your reach",
          ],
        },
        checklist: [
          "Made a project announcement image in Canva",
          "Got ChatGPT to write the announcement post",
          "Announced the project on LinkedIn with a GitHub link",
          "Replied to at least 3 comments",
        ],
      },
      {
        num: "05",
        icon: "📊",
        title: "Gamma.app: AI-Powered Presentations",
        color: "#06b6d4",
        story: {
          heading: "📖 A Slide Deck in 2 Minutes...",
          text: `Hassan had to present his research project. He remembered at 11pm.

PowerPoint — 2 hours. Designing it — no skill. Google Slides — boring.

His friend said: "Try Gamma.app."

Hassan typed his topic. In 45 seconds, 10 professional slides were ready — proper headings, icons, colors, layout — everything.

He just customized the text. Done in 20 minutes.

After the presentation, the teacher asked: "Who designed this?"

"AI did."

"Teach me too."`,
        },
        sections: [
          {
            heading: "🔑 Gamma.app Step by Step",
            content: `**Step 1:** Go to gamma.app — sign up free with Google account

**Step 2:** Click 'New' → choose 'Generate with AI'

**Step 3:** Type your topic:
> "A beginner's guide to AI tools for students in Pakistan — 8 slides"
> "My personal AI project [name] — 6 slides"

**Step 4:** Choose your style and colour theme

**Step 5:** AI generates 8-12 slides in 30-45 seconds

**Step 6:** Click any slide and edit it — change text, add images

**Step 7:** Share it:
- Copy the link — anyone can view the presentation
- Export as PDF — upload to GitHub or share by email

**When to Use Gamma (Instead of Canva):**
- When your project works better as a presentation format
- When you need to organize content across multiple slides
- When you need professional slides quickly`,
          },
          {
            heading: "💡 Gamma + ChatGPT = Power Combo",
            content: `**Best workflow:**

**Step 1:** Get ChatGPT to write an outline
> "Give me an outline for an 8-slide presentation on [topic]. Heading and 3 bullet points for each slide."

**Step 2:** Copy the outline

**Step 3:** In Gamma, use "Generate from outline" — paste your ChatGPT outline

**Step 4:** AI converts the outline into professional slides

**Step 5:** Customize — colors, images, layout

**Result:** A professional presentation in 30 minutes that would have taken hours to build yourself.

**💡 Tip:** Gamma's free plan is enough for this project. Paid features are optional.`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try It — Make a Presentation!",
          steps: [
            "Go to gamma.app and create a free account (sign up with Google)",
            "Get ChatGPT to make a 6-slide outline for your project topic",
            "In Gamma: 'New' → 'Generate with AI' → paste your outline",
            "Choose a style and theme — generate",
            "Customize at least 3 slides — add your real project details",
            "Copy the link — share it with your teacher or friends",
            "Export as PDF and upload it to your GitHub repository",
          ],
        },
        checklist: [
          "Created a Gamma.app free account",
          "Got ChatGPT to make a presentation outline",
          "Generated slides in Gamma",
          "Customized 3 slides — added real project details",
          "Shared the link or uploaded PDF to GitHub",
        ],
      },
    ],
    finalChecklist: {
      title: "🎉 Week 5–6 Complete Checklist",
      subtitle: "If all of these are ticked, you've completed Week 5–6!",
      items: [
        "Chose a project topic and wrote a plan",
        "Created a GitHub repository with a clear name",
        "Got ChatGPT to write a README and uploaded it",
        "Uploaded all project files to GitHub",
        "Project is complete (blog/report/presentation/creative work)",
        "Made a Canva visual for the LinkedIn announcement",
        "Published LinkedIn announcement post with GitHub link",
        "Tried Gamma.app — made a presentation",
      ],
    },
    nextWeek: {
      title: "⏭️ Next: Week 7–8",
      desc: "Portfolio Website + GitHub Pages — build your live website and connect everything in one place!",
      btn: "Go to Week 7–8 →",
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
    if (line.startsWith("> ")) {
      return (
        <div key={i} className="my-2 px-3 py-2 rounded-lg text-sm font-mono" style={{ background: "var(--bg3)", borderLeft: "3px solid var(--bdr2)", color: "var(--tx3)" }}>
          {line.slice(2)}
        </div>
      );
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
    const tableStart = content.indexOf("| ");
    const before = content.slice(0, tableStart);
    const rest = content.slice(tableStart);
    const tableEnd = rest.search(/\n[^|]/);
    const tableStr = tableEnd === -1 ? rest : rest.slice(0, tableEnd);
    const after = tableEnd === -1 ? "" : rest.slice(tableEnd);
    return (
      <>
        {renderContent(before)}
        {renderTable(tableStr)}
        {renderContent(after)}
      </>
    );
  }
  return <>{renderContent(content)}</>;
}

/* ─── Page Component ─────────────────────────────────────────── */
export default function Week56GuidePage() {
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
        <Link href="/summer-camp/week-5-6" className="hover:underline" style={{ color: "var(--tx3)" }}>{tx.breadcrumb2}</Link>
        <ChevronRight className="w-3 h-3" />
        <span style={{ color: "var(--tx2)" }}>{tx.breadcrumb3}</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-orange-400 px-3 py-1 rounded-full mb-4"
          style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)" }}>
          <BookOpen className="w-3 h-3" />
          {tx.badge}
        </div>
        <h1 className="text-2xl md:text-3xl font-black mb-3 tracking-tight" style={{ color: "var(--tx)" }}>{tx.title}</h1>
        <p className="text-sm leading-relaxed" style={{ color: "var(--tx3)" }}>{tx.subtitle}</p>
      </div>

      {/* How to use */}
      <div className="rounded-2xl p-5 mb-8" style={{ background: "rgba(249,115,22,0.05)", border: "1px solid rgba(249,115,22,0.2)" }}>
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="w-4 h-4 text-orange-400" />
          <p className="text-sm font-bold text-orange-400">{tx.howToUse}</p>
        </div>
        <ol className="space-y-1.5">
          {tx.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--tx3)" }}>
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5"
                style={{ background: "rgba(249,115,22,0.15)", color: "#fb923c" }}>{i + 1}</span>
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
              style={{ background: "var(--bg2)", border: "1px solid var(--bdr)", borderLeftColor: topic.color, borderLeftWidth: "4px" }}>
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
                        ? <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-orange-400" />
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
      <div className="rounded-3xl p-6 mb-6" style={{ background: "rgba(249,115,22,0.05)", border: "2px solid rgba(249,115,22,0.3)" }}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-black text-orange-400">{tx.finalChecklist.title}</h3>
          <span className="text-sm font-bold text-orange-400">{doneFinal}/{totalFinal}</span>
        </div>
        <p className="text-xs mb-4" style={{ color: "var(--tx3)" }}>{tx.finalChecklist.subtitle}</p>

        {/* Progress bar */}
        <div className="h-1.5 rounded-full mb-5" style={{ background: "var(--bg3)" }}>
          <div className="h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${(doneFinal / totalFinal) * 100}%`, background: "linear-gradient(90deg, #f97316, #fb923c)" }} />
        </div>

        <div className="space-y-2.5">
          {tx.finalChecklist.items.map((item) => {
            const key = `final-${item}`;
            const done = !!checked[key];
            return (
              <button key={item} onClick={() => toggle(key)}
                className="w-full flex items-start gap-2.5 text-left transition-all">
                {done
                  ? <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-orange-400" />
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
        <Link href="/summer-camp/week-7-8"
          className="shrink-0 px-4 py-2 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
          style={{ background: "#f97316" }}>
          {tx.nextWeek.btn}
        </Link>
      </div>

    </div>
  );
}
