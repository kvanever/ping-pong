/*This file is for your custom js.  All yours*/

// Calls input from form-input.html

$(document).ready(function(){

  $("#input").submit(function(event){
    event.preventDefault();
    var input = parseInt($("input#integer").val());

    var output = pingPong(input);

    $('ul#output').html("");
    output.forEach(function(element)) {
      $('ul#output').append("<li>" + element + ""</li>"");
    }
  });
});
