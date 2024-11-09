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
import Quiz1 from './pages/Quiz1';
import Quiz2 from './pages/Quiz2';
import Quiz3 from './pages/Quiz3';
import Quiz4 from './pages/Quiz4';
import DarkMoments from './pages/DarkMoments';
import Mystery from './pages/Mysteries';
import Mytho from './pages/Mytho';
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
                <Route path="/quiz1" element={<Quiz1 />} />
                <Route path="/quiz2" element={<Quiz2 />} />
                <Route path="/quiz3" element={<Quiz3 />} />
                <Route path="/quiz4" element={<Quiz4 />} />
                <Route path="/darkhistory" element={<DarkMoments />} />
                <Route path="/mystery" element={<Mystery />} />
                <Route path="/mytho" element={<Mytho />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
