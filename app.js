"use strict"

//Title: JavaScript RPG
//Author: Richard Fleming
//Date: July 29, 2021


function runGame(){
    let userHealth = 200;
    let enemyHealth = 100;
    let userAttackPower = 20;
    let enemyAttackPower = 20;
    let userAttacks = ["punch", "kick", "chop"];
    let enemyAttacks = ["a bite", "spit acid"];
    let hercules = ["Hercules", userHealth, userAttackPower, userAttacks];
    let nemeanLion = ["Nemean Lion", enemyHealth, enemyAttackPower, enemyAttacks];
    initialDialogue(hercules, nemeanLion);
    secondDialogue(hercules, nemeanLion);
}

//Initiates Dialogue
function initialDialogue(hercules, nemeanLion){
    alert("You are Hercules, the greatest of the " +
    "Greek Heroes! You have been tasked by King Eurystheus " + 
    "to slay the vicious Nemean Lion, defeat the impossible " +
    "nine-headed Lernaean Hydra, and capture the guard dog " +
    "of the underworld—Cerberus.");

    let enemyAttack = lionAttack(hercules, nemeanLion);

    alert(`You walk into an open field and the nine-headed Lernean Hydra spots you and attacks you with ${enemyAttack}.`);

    selectHerculesAttack(hercules, nemeanLion);
}


//Second Iteration of dialogue
function secondDialogue(hercules, nemeanLion){
    let enemyAttack = lionAttack(hercules, nemeanLion);
    alert(`The lion has sustained damage from your attack and responds with ${enemyAttack}`);
    
    selectHerculesAttack(hercules, nemeanLion);
   
    if(hercules[1] > 0 && nemeanLion[1] > 0){
        secondDialogue(hercules, nemeanLion);
    }else{
        alert("Game Over");
        console.log("Game Over!");
    }
}


//Selects Hercules' attack
function selectHerculesAttack(player1, player2){
    let userAttack = prompt("Would you like to punch, kick, or chop the vicious Lion?").toLowerCase();
    
    if(userAttack === "punch" || userAttack === "kick" || userAttack === "chop"){
        
        player2[1] -= player1[2];
        
        if(player2[1] <= 0){
            console.log(`${player2[0]} has taken ${player2[2]} damage and now has ${player2[1]} health left.`);
            alert("You have slayed the seven headed lion!");
            console.log("You win!");
        }else{
        console.log(`${player2[0]} has taken ${player2[2]} damage and now has ${player2[1]} health left.`);
        }

    }else{selectHerculesAttack(player1, player2);}
}


//Randomly selects lion attack
function lionAttack(player1, player2){

    let attack = Math.floor(Math.random() * player2[3].length);
    
    player1[1] -= player2[2];
    
    if(player1[1] <= 0){
        console.log(`${player1[0]} has taken ${player1[2]} damage and now has ${player1[1]} health left.`);
        alert("The seven headed lion wins! You are dead");
        console.log("The Nemean Lion Wins!");
    }else{
    console.log(`${player1[0]} has taken ${player1[2]} damage and now has ${player1[1]} health left.`);
    return player2[3][attack];
    }

}


runGame();