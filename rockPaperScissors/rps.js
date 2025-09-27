//Create a function named "getComputerChoice"
function getComputerChoice() { 
//Have computer randomly return either rock, paper, or scissors
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
    return computerSelection;
}
//Test that the function returns what is expected in console.log
// console.log("Computer Choice is "+ getComputerChoice())


//Create new function named getHumanChoice
function getHumanChoice(humanChoice) {
//getHumanChoice should return one of the valid choices depending on user input
    let humanSelection = prompt("Please, select Rock, Paper, or Scissors: ");
    return humanSelection;

}
// Test function return
// console.log(getHumanChoice())

//Create variables labeled humanScore and computerScore
//Initialize those variables with a value of 0
let humanScore = 0;
let computerScore = 0;

//Create new function named playRound
//Define two parameters for playRound: humanChoice and computerChoice. 
    //These will take human and computer choices as arguments

const win = `You Win!`;
const lose = `You lose!`;
const tie = `Its a Tie! Try again.`;

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
    return tie;
    }
    else{
        if ((humanChoice === "Rock" && computerChoice === "Scissors")|| (humanChoice === "Paper" && computerChoice === "Rock")|| (humanChoice === "Scissors" && computerChoice === "Paper")){
            return win;
        }
        else {
            return lose;
        }
    }
}
let refinedHumanSelection = getHumanChoice();
//Make humanChoice parameter case-insensitive so that players can input variety of selections.
refinedHumanSelection = refinedHumanSelection.charAt(0).toUpperCase() + refinedHumanSelection.slice(1).toLowerCase();
let refinedComputerSelection = getComputerChoice()
console.log("You Chose: " + refinedHumanSelection)
console.log("The Computer Chose: " + refinedComputerSelection)
//write code for playRound to console.log a string value represent the round winner
//Increment the score variables based on round winners
if (playRound() === win) {
    humanScore === ++humanScore
}
else {
    computerScore === ++computerScore
}

console.log(`The scores are: \nHuman Score: ${humanScore}\nComputer Score: ${computerScore}`); 


console.log(playRound(refinedHumanSelection, refinedComputerSelection))

//