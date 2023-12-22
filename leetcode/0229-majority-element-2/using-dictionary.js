/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let dictionary = {};
  let response = [];
  for (let i = 0; i < nums.length; i++) {
    dictionary[nums[i]] = dictionary[nums[i]] ? ++dictionary[nums[i]] : 1;
  }

  Object.entries(dictionary).forEach(([key, value]) => {
    if (value > Math.floor(nums.length / 3)) {
      response.push(key);
    }
  });
  return response;
};
