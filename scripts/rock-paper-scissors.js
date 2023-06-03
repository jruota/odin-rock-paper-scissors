const winningScore = 3;

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i <= 4; i++) {
    const playerSelection = prompt(
      "Make your selection (Rock, Paper, Scissors): "
    );

    /* for testing */
    /* 
    const playerSelection = (function () {
      const index = Math.floor(Math.random() * 4);
      if (index === 0) return "Rock";
      if (index === 1) return "Paper";
      if (index === 2) return "Scissors";
      if (index === 3) return "WrOnG iNpUt";
    })(); */

    let result = playRound(playerSelection, getComputerChoice());

    /* player gave wrong input */
    if (result === "wrong input") {
      /* reset round counter */
      i--;
      continue;
    }

    console.log(result);

    if (result.toLowerCase().startsWith("you win")) {
      ++playerScore;
    }

    if (result.toLowerCase().startsWith("you lose")) {
      ++computerScore;
    }

    if (result.toLowerCase().startsWith("no winner")) {
      /* reset round counter */
      i--;
      console.log("Repeat round.");
    }

    console.log(
      "The current score:" +
        `\n\tYOU:\t\t${playerScore}` +
        `\n\tCOMPUTER:\t${computerScore}`
    );

    if (playerScore >= winningScore || computerScore >= winningScore) {
      console.log(gameOver(playerScore, computerScore));
      return;
    }
  }

  console.log(gameOver(playerScore, computerScore));
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
  if (playerSelection === computerSelection) {
    return (
      "No winner or loser. " +
      playerSelection +
      " and " +
      computerSelection +
      " are equal."
    );
  }

  /* user gives wrong input */
  if (
    playerSelection != "Rock" ||
    playerSelection != "Paper" ||
    playerSelection != "Scissors"
  ) {
    console.log(`There is no ${playerSelection}. Choose something else.`);
    return "wrong input";
  }
}

function gameOver(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return (
      "Congratulations, YOU WIN!" +
      `\n\tYou win by ${playerScore - computerScore} points.`
    );
  }

  if (computerScore > playerScore) {
    return `GAME OVER. You lose by ${computerScore - playerScore}`;
  }

  return "GAME OVER. No winner.";
}

function getComputerChoice() {
  const index = Math.floor(Math.random() * 3);

  if (index === 0) return "Rock";
  if (index === 1) return "Paper";
  if (index === 2) return "Scissors";
}

/* TESTS #################################################################### */

/* testing getComputerChoice */
/* console.log("testing 'getComputerChoice' ...");
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(); */

/* testing playRound */
/* testing equal selections */
/* console.log("testing 'playRound' – equal selections ...");
console.log(playRound("rock", "Rock"));
console.log(playRound("PAPER", "Paper"));
console.log(playRound("ScissorS", "Scissors"));
console.log(); */

/* user wins */
/* console.log("testing 'playRound' – user wins ...");
console.log(playRound("rock", "Scissors"));
console.log(playRound("PaPeR", "Rock"));
console.log(playRound("sCiSsOrS", "Paper"));
console.log(); */

/* user loses */
/* console.log("testing 'playRound' – user loses ...");
console.log(playRound("rock", "Paper"));
console.log(playRound("PaPeR", "Scissors"));
console.log(playRound("sCiSsOrS", "Rock"));
console.log();  */

game();
