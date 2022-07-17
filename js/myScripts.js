function getComputerChoice(){
    let rockPaperScissors = ['rock','paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return rockPaperScissors[randomNumber];
}

function chooseWinner(playerChoice, computerChoice){
        let returnString;
        playerChoice = playerChoice.toLowerCase();

        if(
            (playerChoice === 'rock' && computerChoice === 'rock') ||
            (playerChoice === 'paper' && computerChoice === 'paper') ||
            (playerChoice === 'scissors' && computerChoice === 'scissors') 
        )
        {
             returnString = "tie";
        }

        else if(
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')  
        )
        {
            returnString = "player";
        }

        else{
            returnString = "computer";
        }

        return returnString;
}

var playerScore = 0;
var computerScore = 0;

function clickHandler(e){
    const playerChoice = String(e.target.id);
   

let winner = chooseWinner(playerChoice, getComputerChoice());

    if(winner == 'player')
        {
            playerScore+=1;
            alert("You win this round!");
            playerPoint.innerText = playerScore;
        }
    else if(winner == 'computer')
        {
            computerScore+=1;
            alert("I win this round!"); 
            computerPoint.innerText = computerScore;
        }
    else
        {
            alert("Tie, try again!");
        }

if(playerScore + computerScore == 5){
    if(playerScore > computerScore)
        {
            alert(`You win! ${playerScore} to ${computerScore}`);
        }
    
    else if(computerScore > playerScore)
        {
            alert(`I win! ${computerScore} to ${playerScore}`);
        }
    
    else
        {
            alert("After all of that its a tie!")
        }
    playerScore = 0;
    computerScore = 0;
    computerPoint.innerText = computerScore;
    playerPoint.innerText = playerScore;
    return;
    }
  
}



const btns = document.querySelectorAll(".btn");
btns.forEach(btn => btn.addEventListener('click', clickHandler));
const playerPoint = document.querySelector(".player-score");
const computerPoint = document.querySelector(".computer-score");

/*
function game(){
    
    console.log(playerScore);
    console.log(computerScore);

   if(playerScore + computerScore == 5){
        if(playerScore > computerScore)
        {
            alert(`You win! ${playerScore} to ${computerScore}`);
        }

        else if(computerScore > playerScore)
        {
            alert(`I win! ${computerScore} to ${playerScore}`);
        }

        else
        {
            alert("After all of that its a tie!")
        }
    playerScore = 0;
    computerScore = 0;
    computerPoint.innerText = computerScore;
    playerPoint.innerText = playerScore;
    }

let winner = chooseWinner(playerChoice, getComputerChoice());

    if(winner == 'player')
        {
            playerScore+=1;
            alert("You win!");
            playerPoint.innerText = playerScore;
        }
    else if(winner == 'computer')
        {
            computerScore+=1;
            alert("I win!"); 
            computerPoint.innerText = computerScore;
        }
    else
        {
            alert("Tie, try again!");
        }

}


*/



