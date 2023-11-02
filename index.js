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

    const optElement = document.createElement('div');
    optElement.className = 'options';

    const randomOpt = [...quesData.options];
    randomArr(randomOpt);

    for (let i = 0; i < randomOpt.length; i++) {
        const option = document.createElement('label');
        option.className = 'option';

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'quiz';
        radio.value = randomOpt[i];

        const optText = document.createTextNode(randomOpt[i]);

        option.appendChild(radio);
        option.appendChild(optText);
        optElement.appendChild(option);
    }

    quizCont.innerHTML = '';
    quizCont.appendChild(quesElement);
    quizCont.appendChild(optElement);
}

function checkAns() {
    const selectedOpt = document.querySelector('input[name="quiz"]:checked');
    if (selectedOpt) {
        const answer = selectedOpt.value;
        if (answer === quizData[currQuestion].answer) {
            score++;
        } else {
            incorrAnswers.push({
                question: quizData[currQuestion].question,
                incorrAnswers: answer,
                corrAnswer = quizData[currQuestion].answer,
            });
        }
        currQuestion++;
        selectedOpt.checked = false;
        if (currQuestion < quizData.length) {
            dispQuestion();
        } else {
            dispRes();
        }
    }
}

function dispRes() {
    quizCont.style.display = 'none';
    submit.style.display = 'none';
    retry.style.display = 'inline-block';
    showAnswer.style.display = 'inline-block';
    result.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
    currQuestion = 0;
    score = 0;
    incorrAnswers = [];
    quizCont.style.display = 'block';
    submit.style.display = 'inline-block';
    retry.style.display = 'none';
    showAnswer.style.display = 'none';
    result.innerHTML = '';
    dispQuestion();
}

function showAnswer() {
    quizCont.style.display = 'none';
    submit.style.display = 'none';
    retry.style.display = 'inline-block';
    showAnswer.style.display = 'none';

    let incorrAnswersHtml = '';
    for (let i = 0; i < incorrAnswers.length; i++) {
        incorrAnswersHtml += `
        <p>
        <strong>Question:</strong> ${incorrAnswers[i].question}
        <br>
        <strong>Your Answer:</strong> ${incorrAnswers[i].incorrAnswers}
        <br>
        <strong>Correct Answer:</strong> ${incorrAnswers[i].corrAnswer}
        </p>
        `;
    }
    result.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}! </p>
    <p>Incorrect Answers:</p>
    ${incorrAnswersHtml}
    `;
}

submit.addEventListener('click', checkAns);
retry.addEventListener('click', retryQuiz);
showAnswer.addEventListener('click', showAnswer);

dispQuestion();
