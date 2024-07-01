import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'SignIn') {
            iconName = focused ? 'login' : 'login';
          } else if (route.name === 'SignUp') {
            iconName = focused ? 'person-add' : 'person-add';
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        // tabBarLabel: '', // Hide the label for all tabs
        headerShown: false, // Hide the header for all screens
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="SignIn" component={SignInScreen} />
      <Tab.Screen name="SignUp" component={SignUpScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
