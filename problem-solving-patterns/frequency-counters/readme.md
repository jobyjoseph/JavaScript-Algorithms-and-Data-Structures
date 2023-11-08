# Frequency Counters

Here we mainly deal with a JavaScript **object**. The object is used to collect a bunch of values and its count. This pattern helps in algorithms with:
- Multiple pieces of data or input and the challenge involves comparing them
- A value is contained withing another value

Understanding this pattern can find a solution in O(n) rather than O(n<sup>2</sup>).

Eg: Write a function called `same()`, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

Test cases:
```
same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 3], [4, 1, 4]); // false (must be same frequency)
```