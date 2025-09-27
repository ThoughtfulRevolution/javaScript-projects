function getComputerChoice() { 
    const rpsValue = Math.random();
    let computerSelection = "Undefined";
    if (rpsValue <= .333) {
        computerSelection = "Rock";
    }
    else {
        if (rpsValue > .333 && rpsValue < .666) {
            computerSelection = "Paper";
        }
        else {
            if (rpsValue >= .666) {
                computerSelection = "Scissors";
            }
        }
    }
    alert(`Computer chose: ${computerSelection}`)
    return computerSelection;
}

function getHumanChoice(humanChoice) {
    let humanSelection = prompt("Please, type Rock, Paper, or Scissors: ");
    humanSelection = humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1).toLowerCase();
    return humanSelection;
}

function playGame() {
   let humanScore = 0;
   let computerScore = 0;
   function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        alert("Go again, it's a tie.");
        }
        else{
            if ((humanChoice === "Rock" && computerChoice === "Scissors")|| (humanChoice === "Paper" && computerChoice === "Rock")|| (humanChoice === "Scissors" && computerChoice === "Paper")){
                alert("You win!");
                return humanScore = ++humanScore;
            }
            else {
                alert("You lose!");
                return computerScore = ++computerScore;
            }
        }
    }
    
    alert("Welcome to a new game of Rock Paper Scissors!\nPress the OK button to begin.");
    
    
    alert(`Starting Scores\nHuman Score: ${humanScore} \nComputer Score: ${computerScore}`);
    
    //Big note: in order to rerun functions, they cannot be in variables, but in fact must be their function form.
    playRound(getHumanChoice(), getComputerChoice());
    alert(`Round 1 complete!\nHuman Score: ${humanScore}\nComputer Score: ${computerScore}\nPress ok to begin round 2`);

    playRound(getHumanChoice(), getComputerChoice());
    alert(`Round 2 complete!\nHuman Score: ${humanScore}\nComputer Score: ${computerScore}\nPress ok to begin round 3`);

    playRound(getHumanChoice(), getComputerChoice());
    alert(`Round 3 complete!\nHuman Score: ${humanScore}\nComputer Score: ${computerScore}\nPress ok to begin round 4`);
    
    playRound(getHumanChoice(), getComputerChoice());
    alert(`Round 4 complete!\nHuman Score: ${humanScore}\nComputer Score: ${computerScore}\nPress ok to begin the final round`); 
    
    playRound(getHumanChoice(), getComputerChoice());
    alert(`Round 5 complete!\nHuman Score: ${humanScore}\nComputer Score: ${computerScore}`);    

    if (humanScore > computerScore) {
        alert("You really can outsmart the machine, well done!")
    }
    else {
        if (humanScore < computerScore) {
            alert("We're cooked!")
        }
        else {
            alert("It's a draw!")
        }
    }
}

playGame()