import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/quizzes.css';

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch quizzes when the component mounts
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('/api/questions'); // Correct API endpoint
        setQuizzes(response.data);
      } catch (err) {
        setError('Failed to load quizzes.');
        console.error('Error fetching quizzes:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuizzes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="quizzes-page">
      <header className="quizzes-header">
        <h1>Quizzes</h1>
        <p>Choose a quiz to test your knowledge!</p>
      </header>
      <main className="quizzes-list">
        {quizzes.map((quiz) => (
          <div key={quiz._id} className="quiz-item">
            <Link to={`/quiz/${quiz._id}`} className="quiz-link">
              <img
                src={quiz.imageUrl || 'https://via.placeholder.com/150'}
                alt={quiz.title}
                className="quiz-image"
              />
              <h3 className="quiz-title">{quiz.title}</h3>
              <p className="quiz-description">{quiz.description}</p>
              <span className="take-quiz-button">Take the Quiz</span>
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Quizzes;
