/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let index1;
  let index2;
  for (let i = 0; i < nums.length; i++) {
    index1 = i;
    for (let j = i + 1; j < nums.length; j++) {
      index2 = j;
      if (nums[index1] + nums[index2] === target) {
        return [index1, index2];
      }
    }
  }
};
