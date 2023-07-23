// Your Age in Days //
function ageInDays() {
  let birthYear = prompt("What year were you born?"); // asks user for birth yr.

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear(); // gets current year from current date
  let age = currentYear - birthYear; // get age
  let days = parseInt(age) * 365; // converts string to int; multiples that by 365 (days in yr)

  let h1 = document.createElement("h1");
  let textAnswer = document.createTextNode("You are " + days + " days old"); // createTextNode creates string from given value
  h1.setAttribute("id", "days");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

// will clear
function reset() {
  document.getElementById("days").remove();
}

// Pokemon Generator //
function generatePoke() {
  let image = document.createElement("img");
  let div = document.getElementById("flex-poke-gen");
  image.src = "https://lorempokemon.fakerapi.it/pokemon/200"; // fetches images from Poké API
  div.appendChild(image); // image will be attached to div
}

// will clear div with ID flex-poke-gen
function pokeReset() {
  document.getElementById("flex-poke-gen").innerHTML = "";
}

// hides RPS game
function hideRpsGame() {
  let hideRps = document.getElementById("flex-box-rps-div");
  hideRps.style.display = "none";
}

hideRpsGame();

// make RPS game appear
function startRpsGame() {
  let rpsDiv = document.getElementById("flex-box-rps-div");
  if (rpsDiv.style.display === "none") {
    rpsDiv.style.display = "block";
  }
}

// Rock, paper, scissors //
function rpsGame(yourChoice) {
  console.log(yourChoice); // will log selection
  let humanChoice, botChoice;
  humanChoice = yourChoice.id; // what choice the human made
  botChoice = numberToChoice(randToRpsInt());
  console.log("Computer choice:", botChoice);
  results = decideWinner(humanChoice, botChoice); // [0,1] human lost | bot won
  console.log(results);
  message = finalMessage(results); // {'message': 'You won!', 'color': 'green'}
  console.log(message);
  rpsFrontEnd(yourChoice.id, botChoice, message);
}

// makes CPU choose randomly
function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice) {
  let rpsDatabase = {
    rock: {
      scissors: 1,
      rock: 0.5,
      paper: 0,
    },
    paper: {
      rock: 1,
      paper: 0.5,
      scissors: 0,
    },
    scissors: {
      paper: 1,
      scissors: 0.5,
      rock: 0,
    },
  };
  let yourScore = rpsDatabase[yourChoice][computerChoice]; // takes your choice & CPU choice [x,x]
  let computerScore = rpsDatabase[computerChoice][yourChoice]; // takes CPU choice & your choice [x,x]

  return [yourScore, computerScore]; // returns correlating score to array
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    // you lost! [0, 1]
    return { message: "You lost!", color: "red" };
  } else if (yourScore === 0.5) {
    // tie [0.5, 0.5]
    return { message: "You tied!", color: "yellow" };
  } else {
    // you won, yay! [1, 0]
    return { message: "You won!", color: "green" };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  // will only show ur choice, CPU choice, and decision msg
  let imagesDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  // remove all the images
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  let humanDiv = document.createElement("div");
  let botDiv = document.createElement("div");
  let messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src = '" +
    imagesDatabase[humanImageChoice] +
    "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"; // box shadow from cssmatic

  botDiv.innerHTML =
    "<img src = '" +
    imagesDatabase[botImageChoice] +
    "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";

  messageDiv.innerHTML =
    "<h1 style='color: " +
    finalMessage["color"] +
    "; font-size: 60px; padding: 30px; '>" +
    finalMessage["message"] +
    "</h1>";

  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
}

// create resetRps() function to reset game and counter

function resetRps() {
  document.getElementById("flex-box-rps-div").innerHTML = "";
} //?

let humanScore = document.createElement("div");
let botScore = document.createElement("div");

humanScore = 0;
botScore = 0;

if (finalMessage === "You lost!") {
  botScore + 1;
} else if (finalMessage === "You won!") {
  humanScore + 1;
} else {
}

humanScore.innerHTML = "<h2 style= 'color'>";
// botScore.innerHTML =

document.getElementById("flex-box-rps-div").appendChild(humanScore);
document.getElementById("flex-box-rps-div").appendChild(botScore);

// create a counter that keeps score of human and bot
