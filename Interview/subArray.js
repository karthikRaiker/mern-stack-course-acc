function subArray(arr, size) {
  let subArr = [];
  for (let i = 0; i < arr.length / size; i++) {
    let newArr = [];
    for (let j = i; j < size; j++) {
      newArr.push(arr[j]);
    }
    subArr.push(newArr);
  }
  return subArr;
}
console.log(subArray([1, 2, 3, 4], 2));
