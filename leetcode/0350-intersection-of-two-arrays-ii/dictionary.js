/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let dictionary = {};
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    if (dictionary[nums1[i]]) {
      dictionary[nums1[i]]++;
    } else {
      dictionary[nums1[i]] = 1;
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (dictionary[nums2[i]]) {
      result.push(nums2[i]);
      dictionary[nums2[i]]--;
    }
  }
  return result;
};
