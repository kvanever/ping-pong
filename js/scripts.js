/*This file is for your custom js.  All yours*/
// Business Logic

// Main Ping Pong function

var pingPong = function(integer) {
  var array = [];
  for (i = 1; i <= integer; i++) {
    if (i % 15 === 0) {
      array[i] = "pingpong";
    }
    else if (i % 3 === 0) {
      array[i] = "ping";
    }
    else if (i % 5 === 0) {
      array[i] = "pong";
    }
    else {
      array[i] = i;
    }
  }
  return array;
}

// User Interface Logic

// Calls input from form-input.html

$(document).ready(function() {
  $("#input").submit(function(event){
    event.preventDefault();

    var input = parseInt($("input#integer").val());

    var output = pingPong(input);

    $('ul#output').html("");
    output.forEach(function(element) {
      $('ul#output').append("<li>" + element + " </li>");
    });

  });
});
