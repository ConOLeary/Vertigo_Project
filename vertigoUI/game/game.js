import React, { Component } from "react";
import { StyleSheet, StatusBar,
  ImageBackground,Dimensions, View } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Matter from "matter-js";
import { Car } from "./car";
import { Road3 } from "./road";
import { Road2 } from "./join";
import { Road1 } from "./straight";
import { MoveCar, MoveRoad,Physics } from "./Movement"

const { width, height } = Dimensions.get("window");

export default class Game extends Component
{
  constructor(props)
  {
       super(props);
       this.state = {running: true};
       this.gameEngine = null;
       //this.entities = this.setupWorld();
   }

   setupWorld = () =>
   {

     let engine = Matter.Engine.create({ enableSleeping: false });
     let world = engine.world;

     let car = Matter.Bodies.rectangle(50, height/2, 80, 40);

     let straight = Matter.Bodies.rectangle(0,   0,width, height, { isStatic: true });
     let join = Matter.Bodies.rectangle(width,   0,width, height, { isStatic: true });
     let road = Matter.Bodies.rectangle((width*2) + 1, 0,width, height, { isStatic: true });
     let road2 = Matter.Bodies.rectangle((width*3) + 2, 0,width, height, { isStatic: true });
     Matter.World.add(world, [car, straight, join, road, road2]);


       return {
           physics: { engine: engine, world: world },
           road1: { body: straight, position: [0,        0], renderer: Road1 },
           road2: { body: join, position: [width,    0], renderer: Road2 },
           road3: { body: road, position: [width*2,  0], renderer: Road3 },
           road4: { body: road2, position: [width*3,  0], renderer: Road3 },
           car: { body: car, position: [50,  height/2], size:[80, 40], renderer: Car},
       }
   }

   render() {
         return (
             <View style={styles.container}>
                 <GameEngine
                     ref={(ref) => { this.gameEngine = ref; }}
                     style={styles.gameContainer}
                     running={this.state.running}
                     systems={[Physics, MoveCar, MoveRoad]}
                     entities={this.setupWorld()}>
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
