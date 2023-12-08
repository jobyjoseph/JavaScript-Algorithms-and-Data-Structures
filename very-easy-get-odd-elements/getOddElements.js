function getOddElements(inpArr) {
  const outArr = [];
  for (let i = 0; i < inpArr.length; i++) {
    if (inpArr[i] % 2 !== 0) {
      outArr.push(inpArr[i]);
    }
  }
  return outArr;
}

console.log(getOddElements([1, 3, 5, 4, 7, 8])); // [1, 3, 5, 7]
console.log(getOddElements([2, 4, 6])); // []
