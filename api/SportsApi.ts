import axios from 'axios';

const API_KEY = 'your-api-key';
const BASE_URL = 'https://example-rapidapi.com';

export const fetchFixtures = async (sport: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${sport}/fixtures`, {
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'example-rapidapi.com',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching fixtures:', error);
    throw error;
  }
};
