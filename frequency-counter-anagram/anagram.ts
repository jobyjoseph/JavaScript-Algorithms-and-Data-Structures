export function validAnagram(str1, str2) {
  const str1Chars = str1?.split("");
  const str2Chars = str2?.split("");

  // Return false if the length of both strings are not same
  if (str1Chars?.length !== str2Chars?.length) {
    return false;
  }

  const frequencyCounter1 = {};
  for (let char of str1Chars) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  const frequencyCounter2 = {};
  for (let char of str2Chars) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (frequencyCounter1?.[key] !== frequencyCounter2?.[key]) {
      return false;
    }
  }

  return true;
}
