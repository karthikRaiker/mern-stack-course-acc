const Items = [
  { name: "Book", price: 100 },
  { name: "notes", price: 700 },
  { name: "gold", price: 5100 },
  { name: "silver", price: 750 },
  { name: "bangal", price: 7854 },
  { name: "nuts", price: 152 },
  { name: "golf", price: 950 },
];
function myFilter(items, searchItem) {
  return items.filter(
    (item) => item.name.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1
  );
}
console.log(myFilter(Items, "b"));
console.log(myFilter(Items, "go"));
console.log(myFilter(Items, "n"));
