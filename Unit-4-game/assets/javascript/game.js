// Golbal variables
//
// variable for random number to be displayed to player
var targetRandomNumber = "";
//
//
var gameCounter = 0;
//
//
// variable to store player wins
var wins = 0;
//
// variable to store player losses
var losses = 0;
//
//
// Functions
//
// Generate random numbers for game
function randomNumber (min, max) {
    crystalValue = Math.floor(Math.random() * (max - min)) + min;
    return crystalValue;
};
//
//
function gameLoad() {
    crystal1 = randomNumber(1,13);
    console.log(crystal1);
    $(".crystal-1").attr("value", crystal1)
    crystal2 = randomNumber(1,13);
    console.log(crystal2);
    $(".crystal-2").attr("value", crystal2)
    crystal3 = randomNumber(1,13);
    console.log(crystal3);
    $(".crystal-3").attr("value", crystal3)
    crystal4 = randomNumber(1,13);
    console.log(crystal4);
    $(".crystal-4").attr("value", crystal4)
    targetRandomNumber = randomNumber(19,121);
    console.log(targetRandomNumber);
    $(".random-number").text(targetRandomNumber);
    resetTally();
};
//
//
function isWin() {
    if (gameCounter === targetRandomNumber){
        wins++;
        $(".show-wins").text(wins);
        gameLoad();
    }
};
//
//
function isLoss() {
    if (gameCounter > targetRandomNumber) {
        losses++;
        $(".show-losses").text(losses);
        gameLoad();
    }
};
//
//
function scoreTally(crystalValue) {
    gameCounter += crystalValue;
    if (gameCounter === targetRandomNumber) {
    }
};
//
//
function resetTally() {
    $(".counter").empty();
    gameCounter = 0;
    $(".counter").text(gameCounter)
};

//
//
gameLoad()
//
//
$(".button").on("click", function() {
    console.log(this.value);
    scoreTally(parseInt(this.value), gameCounter);
    $(".counter").text(gameCounter)
    isWin();
    isLoss();
});