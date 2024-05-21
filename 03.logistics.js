function logistics(input){

let cargoNum = Number(input[0]);

let cargoTotal = 0;
let cargoBus = 0;
let cargoTruck = 0;
let cargoTrain = 0;
let spentMoney = 0;

for(let i = 1;i <= cargoNum;i++){
    let currentCargo = Number(input[i]);
    cargoTotal += currentCargo;
    if(currentCargo <= 3){
        cargoBus += currentCargo;
        spentMoney += (currentCargo*200);
    }else if(currentCargo <= 11){
        cargoTruck += currentCargo;
        spentMoney += (currentCargo*175);
    }else{
        cargoTrain += currentCargo;
        spentMoney += (currentCargo*120);
    }
}

let averagePricePerTone = spentMoney/cargoTotal;
let busPercen = (cargoBus/cargoTotal)*100;
let truckPercent = (cargoTruck/cargoTotal)*100;
let trainPercent = (cargoTrain/cargoTotal)*100;

console.log(`${averagePricePerTone.toFixed(2)}
${busPercen.toFixed(2)}%
${truckPercent.toFixed(2)}%
${trainPercent.toFixed(2)}%`);

}
logistics(['4','1','5','16','3'])