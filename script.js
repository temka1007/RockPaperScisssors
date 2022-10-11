function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*100);
    if (randomNumber <= 33) {
        return "rock";
    } else if (randomNumber <= 66) {
        return "paper";
    } else {
        return "scissors";
    } 
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('The game is a tie!');
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock crushes scissors.");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper covers rock.");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors cuts paper.");
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        console.log("You lose! Rock crushes scissors.");
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        console.log("You lose! Paper covers rock.");
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        console.log("You lose! Scissors cuts paper.");
    } else {
        console.log("Choose from 'rock paper scissors'");
    }
}

const playerSelection = prompt("Choose 'rock - paper - scissor'", "".toLowerCase()); 
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);

