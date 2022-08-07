//O(2^n) time Complexity
function fibonacciRecursion(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}
console.log(fibonacciRecursion(10));
console.log(fibonacciRecursion(6));
console.log(fibonacciRecursion(0));
console.log(fibonacciRecursion(3));
