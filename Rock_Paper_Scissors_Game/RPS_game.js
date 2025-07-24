//Math.random()*n //generate number in between 0 to (n-1).factions
//for example, Math.random()*3 will generate number in between 0 to 2.99999...

//Math.floor() discard the decimal part of the number
//for example, Math.floor(2.9999) will return 2


let userScore = 0;
let compScore = 0;

let msg = document.querySelector('#msg');
let user_score = document.querySelector('#user-score');
let comp_score = document.querySelector('#comp-score');

const choices = document.querySelectorAll ('.choice');

const genCompChoice = () =>{
    let options = ['rock','paper','scissors'];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () =>{
    msg.innerText = "It's a draw!";
    msg.style.backgroundColor = "blue";
    msg.style.color = "black";
    msg.style.border = "9px groove black";
    msg.style.fontWeight = "bold";
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        user_score.innerText = userScore;
        msg.style.backgroundColor = "green";
        msg.style.color = "black";
        msg.style.border = "9px groove black";
        msg.style.fontWeight = "bold";
    }else{
        compScore++;
        msg.innerText = `you lose! ${compChoice} beats your ${userChoice}`;
        comp_score.innerText = compScore;
        msg.style.backgroundColor = "red";
        msg.style.color = "black";
        msg.style.border = "9px groove black";
        msg.style.fontWeight = "bold";
    };
};

const playGame = (userChoice) =>{
    console.log("user choice =",userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice =", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
            userWin = (compChoice ==='scissors')? true : false;
        }else if(userChoice === 'paper'){
            userWin = (compChoice ==='rock')? true : false;
        }else{
            userWin = (compChoice ==='paper')? true : false;
        }
        showWinner(userWin,userChoice,compChoice);
     };
};
choices.forEach((choice) => {
    choice.addEventListener('click', ()=>{
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});
