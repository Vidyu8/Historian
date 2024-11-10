import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for navigation

// Reusable components
const SearchBar = () => (
  <div className="search-bar">
    <input type="text" placeholder="Search for a topic, region, or event..." />
    <button>Search</button>
  </div>
);

const HeroSection = () => (
  <section className="hero">
    <h1>Explore the Tapestry of World History</h1>
    <p>From ancient civilizations to modern movements, uncover the stories that shaped our world.</p>
    <button onClick={() => window.location.href = '/history'}>Get Started</button>
  </section>
);

const QuizzesSection = () => (
  <section className="quizzes">
    <img
      src="https://assets.genially.com/s3fs-public/History%20quizen.png?VersionId=Wn9knTDgFtewm9LhOgsgyYD7zqmUa.rH/300x200"
      alt="Quiz Image"
    />
    <h2>Discover Our Quizzes</h2>
    <p>Test your knowledge on historical events, regions, and famous figures through interactive quizzes.</p>
    <button onClick={() => window.location.href = '/quizzes'}>Take a Quiz</button>
  </section>
);

const DarkHistory = () => (
  <section className="darkhistory">
    <img
      src="https://cdn.britannica.com/62/161062-050-10A574C5/town-crier-families-victims-Black-Death-mass.jpg"
      alt="Dark history"
    />
    <h2>To the Dark Side</h2>
    <p>Find out more about humanity's darkest moments, from the holocaust to Agent Orange</p>
    <button onClick={() => window.location.href = '/darkhistory'}>Cross into the dark side</button>
  </section>
);

const Footer = () => (
  <footer>
    <p>&copy; 2024 Interactive History. All rights reserved.</p>
  </footer>
);

const Home = () => {
  return (
    <div>
      <HeroSection />
      <DarkHistory/>
      <QuizzesSection />
      <Footer />
    </div>
  );
};

export default Home;
