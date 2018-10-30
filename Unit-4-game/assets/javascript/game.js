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
// This fuction sets the random number values for the four crystals, and the random number that is displayed
// for the play to match, and resets the game counter.
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
// This will check the game counter against the random number the player is to match to determine a win.
// If it is a win then the win is writen to the screen and the gameLoad function is ran.
function isWin() {
    if (gameCounter === targetRandomNumber){
        wins++;
        $(".show-wins").text(wins);
        gameLoad();
    }
};
//
// This will check the game counter against the random number the player is to match to determine a loss.
// If it is a loss then the loss is writen to the screen and the gameLoad function is ran.
function isLoss() {
    if (gameCounter > targetRandomNumber) {
        losses++;
        $(".show-losses").text(losses);
        gameLoad();
    }
};
//
// This function takes the value of the crystal that has been clicked and adds it to the game counter.
function scoreTally(crystalValue) {
    gameCounter += crystalValue;
    // if (gameCounter === targetRandomNumber) {
    // }
};
//
// This function clears the game counter and sets it back to zero and writes that to the screen.
function resetTally() {
    $(".counter").empty();
    gameCounter = 0;
    $(".counter").text(gameCounter)
};

//
//
gameLoad()
//
// On click event that listens for the players click and then runs the scoreTally, isWIn, isLoss functions.
$(".button").on("click", function() {
    //console.log(this.value);
    scoreTally(parseInt(this.value), gameCounter);
    $(".counter").text(gameCounter)
    isWin();
    isLoss();
});