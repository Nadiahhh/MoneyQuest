

const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById ('prev');
const nextBtn = document.getElementById('next') ;
const submitBtn = document.getElementById('submit');
const trueBtn = document.getElementById('True');
const falseBtn = document.getElementById('False');
const userScore = document.getElementById('user-score');
const questionText = document.getElementById('question-text');

let currentQuestion = 0;
var score = 0;

let questions = [
    {
        question: "What account do you use to invest in the stock market?",
        answers: [
            {option: "Broker recommended penny stocks" ,answer:true},
            {option: "Coporate Bonds" ,answer: false}
        ]
    },
    {

        question: "Stocks pay out a portion of the companys profit to the stockholder. What is this called?",
        answers: [
            {option: "Coupon" ,answer:false},
            {option: "Dividend" ,answer:true}
        ]
    },
    {

        question: "You are looking for a stock to buy. How can you find the best stocks for your needs?",
        answers: [
            {option: "Foundational Analysis" ,answer: false},
            {option: "Fundamental Analysis" ,answer:true}
        ]
    }
]


restartBtn.addEventListener('click', restart);
prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);
submitBtn.addEventListener('click', submit);

function beginQuiz() {
    currentQuestion=0;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer) {
            if(score<3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<2) {
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        let ano=1;
        if(questions[currentQuestion].answers[ano].answer) {
            if(score<3) {   
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<2) {
            next();
        }
    }
    prevBtn.classList.add('hide');
}
beginQuiz();

function restart(){
    currentQuestion=0;
    prevBtn.classList.remove('hide');
    nextBtn.classList.remove('hide');
    submitBtn.classList.remove('hide');
    trueBtn.classList.remove('hide');
    falseBtn.classList.remove('hide');
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
}

function next() {
    currentQuestion++;
    if(currentQuestion>=2) {
        nextBtn.classList.add('hide');
        prevBtn.classList.remove('hide');
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML=questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer) {
            if(score<3) {
                score++;
            }
        }
    userScore.innerHTML = score;
    if(currentQuestion<2){
        next();
    }
}
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        let ano=1;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<2){
            next();
        }
    }
    prevBtn.classList.remove('hide');
}       

function prev() {
    currentQuestion--;
    if(currentQuestion<=0) {
        prevBtn.classList.add('hide');
        nextBtn.classList.remove('hide');
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer) {
            if(score<3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<2) {
            next();
        }
    }

    falseBtn, innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        let ano=1;
        if(questions[currentQuestion].answers[ano].answer) {
            if(score<3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<2) {
            next();
        }
    }
    nextBtn.classList.remove('hide');
}

function submit() {
    prevBtn.classList.add('hide');
    nextBtn.classList.add('hide');
    submitBtn.classList.add('hide');
    trueBtn.classList.add('hide');
    falseBtn.classList.add('hide');
    questionText.innerHTML="Congratulations on submitting the quiz!";
}