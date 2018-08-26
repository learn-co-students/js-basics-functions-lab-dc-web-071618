function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

function distanceFromHqInFeet (blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet (start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

// // Code your solution in this file!
// const HQ = 42
// const block = 264
//
// function distanceFromHqInBlocks(street) {
//   let blocks;
//   if (street > HQ) {
//     blocks = street - HQ
//   } else if (street < HQ) {
//     blocks = HQ - street
//   }
//   return blocks
// }
//
// function distanceFromHqInFeet(street) {
//   let feet;
//   if (street > HQ) {
//     feet = (street - HQ) * 264
//   } else if (street < HQ) {
//     feet = (HQ - street) * 264
//   }
//   return feet
// }
// function distanceTravelledInFeet(street1, street2) {
//   let feet;
//   if (street1 > street2) {
//     feet = (street1 - street2) * 264
//   } else if (street1 < street2) {
//     feet = (street2 - street1) * 264
//   }
//   return feet
// }
//
// function calculatesFarePrice(start, destination) {
//   let fare;
//   if ((start - destination)*264 || (destination - start)*264 <= 399) {
//     fare = 0;
//   } else if ((start > destination)*264 >= 400) {
//       fare = Number.parseFloat(((start - destination)*264)*(2/100) - 8)
//   } else if ((start < destination)*264 <=1999) {
//       fare = Number.parseFloat(((destination - start)*264)*(2/100)-8)
//   } else if ((start - destination)*264 || (destination - start)*264 > 2000) {
//       fare = 25;
//   } else if ((start - destination)*264 || (destination - start)*264 > 2501) {
//     fare = 'cannot travel that far'
//   }
//   return fare
// }
