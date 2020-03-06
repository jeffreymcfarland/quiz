// Variable for the high score list.
var highscoreList = document.querySelector(".score-list");


// ================================================================
// Function for retrieving the locally stored array.
function retrieveHighscore() {

    var storedScores = JSON.parse(localStorage.getItem("scoreList"));

    if (storedScores !== null) {
        scoreList = storedScores;
      };

    makeList();

};

retrieveHighscore();

// ================================================================
// Put the high score locally stored list on the page.
function makeList() {

    for (var i = 0; i < scoreList.length; i++) {

        var num = scoreList[i];
    
        var li = document.createElement("li");
        li.textContent = num;
    
        highscoreList.appendChild(li);
        };
};


// ================================================================
// Button and function for clearing the list.
var clear = document.querySelector(".clearList");

clear.addEventListener("click", function() {

   clearItems();

});

function clearItems() {

    localStorage.removeItem("scoreList", JSON.stringify(scoreList));

    highscoreList.textContent = "";
};