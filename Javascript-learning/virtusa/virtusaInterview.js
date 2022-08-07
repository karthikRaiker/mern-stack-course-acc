// 1. Write a program which takes two strings as input from the user (str1 and str2). This program should
// print two strings as output (op1 and op2).
console.log("############## Task1 ###############");

function task1(str1, str2) {
  let str1Output = "";
  let str2Output = "";
  for (let i = 0; i < str1.length; i++) {
    if (str2.indexOf(str1[i]) === -1) {
      str1Output += str1[i];
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) === -1) {
      str2Output += str2[i];
    }
  }
  return `${str1Output.length ? str1Output : null}, ${
    str2Output.length ? str2Output : null
  }`;
}
console.log(task1("ABC", "BC"));
console.log(task1("BCEA", "BANGALORE"));

// 2. Write a program to call the below mentioned rest APIs.
// Display the email ids returned by the GET method

console.log("############## Task2 ###############");

async function task2(id) {
  await fetch(`https://reqres.in/api/users/${id}`)
    .then((res) => res.json())
    .then((result) => {
      console.log(result.data.email);
    })
    .catch((err) => console.log("error in api=>", err));
}
// task2(1);
// task2(3);
// task2(10);
