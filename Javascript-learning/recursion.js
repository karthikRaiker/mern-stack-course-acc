//amazon ui frontend question: what is the output of sum(1)(2)(3)(4)..()

let sum = (a) => (b) => b ? sum(a + b) : a;
console.log(sum(1)(2)(3)(4)());
const sum1 = sum(1)(2)(3)(4);
console.log(sum1());
