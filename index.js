// Code your solution in this file!
function distanceFromHqInBlocks(start) {
  return start > 42 ? start - 42 : 42 - start;
}

function distanceFromHqInFeet(start) {
  return distanceFromHqInBlocks(start) * 264
}

function distanceTravelledInFeet(start, finish) {
  return finish > start ? (finish - start) * 264 : (start - finish) * 264
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far'
  }
}
