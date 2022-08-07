// Question 1: map vs forEach
const arr = [2, 5, 3, 4, 7];
const mapResult = arr.map((ar) => {
  return ar + 2;
}); //you can chain filter over here

const forEachResult = arr.forEach((ar, i) => {
  arr[i] = ar + 3;
});

console.log(mapResult, forEachResult, arr);

// Question 2: null vs undefined
let a;
console.log(typeof null); // o/p: object, null is assigning a value
console.log(typeof undefined); // o/p: undefined
console.log(null == undefined); // o/p: true
console.log(null === undefined); // o/p: false

// Question 3: Explain Event Delegation
// document.querySelector("#products").addEventListener("click", (event) => {
//   console.log(event);
//   if (event.target.tagName === "LI") {
//     window.location.href += "#" + event.target.id;
//   }
// });

// Question 4: Flatten the Array
let array = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];
console.log([].concat(...array));
console.log(array.flat(2));

function customFlat(arr, depth = 1) {
  let result = [];
  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlat(ar, depth - 1));
    } else result.push(ar);
  });
  return result;
}
console.log(customFlat(array, 2));
