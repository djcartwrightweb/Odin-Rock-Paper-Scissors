function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
        default:
            console.error('getComputerChoice Error');
            break;
    }
}

function playGame(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player === computer) {
        return 'It\'s a tie!';
    } else {
        if (player == 'rock') {
            if (computer == 'paper') {
                return 'You lose!';
            } else {
                return 'You Win!';
            }
        } else if (player == 'paper') {
            if (computer == 'Scissors') {
                return 'You lose!';
            } else {
                return 'You win!';
            }
        } else if (player == 'scissors') {
            if (computer == 'rock') {
                return 'You lose!';
            } else {
                return 'You win!';
            }
        }   
    }
}

let playerScore = 0;
let computerScore = 0;
/*function game() {
    for (let i = 0; i < 5; i ++) {
    console.log(playGame(prompt('Rock, paper, or scissors? ' + i + 1), getComputerChoice()));
    }
}*/

//create and add buttons with event-listeners to DOM
const rockButton = document.createElement('button');
rockButton.textContent = 'rock';
rockButton.addEventListener('click', (e) => {
    results.innerHTML = playGame('rock', getComputerChoice());
});

const paperButton = document.createElement('button');
paperButton.textContent = 'paper';
paperButton.addEventListener('click', (e) => {
    results.innerHTML = playGame('paper', getComputerChoice());
});

const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'scissors';
scissorsButton.addEventListener('click', (e) => {
    results.innerHTML = playGame('scissors', getComputerChoice());
});

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);


//creating and appending elements to show results of games

const results = document.createElement('div');
document.body.appendChild(results);
results.innerHTML = 'results...';

//game();

