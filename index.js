// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    let street = 42;
    return Math.abs(street - someValue);
}

function distanceFromHqInFeet(someValue){
    return 264 * distanceFromHqInBlocks(someValue);
}

function distanceTravelledInFeet(firstNumber, secondNumber){
    return Math.abs(firstNumber - secondNumber) * 264
}

function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400){
        return 0;
    }
    else if (feet > 400 && feet < 2000){
        console.log(feet);
        return (feet-400) * 0.02
    }
    else if (feet >= 2000 && feet <= 2500){
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}