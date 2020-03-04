import Matter from "matter-js";
import {Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const MoveRoad = (entities, { touches, time }) =>
{
  let engine = entities.physics.engine;
  let road1 = entities.bg1.body;
  let road2 = entities.bg2.body;

  for(let i=1; i<=3; i++)
  {
    if (road1.position.x <= (-1 * width)){
      Matter.Body.setPosition(road1, {x: width, y: 0 })
    }
    else{
      Matter.Body.translate(road1, {x: -2, y: 0 })
    }
    if (road2.position.x <= (-1 * width)){
      Matter.Body.setPosition(road2, {x: width, y: 0 })
    }
    else{
      Matter.Body.translate(road2, {x: -2, y: 0 })
    }
  }

    Matter.Engine.update(engine, time.delta);
    return entities;
};

export { MoveRoad };
