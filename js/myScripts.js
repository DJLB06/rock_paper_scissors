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
             returnString = "Its a tie, try again!";
        }

        else if(
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')  
        )
        {
            returnString = "You win! " + playerChoice + " beats " + computerChoice;
        }

        else{
            returnString = "You lose! " + computerChoice + " beats " + playerChoice;
        }

        return returnString;
}