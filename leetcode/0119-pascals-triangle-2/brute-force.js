/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let triangle = [[1]];

  for (let i = 0; i < rowIndex; i++) {
    let row = [1];
    for (let j = 0; j < i; j++) {
      row.push(triangle[i][j] + triangle[i][j + 1]);
    }
    row.push(1);
    triangle.push(row);
  }

  return triangle[rowIndex];
};
