/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  if (n % 2 === 0) {
    let halfPower = myPow(x, n / 2);
    return halfPower * halfPower;
  } else {
    let evenN = n - 1;
    let halfPower = myPow(x, evenN / 2);
    return x * halfPower * halfPower;
  }
};
