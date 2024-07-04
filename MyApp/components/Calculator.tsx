import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useTheme } from './ThemeContext';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [resultCalculated, setResultCalculated] = useState<boolean>(false);
  const { theme } = useTheme();

  const handlePress = (value: string) => {
    if (resultCalculated && !isNaN(Number(value))) {
      setInput(value);
      setResultCalculated(false);
    } else {
      setInput(input + value);
      setResultCalculated(false);
    }
  };

  const handleClear = () => {
    setInput('');
    setResultCalculated(false);
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleToggleSign = () => {
    if (input.startsWith('-')) {
      setInput(input.slice(1));
    } else if (input.length > 0 && input !== '0') {
      setInput('-' + input);
    }
  };

  const handleEqual = () => {
    try {
      setInput(String(eval(input)));
      setResultCalculated(true);
    } catch (e) {
      setInput('Error');
    }
  };

  const themeStyles = theme === 'dark' ? stylesDark : stylesLight;

  return (
    <View style={[styles.container, themeStyles.container]}>
      <View style={[styles.display, themeStyles.display]}>
        <Text style={[styles.displayText, themeStyles.displayText]}>{input || '0'}</Text>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={handleClear}>
          <Text style={[styles.buttonText, themeStyles.buttonText]}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={handleBackspace}>
          <Text style={[styles.buttonText, themeStyles.buttonText]}>⌫</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={handleToggleSign}>
          <Text style={[styles.buttonText, themeStyles.buttonText]}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('/')}>
          <Text style={[styles.buttonText, themeStyles.buttonText]}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('7')}>
          <Text style={[styles.buttonText, themeStyles.buttonText]}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('8')}>
          <Text style={[styles.buttonText, themeStyles.buttonText]}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('9')}>
          <Text style={[styles.buttonText, themeStyles.buttonText]}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('*')}>
          <Text style={[styles.buttonText, themeStyles.buttonText]}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('4')}>
          <Text style={[styles.buttonText, themeStyles.buttonText]}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('5')}>
          <Text style={[styles.buttonText, themeStyles.buttonText]}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('6')}>
          <Text style={[styles.buttonText, themeStyles.buttonText]}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('-')}>
          <Text style={[styles.buttonText, themeStyles.buttonText]}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('1')}>
          <Text style={[styles.buttonText, themeStyles.buttonText]}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('2')}>
          <Text style={[styles.buttonText, themeStyles.buttonText]}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('3')}>
          <Text style={[styles.buttonText, themeStyles.buttonText]}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('+')}>
          <Text style={[styles.buttonText, themeStyles.buttonText]}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.buttonWide, themeStyles.button]} onPress={() => handlePress('0')}>
          <Text style={[styles.buttonText, themeStyles.buttonText]}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('.')}>
          <Text style={[styles.buttonText, themeStyles.buttonText]}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={handleEqual}>
          <Text style={[styles.buttonText, themeStyles.buttonText]}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  display: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  displayText: {
    fontSize: 48,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 5,
  },
  buttonWide: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 80,
    borderRadius: 40,
    margin: 5,
  },
  buttonText: {
    fontSize: 24,
  },
});

const stylesLight = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  display: {
    backgroundColor: '#fff',
  },
  displayText: {
    color: '#000',
  },
  button: {
    backgroundColor: '#000',
  },
  buttonWide: {
    backgroundColor: '#000',
  },
  buttonText: {
    color: '#fff',
  },
});

const stylesDark = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  display: {
    backgroundColor: '#000',
  },
  displayText: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#fff',
  },
  buttonWide: {
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#000',
  },
});

export default Calculator;
