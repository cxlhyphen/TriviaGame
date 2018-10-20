$("#start").on("click", function () {
    $("#start").remove();
    game.loadQ();
});

$(document).on("click", '.buttonA', function(event) {
    game.clicked(event);
})

var questions = [
    {
        question: "Which country consumes the most coffee per capita?",
        answers: ["Finland", "Belgium", "Italy", "United States"],
        correctAnswer: "Finland",
        image: "A"
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
            alert("TIME UP");
            game.timeUp();
        }
    },

    loadQ: function() {
        timer = setInterval(game.countdown, 1000);
        $("#display").html("<h2>" + questions[game.currQuestion].question + "</h2>");
        for (var i = 0; i < questions[game.currQuestion].answers.length; i++) {
            $("#display").append('<button class="buttonA" id="button-' + i + '" data-name="' + questions[game.currQuestion].answers[i] + '">' + questions[game.currQuestion].answers[i] + '</button>');
        }
    },

    nextQ: function() {

    },

    timeUp: function() {

    },

    results: function() {

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
        console.log("correct!");
        clearInterval(timer);
        game.correct++;
        
    },

    incorrectA: function() {
        console.log("incorrect!");
        clearInterval(timer);
        game.incorrect++;
    },

    reset: function() {

    }

}


//Main Process