let users = [
  { fname: "karthik", lname: "raikar", age: 25 },
  { fname: "harish", lname: "raikar", age: 33 },
  { fname: "meera", lname: "raikar", age: 50 },
  { fname: "preethi", lname: "raikar", age: 24 },
];

const output = users.filter((user) => user.age < 30).map((user) => user.fname);
console.log(output);

const output1 = users.reduce((acc, curr) => {
  if (curr.age < 30) acc.push(curr.fname);
  return acc;
}, []);

console.log(output1);

//find largest string in given array using reducer
function findLongestWord(str) {
  const strArr = str.split(" ");
  const result = strArr.reduce((acc, curr) => {
    // console.log("acc=>",acc,"curr=>",curr)
    if (curr.length > acc) acc = curr.length;
    return acc;
  }, strArr[0].length);
  return result;
}

console.log(findLongestWord("     h hii hello worldss world worn"));
