import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Landing } from './Landing';

export type HomeStackParams = {
  Home: undefined;
};

const HomeStack = createStackNavigator();

export const HomeNavigation = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Landing} />
    </HomeStack.Navigator>
  );
};
