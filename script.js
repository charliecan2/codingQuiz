var secondsLeft = $("#seconds-left")
var startQuiz = $("#start-quiz");
var questionPlace = $("#question-place");
var responsesPlace = $("#responses-place");
var p = $("p");

var questionsAndAnswers = 
[   { question: "Commonly used data types do NOT include____.", 
        responses: ["Strings", "Booleans", "Alerts", "Numbers"], 
            answer: "Alerts" },
    { question: "The condition in an if/else statement is enclosed within____", 
        responses: ["Square Brackets", "Parentheses", "Curly Braces", "Quotes"], 
            answer: "Parentheses" },
    { question: "Arrays in Javascript can be used to store____", 
        responses: ["Booleans", "Numbers and strings", "Other Arrays", "All of the above"], 
            answer: "All of the above" },
    { question: "String values must be enclosed within ____ when being assigned to variables",
        responses: ["Parentheses","Curly Braces","Quotes","Square Brackets"], 
            answer: "Quotes" },
    { question: "A very useful tool used during development and debugging for printing content to the debugger is ____.", 
        responses: ["Console.log", "For loops", "Javascript", "Terminal/Bash"], 
            answer: "Console.log" }
];

var totalSeconds = 15
var holdInterval = 0;
var secondsDeducted = 10;


function generateQNA(){
    p.text("");

    for (i = 0; i < questionsAndAnswers.length; i++){
        var userQuestion = questionsAndAnswers[i].question;
        questionPlace.text(userQuestion);
        responsesPlace.empty();
        for (r = 0; r < 4; r++){
            var userResponses = questionsAndAnswers[i].responses[r];
            var li = $("<li></li>");
            responsesPlace.append(li);
            li.text(userResponses);
        }  
    }
}

startQuiz.on("click", function(){
   
    if (holdInterval === 0){
        holdInterval = setInterval(function() {
            totalSeconds--;
            secondsLeft.text(totalSeconds);

            if (totalSeconds == 0) {
                clearInterval(holdInterval);
            }
        }, 1000);
    }
    
    generateQNA();
});