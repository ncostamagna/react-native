import React from "react"
import { View, Text, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OtraPagina from "../screens/miOtraPagina"

const Stack = createNativeStackNavigator();

export default function OtraPaginaStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings-2" component={OtraPagina} />
    </Stack.Navigator>
  );
}