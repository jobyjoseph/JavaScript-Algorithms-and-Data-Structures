/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  // Convert the number to an array of digits
  const digits = Array.from(String(n), Number);

  // Find the first decreasing digit from right to left
  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }

  // If no such digit is found, there is no greater number
  if (i === -1) {
    return -1;
  }

  // Find the smallest digit to the right of i that is greater than digits[i]
  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j--;
  }

  // Swap digits[i] and digits[j]
  [digits[i], digits[j]] = [digits[j], digits[i]];

  // Reverse the digits to the right of i
  let left = i + 1;
  let right = digits.length - 1;
  while (left < right) {
    [digits[left], digits[right]] = [digits[right], digits[left]];
    left++;
    right--;
  }

  // Convert the array back to a number
  const result = parseInt(digits.join(""), 10);

  //Check if the result fits in a 32-bit integer
  if (result > 2147483647) {
    return -1;
  }

  return result;
};
