// screens/MetasScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import Header from '../components/Header';

export default function MetasScreen({ navigation }) {
  const [metas, setMetas] = useState([
    {
      id: 1,
      nombre: 'Comprar un carro',
      progreso: 10,
      metaMonto: 225000000,
      ahorroActual: 22500000,
      tiempoEstipulado: '500 días 2:00 h',
      mayorAhorro: 20000000,
      color: '#FFB4A8',
      imagen: 'carro',
    },
    {
      id: 2,
      nombre: 'Vacaciones Europa',
      progreso: 30,
      metaMonto: 15000000,
      ahorroActual: 4500000,
      tiempoEstipulado: '300 días',
      mayorAhorro: 1500000,
      color: '#FFCBA8',
      imagen: 'avion',
    },
    {
      id: 3,
      nombre: 'Financiación Posgrado',
      progreso: 60,
      metaMonto: 30000000,
      ahorroActual: 18000000,
      tiempoEstipulado: '400 días',
      mayorAhorro: 5000000,
      color: '#E8F48C',
      imagen: 'libro',
    },
    {
      id: 4,
      nombre: 'Comprar un carro',
      progreso: 80,
      metaMonto: 225000000,
      ahorroActual: 180000000,
      tiempoEstipulado: '500 días 2:00 h',
      mayorAhorro: 20000000,
      color: '#B8E6B8',
      imagen: 'carro',
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [nuevaMeta, setNuevaMeta] = useState({
    nombre: '',
    metaMonto: '',
    tiempoEstipulado: '',
  });

  const getColorByProgress = (progreso) => {
    if (progreso >= 80) return '#7C4DFF';
    if (progreso >= 60) return '#9C27B0';
    if (progreso >= 30) return '#E91E63';
    return '#FF5722';
  };

  const coloresDisponibles = ['#FFB4A8', '#FFCBA8', '#E8F48C', '#B8E6B8', '#B4D4FF', '#FFD6EC'];

  const agregarMeta = () => {
    if (!nuevaMeta.nombre || !nuevaMeta.metaMonto || !nuevaMeta.tiempoEstipulado) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    const monto = parseFloat(nuevaMeta.metaMonto);
    if (isNaN(monto) || monto <= 0) {
      Alert.alert('Error', 'El monto debe ser un número válido mayor a 0');
      return;
    }

    const nuevaMetaObj = {
      id: Date.now(),
      nombre: nuevaMeta.nombre,
      progreso: 0,
      metaMonto: monto,
      ahorroActual: 0,
      tiempoEstipulado: nuevaMeta.tiempoEstipulado,
      mayorAhorro: 0,
      color: coloresDisponibles[Math.floor(Math.random() * coloresDisponibles.length)],
      imagen: 'general',
    };

    setMetas([...metas, nuevaMetaObj]);
    setModalVisible(false);
    setNuevaMeta({ nombre: '', metaMonto: '', tiempoEstipulado: '' });
    Alert.alert('¡Éxito!', 'Meta agregada correctamente');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header navigation={navigation} type="other" title="Metas" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          {/* Logo y mensaje motivacional */}
          <View style={styles.logoContainer}>
            <View style={styles.logoStar}>
              <Text style={styles.starIcon}>✨</Text>
            </View>
            <Text style={styles.logoText}>Nova</Text>
            <Text style={styles.motivationalText}>
              Recuerda que tus metas son las estrellas{'\n'}que anhelas alcanzar
            </Text>
          </View>

          {/* Botón agregar meta */}
          <TouchableOpacity
            style={styles.agregarButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.agregarButtonText}>+ Agregar Nueva Meta</Text>
          </TouchableOpacity>

          {/* Lista de metas */}
          <View style={styles.metasContainer}>
            {metas.map((meta) => (
              <TouchableOpacity
                key={meta.id}
                style={[styles.metaCard, { backgroundColor: meta.color }]}
                onPress={() => navigation.navigate('MetaDetalle', { meta })}
              >
                <View style={styles.metaContent}>
                  <Text style={styles.metaNombre}>{meta.nombre}</Text>
                  <View style={styles.progresoContainer}>
                    <View
                      style={[
                        styles.circuloProgreso,
                        {
                          borderColor: getColorByProgress(meta.progreso),
                          borderWidth: 6,
                        },
                      ]}
                    >
                      <Text style={styles.progresoTexto}>{meta.progreso}%</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Modal para agregar meta */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Nueva Meta</Text>

            <Text style={styles.label}>Nombre de la meta</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: Comprar casa"
              value={nuevaMeta.nombre}
              onChangeText={(text) => setNuevaMeta({ ...nuevaMeta, nombre: text })}
            />

            <Text style={styles.label}>Monto objetivo ($)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: 50000000"
              value={nuevaMeta.metaMonto}
              onChangeText={(text) => setNuevaMeta({ ...nuevaMeta, metaMonto: text })}
              keyboardType="numeric"
            />

            <Text style={styles.label}>Tiempo estimado</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: 365 días"
              value={nuevaMeta.tiempoEstipulado}
              onChangeText={(text) => setNuevaMeta({ ...nuevaMeta, tiempoEstipulado: text })}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.saveButton]}
                onPress={agregarMeta}
              >
                <Text style={styles.saveButtonText}>Guardar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 20,
  },
  logoStar: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  starIcon: {
    fontSize: 48,
    color: '#fff',
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  motivationalText: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 22,
    opacity: 0.95,
  },
  agregarButton: {
    backgroundColor: '#5846D8',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  agregarButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  metasContainer: {
    gap: 16,
  },
  metaCard: {
    borderRadius: 16,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  metaContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metaNombre: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#333',
    flex: 1,
  },
  progresoContainer: {
    marginLeft: 16,
  },
  circuloProgreso: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progresoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    width: '100%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#F5F5F7',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
  },
  modalButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#F5F5F7',
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#5846D8',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});