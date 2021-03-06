function Point(x, y) {
  return {
    x: x,
    y: y
  };
}

function Zombie() {
  return {
    id: parseInt(inputs[0]),
    pos: new Point(parseInt(inputs[1]), parseInt(inputs[2])),
    next: new Point(parseInt(inputs[3]), parseInt(inputs[4])),
    target: null,
    turnToKill: null
  };
}

function Human() {
  return {
    id: parseInt(inputs[0]),
    pos: new Point(parseInt(inputs[1]), parseInt(inputs[2])),
    threats: [],
    isDoomedIn: null
  };
}
