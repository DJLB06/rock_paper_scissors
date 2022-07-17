const btns = document.querySelectorAll(".btn");
btns.forEach(btn => btn.addEventListener('click', clickHandler));
const playerPoint = document.querySelector(".player-score");
const computerPoint = document.querySelector(".computer-score");
const winnerText = document.querySelector(".winner-text");


//random number returns rock, paper, or scissors
function getComputerChoice(){
    let rockPaperScissors = ['rock','paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return rockPaperScissors[randomNumber];
}

function getWinnerText(playerChoice, computerChoice, winner){
    let returnString = "";
    if(winner === 'player'){
        returnString = `You win! ${playerChoice} beats ${computerChoice}`; 
    }
    else if(winner === 'computer'){
        returnString = `I win! ${computerChoice} beats ${playerChoice}`;
    }
    else{
        returnString = `Its a tie! We both chose ${playerChoice}`;
    }

    winnerText.innerText = returnString;
   
}

//takes the players choice and chooses random computer choice to pick winner. returns a string with player, computer, or tie
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

//global variables to keep track of score
var playerScore = 0;
var computerScore = 0;

//gets ID from users click and calls choose winner. keeps track of score and updates DOM. once the total between the two players equals 5 the game is over and a winner is declared. resets variables.
function clickHandler(e){
const playerChoice = String(e.target.id);
   

let winner = chooseWinner(playerChoice, computerChoice = getComputerChoice());


    if(winner == 'player')
        {
            playerScore+=1;
            playerPoint.innerText = playerScore;
        }
    else if(winner == 'computer')
        {
            computerScore+=1;
            computerPoint.innerText = computerScore;
        }

    getWinnerText(playerChoice, computerChoice, winner);

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
    winnerText.innerText = "Game Over! Pick your weapon to play again!"
    return;
    }
  
}





//Old function for playing game, may attempt to refactor so all code isn't in the clickHandler if possible
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



