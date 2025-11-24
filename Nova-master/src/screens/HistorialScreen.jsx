// screens/HistorialScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';

export default function HistorialScreen({ navigation }) {
  const presupuesto = 300000;
  const gastoTotal = 230000;
  const porcentajeGastado = (gastoTotal / presupuesto) * 100;

  const transacciones = [
    {
      id: 1,
      nombre: 'Pago: Restaurante\nPollito Con papas',
      monto: -53000,
      color: '#FFB4A8',
    },
    {
      id: 2,
      nombre: 'Pago: Recarga Tullave',
      monto: -34000,
      color: '#FFCBA8',
    },
    {
      id: 3,
      nombre: 'Pago: Recibo Luz',
      monto: -68000,
      color: '#FFD4C4',
    },
    {
      id: 4,
      nombre: 'Pago: Universidad De la\nSabana',
      monto: -75000,
      color: '#FFCBA8',
    },
    {
      id: 5,
      nombre: 'Pago nomina semanal:',
      monto: 300000,
      color: '#B8E6B8',
    },
  ];

  const getEstado = () => {
    if (porcentajeGastado >= 80) return { texto: 'Estado Crítico', color: '#FF4444' };
    if (porcentajeGastado >= 60) return { texto: 'Estado Alto', color: '#FFA500' };
    return { texto: 'Estado Normal', color: '#4CAF50' };
  };

  const estado = getEstado();

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header navigation={navigation} type="other" title="Gastos" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          {/* Estado del presupuesto */}
          <View style={styles.estadoCard}>
            <Text style={[styles.estadoTexto, { color: estado.color }]}>
              {estado.texto}
            </Text>
          </View>

          {/* Barra de presupuesto */}
          <View style={styles.presupuestoContainer}>
            <View style={styles.barraContainer}>
              <View style={[styles.barraProgreso, { width: `${porcentajeGastado}%` }]} />
            </View>
            <View style={styles.labelsContainer}>
              <Text style={styles.labelMonto}>0$</Text>
              <Text style={styles.labelMontoActual}>
                {gastoTotal ? gastoTotal.toLocaleString('es-CO') : '0'}$
              </Text>
              <Text style={styles.labelMonto}>
                {presupuesto ? presupuesto.toLocaleString('es-CO') : '0'}$
              </Text>
            </View>
          </View>

          {/* Título de transacciones */}
          <Text style={styles.tituloTransacciones}>Transacciones</Text>

          {/* Lista de transacciones */}
          {transacciones.map((trans) => (
            <View
              key={trans.id}
              style={[styles.transaccionCard, { backgroundColor: trans.color }]}
            >
              <Text style={styles.transaccionNombre}>{trans.nombre}</Text>
              <Text
                style={[
                  styles.transaccionMonto,
                  { color: trans.monto > 0 ? '#2E7D32' : '#333' },
                ]}
              >
                {trans.monto > 0 ? '+' : ''}{trans.monto.toLocaleString('es-CO')}$
              </Text>
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
  estadoCard: {
    backgroundColor: '#E8D4F8',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  estadoTexto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  presupuestoContainer: {
    backgroundColor: 'transparent',
    padding: 16,
    borderRadius: 16,
    marginBottom: 30,
  },
  barraContainer: {
    height: 50,
    backgroundColor: '#E0C4F0',
    borderRadius: 25,
    overflow: 'hidden',
    marginBottom: 12,
  },
  barraProgreso: {
    height: '100%',
    backgroundColor: '#FF6B6B',
    borderRadius: 25,
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelMonto: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  labelMontoActual: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  tituloTransacciones: {
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#333',
    marginBottom: 16,
  },
  transaccionCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transaccionNombre: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
    flex: 1,
  },
  transaccionMonto: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 12,
  },
});