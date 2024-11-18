import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for navigation

// Reusable components
const SearchBar = () => (
  <div className="search-bar">
    <input type="text" placeholder="Search for a topic, region, or event..." />
    <button>Search</button>
  </div>
);

/*const HeroSection = () => (
  <section className="hero">
    <h1>Explore the Tapestry of World History</h1>
    <p>From ancient civilizations to modern movements, uncover the stories that shaped our world.</p>
    <button onClick={() => window.location.href = '/history'}>Get Started</button>
  </section>
);

const QuizzesSection = () => (
  <section className="quizzes">
    <img
      src="https://i.pinimg.com/736x/72/fc/da/72fcda2cb60791c55adbf7bd0aa2c065.jpg"
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
      src="https://i.pinimg.com/736x/5f/81/3c/5f813ce5d5d9451c028c72ccc0f5b76c.jpg"
      alt="Dark history"
    />
    <h2>To the Dark Side</h2>
    <p>Find out more about humanity's darkest moments, from the holocaust to Agent Orange</p>
    <button onClick={() => window.location.href = '/darkhistory'}>Cross into the dark side</button>
  </section>
);

const Mysteries = () => (
  <section className="mystery">
    <img
      src="https://i.pinimg.com/736x/e7/d1/76/e7d176c57ad176162af91075e6878b22.jpg"
      alt="Mystery"
    />
    <h2>Discover the unsolved</h2>
    <p>Know more about ome of the most mind boggling, unexplained events in history</p>
    <button onClick={() => window.location.href = '/mystery'}>Discover</button>
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
      <DarkHistory/><Mysteries/>
      <QuizzesSection />
      <Footer />
    </div>
  );
};
*/

const HeroSection = () => (
  <section className="hero">
    <h1>Explore the Tapestry of World History</h1>
    <p>From ancient civilizations to modern movements, uncover the stories that shaped our world.</p>
    <button onClick={() => window.location.href = '/history'}>Get Started</button>
  </section>
);

const Card = ({ title, description, imgUrl, link }) => (
  <div className="card">
    <img src={imgUrl} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <button onClick={() => window.location.href = link}>Learn More</button>
  </div>
);

const MainContent = () => (
  <div className="content-grid">
    <Card
      title="Dark History"
      description="Explore humanity's darkest moments."
      imgUrl="https://i.pinimg.com/736x/76/4b/9f/764b9ff8a493b0235d3ee76618cfddff.jpg"
      link="/darkhistory"
    />
    <Card
      title="Quizzes"
      description="Test your historical knowledge."
      imgUrl="https://i.pinimg.com/736x/72/fc/da/72fcda2cb60791c55adbf7bd0aa2c065.jpg"
      link="/quizzes"
    />
    <Card
      title="Unsolved Mysteries"
      description="Dive into the unexplained events in history."
      imgUrl="https://i.pinimg.com/736x/e7/d1/76/e7d176c57ad176162af91075e6878b22.jpg"
      link="/mystery"
    />
  </div>
);

const Home = () => {
  return (
    <div>
      <HeroSection />
      <MainContent />
    </div>
  );
};


export default Home;
