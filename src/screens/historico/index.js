import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HistoryScreen = () => {
  const [qtdTotalPessoas, setQtdTotalPessoas] = useState(null);
  const [qtdFinalRefrigerante, setQtdFinalRefrigerante] = useState(null);
  const [qtdFinalCerveja, setQtdFinalCerveja] = useState(null);
  const [qtdFinalLinguica, setQtdFinalLinguica] = useState(null);
  const [qtdFinalCarne, setQtdFinalCarne] = useState(null);
  const [historyItem, setHistoryItem] = useState(false);

  useEffect(() => {
    fetchHistoryItem();
  }, []);

  const fetchHistoryItem = async () => {
    try {
      const pessoas = await AsyncStorage.getItem('qtdPessoas', (err, result) => {
        setQtdTotalPessoas(result);
      });

      const carnes = await AsyncStorage.getItem('qtdFinalCarne', (err, result) => {
        setQtdFinalCarne(result)
      });

      const linguicas = await AsyncStorage.getItem('qtdFinalLinguica', (err, result) => {
        setQtdFinalLinguica(result)
      });

      const cervejas = await AsyncStorage.getItem('qtdFinalCerveja', (err, result) => {
        setQtdFinalCerveja(result)
      });

      const refrigerantes = await AsyncStorage.getItem('qtdFinalRefrigerante', (err, result) => {
        setQtdFinalRefrigerante(result)
      });

      if (pessoas || carnes || linguicas || cervejas || refrigerantes) {
        setHistoryItem(true);
      }

    } catch (error) {
      console.log('Error retrieving history item:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Only Churras</Text>
      <Text style={styles.subtitle}>Histórico</Text>
      {historyItem ? (
        <View style={styles.historyContainer}>
          <Text style={styles.itemLabel}>Quantidade Total de Pessoas:</Text>
          <Text style={styles.itemValue}></Text>
          <Text style={styles.itemLabel}>Quantidade Final de Carne (g):</Text>
          <Text style={styles.itemValue}>{qtdFinalCarne}</Text>
          <Text style={styles.itemLabel}>Quantidade Final de Linguiça (g):</Text>
          <Text style={styles.itemValue}>{qtdFinalLinguica}</Text>
          <Text style={styles.itemLabel}>Quantidade Final de Cerveja (latas):</Text>
          <Text style={styles.itemValue}>{qtdFinalCerveja}</Text>
          <Text style={styles.itemLabel}>Quantidade Final de Refrigerante (ml):</Text>
          <Text style={styles.itemValue}>{qtdFinalRefrigerante}</Text>
        </View>
      ) : (
        <Text style={styles.emptyText}>Nenhum registro no histórico</Text>
      )}
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
  historyContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    width: 300,
  },
  itemLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333333',
  },
  itemValue: {
    fontSize: 16,
    color: '#666666',
  },
  emptyText: {
    fontSize: 16,
    color: '#666666',
  },
});

export default HistoryScreen;