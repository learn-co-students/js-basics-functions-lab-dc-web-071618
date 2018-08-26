// Code your solution in this file!
function distanceFromHqInBlocks(numOfBlocks) {
  if (numOfBlocks > 42) {
    return numOfBlocks - 42;
  } else {
    return 42 - numOfBlocks;
  }
}

function distanceFromHqInFeet(numOfBlocks) {
  return distanceFromHqInBlocks(numOfBlocks) * 264;
}

// function distanceTravelledInFeet(a, b) {
//   return Math.abs(a - b) * 264;
// }

function distanceTravelledInFeet(a, b) {
  if (a < b) {
    return (b - a) * 264;
  } else {
    return (a - b) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
