function distance(p1, p2) {
  return Math.sqrt(Math.pow(Math.abs(p1.x - p2.x), 2) + Math.pow(Math.abs(p1.y - p2.y), 2));
}

function closest(p1, pArr) {
  p1 = p1.pos || p1;
  var e;
  var shortest = 1000000;
  for (var i in pArr) {
    var dist = distance(p1, pArr[i].pos);
    if (dist < shortest) {
      e = pArr[i];
      shortest = dist;
    }
  }
  return e;
}
