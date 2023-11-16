import { NativeModules } from 'react-native';
import mockRNLocalize from 'react-native-localize/mock';
//netinfo mock
NativeModules.RNCNetInfo = {
  getCurrentConnectivity: jest.fn(),
  isConnectionMetered: jest.fn(),
  addListener: jest.fn(),
  removeListeners: jest.fn(),
};
//localize mock
jest.mock('react-native-localize', () => mockRNLocalize);

jest.mock('react-native-localize', () => {
  return {
    getLocales: jest.fn(),
    // you can add other functions mock here that you are using
  };
});

//mocking react nantive navigation
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useFocusEffect: () => jest.fn(),
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
    }),
    navigation: {
      navigate: jest.fn(),
      goBack: jest.fn(),
    },
  };
});

jest.mock('i18n-js', () => ({
  I18n: () => {
    return {
      t: jest.fn((str: string) => str),
      i18n: { changeLanguage: jest.fn() },
    };
  },
}));

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
