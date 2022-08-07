function getIndexToIns(arr, num) {
  const sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] >= num) {
      // sortedArr.splice(i, 0, num)
      return i;
    }
  }
  return sortedArr.length;
}

console.log(getIndexToIns([2, 10, 5], 13));
