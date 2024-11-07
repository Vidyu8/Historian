import React from 'react';

function Header() {
    return (
        <header>
            <h1>Interactive History</h1>
            <p>Discover History by Area, Region, Ethnicity, and More!</p>
            <div className="search-bar">
                <input type="text" placeholder="Search for a topic, region, or event..." />
                <button>Search</button>
            </div>
        </header>
    );
}

export default Header; 
