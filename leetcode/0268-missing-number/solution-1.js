/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let xorRes = nums[0];
  for (let i = 1; i < nums.length; i++) {
    xorRes ^= nums[i];
  }
  for (let i = 0; i <= nums.length; i++) {
    xorRes ^= i;
  }
  return xorRes;
};
