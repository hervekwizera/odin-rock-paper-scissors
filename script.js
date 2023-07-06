const playerText = document.querySelector('#playerText')
const computerText = document.querySelector('#computerText')
const resultText = document.querySelector('#resultText')
const choiceBtns = document.querySelectorAll('.choiceBtn')
let player
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener('click',() =>{
    player = button.textContent;
    getComputerChoice();
    playerText.textContent =` Player:${player}`;
    computerText.textContent =` Computer:${computer}`;
    resultText.textContent = playRound();
}));

function getComputerChoice() {
    const randNum = Math.floor(Math.random()*3) + 1;
    
    switch (randNum) {
        case 1:
            computer= 'ROCK';
            break;
        case 2:
            computer= 'PAPER';
            break;
        case 3:
            computer= 'SCISSOR';
            break;
    
        default:
            alert('invalid')
            break;
    }
}
function playRound() {
    if(player == computer){
        return 'DRAW'
    }
    else if (computer == 'ROCK') {
        return (player =='PAPER') ? 'You Win!' : `You Lose! ${computer} beats ${player}`
    }
    else if (computer == 'PAPER') {
        return (player =='SCISSOR') ? 'You Win!' : `You Lose! ${computer} beats ${player}`
    }
    else if (computer == 'SCISSOR') {
        return (player =='ROCK') ? 'You Win!' : `You Lose! ${computer} beats ${player}`
    }
  }
   
  
  