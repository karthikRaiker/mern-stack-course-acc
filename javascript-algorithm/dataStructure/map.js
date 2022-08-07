const map = new Map([
  ["a", 1],
  ["b", 5],
  ["x", 1],
]);
const a = [
  ["a", 1],
  ["b", 5],
  ["x", 1],
];
console.log(a.flat());
console.log(new Set(a.flat()));
map.set("c", 15); //adding
console.log(map);
map.delete("b"); //remove element
console.log(map);
console.log(map.has("a")); //check item "a" is there or not
console.log(map.size); //check size of map
for (const [key, value] of map) {
  console.log(`${key}:${value}`); //iterate key, value
}
map.clear(); //delete all the element from map
console.log(map);
