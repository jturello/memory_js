var Game = require('./../js/game.js').gameModule;

$(document).ready(function() {
  $("button").click(function(event) {
    event.preventDefault();
    console.log("$(button#2): " + $('input#2i').val());
    console.log("$(button#): " + $('input#1i').val());
    // var cardPosition = $(this).val();
    // $("ul").append("<li>" + cardPosition + "</li>");
    // $('#solution').append("<li>" + element + "</li>");
    // console.log(cardPosition);
  });
});
