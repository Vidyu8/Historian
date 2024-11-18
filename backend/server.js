const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Quiz = require('./models/Quiz'); // Ensure this points to the quiz model
const quizRoutes = require('./routes/quizRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());  // To parse JSON bodies
app.use(cors()); // Allow requests from your frontend (React app)
app.use(quizRoutes);

// Connect to MongoDB (make sure to use your own connection string)
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Routes for fetching quizzes
app.get('/api/questions', async (req, res) => {
  try {
    const quizzes = await Quiz.find(); // Fetch all quizzes
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load quizzes' });
  }
});

// Route to fetch a specific quiz by ID
app.get('/api/questions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const quizId =new mongoose.Types.ObjectId(id); 

    // Use findOne with _id to retrieve the quiz
    const quiz = await Quiz.findOne({ _id: quizId });

    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }

    res.json(quiz); // Send the found quiz as a response
  } catch (error) {
    console.error('Error fetching quiz by ID:', error);
    res.status(500).json({ error: 'Failed to load quiz' });
  }
});


// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
