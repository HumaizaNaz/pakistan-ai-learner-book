"use client";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import WeekProgress from "@/components/WeekProgress";

const accent = "#a855f7";

function Topic({ n, title, icon, children }: { n: number; title: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 text-white"
          style={{ background: accent }}>{n}</div>
        <h2 className="text-xl font-bold" style={{ color: "var(--tx)" }}>{icon} {title}</h2>
      </div>
      <div className="ml-11">{children}</div>
    </div>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-r-lg p-4 mb-4 text-sm leading-relaxed"
      style={{ background: "rgba(168,85,247,0.06)", borderLeft: "4px solid #a855f7", color: "var(--tx2)" }}>
      📖 {children}
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm border-collapse rounded-xl overflow-hidden"
        style={{ border: "1px solid var(--bdr)" }}>
        <thead>
          <tr style={{ background: "var(--bg3)" }}>
            {headers.map(h => (
              <th key={h} className="px-4 py-3 text-left font-semibold text-sm" style={{ color: "var(--tx)" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "var(--bg2)" : "var(--bg3)" }}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3" style={{ color: "var(--tx2)", borderTop: "1px solid var(--bdr)" }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Week78Page() {
  const { lang } = useLang();

  return (
    <>
    <WeekProgress current={4} />
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm mb-3" style={{ color: "var(--tx3)" }}>
          <Link href="/summer-camp" className="hover:underline" style={{ color: "var(--tx3)" }}>Summer Camp</Link>
          <span>›</span>
          <span className="font-medium" style={{ color: "var(--tx2)" }}>Week 7–8</span>
        </div>
        <div className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider"
          style={{ background: "rgba(168,85,247,0.1)", color: accent, border: "1px solid rgba(168,85,247,0.25)" }}>
          Week 7–8 • Final Week — Portfolio + Everything Connected
        </div>
        <h1 className="text-3xl font-bold mb-3" style={{ color: "var(--tx)" }}>🌐 Tumhara Complete Professional Package</h1>
        <p className="leading-relaxed" style={{ color: "var(--tx3)" }}>Portfolio Website • HTML/CSS Basics • Bolt.new • Sab Connected</p>
      </div>

      <Topic n={1} title="Portfolio Website Kyun Zaroori Hai?" icon="💼">
        <InfoBox>
          Do candidates interview mein jaate hain. Dono ki education same hai. Dono kehte hain AI aata hai. Lekin ek kehta hai: &apos;Yeh meri website hai — ismein mere projects, LinkedIn, GitHub, aur CV sab ek jagah hain.&apos; Doosre ke paas kuch nahi. Kaun job paayega?
        </InfoBox>
        <Table
          headers={["Portfolio Section", "Kya Jaayega Yahan"]}
          rows={[
            ["Hero / Introduction", "Tumhara naam, ek-line description, aur professional photo"],
            ["About Me", "2-3 sentences — tum kaun ho, kya seekh rahe ho, goals"],
            ["Skills", "ChatGPT, Canva AI, CapCut AI, Prompt Engineering, GitHub"],
            ["Projects", "Week 5-6 project ka GitHub link + koi aur kaam"],
            ["LinkedIn Link", "Button ya link tumhare LinkedIn profile pe"],
            ["GitHub Link", "Button ya link tumhare GitHub profile pe"],
            ["CV Download", "Button jo tumhara AI-generated CV PDF mein download karaaye"],
            ["Contact", "Tumhara email ya simple contact form"],
          ]}
        />
        <div className="rounded-xl p-4" style={{ background: "rgba(168,85,247,0.06)", border: "1px solid rgba(168,85,247,0.2)" }}>
          <p className="font-bold mb-2 text-sm" style={{ color: accent }}>3 Tools Jo Hum Use Karenge:</p>
          <ul className="space-y-1.5">
            {[
              "Bolt.new — AI tumhari poori website text description se banata hai (koi coding nahi)",
              "GitHub — website ka code upload aur host karne ke liye (free)",
              "GitHub Pages — website ko real URL ke saath live karne ke liye (bhi free)",
            ].map(item => (
              <li key={item} className="text-sm flex items-start gap-2" style={{ color: "var(--tx2)" }}>
                <span className="shrink-0" style={{ color: accent }}>✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </Topic>

      <Topic n={2} title="HTML aur CSS: Samjho, Yaad Mat Karo" icon="🏗️">
        <InfoBox>
          Gaadi chalane ke liye mechanic hona zaruri nahi. Lekin yeh jaanna ke accelerator dabaane se speed badhti hai — yeh basic samajh tumhe behtar driver banati hai. HTML aur CSS bhi aise hi hain. Likhna zaruri nahi — lekin yeh samajhna ke yeh kya karta hai, AI-generated code dekhte waqt confidence deta hai.
        </InfoBox>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="font-bold mb-2 text-sm" style={{ color: "var(--tx)" }}>HTML — Dhancha (Structure)</p>
            <p className="text-xs mb-3 leading-relaxed" style={{ color: "var(--tx3)" }}>HTML webpage ka skeleton hai. Yeh define karta hai page pe kya exist karta hai — headings, paragraphs, images, buttons, links. HTML ko imarat ki neev samjho.</p>
            <Table
              headers={["HTML Tag", "Kya Karta Hai"]}
              rows={[
                ["&lt;h1&gt; se &lt;h6&gt;", "Headings — sabse bada h1"],
                ["&lt;p&gt;", "Text ka ek paragraph"],
                ["&lt;img&gt;", "Image dikhata hai"],
                ["&lt;a&gt;", "Clickable link"],
                ["&lt;button&gt;", "Clickable button"],
                ["&lt;div&gt;", "Container ya section"],
              ]}
            />
          </div>
          <div>
            <p className="font-bold mb-2 text-sm" style={{ color: "var(--tx)" }}>CSS — Style aur Design</p>
            <p className="text-xs mb-3 leading-relaxed" style={{ color: "var(--tx3)" }}>CSS page ko khoobsurat banata hai. Yeh colours, fonts, sizes, spacing, aur layout control karta hai. CSS ko interior design samjho.</p>
            <Table
              headers={["CSS Property", "Kya Control Karta Hai"]}
              rows={[
                ["color", "Text ka rang"],
                ["background-color", "Background colour"],
                ["font-size", "Text kitna bada"],
                ["padding", "Element ke andar space"],
                ["margin", "Element ke bahar space"],
                ["border-radius", "Rounded corners"],
              ]}
            />
          </div>
        </div>
        <div className="rounded-xl p-4" style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)" }}>
          <p className="font-bold mb-1 text-sm text-green-400">⚡ Sabse Zaroori Baat:</p>
          <p className="text-sm" style={{ color: "var(--tx2)" }}>Tumhe HTML ya CSS likhna NAHI hai. Bolt.new jaisi AI tools sab khud generate kar deti hain. Tumhe sirf yeh samajhna hai ke yeh kya hai — taake code dekhke darne ki zaroorat na ho.</p>
        </div>
      </Topic>

      <Topic n={3} title="Bolt.new: AI Se Apna Portfolio Banao" icon="⚡">
        <InfoBox>
          Bolt.new ek AI-powered web builder hai jahan tum simple English mein apni website describe karte ho — aur woh seconds mein poori working HTML, CSS, aur JavaScript generate kar deta hai. Phir tum edit karo, customize karo, aur live deploy karo. Koi coding course nahi chahiye.
        </InfoBox>
        <div className="rounded-xl p-5 mb-4" style={{ background: "var(--bg3)", border: "1px solid var(--bdr2)" }}>
          <p className="font-bold text-sm mb-3" style={{ color: accent }}>Step-by-Step: Bolt.new Pe Portfolio Banao</p>
          <ol className="space-y-1.5 text-sm" style={{ color: "var(--tx3)" }}>
            {[
              "bolt.new par jaao aur free sign up karo",
              "Prompt box mein apni portfolio ki detailed description type karo (neeche diya gaya prompt use karo)",
              "30-60 seconds wait karo — Bolt tumhari complete website generate kar deta hai",
              "Browser mein preview dekho — kaisi lag rahi hai",
              "Koi bhi text seedha edit karo — click karo aur badlo",
              "Code ZIP file mein download karo",
              "GitHub pe upload karo — tumhara portfolio ab tumhare repository mein hai",
            ].map((s, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="shrink-0" style={{ color: accent }}>{i + 1}.</span> {s}
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-xl p-4" style={{ background: "var(--bg2)", border: "1px solid rgba(168,85,247,0.2)" }}>
          <p className="font-bold mb-2 text-sm" style={{ color: "var(--tx)" }}>Bolt.new Prompt — Copy Karo aur Customize Karo:</p>
          <div className="rounded-lg p-3 font-mono text-xs leading-relaxed" style={{ background: "var(--bg3)", color: "var(--tx2)" }}>
            &ldquo;Create a clean, modern, single-page portfolio website for <strong>[Tumhara Naam]</strong>, a 16-year-old AI learner based in Karachi, Pakistan. The website should include:
            <br/>- A hero section with my name, title &apos;AI Learner &amp; Content Creator&apos;, and a short tagline
            <br/>- An About Me section with 3 sentences about my background and goals
            <br/>- A Skills section: Prompt Engineering, ChatGPT, Canva AI, CapCut AI, GitHub, Content Creation
            <br/>- A Projects section with placeholders for 2 projects (title, description, GitHub link)
            <br/>- A Contact section with LinkedIn and GitHub buttons
            <br/>Use a professional navy blue and white colour scheme. Make it mobile-friendly. Clean, minimal design.&rdquo;
          </div>
        </div>
      </Topic>

      <Topic n={4} title="GitHub Pages: Website Free Mein Live Karo" icon="🚀">
        <InfoBox>
          Abhi tumhara portfolio sirf tumhare computer pe files hain. GitHub Pages ek free service hai jo un files ko tumhare GitHub repository se uthata hai aur internet pe daalta hai — tumhe ek real URL deta hai jaise: yourusername.github.io
        </InfoBox>
        <div className="rounded-xl p-5 mb-4" style={{ background: "var(--bg3)", border: "1px solid var(--bdr2)" }}>
          <p className="font-bold text-sm mb-3" style={{ color: accent }}>Step-by-Step: GitHub Pages Se Deploy Karo</p>
          <ol className="space-y-1.5 text-sm" style={{ color: "var(--tx3)" }}>
            {[
              "GitHub pe naya repository banao — naam exactly yeh rakho: yourusername.github.io (apna actual GitHub username likhо)",
              "Bolt.new ZIP ki saari portfolio files is repository mein upload karo",
              "Repository ka Settings tab kholo",
              "Left sidebar mein 'Pages' dhundho",
              "'Source' ke neeche 'Deploy from a branch' select karo",
              "'main' branch aur '/ (root)' folder choose karo — Save click karo",
              "2-3 minute wait karo — phir visit karo: https://yourusername.github.io",
              "Tumhari portfolio ab internet pe live hai! 🎉",
            ].map((s, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="shrink-0" style={{ color: accent }}>{i + 1}.</span> {s}
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-xl p-4" style={{ background: "rgba(168,85,247,0.06)", border: "1px solid rgba(168,85,247,0.2)" }}>
          <p className="font-bold mb-2 text-sm" style={{ color: accent }}>Live Hone Ke Baad — Har Jagah Share Karo:</p>
          <ul className="space-y-1">
            {[
              "LinkedIn profile mein link add karo (Featured section ya About mein)",
              "GitHub bio mein link add karo",
              "CV mein add karo",
              "LinkedIn pe post karo — live portfolio announce karo",
            ].map(item => (
              <li key={item} className="text-sm flex items-start gap-2" style={{ color: "var(--tx2)" }}>
                <span className="shrink-0" style={{ color: accent }}>→</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </Topic>

      <Topic n={5} title="Sab Connect Karo: Complete Professional Identity" icon="🕸️">
        <InfoBox>
          Spider web ki tarah socho — 8 haftaon mein jo bhi platforms banaye hain woh sab ek doosre se connected hone chahiye. Jab koi bhi tumhe dhundhe — LinkedIn, GitHub, ya website — woh fauran baaki sab tak pahunch sake.
        </InfoBox>
        <Table
          headers={["Platform", "Yeh Links Add Karo"]}
          rows={[
            ["LinkedIn Profile", "Portfolio website URL — About section + Featured section mein"],
            ["GitHub Bio", "LinkedIn URL + Portfolio website URL"],
            ["Portfolio Website", "LinkedIn button + GitHub button + CV download"],
            ["CV (PDF)", "LinkedIn URL + GitHub URL + Portfolio website URL"],
          ]}
        />
        <div className="rounded-xl p-5 mb-4" style={{ background: "var(--bg3)", border: "1px solid var(--bdr2)" }}>
          <p className="font-bold text-sm mb-3 text-yellow-400">Final LinkedIn Post — Course Completion Template:</p>
          <div className="text-sm leading-relaxed space-y-2" style={{ color: "var(--tx3)" }}>
            <p>2 mahine pehle mujhe AI ke baare mein kuch nahi pata tha.</p>
            <p>Aaj mere paas hai:</p>
            <p style={{ color: "var(--tx2)" }}>✔ Ek live portfolio website<br/>✔ Active LinkedIn [X] posts ke saath<br/>✔ GitHub [X] projects ke saath<br/>✔ Ek personal AI project jo maine khud banaya<br/>✔ Ek professional CV</p>
            <p>Maine seekha: prompt engineering, Canva AI, CapCut AI, GitHub, portfolio building, aur AI ko tool ki tarah use karna — shortcut ki tarah nahi.</p>
            <p style={{ color: accent }}>Yeh sirf shuruat hai.</p>
            <p className="text-xs" style={{ color: "var(--tx4)" }}>Portfolio: [tumhari website link] | GitHub: [tumhari GitHub link]</p>
            <p className="text-xs" style={{ color: "var(--tx4)" }}>#AI #Portfolio #GitHub #Pakistan #StudentLife #Learning #PromptEngineering</p>
          </div>
        </div>
      </Topic>

      {/* Final Checklist */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--tx)" }}>🎓 Week 8 — Final Checklist</h2>
        <div className="space-y-3">
          {[
            { step: "Step 1: Portfolio Polish", items: [
              "Har section review karo — kya text accurate aur professional hai?",
              "Week 5-6 personal project Projects section mein add karo",
              "LinkedIn aur GitHub buttons sahi kaam kar rahe hain check karo",
              "CV download button add karo",
              "Phone pe test karo — mobile pe kaisa dikh raha hai?",
            ]},
            { step: "Step 2: LinkedIn Complete Update", items: [
              "Portfolio website URL About aur Featured sections mein add karo",
              "Skills update karo — 8 haftaon mein jo bhi seekha sab add karo",
              "Profile photo aur headline professional hain check karo",
            ]},
            { step: "Step 3: GitHub Complete Update", items: [
              "GitHub bio mein portfolio website URL add karo",
              "Saare projects ke proper README files hain check karo",
              "Best 2-3 repositories GitHub profile pe pin karo",
            ]},
            { step: "Step 4: Final LinkedIn Post", items: [
              "Topic 5 ka template use karke completion post likho",
              "Portfolio link, GitHub link, aur best Canva visual include karo",
              "Post karo — yeh tumhara ab tak ka sabse bada LinkedIn moment hai! 🎉",
            ]},
          ].map(section => (
            <div key={section.step} className="rounded-xl p-4" style={{ background: "var(--bg2)", border: "1px solid var(--bdr)" }}>
              <p className="font-bold mb-2 text-sm" style={{ color: "var(--tx)" }}>{section.step}</p>
              <div className="space-y-1.5">
                {section.items.map(item => (
                  <label key={item} className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-0.5 accent-violet-500 w-4 h-4 shrink-0" />
                    <span className="text-sm" style={{ color: "var(--tx3)" }}>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What You Built */}
      <div className="rounded-2xl p-6 mb-8" style={{ background: "var(--bg3)", border: "1px solid var(--bdr2)" }}>
        <h3 className="font-bold text-xl mb-4 text-center" style={{ color: "var(--tx)" }}>🏆 2 Mahine Mein Tumne Kya Banaya</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { icon: "✅", platform: "LinkedIn", desc: "Active profile + 8+ posts + growing network" },
            { icon: "✅", platform: "GitHub", desc: "Account + 3+ projects README ke saath" },
            { icon: "✅", platform: "Portfolio Website", desc: "Live website — sab ek jagah (yourusername.github.io)" },
            { icon: "✅", platform: "Personal AI Project", desc: "Kuch jo tumne khud banaya aur publish kiya" },
            { icon: "✅", platform: "Professional CV", desc: "AI se banaya, polished, downloadable" },
            { icon: "✅", platform: "Content Package", desc: "Blog + Image + Video Script (LinkedIn pe)" },
            { icon: "✅", platform: "Prompt Library", desc: "Tumhari personal best prompts ki collection" },
          ].map(item => (
            <div key={item.platform} className="flex items-start gap-3 rounded-xl p-3" style={{ background: "var(--bg2)", border: "1px solid var(--bdr)" }}>
              <span className="text-lg shrink-0">{item.icon}</span>
              <div>
                <p className="font-semibold text-sm" style={{ color: "var(--tx)" }}>{item.platform}</p>
                <p className="text-xs" style={{ color: "var(--tx3)" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Path Forward */}
      <div className="rounded-2xl p-6 mb-8" style={{ background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.25)" }}>
        <h3 className="font-bold text-lg mb-3" style={{ color: accent }}>🚀 Aage Kya — Tumhara Path Forward</h3>
        <p className="text-sm mb-4" style={{ color: "var(--tx3)" }}>Yeh khatam nahi — yeh shuruat hai! Do raaste hain — dono valid hain:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl p-4" style={{ background: "var(--bg2)", border: "1px solid var(--bdr)" }}>
            <p className="font-bold mb-2 text-sm" style={{ color: "var(--tx)" }}>Path A: Creator / Content</p>
            <ul className="space-y-1 text-xs" style={{ color: "var(--tx3)" }}>
              {["LinkedIn pe grow karte raho", "Brands ya causes ke liye AI content banao", "CapCut se video creation seekho", "AI writing tools gehrai se explore karo", "Apna safar publicly document karo"].map(i => (
                <li key={i} className="flex gap-2"><span style={{ color: accent }}>→</span>{i}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl p-4" style={{ background: "var(--bg2)", border: "1px solid var(--bdr)" }}>
            <p className="font-bold mb-2 text-sm" style={{ color: "var(--tx)" }}>Path B: Technical / Developer</p>
            <ul className="space-y-1 text-xs" style={{ color: "var(--tx3)" }}>
              {["Aur HTML, CSS, JavaScript seekho", "Python basics AI ki madad se explore karo", "Bolt.new ya Lovable pe complex tools banao", "APIs aur automation ke baare mein seekho", "GitHub pe open source mein contribute karo"].map(i => (
                <li key={i} className="flex gap-2"><span style={{ color: accent }}>→</span>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-start mt-8 pt-6" style={{ borderTop: "1px solid var(--bdr)" }}>
        <Link href="/summer-camp/week-5-6"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
          style={{ color: "var(--tx3)", border: "1px solid var(--bdr)", background: "var(--bg2)" }}>
          ← Week 5–6
        </Link>
      </div>
    </div>
    </>
  );
}
