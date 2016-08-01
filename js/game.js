function Game() {
  this.allTurns = 0;
  this.wonTurns = 0;
  this.turns = [];
  this.clicks = 0;
  this.cards = [ 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
};

Game.prototype.shuffle = function () {
  for (var i = cards.length - 1; i>= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i+1));
    var valueAtIndex = cards[randomIndex];

    cards[randomIndex] = cards[i];
    cards[i] = valueAtIndex;
  }
};

Game.prototype.getClicks = function (play) {
  clicks += 1;
  turns.push(play);
  return clicks;
};

Game.prototype.getTurn = function() {
  clicks=0;
  allTurns += 1;

  if(turns[0]==turns[1])
    {
      wonTurns +=1;
      turns = [];
      return true;
    }
    else {
      turns = [];
      return false;
    }
  };

  Game.prototype.gameWon() = function() {
    if(wonTurns == 5){
      return true;
    } else {
      return false;
    }
  };

exports.gameModule = Game;
