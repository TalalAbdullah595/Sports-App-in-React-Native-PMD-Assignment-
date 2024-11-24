import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CricketScreen from '../screens/CricketScreen';
import FootballScreen from '../screens/FootBallScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cricket" component={CricketScreen} />
      <Tab.Screen name="Football" component={FootballScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
