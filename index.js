let headQuarters = 42
let start
let destination 

function distanceFromHqInBlocks(destination){
        return Math.abs(headQuarters-destination)
}

function distanceFromHqInFeet(destination){
    return (distanceFromHqInBlocks(destination))*264
}

function distanceTravelledInFeet(start,destination) {
        return (Math.abs(destination-start))*264
}

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start,destination) <=400 ) {
        return 0
        console.log ("gives customer free sample")
    } else if (distanceTravelledInFeet(start,destination)>400 && distanceTravelledInFeet(start,destination)<2000){
        return 2.56
       console.log ("charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)")
    } else if (distanceTravelledInFeet(start,destination)>2000 && distanceTravelledInFeet(start,destination)<2500){
        return 25
        console.log ("charges 25 dollars for a distance over 2000 feet")
    } else if (distanceTravelledInFeet(start,destination)>2500){
        return "cannot travel that far"
        console.log ("does not allow rides over 2500 feet")
    }
}