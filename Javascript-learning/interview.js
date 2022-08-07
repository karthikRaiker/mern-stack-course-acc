function redundantCount(arr) {
  uniquele = new Set(arr);
  // console.log(uniquele);
  uniqueArr = Array.from(uniquele);
  // console.log(uniqueArr);
  let newObj = {};
  for (let i = 0; i < uniqueArr.length; i++) {
    let curr = uniqueArr[i];
    let count = 0;
    for (j = 0; j < arr.length; j++) {
      if (curr == arr[j]) count++;
    }
    newObj[curr] = count;
  }
  return newObj;
}

function redundantCount1(arr) {
  let newObj = {};
  arr.forEach((element) => {
    // console.log(newObj[element])
    newObj[element] = (newObj[element] || 0) + 1;
  });

  return newObj;
}

// console.log(
//   redundantCount1(
//     Array.from({ length: 9900000 }, () => Math.floor(Math.random() * 40000))
//   )
// );
console.log(redundantCount1(["a", "b", 1, 10, "a", "b", "c", 12]));
// console.log(redundantCount(Array.from({length: 10}, () => Math.floor(Math.random() * 40))))
// console.log(redundantCount(["a", "b", 1, 10, "a", "b", "c", 12]));
