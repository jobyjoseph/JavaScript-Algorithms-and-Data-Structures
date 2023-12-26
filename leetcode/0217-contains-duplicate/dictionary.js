/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let dictionary = {};
  for (let i = 0; i < nums.length; i++) {
    if (dictionary[nums[i]]) {
      return true;
    } else {
      dictionary[nums[i]] = 1;
    }
  }
  return false;
};
