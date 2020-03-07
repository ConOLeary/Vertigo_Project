import Matter from "matter-js";
import {Dimensions} from "react-native";

const {width, height} = Dimensions.get("window");

let roadSpeed = 8;

//----------------------------------------------------

const Physics = (entities, { time }) => {
    let engine = entities["physics"].engine;
    engine.world.gravity.y = 0; // no downward pull
    Matter.Engine.update(engine, time.delta); // move the simulation forward
    return entities;
  };

//----------------------------------------------------
const MoveRoad = (entities, {touches, time}) =>
{
  let road1 = entities["road1"];
  let road2 = entities["road2"];

  if (road1.position[0] <= -1 * (width-roadSpeed)){
    road1.position =[ width, road1.position[1]  ];
  } else
  {
    road1.position =[ road1.position[0] - roadSpeed, road1.position[1]  ];
  }

  if (road2.position[0] <= -1 * (width-roadSpeed)){
    road2.position =[  width, road2.position[1]  ];
  } else {
    road2.position =[road2.position[0] - roadSpeed, road2.position[1]];
  }

//  let engine = entities["physics"].engine;
  //engine.world.gravity.y = 0; // no downward pull
  //Matter.Engine.update(engine, time.delta); // move the simulation forward

  return entities;
};

//----------------------------------------------------

const MoveCar = (entities, {touches, time}) =>
{
 touches.filter(t => t.type === "move").forEach(t =>
   {
     let car = entities["car"];
     if (car && car.position)
     {
       car.position =
       [
         car.position[0],
         car.position[1] + t.delta.pageY
       ];
   }
 });

 return entities;
};

export {MoveRoad, MoveCar, Physics};
