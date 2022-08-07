function caesarCipher(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let asciStr = str[i].charCodeAt();
    // console.log(asciStr);
    if (asciStr >= 65 && asciStr <= 77) {
      result += String.fromCharCode(asciStr + 13);
    } else if (asciStr >= 78 && asciStr <= 90) {
      result += String.fromCharCode(asciStr - 13);
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(caesarCipher("URYYB JRYBPBZR GB ONATNYBER"));
