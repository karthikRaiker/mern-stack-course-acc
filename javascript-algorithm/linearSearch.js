//O(n) time Complexity
function linerSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}
console.log(linerSearch([1, 2, 5, -5, 31, 125, 17, 51], 25));
console.log(linerSearch([1, 2, 5, -5, 31, 125, 17, 51], 51));
console.log(linerSearch([1, 2, 5, -5, 31, 125, 17, 51], -5));
