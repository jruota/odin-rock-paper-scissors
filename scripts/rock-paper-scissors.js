function getComputerChoice() {
  const index = Math.floor(Math.random() * 3);

  if (index === 0) return "Rock";
  if (index === 1) return "Paper";
  if (index === 2) return "Scissors";
}

/* TESTS #################################################################### */

/* testing getComputerChoice */
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
