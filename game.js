const p1Btn = document.querySelector('.p1Btn');
const p1Display = document.querySelector('#p1Display');
const p2Btn = document.querySelector('.p2Btn');
const p2Display = document.querySelector('#p2Display');
const resetBtn = document.querySelector('.resetBtn');
const options = document.querySelectorAll('option')

let p1Score = 0;
let p2Score = 0;

let winningScore = 5;
let isGameOver = false;

p1Btn.addEventListener('click', () => {
    if(!isGameOver) {
        p1Score++;
        if(p1Score === winningScore) {
           isGameOver = true;
        }
        p1Display.innerText = p1Score;
    }
    
})

p2Btn.addEventListener('click', () => {
    if(!isGameOver) {
        p2Score++;
        if(p2Score === winningScore) {
           isGameOver = true;
        }
        p2Display.innerText = p2Score;
    }
})

resetBtn.addEventListener('click', () => {
    p1Score = 0;
    p1Display.innerText = p1Score;
    p2Score = 0;
    p2Display.innerText = p2Score;
})