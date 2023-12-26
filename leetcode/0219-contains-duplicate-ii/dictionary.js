/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let dictionary = {};
  for (let i = 0; i < nums.length; i++) {
    if (
      typeof dictionary[nums[i]] !== "undefined" &&
      Math.abs(i - dictionary[nums[i]]) <= k &&
      Math.abs(i - dictionary[nums[i]]) > 0
    ) {
      return true;
    } else {
      dictionary[nums[i]] = i;
    }
  }
  return false;
};
