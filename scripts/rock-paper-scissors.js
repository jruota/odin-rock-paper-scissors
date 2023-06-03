function getComputerChoice() {
  const index = Math.floor(Math.random() * 3);

  if (index === 0) return "Rock";
  if (index === 1) return "Paper";
  if (index === 2) return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  /* make playerSelection case insensitive */
  playerSelection =
    playerSelection.substring(0, 1).toUpperCase() +
    playerSelection.toLowerCase().substring(1);

  /* collect all cases in which the user wins */
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return (
      "You win! " +
      (playerSelection === "Scissors"
        ? playerSelection + " beat "
        : playerSelection + " beats ") +
      computerSelection +
      "!"
    );
  }

  /* collect all cases in which the user loses */
  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    return (
      "You lose! " +
      (computerSelection === "Scissors"
        ? computerSelection + " beat "
        : computerSelection + " beats ") +
      playerSelection +
      "!"
    );
  }

  /* draws */
  return (
    "No winner or loser. " +
    playerSelection +
    " and " +
    computerSelection +
    " are equal."
  );
}

/* TESTS #################################################################### */

/* testing getComputerChoice */
console.log("testing 'getComputerChoice' ...");
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log();

/* testing playRound */
/* testing equal selections */
console.log("testing 'playRound' – equal selections ...");
console.log(playRound("rock", "Rock"));
console.log(playRound("PAPER", "Paper"));
console.log(playRound("ScissorS", "Scissors"));
console.log();

/* user wins */
console.log("testing 'playRound' – user wins ...");
console.log(playRound("rock", "Scissors"));
console.log(playRound("PaPeR", "Rock"));
console.log(playRound("sCiSsOrS", "Paper"));
console.log();

/* user loses */
console.log("testing 'playRound' – user loses ...");
console.log(playRound("rock", "Paper"));
console.log(playRound("PaPeR", "Scissors"));
console.log(playRound("sCiSsOrS", "Rock"));
console.log();
