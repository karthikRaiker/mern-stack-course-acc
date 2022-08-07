function task(n) {
  if (n < 1) {
    console.log("Num should not be less than 1");
  } else {
    let initialValue = n / n;
    let prevNum;
    let winner = [];
    for (i = 1; i <= n; i++) {
      if (i === n && i !== prevNum) {
        console.log("#" + i + " Kills " + "#" + initialValue);
        winner.push(i);
        winner.shift();
        break;
      }
      if (i !== prevNum) {
        console.log("#" + i + " Kills " + "#" + parseInt(i + 1));
        prevNum = i + 1;
        winner.push(i);
      }
    }
    return winner;
  }
}
console.log(task(5));
console.log("########################");
console.log(task(6));
