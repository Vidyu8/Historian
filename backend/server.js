// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the database connection
const quizRoutes = require('./routes/quizRoutes'); // Import quiz routes
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use(quizRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
