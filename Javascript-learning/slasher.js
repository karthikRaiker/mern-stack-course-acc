function slasher(arr, num) {
  arr.splice(0, num);
  return arr;
}

// console.log(slasher([1, 2, 3, 4, 5, 6, 7], 3));
//=================================================

function slasher1(arr, num) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.length < 2) {
      newArr.push(arr);
    } else newArr.push(arr.splice(0, num));
  }
  return newArr;
}

console.log(slasher1([1, 2, 3, 4, 5, 6, 7], 4));
