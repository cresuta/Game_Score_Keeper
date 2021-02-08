const playerOneBtn = document.querySelector('.playerOneBtn');
const playerOneScore = document.querySelector('#playerOneScore');
const playerTwoBtn = document.querySelector('.playerTwoBtn');
const playerTwoScore = document.querySelector('#playerTwoScore');
const resetBtn = document.querySelector('.resetBtn')

let playerOneScoreTotal = 0;
let playerTwoScoreTotal = 0;

playerOneBtn.addEventListener('click', () => {
    playerOneScoreTotal++;
    playerOneScore.innerText = playerOneScoreTotal;
})

playerTwoBtn.addEventListener('click', () => {
    playerTwoScoreTotal++;
    playerTwoScore.innerText = playerTwoScoreTotal;
})

resetBtn.addEventListener('click', () => {
    playerOneScoreTotal = 0;
    playerOneScore.innerText = playerOneScoreTotal;
    playerTwoScoreTotal = 0;
    playerTwoScore.innerText = playerTwoScoreTotal;
})