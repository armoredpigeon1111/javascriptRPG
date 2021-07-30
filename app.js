"use strict"

//Title: JavaScript RPG
//Author: Richard Fleming
//Date: July 29, 2021


function runGame(){
    let userHealth = 100;
    let enemyHealth = 100;
    let userAttackPower = 20;
    let enemyAttackPower = 20;
    let userAttacks = ["punch", "kick", "chop"];
    let enemyAttacks = ["a bite", "spit acid", "stomp"];
    let hercules = ["Hercules", userHealth, userAttackPower, userAttacks];
    let nemeanLion = ["Nemean Lion", enemyHealth, enemyAttackPower, enemyAttacks];
    initialDialogue(hercules, nemeanLion);
    dialogue(hercules, nemeanLion);
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
    alert(`${hercules[0]} has taken damage and now has ${hercules[1]} health left.`)

    selectHerculesAttack(hercules, nemeanLion);
}


//Continuos Iteration of dialogue
function dialogue(hercules, nemeanLion){

    while(hercules[1] > 0 && nemeanLion[1] > 0){
        let enemyAttack = lionAttack(hercules, nemeanLion);
        alert(`The lion has sustained damage from your attack leaving it with ${nemeanLion[1]} health and responds with ${enemyAttack}`);
           
        if(hercules[1]>0){
        alert(`${hercules[0]} has taken damage and now has ${hercules[1]} health left.`)
        selectHerculesAttack(hercules, nemeanLion);
        
        }
    }
        if(hercules[1] > nemeanLion[1]){
            alert("You have slayed the seven headed lion and rescued Cerberus!");
            console.log("You win!");
        }else{
            alert("The seven headed lion wins! You are dead");
            console.log("The Nemean Lion Wins!");
        }
        alert("Game Over");
        console.log("Game Over!");
   
}




//Selects Hercules' attack
function selectHerculesAttack(player1, player2){
    
    let userAttack = prompt("Would you like to punch, kick, or chop the vicious Lion?").toLowerCase();
    let damage = 0;

    switch(userAttack){
        case "punch":
            damage = 15
            attack(player1, player2, damage);
            break;
        case "kick":
            damage = 25;
            attack(player1, player2, damage);
            break;
        case "chop":
            damage = 20;
            attack(player1, player2, damage);
            break;
        default:
            selectHerculesAttack(player1, player2);
    }
}




//Randomly selects lion attack
function lionAttack(player1, player2){

    let attackType = Math.floor(Math.random() * player2[3].length);
    let damage = 0;

    switch(attackType){
        case 0:
            damage = 20;
            attack( player2, player1, damage);
            return player2[3][0];
            break;
        case 1:
            damage = 25;
            attack( player2, player1, damage);
            return player2[3][1];
            break;
        case 2:
            damage = 15;
            attack( player2, player1, damage);
            return player2[3][2];
            break;
    }


    
}


function attack( attacker, attackee, damage){
    attackee[1] -= damage; //reduces health of attackee

    console.log(`${attackee[0]} has taken ${damage} damage and now has ${attackee[1]} health left.`);  
    
}

runGame();