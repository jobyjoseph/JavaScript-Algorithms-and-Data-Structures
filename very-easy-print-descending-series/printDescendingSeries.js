function printDescendingSeries(n) {
  let arr = [];
  for (let i = n; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      arr.push(j + 1);
    }
    console.log(arr.join(" "));
    arr = [];
  }
}

printDescendingSeries(5);
