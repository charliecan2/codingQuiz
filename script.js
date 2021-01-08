var secondsLeft = $("#seconds-left")
var startQuiz = $("#start-quiz");
var question = $("#question");
var responses = $("#responses");

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
        responses: [], 
            answer: "Quotes" },
    { question: "A very useful tool used during development and debugging for printing content to the debugger is ____.", 
        responses: ["Console.log", "For loops", "Javascript", "Terminal/Bash"], 
            answer: "Console.log" }
];

