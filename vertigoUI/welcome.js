import React, {Component} from 'react';
import {Platform, StyleSheet, Text,
        Button, View, ImageBackground,
        Image,Dimensions, TextInput,
          TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



export default function WelcomeScreen({navigation}){
    return (
      <View style={styles.Container}>
          <Text>Welcome</Text>
      </View>


    );

}

const styles = StyleSheet.create(
  {
    Container:
    {
      flex: 1,
      alignItems: 'center',
    },

  });
