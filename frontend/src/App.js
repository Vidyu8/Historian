// src/App.js
import React from 'react';
import './App.css';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import History from './pages/History';
import Regions from './pages/Regions';
import Ethnicities from './pages/Ethnicities';
import Myths from './pages/Myths';
import Quizzes from './pages/Quizzes';
import Quiz from './pages/Quiz';
import DarkMoments from './pages/DarkMoments';
import Mystery from './pages/Mysteries';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/regions" element={<Regions />} />
                <Route path="/ethnicities" element={<Ethnicities />} />
                <Route path="/myths" element={<Myths />} />
                <Route path="/quizzes" element={<Quizzes />} />
                <Route path="/quiz/:id" element={<Quiz />} />
                <Route path="/darkhistory" element={<DarkMoments />} />
                <Route path="/mysteries" element={<Mystery />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
