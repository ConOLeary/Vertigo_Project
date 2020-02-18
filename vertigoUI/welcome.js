import React, {Component} from 'react';
import {Platform, StyleSheet, Text,
        Button, View, ImageBackground,
        Image,Dimensions, TextInput,
          TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import icon from 'react-native-vector-icons/Ionicons'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function LogInScreen() {
    return (

              <View>
                  <Text style={styles.white}>Welcome</Text>
                  <TouchableOpacity>
                      <Text style={styles.blue}>Touch</Text>
                  </TouchableOpacity>
              </View>
    );
}

//----------------------------------------------------------------------------------
//    Navigation
//----------------------------------------------------------------------------------


export default LogInScreen;

//----------------------------------------------------------------------------------
//    StyleSheet
//----------------------------------------------------------------------------------
