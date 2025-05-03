import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SHome from '../screens/SHome'
import STask from '../screens/STask'
import React from "react";

export default function Routes() {
    const { Navigator, Screen } = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Home" component={SHome} />
                <Screen name="Task" component={STask} />
            </Navigator>
        </NavigationContainer>
    );
}