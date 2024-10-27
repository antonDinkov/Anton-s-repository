function timeToWalk(steps, stepLength, speed) {

let length = steps * stepLength;
let breaks = Math.floor(length/500);
let speedInM = speed / 3.6;
let seconds = length/speedInM + breaks*60;

let timeInMin = Math.floor(seconds/60);
let timeInHours = Math.floor(timeInMin/60);
let timeInSeconds = Math.ceil(seconds%60);
if (timeInHours < 10) {
    timeInHours = '0' + timeInHours;
}
if (timeInMin < 10) {
    timeInMin = '0' + timeInMin;
}
if (timeInSeconds < 10) {
    timeInSeconds = '0' + timeInSeconds;
}
console.log(`${timeInHours}:${timeInMin}:${timeInSeconds}`);

}
timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5)