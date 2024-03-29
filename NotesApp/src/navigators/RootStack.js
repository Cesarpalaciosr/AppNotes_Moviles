import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import { Colors } from '../screens/components/styles';
const {primary, tertiary} = Colors;

import Login from "../screens/login/Login";
import Register from "../screens/register/Register";
import Welcome from "../screens/welcome/Welcome";
// ojo pelao

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyled:{
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle : {
                        paddingLeft: 20
                    } 
                }}
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen options={{headerTintColor: primary}} name="Welcome" component={Welcome}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;