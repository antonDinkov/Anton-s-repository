function counterStrike(arr){

let energy = arr.shift();
let command = arr.shift();
let winsCounter = 0
while(command !== 'End of battle'){
    command = Number(command);
    if(energy < command){
        console.log(`Not enough energy! Game ends with ${winsCounter} won battles and ${energy} energy`);
        return;
    }
    energy -= command;
    winsCounter++;
    if(winsCounter % 3 === 0){
        energy += winsCounter;
    }
    
    command = arr.shift();
}
console.log(`Won battles: ${winsCounter}. Energy left: ${energy}`);

}
//counterStrike(['100','10','10','10','1','2','3','73','10']);
counterStrike(['200','54','14','28','13','End of battle']);