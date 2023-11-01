/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import 'react-native-gesture-handler';

import { setI18nConfig } from './src/helpers/i18n';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RootNavigator } from './src/routes/RootNavigator';
import { useAuth } from './src/features/Authentication/hooks/useAuth';

function App(): JSX.Element {
  const { isAuth, checkIsAuth } = useAuth();
  const isDarkMode = useColorScheme() === 'dark';
  setI18nConfig();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    checkIsAuth();
  }, []);

  return <RootNavigator />;
}

export default App;
