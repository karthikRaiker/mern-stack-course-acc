//Avg case: O(n log n) time Complexity
//Worst case: O(n^2) time Complexity
function quickSort(array) {
  let pivot = array[array.length - 1];
  let leftArr = [];
  let rightArr = [];
  if (array.length < 2) {
    return array;
  }

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
console.log(quickSort([15, 5, 1, 17, -5, 3, 0]));
console.log(quickSort([-5, 0, 1, 3, 5, 15, 17]));
