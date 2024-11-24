import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FixtureDetailsScreen = ({ route }: any) => {
  const { fixture } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{fixture.homeTeam} vs {fixture.awayTeam}</Text>
      <Text>Date: {fixture.date}</Text>
      <Text>Time: {fixture.time}</Text>
      <Text>Venue: {fixture.venue || 'Unknown'}</Text>
      <Text>Status: {fixture.status || 'Scheduled'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});

export default FixtureDetailsScreen;
