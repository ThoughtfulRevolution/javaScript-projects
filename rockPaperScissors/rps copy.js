// const win = `You Win!`;
// const lose = `You lose!`;
// const tie = `Its a Tie! Try again.`;
// let refinedHumanSelection = getHumanChoice();
// refinedHumanSelection = refinedHumanSelection.charAt(0).toUpperCase() + refinedHumanSelection.slice(1).toLowerCase();
// let refinedComputerSelection = getComputerChoice();
// const round = playRound(refinedHumanSelection, refinedComputerSelection)
// let humanScore = 0;
// let computerScore = 0;



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
    let humanSelection = prompt("Please, select Rock, Paper, or Scissors: ");
    humanSelection = humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1).toLowerCase();
    return humanSelection;
}

// function playRound(humanChoice, computerChoice) {
//     if(humanChoice === computerChoice) {
//     return tie;
//     }
//     else{
//         if ((humanChoice === "Rock" && computerChoice === "Scissors")|| (humanChoice === "Paper" && computerChoice === "Rock")|| (humanChoice === "Scissors" && computerChoice === "Paper")){
//             return win;
//         }
//         else {
//             return lose;
//         }
//     }
// }

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

// if (round === win){
//     humanScore = ++humanScore
// }
// else {
//     if (round === lose) {
//         computerScore = ++computerScore
//     }
// }


playGame()