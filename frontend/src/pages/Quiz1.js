// src/pages/Quiz1.js
import React, { useEffect, useState } from 'react';
import { fetchQuizzes } from '../apis/api';  // Adjust the path if needed
import '../styles/quiz1.css';

const Quiz1 = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);  // New loading state

  useEffect(() => {
    const getQuizzes = async () => {
      setLoading(true);  // Set loading to true when fetching data
      try {
        const data = await fetchQuizzes();
        setQuizzes(data);
      } catch (error) {
        setError('Failed to load quizzes.');
        console.error('Error fetching quizzes:', error);
      } finally {
        setLoading(false);  // Set loading to false after data is fetched
      }
    };

    getQuizzes();
  }, []);  // Empty dependency array to run only on component mount

  if (loading) return <div>Loading...</div>;  // Show loading indicator while loading
  if (error) return <div>{error}</div>;
  if (!quizzes.length) return <div>No quizzes available.</div>;

  const currentQuiz = quizzes[currentQuizIndex];
  const currentQuestion = currentQuiz?.questions[currentQuestionIndex]; 

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
    <div className="quiz-container">
        <h1 className="quiz-title">{currentQuiz.title}</h1>
        <p className="quiz-description">{currentQuiz.description}</p>
        <div>
            <h2 className="question-text">{currentQuestion.questionText}</h2>
            <div>
                {currentQuestion.options.map((option, index) => (
                    <button key={index} className="option-button" onClick={() => handleAnswer(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
        <div className="score-display">
            <p>Score: {score}</p>
        </div>
    </div>
  );
};

export default Quiz1;
