const p1 = {
    score: 0,
    button: document.querySelector('.p1Btn'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('.p2Btn'),
    display: document.querySelector('#p2Display')
}

// const p1Btn = document.querySelector('.p1Btn');
// const p1Display = document.querySelector('#p1Display');
// const p2Btn = document.querySelector('.p2Btn');
// const p2Display = document.querySelector('#p2Display');
// let p1Score = 0;
// let p2Score = 0;

const resetBtn = document.querySelector('.resetBtn');
const playToSelect = document.querySelector('#playTo');

let winningScore;
let isGameOver = false;

playToSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

function updateScores (player, opponent) {
    if(!isGameOver) {
        player.score++;
        if(player.score === winningScore) {
           isGameOver = true;
           player.display.classList.add('winner');
           opponent.display.classList.add('loser');
           player.button.disabled = true;
           opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}

p1.button.addEventListener('click', () => {
    updateScores(p1,p2);
})

p2.button.addEventListener('click', () => {
    updateScores(p2,p1);
})

function reset () {
    for (let p of [p1,p2]){
        isGameOver = false;
        p.score = 0;
        p.display.innerText = p.score;
        p.display.classList.remove('winner','loser');
        p.button.disabled = false;
    }
}

resetBtn.addEventListener('click', reset)