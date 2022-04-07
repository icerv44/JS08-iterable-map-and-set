let map1 = new Map();

// let map1 = new Map([
//     ['name',"Thomas"],
//     ['age',31]
//   ]) ;

map1.set("name", "Thomas");
map1.set("age", 31);
console.log(map1);
map1.set("name", "Dan");
console.log(map1);

console.log(map1.get("birthDate") === undefined);
console.log(map1.size);
console.log(map1.clear());
console.log(map1);
