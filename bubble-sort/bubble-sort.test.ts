import bubbleSort from "./bubble-sort";

describe("Bubble Sort", () => {
  test("Sorts input array", () => {
    expect(bubbleSort([2, 8, 3, 6, 1])).toEqual([1, 2, 3, 6, 8]);
  });
});
