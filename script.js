
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
var submitForm = document.querySelector(".submitForm");
var submitBtn = document.querySelector(".submit");
var nameInput = document.querySelector("#name");
var form = document.querySelector(".form");
var mark = document.querySelector(".insert");
var answerBox = document.querySelector(".answerBox");

// ================================================================
// variables for keeping score, time, and index answer.
var score = 0;
var time = 45;
var index = "";


// ================================================================
//timer function to start 45 second timer when start button is clicked. Interval function will clear once number reaches zero.
function startTimer() {
var timeInterval = setInterval(function() {

    time--;
    timer.innerText = time;

    if(time === 0){
        clearInterval(timeInterval);
        showSubmit();
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
    question: "What is Jeffrey's current job?",
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

var q4 = {
    question: "What is Jeffrey's favorite tv show?",
    answer1: "Mad Men",
    answer2: "New Girl",
    answer3: "Stranger Things",
    answer4: "Chopped"
};

var q5 = {
    question: "Which coffee shop does Jeffrey like the most?",
    answer1: "Frothy Monkey",
    answer2: "Dose",
    answer3: "8th and Roast",
    answer4: "Fido"
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
// Function determines if user chose correct answer for first question, and updates score and time based off correct or incorrect choice.
function findIndex1() {

    var index = event.target.textContent;

    if(index === "Tallahassee, FL") {
        score += 10;
        time += 10;
        mark.innerText = "Correct";
    } else {
        score -= 10;
        time -= 10;
        mark.innerText = "Wrong";
    };

// Calls question2 function.
    question2();

// Function to remove click events for finding index1.
    removeEvent1();
    
    scoreBox.innerText = score;

    answerBox.style.visibility = "visible";

    
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
// Function determines if user chose correctly for question two, and updates score and time based off correct or incorrect choice.
function findIndex2() {

    var index = event.target.textContent;

    if(index === "Kitchen Manager") {
        score += 10;
        time += 10;
        mark.innerText = "Correct";
    } else {
        score -= 10;
        time -= 10;
        mark.innerText = "Wrong";
    };

// Call for question3 function.
    question3();

// Function to remove click events for finding index2.
    removeEvent2();

    scoreBox.innerText = score;
    
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
// Function determines if user chose correctly on third question, and updates score and time based off correct or incorrect choice.
function findIndex3() {

    var index = event.target.textContent;

    if(index === "Basketball") {
        score += 10;
        time += 10;
        mark.innerText = "Correct";
    } else {
        score -= 10;
        time -= 10;
        mark.innerText = "Wrong";
    };
    
    scoreBox.innerText = score;

// Calls for question4 function.
    question4();

// Function to remove click events for finding index3.
    removeEvent3();

};

// ================================================================
// Function puts question 4 and options for fourth question on the page. 
function question4() {

    question.innerText = q4.question;
    btn1.innerText = q4.answer1;
    btn2.innerText = q4.answer2;
    btn3.innerText = q4.answer3;
    btn4.innerText = q4.answer4;

// Add click function to each button to start findIndex4 function.
    btn1.addEventListener("click", findIndex4);
    btn2.addEventListener("click", findIndex4);
    btn3.addEventListener("click", findIndex4);
    btn4.addEventListener("click", findIndex4);

};

// ================================================================
// Function determines if user chose correctly for fourth question, and adds to score and time based off correct or incorrect choice.
function findIndex4() {

    var index = event.target.textContent;

    if(index === "Mad Men") {
        score += 10;
        time += 10;
        mark.innerText = "Correct";
    } else {
        score -= 10;
        time -= 10;
        mark.innerText = "Wrong";
    };

// Calls for question5 function.
    question5();

// Function to remove click events for finding index4.
    removeEvent4();

    scoreBox.innerText = score;
    
};

// ================================================================
// Function puts question 5 and options for fifth question on the page. 
function question5() {

    question.innerText = q5.question;
    btn1.innerText = q5.answer1;
    btn2.innerText = q5.answer2;
    btn3.innerText = q5.answer3;
    btn4.innerText = q5.answer4;

// Add click function to each button to start findIndex5 function.
    btn1.addEventListener("click", findIndex5);
    btn2.addEventListener("click", findIndex5);
    btn3.addEventListener("click", findIndex5);
    btn4.addEventListener("click", findIndex5);

};

// ================================================================
// Function determines if user chose correctly for fifth question, and adds to score and time based off correct or incorrect choice.
function findIndex5() {

    var index = event.target.textContent;

    if(index === "Fido") {
        score += 10;
        time += 10;
        mark.innerText = "Correct";
    } else {
        score -= 10;
        time -= 10;
        mark.innerText = "Wrong";
    };

// Calls for showSubmit function.
    showSubmit();

    scoreBox.innerText = score;
    
};




// ================================================================
// These remove the event listeners for finding the previous correct answers so the score does not keep adding from past questions even though the same buttons are clicked.
function removeEvent1() {
    btn1.removeEventListener("click", findIndex1);
    btn2.removeEventListener("click", findIndex1);
    btn3.removeEventListener("click", findIndex1);
    btn4.removeEventListener("click", findIndex1);
};

function removeEvent2() {
    btn1.removeEventListener("click", findIndex2);
    btn2.removeEventListener("click", findIndex2);
    btn3.removeEventListener("click", findIndex2);
    btn4.removeEventListener("click", findIndex2);
};

function removeEvent3() {
    btn1.removeEventListener("click", findIndex3);
    btn2.removeEventListener("click", findIndex3);
    btn3.removeEventListener("click", findIndex3);
    btn4.removeEventListener("click", findIndex3);
};

function removeEvent4() {
    btn1.removeEventListener("click", findIndex4);
    btn2.removeEventListener("click", findIndex4);
    btn3.removeEventListener("click", findIndex4);
    btn4.removeEventListener("click", findIndex4);
};

// ================================================================
// Make the questions hidden and put message on the box to tell user to submit score.  
function showSubmit() {
    options.style.visibility = "hidden";
    options.innerHTML = submitForm;
    qBox.innerText = "Submit score below!";

    timer.style.visibility = "hidden";

    submitForm.style.visibility = "visible";
    };

// ================================================================
// Add event listener to submit button and push the user input value and score into an array.
var scoreList = [];

form.addEventListener("submit", function(){

    var nameVal = nameInput.value;

    if (nameVal === "") {
        return;
      };

    scoreList.push(nameVal + ": " + score);
    console.log(scoreList);

// Call for function to store the score.
    storeHighscore();
});
    
// ================================================================
// Store the high score array in the local storage.
function storeHighscore() {

    localStorage.setItem("scoreList", JSON.stringify(scoreList));
};

// Function for retrieving the locally stored array.
function retrieveHighscore() {

    var storedScores = JSON.parse(localStorage.getItem("scoreList"));

    if (storedScores !== null) {
        scoreList = storedScores;
      };

    makeList();

};

retrieveHighscore();








