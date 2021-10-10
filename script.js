let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Genera el número secreto
function generateTarget(){
    let secretNumber=Math.floor(Math.random() * 9) + 0;
    return secretNumber;
}

// Encontrar al ganador
function compareGuesses(currentHumanGuess,computerGuess,target){

    let victoria;

    humanResult=Math.abs(currentHumanGuess-target);
    computerResult=Math.abs(computerGuess-target);    

    if (humanResult==0)victoria=true;
    else if(humanResult<=computerResult)victoria=true;
    else victoria=false;
    
    return victoria;
}

// Actualizar puntuación
function updateScore(winner){

    if (winner=="human")humanScore++;
    else computerScore++;

}

// Avanzar de ronda
function advanceRound(){
    currentRoundNumber++;
}
