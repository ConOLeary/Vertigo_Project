import React, { PureComponent } from "react";
import { StyleSheet, View,Image,Dimensions } from "react-native";
import road from "./road.png"

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class Road3 extends PureComponent {
  render() {
    let x = this.props.position[0];
    let y = this.props.position[1];
    return (
      <Image source={road} style={[styles.road, { left: x, top: y }]} />
    );
  }
}

const styles = StyleSheet.create({
  road: {
    width: screenWidth,
    height: screenHeight,
    position: "absolute"
  }
});

export { Road3 };
