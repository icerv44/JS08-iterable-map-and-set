let set = new Set();

set.add("Thailand");
set.add("Japan");
set.add("Thailand");
set.add("China");
set.add("India");
set.add("Thailand");
set.add("China");
set.add("Singapore");
set.add("Japan");

console.log(set);

set.delete("India");

console.log(set);
console.log(set.size);

let set2 = new Set(["Thailand", "Japan", "Thailand"]);

console.log(set2);
