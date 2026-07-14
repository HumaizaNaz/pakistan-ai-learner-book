# Chapter 12: Few-Shot Prompting — Examples do, Seekhao! 📚

**Week 6 | Builders Track**

---

## 📖 Story Scene

"NOVA, main chahti hoon Claude meri school ke style mein notes likhe — bilkul jaise Miss Ayesha likhti hain. Bullet points, simple language, key terms bold."

"Usse **examples** do," NOVA ne kaha.

"Examples?"

"Ek ya do examples do ke tum kya chahti ho. AI woh pattern copy karega. Ise kehte hain **Few-Shot Prompting** — thodi examples, seekh jaao!"

---

## ✨ Magic Spell #12 — Few-Shot Prompting

**Zero-shot (no examples):**
```
Climate change ke baare mein notes likho.
```
Result: AI apne style mein likhega — jo shayad tumhara preferred style nahi ho.

---

**Few-Shot (examples ke saath):**
```
Mujhe notes chahiye bilkul is format mein:

Example 1:
**Topic: Photosynthesis**
- 🌱 Definition: Plants sunlight se food banate hain
- 🔑 Key terms: **chlorophyll**, **glucose**, **CO2**
- ⚡ Process: Sunlight → Water + CO2 → Glucose + O2
- 📝 Remember: Light = energy source

Example 2:
**Topic: Water Cycle**
- 🌊 Definition: Paani ka continuous journey
- 🔑 Key terms: **evaporation**, **condensation**, **precipitation**
- ⚡ Process: Sea → Evaporation → Clouds → Rain → Repeat
- 📝 Remember: Sun drives the cycle

Ab is exact same format mein notes likho:
Topic: Climate Change
```

AI exact same format follow karega!

---

**Few-Shot ke Types:**

**1. Format examples:**
```
Mujhe ye format mein product descriptions chahiye:

"[Product naam] — [Ek catchy line].
✅ Features: [3 points]
💰 Price: [range]"

Example:
"Chocolate Cake — Har khushi ka companion.
✅ Features: Moist, rich, customizable
💰 Price: Rs. 500-1500"

Ab ye format use karo: Vanilla Ice Cream ke liye
```

**2. Tone examples:**
```
Mujhe is tone mein likhna hai:
Example: "Yaar sun, ye CSS trick ekdum mast hai! 
Grid layout ne meri life badal di — seriously!"

Ab is tone mein Next.js ke baare mein kuch likho.
```

**3. Code examples:**
```
Mujhe TypeScript interfaces aise likhni hain:

// Example:
interface BlogPost {
  id: number;
  title: string;
  content: string;
  publishedAt: Date;
  tags: string[];
}

Ab is style mein:
- User profile interface
- Product interface
- Order interface
```

---

## 🔥 Try It Yourself

Apni class ke subject ke liye notes format design karo:
1. Ek example notes manually likho (tumhara preferred style)
2. Claude ko wo example do
3. Poochho 3 aur topics ke liye same format mein notes

---

## 🤯 Wow Moment

> Few-shot prompting originally machine learning research se aaya — models ko training mein examples diye jaate the.
> Ab tum same technique sirf text mein use kar rahe ho — bina koi code ke!
> **Tumne AI training technique use ki — aaj!** 🧠

---

## 💡 Fun Tip

Jitne zyada examples — utna better pattern samajhta hai AI. Lekin 3-5 se zyada examples pe returns diminish ho jaate hain. **2-3 good examples = sweet spot!**

---

## ❓ Think About It

Few-shot prompting humans par bhi kaam karta hai! Jab tum kisi nayi job mein jaate ho — manager tumhe examples deta hai ke kaam kaise karna hai. Same psychology. AI training aur human learning mein kya similarities hain?
