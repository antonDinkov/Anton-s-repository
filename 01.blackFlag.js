function blackFlag(arr){

let arrToNum = arr.map(Number);
let daysCount = arrToNum[0];
let endTarget = arrToNum[2];
let gathered = 0;
for(let i = 1; i <= daysCount; i++){
    let plunderPerDay = arrToNum[1];
    if(i % 3 ===0){
        plunderPerDay *= 1.50;
    }
    gathered += plunderPerDay;
    if(i % 5 ===0){
        gathered *= 0.70;
    }
}
if(gathered>=endTarget){
    console.log(`Ahoy! ${gathered.toFixed(2)} plunder gained.`);
}else{
    let percentage = (gathered/endTarget)*100;
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
}

}
//blackFlag(['5', '40', '100']);
blackFlag(['10', '20', '380']);