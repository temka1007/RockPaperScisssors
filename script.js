
// This function produces "rock, paper, and scissors" with each 33% chance.
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

//This function tells who wins the game.
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
    };                                                     
}


const buttons = document.querySelectorAll('button');
const player_score_1 = document.querySelector('.score.one');
const player_score_2 = document.querySelector('.score.two');
const player_score_3 = document.querySelector('.score.three');

const computer_score_1 = document.querySelector('.score.four');
const computer_score_2 = document.querySelector('.score.five');
const computer_score_3 = document.querySelector('.score.six');

function getPlayerChoice(choice) {
    return choice.id;
}


let player = 0;
let computer = 0; 

function game() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const playerSelection = getPlayerChoice(button);
            const computerSelection = getComputerChoice();

            console.log(playRound(playerSelection, computerSelection));

            if (player === 1) {
                player_score_1.style.backgroundColor =  'yellow';
            } else if (player === 2) {
                player_score_2.style.backgroundColor =  'yellow';
            } else  if (player === 3) {
                player_score_3.style.backgroundColor =  'yellow';
            };
            if (computer === 1) {
                computer_score_1.style.backgroundColor =  'yellow';
            } else if (computer === 2) {
                computer_score_2.style.backgroundColor =  'yellow';
            } else if (computer === 3) {
                computer_score_3.style.backgroundColor =  'yellow';
            };

            if (computer === 3) {
                setTimeout(function(){ alert("Game is over!"); }, 1000);
                setTimeout(function(){ location.reload(); }, 3000);
            };
            
            if (player === 3) {
                setTimeout(function(){ alert("Game is over!"); }, 1000);
                setTimeout(function(){ location.reload(); }, 3000);
            };
        })
    })
    
};

game();

