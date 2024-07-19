function softUniReception(arr){
let arrToNum = arr.map(Number);
let studentsCount = arrToNum.pop();
let capacityPerHour = 0;
for(el of arrToNum){
    capacityPerHour += el;
}
let hourCounter = 0
for(let top = studentsCount; top >0; top -= capacityPerHour){
    hourCounter++;
    if(hourCounter % 4 === 0){
        hourCounter++;
    }
}
console.log(`Time needed: ${hourCounter}h.`);

}
//softUniReception(['5', '6', '4', '20']);
softUniReception(['1', '2', '3', '45']);