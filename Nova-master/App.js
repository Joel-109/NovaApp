import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#340569ff'  // 👈 hace que NO se vea blanco
      }}
    >
      <AppNavigator />
    </SafeAreaView>
  );
}
