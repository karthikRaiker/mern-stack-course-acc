function palindrome(str) {
  let revStr = str.toLowerCase().split("").reverse().join("");
  if (revStr === str.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrome("abbab"));
