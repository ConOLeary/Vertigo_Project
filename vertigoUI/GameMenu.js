import React, {Component} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from 'react-native/Libraries/NewAppScreen';
import bgImage from "./assets/Home.jpg"
import logo from "./assets/vLogo.png"


var level = 0;
var coinGoal = 0;
var totalCoinsCollected = 0;

export default function GameMenu({navigation}){
    return(
    <ImageBackground source={bgImage} style={styles.BackGroundContainer}>

    <View style={styles.container}>

       <View style = {styles.topBorder}> 
           <Image source = {logo} style = {styles.logo}/>
           <View style = {styles.title}>
                <Text style = {styles.MenuHeader}>
                   Vertigo Game Menu
                </Text>
            </View>
        </View>
      

    
     <View style = {styles.info}>
        <Text style = {styles.gameInfo}>
            <Text>Keep the car on the car on track and collect as many coins as possible, your current level is {level}. </Text>
            <Text> Your coin goal is {coinGoal}. </Text>  
            <Text>Total amount of coins collected. {totalCoinsCollected}.</Text>  
      </Text>
      </View>

      <View style={styles.topC}>
            <Text style={styles.top}>Options Menu</Text>

            <View style={styles.line}/>
     </View>

      
        <View style = {styles.OptionsList}>
                <TouchableOpacity
                // onPress = {navigation.navigate('Game', {name: 'Game'})}
                // TODO:
                // Same problem here, if I leave this function in the Game Menu will be skipped
                style = {styles.button}>
                <Text style = {styles.eButtonText}>
                Start Game
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress = {() => alert('Feature in Development')}
                style = {styles.button}>
                <Text style = {styles.eButtonText}>
                Change Game
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress = {() => alert('Feature in Development')}
                style = {styles.button}>
                <Text style = {styles.eButtonText}>
                Store
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress = {() => alert('Feature in Development')}
                style = {styles.button}>
                <Text style = {styles.eButtonText}>
                Accessibilty
                </Text>
            </TouchableOpacity>
        </View>
    </View> 
    </ImageBackground>   
        )
}


const styles = StyleSheet.create({
    BackGroundContainer:
    {
      flex: 1,
      width: null,
      height: null,
      //alignItems: 'center',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    topBorder: {
        flex: 1,
        flexDirection: "row"
    },

    logo: {
      width: 159,
      height: 159,
      marginBottom:10,
      marginBottom: 10,
      resizeMode: "contain",
      flex: 1,
    },
    title:
    {
      alignItems: 'center',
      marginTop: 30
    },
    MenuHeader:
    {
      fontSize:35,
      color:'white'
    },
    
    info: {
        marginTop: 40,
        height: 310,
        width: 310,
        borderColor: 'white',
        borderWidth: 1,
        // borderRadius: 60,
        alignItems: 'center',
        flex: 2,
    },
    gameInfo: {
      color: 'white',
      fontWeight: "bold",
      fontSize: 20,
      marginTop: '10%',
    },

    topC:
    {
      alignItems: 'center',
      marginTop: 30
    },
    top:
    {
      fontSize:35,
      color:'white'
    },

    line: {
        backgroundColor: 'white',
        height: 2,
        width: 300,
        marginBottom: -20,
        marginTop: '3%',
      },

    OptionsList: {
        marginTop: 40,
        height: 310,
        width: 270,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 60,
        alignItems: 'center',
        flex: 3,
    },


    button: {
        color: '#AE33C2',
        marginTop: 10,
        width: '35%',
        height: 35,
        borderRadius: 25,
        backgroundColor: null,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#AE33C2",
        borderWidth: 2
    },
    eButtonText: {
        color: '#AE33C2',
        fontWeight: "bold",
        fontSize: 10,
      },
  });