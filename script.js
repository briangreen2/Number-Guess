let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// This function gives us a integer between 1 - 9
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
  }
// ================================================
 
// This function compares how close the human and computer guesses aer to the secret target number using Math.abs()
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess)
    const computerDifference = Math.abs(targetGuess - computerGuess)
    return humanDifference <= computerDifference;
  }
  
// ====================================================
 
// This function updates both the human and computer scores if they win
const updateScore = winner => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }
// ==============================

// This function adds 1 to the next round 
 const advanceRound = () => currentRoundNumber++;

