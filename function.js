let ROCK = 'rock';
let PAPER = 'paper';
let SCISSORS = 'scissors';
let ROCK_PATH = 'https://i.ibb.co/M5KX6XD/rock128.png';
let PAPER_PATH = 'https://i.ibb.co/QmCC4r1/paper128.png';
let SCISSORS_PATH = 'https://i.ibb.co/CnL8Zr6/scissors128.png';
let CPU_WINS = 0;
let PLAYER_WINS = 0;
document.getElementById("playAgain").style.visibility="hidden";
document.getElementById("playerChoice").style.visibility="hidden";
document.getElementById("cpuChoice").style.visibility="hidden";


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
    if(winRules[userChoice] === cpuChoice){
        return 2;
    }else{
        return 0;
    }
}

function playGame(userChoice){
        document.getElementById("playerChoice").style.visibility="visible";
        document.getElementById("cpuChoice").style.visibility="visible";
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
        switch(result){
            case 0:
                CPU_WINS += 1;
                break;
            case 2:
                PLAYER_WINS += 1;
                break;
        }
        document.getElementById("scoreBoard").textContent = PLAYER_WINS + " - " + CPU_WINS;
        checkNext();
}

function checkNext(){
    if(CPU_WINS >= 3 || PLAYER_WINS >= 3){
        document.getElementById("ROCK").style.visibility="hidden";
        document.getElementById("PAPER").style.visibility="hidden";
        document.getElementById("SCISSORS").style.visibility="hidden";
        document.getElementById("playAgain").style.visibility="visible";
        if(PLAYER_WINS === 3){
            document.getElementById("resultLabel").textContent = "You Won!";
            document.getElementById("resultLabel").style.color = "#26c808";
            confetti({
                particleCount: 1000,
                spread: 200,
                origin: { y:1,x:0}
            });
            confetti({
                particleCount: 1000,
                spread: 200,
                origin: { y:1,x:1}
            });
            confetti({
                particleCount: 500,
                spread: 100,
                origin: { y:1.2,x:0.5}
            });
        }else{
            document.getElementById("resultLabel").textContent = "CPU Won!";
            document.getElementById("resultLabel").style.color = "#FF0000";
        }
    }
}

function playAgain(){
    document.getElementById("ROCK").style.visibility="visible";
    document.getElementById("PAPER").style.visibility="visible";
    document.getElementById("SCISSORS").style.visibility="visible";
    document.getElementById("playAgain").style.visibility="hidden";
    document.getElementById("resultLabel").textContent = "";
    document.getElementById("playerChoice").style.visibility="hidden";
    document.getElementById("cpuChoice").style.visibility="hidden";
    PLAYER_WINS = 0;
    CPU_WINS = 0;
    document.getElementById("scoreBoard").textContent = PLAYER_WINS + " - " + CPU_WINS;

}


