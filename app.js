const Rock = 0;
const Paper = 1;
const Scissors = 2;


function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

const playButton = document.querySelector('#playButton');

playButton.addEventListener('click', function () {
    const playerSelection = document.querySelector('#playerSelection').value;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie!")
    } else if (playerSelection === "Rock" && computerSelection === Scissors) {
        console.log("You win!")
    } else if (playerSelection === "Paper" && computerSelection === Rock) {
        console.log("You win!")
    } else if (playerSelection === "Scissors" && computerSelection === Paper) {
        console.log("You win!")
    } else {
        console.log("You lose!")
    }
};