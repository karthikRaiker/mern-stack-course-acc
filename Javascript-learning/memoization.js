function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    JSON.stringify(args);
    var argsCache;
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {}
  return num1 * num2;
};

const memoizedClumzyProduct = myMemoize(clumsyProduct);
console.log(memoizedClumzyProduct(15, 7, 155));
