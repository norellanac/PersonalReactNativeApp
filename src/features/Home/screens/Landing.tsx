import { StackScreenProps } from '@react-navigation/stack';

import React, { useEffect, useState } from 'react';
import { HomeStackParams } from './HomeStack';
import { ActivityIndicator, Button, Text, View } from 'react-native';
import { translate } from '../../../utils/i18n';
import { useAuth } from '../../Authentication/hooks/useAuth';
import {
  ListElemets,
  ListItems,
} from '../../../components/organisms/ListElemets';
import { testID } from '../../../utils';
interface Props extends StackScreenProps<HomeStackParams, 'Home'> {}

export const Landing = ({ route, navigation }: Props) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigation.navigate('Login');
  };
  const [data, setData] = useState<ListItems[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const mapData = (json: any): ListItems[] => {
    return json.map((item: any) => {
      return {
        email: item.email,
        id: item.id,
        name: item.name,
        phone: item.phone,
        username: item.username,
        website: item.website,
      };
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
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <ListElemets user={mapData(data)} />
      )}
      <View style={{ margin: 5 }}>
        <Button
          color="#807a79"
          onPress={handleLogout}
          title={translate('home.landing_screen.logout')}
          {...testID('logout')}
        />
      </View>
    </View>
  );
};
