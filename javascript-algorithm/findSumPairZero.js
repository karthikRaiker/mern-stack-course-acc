//O(n) time complexity-linear
function findSumPairZero(array) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    console.log("iteration");
    if (array[left] + array[right] === 0) {
      return [array[left], array[right]];
    }
    if (array[left] + array[right] > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(findSumPairZero([-5, -4, -2, -1, 0]));
