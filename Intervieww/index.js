const sortStr = (str) => {
  let charCodeArr = [];
  let sortedStr = [];
  for (let i = 0; i < str.length; i++) {
    charCodeArr.push(str[i].charCodeAt());
  }
  const sortArr = charCodeArr.sort((a, b) => a - b);
  for (let j = 0; j < sortArr.length; j++) {
    sortedStr.push(String.fromCharCode(sortArr[j]));
  }
  return sortedStr.join("");
};
console.log(sortStr("karthik"));
