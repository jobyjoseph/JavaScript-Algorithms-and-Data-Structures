// O(n^2) solution with 2 nested loops
// export function same(arr1, arr2) {
//   let count = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr2[j] == arr1[i] * arr1[i]) {
//         count++;
//         break;
//       }
//     }
//   }
//   if (arr1.length === count) {
//     return true;
//   } else {
//     return false;
//   }
// }

// O(n) solution
export function same(arr1, arr2) {
  // Handle array with different length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Group elements of array 1
  let frequencyCounter1 = {};
  for (let ele of arr1) {
    frequencyCounter1[ele] = (frequencyCounter1[ele] || 0) + 1;
  }
  // Group elements of array 2
  let frequencyCounter2 = {};
  for (let ele of arr2) {
    frequencyCounter2[ele] = (frequencyCounter2[ele] || 0) + 1;
  }

  // Compare both frequency counters
  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
  }

  return true;
}
