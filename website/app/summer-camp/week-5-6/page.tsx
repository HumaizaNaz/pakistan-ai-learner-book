"use client";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import WeekProgress from "@/components/WeekProgress";

const accent = "#f97316";

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
      style={{ background: "rgba(249,115,22,0.06)", borderLeft: "4px solid #f97316", color: "var(--tx2)" }}>
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

function ExerciseBox({ n, title, steps }: { n: number; title: string; steps: string[] }) {
  return (
    <div className="rounded-xl p-5 mb-4" style={{ background: "var(--bg2)", border: "1px solid var(--bdr)" }}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-bold px-2 py-1 rounded text-white" style={{ background: accent }}>Exercise {n}</span>
        <h4 className="font-semibold" style={{ color: "var(--tx)" }}>{title}</h4>
      </div>
      <ol className="space-y-2">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--tx3)" }}>
            <span className="font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: "var(--bg3)", color: "var(--tx3)" }}>{i + 1}</span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Week56Page() {
  const { lang } = useLang();

  return (
    <>
    <WeekProgress current={3} />
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm mb-3" style={{ color: "var(--tx3)" }}>
          <Link href="/summer-camp" className="hover:underline" style={{ color: "var(--tx3)" }}>Summer Camp</Link>
          <span>›</span>
          <span className="font-medium" style={{ color: "var(--tx2)" }}>Week 5–6</span>
        </div>
        <div className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider"
          style={{ background: "rgba(249,115,22,0.1)", color: accent, border: "1px solid rgba(249,115,22,0.25)" }}>
          Week 5–6 • Personal AI Project
        </div>
        <h1 className="text-3xl font-bold mb-3" style={{ color: "var(--tx)" }}>🚀 Apna Personal AI Project Banao</h1>
        <p className="leading-relaxed" style={{ color: "var(--tx3)" }}>Personal Project • GitHub Upload • README • LinkedIn Announcement</p>
      </div>

      <Topic n={1} title="Personal Project Kya Hota Hai?" icon="💡">
        <InfoBox>
          Student A ka CV kehta hai: &apos;Mujhe AI tools aate hain.&apos; Student B ka CV ek live GitHub project link deta hai, ek LinkedIn post dikhata hai unka kaam, aur ek real cheez jo unhone banai. Tum bataao — kaun notice hoga? Personal project proof hai — ke tum sirf baatein nahi karte, kaam bhi karte ho.
        </InfoBox>
        <Table
          headers={["Project Ki Type", "Misal"]}
          rows={[
            ["AI Chatbot", "Ek chatbot jo tumhare favourite sport ya hobby ke baare mein sawal jawab kare"],
            ["Content Series", "10 LinkedIn posts ya blog series kisi pasandida topic pe"],
            ["Research Report", "AI se banaya hua professional report kisi topic pe"],
            ["Creative Project", "AI se bani short story, poetry collection, ya artwork series"],
            ["Tool / Template", "Ek prompt library ya template set jo doosre bhi use kar sakein"],
            ["Presentation", "Gamma.app se banaya professional slide deck kisi interesting topic pe"],
          ]}
        />
        <div className="rounded-xl p-4" style={{ background: "rgba(249,115,22,0.06)", border: "1px solid rgba(249,115,22,0.2)" }}>
          <p className="font-bold mb-2 text-sm" style={{ color: accent }}>Acha Personal Project Ki 3 Zaruraten:</p>
          <ul className="space-y-1">
            {[
              "Rule 1 — Kisi aisi cheez ke baare mein ho jisme tumhara genuinely dil lage — jo impressive lage woh nahi",
              "Rule 2 — Koi deliverable hona chahiye — kuch jo tum dikha sako, link share kar sako",
              "Rule 3 — GitHub pe hona chahiye — document ya image collection bhi chalti hai",
            ].map(r => (
              <li key={r} className="text-sm flex items-start gap-2" style={{ color: "var(--tx2)" }}>
                <span className="shrink-0 mt-0.5" style={{ color: accent }}>✓</span> {r}
              </li>
            ))}
          </ul>
        </div>
      </Topic>

      <Topic n={2} title="Project Choose Karo: Interest + AI" icon="🎯">
        <InfoBox>
          Sabse behtareen projects hamesha genuine curiosity se aate hain. Agar cricket pasand hai toh tum woh jaante ho jo ek random prompt engineer nahi jaanta. AI tumhe tools deta hai. Tumhara interest use rooh deta hai.
        </InfoBox>
        <Table
          headers={["Tumhara Interest", "AI Tool", "Project Idea"]}
          rows={[
            ["Cricket / Sports", "ChatGPT + Canva", "'Pakistan cricket ke baare mein top 10 AI insights' — blog + graphic"],
            ["Fashion / Style", "Canva AI + ChatGPT", "'Eid ke liye AI-designed outfit moodboard' — visual + description"],
            ["Cooking / Food", "ChatGPT", "'AI se banaya fusion recipe book' — PDF with 10 recipes"],
            ["Gaming", "ChatGPT + Canva", "'AI character backstory series' — likha hua + illustrated"],
            ["Mental Health / Study", "ChatGPT", "'AI study schedule generator' — template jo doosre use kar sakein"],
            ["Local Community", "ChatGPT + Canva", "'[Tumhara sheher] ka AI guide' — blog + infographic"],
            ["Music / Poetry", "ChatGPT", "'AI poetry collection [favourite artist] se inspired'"],
            ["Environment", "ChatGPT + Canva", "'Pakistan mein climate change pe AI infographic'"],
          ]}
        />
        <div className="rounded-xl p-4" style={{ background: "var(--bg2)", border: "1px solid var(--bdr)" }}>
          <p className="font-bold mb-2 text-sm" style={{ color: "var(--tx)" }}>Decide Kaise Karo — 3 Sawaal Apne Aap Se:</p>
          <ul className="space-y-1.5">
            {[
              "Kis topic ke baare mein dosto se ghanton baat kar sakta/sakti hoon bor hue bina?",
              "Kaunsa topic hai jis pe ek hafte research karna enjoyable lagega?",
              "Kya main yeh kisi ko dikhaaon aur proud feel karun?",
            ].map((q, i) => (
              <li key={i} className="text-sm flex items-start gap-2" style={{ color: "var(--tx3)" }}>
                <span className="font-bold shrink-0" style={{ color: accent }}>{i + 1}.</span> {q}
              </li>
            ))}
          </ul>
        </div>
      </Topic>

      <Topic n={3} title="GitHub: Project Upload Aur Present Karo" icon="🐙">
        <InfoBox>
          GitHub ek library ki shelf ki tarah hai. Har project jo tum upload karte ho, ek kitaab hai us shelf pe. Jab koi tumhara profile dekhe — teacher, employer, ya collaborator — woh exactly dekhta hai tumne kya banaya hai.
        </InfoBox>
        <div className="rounded-xl p-5 mb-4" style={{ background: "var(--bg3)", border: "1px solid var(--bdr2)" }}>
          <p className="font-bold text-sm mb-3" style={{ color: accent }}>Pehli Repository Kaise Banao:</p>
          <ol className="space-y-1.5 text-sm" style={{ color: "var(--tx3)" }}>
            {[
              "github.com pe log in karo",
              "Top right corner mein '+' icon click karo → 'New repository'",
              "Simple naam do (dashes use karo): jaise 'ai-cricket-project' ya 'meri-recipe-book'",
              "Short description add karo",
              "'Add a README file' pe tick karo",
              "'Create repository' click karo",
            ].map((s, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="shrink-0" style={{ color: accent }}>{i + 1}.</span> {s}
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-xl p-4 mb-4" style={{ background: "var(--bg2)", border: "1px solid var(--bdr)" }}>
          <p className="font-bold mb-2 text-sm" style={{ color: "var(--tx)" }}>Files Kaise Upload Karein:</p>
          <ol className="space-y-1 text-sm" style={{ color: "var(--tx3)" }}>
            {[
              "Repo ke andar 'Add file' click karo → 'Upload files'",
              "Apna Word doc, PDF, images, ya koi bhi files drag and drop karo",
              "Neeche 'Commit changes' click karo — save ho jaata hai",
              "Tumhari files ab internet pe live hain!",
            ].map((s, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="shrink-0" style={{ color: "var(--tx4)" }}>{i + 1}.</span> {s}
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-xl p-4" style={{ background: "rgba(249,115,22,0.06)", border: "1px solid rgba(249,115,22,0.2)" }}>
          <p className="font-bold mb-2 text-sm" style={{ color: accent }}>README Kaise Likhein (ChatGPT Se):</p>
          <div className="rounded-lg p-3 font-mono text-xs mb-2" style={{ background: "var(--bg2)", color: "var(--tx2)" }}>
            &ldquo;Mere project [project naam] ke liye ek professional GitHub README likho. Yeh [kya hai tumhara project] ke baare mein hai. Maine ise [tools] se banaya hai. Include karo: short introduction, project mein kya hai, koi ise kaise use kar sakta hai, aur maine isse kya seekha. Friendly aur clear rakho.&rdquo;
          </div>
          <p className="text-xs font-semibold mb-1" style={{ color: "var(--tx2)" }}>Acha README Mein Kya Hona Chahiye:</p>
          <ul className="space-y-1">
            {[
              "Project ka naam aur ek-line description",
              "Project kya hai aur tumne kyun banaya",
              "Kaunse tools aur AI use kiye",
              "Kaunsi files hain aur har ek mein kya hai",
              "Is project se kya seekha",
              "Neeche tumhara LinkedIn link",
            ].map(item => (
              <li key={item} className="text-xs flex items-start gap-1.5" style={{ color: "var(--tx3)" }}>
                <span className="shrink-0" style={{ color: accent }}>•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </Topic>

      <Topic n={4} title="LinkedIn Pe Project Announce Karo" icon="📣">
        <InfoBox>
          Bohot log cheezein banate hain aur kabhi share nahi karte. Lekin sach yeh hai — ek imperfect project publicly share karna zyada valuable hai us perfect project se jo koi nahi dekhta. Jis waqt tum post karte ho — tum sirf learner nahi rehe, creator ban jaate ho.
        </InfoBox>
        <div className="rounded-xl p-5 mb-4" style={{ background: "var(--bg3)", border: "1px solid var(--bdr2)" }}>
          <p className="font-bold text-sm mb-3" style={{ color: accent }}>Project Announcement Post Ka Formula:</p>
          <div className="space-y-1 text-sm" style={{ color: "var(--tx3)" }}>
            {["KYA BANAYA (1-2 lines)", "KYUN YEH TOPIC CHOOSE KIYA (personal angle)", "KYA TOOLS USE KIE (ChatGPT, Canva, GitHub)", "KYA SEEKHA", "GITHUB LINK", "CALL TO ACTION", "HASHTAGS"].map(p => (
              <div key={p} className="flex items-start gap-2">
                <span className="shrink-0" style={{ color: accent }}>+</span> {p}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl p-4 mb-4" style={{ background: "var(--bg2)", border: "1px solid var(--bdr)" }}>
          <p className="font-bold mb-2 text-sm" style={{ color: "var(--tx)" }}>Example Post Template:</p>
          <div className="rounded-lg p-3 text-sm leading-relaxed space-y-2" style={{ background: "var(--bg3)", color: "var(--tx2)" }}>
            <p>Maine apna pehla personal AI project complete kar liya — aur share karne ka time aa gaya.</p>
            <p>Maine <strong>[project naam]</strong> banaya — ek [kya hai] jo [topic] ke baare mein hai.</p>
            <p>Maine yeh topic isliye choose kiya kyunki <strong>[personal wajah]</strong>.</p>
            <p>Maine ise banaya: ChatGPT se [kya kaam liya], Canva se [kya banaya], aur GitHub pe publish kiya.</p>
            <p>Sabse badi cheez jo maine seekhi: <strong>[ek honest lesson]</strong>.</p>
            <p>Yahan dekho: <strong>[GitHub link]</strong></p>
            <p className="text-blue-400">Tum kaun sa personal project bana rahe ho? ↓</p>
            <p className="text-xs" style={{ color: "var(--tx4)" }}>#AI #PersonalProject #GitHub #Pakistan #StudentLife</p>
          </div>
        </div>
      </Topic>

      <Topic n={5} title="Gamma.app: AI-Powered Presentations" icon="📊">
        <InfoBox>
          Kuch projects slides ke taur pe zyada achha kaam karta hai. Gamma.app pe sirf topic describe karo — 2 minute mein poori professional slide deck ban jaati hai. Koi PowerPoint skill nahi chahiye.
        </InfoBox>
        <div className="rounded-xl p-5 mb-4" style={{ background: "var(--bg3)", border: "1px solid var(--bdr2)" }}>
          <p className="font-bold text-sm mb-3" style={{ color: accent }}>Gamma.app Kaise Use Karein:</p>
          <ol className="space-y-1.5 text-sm" style={{ color: "var(--tx3)" }}>
            {[
              "gamma.app par jaao aur free sign up karo",
              "'New' click karo → 'Generate with AI'",
              "Apna topic type karo: 'Pakistan mein students ke liye AI tools ki beginner guide'",
              "Apna style aur colour theme choose karo",
              "AI 30 second mein 8-12 slides generate kar deta hai",
              "Koi bhi slide edit karo — text badlo, images add karo",
              "Link se share karo ya PDF mein export karo",
            ].map((s, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="shrink-0" style={{ color: accent }}>{i + 1}.</span> {s}
              </li>
            ))}
          </ol>
        </div>
      </Topic>

      {/* Week 5 Exercises */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-5 flex items-center gap-2" style={{ color: "var(--tx)" }}>
          <span className="text-sm px-3 py-1 rounded-lg text-white" style={{ background: accent }}>Week 5</span>
          Practical Exercises
        </h2>
        <ExerciseBox n={1} title="Project Choose Karo aur Plan Banao" steps={[
          "3 topics likho jin mein tumhara genuinely dil lagta ho",
          "Har ek ke liye ek sentence: 'Main [project type] bana sakta/sakti hoon is topic pe [tool] se'",
          "Apna favourite choose karo — yeh tumhara Week 5-6 project hai",
          "Ek paragraph project plan likho: kya banao ge, kaunse tools, final deliverable kya hoga",
        ]} />
        <ExerciseBox n={2} title="GitHub Repository Banao" steps={[
          "github.com pe log in karo",
          "Naya repository banao apne project ke liye clear naam ke saath",
          "Short description add karo",
          "ChatGPT README prompt use karke apna README likho",
          "Kam az kam ek file upload karo — draft ya outline bhi chalega",
        ]} />
        <ExerciseBox n={3} title="Gamma.app Try Karo" steps={[
          "gamma.app par jaao aur free account banao",
          "Kisi bhi topic pe short presentation generate karo — sirf explore karne ke liye",
          "Kam az kam 3 slides edit karo",
          "Teacher ke saath link share karo",
        ]} />
      </div>

      {/* Week 6 Checklist */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: "var(--tx)" }}>
          <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-lg">Week 6</span>
          Delivery Week — Banao, Upload, Announce!
        </h2>
        <div className="rounded-xl p-5" style={{ background: "rgba(249,115,22,0.06)", border: "1px solid rgba(249,115,22,0.2)" }}>
          <h4 className="font-bold mb-3 text-sm" style={{ color: accent }}>✅ Week 5-6 Completion Checklist</h4>
          <div className="space-y-2">
            {[
              "Project topic choose kiya aur plan likha",
              "GitHub repository clear naam aur description ke saath banayi",
              "ChatGPT se README likhi aur upload ki",
              "Saari project files GitHub pe upload ki",
              "Project complete hai — blog, report, presentation, ya creative work",
              "LinkedIn announcement ke liye Canva visual banayi",
              "LinkedIn announcement post GitHub link ke saath publish ki",
              "GitHub bio mein LinkedIn profile link add kiya",
            ].map(item => (
              <label key={item} className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 accent-orange-500 w-4 h-4 shrink-0" />
                <span className="text-sm" style={{ color: "var(--tx2)" }}>{item}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl p-5 mb-8" style={{ background: "var(--bg3)", border: "1px solid var(--bdr2)" }}>
        <h4 className="font-bold mb-3 text-yellow-400">📚 Ghar Ka Kaam — Week 5-6</h4>
        <ul className="space-y-2">
          {[
            "3 doosre students ke GitHub profiles ya LinkedIn posts dekho inspiration ke liye",
            "README ka draft pehle Word doc mein likho — phir GitHub pe upload karo",
            "Is hafte LinkedIn pe kam az kam ek baar post karo",
            "Gamma.app explore karo chahe main project mein use na karo",
            "Apne best AI prompts ek personal 'Prompt Library' document mein save karo — Week 7-8 mein kaam aayega",
          ].map(item => (
            <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--tx3)" }}>
              <span className="text-yellow-400 shrink-0">→</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between mt-8 pt-6" style={{ borderTop: "1px solid var(--bdr)" }}>
        <Link href="/summer-camp/week-3-4"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
          style={{ color: "var(--tx3)", border: "1px solid var(--bdr)", background: "var(--bg2)" }}>
          ← Week 3–4
        </Link>
        <Link href="/summer-camp/week-7-8"
          className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-colors text-sm text-white"
          style={{ background: accent }}>
          Week 7–8: Portfolio →
        </Link>
      </div>
    </div>
    </>
  );
}
