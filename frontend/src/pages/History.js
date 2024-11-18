import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/history.css';

const History = () => {
  return (
    <div className="history-page">
      {/* Introduction Section */}
      <section className="intro">
        <h1 className="intro-title">Welcome to The Historian</h1>
        <p className="intro-text">
          History is a vast early warning system, providing us with insights and lessons that help shape our future. 
          From wars to rebellions, empires to civilizations, history and how it's told impacts not just the way we think 
          but also the way we act. At a time when misinformation and inconsistencies are at an all-time high, we aim to 
          bring the truth as it's written, not as it's interpreted. Dive into ancient civilizations, regional histories, 
          or debunk popular myths with us!
        </p>
      </section>

      {/* Category Cards */}
      <section className="categories">
        <h2 className="categories-title">Explore by Category</h2>
        <div className="categories-grid">
          {/* Regions */}
          <div className="category-card">
            <img
              src="https://img.freepik.com/premium-photo/wooden-world-map-with-rustic-vintage-feel-map-is-dark-brown-color-with-countries-oceans-lighter-brown_1209158-26753.jpg"
              alt="Regions"
              className="category-image"
            />
            <h3>Regions</h3>
            <p>Explore the history and cultures of different regions across the globe.</p>
            <Link to="/regions" className="category-link">Explore Regions</Link>
          </div>
          {/* Ethnicities */}
          <div className="category-card">
            <img
              src="https://americanindianrepublic.com/wp-content/uploads/2021/10/native-americans-are-not-all-the-same-an-exploration-of-indigenous-diversity.jpg"
              alt="Ethnicities"
              className="category-image"
            />
            <h3>Ethnicities</h3>
            <p>Learn about the history, contributions, and stories of different ethnic groups.</p>
            <Link to="/ethnicities" className="category-link">Explore Ethnicities</Link>
          </div>
          {/* Myth Debunking */}
          <div className="category-card">
            <img
              src="https://img.thread-bare.com/store/thread-bare/ZeTzagXO/bcCPtGWG.mockup"
              alt="Myth Debunking"
              className="category-image"
            />
            <h3>Myth Debunking</h3>
            <p>Separate fact from fiction and explore the true stories behind popular myths.</p>
            <Link to="/myths" className="category-link">Debunk Myths</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="history-footer">
        <p>&copy; 2024 Interactive History. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default History;
