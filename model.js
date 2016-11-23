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
    if (board[x][y] != SHIP) {
      board[x][y] = SHIP;
      counter++; // counter will not increment unless a ship is placed
    }
  }
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
