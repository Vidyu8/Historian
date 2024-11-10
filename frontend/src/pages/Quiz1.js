// src/pages/Quiz1.js
import React, { useEffect, useState } from 'react';
import { fetchQuizzes } from '../apis/api';  // Adjust the path if needed

const Quiz1 = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getQuizzes = async () => {
      try {
        const data = await fetchQuizzes();
        setQuizzes(data);
      } catch (error) {
        setError('Failed to load quizzes.');
        console.error('Error fetching quizzes:', error);
      }
    };

    getQuizzes();
  }, []);

  if (error) return <div>{error}</div>;
  if (!quizzes.length) return <div>Loading...</div>;

  const currentQuiz = quizzes[currentQuizIndex];
  const currentQuestion = currentQuiz?.questions[currentQuestionIndex];  // Ensure it's not undefined

  if (!currentQuestion) {
    return <div>Loading question...</div>;  // Show loading if question is undefined
  }

  const handleAnswer = (answer) => {
    const currentQuiz = quizzes[currentQuizIndex];
    const currentQuestion = currentQuiz.questions[currentQuestionIndex];

    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setCurrentQuestionIndex(0);
    }
  };

  return (
    <div>
      <h1>{currentQuiz.title}</h1>
      <p>{currentQuiz.description}</p>
      <div>
        <h2>{currentQuestion.questionText}</h2>
        <div>
          {currentQuestion?.options?.length ? (
            currentQuestion.options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))
          ) : (
            <div>Loading options...</div>  
          )}
        </div>
      </div>
      <div>
        <p>Score: {score}</p>
      </div>
    </div>
  );
};

export default Quiz1;
