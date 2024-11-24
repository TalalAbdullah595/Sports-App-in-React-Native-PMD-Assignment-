import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { fetchFixtures} from '../api/SportsApi';

const FootballScreen = ({ navigation }: any) => {
  const [fixtures, setFixtures] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFixtures = async () => {
      try {
        const data = await fetchFixtures('football');
        setFixtures(data.fixtures || []);
      } catch (error) {
        console.error('Error fetching football fixtures:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFixtures();
  }, []);

  const renderFixture = ({ item }: any) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { fixture: item })} style={styles.item}>
      <Text style={styles.title}>{item.homeTeam} vs {item.awayTeam}</Text>
      <Text>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={fixtures}
          renderItem={renderFixture}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { padding: 16, borderBottomWidth: 1, borderColor: '#ddd' },
  title: { fontWeight: 'bold', fontSize: 16 },
});

export default FootballScreen;
