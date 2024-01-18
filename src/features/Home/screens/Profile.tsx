import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { translate } from '../../../utils/i18n';
import BottomSheet from '../../../components/molecules/BottomSheet';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAuth } from '../../Authentication/hooks/useAuth';
import { selectUser } from '../../../redux/slices/userSlice';

const Profile = () => {
  const { email, name, id} = useAppSelector(selectUser);
  const { logout } = useAuth();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.coverPhoto}
          source={{
            uri: 'https://www.bootdey.com/image/280x280/424543/424543',
          }}
        />
        <View style={styles.profileContainer}>
          <Image
            style={styles.profilePhoto}
            source={{
              uri: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
            }}
          />
          <Text style={[styles.nameText, styles.textColor]}>
            {name || 'Your Name'}
          </Text>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text style={[styles.bioText, styles.textColor]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
          ullamcorper nisi.
        </Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>1234</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>5678</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>9101</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
      <BottomSheet>
        <TouchableOpacity style={styles.button} onPress={logout}>
          <Text style={[styles.buttonText, styles.buttonTextColor]}>
            {translate('home.landing_screen.logout')}
          </Text>
        </TouchableOpacity>
      </BottomSheet>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
  },
  coverPhoto: {
    width: '100%',
    height: 200,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -50,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bioContainer: {
    padding: 15,
  },
  bioText: {
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  statContainer: {
    alignItems: 'center',
    flex: 1,
  },
  statCount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 16,
    color: '#999',
  },
  button: {
    backgroundColor: '#424543',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
    marginTop: 25,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  textColor: {
    color: '#807a79',
  },
  buttonTextColor: {
    color: 'white',
  },
});

export default Profile;
