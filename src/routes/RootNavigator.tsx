import React, { useRef, useCallback, useEffect, useState } from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';

import { AuthNavigation } from '../features/Authentication';
import { AuthorizedApp } from './AuthorizedApp';
import { useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useAuth } from '../features/Authentication/hooks/useAuth';

export const RootNavigator = () => {
  const { isAuth, checkIsAuth } = useAuth();

  useEffect(() => {
    checkIsAuth();
  }, []);

  const [navContainerKey, setNavContainerKey] = useState(1);

  const routeNameRef = useRef<string>();
  const navigationRef = createNavigationContainerRef();

  const handleNavigationReady = useCallback(() => {
    routeNameRef.current = navigationRef?.current?.getCurrentRoute()?.name;
  }, [navigationRef]);

  const handleTrackRouteChange = useCallback(() => {
    const currentRouteName = navigationRef?.current?.getCurrentRoute()?.name;

    if (routeNameRef.current !== currentRouteName) {
      console.log('routing', '=== SCREEN - ' + currentRouteName);
    }

    routeNameRef.current = currentRouteName;
  }, [navigationRef]);

  const isDarkMode = useColorScheme() === 'dark';

  const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: isDarkMode ? Colors.darker : Colors.lighter,
      card: 'rgb(255, 255, 255)',
      text: !isDarkMode ? Colors.darker : Colors.lighter,
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  return (
    <NavigationContainer
      theme={MyTheme}
      key={navContainerKey}
      ref={navigationRef}
      onReady={handleNavigationReady}
      onStateChange={handleTrackRouteChange}>
      {isAuth ? <AuthorizedApp /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
