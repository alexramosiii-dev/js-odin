function getComputerChoice() {
    let pick = ["rock", "paper", "scissor"];
    let selection = pick[Math.floor(Math.random() * 3)];
    
    document.querySelector("#computer-box").style.backgroundImage = `url(./images/${selection}.png)`
    
    return selection;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection) {
        return "tie";
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

function playGame(){
    let announcer = document.querySelector("#announcer");
    
    if (round < 4){
        let playerSelection = document.querySelector("#player-box").dataset.weapon;
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        switch (result){
        case "player":
            announcer.textContent = `${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
            playerScore.textContent++;
            round++;
            break;
        case "computer":
            announcer.textContent = `${playerSelection.toUpperCase()} is beaten by ${computerSelection.toUpperCase()}`
            computerScore.textContent++;
            round++;
            break;
        case "tie":
            announcer.textContent = "Same weapon. No point for both!"
            break;
        default:
            announcer.textContent = "Invalid weapon"
            break;
        }
        if(round > 3) announcer.textContent = `Game has ended ${(playerScore.textContent>computerScore.textContent)?"Player":"Computer"} won the game.`
    }
}

//change player box when a weapon is selected
let weapons = document.querySelectorAll(".container-weapon > button");
weapons.forEach(weapon => weapon.addEventListener("click",
    (e) => {
        let box = document.querySelector("#player-box");
        box.style.backgroundImage = getComputedStyle(e.target).backgroundImage;
        box.dataset.weapon = e.target.dataset.weapon
    }
))

let playbtn = document.querySelector("#btn-play");
playbtn.addEventListener("click", playGame);

let playerScore = document.querySelector("#score-text-player");
let computerScore = document.querySelector("#score-text-computer");
let round = 1;

document.querySelector("#btn-reset").addEventListener("click", e => location.reload())

