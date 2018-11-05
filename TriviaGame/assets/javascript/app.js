$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};
	var correct = 0;
	var wrong = 0;
	var q1 = {
		question : "What does the Pokémon ability Levitate do?",
		possibleAnswers : ["A. It makes the Pokémon with Levitate faster due to flying capabilities.",
					"B. It helps you avoid wild Pokémon because you can float over them.",
					"C. A Pokémon with Levitate is not affected by ground-type moves regardless of the Pokémon with the ability.",
					"D. Levitate makes the moves Fly and Bounce stronger due to the ability to go to higher altitudes."],
		flags : [false, false, true, false],
		answer : "C. A Pokémon with Levitate is not affected by ground-type moves regardless of the Pokémon with the ability."
	};

	var q2 = {
		question: "Given that a Diglett and a Raichu have the exact same stats and ability (not going to happen), who will do more damage to identical enemy Pokémon when using Dig?",
		possibleAnswers: ["A. Raichu",
					"B. Diglett",
					"C. Both of them will do the same amount of damage.",
					"D. Raichu can't learn dig."],
		flags : [false, true, false, false],
		answer : "B. Diglett"
	};

	var q3 = {
		question : "What does a Pokémon's nature do?",
		possibleAnswers : ["A. The nature of a Pokémon increases one stat by 10% and decreases another by 10%.",
					"B. It will affect the behaviour of the Pokémon in the game.",
					"C. It will have an effect on the Pokémon's happiness.",
					"D. Nothing. It is just a cool thing to have."],
		flags : [true, false, false, false],
		answer : "A. The nature of a Pokémon increases one stat by 10% and decreases another by 10%."
	};

	var q4 = {
		question : "The Pokémon Missingno. can be found in every Pokémon game through some sort of glitch. Missingno. is most infamous in Pokémon Red, often called, 'the glitch Pokémon who will completely mess up your game.' Which one of these Missingno. myths is untrue?",
		possibleAnswers : ["A. Missingno. can only be found by glitch or cheat.",
					"B. Missingno. can look like a ghost, a strange Kabutops, or a ghost (In Pokémon R/B)",
					"C. Missingno. will glitch up your save data and possibly the whole cartridge when caught.",
					"D. Missingno. is not the only glitch Pokémon."],
		flags : [false, false, true, false],
		answer : "C. Missingno. will glitch up your save data and possibly the whole cartridge when caught."
	};

	var q5 = {
		question : "Wooper is introduced in which Pokémon generation?",
		possibleAnswers : ["A. 1st",
					"B. 2nd",
					"C. 3rd",
					"D. 4th"],
		flags : [false, true, false, false],
		answer : "B. 2nd"
	};

	var q6 = {
		question : "Which two Pokémon are the first that you see in Red and Blue, if you don't press the A button before the cutscene ends?",
		possibleAnswers : ["A. Gengar, Bulbasaur",
					"B. Charmander, Squirtle",
					"C. Treey, Pigges",
					"D. Gengar, Nidorina"],
		flags : [false, false, false, true],
		answer : "D. Gengar, Nidorina"
	};

	var q7 = {
		question : "What was the first Pokémon to appear in the animated series?",
		possibleAnswers : ["A. Nidorino",
					"B. Pikachu",
					"C. Gengar",
					"D. Onix"],
		flags : [false, false, true, false],
		answer : "C. Gengar"
	};

	var q8 = {
		question : "Out of the 26 letters in the English alphabet, the most Pokémon begin with which letter?",
		possibleAnswers : ["A. M",
					"B. S",
					"C. C",
					"D. P"],
		flags : [false, true, false, false],
		answer : "B. S"
	};

	var q9 = {
		question : "Gyarados was modeled after what legendary sea monster?",
		possibleAnswers : ["A. Moby Dick",
					"B. Nessie",
					"C. Godzilla",
					"D. Kraken"],
		flags : [false, false, false, true],
		answer : "D. Kraken"
	};

	var q10 = {
		question : "Which Pokémon originally had a six-pointed star on its forehead?",
		possibleAnswers : ["A. Gengar",
					"B. Alakazam",
					"C. Kadabra",
					"D. Abra"],
		flags : [false, true, false, false],
		answer : "B. Alakazam"
	}

	var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

	function loadQuestion(questionSelection) {
		console.log(questionSelection);
		countdownTimer.reset();
	$(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
	$("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
	$("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
	$("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
	$("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
	}

	function setup() {
		index = 0;
		$('.question').append('<button id="startButton">Start</button>');
		$('#startButton').on('click', function() {
			$(this).hide();
			countdownTimer.start();
			loadQuestion(index);
		});
	}		

	function getAnswer() {


		$('.answerchoice').on('click', function() {
		console.log('alert', index);
			index++;
			console.log('click', index);
			$(".question").text('');
			$("#buttonA").text('');
			$("#buttonB").text('');
			$("#buttonC").text('');
			$("#buttonD").text('');
			loadQuestion();
		})
	}

	function answerCorrect() {
		correct++;
		alert("Correct!");
		console.log("correct");
	}

	function answerWrong() {
		wrong++;
		alert("Incorrect!");
		console.log("wrong");
	}

	function showScore() {
		$('.question').empty();
		$('.question').append("<h2><p>" + correct + " correct</p></h2>");
		$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
		countdownTimer.stop();
		$('.timer').empty();

	}

	setup();
	$('.answerchoice').on('click', function() {
	console.log($(this));
	if(this.id == 'buttonA') {
		var answerChosen = 'A';
	} else if(this.id == 'buttonB') {
		answerChosen = 'B';
	} else if (this.id == 'buttonC') {
		answerChosen = 'C';
	} else if (this.id == 'buttonD') {
		answerChosen = 'D';
	} 
	if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
		answerCorrect();
	} else if (answerChosen == 'A') {
		answerWrong();
	}
	if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
		answerCorrect();
	} else if (answerChosen == 'B') {
		answerWrong();
	}
	if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
		answerCorrect();
	} else if (answerChosen == 'C') {
		answerWrong();
	}
	if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
		answerCorrect();
	} else if (answerChosen == 'D') {
		answerWrong();
	}

	$(".question").text('');
	$("#buttonA").text('');
	$("#buttonB").text('');
	$("#buttonC").text('');
	$("#buttonD").text('');
	index++;
	if (index < questionArray.length) {
		loadQuestion(index);
	} else {
		$(".answerchoice").hide();
		showScore();
	}
	});

});