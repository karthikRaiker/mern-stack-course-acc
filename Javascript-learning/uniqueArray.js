const array = [1, 2, 5, 2, 0, 1, "a", "z", "n", "z"];
var uniques = array.filter((v, i, a) => a.indexOf(v) === i);
console.log(uniques);
