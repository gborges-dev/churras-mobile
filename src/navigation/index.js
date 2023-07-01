import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaInicial from "../screens/telaInicial";
import Formulario from "../screens/form";
import Result from "../screens/result";
import FormsQtdComida from "../screens/form/qtdDeComida";

const Stack = createNativeStackNavigator();

const AppNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home"
                    component={TelaInicial}
                />
                <Stack.Screen
                    name="Form"
                    component={Formulario}    
                />
                <Stack.Screen
                    name="FormQtdComida"
                    component={FormsQtdComida}
                />
                <Stack.Screen
                    name="Result"
                    component={Result}    
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNav;