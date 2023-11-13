# JavaScript-Algorithms-and-Data-Structures

**Question 1:**

Write a function called same(), which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

Test cases:
```javascript
same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 3], [4, 1, 4]); // false (must be same frequency)
```
![Frequency Counter](https://img.shields.io/badge/Frequency%20Counter-8A2BE2)

[View Solution](/problem-solving-patterns/frequency-counters)

**Question 2:**

Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as _cinema_, formed from _iceman_.

Test cases:
```javascript
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
```

Note: You may assume the string contains only lowercase alphabets.

Time Complexity - O(n)

![Frequency Counter](https://img.shields.io/badge/Frequency%20Counter-8A2BE2)

[View Solution](/frequency-counter-anagram)