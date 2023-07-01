import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const FormsQtdComida = ({route, navigation}) => {
    const [carneHomem, setCarneHomem] = useState('400');
    const [carneMulher, setCarneMulher] = useState('300');
    const [carneCrianca, setCarneCrianca] = useState('200');
    const [linguica, setLinguica] = useState('70');
    const [cervejaHomem, setCervejaHomem] = useState('12');
    const [cervejaMulher, setCervejaMulher] = useState('9');
    const [refrigeranteHomem, setRefrigeranteHomem] = useState('500');
    const [refrigeranteMulher, setRefrigeranteMulher] = useState('600');
    const [refrigeranteCrianca, setRefrigeranteCrianca] = useState('400');
  
    const handleCalcular = () => {
        AsyncStorage.setItem('qtdCarneHomem', carneHomem);
        AsyncStorage.setItem('qtdCarnemulher', carneMulher);
        AsyncStorage.setItem('qtdCarneCriancas', carneCrianca);
        AsyncStorage.setItem('qtdLinguica', linguica);
        AsyncStorage.setItem('qtdCervejaHomem', cervejaHomem);
        AsyncStorage.setItem('qtdCervejaMulher', cervejaMulher);
        AsyncStorage.setItem('qtdRefrigeranteHomem', refrigeranteHomem);
        AsyncStorage.setItem('qtdRefrigeranteMulher', refrigeranteMulher);
        AsyncStorage.setItem('qtdRefrigeranteCriança', refrigeranteCrianca);

        const qtdHomens = parseInt(route.params.homens),
              qtdMulheres = parseInt(route.params.mulheres),
              qtdCriancas = parseInt(route.params.criancas),
              qtdTotalPessoas = qtdHomens + qtdMulheres + qtdCriancas;

        let qtdFinalCarne = qtdTotalPessoas * (parseInt(carneHomem) + parseInt(carneMulher) + parseInt(carneCrianca))
        let qtdFinalLinguica = qtdTotalPessoas * parseInt(linguica);
        let qtdFinalCerveja = (qtdHomens + qtdMulheres) * (parseInt(cervejaHomem) + parseInt(cervejaMulher));
        let qtdFinalRefrigerante = qtdTotalPessoas * (parseInt(refrigeranteHomem) + parseInt(refrigeranteMulher) + parseInt(refrigeranteCrianca));

        console.log('Pessoas: ' + qtdTotalPessoas);
        console.log('Carnes: ' + qtdFinalCarne);
        console.log('Linguiça: ' + qtdFinalLinguica);
        console.log('Cerveja: ' + qtdFinalCerveja);
        console.log('Refrigerante: ' + qtdFinalRefrigerante);

    //  navigation.navigate('ResultScreen', {
    //     carneHomem,
    //     carneMulher,
    //     carneCrianca,
    //     linguica,
    //     cervejaHomem,
    //     cervejaMulher,
    //     refrigeranteHomem,
    //     refrigeranteMulher,
    //     refrigeranteCrianca,
    //   });
    };
  
    return (
      <ScrollView>
<View style={styles.container}>
        <Text style={styles.title}>Only Churras</Text>
        <Text style={styles.subtitle}>Quantidade de consumo:</Text>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Carne (g)</Text>
          <Text style={styles.labelSmall}>(Homem)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={carneHomem}
            onChangeText={setCarneHomem}
          />
          <Text style={styles.labelSmall}>(Mulher)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={carneMulher}
            onChangeText={setCarneMulher}
          />
          <Text style={styles.labelSmall}>(Criança)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={carneCrianca}
            onChangeText={setCarneCrianca}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Linguiça (g)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={linguica}
            onChangeText={setLinguica}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Cerveja (Latas)</Text>
          <Text style={styles.labelSmall}>(Homem)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={cervejaHomem}
            onChangeText={setCervejaHomem}
          />
          <Text style={styles.labelSmall}>(Mulher)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={cervejaMulher}
          onChangeText={setCervejaMulher}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Refrigerante (ml)</Text>
        <Text style={styles.labelSmall}>(Homem)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={refrigeranteHomem}
          onChangeText={setRefrigeranteHomem}
        />
        <Text style={styles.labelSmall}>(Mulher)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={refrigeranteMulher}
          onChangeText={setRefrigeranteMulher}
        />
        <Text style={styles.labelSmall}>(Criança)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={refrigeranteCrianca}
          onChangeText={setRefrigeranteCrianca}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleCalcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
      </ScrollView>
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
    marginBottom: 20,
    color: '#666666',
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },
  labelSmall: {
    fontSize: 12,
    color: '#666666',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#FF6F00',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginTop: 20,
    marginBottom: 15
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default FormsQtdComida;