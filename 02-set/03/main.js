const values = [1, 4, 8, 2, 1, 3, 3, 8];
let set = new Set();
let tmpSet = new Set();
unique = (val) => {
  for (let i of values) {
    set.add(i);
  }
  return set;
};

console.log(unique(values));
