

/** returns random instance of rock paper or scissors**/
function getComputerChoice(){
    let moves = ["rock","paper","scissors"];
    let n = Math.floor(Math.random() * (2 - 0 + 1)) +0;
    let computerSelection = moves[n]
    return computerSelection;
}
/** Prompts player to type in rock paper or scissors and returns the result */
function getPlayerChoice(){    
    let legalMoves = ['rock', 'paper', 'scissors'];
    let playerChoice;
    playerChoice = (prompt("please enter a legal move (rock paper or scissors)").toLowerCase());
    while (legalMoves.includes(playerChoice)== false){
        playerChoice = (prompt("please enter a legal move (rock paper or scissors)").toLowerCase());
    }
    return playerChoice;     
    }        

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice(); 
console.log(playRound(playerSelection, computerSelection));

function playRound(playerSelection, computerSelection){
    let winCondition
    if (playerSelection == 'rock'){
        if (computerSelection == 'scissors'){
            winCondition = 'win'
            
        } if (computerSelection == 'paper'){
            winCondition = 'lose'
            
        } if(computerSelection== 'rock'){ 
            winCondition = 'tie'
            
        }
    }
    if (playerSelection == "paper"){
        if (computerSelection == 'rock'){
            winCondition = 'win'
           
        } if (computerSelection == 'scissors'){
            winCondition = 'lose'
            
        } if (computerSelection == 'paper'){
            wincondition = 'tie'
            
        }
        }
    if (playerSelection == 'scissors'){
        if (computerSelection == 'paper'){
            winCondition = 'win'
            
        } if (computerSelection == 'rock'){
            winCondition = 'lose'
            
        } if (computerSelection == 'scissors') {
            winCondition = 'tie'
             
        }
    }
console.log("Computer played " + computerSelection + " you " + winCondition + " this round")
}


/** 
    compares playerSelection and computerSelection to see which is better
    return a string that declares winner
    player selection should be case insensitive


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