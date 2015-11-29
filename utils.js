function threatLevels(zombies, humans) {
  var dangerList = [];
  for (var zi in zombies) {
    var z = zombies[zi];
    z.target = closest(z, humans);
    z.target.threats.push(z);
  }
}

function canBeSaved(player, human) {
  if(!human.threats.length){
    return true;
  }
  var turnsToReach = (distance(player, human.pos) / 1000);
  var zombie = closest(human, human.threats);
  var zombieKillsIn = distance(human.pos, zombie.pos) / 400;
  return turnsToReach <= zombieKillsIn;
}

function closestHumanThatCanBeSaved(player, humans) {
  var canBeSavedArr = [];
  for (var hi in humans) {
    var human = humans[hi];
    if (canBeSaved(player, human)) {
      canBeSavedArr.push(human);
    }
  }
  return closest(player, canBeSavedArr);
}
