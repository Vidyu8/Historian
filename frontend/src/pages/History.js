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
              src="https://upload.wikimedia.org/wikipedia/commons/1/10/World_map_600px.png" // Sample image for Regions
              alt="Regions"
              className="category-image"
            />
            <h3>Regions</h3>
            <p>Explore the history and cultures of different regions across the globe.</p>
            <Link to="/region" className="category-link">Explore Regions</Link>
          </div>

          {/* Ethnicities Link */}
          <div className="category-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Flags_of_the_world.svg" // Sample image for Ethnicities
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
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Debunking_Myths.jpg" // Sample image for Myth Debunking
              alt="Myth Debunking"
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
 
