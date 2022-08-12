//global variables
let wins = 0;
let losses = 0;

//game functions
function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1);
    switch (choice) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
        default:
            alert('Error');
            break;
    }
}

function playGame(playerChoice, computerChoice) {
    computerChoice = computerChoice();

    if (computerChoice == playerChoice) return 'No score change: Tie!';

    if (computerChoice == 'rock') {
        if (playerChoice == 'paper') {
            wins += 1;
            return 'You Won!';
        } else {
            losses += 1;
            return 'You Lost!';
        }
    } else if (computerChoice == 'paper') {
        if (playerChoice == 'scissors') {
            wins += 1;
            return 'You Won!';
        } else {
            losses += 1;
            return 'You Lost!';
        }
    } else if (computerChoice == 'scissors') {
        if (playerChoice == 'rock') {
            wins += 1;
            return 'You Won!';
        } else {
            losses += 1;
            return 'You Lost!';
        }
    }
}

//create button to start new game
const gameBtn = document.createElement('button');
gameBtn.classList.add('btn');
gameBtn.textContent = 'New Game';
gameBtn.addEventListener('click', newGame);
document.getElementById('game-container').appendChild(gameBtn);

function newGame() {
    // hide new game button
    document.getElementById('game-container').removeChild(gameBtn);
    
    //create player choice buttons
    const rockBtn = document.createElement('button');
    rockBtn.classList.add('btn');
    rockBtn.textContent = 'rock';
    rockBtn.addEventListener('click', e => {
        let result = playGame('rock', getComputerChoice);
        console.log(wins, losses);
        console.log(result);

        messageBoard.textContent = result;
        winBoard.textContent = 'wins: ' + wins;
        lossBoard.textContent = ' losses: ' + losses;
        if (wins == 7 || losses == 7) {
            endGame(wins, losses);
        }
    });

    const paperBtn = document.createElement('button');
    paperBtn.classList.add('btn');
    paperBtn.textContent = 'paper';
    paperBtn.addEventListener('click', e => {
        let result = playGame('paper', getComputerChoice);
        console.log(wins, losses);
        console.log(result);

        messageBoard.textContent = result;
        winBoard.textContent = 'wins: ' + wins;
        lossBoard.textContent = ' losses: ' + losses;
        if (wins == 7 || losses == 7) {
            endGame(wins, losses);
        }
    });

    const scissorsBtn = document.createElement('button');
    scissorsBtn.classList.add('btn');
    scissorsBtn.textContent = 'scissors';
    scissorsBtn.addEventListener('click', e => {
        let result = playGame('scissors', getComputerChoice);
        console.log(wins, losses);
        console.log(result);

        messageBoard.textContent = result;
        winBoard.textContent = 'wins: ' + wins;
        lossBoard.textContent = ' losses: ' + losses;
        if (wins == 7 || losses == 7) {
            endGame(wins, losses);
        }
    });

    //create scoreboard and messageBoard
    const scoreboard = document.createElement('div');
    scoreboard.classList.add('board');
    const winBoard = document.createElement('p');
    const lossBoard = document.createElement('p');
    scoreboard.appendChild(winBoard);
    scoreboard.appendChild(lossBoard);
    const messageBoard = document.createElement('div');
    messageBoard.classList.add('board');

    //add player choice buttons to DOM
    document.getElementById('game-container').appendChild(rockBtn);
    document.getElementById('game-container').appendChild(paperBtn);
    document.getElementById('game-container').appendChild(scissorsBtn); 
    
    //add scoreboard and messageBoard to DOM
    document.getElementById('score-container').appendChild(scoreboard);
    document.getElementById('score-container').appendChild(messageBoard);
    
}

function endGame(playerWins, computerWins) {
    //announce winner
    if (playerWins == 7) {
        alert('You win!');
    } else {
        alert('You lose');
    }

    //reset global variables
    wins = 0;
    losses = 0;

    //reset board to give option for new game
    while (document.getElementById('score-container').firstChild) {
       document.getElementById('score-container').removeChild(document.getElementById('score-container').firstChild);
    }

    while (document.getElementById('game-container').firstChild) {
        document.getElementById('game-container').removeChild(document.getElementById('game-container').firstChild);
     }

    document.getElementById('game-container').appendChild(gameBtn);

}

