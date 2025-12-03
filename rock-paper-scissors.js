function getComputerChoice () {
    let number = Math.floor(Math.random()*3)
    if (number === 0) {
        return ("rock")
    }
    else if (number === 1) {
        return ("paper")
    }
    else {
        return("scissors")
    }
}

function getHumanChoice(){
   let humanChoice = prompt ("Input rock, paper or scissors")
   return humanChoice
}

let humanScore = 0
let computerScore = 0

function playRound (humanChoice, computerChoice){
    humanChoice= humanChoice.toLowerCase()

    if (humanChoice === "rock"){
        if (computerChoice === "rock"){
            console.log ("Computer choose Rock. Its a tie!")
        }
        else if (computerChoice === "paper"){
            console.log ("Computer choose Paper.You lose! Paper beats Rock")
            computerScore++
        }    
        else {
            console.log ("Computer choose Scissors. You win! Rock beats Scissors")
            humanScore++
        }
    }
    
    else if (humanChoice === "paper"){
        if (computerChoice === "paper"){
            console.log ("Computer choose Paper. Its a tie!")
        }
        else if (computerChoice === "rock"){
            console.log ("Computer choose Rock.You win! Paper beats Rock")
            humanScore++
        }    
        else {
            console.log ("Computer choose Scissors. You lose! Scissors beat Paper")
            computerScore++
        }
    }
    console.log (humanScore, computerScore)
}

playRound(getHumanChoice(),getComputerChoice())