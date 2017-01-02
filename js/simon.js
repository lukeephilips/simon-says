function Simon(name) {
  this.name = name;
  this.stepsArray = [];
}
dumb = ["one", "two", "three", "four"];

Simon.prototype.startGame = function() {
  randomNumber = Math.floor(Math.random() * 4);

  this.stepsArray.push(dumb[randomNumber]);
};

Simon.prototype.nextTurn = function() {
  stepsArray.push(randomNumber);
};

exports.simonModule = Simon;
