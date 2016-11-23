$(document).ready(function() {
  makeViewBoard();

  $("td").on("click",function() {
    // When a user clicks a cell, it turns gray
    $(this).addClass("miss");

    // When a user clicks the cell, the number of torpedoes also goes up
    // by 1 and the text reflects that
    numTorpedoes++;
    $("#torpedoes").text("Number of torpedoes fired: " + numTorpedoes);
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
      var colStr = "cell_" + i + j; //creates custom id for each td

      //appends text to create a td in the html file
      $("#"+rowStr).append("<td id=" + colStr + ">" + i + j + "</td>");
    }

    //appends text to close tr
    $("#view_board").append("</tr>");
  }

  // Shows the current number of torpedoes
  $("#torpedoes").text("Number of torpedoes fired: " + numTorpedoes);
}
