const piedra = document.getElementById("rock");
const papel = document.getElementById("paper");
const tijeras = document.getElementById("scissors");

let humanScore = 0;
let computerScore = 0;

piedra.addEventListener("click",()=>
    playRound("rock",getComputerChoice())
 );
papel.addEventListener("click",()=>
    playRound("paper",getComputerChoice())
 );
tijeras.addEventListener("click",()=>
    playRound("scissors",getComputerChoice())
 );




 
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
};




function playRound (humanChoice, computerChoice){
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

    else {
        if (computerChoice === "scissors"){
            console.log ("Computer choose Scissors. Its a tie!")
        }
        else if (computerChoice === "paper"){
            console.log ("Computer choose Paper.You win! Scissors beat Paper")
            humanScore++
        }    
        else {
            console.log ("Computer choose rock. You loose! Rock beats Scissors")
            computerScore++
        }
    }
    console.log("Your current score:",humanScore, "Computer current score:",computerScore)
};

