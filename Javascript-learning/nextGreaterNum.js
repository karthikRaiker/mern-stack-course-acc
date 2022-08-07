function nextGreaterNum(number) {
  let numArr = String(number)
    .split("")
    .map((num) => Number(num));
  for (let i = numArr.length - 1; i > 0; i--) {
    if (numArr[i] > numArr[i - 1]) {
      let temp = numArr[i];
      numArr[i] = numArr[i - 1];
      numArr[i - 1] = temp;
      break;
    }
  }
  res = parseInt(numArr.join(""));
  console.log(res);
}

nextGreaterNum(123); //132
nextGreaterNum(1232);
nextGreaterNum(10003); //10030
nextGreaterNum(10122); //10212
nextGreaterNum(1343); //1433
nextGreaterNum(10000);
nextGreaterNum(987899); //987989
nextGreaterNum(198); //expected 891, actual 918
nextGreaterNum(9187); //expected 9718, actual 9817
