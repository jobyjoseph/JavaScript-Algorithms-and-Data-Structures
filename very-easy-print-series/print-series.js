function printSeries() {
  let count = 0;
  let arr = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
      count++;
      arr.push(count);
    }
    console.log(arr.join(" "));
    arr = [];
  }
}

printSeries();
