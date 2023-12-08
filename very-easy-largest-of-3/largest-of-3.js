function printLargestOf3(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}

console.log(printLargestOf3(4, 1, 8));
