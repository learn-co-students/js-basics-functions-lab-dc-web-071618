// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(begBlock, endBlock) {
  return Math.abs(begBlock - endBlock) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let response;

  switch (true) {
    case distance < 400:
      response = 0;
      break;
    case distance > 2500:
      response = 'cannot travel that far';
      break;
    case distance > 2000:
      response = 25;
      break;
    default:
      response = (distance - 400) * .02;
  }
  return response;
}
