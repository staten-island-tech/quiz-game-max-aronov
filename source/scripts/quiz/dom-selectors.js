const DOMSelectors = {
    buttonStartQuiz: document.getElementById("quiz-button"),
    buttonExitQuiz: document.getElementById("exit-quiz-button"),
    questionText: document.getElementById("question-text"),
    choice1button: document.getElementById("answer-button-1"),
    choice2button: document.getElementById("answer-button-2"),
    choice3button: document.getElementById("answer-button-3"),
    choice4button: document.getElementById("answer-button-4"),
    choiceButtons: document.getElementsByClassName("answer-button"),
    choiceText1: document.getElementById("answer-button-text-1"),
    choiceText2: document.getElementById("answer-button-text-2"),
    choiceText3: document.getElementById("answer-button-text-3"),
    choiceText4: document.getElementById("answer-button-text-4")
}

export { DOMSelectors };