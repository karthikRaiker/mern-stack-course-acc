function findLongestWord(str) {
  strArr = str.split(" ");
  largestStr = " ";
  for (const strItem of strArr) {
    if (strItem.length > largestStr.length) {
      largestStr = strItem;
    }
  }
  return largestStr.length;
}

function findLongestWord1(str) {
  // return str.split(" ").sort(function(a,b) {return a.length - b.length}).pop().length      this code also give the same reult
  return str.split(" ").sort(function (a, b) {
    return b.length - a.length;
  })[0].length;
}

console.log(findLongestWord("     h hii hello worldss world"));
console.log(findLongestWord1("     h hii hello worldss123 world"));

let a = [1, 2, 3, 4, 5, 6];
let m = [];
let n = [];
let mapRes = a.map((item) => item + 5);

let filterRes = a.filter((item) => item > 3);
console.log(m);
console.log(a);
console.log(n);
console.log("mapRes: " + mapRes);
console.log("filterRes: " + filterRes);
