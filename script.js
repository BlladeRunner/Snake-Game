let player1Score = 0;
let player2Score = 0;
let player1Turn = true;
let totalTries = 0;

const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const nitroBtn = document.getElementById("nitroBtn");

function showResetButton() {
    rollBtn.style.display = "none"
    nitroBtn.style.display = "none"
    resetBtn.style.display = "block"
}

rollBtn.addEventListener("click", function () {
    totalTries++;
    const randomNumber = (Math.floor(Math.random() * 6) + 1);
    boardControl(randomNumber);
})

nitroBtn.addEventListener('click', () => {
    totalTries++;
    const randomNumber = (Math.floor(Math.random() * 7) * 2);
    boardControl(randomNumber);
})

resetBtn.addEventListener("click", function () {
    reset()
})

function boardControl(randomNumber) {
    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }

    if (player1Score >= 20 && player1Score > player2Score && (totalTries%2==0)) {
        message.textContent = "Player 1 Won 🥳";
        showResetButton()
    } else if (player2Score >= 20 && player1Score < player2Score && (totalTries%2==0)) {
        message.textContent = "Player 2 Won 🎉";
        showResetButton()
    }
    player1Turn = !player1Turn;
}

function reset() {
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;
    player1Scoreboard.textContent = 0;
    player2Scoreboard.textContent = 0;
    player1Dice.textContent = "-";
    player2Dice.textContent = "-";
    message.textContent = "Player 1 Turn";
    resetBtn.style.display = "none";
    rollBtn.style.display = "block";
    nitroBtn.style.display = "block";
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
}