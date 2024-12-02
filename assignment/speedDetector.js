//Funtion checks speed limit and compute the penalties
function checkSpeed(speed) {
    const speedLimit = 70; //Set speed limit
    const kmPerDemeritPoint = 5;   //5km/h over the speed limit equals one demerit point

    if (speed <= speedLimit) {
        console.log("Ok");

    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);

        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}

checkSpeed(65); 
checkSpeed(80); 
checkSpeed(160); // Outcome: License suspended
checkSpeed(6);
checkSpeed(97); 
