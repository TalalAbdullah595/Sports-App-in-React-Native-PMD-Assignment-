import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import MatchDetailsScreen from '../screens/MatchDetailsScreen';
import CricketMatchDetailsScreen from '../screens/CricketMatchDetails';

const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator>
      {/* TabNavigator remains the root screen */}
      <MainStack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
      
      {/* MatchDetailsScreen is a separate screen */}
      <MainStack.Screen name="MatchDetails" component={MatchDetailsScreen} options={{ title: 'Match Details' }} />
      <MainStack.Screen name="CricketMatchDetails" component={CricketMatchDetailsScreen} options={{ title: 'Cricket Match Details' }} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
