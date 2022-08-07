function largestOfArr(arr) {
  let maxElementArr = [];
  for (let i = 0; i < arr.length; i++) {
    let maxElement = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] >= maxElement) {
        maxElement = arr[i][j];
      }
    }
    maxElementArr.push(maxElement);
  }
  console.log(maxElementArr);
}

function largestOfArr1(arr) {
  let maxElementArr = [];
  for (let i = 0; i < arr.length; i++) {
    let tempMax = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] >= tempMax) {
        tempMax = arr[i][j];
      }
    }
    maxElementArr.push(tempMax);
  }
  console.log(maxElementArr);
}

// largestOfArr([[1,2,3,4,5],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6],[1,2,3,4,5,7,6,18,10,10],[1,2,3]])
// largestOfArr1([[1,2,3,4,5],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6],[1,2,3,4,5,7,6,10,25,10],[1,2,3]])
findMaxArr([
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 7, 6, 18, 10, 10],
  [1, 2, 3],
]);

function findMaxElement(arr) {
  let maxElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= maxElement) maxElement = arr[i];
  }
  return maxElement;
}

function findMaxArr(arr) {
  // let maxElementArr = [0, 0, 0, 0, 0];
  let maxElementArr = [];
  for (let i = 0; i < arr.length; i++) {
    let maxElement = findMaxElement(arr[i]);
    maxElementArr.push(maxElement);
    // if (maxElement >= maxElementArr[i]) maxElementArr[i] = maxElement;
  }
  console.log(maxElementArr);
}

function findMaxArrFlat(arr) {
  let resArr = [].concat(...arr);
  const result = Math.max(...resArr);
  console.log("findMaxArrFlat", resArr);
  console.log("findMaxArrFlat", result);
}

findMaxArrFlat([
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 7, 6, 18, 10, 10],
  [1, 2, 3],
]);
