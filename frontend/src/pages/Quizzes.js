import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to install react-router-dom
import '../styles/quizzes.css'; // Import the CSS file for styling

const Quizzes = () => {
    return (
        <div className="quizzes-page">
            <header className="quizzes-header">
                <h1>Quizzes</h1>
                <p>Choose a quiz to test your knowledge!</p>
            </header>
            <main className="quizzes-list">
                <h2>Available Quizzes</h2>
                <ul>
                    <li>
                    <Link to="/quiz1" className="quiz-link">
                            <img src="https://cdn.meredithplays.com/wp-content/uploads/2024/06/history-trivia-questions.webp" alt="Quiz 1" className="quiz-image" />
                            Quiz 1: World History Quiz
                    </Link>
                    </li>
                    <li>
                    <Link to="/quiz2" className="quiz-link">
                            <img src="https://www.voicesofyouth.org/sites/voy/files/images/2020-07/advocacyculture_and_empowerment.png" alt="Quiz 2" className="quiz-image" />
                            Quiz 2: Ethnicities Quiz
                    </Link>
                    </li>
                    <li>
                    <Link to="/quiz3" className="quiz-link">
                            <img src="https://familyexperiencesblog.com/wp-content/uploads/2021/01/19th-century-antique-vase-illustration-of-dionysus-and-three-figures.jpg" alt="Quiz 3" className="quiz-image" />
                            Quiz 3: Mythology and It's relevance
                    </Link>
                    </li>
                    <li>
                    <Link to="/quiz4" className="quiz-link">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSraST2axl97ALuUITuL2sO7oiIPYwso5f6kA&s" alt="Quiz 4" className="quiz-image" />
                            Quiz 4: Wars in History 
                    </Link>
                    </li>
                </ul>
            </main>
        </div>
    );
};

export default Quizzes; 
