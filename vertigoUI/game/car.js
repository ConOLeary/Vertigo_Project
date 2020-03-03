import React, { PureComponent } from "react";
import { StyleSheet, View,Image } from "react-native";
import vehicle from "./vehicle.png"
const RADIUS = 20;

class Car extends PureComponent {
  render() {
    const x = this.props.position[0] - RADIUS / 2;
    const y = this.props.position[1] - RADIUS / 2;
    return (
      <Image source={vehicle} style={[styles.car, { left: x, top: y }]} />
    );
  }
}

const styles = StyleSheet.create({
  car: {
    width: 90,
    height: 40,
    position: "absolute"
  }
});

export { Car };
