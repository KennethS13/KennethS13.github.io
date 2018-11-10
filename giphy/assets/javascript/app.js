// An array of video games titles or characters.
var topics = ["zelda", "metroid", "mario bros", "street fighter", "sonic", "mortal kombat", "final fantasy", "warcraft", "pokemon", "fallout"];
// When page loads the following functions are ran
$(document).ready(function() {
    //Function for displaying topics data
    function createButtons() {
        // Delete the content inside the topics-buttons div prior to adding new games
        $(".topics-buttons").empty();
        // Loop through the array of games, then generate buttons for each game in the array. Adding a class of game and a data-attribute with a value of the game for each index.
        topics.forEach(function(game) {
            $(".topics-buttons").append($("<button>" + game + "</button>").addClass("game btn btn-success mr-1 mb-1").attr("data-game", game));
        });    
    }

        // This function handles events where the add-topics button is clicked
    $(".add-topics").on("click", function(event) {
        // event.preventDefault() prevents submit button from trying to send a form.
        // Using a submit button instead of a regular button allows the user to hit
        // "Enter" instead of clicking the button if desired
        event.preventDefault();

        // variable taht grabs the text the user types into the input field
        var submitGame = $(".topics-input").val().trim(); // .trim removes user inputted white spaces
        // Write code to add the new game into the topics array
        topics.push(submitGame);
        // The createButtons function is called, rendering the list of topics buttons
        createButtons();
        $(".topics-input").val("");
    });
    // Buttons are loaded to the page
    createButtons();

    // Event listener for all button elements
    $(document).on("click", ".game", function() {
        $(".topics-view").empty();
        var selectedGame = $(this).attr("data-game");
        console.log(selectedGame);
        // Constructing a URL to search Giphy
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        selectedGame + "&api_key=c8ozx4MJdgmYqYs57nTzGiTtIAeQTTAA";
        // Performing AJAX GET request
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        // After data comes back from the request
        .then(function(response) {
            // storing the data from the AJAX request in the results variable
            var results = response.data;
            // Looping through each result item
            for (var i = 0; i < 12; i++) {
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    // Creating and storing a div tag with some added bootstrap css
                    var gameDiv = $("<div>").addClass("col-sm-3");
                    var rating = results[i].rating;
                    // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text("Rating: " + rating);
                    // Creating and storing an image tag with a class of gif
                    var gameImage = $("<img class='gif'>");
                    // Setting the src attribute of the image to a property pulled off the result item
                    gameImage.attr("src", results[i].images.fixed_height_still.url);
                    gameImage.attr("data-still", results[i].images.fixed_height_still.url);
                    gameImage.attr("data-animate", results[i].images.fixed_height.url);
                    gameImage.attr("data-state", "still");
                    // Appending the paragraph and image tag to the gameDiv
                    gameDiv.append(p);
                    gameDiv.append(gameImage);
                    // Prependng the gameDiv to the HTML page in the ".topics-view" div
                    $(".topics-view").prepend(gameDiv);
                }
            };
            // Function to update the src attribute of the image to it's data- value
            function updateState(state, gif) {
                $(gif).attr("src", $(gif).attr("data-" + state));
                $(gif).attr("data-state", state);
            }
            // Event listener for all images to update their state fom still to animated
            $(".gif").on("click", function() {
                var state = $(this).attr("data-state");
                var dAnimate = $(this).attr("data-animate");
                // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                // Then, set the image's data-state to animate
                // Else set src to the data-still value
                if (state === "still") {
                    updateState('animate', this);
                } else {
                    updateState('still', this);
                }
            })
        });
    });
});