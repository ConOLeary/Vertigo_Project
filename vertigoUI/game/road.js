import React, { PureComponent } from "react";
import { StyleSheet, View,Image,Dimensions } from "react-native";
import road from "./road.jpg"

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class Road extends PureComponent {
  render() {
    let x = this.props.body.position.x;
    let y = this.props.body.position.y;
    return (
      <Image source={road} style={[styles.road, { left: x, top: 0 }]} />
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

export { Road };
