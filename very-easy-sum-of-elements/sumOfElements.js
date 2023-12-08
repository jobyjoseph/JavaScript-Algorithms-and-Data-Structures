function sumOfElements(inpArr) {
  let sum = 0;
  for (let i = 0; i < inpArr.length; i++) {
    sum = sum + inpArr[i];
  }
  return sum;
}

console.log(sumOfElements([1, 3, 5, 4])); // 13
console.log(sumOfElements([-2, 4, 6])); // 8
