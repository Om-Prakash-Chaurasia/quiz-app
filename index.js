const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'Paris',
    },
    {
        question: 'What is the largest planet in our solar system?',
        options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
        answer: 'Jupiter',
    },
    {
        question: 'Which country won the FIFA World Cup in 2018?',
        options: ['Brazil', 'Germany', 'France', 'Argentina'],
        answer: 'France',
    },
    {
        question: 'What is the tallest mountain in the world?',
        options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
        answer: 'Mount Everest',
    },
    {
        question: 'Which is the largest ocean on Earth?',
        options: [
            'Pacific Ocean',
            'Indian Ocean',
            'Atlantic Ocean',
            'Arctic Ocean',
        ],
        answer: 'Pacific Ocean',
    },
    {
        question: 'What is the chemical symbol for gold?',
        options: ['Au', 'Ag', 'Cu', 'Fe'],
        answer: 'Au',
    },
    {
        question: 'Who painted the Mona Lisa?',
        options: [
            'Pablo Picasso',
            'Vincent van Gogh',
            'Leonardo da Vinci',
            'Michelangelo',
        ],
        answer: 'Leonardo da Vinci',
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Mercury', 'Uranus'],
        answer: 'Mars',
    },
    {
        question: 'What is the largest species of shark?',
        options: [
            'Great White Shark',
            'Whale Shark',
            'Tiger Shark',
            'Hammerhead Shark',
        ],
        answer: 'Whale Shark',
    },
    {
        question: 'Which animal is known as the King of the Jungle?',
        options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
        answer: 'Lion',
    },
];

const quiz = document.getElementById('quiz');
const result = document.getElementById('result');
const submit = document.getElementById('submit');
const retry = document.getElementById('retry');
const showAnswer = document.getElementById('showAnswer');

let currQuestion = 0;
let score = 0;
let incorrAnswers = [];

function ramdomEle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function dispQuestion() {
    const quesData = quizData[currQuestion];

    const quesElement = document.createElement('div');
    quesElement.className = 'question';
    quesElement.innerHTML = quesData.question;


}