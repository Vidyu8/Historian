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
    <h1>Explore the Rich Tapestry of World History</h1>
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

const CategoriesSection = () => (
  <section className="categories">
    <h2>Explore by Category</h2>
    <div className="category-grid">
      <CategoryCard
        title="Regions"
        description="Delve into the historical milestones of different regions across the globe."
        link="/Regions"
      />
      <CategoryCard
        title="Ethnicities"
        description="Discover the impact and contributions of various ethnic groups throughout history."
        link="/Ethnicities"
      />
      <CategoryCard
        title="Myth Debunking"
        description="Separate historical facts from fiction and bust popular myths."
        link="/Myths"
      />
    </div>
  </section>
);

const CategoryCard = ({ title, description, link }) => (
  <div className="category-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <Link to={link}>Explore {title}</Link>
  </div>
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
      <QuizzesSection />
      <CategoriesSection />
      <Footer />
    </div>
  );
};

export default Home;
