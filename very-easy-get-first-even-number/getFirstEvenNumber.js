function getFirstEvenNumber(inputArr) {
  for (let j = 0; j < inputArr.length; j++) {
    if (inputArr[j] % 2 === 0) {
      return inputArr[j];
    }
  }
  return -1;
}

console.log(getFirstEvenNumber([1, 3, 5, 4])); // 4
console.log(getFirstEvenNumber([3, 5, 7])); // -1
