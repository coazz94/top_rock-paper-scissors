document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll("button").forEach(element => {
        element.onclick = function () {
            // Get the Choice of the Comp (random)
            let compchoice = getComputerChoice();
            // Get The winner of the Battle
            let result = getWinner(element.innerHTML, compchoice);
            // Get The winner of the Battle
            updatetext(result, compchoice, element.innerHTML);
            // Get The winner of the Battle
            checkforWinner();
            
        };   
    });
});


function getComputerChoice(){
    // Get a random number between 0-9 
    const num = Math.floor(Math.random() * 10) + 1;

    // return Rock, Paper, Scissors depending on the random number
    if (num <= 3){
        return "Paper";
    }else if (num > 3 && num <= 6){
        return "Rock";
    }else{
        return "Scissors";
    }   
}

function playerSelection() {
    
    // Possoible Choices the user can choose
    const gameChoices = ["Paper", "Rock", "Scissors"];
    // Get the Input and make it pretty
    const userchoice = prompt("What do you Choose ?  (Rock, Paper or Scissors)");
    let prettychoice = makePretty(userchoice);

    // If the answer is in the avaiable Game choices return the pretty Choice, else Error
    if (!gameChoices.includes(prettychoice)){
        console.log("answer was INcorrect");
    }
    return prettychoice;
}

function makePretty (text) {

    // Take the text make it lower, and make the first letter capitalized
    let temptext = text.toLowerCase().slice(1, 8);
    let firstletter = text.slice(0, 1).toUpperCase();

    return firstletter + temptext;
}

function getWinner(userchoice, compchoice){

    // Rock beats "Scissors", "Scissors" beats Paper, Paper beats Rock 
    // 0 = Comp wins, 1 = User wins, 2 = Tie


    if (userchoice === compchoice){
        return "Tie";
    }
    else if (userchoice === "Paper"){
        if (compchoice === "Rock"){
            updateresult(1);
            return "Paper beats Rock, User wins";
        }
        updateresult(0);
        return "Scissors beats Paper, Comp wins";
    }
    else if (userchoice === "Rock"){
        if (compchoice === "Scissors"){
            updateresult(1);
            return "Rock beats Scissors, User wins";
        }
        updateresult(0);
        return "Paper beats Rock, Comp wins";
    }
    else{
        if (compchoice === "Paper"){
            updateresult(1);
            return "Scissors beats Paper, User wins";
        }
        updateresult(0);
        return "Rock beats Scissors, Comp wins";
    }


}

function game(num){
    // A function to play the Game X times
    for(let i = 0; i < num; i++ ){
        getWinner(playerSelection(), getComputerChoice());
    }
}

function updatetext(result, compchoice, userchoice){
    // Update the Html Values
    document.querySelector(".firsttext").innerHTML = result;
    document.querySelector("#compchoice").innerHTML = compchoice;
    document.querySelector("#userchoice").innerHTML = userchoice;
    
}

async function updateresult(winner){
    
    // Update the result on the Page
    // 0 Comp was winner, 1 User
 
    if (winner == 0){
        let score = parseInt(document.querySelector("#compscore").innerHTML);
        document.querySelector("#compscore").innerHTML = score + 1;

    }else if (winner == 1){
        let score = parseInt(document.querySelector("#userscore").innerHTML);
        document.querySelector("#userscore").innerHTML = score + 1;
    }


}

function checkforWinner(){
    // Take both of the Scores and see if one has reached 5, if so alert a winner and reload the Page
    document.querySelectorAll(".score").forEach(score => {
        if (score.innerHTML >= 5){
            if (score.id == "userscore"){
                alert("USER HAS WON");
                window.location.reload();
            }else if (score.id == "compscore"){
                alert("PC has won");
                window.location.reload();
            }
        }
    });
}