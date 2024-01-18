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
import { Provider } from 'react-redux';
import { store } from './src/redux/stores/store';

function App(): JSX.Element {
  const netInfo = useNetInfo();
  const isDarkMode = useColorScheme() === 'dark';
  setI18nConfig();

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
