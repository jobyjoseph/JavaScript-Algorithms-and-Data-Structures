/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let dictionary = {};
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    dictionary[nums1[i]] = 1;
  }
  for (let i = 0; i < nums2.length; i++) {
    if (dictionary[nums2[i]] === 1) {
      dictionary[nums2[i]]++;
    }
  }
  Object.entries(dictionary).forEach(([key, value]) => {
    if (value > 1) {
      result.push(key);
    }
  });
  return result;
};
