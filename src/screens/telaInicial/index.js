import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TelaInicial = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Form');
  };
  const handlePressHist = () => {
    navigation.navigate('Historico');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Only Churras</Text>
      <Text style={styles.subtitle}>O aplicativo perfeito para seus churrascos!</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonHistorico} onPress={handlePressHist}>
        <Text style={styles.buttonText}>Histórico</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    color: '#666666',
  },
  button: {
    backgroundColor: '#FF6F00',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  buttonHistorico: {
    backgroundColor: '#FF6F00',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginTop: 15
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default TelaInicial;