let ROCK = 'rock';
let PAPER = 'paper';
let SCISSORS = 'scissors';
let ROCK_PATH = 'https://i.ibb.co/M5KX6XD/rock128.png';
let PAPER_PATH = 'https://i.ibb.co/QmCC4r1/paper128.png';
let SCISSORS_PATH = 'https://i.ibb.co/CnL8Zr6/scissors128.png';

function changeImage(path){
    document.getElementById("playerChoice").src = path
}

function randomChoice(){
    const choices = [ROCK,PAPER,SCISSORS];
    let random = Math.floor(Math.random() * 3);
    return choices[random];
}

function isWin(cpuChoice,userChoice){
    if(userChoice === cpuChoice){
        return 1;
    }
    const winRules = {
        "rock": SCISSORS,
        "paper": ROCK,
        "scissors": PAPER
    };
    console.log("Rule applied : " + winRules[userChoice]);
    if(winRules[userChoice] === cpuChoice){
        return 2;
    }else{
        return 0;
    }
}

function playGame(userChoice){
    cpuChoice = randomChoice();
    let result = isWin(cpuChoice,userChoice);
    const paths = {
        "rock": ROCK_PATH,
        "paper": PAPER_PATH,
        "scissors": SCISSORS_PATH
    };
    let playerImagePath = paths[userChoice];
    let cpuImagePath = paths[cpuChoice];
    document.getElementById("playerChoice").src = playerImagePath;
    document.getElementById("cpuChoice").src = cpuImagePath;
    console.log("Result : " + result);
    console.log("Player : " + userChoice + " CPU : " + cpuChoice);
    switch(result){
        case 0:
            console.log("CPU Won!");
            break;
        case 1:
            console.log("Draw");
            break;
        case 2:
            console.log("You Won!");
            break;

    }
}
