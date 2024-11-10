// backend/controllers/quizController.js
const Quiz = require('../models/Quiz');

const getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        
        // If no quizzes are found
        if (!quizzes || quizzes.length === 0) {
            return res.status(404).json({ message: 'No quizzes found' });
        }

        res.status(200).json(quizzes);
    } catch (error) {
        console.error('Error fetching quizzes:', error);
        res.status(500).json({ message: 'Failed to retrieve quizzes', error: error.message });
    }
};

module.exports = {
    getAllQuizzes,
};
