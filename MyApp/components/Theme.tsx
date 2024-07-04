import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext';

const ThemeScreen: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={[styles.app, theme === 'dark' ? styles.dark : styles.light]}>
      <Text style={styles.label}>Theme:</Text>
      <Switch
        value={theme === 'dark'}
        onValueChange={toggleTheme}
        style={styles.switch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  light: {
    backgroundColor: 'white',
    color: 'black',
  },
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
  switch: {
    marginTop: 10,
  },
  label: {
    fontSize: 18,
  },
});

export default ThemeScreen;
