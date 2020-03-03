import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar, ImageBackground } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Car } from "./car";
import { MoveCar } from "./carMovement"

import bgImage from "./road.jpg"

export default class Game extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.container}>
          <GameEngine systems={[MoveCar]} entities={
            {0: { position: [40,  300], renderer: <Car />}}}>
              <StatusBar hidden={true} />
          </GameEngine>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});

AppRegistry.registerComponent("Game", () => Game);
