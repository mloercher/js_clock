const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    
    const now = new Date();

    // pulling seconds info from Date() object
    const seconds = now.getSeconds();
    console.log(seconds)
    // ensuring hands move 360 deg in 60 seconds. +90 offsets transform:rotate(90deg) in css
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    // sets css transform to rotate hand 360 deg in 60 seconds
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const minutes = now.getMinutes();
    console.log(minutes)
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`

    const hours = now.getHours();
    const hourDegrees = ((hours / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setDate, 1000);

