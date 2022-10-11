const playerSelection = prompt("Choose 'rock - paper - scissor'", "")

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*100);
    if (randomNumber <= 33) {
        return "Rock";
    } else if (randomNumber <= 66) {
        return "Paper";
    } else {
        return "Scissors";
    } 
}

console.log(getComputerChoice());



function playRound(playerSelection, computerSelection) {

}

