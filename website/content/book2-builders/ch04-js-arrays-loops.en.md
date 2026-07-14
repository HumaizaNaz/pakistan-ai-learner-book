# Chapter 4: JavaScript — Arrays, Loops, Objects 📋

**Week 2 | Builders Track**

---

## 📖 Story Scene

"NOVA, I want to show a list of all my classmates on my website. There are 30 of them. Do I write 30 paragraphs?"

"Absolutely not!" NOVA laughed. "That's what **arrays** and **loops** are for. Write the data once — JavaScript will display everything automatically!"

---

## ✨ Magic Spell #4 — Arrays and Loops

**Array = a list:**
```javascript
const fruits = ["mango", "banana", "apple"];
const numbers = [1, 2, 3, 4, 5];

// Access items
console.log(fruits[0]); // "mango" (starts at 0!)
console.log(fruits[2]); // "apple"

// Length
console.log(fruits.length); // 3

// Add an item
fruits.push("guava");

// Remove last item
fruits.pop();
```

---

**Loop = do something repeatedly:**
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

**Objects = info about one thing:**
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

// Automatically generate cards in HTML!
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

Create a list of 5 friends and generate cards automatically:

```javascript
const friends = [
  { name: "[Friend 1]", subject: "[Favourite subject]", emoji: "😊" },
  { name: "[Friend 2]", subject: "[Favourite subject]", emoji: "🎯" },
  // add 3 more...
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

> Template literals (backtick + `${}`) — this is one of modern JavaScript's most amazing features!
> ```javascript
> const name = "Zara";
> console.log(`Hello ${name}!`); // "Hello Zara!"
> ```
> Cleaner and more powerful than string concatenation with `+`!

---

## 💡 Fun Tip

`map()` in arrays — transform every element:
```javascript
const names = ["zara", "ali", "sara"];
const upper = names.map(name => name.toUpperCase());
// ["ZARA", "ALI", "SARA"]
```
`filter()` — keep only certain elements:
```javascript
const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter(n => n % 2 === 0);
// [2, 4, 6]
```

---

## ❓ Think About It

Netflix's recommendation list, Instagram's feed, Amazon's products — they're all arrays of objects in JavaScript. The data changes, the structure stays the same. Can you think of a data structure for one of these websites?
