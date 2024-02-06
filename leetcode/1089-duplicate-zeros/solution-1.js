/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let cpy = [...arr];
  for (let i = 0, j = 0; j < arr.length; i++, j++) {
    if (cpy[i] !== 0) {
      arr[j] = cpy[i];
    } else {
      arr[j] = cpy[i];
      j++;
      arr[j] = cpy[i];
    }
  }
  arr.length = cpy.length;
};
