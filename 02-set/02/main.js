let set = new Set(["Dog", "Giraffe", "Bear"]);

const arr = ["Dog", "Giraffe", "Bear"];
let set2 = new Set();

for (let i of arr) {
  set2.add(i);
}

console.log(set);
console.log(set2);
