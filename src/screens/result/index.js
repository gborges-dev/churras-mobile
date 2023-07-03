import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const Result = ({route, navigation}) => {
    const {
        qtdTotalPessoas,
        qtdFinalCarne,
        qtdFinalLinguica,
        qtdFinalCerveja,
        qtdFinalRefrigerante,
      } = route.params;
    
      return (
        <View style={styles.container}>
        <Text style={styles.title}>Only Churras</Text>
        <Text style={styles.subtitle}>Resultado do Cálculo</Text>
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Quantidade Total de Pessoas:</Text>
          <Text style={styles.resultText}>{qtdTotalPessoas.toFixed(2)}</Text>
          <Text style={styles.resultLabel}>Quantidade Total de Carne (g):</Text>
          <Text style={styles.resultText}>{qtdFinalCarne.toFixed(2)}</Text>
          <Text style={styles.resultLabel}>Quantidade Total de Linguiça (g):</Text>
          <Text style={styles.resultText}>{qtdFinalLinguica.toFixed(2)}</Text>
          <Text style={styles.resultLabel}>Quantidade Total de Cervejas (latas):</Text>
          <Text style={styles.resultText}>{qtdFinalCerveja.toFixed(2)}</Text>
          <Text style={styles.resultLabel}>Quantidade Total de Refrigerantes (ml):</Text>
          <Text style={styles.resultText}>{qtdFinalRefrigerante.toFixed(2)}</Text>
        </View>
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
      resultContainer: {
        alignItems: 'center',
      },
      resultLabel: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333333',
        fontWeight: 'bold'
      },
      resultText: {
        fontSize: 16,
        marginBottom: 20,
        color: '#666666',
      },
});

export default Result;