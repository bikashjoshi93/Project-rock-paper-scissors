let humanScore = 0;
let computerScore = 0;


function getComputerChoice() { 
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if(randomNum === 1) {
        return 'Rock';
    } else if( randomNum === 2) {
        return 'Paper';
    } else {
        return 'Scissor';
    }
};

function getHumanChoice() {
    let choice = prompt('choose rock paper or scissor');
    choice = choice.toLowerCase().trim();
    if(choice === 'rock') {
        return 'Rock';
    } else if(choice === 'paper') {
        return 'Paper';
    } else if(choice === 'scissor') {
        return 'Scissor'
    } else {
        return 'Invalid Choice!';
    }
};

function playRound(humanChoice, ComputerChoice) {
    if(humanChoice === ComputerChoice) {
         return `You both chose ${humanChoice}, it's a draw!`;
    } else if((humanChoice === 'Rock' && ComputerChoice === 'Scissor')
            || (humanChoice === 'Paper' && ComputerChoice === 'Rock')
            || (humanChoice === 'Scissor' && ComputerChoice === 'Paper')) {

                humanScore++
                return `${humanChoice} beats ${ComputerChoice}, you win!`;

    } else if((ComputerChoice === 'Rock' && humanChoice === 'Scissor')
            || (ComputerChoice === 'Paper' && humanChoice === 'Rock')
            || (ComputerChoice === 'Scissor' && humanChoice === 'Paper')){

            computerScore++
            return `${ComputerChoice} beats ${humanChoice}, computer wins!`
    }
}



function playGame() {
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection))
console.log(humanScore);
console.log(computerScore);

}

function winner() {
    if(humanScore > computerScore) {
        return `Your score: ${humanScore} computer's score: ${computerScore} You won the game`;
    } else {
        return `Your score: ${humanScore} computer's score: ${computerScore} Computer won the game`;
    }
}

playGame();
playGame();
playGame();
playGame();
playGame();
console.log(winner());




