$(document).ready(function() {
  makeViewBoard();
  makeModelBoard();
  placeShips();

  //This function operates when a cell is clicked
  $("td").on("click",function() {
    //This checks if a ship is in cell, and changes color to red if so
    if(findOnBoard(parseInt($(this).attr("id"))) === SHIP) {
      $(this).addClass("hit");
      //adds to hit counter and checks if we've won
      if (addHitAndCheckWin()) {
        $("td").off("click");
        $("#win_lose").text("YOU WIN!");
      }
    } else {
      //This changes cell to gray
      $(this).addClass("miss");
    }

    // When a user clicks the cell, the number of torpedoes also goes up
    // by 1, we check if we've lost
    if (addTorpedoAndCheckLose() && !addHitAndCheckWin()) {
      $("td").off("click");
      $("#win_lose").text("You lose, LOSER!");
    }
    //show number of torpedoes used
    $("#torpedoes").text("Number of torpedoes fired: " + numTorpedoes);

    // Now we turn the cell off so we don't "waste" torpedoes
    $(this).off("click");
  });

});


// This function uses 2 for loops to create the board on the view.
function makeViewBoard() {
  // This for loop creates the rows
  for (var i = 0; i < rowCol; i++) {
    var rowStr = "row_" + i; //creates custom id for each <tr>

    //Appends text to create a tr in the html file
    $("#view_board").append("<tr id=" + rowStr + "></tr>");
    //This for loops creates the cells within the rows
    for (var j = 0; j < rowCol; j++) {
      var colStr = "" + i + j; //creates custom id for each td

      //appends text to create a td in the html file
      $("#"+rowStr).append("<td id=" + colStr + ">" + i + j + "</td>");
    }

    //appends text to close tr
    $("#view_board").append("</tr>");
  }

  // Shows the current number of torpedoes
  $("#torpedoes").text("Number of torpedoes fired: " + numTorpedoes);
}

// TODO handle changing color based on hit/miss
function changeColor(str) {
  $(str)
}
