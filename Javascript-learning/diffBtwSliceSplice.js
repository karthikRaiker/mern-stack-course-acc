let arr = ["a", "b", "c", "d", "e"];
let arr1 = ["a", "b", "c", "d", "e"];
console.log(arr.slice(0, 2));
console.log("after slice original array become: ", arr);
//slice won't modify the original array

console.log(arr1.splice(0, 2));
console.log("after splice original array become: ", arr1);
//splice will modify the original array
