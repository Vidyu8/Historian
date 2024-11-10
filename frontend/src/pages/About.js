import React from 'react';
import '../styles/about.css'; // Import the CSS file for styling

const About = () => {
    return (
        <div className="about-container">
            <main className="about-main">
                <section id="about-content">
                    <h2>Who We Are</h2>
                    <p>We are a team of passionate individuals who believe in the power of history and the importance of telling the real stories of our world.</p>
                    <h2>Our Mission</h2>
                    <p>Our mission is to bring forward unsaid stories and tales from long ago, and consequently educate the public about how history is written (and rewritten).</p>
                    <h2>The Team</h2>
                    <ul className="team-list">
                        <li>Vidyullata</li>
                        <li>Vidisha</li>
                        <li>Vipaanchi</li>
                    </ul>
                    <button className="learn-more-button">Learn More</button>
                </section>
            </main>

        </div>
    );
};

export default About;

 
