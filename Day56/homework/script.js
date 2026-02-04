let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let result = document.getElementById("winner")
let userScore = document.getElementById("your")
let computerScore = document.getElementById("computer")
let user = 0
let computer = 0

function computerChoice(){
    let choices = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random() * 3)
    return choices[randomIndex]
}
function play(userChoice){
    let comp = computerChoice()
    if(userChoice === comp) {
        result.textContent = "Draw! Computer choice: " + comp
    }
    else if (
        (userChoice === "rock" && comp === "scissors") ||
        (userChoice === "paper" && comp === "rock") ||
        (userChoice === "scissors" && comp === "paper")
    ){
        user++
        result.textContent = "You Won! Computer chose: " + comp
    }
    else{
        computer ++
        result.textContent = "You Lost! Computer chose: " + comp
    }
    userScore.textContent = "Your score is: " + user
    computerScore.textContent = "Computer score is: " + computer
}
rock.onclick = () => play("rock")
paper.onclick = () => play("paper")
scissors.onclick = () => play("scissors")