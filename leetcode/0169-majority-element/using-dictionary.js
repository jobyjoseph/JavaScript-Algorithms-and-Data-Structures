/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let dictionary = {};
  let maxObj = { value: 0, count: 0 };
  for (let i = 0; i < nums.length; i++) {
    dictionary[nums[i]] = dictionary[nums[i]] ? ++dictionary[nums[i]] : 1;
    if (maxObj.count < dictionary[nums[i]]) {
      maxObj.value = nums[i];
      maxObj.count = dictionary[nums[i]];
    }
  }
  return maxObj.value;
};
