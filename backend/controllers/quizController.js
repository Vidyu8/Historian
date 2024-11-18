const Quiz = require('../models/Quiz');

const getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        if (!quizzes || quizzes.length === 0) {
            return res.status(404).json({ message: 'No quizzes found' });
        }
        res.status(200).json(quizzes);
    } catch (error) {
        console.error('Error fetching quizzes:', error);
        res.status(500).json({ message: 'Failed to retrieve quizzes', error: error.message });
    }
};

const getQuizById = async (req, res) => {
    const { id } = req.params; 
    try {
        const quiz = await Quiz.findById(id);
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        res.status(200).json(quiz);
    } catch (error) {
        console.error('Error fetching quiz by ID:', error);
        res.status(500).json({ message: 'Failed to retrieve quiz', error: error.message });
    }
};

module.exports = { getAllQuizzes, getQuizById }; 
