const items = [
    {
        image: './images/cat.png',
        answers: ['cat', 'kitty']
    },
    {
        image: './images/dog.jpeg',
        answers: ['dog']
    },
    {
        image: './images/tree.png',
        answers: ['tree', 'scape']
    },
    {
        image: './images/laptop.webp',
        answers: ['laptop', 'computer']
    },
    {
        image: './images/bird.png',
        answers: ['bird', 'birds']
    }
];

const result = document.getElementById("result");
const image = document.getElementById("image");
const answerInput = document.getElementById("answerInput");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
let score= 0;
let index = 0;

function isCorrect(){
       
        

        if(items[index].answers.includes(answerInput.value)){
        console.log("Tocan odgovor");
        score++;
        result.innerText = "Score: " + score;
        }
           
            console.log(items[index].answers.includes(answerInput.value));
            result.innerText = "Score: " + score;
    
    


     
} 


nextBtn.onclick = function(){
    if(index < items.length){
    isCorrect();
    index++;

    }
    if(index == items.length){
        result.classList.remove("hide");
    }
    answerInput.value= "";
    image.setAttribute("src", items[index].image);
}

restartBtn.onclick = function(){
    image.setAttribute("src", items[0].image);
    index = 0;
    score = 0;
    result.classList.add("hide");
}

function loadStart(){
    image.setAttribute("src", items[0].image);
}

loadStart();