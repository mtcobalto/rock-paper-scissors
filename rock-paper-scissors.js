const btns = document.querySelectorAll("button");
const results = document.getElementById("results");
const narrator=document.createElement("p");
const resultado = document.createElement("p");

let humanScore = 0;
let computerScore = 0;
let roundCounter = 1;

btns.forEach(element=>{
    element.addEventListener("click",function (){ 
    playRound(element.id,getComputerChoice());
    roundCounter++;

    });
});


function getComputerChoice () {
    const choices = ["rock","paper","scissors"]
    let number = Math.floor(Math.random()*3)
    return choices[number];
};


function playRound (humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        narrator.textContent=("Computer choose " +  computerChoice+ ". Its a tie!")
    }
    
    else if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper")) {

        narrator.textContent=("Computer choose "+computerChoice+".You win! " + humanChoice+" beats " +computerChoice +". Well done son.")
        humanScore++
    }  

    else {
        narrator.textContent=("Computer choose "+computerChoice+".You loose! " + humanChoice+" beats " +computerChoice+" you clown.")
        computerScore++
    }  


    results.appendChild(narrator);
    resultado.textContent = "Round " + roundCounter + ". Your current score: " + humanScore + " Computer current score: " + computerScore;
    results.appendChild(resultado);


};

