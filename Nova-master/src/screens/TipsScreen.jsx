// screens/TipsScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';

export default function TipsScreen({ navigation }) {
  const tips = [
    {
      id: 1,
      title: 'Ahorra el 20% de tus ingresos',
      description: 'Destina automáticamente el 20% de tu salario a una cuenta de ahorros antes de gastar.',
      icon: '💰',
      color: '#FFD93D',
    },
    {
      id: 2,
      title: 'Regla 50/30/20',
      description: '50% necesidades, 30% gustos, 20% ahorros. Organiza tus finanzas de forma balanceada.',
      icon: '📊',
      color: '#6BCF7F',
    },
    {
      id: 3,
      title: 'Evita compras impulsivas',
      description: 'Espera 24 horas antes de comprar algo que no necesitas urgentemente.',
      icon: '⏰',
      color: '#FF6B6B',
    },
    {
      id: 4,
      title: 'Usa apps de control',
      description: 'Registra todos tus gastos diarios para identificar fugas de dinero.',
      icon: '📱',
      color: '#4ECDC4',
    },
    {
      id: 5,
      title: 'Crea un fondo de emergencia',
      description: 'Ahorra al menos 3-6 meses de gastos para imprevistos.',
      icon: '🆘',
      color: '#95E1D3',
    },
    {
      id: 6,
      title: 'Compara precios',
      description: 'Antes de comprar, compara precios en diferentes tiendas o plataformas.',
      icon: '🔍',
      color: '#F38181',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header navigation={navigation} type="other" title="Tips Financieros" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.subtitle}>
            Consejos prácticos para mejorar tus finanzas personales
          </Text>

          {tips.map((tip) => (
            <TouchableOpacity key={tip.id} style={[styles.tipCard, { borderLeftColor: tip.color }]}>
              <View style={styles.tipIcon}>
                <Text style={styles.iconText}>{tip.icon}</Text>
              </View>
              <View style={styles.tipContent}>
                <Text style={styles.tipTitle}>{tip.title}</Text>
                <Text style={styles.tipDescription}>{tip.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  scrollContent: {
    paddingBottom: 120,
  },
  content: {
    padding: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  tipCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderLeftWidth: 4,
  },
  tipIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#F0F0F0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 24,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  tipDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});