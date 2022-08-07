let sum = (a) => {
  return function (b) {
    if (b) return sum(a + b);
    else return a;
  };
};

let sum1 = sum(10)(20)(5)(7);
console.log(sum1());
console.log(sum(10)(20)(5)(7)());
