function Simon(name) {
  this.name = name;
  this.stepsArray = [];
  this.userClicks = [];
}
dumb = ["one", "two", "three", "four"];
var randomNumber = function() {
  return Math.floor(Math.random() * 4);
};

Simon.prototype.startGame = function() {
  this.stepsArray.push(dumb[randomNumber()]);
};



exports.simonModule = Simon;
