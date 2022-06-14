const secondHand = document.querySelector('.second-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    console.log(seconds)
    const secondsDegrees =((seconds/60)* 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
}

setInterval(setDate, 1000);

