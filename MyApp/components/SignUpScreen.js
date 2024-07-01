import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SignUpScreen = () => {
  return (
    <LinearGradient
      colors={['#8b1c73', '#d32f2f']}
      style={styles.background}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Create Your</Text>
        <Text style={styles.headerText}>Account</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="John Smith"
            placeholderTextColor="#aaa"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Phone or Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Joydeo@gmail.com"
            placeholderTextColor="#aaa"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#aaa"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  headerContainer: {
    flex: 0.5, // Decreased to move the formContainer higher
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 2.5, // Increased to move the formContainer higher
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    paddingTop: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    color: 'red',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  signUpButton: {
    backgroundColor: '#d32f2f',
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
