//my code
function chunkArrayInGroup(arr, size) {
  const divideArr = Math.ceil(arr.length / size);
  let newArr = [];
  for (let i = 0; i < divideArr; i++) {
    newArr.push(arr.splice(-size));
  }
  console.log(newArr.reverse());
}

// chunkArrayInGroup(["a", "b", "c", "d"], 3);

// best practise (youtube) using slice
function chunkArrayInGroup1(arr, size) {
  let finalGroup = [];
  while (arr.length > 0) {
    finalGroup.push(arr.slice(0, size));
    arr = arr.slice(size);
  }
  return finalGroup;
}

// console.log(chunkArrayInGroup1(["a","b","c","d","e"],3))

// best practise (youtube) using splice
function chunkArrayInGroup2(arr, size) {
  let finalGroup = [];
  while (arr.length > 0) {
    finalGroup.push(arr.splice(0, size));
  }
  return finalGroup;
}

console.log(chunkArrayInGroup2(["a", "b", "c", "d", "e", "f", "g"], 2));
