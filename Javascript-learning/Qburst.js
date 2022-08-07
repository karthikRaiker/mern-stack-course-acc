//Get redundant element from an array
function getRedundant(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}
console.log(getRedundant([1, "a", 5, 2, 5, 2, "b", "c", "b"]));

//Get Unique element from an array
function findUniqueArr(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(findUniqueArr([1, "a", 5, 2, 5, 2, "b", "c", "b"]));

console.log(Number("a"));
