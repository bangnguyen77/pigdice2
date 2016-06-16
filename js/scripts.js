// business logic
var dieRoll = function(){
  return Math.ceil(Math.random()*6);
}
function Scores(pScore,diceTotal){
  this.playerScore = pScore;
  this.turnTotal = diceTotal;
}
Scores.prototype.turnTicker = function(turnRoll){
  this.turnTotal += turnRoll;
  return this.turnTotal;
}
Scores.prototype.scoreTotal = function(){
  this.playerScore += this.turnTotal;
  this.turnTotal = 0;
  return this.playerScore;
}

var p1 = new Scores(0,0);
var p2 = new Scores(0,0);


// front end logic
$(document).ready(function(event){
  $("#p1rollButton").click(function(event){
    var thisRoll = dieRoll();
    $(".rollDisplay").text(thisRoll);
    p2.turnTotal = 0;
    if (thisRoll===1){
      p1.turnTotal = 0;
      $(".p2Buttons").fadeIn();
      $(".p1Buttons").fadeOut();
    } else {
      p1.turnTicker(thisRoll);
    }
    $(".turnTotalDisplay").text(p1.turnTotal);
  });
  $("#p1holdButton").click(function(event){
    var turnOver = p1.turnTotal;
    $("#player1score").text(p1.scoreTotal());
    if (p1.playerScore>=100) {
      $(".winner").fadeIn();
    }
    $(".turnTotalDisplay").text("0");
    $(".p2Buttons").fadeIn();
    $(".p1Buttons").fadeOut();
  });
  $("#p2rollButton").click(function(event){
    var thisRoll = dieRoll();
    $(".rollDisplay").text(thisRoll);
    p1.turnTotal = 0;
    if (thisRoll===1){
      p2.turnTotal = 0;
      $(".p1Buttons").fadeIn();
      $(".p2Buttons").fadeOut();
    } else {
      p2.turnTicker(thisRoll);
    }
    $(".turnTotalDisplay").text(p2.turnTotal)
  });
  $("#p2holdButton").click(function(event){
    var turnOver = p2.turnTotal;
    $("#player2score").text(p2.scoreTotal());
    if (p2.playerScore>=100) {
      $(".winner").fadeIn();
    }
    $(".turnTotalDisplay").text("0");
    $(".p1Buttons").fadeIn();
    $(".p2Buttons").fadeOut();
  });
});
