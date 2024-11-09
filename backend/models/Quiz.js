// backend/models/Quiz.js
const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    title: String,
    description: String,
    questions: [{
        questionText: String,
        options: [String],
        correctAnswer: String,
    }],
});

module.exports = mongoose.model('Quiz', quizSchema);
