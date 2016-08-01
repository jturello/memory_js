

$(document).ready(function() {
  $("button").submit(function(event) {
    event.preventDefault();
    var cardPosition = $(this).val();
    $(".out").text("<p>" + cardPosition + "</p>");
    console.log(cardPosition);
  })
});
