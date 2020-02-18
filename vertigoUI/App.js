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


//----------------------------------------------------------------------------------
//    Navigation
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
