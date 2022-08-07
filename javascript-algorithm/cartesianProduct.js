//O(mn) time Complexity, because arr1 is m length, arr2 is n length, we have 2 for loop which array length is different, so time complexity is O(m*n)
function cartesianProduct(arr1, arr2) {
  let resultantArray = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      resultantArray.push([arr1[i], arr2[j]]);
    }
  }
  return resultantArray;
}
console.log(cartesianProduct([1, 2], [3, 4, 5]));
