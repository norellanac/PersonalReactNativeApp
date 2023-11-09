import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { translate } from '../../../utils/i18n';
import { AuthStackParams } from './AuthStack';
import Screen from '../../../components/templates/Screen';

interface Props extends StackScreenProps<AuthStackParams, 'Landing'> {}

export const Landing = ({ route, navigation }: Props) => {
  console.error('Landing Auth');
  return (
    <Screen>
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        <View style={{ margin: 5 }}>
          <Button
            color="#807a79"
            onPress={() => navigation.navigate('Login')}
            title={translate('auth.landing_screen.login')}
          />
        </View>
        <View style={{ margin: 5 }}>
          <Button
            color="#807a79"
            onPress={() => navigation.navigate('Login')}
            title={translate('auth.landing_screen.register')}
          />
        </View>
      </View>
    </Screen>
  );
};
