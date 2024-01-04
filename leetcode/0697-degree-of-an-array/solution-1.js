/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let result = 0;
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]].count++;
      map[nums[i]].right = i;
    } else {
      map[nums[i]] = {
        count: 1,
        left: i,
        right: i,
      };
    }
  }
  let maxCount = 0;
  let maxCountArr = [];
  for (const [key, value] of Object.entries(map)) {
    if (value.count > maxCount) {
      maxCountArr = [];
      maxCountArr.push(key);
      maxCount = value.count;
    } else if (value.count == maxCount) {
      maxCountArr.push(key);
    }
  }

  if (maxCountArr.length == 1) {
    return map[maxCountArr[0]].right - map[maxCountArr[0]].left + 1;
  } else {
    let min = 50000;
    for (let j = 0; j < maxCountArr.length; j++) {
      if (map[maxCountArr[j]].right - map[maxCountArr[j]].left + 1 < min)
        min = map[maxCountArr[j]].right - map[maxCountArr[j]].left + 1;
    }
    return min;
  }
};
