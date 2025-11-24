// screens/EstrategiasScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Header from '../components/Header';

export default function EstrategiasScreen({ navigation }) {
  const estrategias = [
    {
      id: 1,
      titulo: 'CDT (Certificado de Depósito a Término):',
      descripcion: 'Bloquea tu dinero por un tiempo y recibe intereses fijos, sin riesgo.',
      imagen: require('../assets/images/cdt.png'), // Asegúrate de tener estas imágenes
      color: '#8B9FE8',
    },
    {
      id: 2,
      titulo: 'Inversión inmobiliaria:',
      descripcion: 'Adquirir propiedades o invertir en fondos inmobiliarios que generan renta.',
      imagen: require('../assets/images/inmobiliaria.png'),
      color: '#8B9FE8',
    },
    {
      id: 3,
      titulo: 'Inversión automática:',
      descripcion: 'Programas aportes mensuales pequeños que crecen sin que te des cuenta.',
      imagen: require('../assets/images/automatica.png'),
      color: '#8B9FE8',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header navigation={navigation} type="other" title="Estrategias de Ahorro" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          {estrategias.map((estrategia) => (
            <View key={estrategia.id} style={[styles.estrategiaCard, { backgroundColor: estrategia.color }]}>
              <View style={styles.imagenCirculo}>
                {/* Placeholder - reemplaza con Image cuando tengas las imágenes */}
                <View style={styles.imagenPlaceholder}>
                  {estrategia.id === 1 && <Text style={styles.emojiIcon}>⏰</Text>}
                  {estrategia.id === 2 && <Text style={styles.emojiIcon}>🏠</Text>}
                  {estrategia.id === 3 && <Text style={styles.emojiIcon}>💰</Text>}
                </View>
              </View>
              <View style={styles.textoContainer}>
                <Text style={styles.tituloEstrategia}>{estrategia.titulo}</Text>
                <Text style={styles.descripcionEstrategia}>{estrategia.descripcion}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8D4F8',
  },
  scrollContent: {
    paddingBottom: 120,
  },
  content: {
    padding: 20,
  },
  estrategiaCard: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  imagenCirculo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    overflow: 'hidden',
  },
  imagenPlaceholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  emojiIcon: {
    fontSize: 50,
  },
  textoContainer: {
    flex: 1,
  },
  tituloEstrategia: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#333',
    marginBottom: 8,
  },
  descripcionEstrategia: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});