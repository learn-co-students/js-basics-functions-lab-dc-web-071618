// Code your solution in this file!
function distanceFromHqInBlocks(number) {
  return Math.abs(number - 42);
}

function distanceFromHqInFeet(number) {
  return distanceFromHqInBlocks(number) * 264;
}

function distanceTravelledInFeet(number1, number2) {
  return Math.abs(number1 - number2) * 264;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  }
  else if (distance < 2000) {
    return 0.02 * (distance - 400);
  }
  else if (distance > 2000 && distance < 2500) {
    return 25
  }
  else {
    return 'cannot travel that far'
  }
}
