var keyUp;
var keysArray = [];
var lettersGuessed;
var displayedGuesses = [];
var lettersDisplayed = [];
var savedLetters = [];
var guessedLetters = [];
//Array of words to be chosen at random
var pokemonArray = ["larvitar","unown","togepi","articuno","dratini","rayquaza","sylveon","raikou","giratina","reshiram"];
//var pokemonLetters = "";
var pokemonLettersArray = [];
var mysteryLetters = "";
var mysteryLettersArray = [];
var remainingGuesses = 20;
var playerWins = 0;
var playerLosses = 0;
var match;
var duplicate;
var currentLetter = "";

// alphabet array
//var alphaArray = [];
//const alpha = "abcdefghijklmnopqrstuvwxyz";
//alphaArray = alpha.split("");
for (var i = 65; i < 91; i++){
	keysArray.push(i);
}
// This is where a random word is chosen 
var randomPokemon = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];
// Now the randomly chosen word is split into individual characters and also places them into a new array
var pokemonLettersArray = randomPokemon.split("");
// This loop uses the split characters and changes them into an underscore, and then writes them to the html
for (i = 0; i < pokemonLettersArray.length; i++) {
    mysteryLetters += " _ ";
}
document.getElementById("random-pokemon").textContent = mysteryLetters.toUpperCase();
console.log(mysteryLetters)


document.onkeyup = function(q) {

	//Take in the keyCode value for the letter pressed and put it in the keyUp variable.
	keyUp = q.keyCode;
	//Convert every keycode to its corresponding letter in the alphabet and assigns it to currentLetter.
    keyCodeToChar();
    

    
}

//If keyUp is equal to the value in the keysArray, then assign currentLetter to the one letter strings (alphabet).
function keyCodeToChar(){
	if (keyUp == keysArray[0]){
		currentLetter = "A";
	}
	else if (keyUp == keysArray[1]){
		currentLetter = "B";
	}
	else if (keyUp == keysArray[2]){
		currentLetter = "C";
	}
	else if (keyUp == keysArray[3]){
		currentLetter = "D";
	}
	else if (keyUp == keysArray[4]){
		currentLetter = "E";
	}
	else if (keyUp == keysArray[5]){
		currentLetter = "F";
	}
	else if (keyUp == keysArray[6]){
		currentLetter = "G";
	}
	else if (keyUp == keysArray[7]){
		currentLetter = "H";
	}
	else if (keyUp == keysArray[8]){
		currentLetter = "I";
	}
	else if (keyUp == keysArray[9]){
		currentLetter = "J";
	}
	else if (keyUp == keysArray[10]){
		currentLetter = "K";
	}
	else if (keyUp == keysArray[11]){
		currentLetter = "L";
	}
	else if (keyUp == keysArray[12]){
		currentLetter = "M";
	}
	else if (keyUp == keysArray[13]){
		currentLetter = "N";
	}
	else if (keyUp == keysArray[14]){
		currentLetter = "O";
	}
	else if (keyUp == keysArray[15]){
		currentLetter = "P";
	}
	else if (keyUp == keysArray[16]){
		currentLetter = "Q";
	}
	else if (keyUp == keysArray[17]){
		currentLetter = "R";
	}
	else if (keyUp == keysArray[18]){
		currentLetter = "S";
	}
	else if (keyUp == keysArray[19]){
		currentLetter = "T";
	}
	else if (keyUp == keysArray[20]){
		currentLetter = "U";
	}
	else if (keyUp == keysArray[21]){
		currentLetter = "V";
	}
	else if (keyUp == keysArray[22]){
		currentLetter = "W";
	}
	else if (keyUp == keysArray[23]){
		currentLetter = "X";
	}
	else if (keyUp == keysArray[24]){
		currentLetter = "Y";
	}
	else if (keyUp == keysArray[25]){
		currentLetter = "Z";
	}
	else if (keyUp == 32){
		currentLetter = "space";
    }
    document.getElementById("guessed-letters").textContent = currentLetter
    console.log(currentLetter)
}

function addGuessedLetters() {
	if (keyUp === currentLetter)
	currentLetter = [guessedLetters]
	console.log(guessedLetters)
}