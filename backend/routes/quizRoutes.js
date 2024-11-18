const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');

// Route to fetch all quizzes
router.get('/api/questions', async (req, res) => {
    try {
        const quizzes = await Quiz.find(); // Fetch all quizzes from the database
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ error: 'Failed to load quizzes' });
    }
});

// Route to fetch a specific quiz by ID
router.get('/api/questions/:id', async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id); // Fetch quiz by ID
        if (!quiz) {
            return res.status(404).json({ error: 'Quiz not found' });
        }
        res.status(200).json(quiz);
    } catch (error) {
        res.status(500).json({ error: 'Failed to load quiz' });
    }
});

module.exports = router;
