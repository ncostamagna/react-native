import React from "react"
import {createStackNavigator} from "@react-navigation/native-stack"
import Pagina from "../screens/pagina1"

const Stack = createStackNavigator();

export default function PaginaStack(){
    return (
        <Stack.Navigator>
            // siempre va a salir el stack que esta primero
            <Stack.Screem
                name="page"
                component={Pagina}
                options={{title:"PAgina"}}
            />
            <Stack.Screem
                name="page2"
                component={Pagina}
                options={{title:"La pija de mi perro Ulises"}}
            />
        </Stack.Navigator>
    )
}