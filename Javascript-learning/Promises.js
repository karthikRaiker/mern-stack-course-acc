function promise(str, condition) {
  let result = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (condition) {
        console.log(str);
      }
    }, 5000);
  })
    .then(() => console.log("Hello world"))
    .catch(() => console.log("Error"));
  return result;
}
promise("hello world", false);
