let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random()*10);

const compareGuesses = (humanGuess,computerGuess,targetNumber) => {
  let result1 = Math.abs(targetNumber-humanGuess);
  let result2 = Math.abs(targetNumber-computerGuess);
  if(result1 <= result2)
  	return true;
  else
  	return false;
}

const updateScore = (winner) =>{
  if(winner==='human')
    humanScore++;
  else if(winner==='computer')
    computerScore++;
}

function advanceRound(){
  currentRoundNumber++;
}