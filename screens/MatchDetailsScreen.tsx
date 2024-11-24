import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchCricketMatchDetails } from '../api/CricketApi';
import { fetchFootballMatchDetails } from '../api/FootBallApi';

const MatchDetailsScreen = ({ route }: any) => {
  const { matchId, type } = route.params;
  const [matchDetails, setMatchDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const apikey = '0d2edd4f-7ceb-48bd-88f3-10aab6f43a03'; // Your API key

  useEffect(() => {
    const loadMatchDetails = async () => {
      try {
        if (type === 'cricket') {
          const data = await fetchCricketMatchDetails(apikey, matchId);
          setMatchDetails(data);
        } else if (type === 'football') {
          const data = await fetchFootballMatchDetails(matchId);
          setMatchDetails(data);
        }
      } catch (error) {
        console.error('Error loading match details:', error);
      } finally {
        setLoading(false);
      }
    };

    loadMatchDetails();
  }, [matchId, type]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (!matchDetails) {
    return <Text>No match details available</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{matchDetails.name}</Text>
      <Text>Start Date: {new Date(matchDetails.starting_at).toLocaleString()}</Text>
      <Text>Venue: {matchDetails.venue_id}</Text>
      <Text>Leg: {matchDetails.leg}</Text>
      <Text>Match Length: {matchDetails.length} minutes</Text>
      {/* Add more match details as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});

export default MatchDetailsScreen;
