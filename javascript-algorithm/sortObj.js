const Items = [
  { name: "Book", price: 100 },
  { name: "notes", price: 700 },
  { name: "gold", price: 5100 },
  { name: "silver", price: 750 },
  { name: "bangal", price: 7854 },
  { name: "nuts", price: 152 },
  { name: "golf", price: 950 },
];
//name sort
function sortObjName(items) {
  sortedObj = items.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );
  return sortedObj;
}
// console.log(sortObjName(Items));

function sortObjName1(items) {
  function compares(a, b) {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  }
  return items.sort(compares);
}
console.log(sortObjName1(Items));

//price sort
function sortObjPrice(items) {
  sortedItem = items.sort((a, b) => {
    return a.price - b.price;
  });
  return sortedItem;
}
// console.log(sortObjPrice(Items));

//--------------------------------------------------

//single sting
function sortStr(items) {
  return items.toLowerCase().split("").sort().join("");
}
// console.log(sortStr("Healoosb"));

//---------------------------------------------------
