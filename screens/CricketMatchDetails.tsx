import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchCricketMatchDetails } from '../api/CricketApi';

const CricketMatchDetailsScreen = ({ route }: any) => {
  const { matchId } = route.params;
  const [matchDetails, setMatchDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const apikey = '0d2edd4f-7ceb-48bd-88f3-10aab6f43a03'; // Your API key

  useEffect(() => {
    const loadMatchDetails = async () => {
      try {
        const data = await fetchCricketMatchDetails(apikey, matchId);
        console.log('Match Details Response:', data);  // Log the response to inspect it
        console.log('data.data', data.data)

        // Verify that data matches your expected structure
        if (data) {
        //   setMatchDetails(data.data);  // Use optional chaining just in case
        setMatchDetails(data);  // Make sure you use optional chaining
        }
      } catch (error) {
        console.error('Error loading match details:', error);
      } finally {
        setLoading(false);
      }
    };

    loadMatchDetails();
  }, [matchId]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (!matchDetails) {
    return <Text>No match details available</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{matchDetails.name}</Text>
      <Text>Start Date: {matchDetails.date}</Text>
      <Text>Match Type: {matchDetails.matchType}</Text>
      <Text>Venue: {matchDetails.venue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});

export default CricketMatchDetailsScreen;
