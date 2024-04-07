function addMinutes(input){

let hours = Number(input[0]);
let minutes = Number(input[1]);
let minutesAdd = minutes + 15;

if(minutesAdd >= 60) {
    hours += 1;
    minutesAdd = minutesAdd - 60;
}
if(hours == 24){
    hours = 0;
}
if(minutesAdd <= 9){
    console.log(`${hours}:0${minutesAdd}`);
} else {
    console.log(`${hours}:${minutesAdd}`);
}
}
addMinutes(["00","00"])