import React from 'react';
import { Link } from 'react-router-dom'; // For navigation to other pages
import '../styles/history.css'; // Assuming you have a separate CSS file for this page

const History = () => {
  return (
    <div className="history-page">
      <header className="history-header">
        <h1>Explore the History of the World</h1>
        <p>Discover key moments, regions, ethnicities, and myths that shaped our past.</p>
      </header>

      {/* Introduction Section */}
      <section className="intro">
        <h2>Welcome to the History Portal</h2>
        <p>
          History is a vast early warning system, providing us with insights and lessons that help shape our future.
          Whether you’re interested in ancient civilizations, regional histories, or debunking popular myths, you’ll find a treasure trove of knowledge here.
        </p>
      </section>

      {/* Linked Sections */}
      <section className="linked-sections">
        <h2>Explore by Category</h2>
        <div className="category-links">
          {/* Regions Link */}
          <div className="category-card">
            <img
              src="https://img.freepik.com/premium-photo/wooden-world-map-with-rustic-vintage-feel-map-is-dark-brown-color-with-countries-oceans-lighter-brown_1209158-26753.jpg" // Sample image for Regions
              alt="Regions"
              style={{ width: '100%', maxWidth: '351px', height: '300px' }}
              className="category-image"
            />
            <h3>Regions</h3>
            <p>Explore the history and cultures of different regions across the globe.</p>
            <Link to="/region" className="category-link">Explore Regions</Link>
          </div>

          {/* Ethnicities Link */}
          <div className="category-card">
            <img
              src="https://americanindianrepublic.com/wp-content/uploads/2021/10/native-americans-are-not-all-the-same-an-exploration-of-indigenous-diversity.jpg" // Sample image for Ethnicities
              alt="Ethnicities"
              className="category-image"
            />
            <h3>Ethnicities</h3>
            <p>Learn about the history, contributions, and stories of different ethnic groups.</p>
            <Link to="/ethnicity" className="category-link">Explore Ethnicities</Link>
          </div>

          {/* Myth Debunking Link */}
          <div className="category-card">
            <img
              src="https://img.thread-bare.com/store/thread-bare/ZeTzagXO/bcCPtGWG.mockup" // Sample image for Myth Debunking
              alt="Myth Debunking"
              style={{ width: '100%', maxWidth: '351px', height: '300px' }}
              className="category-image"
            />
            <h3>Myth Debunking</h3>
            <p>Separate fact from fiction and explore the true stories behind popular myths.</p>
            <Link to="/myths" className="category-link">Debunk Myths</Link>
          </div>
        </div>
      </section>

      <footer className="history-footer">
        <p>&copy; 2024 Interactive History. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default History;
 
