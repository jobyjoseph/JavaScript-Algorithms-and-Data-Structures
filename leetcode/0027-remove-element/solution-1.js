/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let count = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] == val) {
      [nums[i], nums[nums.length - 1 - count]] = [
        nums[nums.length - 1 - count],
        nums[i],
      ];
      count++;
    }
  }
  return nums.length - count;
};
