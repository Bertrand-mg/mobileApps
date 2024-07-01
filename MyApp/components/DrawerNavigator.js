import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabNavigator from './MainTabNavigator';
import CalculatorScreen from './Calculator';
import { MaterialIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#f4f4f4',
          width: 240,
        },
        drawerActiveTintColor: 'red',
        drawerInactiveTintColor: 'gray',
        itemStyle: { marginVertical: 5 },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={MainTabNavigator}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Calculator"
        component={CalculatorScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <MaterialIcons name="calculate" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
