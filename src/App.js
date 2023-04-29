import React, { useState } from "react";
import "./style.css";
import questions from './components/questions';

export default function App() {
  const [currentQuestion, setCurrrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const optionClicked = (isCorrect) => {
    if(isCorrect) {
      setScore(score+1);
    }

    if(currentQuestion+1 < questions.length) {
      setCurrrentQuestion(currentQuestion+1);
    } else {
      setShowResults(true);
    }
  }

  const restartGame = () => {
    setCurrrentQuestion(0);
    setScore(0);
    setShowResults(false);
  }

  return (
    <div className='App'>
      <h1>Hellas Quiz</h1>
      <h2>Score: {score}</h2>
      {showResults? (
        <div className='final-results'>
          <h1>Final Results</h1>
          <h2>{score} out of {questions.length} correct - ({(score / questions.length) * 100}%)</h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        <div className='question-card'>
          <h2>Question: {currentQuestion+1} out of  {questions.length}</h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li key={option.id} onClick={() => optionClicked(option.isCorrect)}>{option.text}</li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
