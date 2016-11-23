var SHIP = 1; // Global constant variable

var rowCol = 10; // The number of rows/columns
var numTorpedoes = 0; // The number of torpedoes that have been fired
var numShips = 5; // The number of ships in the game

// The backend game board (will be a 10x10 matrix)
var board = [ [],
              [],
              [],
              [],
              [],
              [],
              [],
              [],
              [],
              [] ];

// Populates board so there are ten arrays of ten with the value 0 using two
// for loops
function makeModelBoard() {
  for (var i = 0; i < rowCol; i++) {
    for (var j = 0; j < rowCol; j++) {
      board[i].push(0);
    }
  }
}

// Places a number of ships equal to numShips on the board, using global var
// SHIP to assign element to SHIP's value
function placeShips() {
  var counter = 0;
  while (counter < numShips) {
    // Creates random integers for index of ship
    var x = Math.floor(Math.random()*10);
    var y = Math.floor(Math.random()*10);

    // Ship will be placed if and only if a ship has not been placed
    if (board[x][y] != SHIP) {
      board[x][y] = SHIP;
      counter++; // counter will not increment unless a ship is placed
    }
  }
}
