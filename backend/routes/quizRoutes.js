const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

// Define route to get all quizzes
router.get('/', quizController.getAllQuizzes);

module.exports = router;
