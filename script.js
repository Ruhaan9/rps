
function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    } else {
        return "Scissors";
    } 
}




function playRound(playerSelection, computerSelection) {

    computerSelection = getComputerChoice();
    computerSelection = computerSelection.toLowerCase();

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "rock") {
        result = "Draw";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore = ++computerScore;
        result = "You Lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore = ++playerScore;
        result = "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore = ++playerScore
        result ="You Win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        result = "Draw";
    } else if (playerSelection === "paper" && computerSelection ==="scissors") {
        computerScore = ++computerScore;
        result = "You Lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore = ++computerScore;
        result = "You Lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore = ++playerScore;
        result = "You Win! Scissors beats Paper";
    } else {
        result = "Draw";
    }
}

function game() {

    if (playerScore === 5) {
        finalResult = "You Win! Reload to play again.";
    } else if (computerScore === 5) {
        finalResult = "You Lose! Reload to play again.";
    }

}

let result = "";
let playerScore = 0;
let computerScore = 0;
let finalResult = "";


const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRound("rock");
})


const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRound("paper");
})


const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playRound("scissors");
})

const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {

  
  button.addEventListener('click', () => {
    game();
    document.getElementById("result").innerHTML = result;
    document.getElementById("pscore").innerHTML = "Player Score: " + playerScore;
    document.getElementById("cscore").innerHTML = "Computer Score: " + computerScore;
    if (playerScore === 5 || computerScore === 5) {
        document.getElementById("fscore").innerHTML = finalResult;
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
    }
  });
});












