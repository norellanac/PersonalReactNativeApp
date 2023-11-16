import { Platform } from 'react-native';

export function testID(id: string) {
  return Platform.OS === 'android'
    ? { accessible: true, accessibilityLabel: id }
    : { testID: id };
}
