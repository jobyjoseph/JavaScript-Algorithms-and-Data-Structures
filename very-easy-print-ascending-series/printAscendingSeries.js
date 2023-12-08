function printSeries(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      arr?.push(j + 1);
    }
    console.log(arr.join(" "));
    arr = [];
  }
}

printSeries(5);
