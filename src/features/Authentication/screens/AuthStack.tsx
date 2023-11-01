import * as React from 'react';
import { Landing } from './Landing';
import { RootStack } from '../../../routes/RootStack';
import { Login } from './Login';

export type AuthStackParams = {
  Landing: undefined;
  Login: undefined;
};

const config = {
  animation: 'spring' as const,
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export const AuthNavigation = () => {
  return (
    <RootStack.Navigator initialRouteName="Landing">
      <RootStack.Group
        screenOptions={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}>
        <RootStack.Screen name="Landing" component={Landing} />
        <RootStack.Screen name="Login" component={Login} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
