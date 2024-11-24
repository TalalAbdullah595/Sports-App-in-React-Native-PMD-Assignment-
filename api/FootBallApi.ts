import axios from 'axios';

// Replace with your actual API token
// const API_TOKEN = 'AoruFkrHlZOpHDF30hAmSchdClG7SBAIecc4KL9Y1qayD6CMCsVlEKKQa3aw';
const API_TOKEN = 'wzVdrYluqQn9eXOCmsO0F1CQnMRnyvxggy5udLEMyk7jJGYwS9iUqPQhpZmC'
const FOOTBALL_API_BASE_URL = 'https://api.sportmonks.com/v3/football';

/**
 * Fetch Football Fixtures
 * @returns Promise containing football fixture data
 */
export const fetchFootballFixtures = async () => {
  try {
    const response = await axios.get(`${FOOTBALL_API_BASE_URL}/fixtures`, {
      params: { api_token: API_TOKEN },
    });
    return response.data.data; // Return fixtures data
  } catch (error) {
    console.error('Error fetching football fixtures:', error);
    throw error;
  }
};

/**
 * Fetch Football Match Details
 * @param matchId - The match ID
 * @returns Promise containing match details data
 */
export const fetchFootballMatchDetails = async (matchId: string) => {
  try {
    const response = await axios.get(`${FOOTBALL_API_BASE_URL}/fixtures/${matchId}`, {
      params: { api_token: API_TOKEN },
    });
    return response.data.data; // Return match details data
  } catch (error) {
    console.error('Error fetching football match details:', error);
    throw error;
  }
};
