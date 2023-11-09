import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { AuthStackParams } from './AuthStack';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { translate } from '../../../utils/i18n';
import { useAuth } from '../hooks/useAuth';

interface Props extends StackScreenProps<AuthStackParams, 'Login'> {}

export const Login = ({ route, navigation }: Props) => {
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    navigation.navigate('App');
  };
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text style={{ color: '#807a79' }}>
        {translate('auth.landing_screen.auth_to_continue')}
      </Text>

      <View style={{ margin: 5 }}>
        <TextInput
          style={styles.input}
          onChangeText={setUser}
          value={user}
          placeholder={translate('auth.landing_screen.enter_username')}
          placeholderTextColor="#807a79"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder={translate('auth.landing_screen.enter_password')}
          placeholderTextColor="#807a79"
          keyboardType="default"
          secureTextEntry={true}
        />
        <Button
          color="#807a79"
          onPress={handleLogin}
          title={translate('auth.landing_screen.register')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    color: '#807a79',
  },
});
