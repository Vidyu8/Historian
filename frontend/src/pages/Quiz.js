import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is imported
import '../styles/quiz1.css';

const Quiz = () => {
  const { id } = useParams(); // Get the quiz ID from the URL
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(60); // Timer for the quiz
  const [answerFeedback, setAnswerFeedback] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState({});

  // Fetch quiz data based on ID
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(`/api/questions/${id}`); // Fetching quiz by ID
        setQuiz(response.data); // Set the fetched quiz data
      } catch (err) {
        setError('Failed to load quiz.');
        console.error('Error fetching quiz:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, [id]);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleSubmit(); // Submit quiz when time runs out
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  // Handle the answer logic
  const handleAnswer = (answer) => {
    const currentQuestion = quiz.questions[currentQuestionIndex];
    if (answeredQuestions[currentQuestionIndex]) return; // Prevent re-answering

    let isCorrect = false;

    if (currentQuestion.type === 'multiple-choice' || currentQuestion.type === 'true-false') {
      isCorrect = answer === currentQuestion.correctAnswer;
    } else if (currentQuestion.type === 'fill-in-the-blank') {
      isCorrect = answer.trim().toLowerCase() === currentQuestion.correctAnswer.trim().toLowerCase();
    }

    setAnswerFeedback(isCorrect ? 'Correct!' : 'Incorrect!');
    if (isCorrect) setScore(score + 1);

    setAnsweredQuestions((prev) => ({ ...prev, [currentQuestionIndex]: true }));
  };

  // Submit the quiz
  const handleSubmit = () => {
    // Logic for submitting the quiz, e.g., showing score or saving results
    alert(`Quiz submitted! Your score is: ${score}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!quiz) return <div>No quiz found.</div>;

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
      <div className="quiz-container">
      <h1>{quiz.title}</h1>
      <p>{quiz.description}</p>

      {/* Display the current question */}
      <div>
        <h2>{currentQuestion.questionText}</h2>
        <div>
          {currentQuestion.type === 'multiple-choice' &&
            currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={answeredQuestions[currentQuestionIndex]}>
                {option}
              </button>
            ))}
          {currentQuestion.type === 'true-false' && (
            <>
              <button
                onClick={() => handleAnswer('True')}
                disabled={answeredQuestions[currentQuestionIndex]}>
                True
              </button>
              <button
                onClick={() => handleAnswer('False')}
                disabled={answeredQuestions[currentQuestionIndex]}>
                False
              </button>
            </>
          )}
          {currentQuestion.type === 'fill-in-the-blank' && (
            <input
              type="text"
              onBlur={(e) => handleAnswer(e.target.value)}
              disabled={answeredQuestions[currentQuestionIndex]}
              placeholder="Type your answer"
            />
          )}
        </div>
      </div>

      {/* Show feedback */}
      {answerFeedback && <div>{answerFeedback}</div>}

      {/* Navigation buttons */}
      <div>
        {currentQuestionIndex > 0 && (
          <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}>Previous</button>
        )}
        {currentQuestionIndex < quiz.questions.length - 1 && (
          <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>Next</button>
        )}
        {currentQuestionIndex === quiz.questions.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>

      {/* Timer */}
      <div>Time Left: {timeLeft}s</div>
    </div>
  );
};

export default Quiz;
