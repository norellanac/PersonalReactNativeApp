import { StackScreenProps } from '@react-navigation/stack';

import React from 'react';
import { HomeStackParams } from './HomeStack';
import { ActivityIndicator, Button, Text, View } from 'react-native';
import { translate } from '../../../utils/i18n';
import { useAuth } from '../../Authentication/hooks/useAuth';
import { testID } from '../../../utils';
import useCryptos from '../hooks/useCryptos';
import {
  ListElements,
  ListItem,
} from '../../../components/organisms/ListElements';
interface Props extends StackScreenProps<HomeStackParams, 'Home'> {}

export const Landing = ({ route, navigation }: Props) => {
  const { logout } = useAuth();
  const { data: cryptoData, isLoading, error } = useCryptos();

  const transformCryptos = (json: any): ListItem[] => {
    return json.map((item: any) => {
      const { id, name: title, symbol, price_usd } = item;
      return { id, title, subtitle: `${symbol} - $${price_usd}` };
    });
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
      <Text style={{ color: '#807a79' }}>{translate('commons.begin')}</Text>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <ListElements elements={transformCryptos(cryptoData.data)} />
      )}
      <View style={{ margin: 5 }}>
        <Button
          color="#807a79"
          onPress={logout}
          title={translate('home.landing_screen.logout')}
          {...testID('logout')}
        />
      </View>
    </View>
  );
};
