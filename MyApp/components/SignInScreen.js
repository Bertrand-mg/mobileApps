import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SignInScreen = () => {
  return (
    <LinearGradient
      colors={['#8b1c73', '#d32f2f']}
      style={styles.background}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Hello</Text>
        <Text style={styles.signInText}>Sign in!</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
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

        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>SIGN IN</Text>
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
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  headerText: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
  },
  signInText: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  formContainer: {
    flex: 2.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    paddingTop: 0,
    justifyContent: 'center',
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
  forgotPasswordText: {
    color: '#000',
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'flex-end',
  },
  signInButton: {
    backgroundColor: '#d32f2f',
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
