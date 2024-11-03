function validityChecker(x1, y1, x2, y2){

function distanceCheck (a, b, c, d) {
    return Math.sqrt(Math.pow(c-a, 2) + Math.pow(d-b, 2));
}
let firstToZero = distanceCheck(x1, y1, 0, 0);
let secondToZero = distanceCheck(x2, y2, 0, 0);
let firstToSecond = distanceCheck(x1, y1, x2, y2);
if (firstToZero % 1 === 0) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
} else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
}

if (secondToZero % 1 === 0) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
} else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
}

if (firstToSecond % 1 === 0) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
} else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}

}
validityChecker(3, 0, 0, 4)
validityChecker(2, 1, 1, 1)