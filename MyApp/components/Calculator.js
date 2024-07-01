import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [resultCalculated, setResultCalculated] = useState(false);

  const handlePress = (value) => {
    if (resultCalculated && !isNaN(value)) {
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

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{input || '0'}</Text>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleBackspace}>
          <Text style={styles.buttonText}>⌫</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleToggleSign}>
          <Text style={styles.buttonText}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonWide} onPress={() => handlePress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEqual}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  display: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  displayText: {
    color: '#fff',
    fontSize: 48,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#d32f2f',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 5,
  },
  buttonWide: {
    backgroundColor: '#d32f2f',
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,
    height: 80,
    borderRadius: 40,
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default Calculator;
