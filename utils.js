function threatLevels(player, zombies, humans) {
  humans.push({
    pos: player,
    threats: []
  });
  for (var zi in zombies) {
    var z = zombies[zi];
    z.target = closest(z, humans);
    z.target.threats.push(z);
  }
  humans.pop();
}

function canBeSaved(player, human) {
  if (!human.threats.length) {
    return false;
  }
  var turnsToReach = (distance(player, human.pos) / 1000);
  var zombie = closest(human, human.threats);
  var zombieKillsIn = distance(human.pos, zombie.pos) / 400;
  return turnsToReach - zombieKillsIn;
}

function closestHumanThatCanBeSaved(player, humans) {
  var canBeSavedArr = [];
  for (var hi in humans) {
    var human = humans[hi];
    human.isDoomedIn = canBeSaved(player, human);
    var inserted = false;
    for (var i in canBeSavedArr) {
      if (human.isDoomedIn < canBeSavedArr[i].isDoomedIn) {
        canBeSavedArr.splice(i, 0, human);
        inserted = true;
      }
    }
    if (!inserted) {
      canBeSavedArr.push(human);
    }
  }
  return canBeSavedArr[0];
}
