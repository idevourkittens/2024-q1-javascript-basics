//@ts-check

let playerControls = document.getElementById("player-controls");
let btnRock = document.getElementById("btn-rock");
let btnPaper = document.getElementById("btn-paper");
let btnScissors = document.getElementById("btn-scissors");

function rockClicked() {
    console.log("Rock was chosen!");
}

function paperClicked() {
    console.log("Paper was chosen!");
}

function scissorsClicked() {
    console.log("Scissors was chosen!");
}

btnRock?.addEventListener("click", rockClicked);
btnPaper?.addEventListener("click", paperClicked);
btnScissors?.addEventListener("click", scissorsClicked);