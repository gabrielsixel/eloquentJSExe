var chessBoard = function(width, height) {
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
   console.log(boardWidth);
};
chessBoard (8, 8);
