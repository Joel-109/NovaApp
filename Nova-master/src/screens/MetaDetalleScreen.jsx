// screens/MetaDetalleScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';

export default function MetaDetalleScreen({ navigation, route }) {
  // Recibir los datos de la meta seleccionada
  const { meta } = route.params;

  const formatearMonto = (monto) => {
    if (monto >= 1000000) {
      return `${(monto / 1000000).toFixed(0)} millones`;
    }
    return `${(monto / 1000).toFixed(0)} mil`;
  };

  const getMensajeMotivacional = (progreso) => {
    if (progreso >= 80) return '¡Ánimo! Ya falta Poco';
    if (progreso >= 60) return '¡Vas muy bien! Sigue así';
    if (progreso >= 40) return '¡Buen avance! No te detengas';
    if (progreso >= 20) return '¡Ya empezaste! Continúa';
    return '¡Comienza hoy! Cada paso cuenta';
  };

  const getIconoMeta = (imagen) => {
    const iconos = {
      carro: '🚗',
      avion: '✈️',
      libro: '📚',
      casa: '🏠',
      viaje: '🌍',
      general: '🎯',
    };
    return iconos[imagen] || iconos.general;
  };

  const getColorProgreso = (progreso) => {
    if (progreso >= 80) return '#7C4DFF';
    if (progreso >= 60) return '#9C27B0';
    if (progreso >= 30) return '#E91E63';
    return '#FF5722';
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header navigation={navigation} type="other" title={meta.nombre} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          {/* Card de progreso */}
          <View style={styles.progresoCard}>
            <View style={styles.circuloGrande}>
              <View style={[styles.circuloBorde, { 
                borderColor: getColorProgreso(meta.progreso),
                borderWidth: 12,
              }]}>
                <Text style={styles.progresoGrande}>{meta.progreso}%</Text>
              </View>
            </View>
            <View style={styles.infoProgreso}>
              <Text style={styles.infoTexto}>
                Meta: {formatearMonto(meta.metaMonto)}
              </Text>
              <Text style={styles.infoTexto}>
                Tiempo estipulado: {meta.tiempoEstipulado}
              </Text>
              <Text style={styles.infoTexto}>
                Mayor ahorro: {formatearMonto(meta.mayorAhorro)}
              </Text>
            </View>
          </View>

          {/* Presupuesto actual */}
          <View style={styles.presupuestoCard}>
            <Text style={styles.presupuestoTexto}>
              Presupuesto actual: {formatearMonto(meta.ahorroActual)}
            </Text>
            <Text style={styles.flechaIcon}>▶</Text>
          </View>

          {/* Imagen/Icono de la meta */}
          <View style={styles.imagenCard}>
            <View style={styles.imagenContainer}>
              <View style={styles.imagenPlaceholder}>
                <Text style={styles.metaIcon}>{getIconoMeta(meta.imagen)}</Text>
              </View>
            </View>
          </View>

          {/* Estadísticas adicionales */}
          <View style={styles.estadisticasCard}>
            <View style={styles.estadisticaItem}>
              <Text style={styles.estadisticaLabel}>Total ahorrado</Text>
              <Text style={styles.estadisticaValor}>
                ${meta.ahorroActual.toLocaleString('es-CO')}
              </Text>
            </View>
            <View style={styles.estadisticaDivider} />
            <View style={styles.estadisticaItem}>
              <Text style={styles.estadisticaLabel}>Falta ahorrar</Text>
              <Text style={styles.estadisticaValor}>
                ${(meta.metaMonto - meta.ahorroActual).toLocaleString('es-CO')}
              </Text>
            </View>
          </View>

          {/* Mensaje motivacional */}
          <View style={styles.motivacionalCard}>
            <Text style={styles.motivacionalTexto}>
              {getMensajeMotivacional(meta.progreso)}
            </Text>
          </View>
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
  progresoCard: {
    backgroundColor: '#B8E6B8',
    borderRadius: 20,
    padding: 24,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  circuloGrande: {
    alignItems: 'center',
    marginBottom: 20,
  },
  circuloBorde: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progresoGrande: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#333',
  },
  infoProgreso: {
    gap: 8,
  },
  infoTexto: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  presupuestoCard: {
    backgroundColor: '#E8D4F8',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  presupuestoTexto: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    flex: 1,
  },
  flechaIcon: {
    fontSize: 20,
    color: '#333',
  },
  imagenCard: {
    backgroundColor: '#FFE0B2',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    overflow: 'hidden',
  },
  imagenContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  imagenPlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  metaIcon: {
    fontSize: 100,
  },
  estadisticasCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  estadisticaItem: {
    flex: 1,
    alignItems: 'center',
  },
  estadisticaLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  estadisticaValor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  estadisticaDivider: {
    width: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 16,
  },
  motivacionalCard: {
    backgroundColor: '#E8D4F8',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  motivacionalTexto: {
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#333',
    textAlign: 'center',
  },
});