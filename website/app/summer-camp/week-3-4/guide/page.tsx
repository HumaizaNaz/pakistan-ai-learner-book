"use client";
import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { ChevronRight, CheckCircle2, Circle, Lightbulb, BookOpen, Zap, Target } from "lucide-react";

/* ─── Translation Object ─────────────────────────────────────── */
const t = {
  ur: {
    breadcrumb1: "Summer Camp",
    breadcrumb2: "Week 3–4",
    breadcrumb3: "Study Guide",
    badge: "Self Study Guide · 2–3 Ghante",
    title: "Week 3–4 Complete Study Guide",
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
        icon: "🎯",
        title: "Advanced Prompt Engineering",
        color: "#3b82f6",
        story: {
          heading: "📖 Pehle Ek Kahani...",
          text: `Zara ek AI student hai. Woh ChatGPT mein likha: "Mujhe essay chahiye." — ChatGPT ne ek boring, generic essay diya.

Uski dost Nadia ne same AI se kaha: "Tu ek award-winning Pakistani writer hai. Mujhe 400 words ka compelling essay likho AI education ke baare mein Pakistani teenagers ke liye — 3 sections mein, conversational tone, real examples ke saath."

Nadia ka essay itna acha tha ke usne use LinkedIn pe post kiya — 500 likes aaye!

Fark sirf prompt ka tha.`,
        },
        sections: [
          {
            heading: "📊 Prompt Engineering Ke 5 Levels",
            content: `Har level pichle se behtar output deta hai:

**Level 1 — Basic:** Seedha sawaal
> "AI ke baare mein essay likho"

**Level 2 — Context:** Background batao
> "Main 16 saal ka Pakistani student hoon — AI ke baare mein essay chahiye"

**Level 3 — Role:** AI ko role do
> "Tu ek experienced teacher hai. Mujhe AI ke baare mein samjhao..."

**Level 4 — Format:** Output specify karo
> "...3 bullet points mein, 100 words se kam"

**Level 5 — Iterate:** Refine karte raho
> "Ise aur engaging banao" / "Simple karo" / "Example add karo"

**Rule:** Jitna detailed prompt, utna behtar jawab!`,
          },
          {
            heading: "🔥 3 Power Techniques",
            content: `**1. Chain of Thought Prompting**
AI ko pehle sochne kaho — phir jawab do.

> "Jawab dene se pehle, yeh step by step soch: [masla]. Ab apna final jawab do."

Yeh tab use karo jab complex problem ho — math, logic, planning.

**2. Few-Shot Prompting**
AI ko pehle examples dikhaao — phir kaam karo.

> "Yeh 2 LinkedIn posts mujhe pasand hain: [post 1] [post 2]. Ab isi style mein mere liye ek post likho AI learning ke baare mein."

Yeh tab use karo jab specific style chahiye ho.

**3. Role + Constraint Prompting**
Role bhi do aur limits bhi lagao — sabse controlled output.

> "Tu ek professional copywriter hai. Sirf 150 words mein ek engaging LinkedIn post likho. Koi jargon nahi, simple language."

Yeh tab use karo jab exact format chahiye ho.`,
          },
          {
            heading: "💡 Pro Tips — Aur Behtar Karo",
            content: `**Negative Instructions Use Karo:**
> "Koi disclaimer mat likho" / "Academic language mat use karo" / "Bullet points mat dena, paragraphs mein likho"

**Multiple Outputs Maango:**
> "Mujhe 5 alag versions do — main best choose karunga"

**AI Ka Output Improve Karo:**
> "Yeh theek hai lekin aur punchy banao — first line ko stronger karo"
> "Tone casual rakho, jaise ek dost baat kar raha ho"

**Apna Prompt Save Karo:**
Jo prompts acha kaam karti hain — ek Google Doc mein "Prompt Library" banao!`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try Karo — Abhi Karo!",
          steps: [
            "ChatGPT ya Claude kholо",
            "Koi bhi topic choose karo (e.g., 'social media addiction')",
            "Level 1 prompt likho — result copy karo",
            "Same topic pe Level 3 prompt likho — result copy karo",
            "Level 5 prompt likho + 2 baar iterate — result copy karo",
            "Teeno results compare karo — fark clearly dikhe ga",
            "Sabse acha result LinkedIn pe share karo!",
          ],
        },
        checklist: [
          "Prompt Engineering ke 5 levels samajh aa gaye",
          "Chain of Thought technique try ki",
          "Few-Shot Prompting try ki — example de ke kaam karwaya",
          "Apni personal Prompt Library Google Doc mein shuru ki",
        ],
      },
      {
        num: "02",
        icon: "🎨",
        title: "Canva AI — Professional Design Free Mein",
        color: "#a855f7",
        story: {
          heading: "📖 Sara Ki Kahani...",
          text: `Sara ko apni AI learning journey LinkedIn pe share karni thi. Usne sochi ke usse graphic designer hire karna hoga ya Photoshop seekhna hoga.

Phir uski teacher ne kaha: "Canva AI try karo."

20 minute mein Sara ne ek professional LinkedIn banner, ek eye-catching post image, aur apna photo background bhi remove kar liya — sab bilkul free!

Uski post ne 200 reactions pakde — class mein sabse zyada.`,
        },
        sections: [
          {
            heading: "📚 Canva AI Ke Top Features",
            content: `**Magic Write**
AI tumhare design ke liye text likhta hai — headlines, captions, taglines.
Use karo jab: design mein kya likhna hai pata nahi

**Text to Image**
Apni image describe karo — AI generate karta hai.
Use karo jab: unique visual chahiye ho

**Magic Design**
Apna idea ya photo daalo — AI poora design bana deta hai.
Use karo jab: jaldi design banana ho

**Background Remover**
Kisi bhi photo ka background ek click mein hatao.
Use karo jab: apni photo ko professional banana ho

**Magic Resize**
Ek design ko LinkedIn, Instagram, Twitter sab ke liye resize karo.
Use karo jab: ek design multiple platforms pe lagani ho`,
          },
          {
            heading: "🔑 Step-by-Step: Pehli AI Image Banao",
            content: `**Step 1:** canva.com kholо — Google account se free sign up

**Step 2:** "Create a design" → "LinkedIn Post (1200x628)" choose karo

**Step 3:** Left mein "Apps" panel kholо → "Text to Image" dhundho

**Step 4:** Describe karo:
> "futuristic Pakistani student learning AI on a laptop, digital art style, blue and purple colors, professional look"

**Step 5:** Generate karo → apna favorite design choose karo

**Step 6:** Magic Write se headline add karo:
> "My AI Learning Journey 🚀 #Week3"

**Step 7:** Download → LinkedIn pe post karo!

**💡 Tip:** ChatGPT se pehle prompt likhwao: "Canva Text to Image ke liye ek detailed description likho — Pakistani student AI seekh raha hai, professional LinkedIn post ke liye"`,
          },
          {
            heading: "🌟 Design Tips — Professional Dikhna",
            content: `**Colors:**
Ek main color choose karo aur usi ke shades use karo. Blue + white = professional. Green + black = modern.

**Fonts:**
Sirf 2 fonts use karo — ek headings ke liye, ek body text ke liye. Canva ke "Brand Kit" mein set karo.

**Text to Image Prompts:**
Jitna specific hoga, utna behtar — colors, style, mood sab mention karo.
> ❌ "student studying"
> ✅ "Pakistani teenage girl studying at a modern desk, laptop open, blue ambient lighting, digital art style, clean background"

**Consistency:**
Har post mein same colors aur fonts use karo — logo tumhari brand identity ban jayegi.`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try Karo — Design Banao!",
          steps: [
            "canva.com kholо aur free account banao",
            "New design → LinkedIn Post (1200x628) choose karo",
            "Apps → Text to Image se ek unique visual generate karo",
            "Magic Write se headline add karo",
            "Background Remover se apni photo professional banao (optional)",
            "Magic Resize se Instagram Story size bhi banao",
            "Download karo aur LinkedIn pe post karo with caption!",
          ],
        },
        checklist: [
          "Canva account bana liya",
          "Text to Image se pehli AI image generate ki",
          "Magic Write se caption likhwaya",
          "LinkedIn post design complete kiya aur post kiya",
          "Magic Resize try kiya — ek design multiple sizes mein",
        ],
      },
      {
        num: "03",
        icon: "🎬",
        title: "CapCut AI — Video Content Banao",
        color: "#f97316",
        story: {
          heading: "📖 Ali Ka Video...",
          text: `Ali bilkul camera ke saamne baat nahi kar sakta tha. Dar lagta tha. Phir uske dost ne CapCut AI show kiya.

Ali ne ChatGPT se ek 60-second script likhi apni AI learning ke baare mein. CapCut mein script paste ki — AI ne automatic subtitles, background music, aur cuts bana diye.

Final video bilkul professional laga — jaise TV pe aata hai!

Ali ne woh video LinkedIn pe daala. 3 din mein 1,200 views aaye. Ek company ne DM kiya internship ke liye.`,
        },
        sections: [
          {
            heading: "📚 CapCut AI Ke Top Features",
            content: `**Auto Captions**
AI automatically subtitles add karta hai — sirf kuch seconds mein.
Use karo jab: accessibility chahiye ya silent viewing ke liye

**AI Script**
Topic describe karo — AI poori script likhta hai.
Use karo jab: kya bolna hai pata nahi

**Text to Video**
Script type karo — AI short video generate karta hai.
Use karo jab: face pe aana nahi chahte

**Auto Cut**
AI silences aur awkward pauses remove karta hai.
Use karo jab: lamba footage edit karna ho

**AI Voice**
Text ko realistic voiceover mein convert karo — multiple languages.
Use karo jab: apni awaaz use nahi karni

**Smart Background**
Green screen ke bina background hatao.
Use karo jab: environment professional nahi laga`,
          },
          {
            heading: "🔑 60-Second Script — ChatGPT Se Likhwao",
            content: `Yeh prompt ChatGPT mein paste karo:

**Prompt:**
> "Mere liye 60 second ka video script likho. Topic: [apna topic]. Hook: pehle 3 seconds mein attention grab karo. Simple conversational language — jaise dost se baat kar rahe ho. Akhir mein ek call to action. Format: [HOOK], [POINT 1], [POINT 2], [POINT 3], [CTA]"

**Example Output:**
> [HOOK] "Kya tum jaante ho ke AI se 20 minute mein professional design ban sakti hai?"
> [POINT 1] "Maine Canva AI use kiya aur bilkul beginner tha..."
> [POINT 2] "Text to Image ne sab badal diya — koi Photoshop nahi chahiye..."
> [POINT 3] "Abhi is hafte maine 5 designs banaye — free mein..."
> [CTA] "Tum bhi try karo! Link bio mein hai."

**Script Ready?** CapCut kholо → New Project → Script paste karo!`,
          },
          {
            heading: "🎥 CapCut Mein Video Banane Ka Process",
            content: `**Method 1 — Script to Video (Face nahi dikhana):**
1. CapCut app ya capcut.com kholо
2. "Script to Video" feature choose karo
3. ChatGPT ki script paste karo
4. AI visual style choose karo
5. AI Voice se voiceover add karo
6. Auto Captions on karo
7. Export → LinkedIn/Instagram pe post!

**Method 2 — Khud Record Karo:**
1. 60-second video record karo (phone se theek hai!)
2. CapCut mein import karo
3. Auto Cut — silences hatao
4. Auto Captions add karo
5. Smart Background se background change karo
6. Background music add karo (CapCut ki free library se)
7. Export!

**💡 Tip:** Pehli bar 60 seconds ka script record karo. Theek nahi laga? Auto Cut baad mein sab theek kar dega.`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try Karo — Pehla Video Banao!",
          steps: [
            "ChatGPT se 60-second script likhwao apni AI learning ke baare mein",
            "capcut.com ya CapCut app kholо",
            "Script to Video try karo — script paste karo, AI video generate kare ga",
            "AI Voice se Urdu ya English voiceover add karo",
            "Auto Captions on karo",
            "Export karo MP4 format mein",
            "LinkedIn ya Instagram pe post karo with caption!",
          ],
        },
        checklist: [
          "ChatGPT se 60-second script likhi",
          "CapCut mein pehla video banaya",
          "Auto Captions add kiye",
          "Video export kiya aur social media pe post kiya",
          "Script Library Google Docs mein save ki",
        ],
      },
      {
        num: "04",
        icon: "📱",
        title: "LinkedIn Content Strategy — Following Banao",
        color: "#22c55e",
        story: {
          heading: "📖 Consistently Post Karne Ka Jadoo...",
          text: `Fatima ne decide kiya ke woh har hafte LinkedIn pe ek post karegi apni AI learning ke baare mein. Woh expert nahi thi — bas share karti thi jo seekh rahi thi.

Hafte 1: 45 likes
Hafte 3: 200 likes aur 5 naye connections
Hafte 6: ek recruiter ka message — "Aapki journey follow kar rahi hoon, kya aap internship ke liye interested hain?"

Fatima ne koi bhi "expert" nahi tha hone ka — bas honestly share kiya. Yahi LinkedIn strategy hai!`,
        },
        sections: [
          {
            heading: "📚 5 Post Types Jo Best Kaam Karti Hain",
            content: `**1. Learning Update**
> "Maine aaj prompt engineering seekhi — yeh 3 cheezein discover ki..."
*Kyun kaam karta hai: log tumhari journey ke saath connect karte hain*

**2. Before vs After**
> "Maine khud likha vs AI ne likha — fark dekho 👇"
*Kyun kaam karta hai: visual proof, curiosity trigger*

**3. Tool Review**
> "Pehli baar Canva AI try kiya — 3 surprises jo expect nahi the"
*Kyun kaam karta hai: practical, useful information*

**4. Mini Tutorial**
> "5 minute mein professional LinkedIn banner kaise banao — free mein"
*Kyun kaam karta hai: immediate value, shareworthy*

**5. Personal Story**
> "Maine 16 saal mein AI seekhna kyun shuru kiya"
*Kyun kaam karta hai: emotional connection, authenticity*`,
          },
          {
            heading: "🔑 Perfect LinkedIn Post Formula",
            content: `Har viral post mein yeh 5 parts hote hain:

**HOOK** — Pehli line jo scroll rokde
> "Kya tum jaante ho 95% log AI prompts galat likhte hain?"
> "Maine aaj ek mistake ki jo sabko batani chahiye..."
> "3 hafte mein 1000 LinkedIn followers — yeh kiya maine:"

**STORY** — 3-5 short lines, value dena
> Jo hua, kya seekha, kya discover kiya...

**LESSON** — 1-2 lines mein main point
> "Lesson: [main takeaway jo log save kar len]"

**CTA** — Audience ko engage karo
> "Tumne kya experience kiya? Comments mein batao 👇"
> "Save karo baad ke liye 🔖"

**HASHTAGS** — 3-5 relevant
> #AI #PromptEngineering #Pakistan #StudentLife #Learning

**💡 ChatGPT Se Post Likhwao:**
> "Yeh ek LinkedIn post ka rough idea hai: [idea]. Is Perfect Post Formula ke mutabiq likhо — Hook, Story, Lesson, CTA, Hashtags. Pakistani audience ke liye, conversational tone."`,
          },
          {
            heading: "📅 Content Calendar — Organize Raho",
            content: `**Hafte mein sirf 1 post zaroor karo!**

Zyada pressure mat lo — quality > quantity hai. Yeh simple plan follow karo:

**Monday:** Week ki learning plan karo
**Wednesday ya Thursday:** Post likho aur publish karo
**Friday/Weekend:** Comments ka jawab do, doosron ke posts pe engage karo

**Ek Mahine Ka Plan:**
- Week 1: Apni AI learning journey shuru ki — introduction post
- Week 2: Pehla Canva AI design — before/after
- Week 3: Pehla video — CapCut AI se banaya
- Week 4: Is mahine kya seekha — monthly recap

**Remember:** Har post expert hone ki zaroorat nahi. "Maine aaj yeh seekha" bhi enough hai!`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try Karo — Abhi Post Karo!",
          steps: [
            "ChatGPT mein yeh prompt dalo: \"LinkedIn post likhna hai is hafte ki AI learning ke baare mein. Perfect Post Formula use karo: Hook, Story, Lesson, CTA, Hashtags. Mere baare mein: [apni details]\"",
            "Result copy karo — LinkedIn kholо",
            "New post mein paste karo — Canva se banai image attach karo",
            "Publish karo!",
            "Notifications check karo — comments ka jawab do",
            "Is hafte 2-3 doosron ki posts pe meaningful comments karo",
          ],
        },
        checklist: [
          "Perfect Post Formula yaad kar liya",
          "Is hafte ek LinkedIn post publish ki",
          "Post mein Canva se banai image use ki",
          "Kam se kam 3 doosron ki posts pe comment kiya",
          "Content Calendar bana liya — agla post kab karna hai",
        ],
      },
    ],
    finalChecklist: {
      title: "🎉 Week 3–4 Complete Checklist",
      subtitle: "Agar yeh sab tick hai toh tum Week 3–4 complete kar chuke ho!",
      items: [
        "Prompt Engineering ke 5 levels try kiye — outputs compare kiye",
        "Chain of Thought aur Few-Shot techniques use kiye",
        "Apni Prompt Library bana li",
        "Canva AI se professional LinkedIn design banaya",
        "ChatGPT se 60-second video script likhi",
        "CapCut AI se pehla video banaya",
        "Is hafte LinkedIn pe kam az kam ek post publish ki",
        "Poora Content Package complete: Blog + Image + Video",
      ],
    },
    nextWeek: {
      title: "⏭️ Next: Week 5–6",
      desc: "AI Project Building — apna khud ka AI tool banayenge, no-code se!",
      btn: "Week 5–6 Dekho →",
    },
  },

  en: {
    breadcrumb1: "Summer Camp",
    breadcrumb2: "Week 3–4",
    breadcrumb3: "Study Guide",
    badge: "Self Study Guide · 2–3 Hours",
    title: "Week 3–4 Complete Study Guide",
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
        icon: "🎯",
        title: "Advanced Prompt Engineering",
        color: "#3b82f6",
        story: {
          heading: "📖 First, a Story...",
          text: `Zara is an AI student. She typed into ChatGPT: "Give me an essay." — ChatGPT gave a boring, generic essay.

Her friend Nadia asked the same AI: "You are an award-winning Pakistani writer. Write me a compelling 400-word essay about AI education for Pakistani teenagers — in 3 sections, conversational tone, with real examples."

Nadia's essay was so good she posted it on LinkedIn — it got 500 likes!

The only difference was the prompt.`,
        },
        sections: [
          {
            heading: "📊 The 5 Levels of Prompt Engineering",
            content: `Each level gets better output than the last:

**Level 1 — Basic:** Direct question
> "Write an essay about AI"

**Level 2 — Context:** Add background
> "I'm a 16-year-old Pakistani student — write an essay about AI for me"

**Level 3 — Role:** Give AI a role
> "You are an experienced teacher. Explain AI to me..."

**Level 4 — Format:** Specify the output
> "...in 3 bullet points, under 100 words"

**Level 5 — Iterate:** Keep refining
> "Make it more engaging" / "Simplify it" / "Add an example"

**Rule:** The more detailed your prompt, the better the response!`,
          },
          {
            heading: "🔥 3 Power Techniques",
            content: `**1. Chain of Thought Prompting**
Ask AI to think step by step first — then give the answer.

> "Before answering, think through this step by step: [problem]. Now give me your final answer."

Use this for complex problems — math, logic, planning.

**2. Few-Shot Prompting**
Show AI examples first — then ask for your task.

> "Here are 2 LinkedIn posts I love: [post 1] [post 2]. Now write one for me about my AI learning journey in the same style."

Use this when you need a specific style.

**3. Role + Constraint Prompting**
Give a role AND add limits — most controlled output.

> "You are a professional copywriter. Write an engaging LinkedIn post in under 150 words. No jargon, simple language."

Use this when you need an exact format.`,
          },
          {
            heading: "💡 Pro Tips — Level Up",
            content: `**Use Negative Instructions:**
> "Don't add a disclaimer" / "Don't use academic language" / "No bullet points — write in paragraphs"

**Ask for Multiple Outputs:**
> "Give me 5 different versions — I'll choose the best"

**Improve AI's Output:**
> "This is fine but make it punchier — strengthen the first line"
> "Keep the tone casual, like a friend talking"

**Save Your Prompts:**
Build a "Prompt Library" in a Google Doc — save prompts that work great!`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try It — Do It Right Now!",
          steps: [
            "Open ChatGPT or Claude",
            "Choose any topic (e.g., 'social media addiction')",
            "Write a Level 1 prompt — copy the result",
            "Write a Level 3 prompt for the same topic — copy the result",
            "Write a Level 5 prompt + iterate twice — copy the result",
            "Compare all three results — the difference will be clear",
            "Share the best result on LinkedIn!",
          ],
        },
        checklist: [
          "I understand the 5 levels of prompt engineering",
          "I tried Chain of Thought technique",
          "I tried Few-Shot Prompting — got results by giving examples",
          "I started my personal Prompt Library in Google Docs",
        ],
      },
      {
        num: "02",
        icon: "🎨",
        title: "Canva AI — Professional Design for Free",
        color: "#a855f7",
        story: {
          heading: "📖 Sara's Story...",
          text: `Sara wanted to share her AI learning journey on LinkedIn. She thought she'd have to hire a graphic designer or learn Photoshop.

Then her teacher said: "Try Canva AI."

In 20 minutes Sara had a professional LinkedIn banner, an eye-catching post image, and even removed her photo's background — all completely free!

Her post got 200 reactions — the most in her class.`,
        },
        sections: [
          {
            heading: "📚 Canva AI's Top Features",
            content: `**Magic Write**
AI writes text for your design — headlines, captions, taglines.
Use when: you don't know what to write in the design

**Text to Image**
Describe your image — AI generates it.
Use when: you need a unique visual

**Magic Design**
Add your idea or photo — AI builds the whole design.
Use when: you need to create a design quickly

**Background Remover**
Remove any photo's background in one click.
Use when: you want to make your photo look professional

**Magic Resize**
Resize one design for LinkedIn, Instagram, Twitter, and more.
Use when: one design needs to go on multiple platforms`,
          },
          {
            heading: "🔑 Step-by-Step: Create Your First AI Image",
            content: `**Step 1:** Go to canva.com — sign up free with Google account

**Step 2:** "Create a design" → choose "LinkedIn Post (1200x628)"

**Step 3:** Open the "Apps" panel on the left → find "Text to Image"

**Step 4:** Describe your image:
> "futuristic Pakistani student learning AI on a laptop, digital art style, blue and purple colors, professional look"

**Step 5:** Generate → choose your favorite design

**Step 6:** Add a headline with Magic Write:
> "My AI Learning Journey 🚀 #Week3"

**Step 7:** Download → post on LinkedIn!

**💡 Tip:** Use ChatGPT first to write your prompt: "Write a detailed description for Canva Text to Image — Pakistani student learning AI, for a professional LinkedIn post"`,
          },
          {
            heading: "🌟 Design Tips — Look Professional",
            content: `**Colors:**
Choose one main color and use its shades. Blue + white = professional. Green + black = modern.

**Fonts:**
Use only 2 fonts — one for headings, one for body. Set these in Canva's "Brand Kit."

**Text to Image Prompts:**
The more specific, the better — mention colors, style, mood.
> ❌ "student studying"
> ✅ "Pakistani teenage girl studying at a modern desk, laptop open, blue ambient lighting, digital art style, clean background"

**Consistency:**
Use the same colors and fonts in every post — this becomes your brand identity.`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try It — Make a Design!",
          steps: [
            "Open canva.com and create a free account",
            "New design → choose LinkedIn Post (1200x628)",
            "Apps → generate a unique visual with Text to Image",
            "Add a headline using Magic Write",
            "Remove your photo background with Background Remover (optional)",
            "Try Magic Resize to make an Instagram Story version too",
            "Download and post on LinkedIn with a caption!",
          ],
        },
        checklist: [
          "Created Canva account",
          "Generated my first AI image with Text to Image",
          "Used Magic Write to write a caption",
          "Completed a LinkedIn post design and published it",
          "Tried Magic Resize — one design in multiple sizes",
        ],
      },
      {
        num: "03",
        icon: "🎬",
        title: "CapCut AI — Create Video Content",
        color: "#f97316",
        story: {
          heading: "📖 Ali's Video...",
          text: `Ali could not speak in front of a camera at all. He was too nervous. Then his friend showed him CapCut AI.

Ali used ChatGPT to write a 60-second script about his AI learning. He pasted the script into CapCut — AI automatically added subtitles, background music, and cuts.

The final video looked completely professional — like something you'd see on TV!

Ali uploaded that video to LinkedIn. In 3 days it got 1,200 views. A company DMed him about an internship.`,
        },
        sections: [
          {
            heading: "📚 CapCut AI's Top Features",
            content: `**Auto Captions**
AI automatically adds subtitles — in just a few seconds.
Use when: you want accessibility or silent viewing

**AI Script**
Describe your topic — AI writes the full script.
Use when: you don't know what to say

**Text to Video**
Type your script — AI generates a short video.
Use when: you don't want to show your face

**Auto Cut**
AI removes silences and awkward pauses.
Use when: you have long footage to edit

**AI Voice**
Convert text to realistic voiceover — multiple languages.
Use when: you don't want to use your own voice

**Smart Background**
Remove background without a green screen.
Use when: your environment doesn't look professional`,
          },
          {
            heading: "🔑 60-Second Script — Get ChatGPT to Write It",
            content: `Paste this prompt into ChatGPT:

**Prompt:**
> "Write me a 60-second video script. Topic: [your topic]. Hook: grab attention in the first 3 seconds. Simple conversational language — like talking to a friend. End with a call to action. Format: [HOOK], [POINT 1], [POINT 2], [POINT 3], [CTA]"

**Example Output:**
> [HOOK] "Did you know AI can create a professional design in 20 minutes?"
> [POINT 1] "I used Canva AI and I was a complete beginner..."
> [POINT 2] "Text to Image changed everything — no Photoshop needed..."
> [POINT 3] "This week I made 5 designs — for free..."
> [CTA] "Try it yourself! Link in bio."

**Script ready?** Open CapCut → New Project → Paste your script!`,
          },
          {
            heading: "🎥 Process for Making Video in CapCut",
            content: `**Method 1 — Script to Video (no face required):**
1. Open CapCut app or capcut.com
2. Choose the "Script to Video" feature
3. Paste your ChatGPT script
4. Choose AI visual style
5. Add voiceover with AI Voice
6. Turn on Auto Captions
7. Export → post on LinkedIn/Instagram!

**Method 2 — Record Yourself:**
1. Record a 60-second video (your phone is fine!)
2. Import into CapCut
3. Auto Cut — remove silences
4. Add Auto Captions
5. Change background with Smart Background
6. Add background music (from CapCut's free library)
7. Export!

**💡 Tip:** The first time, record your 60-second script. Not happy with it? Auto Cut will fix it all later.`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try It — Make Your First Video!",
          steps: [
            "Get ChatGPT to write a 60-second script about your AI learning",
            "Open capcut.com or the CapCut app",
            "Try Script to Video — paste script, let AI generate the video",
            "Add Urdu or English voiceover with AI Voice",
            "Turn on Auto Captions",
            "Export as MP4",
            "Post on LinkedIn or Instagram with a caption!",
          ],
        },
        checklist: [
          "Wrote a 60-second script with ChatGPT",
          "Made my first video in CapCut",
          "Added Auto Captions",
          "Exported video and posted on social media",
          "Saved Script Library in Google Docs",
        ],
      },
      {
        num: "04",
        icon: "📱",
        title: "LinkedIn Content Strategy — Build Your Following",
        color: "#22c55e",
        story: {
          heading: "📖 The Magic of Posting Consistently...",
          text: `Fatima decided she would post one LinkedIn update every week about her AI learning. She wasn't an expert — she just shared what she was discovering.

Week 1: 45 likes
Week 3: 200 likes and 5 new connections
Week 6: a message from a recruiter — "I've been following your journey, are you interested in an internship?"

Fatima never pretended to be an "expert" — she just honestly shared her journey. That's the LinkedIn strategy!`,
        },
        sections: [
          {
            heading: "📚 5 Post Types That Work Best",
            content: `**1. Learning Update**
> "Today I learned prompt engineering — here are 3 things I discovered..."
*Why it works: people connect with your journey*

**2. Before vs After**
> "I wrote this vs AI wrote this — see the difference 👇"
*Why it works: visual proof, triggers curiosity*

**3. Tool Review**
> "First time trying Canva AI — 3 surprises I didn't expect"
*Why it works: practical, useful information*

**4. Mini Tutorial**
> "How to make a professional LinkedIn banner in 5 minutes — for free"
*Why it works: immediate value, highly shareable*

**5. Personal Story**
> "Why I started learning AI at 16"
*Why it works: emotional connection, authenticity*`,
          },
          {
            heading: "🔑 Perfect LinkedIn Post Formula",
            content: `Every viral post has these 5 parts:

**HOOK** — First line that stops the scroll
> "Did you know 95% of people write AI prompts wrong?"
> "I made a mistake today that everyone should know about..."
> "1000 LinkedIn followers in 3 weeks — here's what I did:"

**STORY** — 3-5 short lines of value
> What happened, what you learned, what you discovered...

**LESSON** — Main point in 1-2 lines
> "Lesson: [main takeaway people will want to save]"

**CTA** — Engage your audience
> "What has your experience been? Tell me in the comments 👇"
> "Save this for later 🔖"

**HASHTAGS** — 3-5 relevant ones
> #AI #PromptEngineering #Pakistan #StudentLife #Learning

**💡 Get ChatGPT to Write Your Post:**
> "Here's a rough idea for a LinkedIn post: [idea]. Write it using the Perfect Post Formula — Hook, Story, Lesson, CTA, Hashtags. For a Pakistani audience, conversational tone."`,
          },
          {
            heading: "📅 Content Calendar — Stay Organized",
            content: `**Just 1 post per week is enough!**

Don't put too much pressure on yourself — quality > quantity. Follow this simple plan:

**Monday:** Plan what you'll learn this week
**Wednesday or Thursday:** Write your post and publish it
**Friday/Weekend:** Reply to comments, engage with others' posts

**One Month Plan:**
- Week 1: Started my AI learning journey — introduction post
- Week 2: First Canva AI design — before/after
- Week 3: First video — made with CapCut AI
- Week 4: What I learned this month — monthly recap

**Remember:** You don't need to be an expert for every post. "I learned this today" is more than enough!`,
          },
        ],
        tryKaro: {
          heading: "🛠️ Try It — Post Right Now!",
          steps: [
            "Enter this prompt in ChatGPT: \"I want to write a LinkedIn post about this week's AI learning. Use the Perfect Post Formula: Hook, Story, Lesson, CTA, Hashtags. About me: [your details]\"",
            "Copy the result — open LinkedIn",
            "Paste into a new post — attach your Canva image",
            "Publish!",
            "Check notifications — reply to comments",
            "This week, leave meaningful comments on 2-3 other people's posts",
          ],
        },
        checklist: [
          "I've memorized the Perfect Post Formula",
          "I published one LinkedIn post this week",
          "I used a Canva-made image in the post",
          "I commented on at least 3 other people's posts",
          "I made a Content Calendar — I know when my next post is",
        ],
      },
    ],
    finalChecklist: {
      title: "🎉 Week 3–4 Complete Checklist",
      subtitle: "If all of these are ticked, you've completed Week 3–4!",
      items: [
        "Tried the 5 levels of prompt engineering — compared outputs",
        "Used Chain of Thought and Few-Shot techniques",
        "Built my Prompt Library",
        "Created a professional LinkedIn design with Canva AI",
        "Wrote a 60-second video script with ChatGPT",
        "Made my first video with CapCut AI",
        "Published at least one LinkedIn post this week",
        "Completed the full Content Package: Blog + Image + Video",
      ],
    },
    nextWeek: {
      title: "⏭️ Next: Week 5–6",
      desc: "AI Project Building — we'll build our own AI tool, no-code style!",
      btn: "Go to Week 5–6 →",
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

/* ─── Page Component ─────────────────────────────────────────── */
export default function Week34GuidePage() {
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
        <Link href="/summer-camp/week-3-4" className="hover:underline" style={{ color: "var(--tx3)" }}>{tx.breadcrumb2}</Link>
        <ChevronRight className="w-3 h-3" />
        <span style={{ color: "var(--tx2)" }}>{tx.breadcrumb3}</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 px-3 py-1 rounded-full mb-4"
          style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)" }}>
          <BookOpen className="w-3 h-3" />
          {tx.badge}
        </div>
        <h1 className="text-2xl md:text-3xl font-black mb-3 tracking-tight" style={{ color: "var(--tx)" }}>{tx.title}</h1>
        <p className="text-sm leading-relaxed" style={{ color: "var(--tx3)" }}>{tx.subtitle}</p>
      </div>

      {/* How to use */}
      <div className="rounded-2xl p-5 mb-8" style={{ background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.2)" }}>
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="w-4 h-4 text-blue-400" />
          <p className="text-sm font-bold text-blue-400">{tx.howToUse}</p>
        </div>
        <ol className="space-y-1.5">
          {tx.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--tx3)" }}>
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5"
                style={{ background: "rgba(59,130,246,0.15)", color: "#60a5fa" }}>{i + 1}</span>
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
              style={{ background: "var(--bg2)", border: `1px solid var(--bdr)`, borderLeftColor: topic.color, borderLeftWidth: "4px" }}>
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
                        ? <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-400" />
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
      <div className="rounded-3xl p-6 mb-6" style={{ background: "rgba(59,130,246,0.05)", border: "2px solid rgba(59,130,246,0.3)" }}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-black text-blue-400">{tx.finalChecklist.title}</h3>
          <span className="text-sm font-bold text-blue-400">{doneFinal}/{totalFinal}</span>
        </div>
        <p className="text-xs mb-4" style={{ color: "var(--tx3)" }}>{tx.finalChecklist.subtitle}</p>

        {/* Progress bar */}
        <div className="h-1.5 rounded-full mb-5" style={{ background: "var(--bg3)" }}>
          <div className="h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${(doneFinal / totalFinal) * 100}%`, background: "linear-gradient(90deg, #3b82f6, #60a5fa)" }} />
        </div>

        <div className="space-y-2.5">
          {tx.finalChecklist.items.map((item) => {
            const key = `final-${item}`;
            const done = !!checked[key];
            return (
              <button key={item} onClick={() => toggle(key)}
                className="w-full flex items-start gap-2.5 text-left transition-all">
                {done
                  ? <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-400" />
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
        <Link href="/summer-camp/week-5-6"
          className="shrink-0 px-4 py-2 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
          style={{ background: "#3b82f6" }}>
          {tx.nextWeek.btn}
        </Link>
      </div>

    </div>
  );
}
