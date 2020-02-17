import React, {Component} from 'react';
import {Platform, StyleSheet, Text,
        Button, View, ImageBackground,
        Image,Dimensions, TextInput,
          TouchableOpacity} from 'react-native';

import bgImage from "./assets/LogIn.jpg"
import logo from "./assets/vLogo.png"
//import icon from 'react-native-vector-icons/Ionicons'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class VertigoLogIn extends Component {
  render() {
    return (
        <ImageBackground source={bgImage} style={styles.BackGroundContainer}>

            <View styles={styles.logoContainer}>
                <Image source={logo} styles={styles.logo}/>
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    placeholder={'Username'}
                    placeHolderTextColor="Grey"
                    underlineColorAndroid='transparent'
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    placeHolderTextColor="Grey"
                    underlineColorAndroid='transparent'
                />
              </View>

              <TouchableOpacity style= {styles.SignIn}>
                  <Text style= {styles.SignInText}>Sign In</Text>
              </TouchableOpacity>


        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create(
  {
    BackGroundContainer:
    {
      flex: 1,
      width: null,
      height: null,
      alignItems: 'center',
      //justifyContent: 'center',
    },
    logo:
    {
      top: 50,
      width: '30%',
      height: '20%',
    },
    logoContainer:
    {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:
    {
      top: 70,
      width: screenWidth -55,
      height: 45,
      borderRadius: 25,
      fontSize: 16,
      paddingLeft: 45,
      backgroundColor: 'rgba(255,255,255,0.9)',
      color: 'rgba(40,40,40,0.7)',
      marginHorizontal: 25
    },
    inputContainer:
    {
      marginTop: 15
    },
    SignIn:
    {
      marginTop: 15,
      top: 80,
      width: screenWidth -55,
      height: 45,
      borderRadius: 25,
      backgroundColor: '#93278F',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: "white",
      borderWidth: 1.5
    },
    SignInText:
    {
      color: "white",
      fontWeight: "bold",
      fontSize: 20,
    }
});
