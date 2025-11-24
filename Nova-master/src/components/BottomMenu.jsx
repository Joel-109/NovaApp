// components/BottomMenu.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function BottomMenu({ navigation, currentScreen = 'Home' }) {
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  const isActive = (screen) => currentScreen === screen;

  return (
    <View style={styles.bottomMenu}>
      <TouchableOpacity 
        style={styles.menuItem}
        onPress={() => navigateTo('Historial')}
      >
        <Text style={styles.menuIcon}>📊</Text>
        <Text style={[
          styles.menuText,
          isActive('Historial') && styles.menuTextActive
        ]}>
          Gastos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.menuItem}
        onPress={() => navigateTo('Metas')}
      >
        <Text style={styles.menuIcon}>🎯</Text>
        <Text style={[
          styles.menuText,
          isActive('Metas') && styles.menuTextActive
        ]}>
          Metas
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.menuItem}
        onPress={() => navigateTo('Tips')}
      >
        <Text style={styles.menuIcon}>💡</Text>
        <Text style={[
          styles.menuText,
          isActive('Tips') && styles.menuTextActive
        ]}>
          Tips
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.menuItem}
        onPress={() => navigateTo('Estrategias')}
      >
        <Text style={styles.menuIcon}>💰</Text>
        <Text style={[
          styles.menuText,
          isActive('Estrategias') && styles.menuTextActive
        ]}>
          Estrategias
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomMenu: {
    left: '0.94%',
    bottom: 0,
    width: '98%',
    backgroundColor: '#5846D8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    paddingBottom: 10,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    zIndex: 999,
  },
  menuItem: {
    alignItems: 'center',
    gap: 4,
  },
  menuIcon: {
    fontSize: 24,
  },
  menuText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '500',
    opacity: 0.7,
  },
  menuTextActive: {
    opacity: 1,
    fontWeight: '700',
  },
});