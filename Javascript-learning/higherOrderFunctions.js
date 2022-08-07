// const values = [10, 15, 7, 3, 9];
const values = 10;

function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

function multipleThirteen(x) {
  return 13 * x;
}

function higherOrderFunc(values, logic) {
  if (Array.isArray(values)) {
    return higherOrderIterator(values, logic);
  }
  let value = [];
  value.push(values);
  return higherOrderIterator(value, logic);
}

function higherOrderIterator(values, logic) {
  result = [];
  for (let i = 0; i < values.length; i++) {
    result.push(logic(values[i]));
  }
  return result;
}

console.log("Sqares are => ", higherOrderFunc(values, square));
console.log("cubes are => ", higherOrderFunc(values, cube));
console.log(
  "13 multiplication table are => ",
  higherOrderFunc(values, multipleThirteen)
);
