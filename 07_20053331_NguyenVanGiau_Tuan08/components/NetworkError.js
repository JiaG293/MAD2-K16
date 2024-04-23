import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NetworkError = ({ onReconnect }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Network Error: Unable to connect</Text>
      <TouchableOpacity onPress={onReconnect} style={styles.button}>
        <Text style={styles.buttonText}>Reconnect</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red', 
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#5a43de',
    paddingVertical: 10, 
    paddingHorizontal: 20,
    borderRadius: 5, 
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', 
  },
});

export default NetworkError;
