"use client";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import WeekProgress from "@/components/WeekProgress";

const accent = "#22c55e";
const weekColors: Record<string, string> = { green: "#22c55e", blue: "#3b82f6" };

const content = {
  ur: {
    badge: "ہفتہ 1–2 • AI کی دنیا",
    title: "🌟 AI ki Duniya",
    subtitle: "AI Foundations + Professional Identity Setup — No Coding Required",
    topics: [
      {
        n: 1, icon: "🤖", title: "AI Kya Hai?",
        story: "Socho ke tumhara ek bahut smart dost hai jo duniya bhar ki kitabein padh chuka hai. Tum use koi bhi sawaal poochho — woh fauran jawab deta hai, tumhare liye likhta hai, images banata hai. Yahi AI hai!",
        defLabel: "Simple Definition:",
        def: "AI = Computer program jo insaanon ki tarah soch sakta hai, seekh sakta hai, aur kaam kar sakta hai.",
        listTitle: "Tum pehle se AI use kar rahe ho:",
        list: ["YouTube ka next video suggest karna — AI hai", "Google Maps ka shortest route — AI hai", "WhatsApp ka auto-correct — AI hai", "TikTok ka feed — AI decide karta hai", "Spam folder mein emails — AI filter karta hai"],
        tableHeaders: ["Type", "Matlab", "Misal"],
        tableRows: [["Narrow AI", "Sirf ek kaam", "Chess khelna, face recognition"], ["General AI", "Insaan jaise — abhi nahi", "(Coming soon)"], ["Generative AI", "Naya content banata hai", "ChatGPT, Claude, image generators"]],
      },
      {
        n: 2, icon: "⚖️", title: "ChatGPT, Claude, Gemini — Fark Kya Hai?",
        story: "Teen alag teachers hain — sab padhate hain, lekin har ek ka apna andaz hai. Kaunsa tool kab use karna hai — yeh jaanna zaroori hai!",
        tableHeaders: ["Tool", "Company", "Best Use"],
        tableRows: [["ChatGPT", "OpenAI", "Writing, coding, brainstorming, general tasks"], ["Claude", "Anthropic", "Long documents, careful analysis, safe responses"], ["Gemini", "Google", "Real-time info, Google se connected, research"]],
        tip: "💡 Tip: Teeno free hain! Experiment karo aur dekho kaun sa best kaam karta hai.",
      },
      {
        n: 3, icon: "🔮", title: "AI ka Future — Pakistan Mein Kya Hoga?",
        story: "2010 mein 'social media manager' ek job nahi thi. 2015 mein 'YouTuber' career nahi tha. Aaj jo log AI seekh rahe hain — woh 2026-2027 mein woh jobs karenge jo abhi exist bhi nahi karti!",
        listTitle: "Jobs Jo AI Se Aayengi:",
        list: ["Prompt Engineer — AI ko sahi instructions dena", "AI Content Creator — AI se content banana", "AI Trainer — AI models ko better banana", "No-Code Developer — bina coding ke AI apps banana", "AI Consultant — businesses ko AI sikhana"],
        highlight: "Pakistan mein AI education abhi bahut kam hai — jo log abhi seekhein, woh aage bahut valuable honge!",
      },
      {
        n: 4, icon: "✍️", title: "Prompt Engineering — AI Se Kaam Kaise Lo",
        story: "Agar ek employee ko sirf 'kuch likho' kaho — woh confuse ho jayega. Lekin agar detailed instructions do — woh exactly wahi karega jo chahiye. AI bhi isi tarah kaam karta hai!",
        compareHeaders: ["❌ Bura Prompt", "✅ Acha Prompt"],
        compareRows: [
          ["Essay likho", "Mujhe 500 words ka essay chahiye climate change ke upar, simple English mein, 15 saal ke student ke liye"],
          ["CV banao", "Mera professional CV banao. Mera naam Ali hai, 17 saal, computer science mein interest, Karachi mein"],
          ["Translate karo", "Yeh paragraph Urdu mein translate karo, formal language use karo"],
          ["Code likho", "Python mein ek simple calculator banao jisme add, subtract, multiply kaam kare, comments bhi daalo"],
        ],
        formulaTitle: "Perfect Prompt Formula:",
        formula: [
          { k: "ROLE", v: "Tu kya hai? (Tu ek professional writer hai...)" },
          { k: "TASK", v: "Kya karna hai? (Mujhe ek email likhni hai...)" },
          { k: "CONTEXT", v: "Background kya hai? (Mere client ka naam Ahmed hai...)" },
          { k: "FORMAT", v: "Kaise chahiye? (Formal tone, 3 paragraphs, 200 words mein)" },
        ],
      },
      {
        n: 5, icon: "🪪", title: "LinkedIn + GitHub: Tumhari Professional Identity",
        story: "Socho ke tum interview mein ho. HR manager poochhe: 'Apna kaam dikhao.' Agar tumhare paas sirf degree hai — sab ke paas hoti hai. Lekin LinkedIn + GitHub dikhao — tum alag dikhoge!",
        platforms: [
          {
            name: "🔗 LinkedIn", color: "blue",
            desc: "Professional social media — jaise Facebook, lekin sirf career aur jobs ke liye.",
            tips: ["Professional photo — saaf background", "Headline: 'AI Learner | Content Creator | 17 yr old'", "About section: AI se likhwao", "Skills: ChatGPT, Prompt Engineering, Canva"],
          },
          {
            name: "🐙 GitHub", color: "gray",
            desc: "Developers apna code aur projects yahan rakhte hain — tumhara project portfolio!",
            tips: ["github.com par account banao", "Profile picture aur bio add karo", "README file: AI se likhwao", "LinkedIn link GitHub pe daalo"],
          },
        ],
      },
    ],
    exercises: [
      {
        week: "Week 1", color: "green",
        items: [
          {
            n: 1, title: "Apna CV AI Se Banwao",
            steps: [
              "ChatGPT kholо (chat.openai.com)",
              'Yeh prompt daalo: "Main ek 16 saal ka student hoon jo Karachi mein rehta hoon. Mujhe computers aur AI mein interest hai. Mera naam [apna naam] hai. Mere liye ek professional CV banao."',
              "Result copy karo — Google Docs mein paste karo",
              "Apni real details se update karo",
            ],
          },
          {
            n: 2, title: "LinkedIn Profile Setup",
            steps: [
              "linkedin.com par jaao — Google account se free sign up karo",
              "Apni real photo upload karo",
              "Headline: 'AI Learner | [Sheher] | Class [X]'",
              "ChatGPT se About section likhwao",
              "Pehli post: 'Maine aaj AI seekhna shuru kiya' — publish karo!",
            ],
          },
          {
            n: 3, title: "GitHub Setup",
            steps: [
              "github.com par account banao",
              "Profile mein bio add karo",
              'ChatGPT se README likhwao: "Mere liye ek GitHub profile README likho, main AI learner hoon"',
              "README upload karo — done!",
            ],
          },
        ],
      },
      {
        week: "Week 2 — Real Project", color: "blue",
        items: [
          {
            n: 1, title: "Apni Problem Ka AI Solution",
            steps: [
              "Apni ek real problem likho (e.g., 'Main subah uthne mein late hota hoon')",
              "ChatGPT se solution maango — detailed prompt likho (ROLE + TASK + CONTEXT + FORMAT use karo)",
              "Solution ko refine karo — 3-4 bar prompt improve karo",
              "LinkedIn pe post banao: 'Maine AI se yeh problem solve ki...'",
              "Hashtags add karo: #AI #Learning #Pakistan #StudentLife",
            ],
          },
        ],
      },
    ],
    checklist: ["LinkedIn profile live hai — link share kiya", "GitHub account live hai — README upload kiya", "LinkedIn pe pehli post publish ki", "Real problem ka AI solution banaya", "ChatGPT, Claude, ya Gemini se kuch useful banaya"],
    homework: ["Roz 15 minute ChatGPT use karo — koi bhi sawaal poochho", "5 alag topics pe prompts likho aur results compare karo", "LinkedIn pe 2 log follow karo jo AI ke baare mein likhte hain", "Apne GitHub pe README update karo", "Apne family member ko batao AI kya hai — simple words mein"],
    checklistTitle: "✅ Week 1-2 Checklist",
    hwTitle: "📚 Ghar Ka Kaam",
    nextBtn: "Week 3–4: Prompt Mastery →",
  },
  en: {
    badge: "Week 1–2 • The World of AI",
    title: "🌟 The World of AI",
    subtitle: "AI Foundations + Professional Identity Setup — No Coding Required",
    topics: [
      {
        n: 1, icon: "🤖", title: "What is Artificial Intelligence (AI)?",
        story: "Imagine you have an incredibly well-read friend who has studied millions of books and websites. You can ask them anything — they'll answer instantly, write for you, create images. That's AI!",
        defLabel: "Simple Definition:",
        def: "AI = A computer program that can think, learn, and perform tasks the way humans do — by learning from massive amounts of data.",
        listTitle: "You already use AI every day:",
        list: ["YouTube recommending your next video — AI", "Google Maps finding the shortest route — AI", "WhatsApp auto-correct — AI", "TikTok deciding what's in your feed — AI", "Emails going to spam automatically — AI"],
        tableHeaders: ["Type", "What It Means", "Example"],
        tableRows: [["Narrow AI", "Does one specific thing", "Chess, face recognition"], ["General AI", "Human-like — doesn't fully exist yet", "(Coming soon)"], ["Generative AI", "Creates new content", "ChatGPT, Claude, image generators"]],
      },
      {
        n: 2, icon: "⚖️", title: "ChatGPT, Claude, Gemini — What's the Difference?",
        story: "Three different teachers — they all teach, but each has their own style. Knowing which tool to use for which task is a skill in itself!",
        tableHeaders: ["Tool", "Company", "Best For"],
        tableRows: [["ChatGPT", "OpenAI", "Writing, coding, brainstorming, general tasks"], ["Claude", "Anthropic", "Long documents, careful analysis, nuanced responses"], ["Gemini", "Google", "Real-time info, Google-connected, research"]],
        tip: "💡 Tip: All three are free! Experiment and see which works best for your task.",
      },
      {
        n: 3, icon: "🔮", title: "The Future of AI — What's Coming to Pakistan?",
        story: "In 2010, nobody imagined 'social media manager' would be a job. In 2015, 'YouTuber' wasn't a career. Today, the people learning AI are building skills for jobs that don't even exist yet!",
        listTitle: "Jobs That AI Will Create:",
        list: ["Prompt Engineer — giving AI the right instructions", "AI Content Creator — building AI-generated content", "AI Trainer — improving how AI models learn", "No-Code Developer — building AI apps without coding", "AI Consultant — helping businesses use AI"],
        highlight: "AI education is still extremely rare in Pakistan — whoever learns it now has a massive head start!",
      },
      {
        n: 4, icon: "✍️", title: "Prompt Engineering — How to Get the Best from AI",
        story: "If you told a new employee 'write something' — they'd be confused. But detailed instructions get perfect results. AI works exactly the same way!",
        compareHeaders: ["❌ Weak Prompt", "✅ Strong Prompt"],
        compareRows: [
          ["Write an essay", "Write a 500-word essay about climate change in simple English, for a 15-year-old student"],
          ["Make a CV", "Create a professional CV for me. My name is Ali, I'm 17, interested in computer science, based in Karachi"],
          ["Translate this", "Translate this paragraph into Urdu using formal, professional language"],
          ["Write code", "Write a simple Python calculator with add, subtract, and multiply functions. Add comments"],
        ],
        formulaTitle: "The Perfect Prompt Formula:",
        formula: [
          { k: "ROLE", v: "Who should AI act as? ('You are a professional career advisor...')" },
          { k: "TASK", v: "What needs to be done? ('Write me a cover letter...')" },
          { k: "CONTEXT", v: "What's the background? ('I am a 17-year-old student applying for...')" },
          { k: "FORMAT", v: "How should it look? ('Under 200 words, formal tone, 3 short paragraphs')" },
        ],
      },
      {
        n: 5, icon: "🪪", title: "LinkedIn + GitHub: Your Professional Identity",
        story: "Imagine you're in a job interview and they ask: 'Show us your work.' If you can share a LinkedIn + GitHub profile — you immediately stand apart!",
        platforms: [
          {
            name: "🔗 LinkedIn", color: "blue",
            desc: "The world's largest professional networking platform — like Facebook, but for careers and jobs.",
            tips: ["Professional photo — clean background", "Headline: 'AI Learner | Content Creator | 17-year-old builder'", "About section: Use AI to write your story", "Skills: ChatGPT, Prompt Engineering, Canva"],
          },
          {
            name: "🐙 GitHub", color: "gray",
            desc: "Where developers store and share code — your project portfolio!",
            tips: ["Create an account at github.com", "Add a profile picture and short bio", "Use AI to write your README", "Add your LinkedIn link to GitHub"],
          },
        ],
      },
    ],
    exercises: [
      {
        week: "Week 1", color: "green",
        items: [
          {
            n: 1, title: "Build Your CV with AI",
            steps: [
              "Open ChatGPT (chat.openai.com)",
              'Type this prompt: "I am a 16-year-old student based in Karachi, Pakistan. I have an interest in computers and AI. My name is [your name]. Create a professional CV for me."',
              "Copy the result — paste it into Google Docs",
              "Update with your real details",
            ],
          },
          {
            n: 2, title: "Set Up LinkedIn",
            steps: [
              "Go to linkedin.com — sign up free with Google account",
              "Upload a real photo",
              "Write your headline: 'AI Learner | [City] | Class [X]'",
              "Use ChatGPT to write your About section",
              "Write your first post: 'I just started learning AI today' — publish it!",
            ],
          },
          {
            n: 3, title: "Set Up GitHub",
            steps: [
              "Create an account at github.com",
              "Add a short bio to your profile",
              'Ask ChatGPT: "Write a GitHub profile README for me — I am an AI learner named [your name]"',
              "Upload the README — done!",
            ],
          },
        ],
      },
      {
        week: "Week 2 — Real Project", color: "blue",
        items: [
          {
            n: 1, title: "Solve a Real Problem with AI",
            steps: [
              "Write down one real problem you face (e.g., 'I struggle to wake up on time for school')",
              "Write a detailed prompt asking ChatGPT for a solution (use ROLE + TASK + CONTEXT + FORMAT)",
              "Refine the solution — improve your prompt 3-4 times",
              "Write a LinkedIn post: 'I used AI to solve this problem...'",
              "Add hashtags: #AI #Learning #Pakistan #StudentLife",
            ],
          },
        ],
      },
    ],
    checklist: ["LinkedIn profile is live — link shared with teacher", "GitHub account is live — README uploaded", "First LinkedIn post has been published", "Completed the real problem AI project", "Used ChatGPT, Claude, or Gemini to create something useful"],
    homework: ["Spend 15 minutes every day on ChatGPT — ask it anything", "Write prompts on 5 different topics and compare the results", "Follow 2 people on LinkedIn who post about AI", "Update your GitHub README with one more thing about yourself", "Explain what AI is to one family member in your own words"],
    checklistTitle: "✅ Week 1-2 Completion Checklist",
    hwTitle: "📚 Homework — Week 1-2",
    nextBtn: "Week 3–4: Prompt Mastery →",
  },
};

export default function Week12Page() {
  const { lang } = useLang();
  const tx = content[lang];

  return (
    <>
    <WeekProgress current={1} />
    <div className="max-w-3xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm mb-3" style={{ color: "var(--tx3)" }}>
          <Link href="/summer-camp" className="font-medium hover:underline" style={{ color: "var(--tx3)" }}>🏕️ Summer Camp</Link>
          <span>›</span>
          <span className="font-bold" style={{ color: "var(--tx2)" }}>Week 1–2</span>
        </div>
        <div className="text-xs font-black px-4 py-1.5 rounded-full inline-block mb-3 text-white"
          style={{ background: accent }}>
          {tx.badge}
        </div>
        <h1 className="text-3xl font-black mb-2" style={{ color: "var(--tx)" }}>{tx.title}</h1>
        <p className="font-medium" style={{ color: "var(--tx3)" }}>{tx.subtitle}</p>
      </div>

      {/* Topics */}
      {tx.topics.map((topic) => (
        <div key={topic.n} className="rounded-3xl p-6 mb-5" style={{ background: "var(--bg2)", border: "1px solid var(--bdr)" }}>
          {/* Topic badge + title */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shrink-0 text-white"
              style={{ background: accent }}>{topic.n}</div>
            <h2 className="text-xl font-black" style={{ color: "var(--tx)" }}>{topic.icon} {topic.title}</h2>
          </div>

          {/* Story box */}
          <div className="rounded-r-2xl p-4 mb-4 text-sm leading-relaxed"
            style={{ background: "rgba(34,197,94,0.06)", borderLeft: "4px solid #22c55e", color: "var(--tx2)" }}>
            📖 {topic.story}
          </div>

          {/* Definition */}
          {'def' in topic && (
            <div className="rounded-2xl p-4 mb-4 text-white" style={{ background: accent }}>
              <p className="font-black text-sm mb-1">{topic.defLabel}</p>
              <p className="text-sm" style={{ opacity: 0.9 }}>{topic.def}</p>
            </div>
          )}

          {/* List */}
          {'list' in topic && (
            <div className="mb-4">
              {'listTitle' in topic && <p className="font-bold mb-2 text-sm" style={{ color: "var(--tx2)" }}>{topic.listTitle}</p>}
              <ul className="space-y-1.5">
                {topic.list!.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--tx3)" }}>
                    <span className="font-black shrink-0 mt-0.5" style={{ color: accent }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Highlight box */}
          {'highlight' in topic && (
            <div className="rounded-2xl p-4 text-sm font-bold"
              style={{ background: "rgba(234,179,8,0.08)", border: "2px solid rgba(234,179,8,0.35)", color: "#ca8a04" }}>
              ⚡ {topic.highlight}
            </div>
          )}

          {/* Table */}
          {'tableHeaders' in topic && (
            <div className="overflow-x-auto rounded-2xl mb-4" style={{ border: "1px solid var(--bdr)" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "var(--bg3)" }}>
                    {topic.tableHeaders!.map(h => (
                      <th key={h} className="px-4 py-2.5 text-left font-bold text-sm" style={{ color: "var(--tx)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {topic.tableRows!.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "var(--bg2)" : "var(--bg3)" }}>
                      {row.map((cell, j) => (
                        <td key={j} className="px-4 py-2.5" style={{ color: "var(--tx2)", borderTop: "1px solid var(--bdr)" }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Tip */}
          {'tip' in topic && (
            <div className="rounded-2xl p-3 text-sm font-medium"
              style={{ background: "rgba(234,179,8,0.08)", border: "2px solid rgba(234,179,8,0.25)", color: "#ca8a04" }}>
              {topic.tip}
            </div>
          )}

          {/* Prompt compare table */}
          {'compareHeaders' in topic && (
            <div className="overflow-x-auto rounded-2xl mb-4" style={{ border: "1px solid var(--bdr)" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left font-black" style={{ background: "rgba(239,68,68,0.1)", color: "#ef4444" }}>{topic.compareHeaders![0]}</th>
                    <th className="px-4 py-3 text-left font-black" style={{ background: "rgba(34,197,94,0.1)", color: "#22c55e" }}>{topic.compareHeaders![1]}</th>
                  </tr>
                </thead>
                <tbody>
                  {topic.compareRows!.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "var(--bg2)" : "var(--bg3)" }}>
                      <td className="px-4 py-3 text-sm italic" style={{ color: "var(--tx3)", borderTop: "1px solid var(--bdr)" }}>{row[0]}</td>
                      <td className="px-4 py-3 text-sm font-medium" style={{ color: "var(--tx2)", borderTop: "1px solid var(--bdr)" }}>{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Formula */}
          {'formula' in topic && (
            <div className="rounded-2xl p-5 mb-4" style={{ background: "var(--bg3)", border: "1px solid var(--bdr2)" }}>
              <p className="font-black text-sm mb-3 uppercase tracking-wider" style={{ color: accent }}>{topic.formulaTitle}</p>
              <div className="space-y-2">
                {topic.formula!.map(f => (
                  <div key={f.k} className="flex gap-3">
                    <span className="font-black text-sm w-20 shrink-0" style={{ color: accent }}>{f.k}</span>
                    <span className="text-sm" style={{ color: "var(--tx3)" }}>{f.v}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Platforms */}
          {'platforms' in topic && (
            <div className="grid md:grid-cols-2 gap-4">
              {topic.platforms!.map(p => (
                <div key={p.name} className="rounded-2xl p-4" style={{ background: "var(--bg3)", border: "1px solid var(--bdr)" }}>
                  <p className="font-black mb-1" style={{ color: "var(--tx)" }}>{p.name}</p>
                  <p className="text-xs mb-3 leading-relaxed" style={{ color: "var(--tx3)" }}>{p.desc}</p>
                  <ul className="space-y-1">
                    {p.tips.map(tip => (
                      <li key={tip} className="text-xs flex items-start gap-1.5" style={{ color: "var(--tx3)" }}>
                        <span className="shrink-0 font-black" style={{ color: accent }}>•</span> {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Exercises */}
      {tx.exercises.map((section) => {
        const weekAccent = weekColors[section.color] || accent;
        return (
          <div key={section.week} className="mb-6">
            <h2 className="text-xl font-black mb-4 flex items-center gap-2" style={{ color: "var(--tx)" }}>
              <span className="text-sm px-3 py-1 rounded-full font-black text-white" style={{ background: weekAccent }}>
                {section.week}
              </span>
              Practical Exercises
            </h2>
            {section.items.map((ex) => (
              <div key={ex.n} className="rounded-3xl p-5 mb-4" style={{ background: "var(--bg2)", border: "1px solid var(--bdr)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-black px-2.5 py-1 rounded-full text-white" style={{ background: weekAccent }}>
                    Exercise {ex.n}
                  </span>
                  <h4 className="font-black" style={{ color: "var(--tx)" }}>{ex.title}</h4>
                </div>
                <ol className="space-y-2">
                  {ex.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--tx3)" }}>
                      <span className="font-black text-xs w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: "rgba(34,197,94,0.12)", color: "#22c55e" }}>
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        );
      })}

      {/* Checklist */}
      <div className="rounded-3xl p-6 mb-5" style={{ background: "rgba(34,197,94,0.06)", border: "2px solid rgba(34,197,94,0.25)" }}>
        <h4 className="font-black text-lg mb-4" style={{ color: accent }}>{tx.checklistTitle}</h4>
        <div className="space-y-3">
          {tx.checklist.map(item => (
            <label key={item} className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" className="mt-0.5 w-5 h-5 accent-green-500 shrink-0 cursor-pointer" />
              <span className="text-sm font-medium transition-colors" style={{ color: "var(--tx2)" }}>{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Homework */}
      <div className="rounded-3xl p-6 mb-8" style={{ background: "var(--bg3)", border: "1px solid var(--bdr2)" }}>
        <h4 className="font-black text-lg mb-4 text-yellow-400">{tx.hwTitle}</h4>
        <ul className="space-y-2.5">
          {tx.homework.map(item => (
            <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--tx3)" }}>
              <span className="text-yellow-400 font-black shrink-0 mt-0.5">→</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex justify-end">
        <Link href="/summer-camp/week-3-4"
          className="px-6 py-4 rounded-2xl font-black text-base transition-colors shadow-lg text-white"
          style={{ background: accent }}>
          {tx.nextBtn}
        </Link>
      </div>
    </div>
    </>
  );
}
