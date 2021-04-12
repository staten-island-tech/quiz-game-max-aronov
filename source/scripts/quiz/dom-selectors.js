const DOMSelectors = {
    buttonStartQuiz: document.getElementById("quiz-button"),
    buttonResumeQuiz: document.getElementById("resume-quiz-button"),
    buttonExitQuiz: document.getElementById("exit-quiz-button"),
    buttonExitResults: document.getElementById("exit-results-button"),

    questionText: document.getElementById("question-text"),

    choice1button: document.getElementById("answer-button-1"),
    choice2button: document.getElementById("answer-button-2"),
    choice3button: document.getElementById("answer-button-3"),
    choice4button: document.getElementById("answer-button-4"),

    choiceButtons: document.querySelectorAll('.answer-button'),

    choiceText1: document.getElementById("answer-button-text-1"),
    choiceText2: document.getElementById("answer-button-text-2"),
    choiceText3: document.getElementById("answer-button-text-3"),
    choiceText4: document.getElementById("answer-button-text-4"),

    infoTextQuestion: document.getElementById("current-question-text"),
    infoTextDifficulty: document.getElementById("difficulty-text"),
    infoTextPoints: document.getElementById("points-text")
}

export { DOMSelectors };