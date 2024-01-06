/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] ? ++map[nums[i]] : 1;
    if (map[nums[i]] == 2) {
      delete map[nums[i]];
    }
  }
  return Object.keys(map);
};
