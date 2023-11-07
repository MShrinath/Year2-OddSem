import axios from 'axios';

const APP_ID = '47d2f960';
const APP_KEY = '229ceee72f2c5b93f5bb427e6f01c145';

const api = axios.create({
    baseURL: 'https://api.edamam.com',
});

export const searchRecipes = async (query) => {
    try {
        const response = await api.get('/search', {
            params: {
                q: query,
                app_id: APP_ID,
                app_key: APP_KEY,
            },
        });
        return response.data.hits;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
};