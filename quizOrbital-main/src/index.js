import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//ReactDOM.render(
  
  //<App />,
  //document.getElementById('quizz'),
  const domContainer = document.querySelector('#quizz');
const root = ReactDOM.createRoot(domContainer);
root.render(App);
//);
