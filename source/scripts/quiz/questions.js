const questionsCache = [{
        question: "How many planets are there in the Solar System",
        choices: {
            1: "9",
            2: "10",
            3: "8",
            4: "6"
        },
        correct: 3,
        difficulty: "effortless"
    },
    {
        question: "What galaxy is the Solar System a part of",
        choices: {
            1: "Milky Way",
            2: "Andromeda",
            3: "Whirpool",
            4: "Cigar"
        },
        correct: 1,
        difficulty: "effortless"
    },
    {
        question: "How old is the universe",
        choices: {
            1: "14.2 billion years",
            2: "10.9 billion years",
            3: "13.8 billion years",
            4: "18.8 billion years"
        },
        correct: 3,
        difficulty: "effortless"
    },
    {
        question: "What is a supernova",
        choices: {
            1: "An imploded planet",
            2: "A dead star's explosion",
            3: "A splitting galaxy",
            4: "Another name for a gamma ray burst"
        },
        correct: 2,
        difficulty: "easy"
    },
    {
        question: "What is a black hole",
        choices: {
            1: "A region in space-time of immense gravity",
            2: "An immensly large planet",
            3: "An exploding star",
            4: "An imploding galaxy"
        },
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "How is a black hole created",
        choices: {
            1: "Matter gets squeezed to an immensly small size",
            2: "A star swallows another star",
            3: "Two planets collide",
            4: "A galaxy collides with another galaxy"
        },
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "What type of galaxy is the Milky Way",
        choices: {
            1: "Elliptical",
            2: "Irregular",
            3: "Spiral",
            4: "Lenticular"
        },
        correct: 3,
        difficulty: "medium"
    },
    {
        question: "What lies in the center of most galaxies",
        choices: {
            1: "A Hypergiant Star",
            2: "A toroidal planet",
            3: "Nothing",
            4: "A black hole"
        },
        correct: 4,
        difficulty: "medium"
    },
    {
        question: "What star is predicted to go supernova sometime in the next 100,000 years",
        choices: {
            1: "Arcturus",
            2: "UY Scuti",
            3: "Pistol Star",
            4: "Betelgeuse"
        },
        correct: 4,
        difficulty: "medium"
    },
    {
        question: "How much of the universe is composed of plasma",
        choices: {
            1: "10%",
            2: "50%",
            3: "0.24%",
            4: "99.9%"
        },
        correct: 4,
        difficulty: "hard"
    },
    {
        question: "How many comets are in the Solar System",
        choices: {
            1: "100,000",
            2: "1 million",
            3: "1 billion",
            4: "1 trillion"
        },
        correct: 4,
        difficulty: "hard"
    },
    {
        question: "What is the name of the remnant radiation of the early universe",
        choices: {
            1: "Cosmic Microwave Background",
            2: "Big Bang Radiation",
            3: "Cosmic Birth Radiation",
            4: "Gamma Wave Recombination"
        },
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How massive is the black hole TON 618 (in M☉)",
        choices: {
            1: "3.8×10¹¹",
            2: "12.2×10⁶",
            3: "9.89×10¹⁴",
            4: "6.6×10¹⁰"
        },
        correct: 4,
        difficulty: "insane"
    },
    {
        question: "During which period of time during the birth of the universe were subatomic particles unable to form",
        choices: {
            1: "Planck Epoch",
            2: "Grand Unification Epoch",
            3: "Electroweak Epoch",
            4: "Inflationary Epoch"
        },
        correct: 1,
        difficulty: "insane"
    },
    {
        question: "How long did the Planck Epoch last (in seconds)",
        choices: {
            1: "10⁻²¹",
            2: "10⁻⁴³",
            3: "10⁻³⁷",
            4: "10⁻⁶⁵"
        },
        correct: 2,
        difficulty: "insane"
    }
];

/* questionsCache.forEach(question => {
    console.log("\n" + question.question)
    Object.entries(question.choices).map(([choice, choiceContent]) => console.log(choice + ") " + choiceContent))

    console.log("\nCorrect answer:\n" + question.correct + ") " + question.choices[question.correct])
}); */