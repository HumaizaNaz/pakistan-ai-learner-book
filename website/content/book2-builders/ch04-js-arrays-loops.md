# Chapter 4: JavaScript — Arrays, Loops, Objects 📋

**Week 2 | Builders Track**

---

## 📖 Story Scene

"NOVA, mujhe apni class ke sab dosto ki list website par dikhani hai. 30 log hain. Kya main 30 paragraphs likhoun?"

"Bilkul nahi!" NOVA ne hansa. "Iske liye **arrays** aur **loops** hain. Ek baar data likho — JavaScript automatically sab dikhayega!"

---

## ✨ Magic Spell #4 — Arrays aur Loops

**Array = list:**
```javascript
const fruits = ["mango", "banana", "apple"];
const numbers = [1, 2, 3, 4, 5];

// Access karo
console.log(fruits[0]); // "mango" (0 se shuru!)
console.log(fruits[2]); // "apple"

// Length
console.log(fruits.length); // 3

// Add karo
fruits.push("guava");

// Remove karo (last element)
fruits.pop();
```

---

**Loop = baar baar karo:**
```javascript
// For loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// forEach — modern, clean
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// Arrow function style
fruits.forEach(fruit => console.log(fruit));
```

---

**Objects = ek cheez ki info:**
```javascript
const student = {
  name: "Zara",
  class: "7th",
  hobby: "coding",
  age: 13
};

console.log(student.name);  // "Zara"
console.log(student.age);   // 13
```

---

**Array of Objects — Real Data:**
```javascript
const students = [
  { name: "Zara", hobby: "coding" },
  { name: "Ali",  hobby: "cricket" },
  { name: "Sara", hobby: "art" },
];

// HTML mein cards banao automatically!
const container = document.getElementById("students");

students.forEach(student => {
  container.innerHTML += `
    <div class="card">
      <h3>${student.name}</h3>
      <p>Hobby: ${student.hobby}</p>
    </div>
  `;
});
```

---

## 🔥 Try It Yourself

Apni class ki 5 friends ki list banao aur cards generate karo:

```javascript
const friends = [
  { name: "[Friend 1]", subject: "[Favourite subject]", emoji: "😊" },
  { name: "[Friend 2]", subject: "[Favourite subject]", emoji: "🎯" },
  // 3 aur add karo...
];

const grid = document.getElementById("friends-grid");
friends.forEach(friend => {
  grid.innerHTML += `
    <div class="card">
      <div style="font-size: 48px">${friend.emoji}</div>
      <h3>${friend.name}</h3>
      <p>${friend.subject}</p>
    </div>
  `;
});
```

---

## 🤯 Wow Moment

> Template literals (backtick + `${}`) — ye modern JavaScript ki ek amazing feature hai!
> ```javascript
> const name = "Zara";
> console.log(`Hello ${name}!`); // "Hello Zara!"
> ```
> String concatenation `+` se zyada clean aur powerful!

---

## 💡 Fun Tip

Array mein `map()` — har element ko transform karo:
```javascript
const names = ["zara", "ali", "sara"];
const upper = names.map(name => name.toUpperCase());
// ["ZARA", "ALI", "SARA"]
```
`filter()` — sirf kuch elements rakho:
```javascript
const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter(n => n % 2 === 0);
// [2, 4, 6]
```

---

## ❓ Think About It

Netflix ki recommendation list, Instagram ki feed, Amazon ki products — ye sab arrays of objects hain JavaScript mein. Data alag hota hai, structure same. Kya tum ek aise website ka data structure soch sakte ho?
