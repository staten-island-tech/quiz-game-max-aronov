import { DOMSelectors } from "./quiz/dom-selectors";
import { questionsCache } from "./quiz/questions";
import { confettiGen } from "./particles";

let currentQuestion = 0;
let pickedChoice;
let score = 0;

const lastQuestion = questionsCache.length - 1;

const buttonStartQuiz = DOMSelectors.buttonStartQuiz;
const buttonExitQuiz = DOMSelectors.buttonExitQuiz;

const questionText = DOMSelectors.questionText;

const choiceButton1 = DOMSelectors.choice1button;
const choiceButton2 = DOMSelectors.choice2button;
const choiceButton3 = DOMSelectors.choice3button;
const choiceButton4 = DOMSelectors.choice4button;

const choiceText1 = DOMSelectors.choiceText1;
const choiceText2 = DOMSelectors.choiceText2;
const choiceText3 = DOMSelectors.choiceText3;
const choiceText4 = DOMSelectors.choiceText4;

const infoTextQuestion = DOMSelectors.infoTextQuestion;
const infoTextDifficulty = DOMSelectors.infoTextDifficulty;
const infoTextPoints = DOMSelectors.infoTextPoints;

// Start quiz
buttonStartQuiz.addEventListener("click", function() {
    answerButtons();
    checkAnswer();
});

// Insert question text into elements
function questionInsert() {
    const q = questionsCache[currentQuestion];

    questionText.textContent = q.question;
    choiceText1.textContent = q.choices[1];
    choiceText2.textContent = q.choices[2];
    choiceText3.textContent = q.choices[3];
    choiceText4.textContent = q.choices[4];
}

// Checks which choice button is pressed
function answerButtons() {
    choiceButton1.addEventListener("click", choice1ButtonPressed);

    function choice1ButtonPressed() {
        pickedChoice = 1;
        checkAnswer();
    }
    choiceButton2.addEventListener("click", choice2ButtonPressed);

    function choice2ButtonPressed() {
        pickedChoice = 2;
        checkAnswer();
    }
    choiceButton3.addEventListener("click", choice3ButtonPressed);

    function choice3ButtonPressed() {
        pickedChoice = 3;
        checkAnswer();
    }
    choiceButton4.addEventListener("click", choice4ButtonPressed);

    function choice4ButtonPressed() {
        pickedChoice = 4;
        checkAnswer();
    }
}

// Checks chosen answer
function checkAnswer() {
    if (pickedChoice === questionsCache[currentQuestion].correct) {
        confettiGen();
        score += questionsCache[currentQuestion].score;
        currentQuestion++;
    } else {

    }

    if (currentQuestion <= lastQuestion) {
        questionInsert();
    } else {
        confettiGen();
    }

    updateInfo();
}

// Updates the information after every question answered
function updateInfo() {
    infoTextQuestion.textContent =
        "Progress: " + currentQuestion + "/" + questionsCache.length;
    infoTextDifficulty.textContent = questionsCache[currentQuestion].difficulty;
    infoTextPoints.textContent = "Points: " + score;

    if (infoTextDifficulty.textContent === "effortless") {
        infoTextDifficulty.style.color = "green"
    } else if (infoTextDifficulty.textContent === "easy") {
        infoTextDifficulty.style.color = "yellow"
    } else if (infoTextDifficulty.textContent === "medium") {
        infoTextDifficulty.style.color = "orange"
    } else if (infoTextDifficulty.textContent === "hard") {
        infoTextDifficulty.style.color = "orangered"
    } else if (infoTextDifficulty.textContent === "insane") {
        infoTextDifficulty.style.color = "red"
    }
}

// Exit quiz
buttonExitQuiz.addEventListener("click", function() {
    history.back();
    buttonStartQuiz.querySelector(".button-text").textContent = "Resume Quiz";
});