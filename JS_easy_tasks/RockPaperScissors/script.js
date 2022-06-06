const options = [
    {
        name: 'Rock',
        image: './images/rock.png'
    },
    {
        name: 'Scissors',
        image: './images/scissors.png'
    },
    {
        name: 'Paper',
        image: './images/paper.png'
    }
];

const rockCard = document.getElementById("rockCard");
const paperCard = document.getElementById("paperCard");
const scissorsCard = document.getElementById("scissorsCard");
const computersImage = document.querySelector("#computersChoice img");
const computersCardTitle = document.querySelector("#computersChoice .card-title");
const restartBtn = document.getElementById("restartBtn");
const winner = document.getElementById("winner");
let scoreInput = document.getElementById("score");

let score = 0;


function compChoice() {
    let randomNumber;
    randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
};

function compPicture(number) {
    let randomNumber = number;
    computersImage.setAttribute("src", options[randomNumber].image);
    computersCardTitle.innerText = options[randomNumber].name;
    return computersCardTitle.innerText;
};

function scoringForRockBtn(title) {
   let computersCardTitle = title;
if(computersCardTitle === "Rock"){
    winner.innerText= "No one wins";
    winner.style.color = "black";
    scoreInput.innerText = "Score  "+ score;

}else if(computersCardTitle === "Scissors"){
    winner.innerText= "Player won";
    winner.style.color = "green";
    score++;
    scoreInput.innerText = "Score  "+ score;
}else if(computersCardTitle === "Paper"){
    winner.innerText= "Computer won";
    winner.style.color = "red";
    score--;
    scoreInput.innerText = "Score  "+ score;
}
};


function scoringForPaperBtn(title) {
    let computersCardTitle = title;
 if(computersCardTitle === "Paper"){
     winner.innerText= "No one wins";
     winner.style.color = "black";
     scoreInput.innerText = "Score  "+ score;
 
 }else if(computersCardTitle === "Rock"){
     winner.innerText= "Player won";
     winner.style.color = "green";
     score++;
     scoreInput.innerText = "Score  "+ score;
 }else if(computersCardTitle === "Scissors"){
     winner.innerText= "Computer won";
     winner.style.color = "red";
     score--;
     scoreInput.innerText = "Score  "+ score;
 }
};



 function scoringForScissorsBtn(title) {
    let computersCardTitle = title;
 if(computersCardTitle === "Scissors"){
     winner.innerText= "No one wins";
     winner.style.color = "black";
     scoreInput.innerText = "Score  "+ score;
 
 }else if(computersCardTitle === "Paper"){
     winner.innerText= "Player won";
     winner.style.color = "green";
     score++;
     scoreInput.innerText = "Score  "+ score;
 }else if(computersCardTitle === "Rock"){
     winner.innerText= "Computer won";
     winner.style.color = "red";
     score--;
     scoreInput.innerText = "Score  "+ score;
 };

};



rockCard.onclick = function () {
    let number = compPicture(compChoice());
    scoringForRockBtn(number);
};

paperCard.onclick = function () {
    let number = compPicture(compChoice());
    scoringForPaperBtn(number);
};

scissorsCard.onclick = function () {
    let number = compPicture(compChoice());
    scoringForScissorsBtn(number);
    
};

restartBtn.onclick = function(){
    computersImage.setAttribute("src", "./images/default.png");
    score= 0;
    scoreInput.innerText = "Score  "+ score;
    winner.classList.add("hide")
};

