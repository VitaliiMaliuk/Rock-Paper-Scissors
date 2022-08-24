
function game() {
  let compArray = ["Rock", "Paper", "Scissors"];
  let countPlayer = 0;
  let countComp = 0;
  let gameWinner;
  for (let i = 0; i < 5; i++) {
    let playerRandomWord = prompt('Ставка игрока').toLowerCase();
    let compRandomWord =
      compArray[Math.floor(Math.random() * compArray.length)].toLowerCase();
    if (
      (playerRandomWord === "rock" && compRandomWord === "rock") ||
      (playerRandomWord === "paper" && compRandomWord === "paper") ||
      (playerRandomWord === "scissors" && compRandomWord === "scissors")
    ) {
      countPlayer += 0;
      countComp += 0;
    } else if (
      (playerRandomWord === "rock" && compRandomWord === "scissors") ||
      (playerRandomWord === "paper" && compRandomWord === "rock") ||
      (playerRandomWord === "scissors" && compRandomWord === "paper")
    ) {
      countPlayer += 1;
    } else if (
      (playerRandomWord === "rock" && compRandomWord === "paper") ||
      (playerRandomWord === "paper" && compRandomWord === "scissors") ||
      (playerRandomWord === "scissors" && compRandomWord === "rock")
    ) {
      countComp += 1;
    }
    console.log(countPlayer);
    console.log(countComp);
  }
  if (countPlayer > countComp) {
    return (gameWinner = "Player is a Winner");
  } else if (countPlayer < countComp) {
    return (gameWinner = "Comp is a Winner");
  } else if (countPlayer === countComp) {
    return (gameWinner = "Drow!");
  }
}

console.log(game());
