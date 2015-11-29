function dangerZone(zombies, humans) {
  var dangerList = [];
  for (var zi in zombies) {
    var z = zombies[zi];
    var h;
    for (var hi in humans) {
      h = humans[hi];

    }
    if (true) {
      h.threats.push(z);
      z.target = h;
    }
  }
}

function canBeSaved(player, human) {
  var turnsToReach = (distance(player, human.pos) / 1000);
  var zombieKillsIn = distance(human.pos, human.threats) / 400;
  return turnsToReach <= zombieKillsIn;
}

function closestHumanThatCanBeSaved(player, humans, zombies) {
  var canBeSavedArr = [];
  for (var hi in humans) {
    var human = humans[hi];
    if (canBeSaved(player, human)) {
      canBeSavedArr.push(human);
    }
  }
  return closest(player, canBeSavedArr);
}
