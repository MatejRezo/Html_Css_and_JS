const humanYearsError = document.getElementById("humanYearsError");
const dogImg = document.getElementById("dogImg");
const catImg = document.getElementById("catImg");

let humanYears = document.getElementById("humanYears");
let calculateBtn = document.getElementById("calculateBtn");
let dogYears = document.getElementById("dogYears");
let catYears = document.getElementById("catYears");

// Cat Years
// - 15 cat years for first year.
// - +9 cat years for second year.
// - +4 cat years for each year after that

function calculate(){
    humanYearsError.classList.add("hide");
 if(humanYears.value == 1){
     catYears = 15;
     dogYears = 15;
 }else if(humanYears.value == 2){
     catYears = 24;
     dogYears = 24;

 }else if(humanYears.value > 2){
    catYears = 24 + ((humanYears.value - 2)* 4); 
    dogYears = 24 + ((humanYears.value - 2)* 5);
 }else{
     humanYearsError.classList.remove("hide");
 };
 
 if(catYears <= 24){
    dogImg.setAttribute("src","./images/babyDog.webp");
    catImg.setAttribute("src","./images/babycat.png");

 }else if(catYears>24 && catYears<=59){
    catImg.setAttribute("src","./images/adultCat.gif");
 }else if(catYears>44){
    catImg.setAttribute("src","./images/oldCat.jpeg");
 };

 if(dogYears>24 && dogYears<=59){
    dogImg.setAttribute("src", "./images/adultDog.png");
 }else if(dogYears > 59){
    dogImg.setAttribute("src", "./images/oldDog.png");
 };
};


calculateBtn.onclick = function (){
    calculate();
};

