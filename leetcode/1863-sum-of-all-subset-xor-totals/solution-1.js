/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let subsets = [];

  function recurse(current, remaining) {
    if (remaining.length === 0) {
      subsets.push(current);
    } else {
      recurse(current.concat([remaining[0]]), remaining.slice(1));
      recurse(current, remaining.slice(1));
    }
  }

  recurse([], nums);

  let sum = 0;
  for (let i = 0; i < subsets.length; i++) {
    const xorSum = eval(subsets[i].join("^") || 0);
    sum += xorSum;
  }
  return sum;
};
