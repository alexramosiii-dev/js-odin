function getComputerChoice() {
    let pick = ["rock", "paper", "scissor"];
    let selection = pick[Math.floor(Math.random() * 3)];
    return selection;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection) {
        return "Tie";
    }else if (playerSelection == "rock") {
        return (computerSelection == "scissor") ? "player" : "computer";
    }else if (playerSelection == "paper") {
        return (computerSelection == "rock") ? "player" : "computer";
    }else if (playerSelection == "scissor") {
        return (computerSelection == "paper") ? "player" : "computer";
    }else {
        return null;
    }
}

function game(){
    let playerSelection;
    let computerSelection;
    let result;

    let playerScore = 0;
    let computerScore = 0;

    let round = 0;
    while (round < 5) {
        playerSelection = prompt().toLowerCase();
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);

        if(result === "player") {
            playerScore++;
            console.log("---Player Wins This Round!---");
        }
        else if(result == "computer") {
            computerScore++;
            console.log("---Computer Wins This Round!---");
        }
        else {
            console.log("---This Round Is Not Valid! No points for Each---");
            continue;
        }

        console.log(`Player Score: ${playerScore}`)
        console.log(`Computer Score: ${computerScore}`)
        round++;
    }

    console.log((computerScore > playerScore) ? `\n\n\n===COMPUTER WINS! ${computerScore} : ${playerScore}===`:`===PLAYER WINS! ${playerScore} : ${computerScore}===`);
}


game();

