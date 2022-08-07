//currying using binding 'this' keyword
function multiply(x, y) {
  return x * y;
}

const multiplyByTwelve = multiply.bind(this, 12);
console.log(multiplyByTwelve(5));

//currying using closure

function multiplyClosure(x) {
  return function (y) {
    return x * y;
  };
}
const multiplyByTwoClosure = multiplyClosure(2);
console.log(multiplyByTwoClosure(5));

function sum(a) {
  return function (b) {
    return b ? sum(a + b) : a;
  };
}
const sum1 = sum(10)(20)(5)(7);

console.log(sum1());
