/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let sum = nums[0];
  let min = nums[0];

  // find the total # of blocks and min tower height
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i];
    sum += nums[i];
  }

  return sum - nums.length * min;
};
