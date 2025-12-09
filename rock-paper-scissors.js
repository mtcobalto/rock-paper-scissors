const btns = document.querySelectorAll("button");
const buttonContainer = document.getElementById("button-container");
const results = document.getElementById("results");
const narrator=document.createElement("p");
const resultado = document.createElement("p");
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;
let lastScore=5;


btns.forEach(element=>{
    element.addEventListener("click",function (){ 
        roundCounter++;
        playRound(element.id,getComputerChoice());
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
        narrator.textContent=("Computer choose "+computerChoice+".You win! Hell yeah, " + humanChoice+" beats " +computerChoice +". Well done son.")
        humanScore++
    }  

    else {
        narrator.textContent=("Computer choose "+computerChoice+".You loose! Should have known that " + computerChoice+" beats " +humanChoice+", you clown.")
        computerScore++
    }  

    results.appendChild(narrator);
    resultado.textContent = "Round " + roundCounter + ". Your current score: " + humanScore + " Computer current score: " + computerScore;
    results.appendChild(resultado);

    if ((humanScore==lastScore)||(computerScore==lastScore)){
       gameEnd();
    }
};

 function gameEnd(){

    btns.forEach(element=> element.style.display="none");
    const newGame = document.createElement("button");
    newGame.classList.add("button-29")
    newGame.textContent="Emnpezamos de nuevo?"
    buttonContainer.appendChild(newGame);
    const ganador = document.createElement("p")
    if(humanScore==lastScore){
        ganador.textContent="Ganaste.... de quien menos lo esperábamos. Felicidades"
    }

    else {
        ganador.textContent="PC WINS YOU BAFOOON, HOW COULD YOU EVER THINK YOU COULD WINN"
    }
    results.appendChild(ganador)

    newGame.addEventListener("click", function(){
        btns.forEach(element=>{
        element.style.display="inline-flex";
        });
        ganador.remove();
        narrator.remove();
        resultado.remove();
        newGame.remove();
    });
    humanScore=0;
    computerScore=0;
    roundCounter=0;
};
