import React from 'react';

const Home = () => {
  

// Hero Section Component
const HeroSection = () => (
  <section className="hero">
    <h1>Explore the Tapestry of World History</h1>
    <p>From ancient civilizations to modern movements, uncover the stories that shaped our world.</p>
    <button onClick={() => window.location.href = '/history'}>Get Started</button>
  </section>
);

// Card Component
const Card = ({ title, description, imgUrl, link }) => (
  <div className="card">
    <img src={imgUrl} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <button onClick={() => window.location.href = link}>Learn More</button>
  </div>
);

// Main Content Component
const MainContent = () => (
  <div className="content-grid">
    <Card
      title="Dark History"
      description="Explore humanity's darkest moments."
      imgUrl="https://i.pinimg.com/736x/76/4b/9f/764b9ff8a493b0235d3ee76618cfddff.jpg"
      link="/dark-history"
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
      link="/unsolved-mysteries"
    />
  </div>
);

// Home Component

  return (
    <div>
      <HeroSection />
      <MainContent />
    </div>
  );
};

export default Home;