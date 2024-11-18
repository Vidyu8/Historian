const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');

// Route to fetch all quizzes
app.get('/api/questions', async (req, res) => {
    try {
      const quizzes = await Quiz.find(); // Fetch all quizzes from the database
      res.json(quizzes);
    } catch (error) {
      res.status(500).json({ error: 'Failed to load quizzes' });
    }
  });
  
  

// Route to fetch a specific quiz by ID
app.get('/api/questions/:id', async (req, res) => {
    try {
      const quiz = await Quiz.findById(req.params.id); // Fetch quiz by ID
      if (!quiz) {
        return res.status(404).json({ error: 'Quiz not found' });
      }
      res.json(quiz);
    } catch (error) {
      res.status(500).json({ error: 'Failed to load quiz' });
    }
  });
  

module.exports = router;
