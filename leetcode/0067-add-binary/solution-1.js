/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const aLength = a.length;
  const bLength = b.length;
  if (aLength > bLength) {
    b = new Array(aLength - bLength).fill("0").join("") + b;
  } else if (aLength < bLength) {
    a = new Array(bLength - aLength).fill("0").join("") + a;
  }
  let carry = 0;
  let ans = "";

  for (let i = a.length - 1; i >= 0; i--) {
    const sum = Number(a[i]) + Number(b[i]) + carry;
    switch (sum) {
      case 0:
        ans = "0" + ans;
        carry = 0;
        break;
      case 1:
        ans = "1" + ans;
        carry = 0;
        break;
      case 2:
        ans = "0" + ans;
        carry = 1;
        break;
      case 3:
        ans = "1" + ans;
        carry = 1;
        break;
      default:
        break;
    }
  }
  if (carry) {
    ans = "1" + ans;
  }
  return ans;
};
