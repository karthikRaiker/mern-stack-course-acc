//O(n) time Complexity
function climbingStairCase(n) {
  const noOfStep = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfStep[i] = noOfStep[i - 1] + noOfStep[i - 2];
  }

  return noOfStep[n - 1];
}
console.log(climbingStairCase(1));
console.log(climbingStairCase(2));
console.log(climbingStairCase(3));
console.log(climbingStairCase(4));
console.log(climbingStairCase(5));
