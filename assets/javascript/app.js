$("#start").on("click", function () {
    $("#start").remove();
    game.loadQ();
});

$(document).on("click", ".buttonA", function(event) {
    game.clicked(event);
});

$(document).on("click", "#reset", function() {
    game.reset();
})

var questions = [
    {
        question: "Which country consumes the most coffee per capita?",
        answers: ["Finland", "Belgium", "Italy", "United States"],
        correctAnswer: "Finland",
        image: "../images.joakim-hokasalo-finflag.jpg"
    },
    {
        question: "How much coffee does the average American coffee drinker consume in a day? (1 cup = 8 oz.)",
        answers: ["1.5 cups", "2 cups", "3.1 cups", "2.7 cups"],
        correctAnswer: "3.1 cups",
        image: "A"
    },
    {
        question: "Which country grows and exports the most coffee?",
        answers: ["India", "Colombia", "Brazil", "Indonesia"],
        correctAnswer: "Brazil",
        image: "A"
    },
    {
        question: "What does espresso literally mean in Italian?",
        answers: ["Speed it up", "To go", "Forced out", "Intense"],
        correctAnswer: "Forced out",
        image: "A"
    },
    {
        question: "Coffee beans grow on a ______.",
        answers: ["vine", "bush", "tree", "roots"],
        correctAnswer: "bush",
        image: "A"
    }
];

var game = {
    questions: questions,
    currQuestion: 0,
    counter: 20,
    correct: 0,
    incorrect: 0,
    unanswered: 0,

    countdown: function() {
        game.counter--;
        $("#counter").text(game.counter);
        if (game.counter == 0) {
            game.timeUp();
        }
    },

    loadQ: function() {
        timer = setInterval(game.countdown, 1000);
        $("#display").html('<p>Time left: <span id="counter">20</span> seconds</p>')
        $("#display").append("<h2>" + questions[game.currQuestion].question + "</h2>");
        for (var i = 0; i < questions[game.currQuestion].answers.length; i++) {
            $("#display").append('<button class="buttonA" id="button-' + i + '" data-name="' + questions[game.currQuestion].answers[i] + '">' + questions[game.currQuestion].answers[i] + '</button>');
        }
    },

    nextQ: function() {
        game.counter = 20;
        $("#counter").text(game.counter);
        game.currQuestion++;
        game.loadQ();
    },

    timeUp: function() {
        clearInterval(timer);
        game.unanswered++;
        $("#display").html("<h2>Time&rsquo;s Up!</h2>");
        $("#display").append("<p>The correct answer is: " + questions[game.currQuestion].correctAnswer + "</p>");

        if(game.currQuestion == questions.length - 1) {
            setTimeout(game.results, 2000);
        } else {
            setTimeout(game.nextQ, 2000)
        }
    },

    results: function() {
        clearInterval(timer);
        $("#display").html("<h2>You&rsquo;ve completed the game, here are your results:</h2>");
        $("#display").append("<p>Correct: " + game.correct + "</p>");
        $("#display").append("<p>Incorrect: " + game.incorrect + "</p>");
        $("#display").append("<p>Unanswered: " + game.unanswered + "</p>");
        $("#display").append('<button id="reset">Play again</button>');
    },

    clicked: function(event) {
        clearInterval(timer);
        if($(event.target).data("name") == questions[game.currQuestion].correctAnswer) {
            game.correctA();
        } else {
            game.incorrectA();
        }
    },

    correctA: function() {
        clearInterval(timer);
        game.correct++;
        $("#display").html("<h2>Correct!</h2>");
        $("#display").append(questions[game.currQuestion].image);

        if(game.currQuestion == questions.length - 1) {
            setTimeout(game.results, 2000);
        } else {
            setTimeout(game.nextQ, 2000)
        }
        
    },

    incorrectA: function() {
        clearInterval(timer);
        game.incorrect++;
        $("#display").html("<h2>Incorrect</h2>");
        $("#display").append("<p>The correct answer is: " + questions[game.currQuestion].correctAnswer + "</p>");

        if(game.currQuestion == questions.length - 1) {
            setTimeout(game.results, 2000);
        } else {
            setTimeout(game.nextQ, 2000)
        }
    },

    reset: function() {
        game.currQuestion = 0;
        game.counter = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQ();
    }

}


//Main Process