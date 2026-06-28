"use client";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { ChevronRight, ArrowRight } from "lucide-react";
import WeekProgress from "@/components/WeekProgress";

const accent = "#3b82f6";

function Section({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0"
          style={{ background: `${accent}15`, color: accent, border: `1px solid ${accent}25` }}>{n}</div>
        <h2 className="text-lg font-bold tracking-tight" style={{ color: "var(--tx)" }}>{title}</h2>
      </div>
      <div className="ml-11">{children}</div>
    </div>
  );
}

function Story({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 rounded-lg mb-4 text-sm leading-relaxed" style={{ background: "var(--bg3)", borderLeft: "3px solid #3b82f6", color: "var(--tx3)" }}>
      {children}
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 rounded-lg mb-3" style={{ background: "var(--bg2)", border: "1px solid var(--bdr)" }}>
      {children}
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg mb-4" style={{ border: "1px solid var(--bdr)" }}>
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: "var(--bg3)" }}>
            {headers.map(h => <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--tx3)" }}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderTop: "1px solid var(--bdr)", background: i % 2 === 0 ? "var(--bg2)" : "var(--bg3)" }}>
              {row.map((cell, j) => <td key={j} className="px-4 py-3 text-sm" style={{ color: "var(--tx3)" }}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CodeBox({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg p-4 mb-4 font-mono text-sm" style={{ background: "#0a0a0a", border: "1px solid var(--bdr2)" }}>
      {title && <p className="text-blue-400 text-xs mb-2 font-sans font-semibold">{title}</p>}
      <div className="text-green-300 leading-relaxed">{children}</div>
    </div>
  );
}

function ExBox({ n, title, steps }: { n: number; title: string; steps: string[] }) {
  return (
    <Card>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ background: `${accent}15`, color: accent }}>Exercise {n}</span>
        <h4 className="font-semibold text-sm" style={{ color: "var(--tx)" }}>{title}</h4>
      </div>
      <ol className="space-y-2">
        {steps.map((s, i) => (
          <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--tx3)" }}>
            <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
              style={{ background: "var(--bg3)", color: "var(--tx3)", border: "1px solid var(--bdr2)" }}>{i + 1}</span>
            {s}
          </li>
        ))}
      </ol>
    </Card>
  );
}

export default function Week34Page() {
  const { lang } = useLang();

  return (
    <>
    <WeekProgress current={2} />
    <div className="max-w-3xl mx-auto px-8 py-12">
      <div className="flex items-center gap-1.5 text-xs mb-8" style={{ color: "var(--tx4)" }}>
        <Link href="/summer-camp" style={{ color: "var(--tx3)" }} className="hover:underline">Summer Camp</Link>
        <ChevronRight className="w-3 h-3" />
        <span style={{ color: "var(--tx3)" }}>Week 3–4</span>
      </div>

      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-4 text-blue-400"
          style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)" }}>
          Week 3–4 · Prompt Mastery + Content
        </div>
        <h1 className="text-3xl font-bold mb-3 tracking-tight" style={{ color: "var(--tx)" }}>Prompt Mastery + Content Creation</h1>
        <p className="text-sm" style={{ color: "var(--tx3)" }}>Prompt Engineering · Canva AI · CapCut AI · LinkedIn Content</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {["Canva AI", "CapCut AI", "ChatGPT", "LinkedIn"].map(t => (
            <span key={t} className="text-xs px-2 py-1 rounded" style={{ color: "var(--tx3)", background: "var(--bg3)", border: "1px solid var(--bdr)" }}>{t}</span>
          ))}
        </div>
      </div>

      <Section n={1} title="Advanced Prompt Engineering">
        <Story>
          {lang === "ur"
            ? "Week 1-2 mein basic formula seekha. Ab aur gehre jaate hain. Ek acha prompt aise hota hai jaise ek film director ko poori script dena."
            : "You learned the basic formula in Week 1-2. Now we go deeper. A great prompt is like giving a film director the complete script."}
        </Story>
        <Table
          headers={[lang === "ur" ? "Level" : "Level", lang === "ur" ? "Matlab" : "What It Means", lang === "ur" ? "Misal" : "Example"]}
          rows={[
            ["Level 1 — Basic", lang === "ur" ? "Seedha sawaal" : "Direct question", lang === "ur" ? "'AI ke baare mein essay likho'" : "'Write an essay about AI'"],
            ["Level 2 — Context", lang === "ur" ? "Background batao" : "Add background", lang === "ur" ? "'Main 16 saal ka student hoon...'" : "'I am a 16-year-old student...'"],
            ["Level 3 — Role", lang === "ur" ? "AI ko role do" : "Give AI a role", lang === "ur" ? "'Tu ek expert career coach hai...'" : "'You are an expert career coach...'"],
            ["Level 4 — Format", lang === "ur" ? "Output specify karo" : "Specify output", lang === "ur" ? "'3 bullet points mein'" : "'In 3 bullet points, under 100 words'"],
            ["Level 5 — Iterate", lang === "ur" ? "Refine karo" : "Refine & improve", lang === "ur" ? "'Ise aur formal banao'" : "'Make this more formal' / 'Shorten it'"],
          ]}
        />
        <p className="text-sm font-semibold mb-3" style={{ color: "var(--tx)" }}>
          {lang === "ur" ? "3 Power Techniques:" : "3 Power Techniques:"}
        </p>
        <div className="space-y-3 mb-4">
          {[
            {
              title: lang === "ur" ? "1. Chain of Thought Prompting" : "1. Chain of Thought Prompting",
              desc: lang === "ur" ? "AI ko pehle step-by-step sochne kaho — phir final jawab do." : "Ask AI to think step-by-step before giving the final answer.",
              ex: lang === "ur" ? '"Jawab dene se pehle, yeh step by step soch..."' : '"Think step by step before answering..."',
            },
            {
              title: lang === "ur" ? "2. Few-Shot Prompting" : "2. Few-Shot Prompting",
              desc: lang === "ur" ? "AI ko pehle example dikhaao — phir apna kaam karo." : "Show AI examples first — then ask for your task.",
              ex: lang === "ur" ? '"Yeh 2 LinkedIn posts mujhe pasand hain: [ex1] [ex2]. Ab isi andaz mein likho."' : '"Here are 2 LinkedIn posts I like: [ex1] [ex2]. Now write in the same style."',
            },
            {
              title: lang === "ur" ? "3. Role + Constraint" : "3. Role + Constraint Prompting",
              desc: lang === "ur" ? "Role bhi do aur limits bhi lagao — sabse controlled output." : "Give a role AND add constraints — most controlled output.",
              ex: lang === "ur" ? '"Tu ek professional copywriter hai. 150 words se kam mein LinkedIn post likho."' : '"You are a professional copywriter. Write a LinkedIn post in under 150 words."',
            },
          ].map(t => (
            <Card key={t.title}>
              <p className="font-semibold text-sm mb-1" style={{ color: "var(--tx)" }}>{t.title}</p>
              <p className="text-xs mb-2" style={{ color: "var(--tx3)" }}>{t.desc}</p>
              <div className="p-2.5 rounded text-xs font-mono" style={{ background: "var(--bg3)", color: "var(--tx3)", border: "1px solid var(--bdr)" }}>{t.ex}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section n={2} title={lang === "ur" ? "Canva AI: Professional Images Free Mein" : "Canva AI: Professional Images — Free"}>
        <Story>
          {lang === "ur"
            ? "Research: log 65% zyada yaad rakhte hain images ke saath. LinkedIn pe images wali posts ko 3 guna zyada engagement milti hai."
            : "Research shows people remember 65% more with images. LinkedIn posts with images get 3x more engagement."}
        </Story>
        <div className="grid md:grid-cols-2 gap-3 mb-4">
          {[
            { f: "Magic Write", d: lang === "ur" ? "AI tumhare design ke liye text likhta hai" : "AI writes text for your design (captions, headings)" },
            { f: "Text to Image", d: lang === "ur" ? "Image describe karo, AI generate karta hai" : "Describe an image, AI generates it" },
            { f: "Magic Design", d: lang === "ur" ? "Photo upload karo, AI poora design bana deta hai" : "Upload a photo or idea, AI builds the full design" },
            { f: "Background Remover", d: lang === "ur" ? "Kisi bhi photo ka background ek click mein" : "Remove any photo's background in one click" },
            { f: "Magic Resize", d: lang === "ur" ? "Ek design LinkedIn, Instagram, Twitter ke liye resize karo" : "Resize one design for LinkedIn, Instagram, Twitter" },
          ].map(f => (
            <Card key={f.f}>
              <p className="font-semibold text-sm mb-1" style={{ color: "var(--tx)" }}>{f.f}</p>
              <p className="text-xs" style={{ color: "var(--tx3)" }}>{f.d}</p>
            </Card>
          ))}
        </div>
        <CodeBox title={lang === "ur" ? "Step-by-Step: Pehli AI Image" : "Step-by-Step: Your First AI Image"}>
          {[
            lang === "ur" ? "1. canva.com par jaao — Google account se free sign up" : "1. Go to canva.com — sign up free with Google",
            lang === "ur" ? "2. 'Create a design' → 'LinkedIn Post (1200x628)'" : "2. 'Create a design' → 'LinkedIn Post (1200x628)'",
            lang === "ur" ? "3. Apps → 'Text to Image' dhundho" : "3. Apps panel → find 'Text to Image'",
            lang === "ur" ? "4. Describe karo: 'futuristic student learning AI, digital art, blue purple'" : "4. Describe: 'futuristic student learning AI, digital art, blue purple'",
            lang === "ur" ? "5. Generate → apna favorite choose karo" : "5. Generate → choose your favourite",
            lang === "ur" ? "6. Magic Write se caption add karo → download → LinkedIn pe post" : "6. Add caption with Magic Write → download → post on LinkedIn",
          ].map((s, i) => <div key={i} className="mb-1 text-xs">{s}</div>)}
        </CodeBox>
      </Section>

      <Section n={3} title={lang === "ur" ? "CapCut AI: Video Content Banao" : "CapCut AI: Create Video Content"}>
        <Story>
          {lang === "ur"
            ? "Video content ko text ya image se 10 guna zyada reach milti hai. CapCut AI ne sab badal diya — 30 minute mein professional video."
            : "Video content gets 10x more reach than text or images. CapCut AI changed everything — professional video in 30 minutes."}
        </Story>
        <div className="grid md:grid-cols-2 gap-3 mb-4">
          {[
            { f: "Auto Captions", d: lang === "ur" ? "AI subtitles add karta hai — seconds mein" : "AI adds subtitles automatically in seconds" },
            { f: "AI Script", d: lang === "ur" ? "Topic describe karo, AI script likhta hai" : "Describe your topic, AI writes the full script" },
            { f: "Text to Video", d: lang === "ur" ? "Type karo, AI short video generate karta hai" : "Type your script, AI generates a short video" },
            { f: "Auto Cut", d: lang === "ur" ? "AI silences aur pauses remove karta hai" : "AI removes silences and awkward pauses" },
            { f: "AI Voice", d: lang === "ur" ? "Text ko realistic voiceover mein — multiple languages" : "Convert text to realistic voiceover — multiple languages" },
            { f: "Smart Background", d: lang === "ur" ? "Green screen ke bina background hatao" : "Remove background without green screen" },
          ].map(f => (
            <Card key={f.f}>
              <p className="font-semibold text-sm mb-1" style={{ color: "var(--tx)" }}>{f.f}</p>
              <p className="text-xs" style={{ color: "var(--tx3)" }}>{f.d}</p>
            </Card>
          ))}
        </div>
        <CodeBox title={lang === "ur" ? "ChatGPT Se Script Prompt:" : "ChatGPT Script Prompt:"}>
          {lang === "ur"
            ? `"Mere liye 60 second ka video script likho [topic] ke baare mein. Hook: pehle 3 seconds mein attention grab. Simple conversational language. Akhir mein call to action. Format: [HOOK], [POINT 1], [POINT 2], [POINT 3], [CTA]"`
            : `"Write me a 60-second video script about [topic]. Hook: grab attention in the first 3 seconds. Simple conversational language. End with a call to action. Format: [HOOK], [POINT 1], [POINT 2], [POINT 3], [CTA]"`}
        </CodeBox>
      </Section>

      <Section n={4} title={lang === "ur" ? "LinkedIn Content Strategy" : "LinkedIn Content Strategy"}>
        <Story>
          {lang === "ur"
            ? "Jo log consistently post karte hain woh following banate hain, companies ki nazar mein aate hain, aur opportunities paate hain jo doosron ko milti hi nahi."
            : "Those who post consistently build a following, get noticed by companies, and find opportunities others never see. Expert nahi banana — just share what you're learning."}
        </Story>
        <Table
          headers={[lang === "ur" ? "Post Type" : "Post Type", lang === "ur" ? "Idea" : "Idea"]}
          rows={[
            [lang === "ur" ? "Learning update" : "Learning update", lang === "ur" ? "'Maine aaj prompt engineering seekhi'" : "'I learned prompt engineering today — here's what I discovered'"],
            [lang === "ur" ? "Before vs After" : "Before vs After", lang === "ur" ? "'Maine khud likha vs AI ne likha — fark dekho'" : "'I wrote this vs AI wrote this — see the difference'"],
            [lang === "ur" ? "Tool review" : "Tool review", lang === "ur" ? "'Pehli baar Canva AI try kiya — 3 surprises'" : "'First time trying Canva AI — 3 things that surprised me'"],
            [lang === "ur" ? "Mini tutorial" : "Mini tutorial", lang === "ur" ? "'5 minute mein professional LinkedIn banner kaise banao'" : "'How to make a professional LinkedIn banner in 5 minutes'"],
            [lang === "ur" ? "Personal story" : "Personal story", lang === "ur" ? "'Maine 16 saal mein AI seekhna kyun shuru kiya'" : "'Why I started learning AI at 16'"],
          ]}
        />
        <div className="p-4 rounded-lg mb-4" style={{ background: "#0a0a0a", border: "1px solid var(--bdr2)" }}>
          <p className="text-yellow-400 font-semibold text-xs mb-3 uppercase tracking-widest">
            {lang === "ur" ? "Perfect LinkedIn Post Formula:" : "Perfect LinkedIn Post Formula:"}
          </p>
          {[["HOOK", lang === "ur" ? "1 line jo scroll rokde" : "1 line that stops the scroll"], ["STORY", lang === "ur" ? "3-5 short lines" : "3-5 short lines of value"], ["LESSON", lang === "ur" ? "1-2 lines takeaway" : "1-2 line takeaway"], ["CTA", lang === "ur" ? "Audience engage karo" : "Engage the audience"], ["HASHTAGS", "3-5 relevant"]].map(([k, v]) => (
            <div key={k} className="flex gap-3 text-xs mb-2">
              <span className="text-yellow-400 font-bold w-24 shrink-0">{k}</span>
              <span style={{ color: "var(--tx3)" }}>{v}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Exercises */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-bold px-3 py-1 rounded" style={{ background: `${accent}15`, color: accent }}>Week 3</span>
          <h2 className="text-lg font-bold" style={{ color: "var(--tx)" }}>Practical Exercises</h2>
        </div>
        <ExBox n={1} title={lang === "ur" ? "Prompt Challenge" : "Prompt Challenge"} steps={[
          lang === "ur" ? "Koi bhi ek topic choose karo" : "Choose any one topic you like",
          lang === "ur" ? "Level 1 prompt likho — result save karo" : "Write Level 1 prompt — save the result",
          lang === "ur" ? "Level 3 prompt likho — result save karo" : "Write Level 3 prompt — save the result",
          lang === "ur" ? "Level 5 prompt likho + 2 baar iterate — result save karo" : "Write Level 5 prompt + iterate twice — save the result",
          lang === "ur" ? "Teeno compare karo — LinkedIn pe share karo" : "Compare all three — share on LinkedIn",
        ]} />
        <ExBox n={2} title={lang === "ur" ? "Canva AI Design Banao" : "Create a Canva AI Design"} steps={[
          lang === "ur" ? "Canva mein LinkedIn Post size (1200x628) banao" : "Open Canva, create LinkedIn Post size (1200x628)",
          lang === "ur" ? "Text to Image se visual banao" : "Use Text to Image to generate a visual",
          lang === "ur" ? "Magic Write se headline add karo" : "Use Magic Write to add a headline",
          lang === "ur" ? "Download karo aur LinkedIn post mein use karo" : "Download and use it in your next LinkedIn post",
        ]} />
        <ExBox n={3} title={lang === "ur" ? "Video Script Likho" : "Write a Video Script"} steps={[
          lang === "ur" ? "ChatGPT script prompt use karo — 60 second script" : "Use the ChatGPT script prompt above — 60 second script",
          lang === "ur" ? "'AI class mein pehle hafte kya seekha' — ya apna topic" : "'What I learned in my first week of AI class' — or your topic",
          lang === "ur" ? "Script save karo — Week 4 mein record karenge" : "Save the script — we'll record it in Week 4",
        ]} />
      </div>

      {/* Week 4 Project */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-bold px-3 py-1 rounded text-violet-400" style={{ background: "rgba(139,92,246,0.12)" }}>Week 4</span>
          <h2 className="text-lg font-bold" style={{ color: "var(--tx)" }}>
            {lang === "ur" ? "Real Project — Complete Content Package" : "Real Project — Complete Content Package"}
          </h2>
        </div>
        <div className="space-y-3">
          {[
            { part: lang === "ur" ? "Part 1: Blog Post (ChatGPT)" : "Part 1: Blog Post (ChatGPT)", steps: [
              lang === "ur" ? `"Mere liye [topic] ke baare mein 400-word blog post likho. Catchy headline. 3 sections. Engaging tone."` : `"Write a 400-word blog post about [your topic]. Catchy headline. 3 short sections. Engaging tone."`,
              lang === "ur" ? "2 baar iterate karo — tone ya structure improve karo" : "Iterate at least twice — improve tone or structure",
              lang === "ur" ? "Google Docs mein paste karo" : "Paste final version into Google Docs",
            ]},
            { part: lang === "ur" ? "Part 2: Feature Image (Canva AI)" : "Part 2: Feature Image (Canva AI)", steps: [
              lang === "ur" ? "1200x628 LinkedIn post design" : "1200x628 LinkedIn post design",
              lang === "ur" ? "Text to Image se main visual" : "Use Text to Image for the main visual",
              lang === "ur" ? "Blog post ki headline image pe add karo" : "Add blog post headline as text on image",
              lang === "ur" ? "PNG download karo" : "Download as PNG",
            ]},
            { part: lang === "ur" ? "Part 3: Video Script (ChatGPT + CapCut)" : "Part 3: Video Script (ChatGPT + CapCut)", steps: [
              lang === "ur" ? "60-second script prompt use karo" : "Use the 60-second script prompt",
              lang === "ur" ? "CapCut AI Script mein paste karo — video generate" : "Paste into CapCut AI Script — generate video",
              lang === "ur" ? "Auto captions add karo — export" : "Add auto captions — export",
            ]},
            { part: lang === "ur" ? "Part 4: LinkedIn Publish" : "Part 4: LinkedIn Publish", steps: [
              lang === "ur" ? "Blog text post karo — Canva image attach karo" : "Post blog text with Canva image attached",
              lang === "ur" ? "Perfect Post Formula use karo" : "Use the Perfect Post Formula",
              lang === "ur" ? "Hashtags add karo" : "Add hashtags",
            ]},
          ].map(s => (
            <Card key={s.part}>
              <p className="font-semibold text-sm mb-2" style={{ color: "var(--tx)" }}>{s.part}</p>
              <ul className="space-y-1">
                {s.steps.map((step, i) => (
                  <li key={i} className="text-xs flex items-start gap-2" style={{ color: "var(--tx3)" }}>
                    <span className="text-blue-400 shrink-0 mt-0.5">•</span>{step}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* Checklist */}
      <div className="p-5 rounded-xl mb-6" style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.2)" }}>
        <h4 className="font-semibold text-blue-400 mb-3 text-sm">
          {lang === "ur" ? "Week 3-4 Checklist" : "Week 3-4 Completion Checklist"}
        </h4>
        <div className="space-y-2">
          {[
            lang === "ur" ? "3-level prompt comparison kiya" : "Completed 3-level prompt comparison exercise",
            lang === "ur" ? "Canva AI se design banaya" : "Created at least one Canva AI design",
            lang === "ur" ? "60-second video script likhi" : "Wrote a 60-second video script with ChatGPT",
            lang === "ur" ? "Poora content package complete (blog + image + script)" : "Completed full content package (blog + image + script)",
            lang === "ur" ? "LinkedIn pe ek post publish ki" : "Published at least one LinkedIn post this week",
          ].map(item => (
            <label key={item} className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-0.5 w-4 h-4 accent-blue-500 shrink-0" />
              <span className="text-sm" style={{ color: "var(--tx3)" }}>{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Homework */}
      <div className="p-5 rounded-xl mb-8" style={{ background: "#0a0a0a", border: "1px solid var(--bdr2)" }}>
        <h4 className="font-semibold text-yellow-400 mb-3 text-sm">
          {lang === "ur" ? "Ghar Ka Kaam — Week 3-4" : "Homework — Week 3-4"}
        </h4>
        <ul className="space-y-2">
          {[
            lang === "ur" ? "Is hafte LinkedIn pe kam az kam ek post karo" : "Post at least once on LinkedIn this week",
            lang === "ur" ? "5 alag prompt techniques try karo — results compare karo" : "Try 5 different prompting techniques — compare results",
            lang === "ur" ? "Canva AI 20 minute explore karo — sirf fun ke liye" : "Explore Canva AI for 20 minutes — just for fun",
            lang === "ur" ? "Apne best prompts ek 'Prompt Library' doc mein save karo" : "Save your best prompts in a 'Prompt Library' document",
          ].map(item => (
            <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--tx3)" }}>
              <span className="text-yellow-400 shrink-0">→</span>{item}
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6" style={{ borderTop: "1px solid var(--bdr)" }}>
        <Link href="/summer-camp/week-1-2" className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg"
          style={{ color: "var(--tx3)", border: "1px solid var(--bdr)", background: "var(--bg2)" }}>
          ← Week 1–2
        </Link>
        <Link href="/summer-camp/week-5-6" className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg text-blue-400"
          style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.25)" }}>
          Week 5–6 <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
    </>
  );
}
