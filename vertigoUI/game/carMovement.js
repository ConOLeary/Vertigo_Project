

const MoveCar = (entities, { touches }) =>
{
  touches.filter(t => t.type === "move").forEach(t =>
    {
    let car = entities[t.id];
    if (car  && car.position) {
      car.position = [
        car.position[0] + t.delta.pageX,
        car.position[1] + t.delta.pageY
      ];
    }
  });

  return entities;
};

export { MoveCar };
