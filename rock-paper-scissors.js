
/** returns random instance of rock paper or scissors**/
function getComputerChoice(){
    let moves = ["rock","paper","scissors"];
    let n = Math.floor(Math.random() * (2 - 0 + 1)) +0;
    let computerSelection = moves[n]
    return computerSelection;
}
/** Prompts player to type in rock paper or scissors and returns the result 
function getPlayerChoice(){    
    let legalMoves = ['rock', 'paper', 'scissors'];
    let playerChoice;
    playerChoice = (prompt("please enter a legal move (rock paper or scissors)").toLowerCase());
    while (legalMoves.includes(playerChoice)== false){
        playerChoice = (prompt("please enter a legal move (rock paper or scissors)").toLowerCase());
    }
    return playerChoice;     
    }        
*/

document.getElementById("rock").addEventListener("click", function(){
    playRound('rock', getComputerChoice())
})

document.getElementById("paper").addEventListener("click", function(){
    playRound('paper', getComputerChoice())
});

document.getElementById("scissors").addEventListener("click", function(){
    playRound('scissors', getComputerChoice())
});


/** Takes in the player and computer's choices and determines who wins the round */
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
            winCondition = 'tie'
            
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
    console.log("You played " + playerSelection + " Computer played " + computerSelection + " you " + winCondition + " this round")
    return winCondition
}


/** calls 5 instances of play round tallys up win loss tie and prints the result */
function playGame(){
    let wins = 0;
    let losses = 0;
    let ties = 0;
        const playerSelection = getPlayerChoice(); 
        const computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult == 'win'){
            wins += 1;
            
            
        }else if (roundResult == 'lose'){
            losses += 1;
            
            
        }else if (roundResult == 'tie'){
            ties += 1;
            
        }
    
        
     
    if (wins > losses && wins > ties) {
        result = "win"
    } if (losses > wins && losses > ties){
        result = "lose"
    } else{
        result = 'tie'
    }
    console.log("Round is over You " + result);
}
  