import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/history">History</Link>
            <Link to="/myths">Myth Debunking</Link>
            <Link to="/quizzes">Quizzes</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
        </nav>
    );
}

export default Navbar;  
