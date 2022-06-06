const calculateSumButton = document.querySelector("#calculator button");
const highlightLinksButton = document.querySelector("#highlight-links button");
const informationButton = document.querySelector("#user-data button");
const rollDiceButton = document.querySelector("#statistics button ");
const userTargetNumber = document.getElementById("user-target-number")
let calculatedSum = document.getElementById("calculated-sum");
let totalRolls = document.getElementById("output-total-rolls");
let targetNumberOutput = document.getElementById("output-target-number");
let diceRolls = document.getElementById("dice-rolls");

function calculateSum() {
    const userNumberInputElement = document.getElementById("user-number");
    const userNumber = userNumberInputElement.value;
    let sum = 0;
    for (let i = 0; i <= userNumber; i++) {
        sum += i;
    }
    calculatedSum.style.display = "block"
    calculatedSum.textContent = sum;
}

function highlightLinks() {
    const anchorElements = document.querySelectorAll("#highlight-links a");
    for (el of anchorElements) {
        el.classList.add("highlight")
    }
}

const dummyUserData = {
    firstName: "Matej",
    secondName: "Rezo",
    age: 24,
    jobTitle: "Programmer",
};



function dummyText() {
    const outputData = document.getElementById("output-user-data");
    outputData.innerHTML = "";

    for (const key in dummyUserData) {
        let newListItem = document.createElement("li");
        const outputText = key.toUpperCase() + "; " + dummyUserData[key]
        newListItem.textContent = outputText;
        outputData.append(newListItem);

    }

    newListItem.append = document.createTextNode("asdasdasdasdad");
    outputData.append(newListItem);

}

function rollDice() {
    let roleNumber;
    let timesRolled = 0;
    let targetNumber = userTargetNumber.value;
    diceRolls.innerText= " "

    while (roleNumber != targetNumber) {
        roleNumber = Math.floor(Math.random() * 6) + 1;
        timesRolled += 1;
        const newRollListElement = document.createElement("li"); 
        const outputText = "Roll" + timesRolled + ": " + roleNumber;
        diceRolls.append(newRollListElement);
        newRollListElement.textContent = outputText;
        totalRolls.innerText = timesRolled;
        targetNumberOutput.innerText = targetNumber;
    }
}




rollDiceButton.onclick = () => {
    rollDice()
}

informationButton.onclick = () => {
    dummyText();
}

highlightLinksButton.onclick = () => {
    highlightLinks()
}


calculateSumButton.onclick = () => {
    calculateSum()
}





