import React, {Component} from 'react';
import {Platform, StyleSheet, Text,
        Button, View, ImageBackground,
        Image,Dimensions, TextInput,
          TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

import topImage from "./assets/Welcome.jpg"


export default function WelcomeScreen({navigation}){
    return (

      <View style={styles.page}>

          <View style={styles.imgC}>

              <ImageBackground source={topImage} style={styles.img}>

              <View style={styles.textC}>
                <Text style= {styles.text1}>W</Text>
                <Text style= {styles.text1}>E</Text>
                <Text style= {styles.text1}>L</Text>
                <Text style= {styles.text1}>C</Text>
                <Text style= {styles.text1}>O</Text>
                <Text style= {styles.text1}>M</Text>
                <Text style= {styles.text1}>E</Text>
              </View>

              <Text style= {styles.text2}>Feeling Motivated?</Text>

              </ImageBackground>

          </View>

          <View style={styles.quoteC}>
              <Text style= {styles.quote}>“ Every day, do something</Text>
              <Text style= {styles.quote}>that will inch you towards</Text>
              <Text style= {styles.quote}> a better tomorrow “</Text>
          </View>

          <TouchableOpacity style= {styles.continue}
               onPress={() => navigation.navigate('Home', {name: 'Home'})}>

              <Text style= {styles.continueText}>Continue</Text>
          </TouchableOpacity>

      </View>



    );

}


//----------------------------------------------------------------------------------
//    StyleSheet
//----------------------------------------------------------------------------------
const styles = StyleSheet.create(
  {

    page:
    {
      alignItems: 'center',
      flex: 1,
    },

    imgC:
    {
      //alignItems: 'center',
      flex: 0.8,
      width: '110%',
      borderBottomLeftRadius: 90,
		  borderBottomRightRadius: 90,
      //borderRadius:50,
      overflow: 'hidden',
    },
    textC:
    {
      flexDirection:'column',
      alignItems: 'center',
      marginTop: '7%',
      marginRight: '70%',
    },
    text1:
    {
      marginTop: '-5%',
      fontSize:32,
      color:'white',
      fontWeight: "bold",
    },
    text2:
    {
      marginTop: '10%',
      marginLeft: '20%',
      //fontFamily: 'Cochin',
      fontSize:25,
      color:'white'
    },
    img:
    {
      flex: 1,
      width: '110%',
      height: '100%',
    },
    quoteC:
    {
      marginTop: 20,
      alignItems: 'center',
      width: '70%',

    },
    quote:
    {
      marginTop: 5,
      //fontFamily: 'Cochin',
      fontSize:20,
      color:'#AE33C2'
    },
    continue:
    {
      marginTop: 10,
      top: 70,
      width: screenWidth -55,
      height: 45,
      borderRadius: 25,
      backgroundColor: null,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: "#AE33C2",
      borderWidth: 3
    },
    continueText:
    {
      color: "#AE33C2",
      fontWeight: "bold",
      fontSize: 20,
    },


  });
