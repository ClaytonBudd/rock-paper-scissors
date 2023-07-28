
/**let legalMoves = ["rock,""paper","scissors"];**/


function getComputerChoice(){
    let moves = ["rock","paper","scissors"];
    let n = Math.floor(Math.random() * (2 - 0 + 1)) +0;
    computerSelection = moves[n]
    return computerSelection;
}



/** 
function round(playerSelection, computerSelection){
    plays a round 
    return a string that declares winner
    player selection should be case insensitive

} **/
function playerSelection(){    
    let legalMoves = ['rock', 'paper', 'scissors'];
    let playerSelection;
    playerSelection = (prompt("please enter a legal move (rock paper or scissors)").toLowerCase());
    while (legalMoves.includes(playerSelection)== false){
        playerSelection = (prompt("please enter a legal move (rock paper or scissors)").toLowerCase());
    }     
    }        


            /**     
function game(){
    plays 5 rounds keeps score and reports a winner or loser at the end
    display results of each round
}

**/

/** 
((toString(playerSelection.toLowerCase()) != "rock") || (toString(playerSelection.toLowerCase()) != "paper") || (toString(playerSelection.toLowerCase()) != "scissors")){
    let playerSelection = prompt("Enter rock paper or scissors");    
    console.log(playerSelection); **/