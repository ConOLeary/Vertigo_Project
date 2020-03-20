import Matter from "matter-js";
import {Dimensions} from "react-native";

const {width, height} = Dimensions.get("window");

let roadSpeed = 8;
let yPosition = 0;
let Y_MAX = 500;

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
  let road3 = entities["road3"];
  let road4 = entities["road4"];

  road1.position =[ road1.position[0] - roadSpeed, road1.position[1]  ];
  road2.position =[road2.position[0] - roadSpeed, road2.position[1]];

  if (road3.position[0] <= -1 * (width-roadSpeed)){
    road3.position =[ width, road3.position[1]  ];
  } else
  {
    road3.position =[ road3.position[0] - roadSpeed, road3.position[1]  ];
  }

  if (road4.position[0] <= -1 * (width-roadSpeed)){
    road4.position =[  width, road4.position[1]  ];
  } else {
    road4.position =[road4.position[0] - roadSpeed, road4.position[1]];
  }
  touches.filter(t => t.type === "move").forEach(t =>
  {
    if (  (road1 && road1.position && road2 && road2.position &&
        road3 && road3.position && road4 && road4.position) &&
        (((yPosition < Y_MAX) &&
        (yPosition > -Y_MAX)) ||
        ((yPosition > Y_MAX && t.delta.pageY < 0) ||
        (yPosition < -Y_MAX && t.delta.pageY > 0)))  )
    {
      yPosition += t.delta.pageY;
      road1.position =
      [
        road1.position[0],
        road1.position[1] + t.delta.pageY
      ]
      road2.position =
      [
        road2.position[0],
        road2.position[1] + t.delta.pageY
      ]
      road3.position =
      [
        road3.position[0],
        road3.position[1] + t.delta.pageY
      ]
      road4.position =
      [
        road4.position[0],
        road4.position[1] + t.delta.pageY
      ]
    }
  });
    // car.position =
    // [
    //   car.position[0],
    //   car.position[1] + t.delta.pageY
    // ];

  return entities;
};

//----------------------------------------------------

const MoveCar = (entities, {touches, time}) =>
{
 touches.filter(t => t.type === "move").forEach(t =>
   {
     let car = entities["car"];
  //    if (car && car.position)
  //    {
  //      car.position =
  //      [
  //        car.position[0],
  //        car.position[1] + t.delta.pageY
  //      ];
  //  }
 });

 return entities;
};

export {MoveRoad, MoveCar, Physics};
