Choices = ["ROCK", "PAPER", "SCISSOR"];

function getComputerChoice(){
    

    return Choices[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection){

    

    WinRock = "Rock Beats Scissor, ";
    WinPaper = "Paper Beats Rock, ";
    WinScissor = "Scissor Beats Paper, ";

    YouLose = "You Lose!";
    YouWin = "You Win!";
    

    if(playerSelection == "ROCK" && computerSelection == "PAPER"){
        console.log(WinPaper + YouLose);
        return 0;
    }else if(playerSelection == "ROCK" && computerSelection == "SCISSOR"){
        console.log(WinRock+ YouWin);
        return 1;   
    }
    else if(playerSelection == "PAPER" && computerSelection == "SCISSOR"){
        console.log(WinScissor + YouLose);
        return 0;   
    }
    else if(playerSelection == "PAPER" && computerSelection == "ROCK"){
        console.log(WinPaper + YouWin);
        return 1;   
    }
    else if(playerSelection == "SCISSOR" && computerSelection == "ROCK"){
        console.log(WinRock + YouLose);
        return 0;   
    }
    else if(playerSelection == "SCISSOR" && computerSelection == "PAPER"){
        console.log(WinScissor + YouWin);
        return 1;   
    }
    else if(playerSelection === computerSelection){
        console.log("You are Tied!");
        return 0;  
    }
    else{
        console.log("Invalid Input/Choices!");
        return 0;
    }
}

function game(){

    score = 0;

    for(let i = 1; i <= 5; i++){
        MySelection = prompt("Enter your Choice [Rock, Paper, Scissor]").toUpperCase();

        ComputerChoice = getComputerChoice();

        console.log(`Yours : ${MySelection} | Computer: ${ComputerChoice}`);
        score += playRound(MySelection, ComputerChoice);
    }

    score > 2? console.log(`You Won!, You Scored ${score} out of 5 matches`): console.log(`You Lose!, You Scored ${score} out of 5 matches`);
}

game();