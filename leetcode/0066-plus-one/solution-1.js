/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  return (BigInt(digits.join(""), 10) + BigInt(1) + "").split("");
};
