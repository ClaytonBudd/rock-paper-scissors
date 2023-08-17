
/** returns random instance of rock paper or scissors**/
function getComputerChoice(){
    let moves = ["rock","paper","scissors"];
    let n = Math.floor(Math.random() * (2 - 0 + 1)) +0;
    let computerSelection = moves[n]
    return computerSelection;
}

/** Player Selection Listener */
document.getElementById("rock").addEventListener("click", function(){
    playRound('rock', getComputerChoice())
})

document.getElementById("paper").addEventListener("click", function(){
    playRound('paper', getComputerChoice())
});

document.getElementById("scissors").addEventListener("click", function(){
    playRound('scissors', getComputerChoice())
});

let wins = 0;
let losses = 0;
function playRound(playerSelection, computerSelection){
    let winCondition
    let gameWinner
    if ( wins >= 5 || losses >=5 ){
        if (wins > losses){
            gameWinner = "YOU WIN"
        }else{
            gameWinner = "COMPUTER WINS"
        } 
        const gameResult = document.createElement('div')
        const textFinal = document.createTextNode("Game over " + gameWinner)
        gameResult.appendChild(textFinal);
        const element = document.getElementById("results")
        element.appendChild(gameResult)
        return; 
    }
    if (playerSelection == 'rock'){
        if (computerSelection == 'scissors'){
            winCondition = 'win'
            wins += 1
            
            
        } if (computerSelection == 'paper'){
            winCondition = 'lose'
            losses += 1

        } if(computerSelection== 'rock'){ 
            winCondition = 'tie'
            
        }
    }
    if (playerSelection == "paper"){
        if (computerSelection == 'rock'){
            winCondition = 'win'
            wins += 1

        } if (computerSelection == 'scissors'){
            winCondition = 'lose'
            losses += 1

        } if (computerSelection == 'paper'){
            winCondition = 'tie'
            
        }
    }
    if (playerSelection == 'scissors'){
        if (computerSelection == 'paper'){
            winCondition = 'win'
            wins +=1

        } if (computerSelection == 'rock'){
            winCondition = 'lose'
            losses +=1

        } if (computerSelection == 'scissors') {
            winCondition = 'tie'
             
        }
    }

    
    const roundResult = document.createElement('div');
    const textResult = document.createTextNode("You played " + playerSelection + ", Computer played " + computerSelection + ", you " + winCondition + " this round. The score is currently Player: " + wins + " Computer : " + losses)
    roundResult.appendChild(textResult);
    const element = document.getElementById("results")
    element.appendChild(roundResult);
}


