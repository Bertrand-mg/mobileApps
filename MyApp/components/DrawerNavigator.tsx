import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import MainTabNavigator from './MainTabNavigator';
import CalculatorScreen from './Calculator';
import ThemeScreen from './Theme';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from './ThemeContext'; // Import the Theme Context

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  const { theme } = useTheme(); // Use the Theme Context

  // Define styles based on the theme
  const drawerStyles = {
    light: {
      drawerStyle: {
        backgroundColor: '#f4f4f4',
        width: 240,
      },
      drawerActiveTintColor: 'red',
      drawerInactiveTintColor: 'gray',
      itemStyle: { marginVertical: 5 },
    },
    dark: {
      drawerStyle: {
        backgroundColor: '#333',
        width: 240,
      },
      drawerActiveTintColor: 'red',
      drawerInactiveTintColor: 'lightgray',
      itemStyle: { marginVertical: 5 },
    },
  };

  // Select the styles based on the current theme
  const currentStyles = theme === 'dark' ? drawerStyles.dark : drawerStyles.light;

  // Define header styles based on the theme
  const headerStyles = theme === 'dark'
    ? { backgroundColor: 'black', headerTintColor: 'white' }
    : { backgroundColor: 'white', headerTintColor: 'black' };

  // Custom Drawer Content Component
  const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        ...currentStyles,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={MainTabNavigator}
        options={{
          headerStyle: {
            backgroundColor: headerStyles.backgroundColor, // Set header background color based on theme
          },
          headerTintColor: headerStyles.headerTintColor, // Set header text color based on theme
          drawerIcon: ({ focused, color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Calculator"
        component={CalculatorScreen}  
        options={{
          headerStyle: {
            backgroundColor: headerStyles.backgroundColor, // Set header background color based on theme
          },
          headerTintColor: headerStyles.headerTintColor, // Set header text color based on theme
          drawerIcon: ({ focused, color, size }) => (
            <MaterialIcons name="calculate" size={size} color={color} />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="Theme"
        component={ThemeScreen}
        options={{
          headerStyle: {
            backgroundColor: headerStyles.backgroundColor, // Set header background color based on theme
          },
          headerTintColor: headerStyles.headerTintColor, // Set header text color based on theme
          drawerIcon: ({ focused, color, size }) => (
            <MaterialIcons name="brightness-6" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
