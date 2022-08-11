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

let computerSelection = getComputerChoice();

function game() {
    for (let i = 0; i < 5; i ++) {
    console.log(playGame(prompt('Rock, paper, or scissors? ' + i + 1), getComputerChoice()));
    }
}

game();

