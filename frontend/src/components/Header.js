import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Header = () => {
    const [query, setQuery] = useState(''); // State for search input
    const navigate = useNavigate(); // React Router navigation hook
  
    // Search Handler
    const handleSearch = (e) => {
        e.preventDefault();
  
        if (!query) {
            alert('Please enter a search term.');
            return;
        }
  
        const searchQuery = query.toLowerCase();
        console.log('Search Query:', searchQuery); // Debugging
  
        // Navigation logic
        switch (true) {
            case searchQuery.includes('region'):
                navigate('/regions');
                break;
            case searchQuery.includes('history'):
                navigate('/history');
                break;
            case searchQuery.includes('ethnic'):
                navigate('/ethnicities');
                break;
            case searchQuery.includes('myth'):
                navigate('/myths');
                break;
            case searchQuery.includes('unsolved'):
                navigate('/mysteries');
                break;
            case searchQuery.includes('dark'):
                navigate('/darkhistory');
                break;
            case searchQuery.includes('about'):
                navigate('/about');
                break;
            case searchQuery.includes('contact'):
                navigate('/contact');
                break;
            case searchQuery.includes('quiz'):
                navigate('/quizzes');
                break;
            default:
                alert('No matching page found!');
        }
  
        setQuery(''); // Clear search input
    };

    return (
        <header>
            <h1>Historian.</h1>
            <p>Discover History by Area, Region, Ethnicity, and More!</p>
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    className="search-text"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
        </header>
    );
};

export default Header;