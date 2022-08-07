//O(n) time Complexity
function prime(n) {
  if (n < 2) {
    return false;
  }
  //(base condition)i should less then n because n is divisible by n
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(prime(4));
console.log(prime(5));
