//object for the player character
var player = {
    strength: 7,
    speed: 5,
    sanity: 6,
    knowledge: 5,
}

//object for the enemies
var enemy = function () {
    var strenth;
    var speed;
    var sanity;
    var knowledge;
}

var playerName;
var button = document.getElementById("name");
var enterName = function () {
    playerName =  prompt ("Welcome to the house. Please enter your name.");
    console.log(playerName);
    
}
button.addEventListener("click",enterName);


var startButton = document.getElementById("startGame");
var startGameHandler = function () {
    if (playerName == undefined) {
        alert("You need to have a name to continue.");
        playerName;
    } else {
        prompt("Hello " + playerName + " please choose a weapon. Axe, Sacraficial Dagger, Spear.");
    }
}