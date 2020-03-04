import React, { Component } from "react";
import { StyleSheet, StatusBar,
  ImageBackground,Dimensions, View } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Matter from "matter-js";
import { Car } from "./car";
import { Road } from "./road";
import { MoveCar } from "./carMovement"
import { MoveRoad } from "./roadMovement"

import bgImage from "./road.jpg"

export default class Game extends Component
{
  constructor(props)
  {
       super(props);
       this.state = {running: true};
       this.gameEngine = null;
       this.entities = this.setupWorld();
   }

   setupWorld = () =>
   {
     const { width, height } = Dimensions.get("window");
     const engine = Matter.Engine.create({ enableSleeping: false });
     const world = engine.world;

     let car = Matter.Bodies.rectangle(50, height/2, 80, 40);
     let bg1 = Matter.Bodies.rectangle(0,0,width, height, { isStatic: true });
     let bg2 = Matter.Bodies.rectangle(width,0,width, height, { isStatic: true });
     Matter.World.add(world, [car, bg1, bg2]);

       return {
           physics: { engine: engine, world: world },
           bg1: { body: bg1, renderer: Road },
           bg2: { body: bg2, renderer: Road },
           car: { body: car, size:[80, 40], renderer: Car},
       }
   }

   render() {
         return (
             <View style={styles.container}>
                 <GameEngine
                     ref={(ref) => { this.gameEngine = ref; }}
                     style={styles.gameContainer}
                     running={this.state.running}
                     systems={[MoveRoad, MoveCar]}
                     entities={this.entities}>
                     <StatusBar hidden={true} />
                 </GameEngine>
             </View>
         );
     }
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: '#fff',
     },
     gameContainer: {
         position: 'absolute',
         top: 0,
         bottom: 0,
         left: 0,
         right: 0,
     },
 });
