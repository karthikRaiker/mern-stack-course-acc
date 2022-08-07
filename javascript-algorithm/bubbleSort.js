//O(n^2) time Complexity
function bubbleSort(array) {
  let isSwap;
  do {
    isSwap = false;
    for (let index = 0; index < array.length - 1; index++) {
      if (array[index] > array[index + 1]) {
        let temp = array[index + 1];
        array[index + 1] = array[index];
        array[index] = temp;
        isSwap = true;
      }
    }
  } while (isSwap);

  return array;
}
console.log(bubbleSort([15, 5, 1, 17, -5, 3, 0]));
console.log(bubbleSort([-5, 0, 1, 3, 5, 15, 17]));
