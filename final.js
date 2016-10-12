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

//event button to enter the players name
var playerName;
var button = document.getElementById("name");
var enterName = function () {
    playerName =  prompt ("Welcome to the house. Please enter your name.");
    console.log(playerName); 
}
button.addEventListener("click",enterName);

//event button to start the game
var startButton = document.getElementById("startGame");
var startGameHandler = function () {
    if (playerName == undefined) {
        alert("You need to have a name to continue.");
        playerName;
    } else {
       var weapon = prompt("Hello " + playerName + " please choose a weapon. Axe, Sacraficial Dagger, Spellbook, Revolver.");
    }
    //the weapon you pick changed the players stats a bit.
   function weaponStats() {
       switch (weapon) {
        case "axe":
            player.strength += 2;
            alert("You have chosen the axe. Your strength has increased by 2.");
            console.log("strength is " + player.strength);
            break;
        case "sacraficial dagger":
            player.strength += 3;
            player.sanity -= 3;
            alert("You have chosen the sacraficial dagger. Your strength has increased by 3, but your sanity has decreased by 3.");
            console.log("strength is " + player.strength);
            console.log("sanity is " + player.sanity);
            break;
        case "spellbook":
            player.knowledge += 4;
            alert("You have chosen the spellbook. Your knowledge has increased by 4.");
            console.log("knowledge is " + player.knowledge);
            break;
        case "revolver":
            player.speed += 2;
            alert("You have chosen the revolver. Your speed has increased by 2.");
            console.log("speed is "+ player.speed);
            break;
        default:
            alert("You must choose a weapon to survive.");
            weapon;
            break;
        }
    }
    weaponStats();
//now the adventure really starts with some exposition first.
    alert("You awake in a dark house. You don't know where you are or how you got there. You notice the floor and walls are covered in dirt and blood.");
    alert("You find a " + weapon + " sitting next to you and pick it up. It should be helpful. You need to find a way out so you look for a door and proceed through it.");
//an enemy appears as the player passes through the door.
        





}
    

startButton.addEventListener("click", startGameHandler);

