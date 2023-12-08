function maxOf3(a, b, c) {
  let largest = a;
  if (b > largest) {
    largest = b;
  }
  if (c > largest) {
    largest = c;
  }
  return largest;
}

console.log(maxOf3(2, 4, 6)); // 6
console.log(maxOf3(-1, 5, 0)); // 5
