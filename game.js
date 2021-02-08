const p1Btn = document.querySelector('.p1Btn');
const p1Display = document.querySelector('#p1Display');
const p2Btn = document.querySelector('.p2Btn');
const p2Display = document.querySelector('#p2Display');
const resetBtn = document.querySelector('.resetBtn');
const playToSelect = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;

let winningScore;
let isGameOver = false;

function reset () {
    isGameOver = false;
    p1Score = 0;
    p1Display.innerText = p1Score;
    p2Score = 0;
    p2Display.innerText = p2Score;
}

playToSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

p1Btn.addEventListener('click', () => {
    if(!isGameOver) {
        p1Score++;
        if(p1Score === winningScore) {
           isGameOver = true;
           p1Display.style.color = '#198754';
           p2Display.style.color = '#dc3545';
        }
        p1Display.innerText = p1Score;
    }
    
})

p2Btn.addEventListener('click', () => {
    if(!isGameOver) {
        p2Score++;
        if(p2Score === winningScore) {
           isGameOver = true;
           p2Display.style.color = '#198754';
           p1Display.style.color = '#dc3545';
        }
        p2Display.innerText = p2Score;
    }
})

resetBtn.addEventListener('click', reset)