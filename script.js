let player = 0;
let computer = 0; 
// This function porduces "rock, paper, and scissors" with each 33% chance.
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

//This funtion tells who wins the game.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "The game is a tie!"; 
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        player++;
        return "You win! Rock crushes scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        player++;
        return "You win! Paper covers rock.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        player++;
        return "You win! Scissors cuts paper.";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computer++;
        return "You lose! Rock crushes scissors.";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computer++;
        return "You lose! Paper covers rock.";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computer++;
        return "You lose! Scissors cuts paper.";
    } else {
        return "Choose from 'rock paper scissors'";
    }                                                               
}

                                         
function game() {
    for (let i = 0; i < 5; i++, player, computer) { 
        let prePlayerSelection = prompt("Choose 'rock - paper - scissors'", ""); 
        const playerSelection = prePlayerSelection.toLowerCase();
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
        
        console.log(`Player score is ${player}, and computer score is ${computer}`);
    }   
}

console.log(26+24+2);