//variable to determine if the player wins or looses.
var outcome;

//object for the player character
var player = {
    strength: 7,
    speed: 5,
    sanity: 6,
    knowledge: 5,
}

//object for the enemies
var enemy = function () {
    var strength;
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
        
var fleshBeast = new enemy();
var zombie = new enemy();
var ghost = new enemy();
//established the current monsters stats
function monsterAppears(currentEnemy, updateStrength, updateSpeed, updateSanity, updateKnowledge){
    alert("A " + currentEnemy + "blocks your path! You must fight to get past.");
}
//tests the players stats against the monster
function fight(){
    if (player.strength >= enemy.strength){
        alert("You use your " + weapon + "against the monster. It falls at your feet and you move on.");
} else {
        alert("you fight will all your might but to no avail. The monster has bested you.");
        outcome = "lose";
    }
}

//fight the monsters
monsterAppears(fleshBeast, 7, 4, 2, 2);
fight();
monsterAppears(zombie, 4, 3, 1, 1);
fight();
monsterAppears(ghost, 6, 8, 8, 7);
fight();

//test if the player has won or lost
    if (outcome == "win"){
    alert("After a long hard night, you finally make it out of the house. You walk away tired and bloody hoping you never have to do that again.");
} else if (outcome == "lose"){
    alert("All your struggle has been for naught. You lie on the ground blood oozing from your wound thinking of the life you never had. You have died.");
}

}
//the game will start when you press the button
startButton.addEventListener("click", startGameHandler);

