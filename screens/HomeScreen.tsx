import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TabNavigator from '../navigation/TabNavigator';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Sports App</Text>
      <View style={styles.tabsContainer}>
        <TabNavigator />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  tabsContainer: { flex: 1 },
});

export default HomeScreen;
