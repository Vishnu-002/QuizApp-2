const quizData = [
    {
        question: 'How old is Vicky?',
        a: '20',
        b: '26',
        c: '15',
        d: '30',
        correct: 'a'
    },
    {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'JavaScript',
        d: 'Python',
        correct: 'c'
    },
    {
        question: 'Who is the President of US?',
        a: 'Ivanka Trump',
        b: 'Obama',
        c: 'donald trump',
        d: 'Bin-Laden',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for?',
        a: 'HyperText Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopter Terminals Motorboats Lamor',
        correct: 'a'
    },
    {
        question: 'Year?',
        a: '1999',
        b: '5555',
        c: '3333',
        d: '8888',
        correct: 'a'
    }
];

const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score=0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    // currentQuiz++;
}

function getSelected() {
    let answer = undefined;
    answersEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
            // console.log(answer.value);
        }
        // else {
            //     alert("Select any option and then submit");
            // }
        });
        
        return answer;
}

function deselectAnswer() {
    answersEls.forEach((answerEl) => {
        answerEl.checked=false;
    });
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    console.log(answer);
    if(answer) 
    {
        if(answer === quizData[currentQuiz].correct)
        {
            score++;
        }
        currentQuiz++;
        if(answer) { 
            if(currentQuiz < quizData.length) {
                loadQuiz();
            }
            else {
                quiz.innerHTML = `<h2>You're finished and You answered ${score}/${quizData.length} questions correctly.</h2> <button onclick="location.reload()">Play Again</button>`;
            }
        }
    }
    
});