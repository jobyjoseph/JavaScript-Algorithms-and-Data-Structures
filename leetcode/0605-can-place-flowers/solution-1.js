/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0,
    pre = -1,
    next = 1;

  for (let i = 0; i < flowerbed.length; i++, pre++, next++) {
    let preValue = flowerbed[pre] ?? 0;
    let currentValue = flowerbed[i];
    let nextValue = flowerbed[next] ?? 0;

    if (preValue + currentValue + nextValue == 0) {
      flowerbed[i] = 1;
      count++;
    }
  }

  return count >= n;
};
