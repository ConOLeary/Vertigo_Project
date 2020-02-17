import React, {Component} from 'react';
import {Platform, StyleSheet, Text,
        Button, View, ImageBackground,
        Image,Dimensions, } from 'react-native';

import bgImage from "./assets/LogIn.jpg"
import logo from "./assets/vLogo.png"

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class VertigoLogIn extends Component {
  render() {
    return (
        <ImageBackground source={bgImage} style={styles.BackGroundContainer}>
          <View styles={styles.logoContainer}>
            <Image source={logo} styles={styles.logo}/>
          </View>
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

});
