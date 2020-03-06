
var highscoreList = document.querySelector(".score-list");

function retrieveHighscore() {

    var storedScores = JSON.parse(localStorage.getItem("scoreList"));

    if (storedScores !== null) {
        scoreList = storedScores;
      };

    makeList();

};

retrieveHighscore();

function makeList() {

    for (var i = 0; i < scoreList.length; i++) {

        var num = scoreList[i];
    
        var li = document.createElement("li");
        li.textContent = num;
    
        highscoreList.appendChild(li);
        };
};

var clear = document.querySelector(".clearList");

clear.addEventListener("click", function() {

   clearItems();

});

function clearItems() {

    localStorage.removeItem("scoreList", JSON.stringify(scoreList));

    highscoreList.textContent = "";
};