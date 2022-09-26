
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

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    computerSelection = getComputerChoice();
    computerSelection = computerSelection.toLowerCase();

    playerSelection = prompt("Make Your Choice");
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "rock") {
        return "Draw";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore = ++computerScore;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore = ++playerScore;
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore = ++playerScore
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Draw";
    } else if (playerSelection === "paper" && computerSelection ==="scissors") {
        computerScore = ++computerScore;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore = ++computerScore;
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore = ++playerScore;
        return "You Win! Scissors beats Paper";
    } else {
        return "Draw";
    }
}

function game() {

    for (let i = 0; i < 5; i++) {
        result = playRound();
        console.log(result);
        console.log("You Score:" + playerScore + " Computer Score:" + computerScore);
     }

     if (playerScore > computerScore) {
        console.log("You Win!");
     } else if (playerScore < computerScore) {
        console.log("You Lose!");
     } else {
        console.log("It's a Draw");
     }
}


console.log(game());







