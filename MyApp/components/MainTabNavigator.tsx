import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import Calculator from './Calculator';

const Tab = createBottomTabNavigator();

const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof MaterialIcons.glyphMap = 'help'; // Default value

          if (route.name === 'SignIn') {
            iconName = 'login';
          } else if (route.name === 'SignUp') {
            iconName = 'person-add';
          } else if (route.name === 'Calculator') {
            iconName = 'calculate';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        headerShown: false, // Hide the header for all screens
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="SignIn" component={SignInScreen} />
      <Tab.Screen name="SignUp" component={SignUpScreen} />
      <Tab.Screen name="Calculator" component={Calculator} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
