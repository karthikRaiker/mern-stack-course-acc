//O(sqrt(n)) time Complexity , when n increases loop execute root of n times
function primeOptimize(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(primeOptimize(10));
console.log(primeOptimize(5));
