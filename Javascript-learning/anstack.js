//Antstack Interview Question

let users = [
  { fname: "karthik", lname: "raikar", age: 25 },
  { fname: "harish", lname: "raikar", age: 33 },
  { fname: "meera", lname: "raikar", age: 50 },
  { fname: "preethi", lname: "raikar", age: 24 },
];

function findHighAge(users) {
  let result = users[0];
  users.forEach((element) => {
    if (element.age > result.age) {
      result = element;
    }
  });
  return result;
}

console.log(findHighAge(users));

function vowelCount(str) {
  let count = 0;
  let vowel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowel.indexOf(str[i]) !== -1) {
      count++;
    }
  }

  return count;
}

console.log(vowelCount("aeioukk"));
