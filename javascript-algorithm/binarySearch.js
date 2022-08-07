//O(log n) time Complexity
function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (target === array[mid]) {
      return mid;
    }
    if (target > array[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}
console.log(binarySearch([1, 5, 7, 8, 9, 15, 21, 27, 36, 69], 15));
console.log(binarySearch([1, 5, 7, 8, 9, 15, 21, 27, 36, 69], 25));
console.log(binarySearch([1, 5, 7, 8, 9, 15, 21, 27, 36, 69], 7));
console.log(binarySearch([1, 5, 7, 8, 9, 15, 21, 27, 36, 69], 36));
