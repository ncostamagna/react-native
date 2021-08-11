import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PaginaStack from './Pagina1Stack';
import OtraPagina from '../screens/miOtraPagina';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
            name="page" 
            component={PaginaStack} 
            options={{
                title: "Pagina", tabBarBadge: 2
            }}/>
        <Tab.Screen 
            name="other_page" 
            component={OtraPagina}
            options={{
                title: "Otra pagina"
            }}/>
        <Tab.Screen 
            name="other_page_2" 
            component={OtraPagina}
            options={{
                title: "Otra pagina"
            }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}