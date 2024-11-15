// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/questions';

export const fetchQuizzes = async () => {
  try {
    const response = await axios.get(`${API_URL}?timestamp=${new Date().getTime()}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    return [];
  }
};

