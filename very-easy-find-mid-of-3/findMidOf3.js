function midOf3(a, b, c) {
  if (a >= b && a <= c) {
    return a;
  }
  if (b >= a && b <= c) {
    return b;
  }
  if (c >= a && c <= b) {
    return c;
  }
}

console.log(midOf3(2, 4, 6)); // 4
console.log(midOf3(-1, 5, 0)); // 0
