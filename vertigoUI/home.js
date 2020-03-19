import React, {Component} from 'react';
import {Platform, StyleSheet, Text,
        Button, View, ImageBackground,
        Image,Dimensions, TextInput,
        TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

import bgImage from "./assets/Home.jpg"
import menu from "./assets/menu.png"


export default function HomeScreen({navigation}){
    return (

      <ImageBackground source={bgImage} style={styles.BackGroundContainer}>

        <SafeAreaView style={styles.container}>

            <ScrollView style={styles.scrollView}>

                  <View style={styles.topC}>
                        <Text style={styles.top}>Scheduled Exercises</Text>

                        <View style={styles.line}/>
                  </View>

                  <View style={styles.main}>
                      <View style={styles.exercise}>
                        <Text style={styles.eTitle}>Today: Mon 9th</Text>
                        <View style={styles.eLine}/>
                        <Text style={styles.eList}>Lateral Gaze Stability III</Text>
                        <TouchableOpacity style= {styles.eButton}
                        onPress={() => navigation.navigate('Game', {name: 'Game'})}>
                          <Text style= {styles.eButtonText}>Begin</Text>
                        </TouchableOpacity>
                        <Text style={styles.eList}>Vertical Gaze Stability I</Text>
                        <TouchableOpacity style= {styles.eButton}
                        onPress={() => navigation.navigate('Game', {name: 'Game'})}>
                          <Text style= {styles.eButtonText}>Begin</Text>
                        </TouchableOpacity>
                      </View>

                      <View style={styles.exercise}>
                        <Text style={styles.eTitle}>Tomorrow: Tues 10th</Text>
                        <View style={styles.eLine}/>
                        <Text style={styles.eList}>Lateral Gaze Stability II</Text>
                        <TouchableOpacity style= {styles.eButton}
                        onPress={() => navigation.navigate('Game', {name: 'Game'})}>
                          <Text style= {styles.eButtonText}>Begin</Text>
                        </TouchableOpacity>
                        <Text style={styles.eList}>Vertical Gaze Stability III</Text>
                        <TouchableOpacity style= {styles.eButton}
                        onPress={() => navigation.navigate('Game', {name: 'Game'})}>
                          <Text style= {styles.eButtonText}>Begin</Text>
                        </TouchableOpacity>
                      </View>


                  <View style={styles.exercise}>
                    <Text style={styles.eTitle}>This Week: Thurs 12th</Text>
                    <View style={styles.eLine}/>
                    <Text style={styles.eList}>Lateral Gaze Stability I</Text>
                    <TouchableOpacity style= {styles.eButton}>
                      <Text style= {styles.eButtonText}>Begin</Text>
                    </TouchableOpacity>

                  </View>

                  <View style={styles.exercise}>
                    <Text style={styles.eTitle}>This Week: Sun 15th</Text>
                    <View style={styles.eLine}/>
                    <Text style={styles.eList}>Rotation Exercise I</Text>
                    <TouchableOpacity style= {styles.eButton}>
                      <Text style= {styles.eButtonText}>Begin</Text>
                    </TouchableOpacity>
                    <Text style={styles.eList}>Vertical Gaze Stability II</Text>
                    <TouchableOpacity style= {styles.eButton}>
                      <Text style= {styles.eButtonText}>Begin</Text>
                    </TouchableOpacity>
                  </View>
              </View>
            </ScrollView>
            <TouchableOpacity style={styles.footer}>
                  <View style={styles.burgerBox}>
                      <Image source={menu} styles={styles.menu}/>
                  </View>
            </TouchableOpacity>
        </SafeAreaView>
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
      //alignItems: 'center',
    },
    container:
    {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    scrollView:
    {

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
      marginTop: '3%'
    },
    footer: {
      alignItems: 'center',
    },
    burgerBox: {
      backgroundColor: 'white',
      height: 70,
      width: 100,
      borderRadius: 70,
      alignItems: 'center',
      justifyContent: 'center',

    },
    menu: {
      height: 40,
      width: 40,
    },
    main: {
      marginTop: 20,
      alignItems: 'center',
    },
    exercise: {
      marginTop: 40,
      height: 310,
      width: 270,
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 60,
      alignItems: 'center',
    },
    eTitle: {
      color: 'white',
      fontWeight: "bold",
      fontSize: 20,
      marginTop: '6%'
    },
    eLine: {
      backgroundColor: 'white',
      height: 1,
      width: 200,
      marginBottom: 10,
      marginTop: '3%'

    },
    eList: {
      color: 'white',
      fontSize: 24,
      marginTop: '10%',
    },
    eButton: {
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
