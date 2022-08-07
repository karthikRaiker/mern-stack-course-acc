//O(log n) time Complexity
function binarySearchRecursion(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}
function search(arr, target, lowIndex, highIndex) {
  if (lowIndex > highIndex) {
    return -1;
  }
  let mid = Math.floor((lowIndex + highIndex) / 2);
  if (target === arr[mid]) {
    return mid;
  }
  if (target < arr[mid]) {
    return search(arr, target, lowIndex, mid - 1);
  } else {
    return search(arr, target, mid + 1, highIndex);
  }
}
console.log(binarySearchRecursion([1, 5, 7, 8, 9, 15, 21, 27, 36, 69], 15));
console.log(binarySearchRecursion([1, 5, 7, 8, 9, 15, 21, 27, 36, 69], 25));
console.log(binarySearchRecursion([1, 5, 7, 8, 9, 15, 21, 27, 36, 69], 7));
console.log(binarySearchRecursion([1, 5, 7, 8, 9, 15, 21, 27, 36, 69], 36));
