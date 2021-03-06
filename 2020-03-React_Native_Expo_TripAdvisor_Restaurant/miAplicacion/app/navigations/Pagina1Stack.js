import React from "react"
import { View, Text, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pagina from "../screens/pagina1"

const Stack = createNativeStackNavigator();

export default function PaginaStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={Pagina} />
      <Stack.Screen name="Details" component={Pagina} />
    </Stack.Navigator>
  );
}