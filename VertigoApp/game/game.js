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
import { MoveCar, MoveRoad,Physics } from "./Movement"
import { RNCamera } from 'react-native-camera';
import bgImage from "./grass.jpg"

const { width, height } = Dimensions.get("window");
coinYbuffer = 420;
coinXspacing = 50;
coinXinitialBuffer = 667;
roadHeight = height * 0.8;
amplitude = roadHeight / 2;
const angleAmplitude = 50;
freqMod = 3;

export default class Game extends Component
{
  constructor(props)
  {
       super(props);
       this.state = {running: true, faces: [], previousY: 0};
       this.gameEngine = null;
       //this.entities = this.setupWorld();
   }
   /*doUpdate = () => {

    console.log("pog");
   }*/
   doUpdate = () => {
    this.gameEngine.publishEvent({type:"moveFace",y:(this.getY()-height/2-this.state.previousY)});
    this.setState({previousY:(this.getY()-height/2)});
   }
  componentDidMount() {
    this.interval = setInterval(()=> {this.doUpdate},8);
    }
  /*componentWillUnmount() {
    clearInterval(this.interval);
  }*/
getAngle = () => {
              return this.state.faces.length>0? this.state.faces[0].yawAngle : 0.0
       }

       getY = () => {
            let angle=this.getAngle();
            //angle is positive when turning left and negative turning right
            if (angle<(-1)*angleAmplitude)
                return height;
            if (angle>angleAmplitude)
                return 0;
            /*simplify function map(x, in_min, in_max, out_min, out_max) {
                         return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
                       }
               in_min is amp, in_max is -amp, out_max is height and out_min is 0*/
            let mappedValue = (angle-angleAmplitude)*height/(-2*angleAmplitude);
            return mappedValue
       }

    faceFound =({ faces }) => {
       this.setState({faces});
       let delta=this.getY()-height/2-this.state.previousY
       if(Math.abs(delta)>1){
           this.gameEngine.publishEvent({type:"moveFace",y:(delta)});
           this.setState({previousY:(this.getY()-height/2)});
       }
    }

   setupWorld = () =>
   {

     let engine = Matter.Engine.create({ enableSleeping: false });
     let world = engine.world;
     //width & length properties here don't actually define
     let car = Matter.Bodies.rectangle(50, height/2, 120, 60);
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

    // let coin = Matter.Bodies.circle(COIN_SPACING, height/2, 300);
    //  let coins = [];
    //  for(i = 0; i < AMOUNT_COINS; i++)
    //  {
    //     let coin = Matter.Bodies.circle(i*COIN_SPACING, Math.sin(i*COIN_SPACING), 30);
    //     coins.push(coin);
    //  }
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
           //exported traits
           car: { body: car, position: [50,  height/2], size:[120, 60], renderer: Car},
           coin: { body: coin, position: [coinXinitialBuffer + coinXspacing,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing)))], size:[30, 30], renderer: Coin},
           coin2: { body: coin2, position: [coinXinitialBuffer + coinXspacing*2,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*2)))], size:[30, 30], renderer: Coin},
           coin3: { body: coin2, position: [coinXinitialBuffer + coinXspacing*3,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*3)))], size:[30, 30], renderer: Coin},
           coin4: { body: coin2, position: [coinXinitialBuffer + coinXspacing*4,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*4)))], size:[30, 30], renderer: Coin},
           coin5: { body: coin2, position: [coinXinitialBuffer + coinXspacing*5,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*5)))], size:[30, 30], renderer: Coin},
           coin6: { body: coin2, position: [coinXinitialBuffer + coinXspacing*6,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*6)))], size:[30, 30], renderer: Coin},
           coin7: { body: coin2, position: [coinXinitialBuffer + coinXspacing*7,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*7)))], size:[30, 30], renderer: Coin},
           coin8: { body: coin2, position: [coinXinitialBuffer + coinXspacing*8,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*8)))], size:[30, 30], renderer: Coin},
           coin9: { body: coin2, position: [coinXinitialBuffer + coinXspacing*9,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*9)))], size:[30, 30], renderer: Coin},
           coin10: { body: coin2, position: [coinXinitialBuffer + coinXspacing*10,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*10)))], size:[30, 30], renderer: Coin},
           coin11: { body: coin2, position: [coinXinitialBuffer + coinXspacing*11,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*11)))], size:[30, 30], renderer: Coin},
           coin12: { body: coin2, position: [coinXinitialBuffer + coinXspacing*12,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*12)))], size:[30, 30], renderer: Coin},
           coin13: { body: coin2, position: [coinXinitialBuffer + coinXspacing*13,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*13)))], size:[30, 30], renderer: Coin},
           coin14: { body: coin2, position: [coinXinitialBuffer + coinXspacing*14,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*14)))], size:[30, 30], renderer: Coin},
           coin15: { body: coin2, position: [coinXinitialBuffer + coinXspacing*15,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*15)))], size:[30, 30], renderer: Coin},
           coin16: { body: coin2, position: [coinXinitialBuffer + coinXspacing*16,  height - (coinYbuffer + (amplitude*-Math.cos(freqMod*coinXspacing*16)))], size:[30, 30], renderer: Coin},
       }//
   }

   render() {
         return (
          <ImageBackground source={bgImage} style={styles.container} >
             <RNCamera
                                ref={ref => {
                                 this.camera = ref;
                                }}
                                style={{
                                                                    flex: 0.1,
                                                                    width: '1%',
                                                                }}
                                type={RNCamera.Constants.Type.front}
                                captureAudio = {false}
                                androidCameraPermissionOptions={{
                                title: 'Permission to use camera',
                                message: 'We need your permission to use your camera',
                                buttonPositive: 'Ok',
                                buttonNegative: 'Cancel',
                                }}
                                faceDetectionLandmarks={
                                     RNCamera.Constants.FaceDetection.Landmarks
                                     ? RNCamera.Constants.FaceDetection.Landmarks.all
                                     : undefined
                                }
                                faceDetectionClassifications={
                                     RNCamera.Constants.FaceDetection.Classifications
                                     ? RNCamera.Constants.FaceDetection.Classifications.all
                                     : undefined
                                }
                                onFacesDetected = {this.faceFound}
                          >
                          </RNCamera>
                 <GameEngine
                     ref={(ref) => { this.gameEngine = ref; }}
                     style={styles.gameContainer}
                     running={this.state.running}
                     systems={[Physics, MoveCar, MoveRoad]}
                     // add move coin
                     entities={this.setupWorld()}>
                     <StatusBar hidden={true} />
                 </GameEngine>
              </ImageBackground>
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
