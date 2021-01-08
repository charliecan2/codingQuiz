var secondsLeft = $("#seconds-left")
var startQuiz = $("#start-quiz");
var questionPlace = $("#question-place");
var responsesPlace = $("#responses-place");
var p = $("p");

var questionsAndAnswers =
    [{
        question: "Commonly used data types do NOT include____.",
        responses: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within____",
        responses: ["Square Brackets", "Parentheses", "Curly Braces", "Quotes"],
        answer: "Parentheses"
    },
    {
        question: "Arrays in Javascript can be used to store____",
        responses: ["Booleans", "Numbers and strings", "Other Arrays", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables",
        responses: ["Parentheses", "Curly Braces", "Quotes", "Square Brackets"],
        answer: "Quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is ____.",
        responses: ["Console.log", "For loops", "Javascript", "Terminal/Bash"],
        answer: "Console.log"
    }
    ];

var totalSeconds = 15 * questionsAndAnswers.length;
var secondsDeducted = 10;


function generateQNA() {
    p.text("");

    for (let i = 0; i < questionsAndAnswers.length; i++) {
        let userQuestion = questionsAndAnswers[i].question;
        questionPlace.text(userQuestion);
        responsesPlace.empty();

        for (r = 0; r < 4; r++) {
            var userResponses = questionsAndAnswers[i].responses[r];
            var li = $("<li></li>");
            var button = $("<button></button>")
            responsesPlace.append(li);
            li.append(button);
            button.text(userResponses);
            button.click(function () {
                // Revise the contents of this function. Why isn't it working?
                if ($(this).text() == questionsAndAnswers[i].answer) {
                    alert("You're correct!");
                }
                else {
                    alert("Sorry, wrong answer..");
                }
            });

        }
    }
}

function callbackQNA (){
    return function (){
        generateQNA();
    }
}

startQuiz.on("click", function () {

    startQuiz.remove();

    interval = setInterval(function () {
        totalSeconds--;
        secondsLeft.text(totalSeconds);

        if (totalSeconds == 0) {
            clearInterval(interval);
            p.css({ "font-size": "24px" }, { "font-weight": "bolder" });
            p.text("Time's up!");
        }
    }, 1000);

    generateQNA();
});