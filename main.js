
GameChoices = ["Paper", "Rock", "Scissors"]

function getComputerChoice(){
    // Get a random number between 0-9 
    const num = Math.floor(Math.random() * 10) + 1;

    // return Rock, Paper, Scissors depending on the random number
    if (num <= 3){
        return "Paper"
    }else if (num > 3 && num <= 6){
        return "Rock"
    }else{
        return "Scissors"
    }   
};


function playerSelection() {

    const userchoice = prompt("What do you Choose ?  (Rock, Paper or Scissors)");
    const prettychoice = makePretty(userchoice);

    if (!GameChoices.includes(prettychoice)){
        console.log("answer was INcorrect")
    }else{
        return prettychoice
    }
};

function makePretty (text) {

    let temptext = text.toLowerCase().slice(1, 8)
    let firstletter = text.slice(0, 1).toUpperCase()

    return firstletter + temptext
};

function checkWinner(userchoice, compchoice){

    // Rock beats "Scissors", "Scissors" beats Paper, Paper beats Rock 
    // 0 = User wins, 1 = Comp wins, 2 = Tie


    if (userchoice === compchoice){
        return 2
    }
    else if (userchoice === "Paper"){
        if (compchoice === "Rock"){
            return "Paper beats Rock, User wins"
        }
        return "Scissors beats Paper, Comp wins"
    }
    else if (userchoice = "Rock"){
        if (compchoice === "Scissors"){
            return "Rock beats Scissors, User wins"
        }
        return "Paper beats Rock, Comp wins"
    }
    else{
        if (compchoice === "Paper"){
            return "Scissors beats Paper, User wins"
        }
        return "Rock beats Scissors, Comp wins"
    }


}

