import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './components/DrawerNavigator';
import ConnectivityListener from './components/ConnectivityListener';
import { ThemeProvider } from './components/ThemeContext';
import BatteryListener from './components/BatteryListener';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <DrawerNavigator />
        <ConnectivityListener />
        <BatteryListener />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
