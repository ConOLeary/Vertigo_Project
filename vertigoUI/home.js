import React, {Component} from 'react';
import {Platform, StyleSheet, Text,
        Button, View, ImageBackground,
        Image,Dimensions, TextInput,
          TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

import bgImage from "./assets/Home.jpg"


export default function HomeScreen({navigation}){
    return (

      <ImageBackground source={bgImage} style={styles.BackGroundContainer}>

        <View>

          <Text>H</Text>
          <Text>O</Text>
          <Text>M</Text>
          <Text>E</Text>

        </View>

        </ImageBackground>


    );

}


//----------------------------------------------------------------------------------
//    StyleSheet
//----------------------------------------------------------------------------------
const styles = StyleSheet.create(
  {
    BackGroundContainer:
    {
      flex: 1,
      width: null,
      height: null,
      alignItems: 'center',
    },

});
