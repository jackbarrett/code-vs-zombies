function Zombie(){
  return {
    id: parseInt(inputs[0]),
    posX : parseInt(inputs[1]),
    posY : parseInt(inputs[2]),
    destX :parseInt(inputs[3]),
    destY : parseInt(inputs[4])
  };
}

function Human(){
  return{
    id : parseInt(inputs[0]),
    posX : parseInt(inputs[1]),
    posY : parseInt(inputs[2])
  };
}
