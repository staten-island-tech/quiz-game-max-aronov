import { DOMSelectors } from "./quiz/dom-selectors";
import { questionsCache } from "./quiz/questions";
import { confettiGen } from "./particles";

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

const choiceButtons = DOMSelectors.choiceButtons

const question1 = questionsCache[0];
const question2 = questionsCache[1];
const question3 = questionsCache[2];
const question4 = questionsCache[3];
const question5 = questionsCache[4];
const question6 = questionsCache[5];
const question7 = questionsCache[6];
const question8 = questionsCache[7];
const question9 = questionsCache[8];
const question10 = questionsCache[9];
const question11 = questionsCache[10];
const question12 = questionsCache[11];
const question13 = questionsCache[12];
const question14 = questionsCache[13];
const question15 = questionsCache[14];

// Alerts before page leave / reload
/* window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = '';
}); */

// Start quiz
buttonStartQuiz.addEventListener("click", function() {
    console.log("Connected");

    questionText.textContent = question1.question;
    choiceText1.textContent = question1.choices[1];
    choiceText2.textContent = question1.choices[2];
    choiceText3.textContent = question1.choices[3];
    choiceText4.textContent = question1.choices[4];

    choiceButton1.addEventListener("click", function() {
        console.log("clicked")
        if (choiceButton1.id.substr(-1) === `${question1.correct}`) {
            confettiGen()
        }
    })

    choiceButton2.addEventListener("click", function() {
        console.log("clicked")
        if (choiceButton2.id.substr(-1) === `${question1.correct}`) {
            confettiGen()
        }
    })

    choiceButton3.addEventListener("click", function() {
        console.log("clicked")
        if (choiceButton3.id.substr(-1) === `${question1.correct}`) {
            confettiGen()
        }
    })

    choiceButton4.addEventListener("click", function() {
        console.log("clicked")
        if (choiceButton4.id.substr(-1) === `${question1.correct}`) {
            confettiGen()
        }
    })
});

// Exit quiz
buttonExitQuiz.addEventListener("click", function() {
    history.back();
    buttonStartQuiz.querySelector(".button-text").textContent = "Resume Quiz";
});