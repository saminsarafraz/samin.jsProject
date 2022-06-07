
const userChoices = document.getElementById('user-choice')
const pcChoices = document.getElementById("computer-choice")
const result = document.getElementById("result")
const possibleChoices = document.querySelectorAll('img')
const modal = document.getElementById("modal")
modal.style.display = "none"
let userChoice
let pcChoice
let pcScore = 0
let userScore = 0
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoices.innerHTML = userChoice
    pcChoiceGenerate()
    score()
    finished()
}))
function pcChoiceGenerate() {
    const r = Math.floor(Math.random() * 3)
    const choices = ["rock", "paper", "scissor"]
    pcChoices.innerHTML = choices[r];
    pcChoice = choices[r];
}

function score() {
    const modal = document.getElementById("modal")
    if (pcChoice === userChoice) {
        userScore += 0.5;
        pcScore += 0.5;
    }

    else if (userChoice == 'paper' && pcChoice == 'rock') {
        userScore++;

    } else if (userChoice == 'rock' && pcChoice == 'paper') {
        pcScore++;

    } else if (userChoice == 'scissor' && pcChoice == 'paper') {
        userScore++;

    } else if (userChoice == "paper" && pcChoice == "scissor") {
        pcScore++;

    } else if (userChoice == "rock" && pcChoice == "scissor") {
        userScore++;
    } else if (userChoice == "scissor" && pcChoice == "rock") {
        pcScore++;

    }
    if (pcScore >= 10) {
        result.innerHTML = "computer win!"
        modal.style.display = "block"

    }
    if (userScore >= 10) {
        result.innerHTML = "you win!"
        modal.style.display = "block"
    }

    const user = document.getElementById("user-s");
    const pc = document.getElementById("pc-s");
    pc.innerText = pcScore;
    user.innerHTML = userScore;

}
function finished() {
    const user = document.getElementById("user-s");
    const pc = document.getElementById("pc-s");
    if (userScore >= 10 || pcScore >= 10) {
        userChoices.innerHTML = ""
        pcChoices.innerHTML = ""
        user.innerHTML = 0
        pc.innerHTML = 0
    }
   
   
}




