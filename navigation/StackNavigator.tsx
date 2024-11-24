import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import MainNavigator from './MainNavigator';

const RootStack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="Splash">
      {/* Splash Screen */}
      <RootStack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      
      {/* MainNavigator includes the TabNavigator and MatchDetailsScreen */}
      <RootStack.Screen name="Main" component={MainNavigator} options={{ headerShown: false }} />
    </RootStack.Navigator>
  );
};

export default StackNavigator;
