var Simon = require("./../js/simon.js").simonModule;
$(document).ready(function() {
  $('#start').click(function(event) {
    event.preventDefault();
    var userName = $('#name').val();
    var newGame =  new Simon(userName);
    newGame.startGame();
    var runSimon = newGame.stepsArray.forEach(function(step) {
      var timer = setTimeout(function() {$("#" + step).css("opacity", 1)} , 1000);
      var timer = setTimeout(function() {$("#" + step).css("opacity", .25)} , 1500);
    });
    $('.square').click(function() {
      var userClick = $(this).attr('id');
      newGame.userClicks.push(userClick)
      if (newGame.userClicks[0] === newGame.stepsArray[0]) {
        newGame.startGame()
        var runSimon = newGame.stepsArray.forEach(function(step) {
          var timer = setTimeout(function() {$("#" + step).css("opacity", 1)} , 1000);
          var timer = setTimeout(function() {$("#" + step).css("opacity", .25)} , 1500);
        });
      } else {
        alert('Yippekiyay Motherfucker')
      }
    })
  });
});
