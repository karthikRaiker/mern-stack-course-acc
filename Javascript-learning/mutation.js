//this program will return true if all the letters in string is present in another string, otherwise it returns false

//my code (no optimised one)
function mutation(arr) {
  let strArr2 = arr[1].toLowerCase();
  let strArr1 = arr[0].toLowerCase();
  let resArr = [];
  for (let i = 0; i < strArr2.length; i++) {
    let f = 0;
    for (let j = 0; j < strArr1.length; j++) {
      if (strArr2[i] == strArr1[j]) {
        f = 1;
        break;
      } else f = 0;
    }
    if (f == 1) resArr.push(1);
    else resArr.push(0);
  }
  let flag = 0;
  for (let i = 0; i < resArr.length; i++) {
    if (resArr[i] == 0) {
      flag = 0;
      break;
    } else {
      flag = 1;
    }
  }
  if (flag == 1) return true;
  else return false;
}
// console.log(mutation(["helloworld", "hwold"]));

//code which uses indexOf()

function newMutation(arr) {
  let firsrString = arr[0].toLowerCase();
  let secondString = arr[1].toLowerCase();
  for (let i = 0; i < secondString.length; i++) {
    if (firsrString.indexOf(secondString[i]) === -1) return false;
  }
  return true;
}
// console.log(newMutation(["helloworld","hellowx"]))

//another method using incldes()

function newMutation1(arr) {
  firstStr = arr[0].toLowerCase();
  secondStr = arr[1].toLowerCase();

  for (const letter of secondStr) {
    if (!firstStr.includes(letter)) return false;
  }
  return true;
}

console.log(newMutation1(["helloworld", "helloy"]));
