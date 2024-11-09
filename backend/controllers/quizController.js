// backend/controllers/quizController.js
const Quiz = require('../models/Quiz');

// Controller function to get all quizzes
const getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve quizzes' });
    }
};

module.exports = {
    getAllQuizzes,
};
