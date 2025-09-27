//This function gets the computer's rps selection and returns it.
function getComputerChoice() { 
    const rpsValue = Math.random();
    let computerSelection = "Undefined";
    if (rpsValue <= .333) {
        computerSelection = "Rock";
    }
    else {
        if (rpsValue > .333 && rpsValue <= .666) {
            computerSelection = "Paper";
        }
        else {
            if (rpsValue > .666) {
                computerSelection = "Scissors";
            }
        }
    }
    alert(`Computer chose: ${computerSelection}`)
    return computerSelection;
}

//This function prompts the user for their choice and returns their selection
function getHumanChoice(humanChoice) {
    let humanSelection = prompt("Please type Rock, Paper, or Scissors: ");
    humanSelection = humanSelection.charAt(0).toUpperCase() + 
    humanSelection.slice(1).toLowerCase();
    return humanSelection;
}

//This function is the entire game
function playGame() {
    //these variables are the starting score
    let humanScore = 0;
    let computerScore = 0;
    //This function contains the logic for playing one round of the game
    function playRound(humanChoice, computerChoice) {
        //Logic Explanation: If human and computer are tied, tell the user to go again, because it's a tie
            //Otherwise, if the human choice beats the computer's choice, tell them they win and add 1 to the human's score
            //If that is not the case, tell the user they lost and add 1 to the computer's score
        if(humanChoice === computerChoice) {
            alert("Go again, it's a tie.");
            }
            else{
                if ((humanChoice === "Rock" && computerChoice === "Scissors")|| 
                (humanChoice === "Paper" && computerChoice === "Rock")|| 
                (humanChoice === "Scissors" && computerChoice === "Paper")){
                    alert("You win!");
                    return humanScore = ++humanScore;
                }
                else {
                    alert("You lose!");
                    return computerScore = ++computerScore;
                }
            }
        }
    //Introduction to the game
    alert("Welcome to a new game of Rock Paper Scissors!\nPress the OK/Close button to begin.");
    
    //Starting game scores
    alert(`Starting Scores\nHuman Score: ${humanScore}\nComputer Score: ${computerScore}`);
    
    //First Round
    //Big note: in order to rerun functions, they cannot be in variables, but in fact must be their function form.
    playRound(getHumanChoice(), getComputerChoice());
    alert(`Round 1 complete!\nHuman Score: ${humanScore}\nComputer Score: ${computerScore}\nPress OK/Close to begin round 2`);

    //Second Round
    playRound(getHumanChoice(), getComputerChoice());
    alert(`Round 2 complete!\nHuman Score: ${humanScore}\nComputer Score: ${computerScore}\nPress OK/Close to begin round 3`);

    //Third Round
    playRound(getHumanChoice(), getComputerChoice());
    alert(`Round 3 complete!\nHuman Score: ${humanScore}\nnComputer Score: ${computerScore}\nPress OK/Close to begin round 4`);
    
    //Fourth Round
    playRound(getHumanChoice(), getComputerChoice());
    alert(`Round 4 complete!\nHuman Score: ${humanScore}\nComputer Score: ${computerScore}\nPress OK/Close to begin the final round`); 
    
    //Fifth Round
    playRound(getHumanChoice(), getComputerChoice());
    alert(`Round 5 complete!\nHuman Score: ${humanScore}\nComputer Score: ${computerScore}`);    

    //Depending on score in the fifth round, alert with the appropriate message
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

//Invocation of the game
playGame()