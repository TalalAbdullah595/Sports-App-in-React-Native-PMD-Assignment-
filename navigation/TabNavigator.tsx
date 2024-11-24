import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CricketScreen from '../screens/CricketScreen';
import FootballScreen from '../screens/FootBallScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarActiveTintColor: '#00f',  // Active tab color
        tabBarInactiveTintColor: '#888',  // Inactive tab color
        tabBarLabelStyle: { fontSize: 12 }, // Label style
      }}
      >
      <Tab.Screen name="Cricket" component={CricketScreen}  
        options={{
          tabBarLabel: 'Cricket',  // Tab label
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="sports-cricket" color={color} size={size} /> // Cricket icon
          ),
        }}/>
      <Tab.Screen name="Football" component={FootballScreen}
      options={{
        tabBarLabel: 'Football',  // Tab label
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="sports-soccer" color={color} size={size} /> // Football icon
        ),
      }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
