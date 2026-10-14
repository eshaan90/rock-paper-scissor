
function getComputerChoice(){
    random_number = Math.random();
    if (random_number < 0.34) {
        return "rock";
    } else if(random_number <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    let userInput = prompt("Please choose rock, paper, or scissor: ");
    userInput = userInput.toLowerCase();
    return userInput;
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
             (humanChoice === "paper" && computerChoice === "rock") ||
             (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function playGame(numberOfRounds=5){
    for (let i = 0; i < numberOfRounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
    if (humanScore > computerScore) {
        return `You won the game! Final Score: You ${humanScore} - Computer ${computerScore}`;
    }
    else if (humanScore < computerScore) {
        return `You lost the game! Final Score: You ${humanScore} - Computer ${computerScore}`;
    }
    else {
        return `The game is a tie! Final Score: You ${humanScore} - Computer ${computerScore}`;
    }
}

console.log(playGame());
