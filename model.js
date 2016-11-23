var SHIP = 1; // Global constant variable

var rowCol = 10; // The number of rows/columns
var numTorpedoes = 0; // The number of torpedoes that have been fired
var maxTorpedoes = 25; //The Maximum torpedoes before you lose
var numShips = 5; // The number of ships in the game
var numHits = 0;
var maxHits = 5;

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
    if (mayPlace(x, y)) {
      board[x][y] = SHIP;
      counter++; // counter will not increment unless a ship is placed
    }
  }
}

// This function checks to see if we are allowed to place a ship in this location (i.e., if ship is not already present or isn't a cell over vertically, horizontally, or diagonally)
function mayPlace(i, j) {
  // Create variables that are less than or equal to i and/or j, but if they
  // extend outside the matrix, set them to the min or max value possible
  var x = i - 1;
  if (x < 0) {
    x = i;
  }
  var xx = i + 1;
  if (xx > (rowCol - 1)) {
    xx = i;
  }
  var y = j - 1;
  if (y < 0) {
    y = j;
  }
  var yy = j + 1;
  if (yy > (rowCol - 1)) {
    yy = j;
  }

  // Check if the values at these indices are equal to SHIP, and if they are, return false, if they are not, return true
  return (board[i][j] != SHIP && board[xx][j] != SHIP && board[x][j] != SHIP && board[i][yy] != SHIP && board[i][y] != SHIP && board[xx][yy] != SHIP && board[xx][y] != SHIP && board[x][yy] != SHIP && board[x][y] != SHIP);
}

//This function finds an element in the matrix, and returns its value
//controller uses this to access the array in the model
function findOnBoard(num) {
  var row = Math.floor(num / 10);
  var col = num % 10;
  return board[row][col];
}

// Increments the number of hits and checks if user has won (i.e., the number
// of hits is equal to maxHits)
function addHitAndCheckWin() {
  numHits++;
  console.log(numHits);
  return numHits >= maxHits;
}

//Increases number of torpedoes by 1 and checks if the user lost.
function addTorpedoAndCheckLose() {
  numTorpedoes++;
  return numTorpedoes >= maxTorpedoes;
}


function showBoard() {
  console.log("   " + 0 + " " + 1 + " " + 2 + " " + 3 + " " + 4 + " " + 5 + " " + 6 + " " + 7 + " " + 8 + " " + 9);
  for (var i = 0; i < rowCol; i++) {
    console.log(i + ": " + board[i][0] + " " + board[i][1] + " " + board[i][2] + " " + board[i][3] + " " + board[i][4] + " " + board[i][5] + " " + board[i][6] + " " + board[i][7] + " " + board[i][8] + " " + board[i][9]);
  }
}
