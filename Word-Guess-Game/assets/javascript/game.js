var keyUp;
var keysArray = [];
var lettersGuessed = "";
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
var guessesDisplayed = document.getElementById("remaining-guesses").textContent = remainingGuesses;
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
	mysteryLettersArray.push("_");
	mysteryLetters = mysteryLettersArray.join(" ")
}
document.getElementById("random-pokemon").textContent = mysteryLetters.toUpperCase();
console.log(mysteryLetters)
console.log(randomPokemon);

document.onkeyup = function(q) {

	//Take in the keyCode value for the letter pressed and put it in the keyUp variable.
	keyUp = q.keyCode;
	//Convert every keycode to its corresponding letter in the alphabet and assigns it to currentLetter.
    keyCodeToChar();
    

    
}

//If keyUp is equal to the value in the keysArray, then assign currentLetter to the one letter strings (alphabet).
function keyCodeToChar(){
	if (keyUp == keysArray[0]){
		currentLetter = "a";
	}
	else if (keyUp == keysArray[1]){
		currentLetter = "b";
	}
	else if (keyUp == keysArray[2]){
		currentLetter = "c";
	}
	else if (keyUp == keysArray[3]){
		currentLetter = "d";
	}
	else if (keyUp == keysArray[4]){
		currentLetter = "e";
	}
	else if (keyUp == keysArray[5]){
		currentLetter = "f";
	}
	else if (keyUp == keysArray[6]){
		currentLetter = "g";
	}
	else if (keyUp == keysArray[7]){
		currentLetter = "h";
	}
	else if (keyUp == keysArray[8]){
		currentLetter = "i";
	}
	else if (keyUp == keysArray[9]){
		currentLetter = "j";
	}
	else if (keyUp == keysArray[10]){
		currentLetter = "k";
	}
	else if (keyUp == keysArray[11]){
		currentLetter = "l";
	}
	else if (keyUp == keysArray[12]){
		currentLetter = "m";
	}
	else if (keyUp == keysArray[13]){
		currentLetter = "n";
	}
	else if (keyUp == keysArray[14]){
		currentLetter = "o";
	}
	else if (keyUp == keysArray[15]){
		currentLetter = "p";
	}
	else if (keyUp == keysArray[16]){
		currentLetter = "q";
	}
	else if (keyUp == keysArray[17]){
		currentLetter = "r";
	}
	else if (keyUp == keysArray[18]){
		currentLetter = "s";
	}
	else if (keyUp == keysArray[19]){
		currentLetter = "t";
	}
	else if (keyUp == keysArray[20]){
		currentLetter = "u";
	}
	else if (keyUp == keysArray[21]){
		currentLetter = "v";
	}
	else if (keyUp == keysArray[22]){
		currentLetter = "w";
	}
	else if (keyUp == keysArray[23]){
		currentLetter = "x";
	}
	else if (keyUp == keysArray[24]){
		currentLetter = "y";
	}
	else if (keyUp == keysArray[25]){
		currentLetter = "z";
	}
	else if (keyUp == 32){
		currentLetter = "space";
	}
    
	console.log(currentLetter);
	
	
	if (pokemonLettersArray.indexOf(currentLetter) === -1) {
		if (guessedLetters.indexOf(currentLetter) !== -1) {
			return;
		}
		remainingGuesses--;
		guessesDisplayed = document.getElementById("remaining-guesses").textContent = remainingGuesses;
		console.log(guessesDisplayed);
		guessedLetters.push(currentLetter);
		lettersGuessed = guessedLetters.join(" ")
		document.getElementById("guessed-letters").textContent = lettersGuessed.toUpperCase();
		console.log(guessedLetters);
	}
	else {
		if (guessedLetters.indexOf(currentLetter) !== -1) {
			return;
		}
		for (j = 0; j < pokemonLettersArray.length; j++) {
			if (pokemonLettersArray[j] === currentLetter) {
				mysteryLettersArray[j] = currentLetter;
				mysteryLetters = mysteryLettersArray.join(" ")
				document.getElementById("random-pokemon").textContent = mysteryLetters.toUpperCase();
			}
		}
		guessedLetters.push(currentLetter);
		lettersGuessed = guessedLetters.join(" ")
		document.getElementById("guessed-letters").textContent = lettersGuessed.toUpperCase();	
	}
	console.log(mysteryLettersArray);
}
