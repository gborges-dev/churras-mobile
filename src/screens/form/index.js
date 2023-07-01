import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const Formulario = ({navigation}) => {
    const [homens, setHomens] = useState('');
    const [mulheres, setMulheres] = useState('');
    const [criancas, setCriancas] = useState('');
  
    const handleCalcular = () => {  
      AsyncStorage.setItem('qtdHomens', homens);
      AsyncStorage.setItem('qtdMulheres', mulheres);
      AsyncStorage.setItem('qtdCriancas', criancas);

      navigation.navigate('FormQtdComida', { homens, mulheres, criancas });
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Only Churras</Text>
        <Text style={styles.subtitle}>Quantas pessoas estarão no churrasco?</Text>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Homem(s)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={homens}
            onChangeText={setHomens}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Mulher(es)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={mulheres}
            onChangeText={setMulheres}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Criança(s)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={criancas}
            onChangeText={setCriancas}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleCalcular}>
          <Text style={styles.buttonText}>Calcular</Text>
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
    fieldContainer: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
      color: '#333333',
    },
    input: {
      width: 200,
      height: 40,
      borderWidth: 1,
      borderColor: '#CCCCCC',
      borderRadius: 5,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: '#FF6F00',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 25,
      marginTop: 20,
    },
    buttonText: {
      fontSize: 16,
      color: '#FFFFFF',
    },
  });

export default Formulario;