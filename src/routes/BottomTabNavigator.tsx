import * as React from 'react';
import { Image, Text, View, useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Landing } from '../features/Home/screens/Landing';
import Profile from '../features/Home/screens/Profile';

type TabBarIconProps = {
  name: string;
  icon: string;
  label: string;
  focused: boolean;
};
const TabBarIcon = ({ name, icon, label, focused }: TabBarIconProps) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        width={32}
        height={32}
        resizeMode="contain"
        source={{
          uri: icon || 'https://cdn-icons-png.flaticon.com/128/847/847969.png',
        }}
      />
      <Text style={{ color: focused ? '#807a70' : '#807a7066' }}>{label}</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          minHeight: 60,
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
          justifyContent: 'flex-start',
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        name="Home"
        component={Landing}
        options={{
          tabBarLabel: 'Exchanges',
          tabBarAccessibilityLabel: 'Exchanges',
          tabBarTestID: 'Exchanges',
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabBarIcon
              icon={'https://cdn-icons-png.flaticon.com/128/8958/8958410.png'}
              name="Home"
              focused={focused}
              label={'Home'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarAccessibilityLabel: 'Profile',
          tabBarTestID: 'Profile',
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabBarIcon
              icon={'https://cdn-icons-png.flaticon.com/128/847/847969.png'}
              name="Profile"
              focused={focused}
              label={'Profile'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
