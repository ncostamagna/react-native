import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from "react-native-elements"

import PaginaStack from './Pagina1Stack';
import OtraPagina from '../screens/miOtraPagina';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="page" //donde va a inicializar
        tabBarOptions={{
            inactiveTintColor: "#646464",
            activeTintColor: "#00a680",
        }}
        screenOptions={({route}) => ({
            tabBarIcon: ({color}) => screenOptions(route, color)
        })}
      >
        <Tab.Screen 
            name="page" 
            component={PaginaStack} 
            options={{
                title: "Pagina", tabBarBadge: 2
            }}/>
        <Tab.Screen 
            name="otra-page" 
            component={OtraPagina} 
            options={{
                title: "Otra Pagina", tabBarBadge: 2
            }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(router, color){
    let iconName;

    switch(router.name) {
        case "page":
            iconName = "compass-outline";
            break;
        case "otra-page":
            iconName = "heart-outline"
        default:
            break;
    }

    return (
        <Icon type="material-community" name={iconName} size={22} color={color} />
    )
}