function equalPairs(input){

let pairsNum = Number(input[0]);
let minValue = Number.MAX_SAFE_INTEGER;
let maxValue = Number.MIN_SAFE_INTEGER;
let difference = Number.MIN_SAFE_INTEGER;
let previousValue;

for(let i = 1;i <= pairsNum*2;i += 2){
    let currentValue = Number(input[i]) + Number(input[i+1]);
    if(currentValue <= minValue){
        minValue = currentValue
    }
    if(currentValue >= maxValue){
        maxValue = currentValue
    }
    if(i!==1){
        let currentDifference = Math.abs(currentValue - previousValue);
        if(currentDifference > difference){
            difference = currentDifference;
        }
    }
    previousValue = currentValue;
}

if(minValue === maxValue){
    console.log(`Yes, value=${minValue}`);
}else{
    console.log(`No, maxdiff=${difference}`);
}

}
equalPairs(['7','34','-33','52','12','-32','32','23','41','7','25','34','23','124','21'])
//equalPairs(['2','1','2','2','2'])
//equalPairs(['4','1','1','3','1','2','2','0','0'])