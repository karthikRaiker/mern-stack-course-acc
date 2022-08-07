//self coded
function repeatStrNum(str, num) {
  let repeatStr = "";
  if (num < 0) console.log("");
  else {
    for (var i = 0; i < num; i++) {
      repeatStr += str;
    }
    console.log(repeatStr);
  }
}
repeatStrNum("selfCoded", 3);

//using repeat method
function repeatStrNum1(str, num) {
  if (num < 0) return "";
  else return str.repeat(num);
}
console.log(repeatStrNum1("repeatMthd", 1));

//using recursion
function repeatStrNum2(str, num) {
  if (num <= 0) return "";
  if (num === 1) return str;
  return str + repeatStrNum2(str, num - 1);
}
console.log(repeatStrNum2("recursion", 5));
