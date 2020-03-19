import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text,
        Button, View, ImageBackground,
        Image,Dimensions, TextInput,
        TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LogInScreen from './LogIn'
import WelcomeScreen from './welcome'
import HomeScreen from './home'
import Game from './game/game'


//----------------------------------------------------------------------------------
//    Navigation Control
//----------------------------------------------------------------------------------

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>


        <Stack.Screen
            name="LogIn"
            component={LogInScreen}
            options={{ headerShown: false }}
            />

        <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
            />
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Game"
                component={Game}
                options={{ headerShown: false }}
                />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
