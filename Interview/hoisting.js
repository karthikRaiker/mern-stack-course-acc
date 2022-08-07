// var x = 1;
// a();
// b();
// console.log(x);
function a() {
  var x = 10;
  console.log(x);
}
function b() {
  var x = 100;
  console.log(x);
}

function x() {
  for (var i = 1; i <= 5; i++) {
    (function close(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    })(i);
  }
}
// x();
//***************************************************************************
const num = [2, 5, 7, 1, 3];
console.log(num);

function square(n) {
  return n * n;
}
const newNum = num.map(square);
console.log(newNum);

function binary(n) {
  return n.toString(2);
}
const binaryNum = num.map(binary);
console.log(binaryNum);

//**************************************************** */

Array.prototype.myMap = function (logic) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic[this[i]], i, this);
  }
  return output;
};

num.myMap((n) => console.log(n));
