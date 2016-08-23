/*
  Write a program that creates a string that represents an 8×8 grid, using
  newline characters to separate lines. At each position of the grid there is
  either a space or a “#” character. The characters should form a chess board.

  Passing this string to console.log should show something like this:
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
*/
function chessBoard(width, height) {
  var boardWidth = "";
  for (var j = 0; j < height; j++) {
    for (var i = 0; i <= width; i++) {
      if ((j + i) % 2 === 0) {
        boardWidth += " ";
       } else {
        boardWidth += "#";
       }
      if (i == width) {
        boardWidth += "\n";
      }
    }
  }
  return boardWidth;
}
