import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { fetchCricketFixtures } from '../api/CricketApi';

const CricketScreen = ({ navigation }: any) => {
    const [fixtures, setFixtures] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const apikey = '0d2edd4f-7ceb-48bd-88f3-10aab6f43a03'; // Your API key
    const seriesId = 'e98b7f38-1b44-4251-b9de-5c57f90b5f90'; // Example Series ID

    useEffect(() => {
        const loadFixtures = async () => {
            try {
                const data = await fetchCricketFixtures(apikey, seriesId);
                setFixtures(data || []);
            } catch (error) {
                console.error('Error loading cricket fixtures:', error);
            } finally {
                setLoading(false);
            }
        };

        loadFixtures();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={fixtures}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() =>
                            navigation.navigate('CricketMatchDetails', {
                                matchId: item.id,
                                type: 'cricket', // Pass type as 'cricket'
                            })
                        }
                    >
                        <Text style={styles.title}>{item.name}</Text>
                        <Text>{new Date(item.date).toLocaleString()}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    item: { padding: 16, borderBottomWidth: 1, borderColor: '#ddd' },
    title: { fontSize: 16, fontWeight: 'bold' },
});

export default CricketScreen;
