/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let result = [];
  let dictionary = {};
  for (let i = 0; i < nums.length; i++) {
    dictionary[nums[i]] = 1;
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!dictionary[i]) {
      result.push(i);
    }
  }
  return result;
};
