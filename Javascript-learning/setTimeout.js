for (var i = 0; i < 5; i++) {
  function arr(i) {
    setTimeout(() => {
      console.log(i);
    }, 5000);
  }
  arr(i);
}
