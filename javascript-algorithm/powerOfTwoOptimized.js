function powerOfTwoOptimized(n) {
  if (n < 1) {
    return false;
  }
  return (n & n % 2) === 0;
}
console.log(powerOfTwoOptimized(5));
console.log(powerOfTwoOptimized(2));
console.log(powerOfTwoOptimized(1));
console.log(powerOfTwoOptimized(16));
console.log(powerOfTwoOptimized(17));
