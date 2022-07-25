import React, { useState } from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

export default function App() {
    
    const questions = [{
            questionText: 'You are looking for a stock to buy. How can you find the best stocks for your needs?',
            answerOptions: [
                { answerText: 'Fundamental Analysis', isCorrect: true },
                { answerText: 'Complex Analysis', isCorrect: false },
                { answerText: 'Basic Analysis', isCorrect: false },
                { answerText: 'Foundational Analysis', isCorrect: false },
            ],
        },
        {
            questionText: 'How can you make sure a company has a large cap?',
            answerOptions: [
                { answerText: 'Bottom line', isCorrect: false },
                { answerText: 'Market capitalization', isCorrect: true },
                { answerText: '52 moving average', isCorrect: false },
                { answerText: 'Market Share', isCorrect: false },
            ],
        },
        {
            questionText: 'As an investor, you want to take emotion out of your investments. What strategy is recommended?',
            answerOptions: [
                { answerText: 'Dollar cost averaging', isCorrect: true },
                { answerText: 'Dollar cost middling', isCorrect: false },
                { answerText: 'Dollar cost investing', isCorrect: false },
                { answerText: 'Dollar cost halving', isCorrect: false },
            ],
        },
        {
            questionText: 'You want to make a risky investment and you will need to ttake your money out in 2-3 years. Which of the following investments should you choose?',
            answerOptions: [
                { answerText: 'Savings Account', isCorrect: false },
                { answerText: 'Broker recommended penny stocks', isCorrect: false },
                { answerText: 'Exchange traded funds', isCorrect: false },
                { answerText: 'Coporate Bonds', isCorrect: true },
            ],
        },
        {
            questionText: 'As a new investor, which of these would you invest in first?',
            answerOptions: [
                { answerText: 'Large-cap company stock', isCorrect: false },
                { answerText: 'Goverment bonds', isCorrect: false },
                { answerText: 'Start-up business', isCorrect: false },
                { answerText: 'S&P 500 index fund', isCorrect: true },
            ],
        },
        {
            questionText: 'Which of these is the most popular stock indexes in the world?',
            answerOptions: [
                { answerText: 'S&P 30', isCorrect: false },
                { answerText: 'S&P 100', isCorrect: false },
                { answerText: 'S&P 1000', isCorrect: false },
                { answerText: 'S&P 500', isCorrect: true },
            ],
        },
        {
            questionText: 'Stocks pay out a portion of the companys profit to the stockholder. What is this called?',
            answerOptions: [
                { answerText: 'Rights', isCorrect: false },
                { answerText: 'Dividend', isCorrect: true },
                { answerText: 'Yield', isCorrect: false },
                { answerText: 'Coupon', isCorrect: false },
            ],
        },
        {
            questionText: 'What account do you use to invest in the stock market?',
            answerOptions: [
                { answerText: 'Savings Account', isCorrect: false },
                { answerText: 'Broker recommended penny stocks', isCorrect: true },
                { answerText: 'Exchange traded funds', isCorrect: false },
                { answerText: 'Coporate Bonds', isCorrect: false },
            ],
        },
        {
            questionText: 'How do you calculate a companys market cap?',
            answerOptions: [
                { answerText: 'Assets x liabilities', isCorrect: false },
                { answerText: 'Stocks outstanding x stock price', isCorrect: true },
                { answerText: 'Dividend/stock x stock price', isCorrect: false },
                { answerText: 'Stocks outstanding x stock price', isCorrect: false },
            ],
        },
        {
            questionText: 'Company goes bankrupt, who will get paid first?',
            answerOptions: [
                { answerText: 'Stock holders', isCorrect: false },
                { answerText: 'Index fund holders', isCorrect: false },
                { answerText: 'Bond holders', isCorrect: true },
                { answerText: 'Option contract holders', isCorrect: false },
            ],
        },

    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
    <div className = 'app' > 
    <a href="https://nadiahhh.github.io/MoneyQuest/home-user.html" target="_blank" rel="noreferrer">
      Home
    </a>
    
    {
            showScore ? ( <
                div className = 'score-section' >
                You scored { score }
                out of { questions.length } <
                /div>
            ) : ( <
                >
                <
                div className = 'question-section' >
                <
                div className = 'question-count' >
                <
                span > Question { currentQuestion + 1 } < /span>/ { questions.length } <
                /div> <
                div className = 'question-text' > { questions[currentQuestion].questionText } < /div> < /
                div > <
                div className = 'answer-section' > {
                    questions[currentQuestion].answerOptions.map((answerOption) => ( <
                        button onClick = {
                            () => handleAnswerOptionClick(answerOption.isCorrect)
                        } > { answerOption.answerText } < /button>
                    ))
                } <
                /div> < / >
            )
        } 
        
    <
        /div>
    
  );
}

