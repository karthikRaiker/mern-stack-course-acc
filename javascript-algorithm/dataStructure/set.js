const set = new Set([1, 2, { name: "Vievk" }]);
set.add(5);
set.add(5);
set.delete(5);
console.log(set.has(2));
console.log(set.size);
for (const iterator of set) {
  console.log(iterator);
}
set.clear();
console.log(set);
