/*This file is for your custom js.  All yours*/
// Business Logic

// Main Ping Pong function

var pingPong = function(integer) {
  var array = [];
  debugger;
  for (i = 1; i <= integer; i++) {
    array[i] = i;
  }
  return array;
}

// User Interface Logic

// Calls input from form-input.html

$(document).ready(function(){

  $("#input").submit(function(event){
    event.preventDefault();
    var input = parseInt($("input#integer").val());

    var output = pingPong(input);

    output.forEach(function(element) {
      $('ul#output').append("<li>" + element + "</li>");
    });
  });
});
