/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows <= 0) return [];

  let triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    let row = [1];
    for (let j = 1; j < i; j++) {
      row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
    }
    row.push(1);
    triangle.push(row);
  }
  return triangle;
};
