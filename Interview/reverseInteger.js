//Good Practice
function reverseInteger(num) {
  let rev = 0;
  let lastDigit;
  let negative = false;
  let res = [];
  if (num < 0) {
    num = Math.abs(num);
    negative = true;
  }
  while (num != 0) {
    lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  if (negative) {
    res = rev.toString().split("");
    res.unshift("-");
    return parseInt(res.join(""));
  }

  return rev;
}
console.log(reverseInteger(1230));

//bad practice
function reverseInteger1(num) {
  let isNegativeNum = false;
  let result;
  if (num < 0) {
    num = Math.abs(num);
    isNegativeNum = true;
  }
  if (isNegativeNum) {
    result = num.toString().split("").reverse();
    result.unshift("-");
    return parseInt(result.join(""));
  }
  result = num.toString().split("").reverse().join("");
  return parseInt(result);
}
console.log(reverseInteger1(-1230));
