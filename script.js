
// grab each button by class and set equal to a variable.
var btnStart = document.querySelector(".btnStart");
var question = document.querySelector(".question");
var btn1 = document.querySelector(".option1");
var btn2 = document.querySelector(".option2");
var btn3 = document.querySelector(".option3");
var btn4 = document.querySelector(".option4");
var timer = document.querySelector("#time");
var qBox = document.querySelector(".questionBox");
var scoreBox = document.querySelector("#final-score");
var options = document.querySelector(".options");

// ================================================================
// variables for keeping score and time.
var score = [];
var time = 31;

// ================================================================
//timer function to start 30 second timer when start button is clicked. Interval function will clear once number reaches zero.
function startTimer() {
var timeInterval = setInterval(function() {

    time--;
    timer.innerText = time;

    if(time == 0){
        clearInterval(timeInterval);
        options.style.visibility = "hidden";
        question.innerText = "Click View Highscores to see leaderboard!";
    };
}, 1000);
};

// ================================================================
// Object variables for quiz questions. Each contain question and four answer options.
var q1 = {
    question: "In what city was Jeffrey born?",
    answer1: "Tallahassee, FL",
    answer2: "Nashville, TN",
    answer3: "Wayne, PA",
    answer4: "Hattisburg, MS"
};

var q2 = {
    question: "What is my current job?",
    answer1: "Barista",
    answer2: "Kitchen Manager",
    answer3: "Musician",
    answer4: "Math Teacher"
};

var q3 = {
    question: "What sport does Jeffrey enjoy playing the most?",
    answer1: "Football",
    answer2: "Hockey",
    answer3: "Basketball",
    answer4: "Baseball"
};

// ================================================================
// Add an click function to the start button. This function will start timer, make the quiz box visible, put the q1 question and options on the divs, and hide the start button.
btnStart.addEventListener("click", function question1() {

    startTimer();

    qBox.style.visibility = "visible";

    btnStart.style.visibility = "hidden";
    
    question.innerText = q1.question;
    btn1.innerText = q1.answer1;
    btn2.innerText = q1.answer2;
    btn3.innerText = q1.answer3;
    btn4.innerText = q1.answer4;

// Click functions for each button, each one starts the findIndex1 function.
    btn1.addEventListener("click", findIndex1);
    btn2.addEventListener("click", findIndex1);
    btn3.addEventListener("click", findIndex1);
    btn4.addEventListener("click", findIndex1);

});

// ================================================================
// Function for determining if user chose correct answer for first question. It will push score1 into the score array, and put score on the page. Answer also determines if time should be added or subtracted from timer. 
function findIndex1() {
    
    var index = event.target.textContent;

    if(index === "Tallahassee, FL") {
        score1 = 10;
        time = time + 10;
    } else {
        score1 = 0;
        time = time - 10;
    };

    question2();

    score.push(score1);

    var finalScore = score.reduce( function(total, amount){
        return total + amount
      });
    
    scoreBox.innerText = finalScore;
    
};

// ================================================================
// Function for second question, which puts second question and second options on the page.
function question2() {

    question.innerText = q2.question;
    btn1.innerText = q2.answer1;
    btn2.innerText = q2.answer2;
    btn3.innerText = q2.answer3;
    btn4.innerText = q2.answer4;

// Adding click function to buttons to start findIndex2 function.
    btn1.addEventListener("click", findIndex2);
    btn2.addEventListener("click", findIndex2);
    btn3.addEventListener("click", findIndex2);
    btn4.addEventListener("click", findIndex2);

};

// ================================================================
// Function for determining if user chose correctly for question two. It will push score2 into the score array, and put score on the page while still pushing score1 as well (which will be 0 no matter the answer chosen).
function findIndex2() {

    var index2 = event.target.textContent;

    if(index2 === "Kitchen Manager") {
        score2 = 10;
        time = time + 20;
    } else {
        score2 = 0;
    };

    question3();

    score.push(score2);

    var finalScore = score.reduce( function(total, amount){
        return total + amount
      });
    
    scoreBox.innerText = finalScore;
    
};

// ================================================================
// Function puts question 3 and options for third question on the page. 
function question3() {

    question.innerText = q3.question;
    btn1.innerText = q3.answer1;
    btn2.innerText = q3.answer2;
    btn3.innerText = q3.answer3;
    btn4.innerText = q3.answer4;

// Add click function to each button to start findIndex3 function.
    btn1.addEventListener("click", findIndex3);
    btn2.addEventListener("click", findIndex3);
    btn3.addEventListener("click", findIndex3);
    btn4.addEventListener("click", findIndex3);

};

// ================================================================
// Function determines if user chose correctly on third question, pushes score3 into the score array, and put score on the page while still pushing score1 and score2 as well (which will both be 0 no matter the answer chosen).
function findIndex3() {

    var index3 = event.target.textContent;

    if(index3 === "Basketball") {
        score3 = 10;
        time = time + 20;
    } else {
        score3 = 0;
    };

    score.push(score3);

    var finalScore = score.reduce( function(total, amount){
        return total + amount
      });
    
    scoreBox.innerText = finalScore;

// Make the questions hidden and put message on the box to tell user where to view high score.
    options.style.visibility = "hidden";

    question.innerText = "Click View Highscores to see leaderboard!"

    timer.style.visibility = "hidden";

};







