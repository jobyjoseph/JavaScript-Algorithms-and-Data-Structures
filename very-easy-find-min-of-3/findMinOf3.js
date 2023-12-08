function minOf3(a, b, c) {
  let min = a;
  if (b < min) {
    min = b;
  }
  if (c < min) {
    min = c;
  }
  return min;
}

console.log(minOf3(2, 4, 6)); // 2
console.log(minOf3(-1, 5, 0)); // -1
