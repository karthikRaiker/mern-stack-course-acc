function convertTitleCase(str) {
  const strArr = str.toLowerCase().split(" ");
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
  }
  console.log(strArr.join(" "));
}

convertTitleCase("hello world i love javascript");

let a = "hello";
console.log("Using slice 'hello' to => " + "y" + a.slice(1));
const b = a.replace("hello", "bell");
console.log("a =>", a);
console.log("b =>", b);
