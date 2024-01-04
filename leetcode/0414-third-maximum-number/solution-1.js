/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let a = nums.sort((a, b) => b - a);
  let set = new Set(a);
  let newArray = Array.from(set);
  if (newArray.length < 3) return newArray[0];
  return newArray[2];
};
