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

export function same(arr1, arr2) {
  const obj = {};
  if (arr1.length !== arr2.length) {
    return false;
  }
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i] * arr1[i]] = ++count;
    obj[arr2[i]] = ++count;
  }
  console.log(obj);
  if (Object.keys(obj).length === count / 2) {
    return true;
  }
}
