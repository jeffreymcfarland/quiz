
// grab each button by class and set equal to a variable.
var btnStart = document.querySelector(".btnStart");
var question = document.querySelector(".question");
var btn1 = document.querySelector(".option1");
var btn2 = document.querySelector(".option2");
var btn3 = document.querySelector(".option3");
var btn4 = document.querySelector(".option4");
var timer = document.querySelector("#time");
var options = document.querySelector(".options");
var qBox = document.querySelector(".questionBox");

// ================================================================

var score = 0;

var time = 60;

// ================================================================

qBox.style.visibility = "hidden";

// ================================================================

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

btnStart.addEventListener("click", function() {

    qBox.style.visibility = "visible";

    btnStart.style.visibility = "hidden";
    
    question.innerText = q1.question;
    btn1.innerText = q1.answer1;
    btn2.innerText = q1.answer2;
    btn3.innerText = q1.answer3;
    btn4.innerText = q1.answer4;

    btn1.addEventListener("click", question2);
    btn2.addEventListener("click", question2);
    btn3.addEventListener("click", question2);
    btn4.addEventListener("click", question2);

    btn1.addEventListener("click", findIndex1);
    btn2.addEventListener("click", findIndex1);
    btn3.addEventListener("click", findIndex1);
    btn4.addEventListener("click", findIndex1);

});

// ================================================================

function findIndex1() {
    
    var index = event.target.getAttribute("data-index");

    if(index == 1) {
        score++;
    } else {
        score--;
    };

    console.log(score);

};

// ================================================================

function question2() {

    question.innerText = q2.question;
    btn1.innerText = q2.answer1;
    btn2.innerText = q2.answer2;
    btn3.innerText = q2.answer3;
    btn4.innerText = q2.answer4;

    btn1.addEventListener("click", question3);
    btn2.addEventListener("click", question3);
    btn3.addEventListener("click", question3);
    btn4.addEventListener("click", question3);

    btn1.addEventListener("click", findIndex2);
    btn2.addEventListener("click", findIndex2);
    btn3.addEventListener("click", findIndex2);
    btn3.addEventListener("click", findIndex2);

};

// ================================================================

function findIndex2() {

    var index2 = event.target.getAttribute("data-index");

    if(index2 == 2) {
        score++;
    } else {
        score--; 
    };
};

// ================================================================

function question3() {

    question.innerText = q3.question;
    btn1.innerText = q3.answer1;
    btn2.innerText = q3.answer2;
    btn3.innerText = q3.answer3;
    btn4.innerText = q3.answer4;

};

// ================================================================

// function scorePlus() {
//     score++;
//     console.log(score);
// };

// function scoreMinus() {
//     score--;
//     console.log(score);
// };



// ================================================================




