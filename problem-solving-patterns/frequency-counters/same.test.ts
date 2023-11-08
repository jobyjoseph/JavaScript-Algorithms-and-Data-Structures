import { same } from "./same";

describe("Stack", () => {
  test("same([1, 2, 3], [4, 1, 9])", () => {
    const result = same([1, 2, 3], [4, 1, 9]);
    expect(result).toBe(true);
  });
  test("same([1, 2, 3], [1, 9])", () => {
    const result = same([1, 2, 3], [1, 9]);
    expect(result).toBe(false);
  });
  test("same([1, 2, 3], [4, 1, 4])", () => {
    const result = same([1, 2, 3], [4, 1, 4]);
    expect(result).toBe(false);
  });
});
