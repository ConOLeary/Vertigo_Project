import React, { Component } from "react";
import { StyleSheet, StatusBar,
  ImageBackground,Dimensions, View, Text } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Matter from "matter-js";
import { Car } from "./car";
import { Coin } from "./coin";
import { Road3 } from "./road";
import { Road2 } from "./join";
import { Road1 } from "./straight";
import { MoveCar, MoveRoad,Physics,GetCoinsCollected } from "./Movement";

const { width, height } = Dimensions.get("window");
coinYbuffer = 420;
coinXspacing = 50;
coinXinitialBuffer = 667;
roadHeight = height * 0.8;
amplitude = roadHeight / 2;
freqMod = 3;

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
     //width & length properties here don't actually define
     let car = Matter.Bodies.rectangle(50, height/2, 80, 40);
     let coin = Matter.Bodies.rectangle(100, height/2, 80, 40);
     let coin2 = Matter.Bodies.rectangle(100, height/2, 80, 40);
     let coin3 = Matter.Bodies.rectangle(100, height/2, 80, 40);
     let coin4 = Matter.Bodies.rectangle(100, height/2, 80, 40);
     let coin5 = Matter.Bodies.rectangle(100, height/2, 80, 40);
     let coin6 = Matter.Bodies.rectangle(100, height/2, 80, 40);
     let coin7 = Matter.Bodies.rectangle(100, height/2, 80, 40);
     let coin8 = Matter.Bodies.rectangle(100, height/2, 80, 40);
     let coin9 = Matter.Bodies.rectangle(100, height/2, 80, 40);
     let coin10 = Matter.Bodies.rectangle(100, height/2, 80, 40);
     let coin11 = Matter.Bodies.rectangle(100, height/2, 80, 40);
     let coin12 = Matter.Bodies.rectangle(100, height/2, 80, 40);
     let coin13 = Matter.Bodies.rectangle(100, height/2, 80, 40);
     let coin14 = Matter.Bodies.rectangle(100, height/2, 80, 40);
     let coin15 = Matter.Bodies.rectangle(100, height/2, 80, 40);
     let coin16 = Matter.Bodies.rectangle(100, height/2, 80, 40);
     let straight = Matter.Bodies.rectangle(0,   0,width, height, { isStatic: true });
     let join = Matter.Bodies.rectangle(width,   0,width, height, { isStatic: true });
     let road = Matter.Bodies.rectangle((width*2) + 1, 0,width, height, { isStatic: true });
     let road2 = Matter.Bodies.rectangle((width*3) + 2, 0,width, height, { isStatic: true });
     Matter.World.add(world, [car, coin, coin2, straight, join, road, road2]);


       return {
           physics: { engine: engine, world: world },
           road1: { body: straight, position: [0,        0], renderer: Road1 },
           road2: { body: join, position: [width,    0], renderer: Road2 },
           road3: { body: road, position: [width*2,  0], renderer: Road3 },
           road4: { body: road2, position: [width*3,  0], renderer: Road3 },
           car: { body: car, position: [50,  height/2], size:[80, 40], coinsCollected:[0], renderer: Car},
           coin: { body: coin, position: [coinXinitialBuffer + coinXspacing,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing)))], size:[30, 30], vis:[true], renderer: Coin},
           coin2: { body: coin, position: [coinXinitialBuffer + coinXspacing*2,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*2)))], size:[30, 30], vis:[true],renderer: Coin},
           coin3: { body: coin, position: [coinXinitialBuffer + coinXspacing*3,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*3)))], size:[30, 30], vis:[true],renderer: Coin},
           coin4: { body: coin, position: [coinXinitialBuffer + coinXspacing*4,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*4)))], size:[30, 30], vis:[true],renderer: Coin},
           coin5: { body: coin, position: [coinXinitialBuffer + coinXspacing*5,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*5)))], size:[30, 30], vis:[true],renderer: Coin},
           coin6: { body: coin, position: [coinXinitialBuffer + coinXspacing*6,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*6)))], size:[30, 30], vis:[true],renderer: Coin},
           coin7: { body: coin, position: [coinXinitialBuffer + coinXspacing*7,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*7)))], size:[30, 30], vis:[true],renderer: Coin},
           coin8: { body: coin, position: [coinXinitialBuffer + coinXspacing*8,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*8)))], size:[30, 30], vis:[true],renderer: Coin},
           coin9: { body: coin, position: [coinXinitialBuffer + coinXspacing*9,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*9)))], size:[30, 30], vis:[true],renderer: Coin},
           coin10: { body: coin, position: [coinXinitialBuffer + coinXspacing*10,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*10)))], size:[30, 30], vis:[true],renderer: Coin},
           coin11: { body: coin, position: [coinXinitialBuffer + coinXspacing*11,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*11)))], size:[30, 30], vis:[true],renderer: Coin},
           coin12: { body: coin, position: [coinXinitialBuffer + coinXspacing*12,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*12)))], size:[30, 30], vis:[true],renderer: Coin},
           coin13: { body: coin, position: [coinXinitialBuffer + coinXspacing*13,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*13)))], size:[30, 30], vis:[true],renderer: Coin},
           coin14: { body: coin, position: [coinXinitialBuffer + coinXspacing*14,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*14)))], size:[30, 30], vis:[true],renderer: Coin},
           coin15: { body: coin, position: [coinXinitialBuffer + coinXspacing*15,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*15)))], size:[30, 30], vis:[true],renderer: Coin},
           coin16: { body: coin, position: [coinXinitialBuffer + coinXspacing*16,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*16)))], size:[30, 30], vis:[true],renderer: Coin},
       }//
   }

   render() {
         return (
             <View style={styles.container}>
                 
                 <GameEngine
                     ref={(ref) => { this.gameEngine = ref; }}
                     style={styles.gameContainer}
                     running={this.state.running}
                     systems={[Physics, MoveCar, MoveRoad]}
                     // add move coin
                     entities={this.setupWorld()}>
                     <StatusBar hidden={true} />
                 </GameEngine>
                 <Text style={styles.coinText}>50</Text>
             </View>
         );
     }
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: 'green',
     },
     gameContainer: {
         position: 'absolute',
         top: 0,
         bottom: 0,
         left: 0,
         right: 0,
     },
     coinText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 15,
        marginHorizontal: 10,
        color: '#FFD700'
      },
 });
