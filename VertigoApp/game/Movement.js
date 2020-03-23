import Matter from "matter-js";
import {Dimensions} from "react-native";

const {width, height} = Dimensions.get("window");

let roadSpeed = 8;
let yDeltaition = 0;
let Y_MAX = height/2;

//----------------------------------------------------

const Physics = (entities, { time }) => {
    let engine = entities["physics"].engine;
    engine.world.gravity.y = 0; // no downward pull
    Matter.Engine.update(engine, time.delta); // move the simulation forward
    return entities;
  };

//----------------------------------------------------
const MoveRoad = (entities, { events }) =>
{
  let road1 = entities["road1"];
  let road2 = entities["road2"];
  let road3 = entities["road3"];
  let road4 = entities["road4"];
  let coin = entities["coin"];
  let coin2 = entities["coin2"];
  let coin3 = entities["coin3"];
  let coin4 = entities["coin4"];
  let coin5 = entities["coin5"];
  let coin6 = entities["coin6"];
  let coin7 = entities["coin7"];
  let coin8 = entities["coin8"];
  let coin9 = entities["coin9"];
  let coin10 = entities["coin10"];
  let coin11 = entities["coin11"];
  let coin12 = entities["coin12"];
  let coin13 = entities["coin13"];
  let coin14 = entities["coin14"];
  let coin15 = entities["coin15"];
  let coin16 = entities["coin16"];

  let e = events.find(x => x.type === "moveFace");

  road1.position =[ road1.position[0] - roadSpeed, road1.position[1]  ];
  road2.position =[road2.position[0] - roadSpeed, road2.position[1]];

  if (coin.position[0] <= -1 * (width-roadSpeed)){
    coin.position =[ width, coin.position[1]  ];
  } else
  {
    coin.position =[ coin.position[0] - roadSpeed, coin.position[1]  ];
  }
  if (coin2.position[0] <= -1 * (width-roadSpeed)){
    coin2.position =[ width, coin2.position[1]  ];
  } else
  {
    coin2.position =[ coin2.position[0] - roadSpeed, coin2.position[1]  ];
  }
  if (coin3.position[0] <= -1 * (width-roadSpeed)){
    coin3.position =[ width, coin3.position[1]  ];
  } else
  {
    coin3.position =[ coin3.position[0] - roadSpeed, coin3.position[1]  ];
  }
  if (coin4.position[0] <= -1 * (width-roadSpeed)){
    coin4.position =[ width, coin4.position[1]  ];
  } else
  {
    coin4.position =[ coin4.position[0] - roadSpeed, coin4.position[1]  ];
  }
  if (coin5.position[0] <= -1 * (width-roadSpeed)){
    coin5.position =[ width, coin5.position[1]  ];
  } else
  {
    coin5.position =[ coin5.position[0] - roadSpeed, coin5.position[1]  ];
  }
  if (coin6.position[0] <= -1 * (width-roadSpeed)){
    coin6.position =[ width, coin6.position[1]  ];
  } else
  {
    coin6.position =[ coin6.position[0] - roadSpeed, coin6.position[1]  ];
  }
  if (coin7.position[0] <= -1 * (width-roadSpeed)){
    coin7.position =[ width, coin7.position[1]  ];
  } else
  {
    coin7.position =[ coin7.position[0] - roadSpeed, coin7.position[1]  ];
  }
  if (coin8.position[0] <= -1 * (width-roadSpeed)){
    coin8.position =[ width, coin8.position[1]  ];
  } else
  {
    coin8.position =[ coin8.position[0] - roadSpeed, coin8.position[1]  ];
  }
  if (coin9.position[0] <= -1 * (width-roadSpeed)){
    coin9.position =[ width, coin9.position[1]  ];
  } else
  {
    coin9.position =[ coin9.position[0] - roadSpeed, coin9.position[1]  ];
  }
  if (coin10.position[0] <= -1 * (width-roadSpeed)){
    coin10.position =[ width, coin10.position[1]  ];
  } else
  {
    coin10.position =[ coin10.position[0] - roadSpeed, coin10.position[1]  ];
  }
  if (coin11.position[0] <= -1 * (width-roadSpeed)){
    coin11.position =[ width, coin11.position[1]  ];
  } else
  {
    coin11.position =[ coin11.position[0] - roadSpeed, coin11.position[1]  ];
  }
  if (coin12.position[0] <= -1 * (width-roadSpeed)){
    coin12.position =[ width, coin12.position[1]  ];
  } else
  {
    coin12.position =[ coin12.position[0] - roadSpeed, coin12.position[1]  ];
  }
  if (coin13.position[0] <= -1 * (width-roadSpeed)){
    coin13.position =[ width, coin13.position[1]  ];
  } else
  {
    coin13.position =[ coin13.position[0] - roadSpeed, coin13.position[1]  ];
  }
  if (coin14.position[0] <= -1 * (width-roadSpeed)){
    coin14.position =[ width, coin14.position[1]  ];
  } else
  {
    coin14.position =[ coin14.position[0] - roadSpeed, coin14.position[1]  ];
  }
  if (coin15.position[0] <= -1 * (width-roadSpeed)){
    coin15.position =[ width, coin15.position[1]  ];
  } else
  {
    coin15.position =[ coin15.position[0] - roadSpeed, coin15.position[1]  ];
  }
  if (coin16.position[0] <= -1 * (width-roadSpeed)){
    coin16.position =[ width, coin16.position[1]  ];
  } else
  {
    coin16.position =[ coin16.position[0] - roadSpeed, coin16.position[1]  ];
  }


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
  if(e) {
    let yDelta = e.y;
    console.log(yDelta);
    //so movement can only occur if car is within outer bounds
      //yDeltaition += t.delta.pageY;
      road1.position =
      [
        road1.position[0],
        road1.position[1]+yDelta
      ]
      if(road1.position[1]<-height/2)
        road1.position[1]=-height/2;
      if(road1.position[1]>height/2)
        road1.position[1]=height/2
      road2.position =
      [
        road2.position[0],
        road2.position[1]+yDelta
      ]
      if(road2.position[1]<-height/2)
              road2.position[1]=-height/2;
            if(road2.position[1]>height/2)
              road2.position[1]=height/2
      road3.position =
      [
        road3.position[0],
        road3.position[1]+yDelta
      ]
      if(road3.position[1]<-height/2)
              road3.position[1]=-height/2;
            if(road3.position[1]>height/2)
              road3.position[1]=height/2
      road4.position =
      [
        road4.position[0],
        road4.position[1]+yDelta
      ]
      if(road4.position[1]<-height/2)
              road4.position[1]=-height/2;
            if(road4.position[1]>height/2)
              road4.position[1]=height/2
      coin.position =
      [
        coin.position[0],
        coin.position[1]+yDelta
      ]
      coin2.position =
      [
        coin2.position[0],
        coin2.position[1]+yDelta
      ]
      coin3.position =
      [
        coin3.position[0],
        coin3.position[1]+yDelta
      ]
      coin4.position =
      [
        coin4.position[0],
        coin4.position[1]+yDelta
      ]
      coin5.position =
      [
        coin5.position[0],
        coin5.position[1]+yDelta
      ]
      coin6.position =
      [
        coin6.position[0],
        coin6.position[1]+yDelta
      ]
      coin7.position =
      [
        coin7.position[0],
        coin7.position[1]+yDelta
      ]
      coin8.position =
      [
        coin8.position[0],
        coin8.position[1]+yDelta
      ]
      coin9.position =
      [
        coin9.position[0],
        coin9.position[1]+yDelta
      ]
      coin10.position =
      [
        coin10.position[0],
        coin10.position[1]+yDelta
      ]
      coin11.position =
      [
        coin11.position[0],
        coin11.position[1]+yDelta
      ]
      coin12.position =
      [
        coin12.position[0],
        coin12.position[1]+yDelta
      ]
      coin13.position =
      [
        coin13.position[0],
        coin13.position[1]+yDelta
      ]
      coin14.position =
      [
        coin14.position[0],
        coin14.position[1]+yDelta
      ]
      coin15.position =
      [
        coin15.position[0],
        coin15.position[1]+yDelta
      ]
      coin16.position =
      [
        coin16.position[0],
        coin16.position[1]+yDelta
      ]
  };
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
