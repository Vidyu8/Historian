import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/quizzes.css';

const Quizzes = () => {
    return (
        <div className="quizzes-page">
            <header className="quizzes-header">
                <h1>Quizzes</h1>
                <p>Choose a quiz to test your knowledge!</p>
            </header>
            <main className="quizzes-list">
                <div className="quiz-item">
                    <Link to="/quiz1" className="quiz-link">
                        <img src="https://cdn.meredithplays.com/wp-content/uploads/2024/06/history-trivia-questions.webp" alt="World History Quiz" className="quiz-image" />
                        <h3 className="quiz-title">World History Quiz</h3>
                        <p className="quiz-description">How well do you know global historical events?</p>
                        <span className="take-quiz-button">Take the Quiz</span>
                    </Link>
                </div>
                <div className="quiz-item">
                    <Link to="/quiz2" className="quiz-link">
                        <img src="https://www.voicesofyouth.org/sites/voy/files/images/2020-07/advocacyculture_and_empowerment.png" alt="Ethnicities Quiz" className="quiz-image" />
                        <h3 className="quiz-title">Ethnicities Quiz</h3>
                        <p className="quiz-description">Explore the rich diversity of cultures and ethnicities.</p>
                        <span className="take-quiz-button">Take the Quiz</span>
                    </Link>
                </div>
                <div className="quiz-item">
                    <Link to="/quiz3" className="quiz-link">
                        <img src="https://familyexperiencesblog.com/wp-content/uploads/2021/01/19th-century-antique-vase-illustration-of-dionysus-and-three-figures.jpg" alt="Mythology and Its Relevance" className="quiz-image" />
                        <h3 className="quiz-title">Mythology and Its Relevance</h3>
                        <p className="quiz-description">Discover the enduring significance of ancient myths.</p>
                        <span className="take-quiz-button">Take the Quiz</span>
                    </Link>
                </div>
                <div className="quiz-item">
                    <Link to="/quiz4" className="quiz-link">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSraST2axl97ALuUITuL2sO7oiIPYwso5f6kA&s" alt="Wars in History" className="quiz-image" />
                        <h3 className="quiz-title">Wars in History</h3>
                        <p className="quiz-description">Test your knowledge of major wars throughout history.</p>
                        <span className="take-quiz-button">Take the Quiz</span>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default Quizzes;
