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

function placeShipOfLength(length) {
  var attemptsLeft = 100; // Make sure we don't loop infinitely
  
  while (attemptsLeft > 0) {
  	var placeHorizontal = (Math.floor(Math.random() * 2) !== 0);
	
		var x = Math.floor(Math.random() * rowCol);
  	var y = Math.floor(Math.random() * rowCol);
  	
  	if (mayPlaceShip(x, y, length, placeHorizontal)) {
  		var stop = (placeHorizontal ? x : y) + length;
  		
  		while (true) {
  			board[x][y] = SHIP;
  			// Uncomment to step through and see ships being added in real time.
   			// showShips();
  		
  			if (placeHorizontal) {
  				x++;
  				if (x == stop) break;
  			}
  			else {
  				y++;
  				if (y == stop) break;
  			}
  		}
  		
  		return;
  	}
  	
  	attemptsLeft--;
  }  
}

function mayPlaceShip(x, y, length, horizontal) {
	var stop = (horizontal ? x : y) + length;
	
	while (true) {
		if (!mayPlace(x, y)) {
			return false; // If we find an invalid coordinate, we're done.
		}
		
		if (horizontal) {
			x++;
			if (x === stop) break;
		}
		else { 
			y++;
			if (y === stop) break;
		}
	}
	
	return true;
}

// This function checks to see if we are allowed to place part of a ship 
// at the cell located at (x, y). It returns false if: (a) the given coordinates
// are out-of-bounds, (b) part of an existing ship already spans the cell, or (c)
// part of an existing ship spans an adjacent cell (including those diagonally-adjacent).
function mayPlace(x, y) {
	// Coordinates are out-of-bounds	
	if (!coordinatesAreInBounds(x, y)) {
		return false;
	}
	
	// Cell already occupied
	if (board[x][y] === SHIP) {
		return false;
	} 
	
	// At least one adjacent cell is occupied
	// return (neighboringCells(x, y).filter(function(cell){return cell === SHIP}).length == 0);	
	var neighbors = neighboringCells(x, y);
	for (var i = 0; i < neighbors.length; i++) {
		if (neighbors[i] === SHIP) {
			return false;
		}
	}
	
	return true;
}

function neighboringCells(x, y) {
	var neighbors = [];
	
	var onLeftEdge = (x === 0);
	var onRightEdge = (x === (board.length - 1));
	var onTopEdge = (y === 0);
	var onBottomEdge = (y === (board[x].length - 1));
		
		// Row above
	if (!onTopEdge) {
		// Top-left
		if (!onLeftEdge) neighbors.push(board[x - 1][y - 1]);
		
		// Top
		neighbors.push(board[x][y - 1]);
		
		// Top-right
		if (!onRightEdge) neighbors.push(board[x + 1][y - 1]);
	}
	
	// Left-adjacent
	if (!onLeftEdge) neighbors.push(board[x - 1][y]);
	
	// Right-adjacent
	if (!onRightEdge) neighbors.push(board[x + 1][y]);
	
	// Row below
	if (!onBottomEdge) {
		// Bottom-left
		if (!onLeftEdge) neighbors.push(board[x - 1][y + 1]);
	
		// Bottom
		neighbors.push(board[x][y + 1]);
		
		// Bottom-right
		if (!onRightEdge) neighbors.push(board[x + 1][y + 1]);
	}
				
	return neighbors;
}

function coordinatesAreInBounds(x, y) {
	if (x < 0 || y < 0) return false;
	
	return (x < board.length && y < board[x].length);	
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
