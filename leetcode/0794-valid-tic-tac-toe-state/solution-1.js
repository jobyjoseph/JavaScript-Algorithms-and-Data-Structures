/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function (board) {
  let Os = 0;
  let Xs = 0;
  let XWon = false;
  let OWon = false;
  // loop normal and check rows while getting a count of totals
  for (let row of board) {
    if (row === "XXX") XWon = true;
    if (row === "OOO") OWon = true;
    for (let char of row) {
      if (char === "O") Os++;
      if (char === "X") Xs++;
    }
  }
  // check vertical lines
  for (let i = 0; i < 3; i++) {
    let str = "";
    for (let j = 0; j < 3; j++) {
      str += board[j][i];
    }
    if (str === "XXX") XWon = true;
    if (str === "OOO") OWon = true;
  }
  // check diagonals
  const diag1 = board[0][0] + board[1][1] + board[2][2];
  const diag2 = board[0][2] + board[1][1] + board[2][0];
  if (diag1 === "XXX" || diag2 === "XXX") XWon = true;
  if (diag1 === "OOO" || diag2 === "OOO") OWon = true;

  if (Os > Xs) return false; // X plays first
  if (Xs > Os + 1) return false; // Double play by X
  if (XWon && Xs === Os) return false; // O played after X already won
  if (OWon && Xs > Os) return false; // X played after O already won
  return true;
};
