let userScore = 0;
let compScore = 0;
let userWin;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#m");
const userscoreN = document.querySelector('#user-score');
const compscoreN = document.querySelector('#comp-score');

const generateCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    message.innerText = `You win! 🥳 ${userChoice} beats ${compChoice}!`;
    message.style.backgroundColor = "green";
    userScore++;
    userscoreN.innerText=userScore;
  } else {
    message.innerText = `You lost! 😭 ${compChoice} beats ${userChoice}!`;
    message.style.backgroundColor = "red";
    compScore++;
    compscoreN.innerText=compScore;
  }
};

const draw = () => {
  message.innerText = "It's a draw 🙄";
  message.style.backgroundColor = "yellow";
};

const playGame = (userChoice) => {
  
  const compChoice = generateCompChoice();
  
  if (userChoice === compChoice) {
    draw();
  } else {
    if (userChoice === "rock") {
      // scissors , paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // paper, rock
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
