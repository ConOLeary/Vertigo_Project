import Matter from "matter-js";

const MoveCar = (entities, { touches, time }) => {
    let engine = entities.physics.engine;
    let car = entities.car.body;

    touches.filter(t => t.type === "move").forEach(t =>
      {
        car.position = [
        car.position[0] + t.delta.pageX,
        car.position[1] + t.delta.pageY
      ];
    });

    Matter.Engine.update(engine, time.delta);

    return entities;
};

export { MoveCar };
