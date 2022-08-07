//O(n^2) time Complexity
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let numberToInsert = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > numberToInsert) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = numberToInsert;
  }
  return array;
}
console.log(insertionSort([15, 5, 1, 17, -5, 3, 0]));
console.log(insertionSort([-5, 0, 1, 3, 5, 15, 17]));
