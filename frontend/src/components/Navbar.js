import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/History">History</Link>
            <Link to="/Quizzes">Quizzes</Link>
            <Link to="/DarkMoments">Dark history</Link>
            <Link to="/Mysteries">Unsolved mysteries</Link>
            <Link to="/Aboutus">About Us</Link>
            <Link to="Contactus">Contact Us</Link>
        </nav>
    );
}

export default Navbar;  
