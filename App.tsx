/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import 'react-native-gesture-handler';

import { RootNavigator } from './src/routes/RootNavigator';
import { useAuth } from './src/features/Authentication/hooks/useAuth';
import { setI18nConfig } from './src/utils';
import AlertModal from './src/components/molecules/AlertModal';
import { useNetInfo } from '@react-native-community/netinfo';

function App(): JSX.Element {
  const netInfo = useNetInfo();

  const { isAuth, checkIsAuth } = useAuth();
  const isDarkMode = useColorScheme() === 'dark';
  setI18nConfig();

  useEffect(() => {
    checkIsAuth();
  }, []);

  return (
    <>
      <RootNavigator />
      <AlertModal
        visible={!netInfo.isConnected}
        title="Alert"
        body="You´re not connected to the internet"
        positiveButtonText="Retry"
        onPositiveAction={() => {
          console.log('Positive button pressed');
        }}
      />
    </>
  );
}

export default App;
