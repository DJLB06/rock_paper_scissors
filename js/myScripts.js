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


function clickHandler(e){
   
    const playerChoice = String(e.target.id);

    const winner = chooseWinner(playerChoice, getComputerChoice());
        if(winner == 'player')
            {
                alert("You win!")
            }
        else if(winner == 'computer')
            {
                alert("I win!") 
            }
        else
            {
                alert("Tie, try again!")
            }

}

const btns = document.querySelectorAll(".btn");
btns.forEach(btn => btn.addEventListener('click', clickHandler));




 /*
function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i=0;i<5;i++)
    {
        let playerChoice = prompt("enter rock, paper, or scissors");
        let tester = chooseWinner(playerChoice,getComputerChoice());
        if(tester == "computer")
        {
            computerScore += 1;
        }

        else if(tester === "player")
        {
            playerScore += 1;
        }
    }  

    
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

}
*/
