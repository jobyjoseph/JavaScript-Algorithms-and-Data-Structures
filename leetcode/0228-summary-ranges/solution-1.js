/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let start = nums[i];
    let end = nums[i];

    while (i < nums.length && nums[i] + 1 === nums[i + 1]) {
      end = nums[i + 1];
      i++;
    }

    if (start !== end) {
      result.push(`${start}->${end}`);
    } else {
      result.push(`${start}`);
    }
  }
  return result;
};
