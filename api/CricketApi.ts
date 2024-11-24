import axios from 'axios';

// Base URL for CricAPI
const CRIC_API_BASE_URL = 'https://api.cricapi.com/v1';

/**
 * Fetch Cricket Fixtures
 * @param apikey - Your API key
 * @param id - Series ID (for fetching specific series fixtures)
 * @returns Promise containing cricket fixture data
 */
export const fetchCricketFixtures = async (apikey: string, id: string) => {
  try {
    const response = await axios.get(`${CRIC_API_BASE_URL}/series_info`, {
      params: { apikey, id },
    });
    return response.data.data.matchList; // Return the list of fixtures
  } catch (error) {
    console.error('Error fetching cricket fixtures:', error);
    throw error;
  }
};

/**
 * Fetch Cricket Match Details
 * @param apikey - Your API key
 * @param matchId - Match ID
 * @returns Promise containing match details
 */
export const fetchCricketMatchDetails = async (apikey: string, matchId: string) => {
  try {
    const response = await axios.get(`${CRIC_API_BASE_URL}/match_info`, {
      params: { apikey, id: matchId },
    });
    return response.data.data; // Return match details
  } catch (error) {
    console.error('Error fetching cricket match details:', error);
    throw error;
  }
};
