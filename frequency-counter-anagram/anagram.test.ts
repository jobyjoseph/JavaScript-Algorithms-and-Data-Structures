import { validAnagram } from "./anagram";

describe("Frequency Counter Anagram", () => {
  test("validAnagram('', '')", () => {
    const result = validAnagram("", "");
    expect(result).toBe(true);
  });

  test("validAnagram('aaz', 'zza')", () => {
    const result = validAnagram("aaz", "zza");
    expect(result).toBe(false);
  });

  test("validAnagram('anagram', 'nagaram')", () => {
    const result = validAnagram("anagram", "nagaram");
    expect(result).toBe(true);
  });

  test("validAnagram('rat', 'car')", () => {
    const result = validAnagram("rat", "car");
    expect(result).toBe(false);
  });

  test("validAnagram('awesome', 'awesom')", () => {
    const result = validAnagram("awesome", "awesom");
    expect(result).toBe(false);
  });

  test("validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')", () => {
    const result = validAnagram("amanaplanacanalpanama", "acanalmanplanpamana");
    expect(result).toBe(false);
  });

  test("validAnagram('qwerty', 'qeywrt')", () => {
    const result = validAnagram("qwerty", "qeywrt");
    expect(result).toBe(true);
  });

  test("validAnagram('texttwisttime', 'timetwisttext')", () => {
    const result = validAnagram("texttwisttime", "timetwisttext");
    expect(result).toBe(true);
  });
});
