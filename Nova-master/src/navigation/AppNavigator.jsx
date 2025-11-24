// navigation/AppNavigator.js
import React from "react"; 
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import HistorialScreen from "../screens/HistorialScreen";
import MetasScreen from "../screens/MetasScreen";
import MetaDetalleScreen from "../screens/MetaDetalleScreen";
import TipsScreen from "../screens/TipsScreen";
import EstrategiasScreen from "../screens/EstrategiasScreen";
import BottomMenu from "../components/BottomMenu";

const Stack = createNativeStackNavigator();

// 🔹 Mover este helper arriba
const ScreenWithMenu = (Component, screenName) => {
  return function WrappedScreen(props) {
    return (
      <View style={{ flex: 1 }}>
        <Component {...props} />
        <BottomMenu navigation={props.navigation} currentScreen={screenName} />
      </View>
    );
  };
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen name="Home" component={ScreenWithMenu(HomeScreen, "Home")} />
        <Stack.Screen name="Historial" component={ScreenWithMenu(HistorialScreen, "Historial")} />
        <Stack.Screen name="Metas" component={ScreenWithMenu(MetasScreen, "Metas")} />
        <Stack.Screen name="MetaDetalle" component={ScreenWithMenu(MetaDetalleScreen, "MetaDetalle")} />
        <Stack.Screen name="Tips" component={ScreenWithMenu(TipsScreen, "Tips")} />
        <Stack.Screen name="Estrategias" component={ScreenWithMenu(EstrategiasScreen, "Estrategias")} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
