import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { fetchFootballFixtures } from '../api/FootBallApi';

const FootballScreen = ({ navigation }: any) => {
    const [fixtures, setFixtures] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadFixtures = async () => {
            try {
                const data = await fetchFootballFixtures();
                setFixtures(data || []);
            } catch (error) {
                console.error('Error loading football fixtures:', error);
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
                            navigation.navigate('MatchDetails', {
                                matchId: item.id,
                                type: 'football', // Pass type as 'football'
                            })
                        }
                    >
                        <Text style={styles.title}>{item.name}</Text>
                        <Text>{new Date(item.starting_at).toLocaleString()}</Text>
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

export default FootballScreen;
