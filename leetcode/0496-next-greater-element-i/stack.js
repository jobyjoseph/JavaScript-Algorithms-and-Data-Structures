/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const stack = [];
  const nextGreater = {};

  for (let i = 0; i < nums2.length; i++) {
    while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
      nextGreater[stack.pop()] = nums2[i];
    }
    stack.push(nums2[i]);
  }

  const ans = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nextGreater[nums1[i]]) {
      ans.push(nextGreater[nums1[i]]);
    } else {
      ans.push(-1);
    }
  }

  return ans;
};
