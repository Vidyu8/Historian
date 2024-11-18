import axios from 'axios';

// Ensure the correct endpoint and full URL or rely on the proxy setting
export const fetchQuizById = async (id) => {
    try {
        // With proxy (frontend `package.json`):
        const response = await axios.get(`/api/quizzes/${id}`);  // Updated endpoint

        // Or, without proxy (manually setting the backend URL):
        // const response = await axios.get(`http://localhost:5000/api/quizzes/${id}`);

        return response.data;
    } catch (error) {
        console.error('Error fetching quiz by ID:', error);
        throw error;
    }
};

