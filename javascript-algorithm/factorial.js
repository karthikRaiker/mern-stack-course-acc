//O(n) time Complexity
function factorial(n) {
  res = 1;
  for (let i = 2; i <= n; i++) {
    res *= i;
  }
  return res;
}
console.log(factorial(3));
