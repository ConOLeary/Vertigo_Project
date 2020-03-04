import React, { PureComponent } from "react";
import { StyleSheet, View,Image } from "react-native";
import vehicle from "./vehicle.png"

class Car extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const width = this.props.size[0];
    const height = this.props.size[1];
    const x = this.props.body.position.x;
    const y = this.props.body.position.y;
    //const angle = this.props.body.angle;
    return (
      <Image
        source={vehicle}
        style={[{
        left: x,
        top: y,
        width: width,
        height: height,
        position: "absolute",
      }]} />
    );
  }
}


export { Car };
